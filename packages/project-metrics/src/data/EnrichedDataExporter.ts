import * as fs from "fs";
import * as path from "path";
import { Project } from "../core/Project";
import {
  CryptoEVMProjectMetadata,
  ProjectMetadata,
  ProjectType,
} from "../core/ProjectTypes";
import { EnrichmentStrategy } from "../enrichment/EnrichmentStrategy";
import { ProjectDefinition, definitions } from "../projectDefinitions";
import { EVMProjectData } from "../strategies/EVMProjectEnrichmentStrategy";
import { ERC721TokenData } from "../strategies/ERC721EnrichmentStrategy";

/**
 * Interface for typed enriched project data
 */
export interface EnrichedProjectData<
  T extends ProjectMetadata = ProjectMetadata
> {
  metadata: T;
  enrichedData: Record<string, any>;
}

/**
 * Type that maps strategy IDs to their result data types
 */
export interface EnrichmentDataTypeMap {
  "evm-project-data": EVMProjectData;
  "erc721-token-data": ERC721TokenData;
  // Add more strategies and their data types here as needed
  [key: string]: any;
}

/**
 * Custom JSON reviver function to handle BigInt values during parsing
 * Converts string representation back to BigInt
 */
function jsonReviver(key: string, value: any): any {
  // Check if the value is a string that ends with 'n' (BigInt marker)
  if (typeof value === "string" && value.endsWith("n")) {
    // Try to convert back to BigInt
    try {
      return BigInt(value.slice(0, -1));
    } catch (e) {
      // If it fails, return the original string
      return value;
    }
  }
  return value;
}

/**
 * Type for the complete enriched data structure
 */
export type EnrichedData = Record<string, EnrichedProjectData>;

/**
 * Class for accessing and exporting enriched project data with strong typing
 */
export class EnrichedDataExporter {
  private dataDir: string;

  constructor() {
    this.dataDir = path.join(__dirname, "../../data");
  }

  /**
   * Get the path to a specific project's data file
   * @param projectId The project ID
   * @returns The path to the project's data file
   */
  getProjectFilePath(projectId: string): string {
    return path.join(this.dataDir, `${projectId}.json`);
  }

  /**
   * Check if a specific project file exists
   * @param projectId The project ID
   * @returns True if the project file exists
   */
  projectFileExists(projectId: string): boolean {
    return fs.existsSync(this.getProjectFilePath(projectId));
  }

  /**
   * Get the latest enriched data for all projects
   * @returns Record of project data by project ID
   */
  getLatestData<T extends EnrichedData = EnrichedData>(): T {
    try {
      const result = {} as T;
      const projectIds = this.listAllProjectFiles();

      for (const projectId of projectIds) {
        const projectData = this.getProjectData(projectId);
        if (projectData) {
          (result as any)[projectId] = projectData as any;
        }
      }

      return result;
    } catch (error) {
      console.error("Error reading enriched data:", error);
      return {} as T;
    }
  }

  /**
   * List all project files in the data directory
   * @returns Array of project IDs
   */
  private listAllProjectFiles(): string[] {
    if (!fs.existsSync(this.dataDir)) {
      return [];
    }

    return fs
      .readdirSync(this.dataDir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
  }

  /**
   * Get data for a specific project
   * @param projectId The ID of the project to retrieve
   * @returns The project's enriched data or null if not found
   */
  getProjectData<T extends ProjectMetadata = ProjectMetadata>(
    projectId: string
  ): EnrichedProjectData<T> | null {
    try {
      const projectFilePath = this.getProjectFilePath(projectId);
      if (!fs.existsSync(projectFilePath)) {
        return null;
      }

      const data = fs.readFileSync(projectFilePath, "utf-8");
      return JSON.parse(data, jsonReviver) as EnrichedProjectData<T>;
    } catch (error) {
      console.error(`Error reading data for project ${projectId}:`, error);
      return null;
    }
  }

  /**
   * Get typed data for a specific project and strategy
   * @param projectId The ID of the project to retrieve
   * @param strategyId The ID of the strategy whose data to retrieve
   * @returns The project's enriched data for the specific strategy or null if not found
   */
  getStrategyData<K extends keyof EnrichmentDataTypeMap>(
    projectId: string,
    strategyId: K
  ): EnrichmentDataTypeMap[K] | null {
    const projectData = this.getProjectData(projectId);
    if (!projectData || !projectData.enrichedData[strategyId as string]) {
      return null;
    }
    return projectData.enrichedData[
      strategyId as string
    ] as EnrichmentDataTypeMap[K];
  }

  /**
   * Get EVM specific data for a project
   * @param projectId The ID of the project to retrieve
   * @returns The EVM specific data or null if not found
   */
  getEVMData(projectId: string): EVMProjectData | null {
    return this.getStrategyData(projectId, "evm-project-data");
  }

  /**
   * Get ERC721 token data for a project
   * @param projectId The ID of the project to retrieve
   * @returns The ERC721 token data or null if not found
   */
  getERC721Data(projectId: string): ERC721TokenData | null {
    return this.getStrategyData(projectId, "erc721-token-data");
  }

  /**
   * Get all project IDs from the enriched data
   * @returns Array of project IDs
   */
  getProjectIds(): string[] {
    return this.listAllProjectFiles();
  }

  /**
   * Check if data exists for a project
   * @param projectId The project ID to check
   * @returns True if data exists for the project
   */
  hasData(projectId: string): boolean {
    return this.projectFileExists(projectId);
  }

  /**
   * Check if any enriched data files exist
   * @returns True if any data files exist
   */
  dataFileExists(): boolean {
    return this.getProjectIds().length > 0;
  }

  /**
   * Get the path to the data directory
   * @returns The path to the data directory
   */
  getDataDirPath(): string {
    return this.dataDir;
  }
}
