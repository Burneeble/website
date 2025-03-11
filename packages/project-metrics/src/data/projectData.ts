/**
 * This module imports all project JSON data files directly into the TypeScript bundle
 * This enables the data to be available when the library is used in another project
 * without requiring filesystem access at runtime
 */

import { definitions } from "../projectDefinitions";
import {
  CryptoEVMProjectMetadata,
  ProjectMetadata,
  ProjectType,
} from "../core/ProjectTypes";
import { EVMProjectData } from "../strategies/EVMProjectEnrichmentStrategy";
import { ERC721TokenData } from "../strategies/ERC721EnrichmentStrategy";
import { ERC20TokenFlowData } from "../strategies/ERC20FlowsEnrichmentStrategy";

// Import JSON data files directly
import customPunksV1Data from "../../data/custompunks-v1.json";
import customPunksV2Data from "../../data/custompunks-v2.json";
import skullnBananasV1Data from "../../data/skullnbananas-v1.json";
import skullnBananasV2Data from "../../data/skullnbananas-v2.json";
import zbdcData from "../../data/zbdc.json";
import buckbuckV1Data from "../../data/buckbuck-v1.json";

/**
 * Define strongly typed interfaces based on project definitions
 */
export interface EnrichedProjectData<
  T extends ProjectMetadata = ProjectMetadata
> {
  metadata: T;
  enrichedData: {
    "evm-project-data"?: EVMProjectData;
    "erc721-token-data"?: ERC721TokenData;
    "erc20-flows-data"?: ERC20TokenFlowData;
    [key: string]: any;
  };
}

// Define specific type for each project based on definitions
type ProjectDataMap = {
  [K in (typeof definitions)[number]["project"]["metadata"]["id"]]: EnrichedProjectData<
    Extract<(typeof definitions)[number]["project"]["metadata"], { id: K }>
  >;
};

// Custom JSON reviver function to handle BigInt values
function processBigIntStrings(data: any): any {
  if (data === null || typeof data !== "object") {
    // Handle BigInt string format (ends with 'n')
    if (typeof data === "string" && data.endsWith("n")) {
      try {
        return BigInt(data.slice(0, -1));
      } catch {
        return data;
      }
    }
    return data;
  }

  // Process arrays
  if (Array.isArray(data)) {
    return data.map((item) => processBigIntStrings(item));
  }

  // Process objects
  const result: Record<string, any> = {};
  for (const key in data) {
    result[key] = processBigIntStrings(data[key]);
  }
  return result;
}

// Process and export the bundled data
const rawBundledData = {
  "custompunks-v1": customPunksV1Data,
  "custompunks-v2": customPunksV2Data,
  "skullnbananas-v1": skullnBananasV1Data,
  "skullnbananas-v2": skullnBananasV2Data,
  zbdc: zbdcData,
  "buckbuck-v1": buckbuckV1Data,
};

// Process BigInt strings in all data and apply proper typing
export const bundledData: ProjectDataMap = processBigIntStrings(
  rawBundledData
) as ProjectDataMap;

/**
 * Function to check if a project ID exists in the bundled data
 * @param projectId The project ID to check
 * @returns True if the project data exists
 */
export function projectExists(projectId: string): boolean {
  return bundledData.hasOwnProperty(projectId);
}

/**
 * Get all available project IDs
 * @returns Array of project IDs
 */
export function getAllProjectIds(): string[] {
  return Object.keys(bundledData);
}

/**
 * Find projects that start with a specific prefix
 * @param prefix The prefix to search for
 * @returns Record of matching projects
 */
export function getProjectsByPrefix(prefix: string): Partial<ProjectDataMap> {
  const result: Partial<ProjectDataMap> = {};

  for (const [projectId, projectData] of Object.entries(bundledData)) {
    if (projectId.startsWith(prefix)) {
      result[projectId as keyof ProjectDataMap] = projectData;
    }
  }

  return result;
}

/**
 * Find project IDs that start with a specific prefix
 * @param prefix The prefix to search for
 * @returns Array of matching project IDs
 */
export function getProjectIdsByPrefix(prefix: string): string[] {
  return getAllProjectIds().filter((id) => id.startsWith(prefix));
}
