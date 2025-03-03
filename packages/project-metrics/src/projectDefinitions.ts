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
      id: "custompunks",
      name: "Custompunks",
      chainName: "base",
      contractAddress: "0xedee75777e6b6c6a2e9dd68c7c1b8576c716d7c6",
    }),
    strategies: [new EVMProjectEnrichmentStrategy()],
    options: [
      {
        startBlock: 17146749n,
        batchSize: 10000,
        endBlock: 17156749n,
      },
    ],
  },
];
