import { Project } from "../core/Project";
import { CryptoEVMProjectMetadata, ProjectType } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";
import { EVMUtils } from "../utils/evmUtils";

export interface EVMProjectData {
  transactions: number;
  events: number;
  ethInflow: bigint; // ETH value flowing into contract (in ETH, not wei)
}

export interface EVMProjectEnrichmentStrategyOptions
  extends EnrichmentStrategyOptions {
  // Optional start block for log retrieval (default: 0)
  startBlock?: bigint;

  // Optional end block for log retrieval (default: latest block)
  endBlock?: bigint;

  // Optional batch size for log retrieval (default: 10000)
  logsBatchSize?: number;

  // Optional number of concurrent batches for log retrieval (default: 5)
  concurrentBatchesLogs?: number;

  // Optional batch size for transaction processing (default: 10)
  hashesBatchSize?: number;

  // Optional wait time in milliseconds between cycles (default: 0)
  hashesCycleWait?: number;
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
      const endBlock = options.endBlock ?? (await client.getBlockNumber());
      console.log(`End block is ${endBlock}`);

      // Use batch processing for large contracts
      const batchSize = options.logsBatchSize ?? 10000; // Adjust based on network and contract activity
      console.log(`Using batch size of ${batchSize}`);

      // Use provided startBlock or default to 0
      const startBlock =
        options.startBlock !== undefined
          ? BigInt(options.startBlock)
          : BigInt(0);
      console.log(`Starting from block ${startBlock}`);

      let allLogs: any[] = [];

      // Number of concurrent block range fetches to execute in parallel
      const concurrentBatches = options.concurrentBatchesLogs ?? 5;
      console.log(
        `Using ${concurrentBatches} concurrent block range fetches for getting logs`
      );

      // Calculate total block range and number of batches
      const totalBlockRange = endBlock - startBlock + BigInt(1);
      const totalBatches = Number(
        (totalBlockRange + BigInt(batchSize) - BigInt(1)) / BigInt(batchSize)
      );
      console.log(
        `Total block range: ${totalBlockRange}, requiring ${totalBatches} batches`
      );

      // Process blocks in parallel batches
      for (
        let batchOffset = 0;
        batchOffset < totalBatches;
        batchOffset += concurrentBatches
      ) {
        const batchPromises = [];

        // Create concurrent batch fetching promises
        for (let i = 0; i < concurrentBatches; i++) {
          const currentBatchIndex = batchOffset + i;
          if (currentBatchIndex >= totalBatches) break;

          const fromBlock =
            startBlock + BigInt(currentBatchIndex) * BigInt(batchSize);
          const toBlock =
            fromBlock + BigInt(batchSize) > endBlock
              ? endBlock
              : fromBlock + BigInt(batchSize) - BigInt(1);

          const percentComplete = Number(
            ((currentBatchIndex + 1) * 100) / totalBatches
          );
          console.log(
            `Starting fetch for blocks ${fromBlock} to ${toBlock} (batch ${
              currentBatchIndex + 1
            }/${totalBatches}, ${percentComplete.toFixed(2)}% overall)`
          );

          // Create a promise for this block range
          const batchPromise = async () => {
            try {
              const batchLogs = await client.getLogs({
                address: contractAddress as `0x${string}`,
                fromBlock: fromBlock,
                toBlock: toBlock,
              });

              console.log(
                `Retrieved ${batchLogs.length} logs for blocks ${fromBlock} to ${toBlock}`
              );

              return batchLogs;
            } catch (error) {
              console.error(
                `Error fetching logs for blocks ${fromBlock} to ${toBlock}:`,
                error
              );
              return [];
            }
          };

          batchPromises.push(batchPromise());
        }

        // Wait for all concurrent batch promises to resolve
        const batchResults = await Promise.all(batchPromises);

        // Accumulate logs from all batches
        for (const logs of batchResults) {
          allLogs = [...allLogs, ...logs];
        }

        // Show progress after each set of concurrent batches
        const processedBatches = Math.min(
          batchOffset + concurrentBatches,
          totalBatches
        );
        console.log(
          `Processed ${processedBatches} of ${totalBatches} batch ranges`
        );
        console.log(`Current log count: ${allLogs.length}`);
      }

      // After collecting all logs
      const logs = allLogs;
      console.log(
        `Retrieved ${logs.length} logs for contract ${contractAddress}`
      );

      // Count unique transactions
      const uniqueTransactionHashes = new Set<string>();
      for (const log of logs) {
        if (log.transactionHash) {
          uniqueTransactionHashes.add(log.transactionHash);
        }
      }

      const uniqueTransactionCount = uniqueTransactionHashes.size;
      console.log(`Found ${uniqueTransactionCount} unique transactions`);

      // Track ETH flows
      let totalEthInflow = BigInt(0);

      console.log(
        `Analyzing ETH flows for ${uniqueTransactionHashes.size} transactions...`
      );

      // Process transactions in batches to avoid rate limiting
      const txHashes = Array.from(uniqueTransactionHashes);
      const hashesBatchSize = options.hashesBatchSize ?? 10; // Adjust based on network and contract activity

      console.log("Total transactions:", txHashes.length);
      console.log(`Processing transactions in batches of ${hashesBatchSize}`);

      for (let i = 0; i < txHashes.length; i += hashesBatchSize) {
        const cycleStartTime = Date.now();
        const batch = txHashes.slice(i, i + hashesBatchSize);

        // Show progress
        // if (i % 200 === 0 || i + batch.length >= txHashes.length) {
        console.log(
          `Processing transactions ${i} to ${i + batch.length} of ${
            txHashes.length
          }...`
        );
        // }

        // Process transactions concurrently within the batch
        const results = await Promise.all(
          batch.map(async (txHash) => {
            try {
              const tx = await client.getTransaction({
                hash: txHash as `0x${string}`,
              });
              const receipt = await client.getTransactionReceipt({
                hash: txHash as `0x${string}`,
              });

              const normalizedContractAddress = contractAddress.toLowerCase();
              const txValue = tx.value || BigInt(0);

              // Check if transaction is to our contract (inflow)
              const isToContract =
                tx.to?.toLowerCase() === normalizedContractAddress;

              // ETH inflow: direct transactions to the contract
              if (isToContract && txValue > 0) {
                // console.log(`Inflow: ${txValue}. Tx: ${txHash}`);
                return { inflow: txValue };
              }

              // Internal transactions (from receipt)
              const internalTransfers = receipt.logs.filter(
                (log: any) =>
                  log.address.toLowerCase() === normalizedContractAddress &&
                  log.topics[0] === "0xddf252ad" // Transfer event signature
              );

              let inflow = BigInt(0);

              for (const transfer of internalTransfers) {
                const from = transfer.topics[1].slice(26).toLowerCase();
                const to = transfer.topics[2].slice(26).toLowerCase();
                const value = BigInt(transfer.data);

                if (to === normalizedContractAddress) {
                  inflow += value;
                }
              }

              return { inflow };
            } catch (error) {
              console.error(`Error processing transaction ${txHash}:`, error);
              return { inflow: BigInt(0) };
            }
          })
        );

        for (const result of results) {
          totalEthInflow += result.inflow;
        }

        // Calculate elapsed time for this cycle
        const cycleEndTime = Date.now();
        const cycleElapsedTime = cycleEndTime - cycleStartTime;

        // Check if we need to wait between cycles
        const waitTimeMs = options.hashesCycleWait ?? 0;
        if (
          waitTimeMs > 0 &&
          cycleElapsedTime < waitTimeMs &&
          i + hashesBatchSize < txHashes.length
        ) {
          const waitNeeded = waitTimeMs - cycleElapsedTime;
          console.log(
            `Cycle completed in ${cycleElapsedTime}ms, waiting ${waitNeeded}ms before next cycle...`
          );

          // Wait for the remaining time
          await new Promise((resolve) => setTimeout(resolve, waitNeeded));
          console.log(`Wait complete, continuing to next cycle`);
        } else {
          console.log(
            `Cycle completed in ${cycleElapsedTime}ms, continuing immediately`
          );
        }
      }

      console.log(`Total ETH inflow: ${totalEthInflow}`);

      return {
        success: true,
        data: {
          transactions: uniqueTransactionCount, // Now counting unique transactions
          events: logs.length, // Keep track of total events too if helpful
          ethInflow: totalEthInflow,
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
