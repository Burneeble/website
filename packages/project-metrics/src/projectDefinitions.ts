import { Project } from "./core/Project";
import { EnrichmentStrategy } from "./enrichment/EnrichmentStrategy";
import { EVMProjectEnrichmentStrategy } from "./examples/EVMProjectEnrichmentStrategy";
import { ProjectFactory } from "./factory/ProjectFactory";

export interface ProjectDefinition {
  project: Project;
  strategies: Array<EnrichmentStrategy>;
  options: Array<any>;
}

export const definitions: Array<ProjectDefinition> = [
  {
    project: ProjectFactory.createNFTProject({
      id: "skullnbananas-v1",
      name: "Skullnbananas V1",
      chainName: "ethereum",
      contractAddress: "0x9a9813752Cf595e5013CA39c1aaa3f5458a30dC5",
    }),
    strategies: [new EVMProjectEnrichmentStrategy()],
    options: [
      {
        startBlock: 17373581n,
        // endBlock: 20407774n,
        endBlock: 17383581n,
        logsBatchSize: 10000,
        concurrentBatchesLogs: 10,
        hashesBatchSize: 10,
        hashesCycleWait: 1000,
      },
    ],
  },
  // {
  //   project: ProjectFactory.createNFTProject({
  //     id: "skullnbananas-v2",
  //     name: "Skullnbananas V2",
  //     chainName: "theta",
  //     contractAddress: "0xb28e9baa99f4e3e764ff047036e9c511e211146b",
  //   }),
  //   strategies: [new EVMProjectEnrichmentStrategy()],
  //   options: [
  //     {
  //       startBlock: 26052330n,
  //       // endBlock: 26082330n,
  //       logsBatchSize: 5000,
  //       concurrentBatchesLogs: 10,
  //       hashesBatchSize: 10,
  //       hashesCycleWait: 1000,
  //     },
  //   ],
  // },
  {
    project: ProjectFactory.createNFTProject({
      id: "custompunks-v1",
      name: "Custompunks V1",
      chainName: "base",
      contractAddress: "0x78bcbe6B5df0B1775576b3a7bDab622E18F177A5",
    }),
    strategies: [new EVMProjectEnrichmentStrategy()],
    options: [
      {
        startBlock: 4579920n,
        logsBatchSize: 10000,
        endBlock: 17146749n,
        concurrentBatchesLogs: 15,
        hashesBatchSize: 10,
        hashesCycleWait: 1000,
      },
    ],
  },
  {
    project: ProjectFactory.createNFTProject({
      id: "custompunks-v2",
      name: "Custompunks V2",
      chainName: "base",
      contractAddress: "0xedee75777e6b6c6a2e9dd68c7c1b8576c716d7c6",
    }),
    strategies: [new EVMProjectEnrichmentStrategy()],
    options: [
      {
        startBlock: 17146749n,
        batchSize: 10000,
        // endBlock: 17246749n,
        concurrentBatchesLogs: 15,
        hashesBatchSize: 10,
        hashesCycleWait: 1000,
      },
    ],
  },
];
