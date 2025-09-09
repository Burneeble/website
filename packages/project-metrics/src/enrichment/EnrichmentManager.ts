import { Project } from "../core/Project";
import { ProjectMetadata } from "../core/ProjectTypes";
import { EnrichmentStrategy, EnrichmentResult } from "./EnrichmentStrategy";

/**
 * Results from applying multiple enrichment strategies
 */
export interface EnrichmentManagerResult {
  /** Overall success status */
  success: boolean;
  /** Results from individual strategies */
  results: Record<string, EnrichmentResult>;
  /** Number of successful strategies */
  successCount: number;
  /** Number of failed strategies */
  failCount: number;
}

/**
 * Options for enrichment manager execution
 */
export interface EnrichmentManagerOptions {
  /** Continue enriching even if some strategies fail */
  continueOnFailure?: boolean;
  /** Strategies to skip by ID */
  skipStrategyIds?: string[];
  /** Only apply specific strategies by ID */
  onlyStrategyIds?: string[];
  /** Apply strategies in parallel */
  parallel?: boolean;
  /** Default timeout for strategies in milliseconds */
  defaultTimeoutMs?: number;
}

/**
 * Manager for registering and applying enrichment strategies to projects
 */
export class EnrichmentManager {
  /** Registered enrichment strategies */
  private strategies: Map<string, EnrichmentStrategy> = new Map();

  /**
   * Create a new enrichment manager
   * @param strategies Initial strategies to register
   */
  constructor(strategies: EnrichmentStrategy[] = []) {
    strategies.forEach((strategy) => this.register(strategy));
  }

  /**
   * Register a new enrichment strategy
   * @param strategy The strategy to register
   * @returns The manager instance for chaining
   */
  register(strategy: EnrichmentStrategy): this {
    if (this.strategies.has(strategy.id)) {
      throw new Error(
        `Strategy with ID '${strategy.id}' is already registered`
      );
    }

    this.strategies.set(strategy.id, strategy);
    return this;
  }

  /**
   * Unregister a strategy by ID
   * @param id The ID of the strategy to unregister
   * @returns The manager instance for chaining
   */
  unregister(id: string): this {
    this.strategies.delete(id);
    return this;
  }

  /**
   * Get a registered strategy by ID
   * @param id The ID of the strategy to get
   * @returns The strategy or undefined if not found
   */
  getStrategy(id: string): EnrichmentStrategy | undefined {
    return this.strategies.get(id);
  }

  /**
   * Get all registered strategies
   * @returns Array of all registered strategies
   */
  getAllStrategies(): EnrichmentStrategy[] {
    return Array.from(this.strategies.values());
  }

  /**
   * Apply all applicable strategies to a project
   * @param project The project to enrich
   * @param options Options for the enrichment process
   * @returns Promise resolving to the combined enrichment results
   */
  async enrichProject<M extends ProjectMetadata>(
    project: Project<M>,
    options: EnrichmentManagerOptions = {}
  ): Promise<EnrichmentManagerResult> {
    const applicableStrategies = this.getApplicableStrategies(project, options);

    if (applicableStrategies.length === 0) {
      return {
        success: true,
        results: {},
        successCount: 0,
        failCount: 0,
      };
    }

    const results: Record<string, EnrichmentResult> = {};
    let successCount = 0;
    let failCount = 0;

    // Apply strategies in parallel or sequentially
    if (options.parallel) {
      const enrichmentPromises = applicableStrategies.map(async (strategy) => {
        try {
          const result = await strategy.enrich(project, {
            timeoutMs: options.defaultTimeoutMs,
          });

          // Store result and update counts
          results[strategy.id] = result;
          if (result.success) {
            successCount++;
            project.setEnrichedData(strategy.id, result.data);
          } else {
            failCount++;
          }

          return result;
        } catch (error) {
          const errorResult = {
            success: false,
            error: error instanceof Error ? error : new Error(String(error)),
          };
          results[strategy.id] = errorResult;
          failCount++;
          return errorResult;
        }
      });

      await Promise.all(enrichmentPromises);
    } else {
      // Apply strategies sequentially
      for (const strategy of applicableStrategies) {
        try {
          const result = await strategy.enrich(project, {
            timeoutMs: options.defaultTimeoutMs,
          });

          // Store result
          results[strategy.id] = result;

          if (result.success) {
            successCount++;
            project.setEnrichedData(strategy.id, result.data);
          } else {
            failCount++;

            // Stop if a strategy fails and continueOnFailure is false
            if (!options.continueOnFailure) {
              break;
            }
          }
        } catch (error) {
          const errorResult = {
            success: false,
            error: error instanceof Error ? error : new Error(String(error)),
          };

          results[strategy.id] = errorResult;
          failCount++;

          if (!options.continueOnFailure) {
            break;
          }
        }
      }
    }

    return {
      success: failCount === 0,
      results,
      successCount,
      failCount,
    };
  }

  /**
   * Filter strategies based on project and options
   * @param project The project to find applicable strategies for
   * @param options Options to filter strategies
   * @returns Array of applicable strategies
   */
  private getApplicableStrategies<M extends ProjectMetadata>(
    project: Project<M>,
    options: EnrichmentManagerOptions
  ): EnrichmentStrategy[] {
    // Get all strategies
    let applicableStrategies = Array.from(this.strategies.values()).filter(
      (strategy) => strategy.canEnrich(project)
    );

    // Filter by only specified strategies
    if (options.onlyStrategyIds && options.onlyStrategyIds.length > 0) {
      applicableStrategies = applicableStrategies.filter((strategy) =>
        options.onlyStrategyIds!.includes(strategy.id)
      );
    }

    // Filter out skipped strategies
    if (options.skipStrategyIds && options.skipStrategyIds.length > 0) {
      applicableStrategies = applicableStrategies.filter(
        (strategy) => !options.skipStrategyIds!.includes(strategy.id)
      );
    }

    return applicableStrategies;
  }
}
