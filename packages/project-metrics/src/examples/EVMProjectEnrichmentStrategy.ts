import { Project } from "../core/Project";
import { CryptoEVMProjectMetadata, ProjectType } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";
import { EVMUtils } from "../utils/evmUtils";
import { http } from "viem";

export interface EVMProjectData {
  transactions: number;
}

export interface EVMProjectEnrichmentStrategyOptions
  extends EnrichmentStrategyOptions {
  startBlock?: number | bigint; // Optional starting block
}

export class EVMProjectEnrichmentStrategy extends BaseEnrichmentStrategy<
  EVMProjectData,
  EVMProjectEnrichmentStrategyOptions
> {
  constructor() {
    super(
      "evm-project-data",
      "EVM Project Data",
      [ProjectType.CRYPTO, ProjectType.NFT],
      {
        timeoutMs: 1000 * 3600,
      }
    );
  }

  /**
   * Overrides the canEnrich method to check if the project has a symbol
   */
  canEnrich<M extends CryptoEVMProjectMetadata>(project: Project<M>): boolean {
    if (!super.canEnrich(project)) {
      return false;
    }

    const metadata = project.getMetadata() as CryptoEVMProjectMetadata;
    return Boolean(metadata.symbol);
  }

  protected async executeEnrichment<M extends CryptoEVMProjectMetadata>(
    project: Project<M>,
    options: EVMProjectEnrichmentStrategyOptions
  ): Promise<EnrichmentResult<EVMProjectData>> {
    const metadata = project.getMetadata() as CryptoEVMProjectMetadata;

    try {
      const { contractAddress, chainName } = metadata;

      if (!contractAddress) {
        return {
          success: false,
          error: new Error("Contract address not provided in metadata"),
        };
      }

      if (!chainName) {
        return {
          success: false,
          error: new Error("Chain name not provided in metadata"),
        };
      }

      // Create public client for the specified chain using EVMUtils
      const client = EVMUtils.getPublicClient(chainName);

      console.log(
        `Fetching logs for contract ${contractAddress} on ${chainName}`
      );

      // Get logs for the contract address
      console.log(`Starting log retrieval for ${contractAddress}...`);

      // Get current block number to show progress
      const latestBlock = await client.getBlockNumber();
      console.log(`Latest block is ${latestBlock}`);

      // Use batch processing for large contracts
      const batchSize = 10000; // Adjust based on network and contract activity

      // Use provided startBlock or default to 0
      let fromBlock =
        options.startBlock !== undefined
          ? BigInt(options.startBlock)
          : BigInt(0);

      console.log(`Starting from block ${fromBlock}`);

      let allLogs: any[] = [];

      while (fromBlock <= latestBlock) {
        const toBlock =
          fromBlock + BigInt(batchSize) > latestBlock
            ? latestBlock
            : fromBlock + BigInt(batchSize);

        const percentComplete = Number((toBlock * BigInt(100)) / latestBlock);
        console.log(
          `Fetching logs from block ${fromBlock} to ${toBlock} (${percentComplete.toFixed(
            2
          )}% complete)`
        );

        const batchLogs = await client.getLogs({
          address: contractAddress as `0x${string}`,
          fromBlock: fromBlock,
          toBlock: toBlock,
        });

        console.log(`Retrieved ${batchLogs.length} logs for this block range`);
        allLogs = [...allLogs, ...batchLogs];
        fromBlock = toBlock + BigInt(1);
      }

      const logs = allLogs;

      console.log(
        `Retrieved ${logs.length} logs for contract ${contractAddress}`
      );

      return {
        success: true,
        data: {
          transactions: logs.length, // This is an approximation based on logs
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }
}
