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

async function runEnrichmentProcess() {
  // Create a container for all enriched data
  const allEnrichedData: any = {};

  for (const definition of definitions) {
    const { project, strategies, options } = definition;
    const projectId = project.getMetadata().id;

    // Initialize data container for this project
    allEnrichedData[projectId] = {
      metadata: project.getMetadata(),
      enrichedData: {},
    };

    for (const strategy of strategies) {
      const strategyOptions = options[strategies.indexOf(strategy)];
      const result = await strategy.enrich(project, strategyOptions);

      if (result.success) {
        console.log(`Enriched data for project ${projectId}:`, result.data);

        // Store the enriched data by strategy ID
        allEnrichedData[projectId].enrichedData[strategy.id] = result.data;
      } else {
        console.error(`Failed to enrich project ${projectId}:`, result.error);
      }
    }
  }

  // Ensure the data directory exists
  const dataDir = path.join(__dirname, "../data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  try {
    // Save only the latest data file - no timestamp in filename
    const latestFilePath = path.join(dataDir, "latest-enriched-data.json");
    fs.writeFileSync(
      latestFilePath,
      JSON.stringify(allEnrichedData, jsonReplacer, 2)
    );
    console.log(`Enriched data saved to ${latestFilePath}`);
  } catch (error) {
    console.error("Error saving enriched data:", error);
  }
}

runEnrichmentProcess().catch((error) => {
  console.error("Error running enrichment process:", error);
});
