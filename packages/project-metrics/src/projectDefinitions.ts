import { Project } from "./core/Project";
import { EnrichmentStrategy } from "./enrichment/EnrichmentStrategy";
import {
  EVMProjectData,
  EVMProjectEnrichmentStrategy,
  EVMProjectEnrichmentStrategyOptions,
} from "./strategies/EVMProjectEnrichmentStrategy";
import { ProjectFactory } from "./factory/ProjectFactory";
import {
  AWSAmplifyStatsEnrichmentStrategy,
  AWSAmplifyStatsEnrichmentStrategyOptions,
  ERC20FlowsEnrichmentStrategy,
  ERC20FlowsEnrichmentStrategyOptions,
  ERC721EnrichmentStrategy,
  ERC721EnrichmentStrategyOptions,
} from "./strategies";
import { ProjectType } from "./core/ProjectTypes";

export interface ProjectDefinition {
  project: Project;
  strategies: Array<EnrichmentStrategy>;
  options: Array<any>;
}

export const definitions: Array<ProjectDefinition> = [
  {
    project: ProjectFactory.createNFTProject({
      id: "buckbuck-v1",
      name: "buckbuck V1",
      chainName: "ethereum",
      contractAddress: "0xdd3dba0cc95eccb91d08cc83a0ec910d3e43441a",
    }),
    strategies: [
      new EVMProjectEnrichmentStrategy(),
      new ERC721EnrichmentStrategy(),
    ],
    options: [
      {
        startBlock: 14661076n,
        endBlock: 20177048n,
        logsBatchSize: 10000,
        concurrentBatchesLogs: 10,
        hashesBatchSize: 10,
        hashesCycleWait: 1600,
      } satisfies EVMProjectEnrichmentStrategyOptions,
      {} satisfies ERC721EnrichmentStrategyOptions,
    ],
  },
  {
    project: ProjectFactory.createNFTProject({
      id: "zbdc",
      name: "ZBDC",
      chainName: "ethereum",
      contractAddress: "0xdbff88f7d635bfcd98b9260bd0846c2497cbf18c",
    }),
    strategies: [
      new EVMProjectEnrichmentStrategy(),
      new ERC721EnrichmentStrategy(),
    ],
    options: [
      {
        startBlock: 14906011n,
        endBlock: 18197513n,
        // endBlock: 17383581n,
        logsBatchSize: 10000,
        concurrentBatchesLogs: 10,
        hashesBatchSize: 10,
        hashesCycleWait: 1600,
      } satisfies EVMProjectEnrichmentStrategyOptions,
      {} satisfies ERC721EnrichmentStrategyOptions,
    ],
  },
  {
    project: ProjectFactory.createNFTProject({
      id: "skullnbananas-v1",
      name: "Skullnbananas V1",
      chainName: "ethereum",
      contractAddress: "0x9a9813752Cf595e5013CA39c1aaa3f5458a30dC5",
    }),
    strategies: [
      new AWSAmplifyStatsEnrichmentStrategy(),
      new EVMProjectEnrichmentStrategy(),
      new ERC721EnrichmentStrategy(),
    ],
    options: [
      {
        region: process.env.SNB_REGION,
        credentials: {
          accessKeyId: process.env.SNB_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.SNB_SECRET_ACCESS_KEY || "",
        },
        branchName: "main",
        appId: process.env.SNB_APP_ID,
        metricsTimeRangeHours: 24 * 30 * 12,
        includeRecentJobs: false,
        includeCloudWatchMetrics: true,
      } satisfies AWSAmplifyStatsEnrichmentStrategyOptions,
      {
        startBlock: 17373581n,
        endBlock: 20407774n,
        // endBlock: 17383581n,
        logsBatchSize: 10000,
        concurrentBatchesLogs: 10,
        hashesBatchSize: 10,
        hashesCycleWait: 1600,
      } satisfies EVMProjectEnrichmentStrategyOptions,
      {} satisfies ERC721EnrichmentStrategyOptions,
    ],
  },
  {
    project: ProjectFactory.createNFTProject({
      id: "custompunks-v1",
      name: "Custompunks V1",
      chainName: "base",
      contractAddress: "0x78bcbe6B5df0B1775576b3a7bDab622E18F177A5",
    }),
    strategies: [
      new EVMProjectEnrichmentStrategy(),
      new ERC721EnrichmentStrategy(),
    ],
    options: [
      {
        startBlock: 4579920n,
        logsBatchSize: 10000,
        endBlock: 17146749n,
        concurrentBatchesLogs: 15,
        hashesBatchSize: 10,
        hashesCycleWait: 1500,
      } satisfies EVMProjectEnrichmentStrategyOptions,
      {} satisfies ERC721EnrichmentStrategyOptions,
    ],
  },
  {
    project: ProjectFactory.createNFTProject({
      id: "custompunks-v2",
      name: "Custompunks V2",
      chainName: "base",
      contractAddress: "0xedee75777e6b6c6a2e9dd68c7c1b8576c716d7c6",
    }),
    strategies: [
      new AWSAmplifyStatsEnrichmentStrategy(),
      new EVMProjectEnrichmentStrategy(),
      new ERC721EnrichmentStrategy(),
    ],
    options: [
      {
        region: process.env.CUSTOMPUNKS_REGION,
        credentials: {
          accessKeyId: process.env.CUSTOMPUNKS_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.CUSTOMPUNKS_SECRET_ACCESS_KEY || "",
        },
        branchName: "main",
        appId: process.env.CUSTOMPUNKS_APP_ID,
        metricsTimeRangeHours: 24 * 30 * 12,
        includeRecentJobs: false,
        includeCloudWatchMetrics: true,
      } satisfies AWSAmplifyStatsEnrichmentStrategyOptions,
      {
        startBlock: 17146749n,
        batchSize: 10000,
        concurrentBatchesLogs: 15,
        hashesBatchSize: 10,
        hashesCycleWait: 1500,
      } satisfies EVMProjectEnrichmentStrategyOptions,
      {} satisfies ERC721EnrichmentStrategyOptions,
    ],
  },
  // {
  //   project: ProjectFactory.createNFTProject({
  //     id: "skullnbananas-v2",
  //     name: "Skullnbananas V2",
  //     chainName: "theta",
  //     contractAddress: "0xb28e9baa99f4e3e764ff047036e9c511e211146b",
  //   }),
  //   strategies: [
  //     // new EVMProjectEnrichmentStrategy(),
  //     // new ERC721EnrichmentStrategy(),
  //     new ERC20FlowsEnrichmentStrategy(),
  //   ],
  //   options: [
  //     // {
  //     //   startBlock: 26052330n,
  //     //   endBlock: 26082330n,
  //     //   logsBatchSize: 5000,
  //     //   concurrentBatchesLogs: 10,
  //     //   hashesBatchSize: 10,
  //     //   hashesCycleWait: 1000,
  //     // } satisfies EVMProjectEnrichmentStrategyOptions,
  //     // {} satisfies ERC721EnrichmentStrategyOptions,
  //     {
  //       erc20ContractAddress: "0xc1cff4648d490480f3b7e1449aae5f7a34a75dfa",
  //       startBlock: 26052330n,
  //       // endBlock: 26082330n,
  //       logsBatchSize: 5000,
  //       concurrentBatchesLogs: 10,
  //     } satisfies ERC20FlowsEnrichmentStrategyOptions,
  //   ],
  // },
];
