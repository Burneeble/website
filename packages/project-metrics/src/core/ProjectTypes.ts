/**
 * Base metadata interface for all projects
 */
export interface BaseProjectMetadata {
  /** Unique identifier for the project */
  id: string;
  /** Human-readable name of the project */
  name: string;
  /** Optional description of the project */
  description?: string;
  /** ISO date string of project creation */
  createdAt?: string;
  /** ISO date string of last project update */
  updatedAt?: string;
  /** Additional custom metadata fields */
  [key: string]: any;
}

/**
 * Project type identifiers
 */
export enum ProjectType {
  /** General project with basic metadata */
  GENERAL = "general",
  /** Software development project */
  SOFTWARE = "software",
  /** Cryptocurrency project */
  CRYPTO = "crypto",
  /** Non-fungible token project */
  NFT = "nft",
}

/**
 * Crypto-specific metadata fields
 */
export interface CryptoEVMProjectMetadata extends BaseProjectMetadata {
  /** Cryptocurrency ticker symbol */
  symbol?: string;
  /** Blockchain the project is based on */
  chainName?: string;
  /** Contract address if applicable */
  contractAddress?: string;
}

/**
 * NFT-specific metadata fields
 */
export interface NFTProjectMetadata extends CryptoEVMProjectMetadata {
  /** Total collection size */
  collectionSize?: number;
  /** NFT standard (e.g., ERC-721, ERC-1155) */
  standard?: string;
}

/**
 * Software-specific metadata fields
 */
export interface SoftwareProjectMetadata extends BaseProjectMetadata {
  /** Repository URL */
  repositoryUrl?: string;
  /** Programming languages used */
  languages?: string[];
  /** Software license type */
  license?: string;
}

/**
 * Union type of all project metadata types
 */
export type ProjectMetadata =
  | BaseProjectMetadata
  | CryptoEVMProjectMetadata
  | NFTProjectMetadata
  | SoftwareProjectMetadata;
