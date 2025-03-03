import { Project } from "../core/Project";
import { ProjectType, SoftwareProjectMetadata } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";

/**
 * GitHub repository data structure
 */
export interface GitHubRepositoryData {
  /** Repository name */
  name: string;
  /** Number of stars */
  stars: number;
  /** Number of forks */
  forks: number;
  /** Number of open issues */
  openIssues: number;
  /** Latest release tag */
  latestRelease?: string;
  /** Repository creation date */
  createdAt: string;
  /** Repository update date */
  updatedAt: string;
}

/**
 * GitHub enrichment strategy options
 */
export interface GitHubEnrichmentOptions extends EnrichmentStrategyOptions {
  /** GitHub API token */
  apiToken?: string;
}

/**
 * Example strategy that enriches software projects with GitHub repository data
 */
export class GitHubEnrichmentStrategy extends BaseEnrichmentStrategy<
  GitHubRepositoryData,
  GitHubEnrichmentOptions
> {
  constructor() {
    super(
      "github-repository",
      "GitHub Repository Data",
      [ProjectType.SOFTWARE],
      { timeoutMs: 5000 } // Default 5 second timeout
    );
  }

  /**
   * Overrides the canEnrich method to check if the project has a GitHub repository URL
   */
  canEnrich<M extends SoftwareProjectMetadata>(project: any): boolean {
    if (!super.canEnrich(project)) {
      return false;
    }

    const metadata = project.getMetadata() as SoftwareProjectMetadata;
    return Boolean(
      metadata.repositoryUrl && this.isGitHubUrl(metadata.repositoryUrl)
    );
  }

  /**
   * Implements the enrichment logic for GitHub repositories
   */
  protected async executeEnrichment<M extends SoftwareProjectMetadata>(
    project: any,
    options: GitHubEnrichmentOptions
  ): Promise<EnrichmentResult<GitHubRepositoryData>> {
    const metadata = project.getMetadata() as SoftwareProjectMetadata;

    if (!metadata.repositoryUrl) {
      return {
        success: false,
        error: "No repository URL found in project metadata",
      };
    }

    if (!this.isGitHubUrl(metadata.repositoryUrl)) {
      return {
        success: false,
        error: `Repository URL ${metadata.repositoryUrl} is not a GitHub repository`,
      };
    }

    try {
      // Extract owner and repo name from the URL
      const { owner, repo } = this.parseGitHubUrl(metadata.repositoryUrl);

      // In a real implementation, we would make an API call to GitHub
      // For this example, we'll simulate a response
      const repoData = await this.fetchRepositoryData(
        owner,
        repo,
        options.apiToken
      );

      return {
        success: true,
        data: repoData,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }

  /**
   * Checks if a URL is a GitHub repository URL
   */
  private isGitHubUrl(url: string): boolean {
    return url.toLowerCase().includes("github.com");
  }

  /**
   * Extracts owner and repository name from a GitHub URL
   */
  private parseGitHubUrl(url: string): { owner: string; repo: string } {
    // Remove trailing .git if present
    const cleanUrl = url.replace(/\.git$/, "");

    // Parse the URL to extract the path
    try {
      const urlObj = new URL(cleanUrl);
      const pathParts = urlObj.pathname.split("/").filter(Boolean);

      if (pathParts.length < 2) {
        throw new Error("Invalid GitHub URL format");
      }

      return {
        owner: pathParts[0],
        repo: pathParts[1],
      };
    } catch (error) {
      throw new Error(`Cannot parse GitHub URL: ${url}`);
    }
  }

  /**
   * Simulates fetching repository data from GitHub API
   * In a real implementation, this would make an actual API call
   */
  private async fetchRepositoryData(
    owner: string,
    repo: string,
    apiToken?: string
  ): Promise<GitHubRepositoryData> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return mock data
    return {
      name: repo,
      stars: Math.floor(Math.random() * 10000),
      forks: Math.floor(Math.random() * 1000),
      openIssues: Math.floor(Math.random() * 100),
      latestRelease: `v${Math.floor(Math.random() * 10)}.${Math.floor(
        Math.random() * 10
      )}.${Math.floor(Math.random() * 10)}`,
      createdAt: new Date(
        Date.now() - Math.random() * 31536000000
      ).toISOString(), // Random date within last year
      updatedAt: new Date().toISOString(),
    };
  }
}
