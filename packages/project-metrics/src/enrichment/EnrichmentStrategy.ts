import { Project } from "../core/Project";
import { ProjectMetadata, ProjectType } from "../core/ProjectTypes";

/**
 * Result of an enrichment process
 */
export interface EnrichmentResult<T = any> {
  /** Whether the enrichment was successful */
  success: boolean;
  /** The enriched data */
  data?: T;
  /** Any error that occurred */
  error?: Error | string;
}

/**
 * Configuration options for an enrichment strategy
 */
export interface EnrichmentStrategyOptions {
  /** Whether the strategy is enabled */
  enabled?: boolean;
  /** Optional timeout in milliseconds */
  timeoutMs?: number;
  /** Additional strategy-specific options */
  [key: string]: any;
}

/**
 * Interface for implementing project enrichment strategies
 */
export interface EnrichmentStrategy<
  T = any,
  O extends EnrichmentStrategyOptions = EnrichmentStrategyOptions
> {
  /**
   * Unique identifier for the strategy
   */
  readonly id: string;

  /**
   * Human-readable name of the strategy
   */
  readonly name: string;

  /**
   * Check if the strategy applies to a specific project type
   * @param type The project type to check
   * @returns True if the strategy applies to the given project type
   */
  appliesTo(type: ProjectType): boolean;

  /**
   * Check if the strategy can enrich a specific project
   * @param project The project to check
   * @returns True if the strategy can enrich the project
   */
  canEnrich<M extends ProjectMetadata>(project: Project<M>): boolean;

  /**
   * Enrich a project with additional data
   * @param project The project to enrich
   * @param options Optional configuration for the enrichment process
   * @returns Promise that resolves to the enrichment result
   */
  enrich<M extends ProjectMetadata>(
    project: Project<M>,
    options?: O
  ): Promise<EnrichmentResult<T>>;
}

/**
 * Abstract base class implementing common strategy functionality
 */
export abstract class BaseEnrichmentStrategy<
  T = any,
  O extends EnrichmentStrategyOptions = EnrichmentStrategyOptions
> implements EnrichmentStrategy<T, O>
{
  readonly id: string;
  readonly name: string;
  protected applicableTypes: ProjectType[];
  protected options: O;

  /**
   * Create a new enrichment strategy
   * @param id Unique identifier for the strategy
   * @param name Human-readable name of the strategy
   * @param applicableTypes Project types this strategy applies to
   * @param defaultOptions Default configuration options
   */
  constructor(
    id: string,
    name: string,
    applicableTypes: ProjectType[] = [ProjectType.GENERAL],
    defaultOptions: Partial<O> = {}
  ) {
    this.id = id;
    this.name = name;
    this.applicableTypes = applicableTypes;
    this.options = { enabled: true, ...defaultOptions } as O;
  }

  /**
   * Configure the strategy options
   * @param options Options to apply
   * @returns The strategy instance for chaining
   */
  configure(options: Partial<O>): this {
    this.options = { ...this.options, ...options };
    return this;
  }

  /**
   * Get the current strategy options
   * @returns The current options
   */
  getOptions(): O {
    return { ...this.options };
  }

  /**
   * Check if the strategy applies to a specific project type
   * @param type The project type to check
   * @returns True if the strategy applies to the given project type
   */
  appliesTo(type: ProjectType): boolean {
    return (
      this.applicableTypes.includes(type) ||
      this.applicableTypes.includes(ProjectType.GENERAL)
    );
  }

  /**
   * Check if the strategy can enrich a specific project
   * @param project The project to check
   * @returns True if the strategy can enrich the project
   */
  canEnrich<M extends ProjectMetadata>(project: Project<M>): boolean {
    return this.options.enabled !== false && this.appliesTo(project.getType());
  }

  /**
   * Execute the enrichment process with timeout handling
   * @param project The project to enrich
   * @param options Optional configuration for the enrichment process
   * @returns Promise that resolves to the enrichment result
   */
  async enrich<M extends ProjectMetadata>(
    project: Project<M>,
    options?: Partial<O>
  ): Promise<EnrichmentResult<T>> {
    // Merge default options with provided options
    const mergedOptions = options
      ? ({ ...this.options, ...options } as O)
      : this.options;

    // Skip if disabled
    if (mergedOptions.enabled === false) {
      return { success: false, error: "Strategy is disabled" };
    }

    // Check if the strategy can enrich the project
    if (!this.appliesTo(project.getType())) {
      return {
        success: false,
        error: `Strategy ${
          this.id
        } does not apply to project type ${project.getType()}`,
      };
    }

    try {
      // Execute the enrichment with optional timeout
      if (mergedOptions.timeoutMs) {
        return await this.executeWithTimeout(project, mergedOptions);
      } else {
        return await this.executeEnrichment(project, mergedOptions);
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }

  /**
   * Execute the enrichment process with a timeout
   * @param project The project to enrich
   * @param options Enrichment options
   * @returns Promise that resolves to the enrichment result
   */
  private async executeWithTimeout<M extends ProjectMetadata>(
    project: Project<M>,
    options: O
  ): Promise<EnrichmentResult<T>> {
    return new Promise((resolve) => {
      // Create a timeout
      const timeoutId = setTimeout(() => {
        resolve({
          success: false,
          error: `Strategy ${this.id} timed out after ${options.timeoutMs}ms`,
        });
      }, options.timeoutMs);

      // Execute the enrichment
      this.executeEnrichment(project, options)
        .then((result) => {
          clearTimeout(timeoutId);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          resolve({
            success: false,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        });
    });
  }

  /**
   * Implement the actual enrichment logic in subclasses
   * @param project The project to enrich
   * @param options Enrichment options
   * @returns Promise that resolves to the enrichment result
   */
  protected abstract executeEnrichment<M extends ProjectMetadata>(
    project: Project<M>,
    options: O
  ): Promise<EnrichmentResult<T>>;
}
