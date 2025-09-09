import {
  BaseProjectMetadata,
  ProjectMetadata,
  ProjectType,
} from "./ProjectTypes";

/**
 * Core Project class that represents a project with metadata and type information
 */
export class Project<T extends ProjectMetadata = BaseProjectMetadata> {
  /** The project's metadata */
  protected metadata: T;
  /** The project's type */
  protected type: ProjectType;
  /** Enriched data attached to the project */
  protected enrichedData: Record<string, any> = {};

  /**
   * Creates a new project instance
   * @param metadata The project metadata
   * @param type The project type identifier
   */
  constructor(metadata: T, type: ProjectType = ProjectType.GENERAL) {
    this.metadata = metadata;
    this.type = type;

    // Set default timestamps if not provided
    if (!metadata.createdAt) {
      this.metadata.createdAt = new Date().toISOString();
    }

    this.metadata.updatedAt = new Date().toISOString();
  }

  /**
   * Get the project metadata
   * @returns The project metadata
   */
  getMetadata(): T {
    return { ...this.metadata };
  }

  /**
   * Get the project type
   * @returns The project type
   */
  getType(): ProjectType {
    return this.type;
  }

  /**
   * Update the project metadata
   * @param updates Partial metadata updates to apply
   * @returns The updated project instance
   */
  updateMetadata(updates: Partial<T>): Project<T> {
    this.metadata = {
      ...this.metadata,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this;
  }

  /**
   * Store enriched data on the project
   * @param key Key to store the enriched data under
   * @param data The enriched data
   */
  setEnrichedData<D>(key: string, data: D): void {
    this.enrichedData[key] = data;
  }

  /**
   * Get enriched data by key
   * @param key The key of the enriched data
   * @returns The enriched data or undefined if not found
   */
  getEnrichedData<D>(key: string): D | undefined {
    return this.enrichedData[key] as D;
  }

  /**
   * Get all enriched data
   * @returns All enriched data attached to the project
   */
  getAllEnrichedData(): Record<string, any> {
    return { ...this.enrichedData };
  }

  /**
   * Check if the project has specific enriched data
   * @param key The key to check
   * @returns True if the project has enriched data with the given key
   */
  hasEnrichedData(key: string): boolean {
    return key in this.enrichedData;
  }
}
