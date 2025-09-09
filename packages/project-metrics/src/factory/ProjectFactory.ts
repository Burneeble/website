import { Project } from "../core/Project";
import {
  BaseProjectMetadata,
  CryptoEVMProjectMetadata,
  NFTProjectMetadata,
  ProjectMetadata,
  ProjectType,
  SoftwareProjectMetadata,
} from "../core/ProjectTypes";

/**
 * Factory class for creating different types of projects
 */
export class ProjectFactory {
  /**
   * Create a general project
   * @param metadata Project metadata
   * @returns A new general project
   */
  static createGeneralProject(
    metadata: BaseProjectMetadata
  ): Project<BaseProjectMetadata> {
    return new Project<BaseProjectMetadata>(metadata, ProjectType.GENERAL);
  }

  /**
   * Create a software project
   * @param metadata Software project metadata
   * @returns A new software project
   */
  static createSoftwareProject(
    metadata: SoftwareProjectMetadata
  ): Project<SoftwareProjectMetadata> {
    return new Project<SoftwareProjectMetadata>(metadata, ProjectType.SOFTWARE);
  }

  /**
   * Create a crypto project
   * @param metadata Crypto project metadata
   * @returns A new crypto project
   */
  static createCryptoProject(
    metadata: CryptoEVMProjectMetadata
  ): Project<CryptoEVMProjectMetadata> {
    return new Project<CryptoEVMProjectMetadata>(metadata, ProjectType.CRYPTO);
  }

  /**
   * Create an NFT project
   * @param metadata NFT project metadata
   * @returns A new NFT project
   */
  static createNFTProject(
    metadata: NFTProjectMetadata
  ): Project<NFTProjectMetadata> {
    return new Project<NFTProjectMetadata>(metadata, ProjectType.NFT);
  }

  /**
   * Create a project with custom type
   * @param metadata Project metadata
   * @param type Project type
   * @returns A new project with the specified type
   */
  static createCustomProject<T extends ProjectMetadata>(
    metadata: T,
    type: ProjectType
  ): Project<T> {
    return new Project<T>(metadata, type);
  }
}
