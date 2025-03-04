import { EnrichedDataExporter } from "../data/EnrichedDataExporter";
import { CryptoEVMProjectMetadata } from "../core/ProjectTypes";
import { EVMProjectData } from "./EVMProjectEnrichmentStrategy";

/**
 * Example demonstrating how to use the EnrichedDataExporter with typed data
 *
 * This example shows how to:
 * - Get the latest enriched data with proper typing
 * - Access specific strategy data with type safety
 * - Work with specific project types and their metadata
 */
async function dataExporterExample() {
  // Create a new exporter instance
  const exporter = new EnrichedDataExporter();

  console.log("--- EnrichedDataExporter Example with Type Safety ---");

  // Check if data file exists
  if (!exporter.dataFileExists()) {
    console.log('No data file found. Run "yarn enrich" to generate data.');
    return;
  }

  // Get all available project IDs
  console.log("\n1. Available projects:");
  const projectIds = exporter.getProjectIds();

  if (projectIds.length === 0) {
    console.log("No projects found in latest data.");
    return;
  }

  console.log(`Found ${projectIds.length} project(s):`);
  projectIds.forEach((id) => {
    console.log(` - ${id}`);
  });

  // Example: Get data for a specific project with proper typing
  if (projectIds.length > 0) {
    const projectId = projectIds[0];

    // Get project data with proper typing for EVM projects
    const projectData =
      exporter.getProjectData<CryptoEVMProjectMetadata>(projectId);

    if (projectData) {
      console.log(`\n2. Data for project "${projectId}":`);

      // Access typed metadata
      const { name, symbol, contractAddress, chainName } = projectData.metadata;
      console.log(
        `Project: ${name} (${symbol || "No symbol"}) on ${chainName}`
      );
      console.log(`Contract: ${contractAddress}`);

      // Get EVM-specific data directly with proper typing
      const evmData = exporter.getEVMData(projectId);

      if (evmData) {
        console.log("\n3. EVM-specific metrics:");
        console.log(`Transactions: ${evmData.transactions}`);
        console.log(`Events: ${evmData.events}`);

        // BigInt needs special formatting for display
        console.log(`ETH inflow: ${evmData.ethInflow.toString()} wei`);
        console.log(`ETH outflow: ${evmData.ethOutflow.toString()} wei`);

        // Calculate ETH balance (inflow - outflow)
        const ethBalance = evmData.ethInflow - evmData.ethOutflow;
        console.log(`ETH balance: ${ethBalance.toString()} wei`);

        // Demonstrate converting from wei to ETH for display
        const ethInflow = Number(evmData.ethInflow) / 10 ** 18;
        const ethOutflow = Number(evmData.ethOutflow) / 10 ** 18;
        console.log(`ETH inflow: ${ethInflow.toFixed(8)} ETH`);
        console.log(`ETH outflow: ${ethOutflow.toFixed(8)} ETH`);
      } else {
        console.log("No EVM data found for this project.");
      }

      // Example: Using generic method for accessing strategy data
      console.log("\n4. Accessing strategy data with generic method:");
      const evmDataGeneric = exporter.getStrategyData(
        projectId,
        "evm-project-data"
      );

      if (evmDataGeneric) {
        console.log(
          `Transactions (generic access): ${evmDataGeneric.transactions}`
        );
      }
    } else {
      console.log(`No data found for project "${projectId}"`);
    }
  }

  // Example: Work with the complete dataset
  console.log("\n5. Working with the complete dataset:");
  const allData = exporter.getLatestData();

  // Example of typed iteration
  console.log("Project transaction summary:");
  for (const [id, data] of Object.entries(allData)) {
    // Get EVM data if available
    const evmData = data.enrichedData["evm-project-data"] as
      | EVMProjectData
      | undefined;

    if (evmData) {
      console.log(
        `- ${id}: ${evmData.transactions} transactions, ${evmData.events} events`
      );
    } else {
      console.log(`- ${id}: No EVM data available`);
    }
  }
}

// Run the example
dataExporterExample().catch((error) => {
  console.error("Error running data exporter example:", error);
});
