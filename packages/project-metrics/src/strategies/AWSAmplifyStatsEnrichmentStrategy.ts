import { Project } from "../core/Project";
import { BaseProjectMetadata, ProjectType } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";
import {
  AmplifyClient,
  GetAppCommand,
  GetBranchCommand,
  ListJobsCommand,
} from "@aws-sdk/client-amplify";
import {
  CloudWatchClient,
  GetMetricDataCommand,
  ListMetricsCommand,
  MetricDataQuery,
} from "@aws-sdk/client-cloudwatch";

/**
 * Interface for AWS Amplify app stats data
 */
export interface AWSAmplifyStatsData {
  // General app info
  appName: string;
  appId: string;
  defaultDomain: string;
  createTime?: Date;
  updateTime?: Date;

  // Status info
  status?: string;
  platform?: string;
  framework?: string;

  // Production branch info (if available)
  productionBranch?: {
    branchName: string;
    displayName: string;
    status: string;
    lastDeployTime?: Date;
    ttl?: string;
  };

  // Statistics from CloudWatch
  metrics?: {
    // Website traffic metrics
    requestCount?: number; // Total number of requests
    uniqueVisitors?: number; // Estimated unique visitors
    errorRate?: number; // Percentage of errors (4xx, 5xx)
    averageResponseTime?: number; // Average response time in ms

    // Build metrics
    totalBuilds?: number; // Total number of builds
    successfulBuilds?: number; // Number of successful builds
    failedBuilds?: number; // Number of failed builds

    // Uptime metrics
    uptimePercentage?: number; // Percentage of time the app was available

    // Time range of metrics
    metricsStartTime?: Date;
    metricsEndTime?: Date;
  };

  // Raw job data (limited to recent jobs)
  recentJobs?: Array<{
    jobId: string;
    status: string;
    type: string;
    branchName: string;
    startTime?: Date;
    endTime?: Date;
  }>;
}

/**
 * Options for AWS Amplify stats enrichment
 */
export interface AWSAmplifyStatsEnrichmentStrategyOptions
  extends EnrichmentStrategyOptions {
  // AWS authentication
  region?: string;
  credentials?: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
  };

  // Amplify app identification
  appId?: string; // The Amplify app ID

  // Which branch to analyze (defaults to production or main/master)
  branchName?: string;

  // CloudWatch metrics options
  metricsTimeRangeHours?: number; // How many hours of metrics to retrieve (default: 24)
  includeCloudWatchMetrics?: boolean; // Whether to fetch CloudWatch metrics (default: true)
  includeRecentJobs?: boolean; // Whether to fetch recent job data (default: true)
  maxRecentJobs?: number; // Maximum number of recent jobs to fetch (default: 10)

  // Method timeout and retry options
  methodTimeoutMs?: number; // Timeout for individual API calls (default: 30000)
  methodRetries?: number; // Number of retries for failed API calls (default: 3)
  retryDelayMs?: number; // Delay between retries (default: 1000)
}

/**
 * Project metadata with Amplify app information
 */
export interface ProjectWithAmplifyMetadata extends BaseProjectMetadata {
  amplifyAppId?: string; // The Amplify app ID
  amplifyRegion?: string; // AWS region where the Amplify app is deployed
  amplifyBranch?: string; // Branch to analyze
  domain?: string; // Domain name (optional)
}

/**
 * Enrichment strategy to collect AWS Amplify app statistics
 */
export class AWSAmplifyStatsEnrichmentStrategy extends BaseEnrichmentStrategy<
  AWSAmplifyStatsData,
  AWSAmplifyStatsEnrichmentStrategyOptions
> {
  constructor() {
    super(
      "aws-amplify-stats",
      "AWS Amplify Application Statistics",
      [ProjectType.GENERAL, ProjectType.SOFTWARE],
      {
        timeoutMs: 120000, // 2 minute timeout for the entire enrichment process
        methodTimeoutMs: 30000, // 30 seconds timeout per API call
        methodRetries: 3, // 3 retries for failed API calls
        retryDelayMs: 1000, // 1 second delay between retries
        metricsTimeRangeHours: 24, // Get metrics for the last 24 hours
        includeCloudWatchMetrics: true, // Include CloudWatch metrics by default
        includeRecentJobs: true, // Include recent jobs data by default
        maxRecentJobs: 10, // Only fetch the 10 most recent jobs
      }
    );
  }

  /**
   * Check if the strategy can enrich a project by looking for Amplify metadata
   */
  canEnrich<M extends ProjectWithAmplifyMetadata>(
    project: Project<M>
  ): boolean {
    if (!super.canEnrich(project)) {
      return false;
    }

    const metadata = project.getMetadata();

    // Check if the project has either Amplify app ID in metadata or if it will be provided in options
    return Boolean(metadata.amplifyAppId || this.options.appId);
  }

  /**
   * Helper method to create Amplify client with timeout handling and retries
   */
  private createAmplifyClient(
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): AmplifyClient {
    const region = options.region || "us-east-1";

    const clientOptions: any = {
      region,
    };

    // Add credentials if provided
    if (options.credentials) {
      clientOptions.credentials = options.credentials;
    }

    return new AmplifyClient(clientOptions);
  }

  /**
   * Helper method to create CloudWatch client
   */
  private createCloudWatchClient(
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): CloudWatchClient {
    const region = options.region || "us-east-1";

    const clientOptions: any = {
      region,
    };

    // Add credentials if provided
    if (options.credentials) {
      clientOptions.credentials = options.credentials;
    }

    return new CloudWatchClient(clientOptions);
  }

  /**
   * Helper method to call AWS APIs with timeout and retry handling
   */
  private async callWithRetry<T>(
    operation: () => Promise<T>,
    operationName: string,
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): Promise<T> {
    const maxRetries = options.methodRetries ?? 3;
    const retryDelay = options.retryDelayMs ?? 1000;
    const timeout = options.methodTimeoutMs ?? 30000;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        // Create a promise with timeout
        const result = await Promise.race([
          operation(),
          new Promise<never>((_, reject) =>
            setTimeout(
              () =>
                reject(
                  new Error(`${operationName} timed out after ${timeout}ms`)
                ),
              timeout
            )
          ),
        ]);

        return result as T;
      } catch (error) {
        console.error(
          `Error calling ${operationName} (attempt ${attempt + 1}/${
            maxRetries + 1
          }):`,
          error
        );

        // If this was the last attempt, throw the error
        if (attempt === maxRetries) {
          throw error;
        }

        // Wait before the next attempt
        console.log(`Retrying ${operationName} in ${retryDelay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }

    throw new Error(
      `Failed to call ${operationName} after ${maxRetries} retries`
    );
  }

  /**
   * Get app info from AWS Amplify
   */
  private async getAmplifyAppInfo(
    appId: string,
    client: AmplifyClient,
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): Promise<any> {
    console.log(`Fetching Amplify app info for app ID: ${appId}`);

    const command = new GetAppCommand({
      appId: appId,
    });

    const response = await this.callWithRetry(
      () => client.send(command),
      "GetAppCommand",
      options
    );

    return response.app;
  }

  /**
   * Get branch info from AWS Amplify
   */
  private async getAmplifyBranchInfo(
    appId: string,
    branchName: string,
    client: AmplifyClient,
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): Promise<any> {
    console.log(`Fetching branch info for branch: ${branchName}`);

    const command = new GetBranchCommand({
      appId: appId,
      branchName: branchName,
    });

    const response = await this.callWithRetry(
      () => client.send(command),
      "GetBranchCommand",
      options
    );

    return response.branch;
  }

  /**
   * Get recent jobs for an Amplify app
   */
  private async getRecentJobs(
    appId: string,
    client: AmplifyClient,
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): Promise<any[]> {
    console.log(`Fetching recent jobs for app ID: ${appId}`);

    const maxToFetch = options.maxRecentJobs || 10;

    const command = new ListJobsCommand({
      appId: appId,
      maxResults: maxToFetch,
      branchName: options.branchName || "main",
    });

    const response = await this.callWithRetry(
      () => client.send(command),
      "ListJobsCommand",
      options
    );

    return response.jobSummaries || [];
  }

  /**
   * Fetch CloudWatch metrics for the Amplify app
   */
  private async getCloudWatchMetrics(
    appId: string,
    client: CloudWatchClient,
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): Promise<any> {
    const hoursToFetch = options.metricsTimeRangeHours || 24;
    const endTime = new Date();
    const startTime = new Date(
      endTime.getTime() - hoursToFetch * 60 * 60 * 1000
    );

    console.log(
      `Fetching metrics from ${startTime.toISOString()} to ${endTime.toISOString()}`
    );

    // Try both known namespace and dimension combinations
    const metricQueries: MetricDataQuery[] = [
      // AWS/AmplifyHosting namespace (newer apps)
      {
        Id: "requestCount1",
        MetricStat: {
          Metric: {
            Namespace: "AWS/AmplifyHosting",
            MetricName: "Requests",
            Dimensions: [
              {
                Name: "App",
                Value: appId,
              },
            ],
          },
          // 30 Days period
          Period: 3600 * 24 * 30,
          Stat: "Sum",
        },
      },
    ];

    const command = new GetMetricDataCommand({
      MetricDataQueries: metricQueries,
      StartTime: startTime,
      EndTime: endTime,
      // ScanBy: "TimestampDescending", // Get the most recent data first
    });

    try {
      const response = await this.callWithRetry(
        () => client.send(command),
        "GetMetricDataCommand",
        options
      );

      // console.log(
      //   "GetMetricDataCommand response:",
      //   JSON.stringify(response, null, 2)
      // );

      // Process metric results
      const metricsResult = {
        requestCount: 0,
        errorRate: 0,
        averageResponseTime: 0,
        metricsStartTime: startTime,
        metricsEndTime: endTime,
      };

      // Process request counts - try both namespace variations
      const requestData1 = response.MetricDataResults?.find(
        (r) => r.Id === "requestCount1"
      );
      const requestData2 = response.MetricDataResults?.find(
        (r) => r.Id === "requestCount2"
      );

      if (
        requestData1 &&
        requestData1.Values &&
        requestData1.Values.length > 0
      ) {
        metricsResult.requestCount = requestData1.Values.reduce(
          (sum, val) => sum + val,
          0
        );
        console.log(
          `Found ${metricsResult.requestCount} total requests from AmplifyHosting namespace`
        );
      } else if (
        requestData2 &&
        requestData2.Values &&
        requestData2.Values.length > 0
      ) {
        metricsResult.requestCount = requestData2.Values.reduce(
          (sum, val) => sum + val,
          0
        );
        console.log(
          `Found ${metricsResult.requestCount} total requests from Amplify namespace`
        );
      } else {
        console.log("No request count data found in either namespace");
      }

      // Calculate error rate from 4xx and 5xx errors for AmplifyHosting namespace
      const error4xxData = response.MetricDataResults?.find(
        (r) => r.Id === "errorRate1"
      );
      const error5xxData = response.MetricDataResults?.find(
        (r) => r.Id === "error5xx1"
      );

      if (
        (error4xxData &&
          error4xxData.Values &&
          error4xxData.Values.length > 0) ||
        (error5xxData && error5xxData.Values && error5xxData.Values.length > 0)
      ) {
        const errors4xx =
          error4xxData && error4xxData.Values
            ? error4xxData.Values.reduce((sum, val) => sum + val, 0)
            : 0;

        const errors5xx =
          error5xxData && error5xxData.Values
            ? error5xxData.Values.reduce((sum, val) => sum + val, 0)
            : 0;

        const totalErrors = errors4xx + errors5xx;

        if (metricsResult.requestCount > 0) {
          metricsResult.errorRate = totalErrors / metricsResult.requestCount;
          console.log(
            `Calculated error rate: ${(metricsResult.errorRate * 100).toFixed(
              2
            )}% from AmplifyHosting namespace`
          );
        }
      } else {
        // Try the direct error rate from Amplify namespace
        const errorRateData = response.MetricDataResults?.find(
          (r) => r.Id === "errorRate2"
        );

        if (
          errorRateData &&
          errorRateData.Values &&
          errorRateData.Values.length > 0
        ) {
          metricsResult.errorRate =
            errorRateData.Values.reduce((sum, val) => sum + val, 0) /
            errorRateData.Values.length;
          console.log(
            `Found error rate: ${(metricsResult.errorRate * 100).toFixed(
              2
            )}% from Amplify namespace`
          );
        } else {
          console.log("No error rate data found in either namespace");
        }
      }

      // Calculate average response time - try both namespace variations
      const latencyData1 = response.MetricDataResults?.find(
        (r) => r.Id === "latency1"
      );
      const latencyData2 = response.MetricDataResults?.find(
        (r) => r.Id === "latency2"
      );

      if (
        latencyData1 &&
        latencyData1.Values &&
        latencyData1.Values.length > 0
      ) {
        metricsResult.averageResponseTime =
          latencyData1.Values.reduce((sum, val) => sum + val, 0) /
          latencyData1.Values.length;
        console.log(
          `Found average latency: ${metricsResult.averageResponseTime.toFixed(
            2
          )}ms from AmplifyHosting namespace`
        );
      } else if (
        latencyData2 &&
        latencyData2.Values &&
        latencyData2.Values.length > 0
      ) {
        metricsResult.averageResponseTime =
          latencyData2.Values.reduce((sum, val) => sum + val, 0) /
          latencyData2.Values.length;
        console.log(
          `Found average latency: ${metricsResult.averageResponseTime.toFixed(
            2
          )}ms from Amplify namespace`
        );
      } else {
        console.log("No latency data found in either namespace");
      }

      return metricsResult;
    } catch (error) {
      console.error("Error fetching CloudWatch metrics:", error);
      return null; // Return null on error so we can still continue with other data
    }
  }

  /**
   * Main implementation of the enrichment strategy
   */
  protected async executeEnrichment<M extends ProjectWithAmplifyMetadata>(
    project: Project<M>,
    options: AWSAmplifyStatsEnrichmentStrategyOptions
  ): Promise<EnrichmentResult<AWSAmplifyStatsData>> {
    try {
      const metadata = project.getMetadata();

      // Determine which appId to use (from options or metadata)
      const appId = options.appId || metadata.amplifyAppId;
      const region = options.region || metadata.amplifyRegion || "us-east-1";

      if (!appId) {
        return {
          success: false,
          error: new Error(
            "Amplify app ID not provided in options or metadata"
          ),
        };
      }

      // Create AWS clients
      const amplifyClient = this.createAmplifyClient({
        ...options,
        region,
      });

      // Get app info
      const appInfo = await this.getAmplifyAppInfo(
        appId,
        amplifyClient,
        options
      );

      if (!appInfo) {
        return {
          success: false,
          error: new Error(
            `Could not retrieve information for Amplify app: ${appId}`
          ),
        };
      }

      // Determine which branch to analyze
      const branchName =
        options.branchName ||
        metadata.amplifyBranch ||
        appInfo.productionBranch ||
        "main";

      console.log("Branch Name:", branchName);

      // Get branch info
      let branchInfo;
      try {
        branchInfo = await this.getAmplifyBranchInfo(
          appId,
          branchName,
          amplifyClient,
          options
        );
      } catch (error) {
        console.warn(
          `Could not retrieve branch info for ${branchName}: ${error}`
        );
        // Proceeding without branch info, it's not critical
      }

      // Build the base result
      const result: AWSAmplifyStatsData = {
        appName: appInfo.name,
        appId: appInfo.appId,
        defaultDomain: appInfo.defaultDomain,
        createTime:
          appInfo.createTime instanceof Date
            ? appInfo.createTime
            : new Date(appInfo.createTime),
        updateTime:
          appInfo.updateTime instanceof Date
            ? appInfo.updateTime
            : new Date(appInfo.updateTime),
        status: appInfo.status,
        platform: appInfo.platform,
        framework: appInfo.framework,
      };

      // Add branch info if available
      if (branchInfo) {
        result.productionBranch = {
          branchName: branchInfo.branchName,
          displayName: branchInfo.displayName || branchInfo.branchName,
          status: branchInfo.status,
          lastDeployTime:
            branchInfo.lastDeployTime instanceof Date
              ? branchInfo.lastDeployTime
              : branchInfo.lastDeployTime
              ? new Date(branchInfo.lastDeployTime)
              : undefined,
          ttl: branchInfo.ttl,
        };
      }

      // Get recent jobs if requested
      if (options.includeRecentJobs !== false) {
        try {
          const jobsList = await this.getRecentJobs(
            appId,
            amplifyClient,
            options
          );

          // Format job data
          result.recentJobs = jobsList.map((job) => ({
            jobId: job.jobId,
            status: job.status,
            type: job.type,
            branchName: job.branchName,
            startTime:
              job.startTime instanceof Date
                ? job.startTime
                : new Date(job.startTime),
            endTime:
              job.endTime instanceof Date
                ? job.endTime
                : job.endTime
                ? new Date(job.endTime)
                : undefined,
          }));

          // Calculate build statistics from jobs
          if (result.recentJobs.length > 0) {
            if (!result.metrics) {
              result.metrics = {};
            }

            result.metrics.totalBuilds = result.recentJobs.length;
            result.metrics.successfulBuilds = result.recentJobs.filter(
              (job) => job.status === "SUCCEED"
            ).length;
            result.metrics.failedBuilds = result.recentJobs.filter(
              (job) => job.status === "FAILED"
            ).length;
          }
        } catch (error) {
          console.warn(`Could not retrieve recent jobs: ${error}`);
          // Proceeding without jobs info, it's not critical
        }
      }

      // Get CloudWatch metrics if requested
      if (options.includeCloudWatchMetrics !== false) {
        try {
          console.log("Fetching CloudWatch metrics...");
          const cloudWatchClient = this.createCloudWatchClient({
            ...options,
            region,
          });

          const metrics = await this.getCloudWatchMetrics(
            appId,
            cloudWatchClient,
            options
          );
          console.log("CloudWatch metrics:", metrics);

          if (metrics) {
            result.metrics = {
              ...result.metrics,
              ...metrics,
            };
          }
        } catch (error) {
          console.warn(`Could not retrieve CloudWatch metrics: ${error}`);
          // Proceeding without metrics, it's not critical
        }
      }

      console.log(
        `Successfully collected AWS Amplify stats for app: ${result.appName} (${appId})`
      );

      return {
        success: true,
        data: { ...result, appName: "", appId: "", defaultDomain: "" },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }
}
