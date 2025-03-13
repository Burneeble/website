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
import { AWSAmplifyStatsData } from "../strategies/AWSAmplifyStatsEnrichmentStrategy";
import {
  bundledData,
  getAllProjectIds,
  projectExists,
  getProjectsByPrefix,
  getProjectIdsByPrefix,
} from "./projectData";

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
  "aws-amplify-stats": AWSAmplifyStatsData;
  // Add more strategies and their data types here as needed
  [key: string]: any;
}

/**
 * Type for the complete enriched data structure
 */
export type EnrichedData = Record<string, EnrichedProjectData>;

/**
 * Class for accessing and exporting enriched project data with strong typing
 */
export class EnrichedDataExporter {
  /**
   * Check if a specific project exists in bundled data
   * @param projectId The project ID
   * @returns True if the project data exists
   */
  projectFileExists(projectId: string): boolean {
    return projectExists(projectId);
  }

  /**
   * Get the latest enriched data for all projects
   * @returns Record of project data by project ID
   */
  getLatestData<T extends EnrichedData = EnrichedData>(): T {
    try {
      return bundledData as T;
    } catch (error) {
      console.error("Error reading enriched data:", error);
      return {} as T;
    }
  }

  /**
   * List all available project IDs
   * @returns Array of project IDs
   */
  private listAllProjectFiles(): string[] {
    return getAllProjectIds();
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
      if (!this.projectFileExists(projectId)) {
        return null;
      }

      return bundledData[projectId] as EnrichedProjectData<T>;
    } catch (error) {
      console.error(`Error retrieving data for project ${projectId}:`, error);
      return null;
    }
  }

  /**
   * Find projects that start with a specific prefix
   * @param prefix The prefix to search for (e.g., "custompunks" will match "custompunks-v1", "custompunks-v2", etc.)
   * @returns Object containing all matching projects, keyed by project ID
   */
  getProjectsByPrefix<T extends ProjectMetadata = ProjectMetadata>(
    prefix: string
  ): Record<string, EnrichedProjectData<T>> {
    try {
      return getProjectsByPrefix(prefix) as Record<
        string,
        EnrichedProjectData<T>
      >;
    } catch (error) {
      console.error(`Error finding projects with prefix ${prefix}:`, error);
      return {} as Record<string, EnrichedProjectData<T>>;
    }
  }

  /**
   * Get all project IDs that start with a specific prefix
   * @param prefix The prefix to search for
   * @returns Array of matching project IDs
   */
  getProjectIdsByPrefix(prefix: string): string[] {
    return getProjectIdsByPrefix(prefix);
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
   * Get AWS Amplify statistics data for a project
   * @param projectId The ID of the project to retrieve
   * @returns The AWS Amplify stats data or null if not found
   */
  getAmplifyStatsData(projectId: string): AWSAmplifyStatsData | null {
    return this.getStrategyData(projectId, "aws-amplify-stats");
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
   * Check if any enriched data is available
   * @returns True if any data is available
   */
  dataFileExists(): boolean {
    return this.getProjectIds().length > 0;
  }

  /**
   * For compatibility with existing code - returns null as data is now bundled
   * @returns null as data is now bundled
   */
  getDataDirPath(): string | null {
    return null;
  }
}
