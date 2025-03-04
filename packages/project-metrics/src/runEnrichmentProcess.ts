import { definitions } from "./projectDefinitions";
import * as fs from "fs";
import * as path from "path";

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
 * Parse command-line arguments to get the project ID if specified
 * @returns The project ID from command line arguments, or undefined if not specified
 */
function parseArgs(): string | undefined {
  // Look for --project=projectId or -p projectId format
  const args = process.argv.slice(2);

  // Check for --project=projectId format
  const projectArg = args.find((arg) => arg.startsWith("--project="));
  if (projectArg) {
    return projectArg.split("=")[1];
  }

  // Check for -p projectId format
  const pIndex = args.indexOf("-p");
  if (pIndex !== -1 && pIndex + 1 < args.length) {
    return args[pIndex + 1];
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
  // Get project ID from command line arguments
  const projectId = parseArgs();

  // Filter definitions if a project ID is specified
  const projectsToProcess = projectId
    ? definitions.filter((def) => def.project.getMetadata().id === projectId)
    : definitions;

  if (projectId && projectsToProcess.length === 0) {
    console.error(`Project with ID "${projectId}" not found in definitions`);
    return;
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
}

runEnrichmentProcess().catch((error) => {
  console.error("Error running enrichment process:", error);
});
