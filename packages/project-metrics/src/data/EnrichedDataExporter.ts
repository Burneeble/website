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
import { EVMProjectData } from "../examples/EVMProjectEnrichmentStrategy";

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
  private latestDataPath: string;

  constructor() {
    this.dataDir = path.join(__dirname, "../../data");
    this.latestDataPath = path.join(this.dataDir, "latest-enriched-data.json");
  }

  /**
   * Get the latest enriched data for all projects
   * @returns Record of project data by project ID
   */
  getLatestData<T extends EnrichedData = EnrichedData>(): T {
    try {
      if (fs.existsSync(this.latestDataPath)) {
        const data = fs.readFileSync(this.latestDataPath, "utf-8");
        // Use the custom reviver function to handle BigInt values
        return JSON.parse(data, jsonReviver) as T;
      }
      return {} as T;
    } catch (error) {
      console.error("Error reading latest enriched data:", error);
      return {} as T;
    }
  }

  /**
   * Get data for a specific project
   * @param projectId The ID of the project to retrieve
   * @returns The project's enriched data or null if not found
   */
  getProjectData<T extends ProjectMetadata = ProjectMetadata>(
    projectId: string
  ): EnrichedProjectData<T> | null {
    const allData = this.getLatestData();
    return (allData[projectId] as EnrichedProjectData<T>) || null;
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
   * Get all project IDs from the enriched data
   * @returns Array of project IDs
   */
  getProjectIds(): string[] {
    const data = this.getLatestData();
    return Object.keys(data);
  }

  /**
   * Check if data exists for a project
   * @param projectId The project ID to check
   * @returns True if data exists for the project
   */
  hasData(projectId: string): boolean {
    const data = this.getLatestData();
    return Boolean(data[projectId]);
  }

  /**
   * Check if the enriched data file exists
   * @returns True if the data file exists
   */
  dataFileExists(): boolean {
    return fs.existsSync(this.latestDataPath);
  }

  /**
   * Get the path to the data file
   * @returns The path to the data file
   */
  getDataFilePath(): string {
    return this.latestDataPath;
  }
}
