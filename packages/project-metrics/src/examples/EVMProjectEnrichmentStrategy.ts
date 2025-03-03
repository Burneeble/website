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
  ethOutflow: bigint; // ETH value flowing out of contract (in ETH, not wei)
}

export interface EVMProjectEnrichmentStrategyOptions
  extends EnrichmentStrategyOptions {
  // Optional start block for log retrieval (default: 0)
  startBlock?: bigint;

  // Optional end block for log retrieval (default: latest block)
  endBlock?: bigint;

  // Optional batch size for log retrieval (default: 10000)
  batchSize?: number;
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
      const batchSize = options.batchSize ?? 10000; // Adjust based on network and contract activity
      console.log(`Using batch size of ${batchSize}`);

      // Use provided startBlock or default to 0
      let fromBlock =
        options.startBlock !== undefined
          ? BigInt(options.startBlock)
          : BigInt(0);

      console.log(`Starting from block ${fromBlock}`);

      let allLogs: any[] = [];
      let iterationCount = 0;

      while (fromBlock <= endBlock) {
        iterationCount++;
        const toBlock =
          fromBlock + BigInt(batchSize) > endBlock
            ? endBlock
            : fromBlock + BigInt(batchSize);

        const isLastIteration = toBlock === endBlock;
        const shouldLog =
          iterationCount === 1 || iterationCount % 10 === 0 || isLastIteration;

        if (shouldLog) {
          const percentComplete = Number((toBlock * BigInt(100)) / endBlock);
          console.log(
            `Fetching logs from block ${fromBlock} to ${toBlock} (${percentComplete.toFixed(
              2
            )}% complete)`
          );
        }

        const batchLogs = await client.getLogs({
          address: contractAddress as `0x${string}`,
          fromBlock: fromBlock,
          toBlock: toBlock,
        });

        if (shouldLog)
          console.log(
            `Retrieved ${batchLogs.length} logs for this block range`
          );

        allLogs = [...allLogs, ...batchLogs];
        fromBlock = toBlock + BigInt(1);
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
      let totalEthOutflow = BigInt(0);

      console.log(
        `Analyzing ETH flows for ${uniqueTransactionHashes.size} transactions...`
      );

      // Process transactions in batches to avoid rate limiting
      const txHashes = Array.from(uniqueTransactionHashes);
      const hashesBatchSize = 10;

      console.log("Total transactions:", txHashes.length);
      console.log(`Processing transactions in batches of ${hashesBatchSize}`);

      for (let i = 0; i < txHashes.length; i += hashesBatchSize) {
        const batch = txHashes.slice(i, i + hashesBatchSize);

        // Show progress
        if (i % 200 === 0 || i + batch.length >= txHashes.length) {
          console.log(
            `Processing transactions ${i} to ${i + batch.length} of ${
              txHashes.length
            }...`
          );
        }

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

              // Check if transaction is from our contract (outflow)
              const isFromContract =
                tx.from.toLowerCase() === normalizedContractAddress;

              // ETH inflow: direct transactions to the contract
              if (isToContract && txValue > 0) {
                return { inflow: txValue, outflow: BigInt(0) };
              }

              // ETH outflow: transactions from the contract
              if (isFromContract && txValue > 0) {
                return { inflow: BigInt(0), outflow: txValue };
              }

              // Internal transactions (from receipt)
              const internalTransfers = receipt.logs.filter(
                (log: any) =>
                  log.address.toLowerCase() === normalizedContractAddress &&
                  log.topics[0] === "0xddf252ad" // Transfer event signature
              );

              let inflow = BigInt(0);
              let outflow = BigInt(0);

              for (const transfer of internalTransfers) {
                const from = transfer.topics[1].slice(26).toLowerCase();
                const to = transfer.topics[2].slice(26).toLowerCase();
                const value = BigInt(transfer.data);

                if (to === normalizedContractAddress) {
                  inflow += value;
                } else if (from === normalizedContractAddress) {
                  outflow += value;
                }
              }

              return { inflow, outflow };
            } catch (error) {
              console.error(`Error processing transaction ${txHash}:`, error);
              return { inflow: BigInt(0), outflow: BigInt(0) };
            }
          })
        );

        for (const result of results) {
          totalEthInflow += result.inflow;
          totalEthOutflow += result.outflow;
        }
      }

      console.log(`Total ETH inflow: ${totalEthInflow}`);
      console.log(`Total ETH outflow: ${totalEthOutflow}`);

      return {
        success: true,
        data: {
          transactions: uniqueTransactionCount, // Now counting unique transactions
          events: logs.length, // Keep track of total events too if helpful
          ethInflow: totalEthInflow,
          ethOutflow: totalEthOutflow,
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
