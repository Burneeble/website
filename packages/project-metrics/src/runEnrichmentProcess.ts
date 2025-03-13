import { definitions } from "./projectDefinitions";
import * as fs from "fs";
import * as path from "path";
import { exit } from "process";

/**
 * Custom replacer function for JSON.stringify to handle BigInt values
 * Converts BigInt to strings with a special format that can be identified
 */
function jsonReplacer(key: string, value: any): any {
  // Convert BigInt to a string representation
  if (typeof value === "bigint") {
    return value.toString() + "n"; // Append 'n' to identify BigInt values
  }
  return value;
}

/**
 * Parse command-line arguments to get the project ID(s) if specified
 * @returns Array of project IDs from command line arguments, or undefined if not specified
 */
function parseArgs(): string[] | undefined {
  const args = process.argv.slice(2);

  // Check for --project=projectId format
  const projectArg = args.find((arg) => arg.startsWith("--project="));
  if (projectArg) {
    const projectValue = projectArg.split("=")[1];
    if (projectValue) {
      return projectValue
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id.length > 0);
    }
  }

  // Check for -p projectId format
  const pIndex = args.indexOf("-p");
  if (pIndex !== -1 && pIndex + 1 < args.length) {
    const projectValue = args[pIndex + 1];
    if (projectValue) {
      return projectValue
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id.length > 0);
    }
  }

  return undefined;
}

/**
 * Save project data to a JSON file
 * @param projectId The ID of the project
 * @param projectData The project data to save
 * @param dataDir The directory to save the file in
 */
function saveProjectData(
  projectId: string,
  projectData: any,
  dataDir: string
): void {
  console.log(`Saving data for project ${projectId}`);
  const filePath = path.join(dataDir, `${projectId}.json`);
  try {
    fs.writeFileSync(filePath, JSON.stringify(projectData, jsonReplacer, 2));
    console.log(`Project data saved to ${filePath}`);
  } catch (error) {
    console.error(`Error saving data for project ${projectId}:`, error);
  }
}

async function runEnrichmentProcess() {
  // Get project IDs from command line arguments
  const projectIds = parseArgs();

  // Filter definitions if project IDs are specified
  const projectsToProcess = projectIds
    ? definitions.filter((def) =>
        projectIds.includes(def.project.getMetadata().id)
      )
    : definitions;

  if (projectIds && projectsToProcess.length === 0) {
    console.error(`No projects found matching IDs: "${projectIds.join(", ")}"`);
    return;
  }

  if (projectIds && projectsToProcess.length < projectIds.length) {
    const foundIds = projectsToProcess.map(
      (def) => def.project.getMetadata().id
    );
    const missingIds = projectIds.filter((id) => !foundIds.includes(id));
    console.warn(
      `Some requested projects were not found: ${missingIds.join(", ")}`
    );
  }

  // Ensure the data directory exists
  const dataDir = path.join(__dirname, "../data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  for (const definition of projectsToProcess) {
    const { project, strategies, options } = definition;
    const currentProjectId = project.getMetadata().id;

    console.log(`Processing project: ${currentProjectId}`);

    // Initialize data container for this project
    const projectData = {
      metadata: project.getMetadata(),
      enrichedData: {},
    };

    for (const strategy of strategies) {
      const strategyOptions = options[strategies.indexOf(strategy)];
      const result = await strategy.enrich(project, strategyOptions);

      if (result.success) {
        console.log(
          `Enriched data for project ${currentProjectId} with strategy ${strategy.id}`
        );

        // Store the enriched data by strategy ID
        (projectData.enrichedData as any)[strategy.id] = result.data;
      } else {
        console.error(
          `Failed to enrich project ${currentProjectId} with strategy ${strategy.id}:`,
          result.error
        );
      }
    }

    // Save individual project file
    saveProjectData(currentProjectId, projectData, dataDir);
  }

  console.log("All enrichment processes completed.");
  exit(0);
}

runEnrichmentProcess().catch((error) => {
  console.error("Error running enrichment process:", error);
});
