import { Project } from "../core/Project";
import { CryptoEVMProjectMetadata, ProjectType } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";
import { EVMUtils } from "../utils/evmUtils";
import { getContract } from "viem";

// ERC20 standard interface ABI (minimal for our needs)
const ERC20_ABI = [
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
] as const;

export interface ERC20TokenFlowData {
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  totalInflow: bigint;
  totalOutflow: bigint;
  currentBalance: bigint;
  transferCount: number;
}

export interface ERC20FlowsEnrichmentStrategyOptions
  extends EnrichmentStrategyOptions {
  // Required: The ERC20 token contract address to track
  erc20ContractAddress: string;

  // Optional start block for log retrieval (default: 0)
  startBlock?: bigint;

  // Optional end block for log retrieval (default: latest block)
  endBlock?: bigint;

  // Optional batch size for log retrieval (default: 10000)
  logsBatchSize?: number;

  // Optional number of concurrent batches for log retrieval (default: 5)
  concurrentBatches?: number;

  // Optional method timeout in milliseconds (default: 30000)
  methodTimeoutMs?: number;

  // Optional retries for failed method calls (default: 3)
  methodRetries?: number;

  // Optional delay between retries in milliseconds (default: 1000)
  retryDelayMs?: number;
}

export class ERC20FlowsEnrichmentStrategy extends BaseEnrichmentStrategy<
  ERC20TokenFlowData,
  ERC20FlowsEnrichmentStrategyOptions
> {
  constructor() {
    super(
      "erc20-token-flow",
      "ERC20 Token Flow Analysis",
      [ProjectType.CRYPTO, ProjectType.NFT],
      {
        timeoutMs: 1000 * 3600, // 1 hour timeout for the entire process
        methodTimeoutMs: 30000, // 30 seconds timeout per method call
        methodRetries: 3, // 3 retries for failed method calls
        retryDelayMs: 1000, // 1 second delay between retries
      }
    );
  }

  /**
   * Overrides the canEnrich method to check if the project has a contract address and chain name,
   * and if an ERC20 contract address is provided in the options
   */
  canEnrich<M extends CryptoEVMProjectMetadata>(
    project: Project<M>,
    options?: Partial<ERC20FlowsEnrichmentStrategyOptions>
  ): boolean {
    if (!super.canEnrich(project)) {
      return false;
    }

    const metadata = project.getMetadata() as CryptoEVMProjectMetadata;
    const hasProjectData = Boolean(
      metadata.contractAddress && metadata.chainName
    );

    // Additionally check if ERC20 contract address is provided either in options or base options
    const mergedOptions = options
      ? { ...this.options, ...options }
      : this.options;
    const hasErc20Address = Boolean(mergedOptions.erc20ContractAddress);

    return hasProjectData && hasErc20Address;
  }

  /**
   * Helper method to call a contract method with retries
   */
  private async callContractMethodWithRetry<T>(
    methodName: string,
    contract: any,
    args: any[] = [],
    options: ERC20FlowsEnrichmentStrategyOptions
  ): Promise<T> {
    const maxRetries = options.methodRetries ?? 3;
    const retryDelay = options.retryDelayMs ?? 1000;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        // Create a promise with timeout
        const result = (await Promise.race([
          // Using the read method to call functions by name
          contract.read[methodName](args),
          new Promise<never>((_, reject) =>
            setTimeout(
              () => reject(new Error(`${methodName} timeout`)),
              options.methodTimeoutMs ?? 30000
            )
          ),
        ])) as T;

        return result;
      } catch (error) {
        console.error(
          `Error calling ${methodName} (attempt ${attempt + 1}/${
            maxRetries + 1
          }):`,
          error
        );

        // If this was the last attempt, throw the error
        if (attempt === maxRetries) {
          throw error;
        }

        // Wait before the next attempt
        console.log(`Retrying ${methodName} in ${retryDelay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }

    throw new Error(`Failed to call ${methodName} after ${maxRetries} retries`);
  }

  protected async executeEnrichment<M extends CryptoEVMProjectMetadata>(
    project: Project<M>,
    options: ERC20FlowsEnrichmentStrategyOptions
  ): Promise<EnrichmentResult<ERC20TokenFlowData>> {
    const metadata = project.getMetadata() as CryptoEVMProjectMetadata;

    try {
      const { contractAddress, chainName } = metadata;
      const { erc20ContractAddress } = options;

      if (!contractAddress) {
        return {
          success: false,
          error: new Error("Target contract address not provided in metadata"),
        };
      }

      if (!chainName) {
        return {
          success: false,
          error: new Error("Chain name not provided in metadata"),
        };
      }

      if (!erc20ContractAddress) {
        return {
          success: false,
          error: new Error("ERC20 contract address not provided in options"),
        };
      }

      console.log(
        `Analyzing ERC20 token flow for token ${erc20ContractAddress} in relation to contract ${contractAddress} on ${chainName}`
      );

      // Create public client for the specified chain using EVMUtils
      const client = EVMUtils.getPublicClient(chainName);

      // Create a contract instance for the ERC20 token
      const tokenContract = getContract({
        address: erc20ContractAddress as `0x${string}`,
        abi: ERC20_ABI,
        client,
      });

      // Get token metadata
      console.log(`Fetching token metadata for ${erc20ContractAddress}...`);
      const tokenName = await this.callContractMethodWithRetry<string>(
        "name",
        tokenContract,
        [],
        options
      );

      const tokenSymbol = await this.callContractMethodWithRetry<string>(
        "symbol",
        tokenContract,
        [],
        options
      );

      const tokenDecimals = await this.callContractMethodWithRetry<number>(
        "decimals",
        tokenContract,
        [],
        options
      );

      console.log(
        `Token metadata fetched: ${tokenName} (${tokenSymbol}), ${tokenDecimals} decimals`
      );

      // Fetch current balance of the target contract
      console.log(`Fetching current token balance for ${contractAddress}...`);
      const currentBalance = await this.callContractMethodWithRetry<bigint>(
        "balanceOf",
        tokenContract,
        [contractAddress as `0x${string}`],
        options
      );

      console.log(`Current token balance: ${currentBalance}`);

      // Get current block number to show progress
      const endBlock = options.endBlock ?? (await client.getBlockNumber());
      console.log(`End block is ${endBlock}`);

      // Use batch processing for large contracts
      const batchSize = options.logsBatchSize ?? 10000;
      console.log(`Using batch size of ${batchSize}`);

      // Use provided startBlock or default to 0
      const startBlock = options.startBlock ?? BigInt(0);
      console.log(`Starting from block ${startBlock}`);

      // Number of concurrent block range fetches to execute in parallel
      const concurrentBatches = options.concurrentBatches ?? 5;
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

      // Track all Transfer events for the ERC20 token
      let allTransferLogs: any[] = [];

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
              // Get Transfer event logs for the ERC20 token where target contract is from or to
              const batchLogs = await client.getLogs({
                address: erc20ContractAddress as `0x${string}`,
                event: {
                  anonymous: false,
                  inputs: [
                    {
                      indexed: true,
                      name: "from",
                      type: "address",
                    },
                    {
                      indexed: true,
                      name: "to",
                      type: "address",
                    },
                    {
                      indexed: false,
                      name: "value",
                      type: "uint256",
                    },
                  ],
                  name: "Transfer",
                  type: "event",
                },
                // Use OR logic to match transfers where our contract is either the sender or receiver
                // We need to fetch all Transfer events for the token and filter them manually
                fromBlock: fromBlock,
                toBlock: toBlock,
              });

              // Filter logs to only include those where target contract is sender or receiver
              const filteredBatchLogs = batchLogs.filter((log) => {
                // Extract addresses from topics (remove padding)
                const fromAddress =
                  "0x" + log.topics[1].slice(26).toLowerCase();
                const toAddress = "0x" + log.topics[2].slice(26).toLowerCase();

                // Check if our contract is sender or receiver
                return (
                  fromAddress === normalizedContractAddress ||
                  toAddress === normalizedContractAddress
                );
              });

              console.log(
                `Retrieved ${filteredBatchLogs.length} matching transfer logs (from ${batchLogs.length} total) for blocks ${fromBlock} to ${toBlock}`
              );

              return filteredBatchLogs;
            } catch (error) {
              console.error(
                `Error fetching transfer logs for blocks ${fromBlock} to ${toBlock}:`,
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
          allTransferLogs = [...allTransferLogs, ...logs];
        }

        // Show progress after each set of concurrent batches
        const processedBatches = Math.min(
          batchOffset + concurrentBatches,
          totalBatches
        );
        console.log(
          `Processed ${processedBatches} of ${totalBatches} batch ranges`
        );
        console.log(`Current transfer log count: ${allTransferLogs.length}`);
      }

      console.log(
        `Total transfer logs found: ${allTransferLogs.length} for token ${erc20ContractAddress}`
      );

      // Analyze transfer logs to calculate inflow and outflow
      let totalInflow = BigInt(0);
      let totalOutflow = BigInt(0);
      const transferCount = allTransferLogs.length;
      const normalizedContractAddress = contractAddress.toLowerCase();

      for (const log of allTransferLogs) {
        try {
          // Note: Transfer event has indexed from and to (topics), value is in data
          const from = log.topics[1].toLowerCase();
          const to = log.topics[2].toLowerCase();
          const value = BigInt(log.data);

          // Extract address from topic (remove padding)
          const fromAddress = "0x" + from.slice(26);
          const toAddress = "0x" + to.slice(26);

          // Check if transfer is to our contract (inflow)
          if (toAddress === normalizedContractAddress) {
            totalInflow += value;
          }

          // Check if transfer is from our contract (outflow)
          if (fromAddress === normalizedContractAddress) {
            totalOutflow += value;
          }
        } catch (error) {
          console.error(`Error processing transfer log:`, error);
        }
      }

      console.log(`Analysis complete.`);
      console.log(`Total inflow: ${totalInflow}`);
      console.log(`Total outflow: ${totalOutflow}`);

      return {
        success: true,
        data: {
          tokenName,
          tokenSymbol,
          tokenDecimals,
          totalInflow,
          totalOutflow,
          currentBalance,
          transferCount,
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
