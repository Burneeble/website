import {
  ProjectFactory,
  EnrichmentManager,
  ProjectType,
  SoftwareProjectMetadata,
  CryptoProjectMetadata,
  NFTProjectMetadata,
} from "../index";
import {
  GitHubEnrichmentStrategy,
  GitHubRepositoryData,
} from "./GitHubEnrichmentStrategy";

// Example usage of the project-metrics library

async function runExample() {
  console.log("Project Metrics Library Example");
  console.log("==============================");

  // 1. Create different types of projects using the factory
  console.log("\n1. Creating projects:");

  const softwareProject = ProjectFactory.createSoftwareProject({
    id: "proj-1",
    name: "Project Metrics",
    description: "A flexible framework for project metadata management",
    repositoryUrl: "https://github.com/example/project-metrics",
    languages: ["TypeScript", "JavaScript"],
    license: "MIT",
  });

  const cryptoProject = ProjectFactory.createCryptoProject({
    id: "proj-2",
    name: "Example Token",
    description: "An example cryptocurrency token",
    symbol: "EXT",
    blockchain: "Ethereum",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
  });

  const nftProject = ProjectFactory.createNFTProject({
    id: "proj-3",
    name: "Collectible NFTs",
    description: "A collection of unique digital items",
    symbol: "CNFT",
    blockchain: "Polygon",
    contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    collectionSize: 10000,
    standard: "ERC-721",
  });

  console.log(
    `Created software project: ${softwareProject.getMetadata().name}`
  );
  console.log(`Created crypto project: ${cryptoProject.getMetadata().name}`);
  console.log(`Created NFT project: ${nftProject.getMetadata().name}`);

  // 2. Set up enrichment strategies
  console.log("\n2. Setting up enrichment:");

  // Create an instance of our example GitHub enrichment strategy
  const githubStrategy = new GitHubEnrichmentStrategy();

  // Configure some options on the strategy
  githubStrategy.configure({
    timeoutMs: 10000, // 10 seconds
    apiToken: "fake-api-token", // Would be a real GitHub API token in production
  });

  // Create an enrichment manager and register the strategy
  const enrichmentManager = new EnrichmentManager([githubStrategy]);
  console.log(
    `Registered ${
      enrichmentManager.getAllStrategies().length
    } enrichment strategies`
  );

  // 3. Apply enrichment to projects
  console.log("\n3. Applying enrichment:");

  // Enrich the software project with GitHub data
  console.log(
    `Enriching ${softwareProject.getMetadata().name} with GitHub data...`
  );
  const result = await enrichmentManager.enrichProject(softwareProject, {
    parallel: true, // Process strategies in parallel
    continueOnFailure: true, // Continue if a strategy fails
  });

  console.log(`Enrichment complete - Success: ${result.success}`);
  console.log(`Successful strategies: ${result.successCount}`);
  console.log(`Failed strategies: ${result.failCount}`);

  // 4. Access the enriched data
  console.log("\n4. Accessing enriched data:");

  if (softwareProject.hasEnrichedData("github-repository")) {
    const githubData =
      softwareProject.getEnrichedData<GitHubRepositoryData>(
        "github-repository"
      );
    console.log("GitHub Repository Data:");
    console.log(`- Name: ${githubData?.name || "N/A"}`);
    console.log(`- Stars: ${githubData?.stars || 0}`);
    console.log(`- Forks: ${githubData?.forks || 0}`);
    console.log(`- Open Issues: ${githubData?.openIssues || 0}`);
    console.log(`- Latest Release: ${githubData?.latestRelease || "N/A"}`);
  } else {
    console.log("No GitHub data was enriched for the project");
  }

  // 5. Demonstrate type checking
  console.log("\n5. Type system demonstration:");

  // The library ensures type safety when accessing metadata
  // This code will only compile if the properties exist on the specific project type
  const softwareMetadata = softwareProject.getMetadata();
  const cryptoMetadata = cryptoProject.getMetadata();
  const nftMetadata = nftProject.getMetadata();

  console.log(
    `Software project repository URL: ${softwareMetadata.repositoryUrl}`
  );
  console.log(`Crypto project symbol: ${cryptoMetadata.symbol}`);
  console.log(`NFT project collection size: ${nftMetadata.collectionSize}`);
}

// Run the example
runExample().catch((error) => {
  console.error("Error in example:", error);
});
