import { Project } from "../core/Project";
import { CryptoEVMProjectMetadata, ProjectType } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";
import { EVMUtils } from "../utils/evmUtils";
import { getContract } from "viem";

// ERC721 standard interface ABI (minimal for our needs)
const ERC721_ABI = [
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
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export interface ERC721TokenData {
  name: string;
  symbol: string;
  totalSupply: bigint;
}

export interface ERC721EnrichmentStrategyOptions
  extends EnrichmentStrategyOptions {
  // Optional timeout for each contract method call (default: 30000ms)
  methodTimeoutMs?: number;

  // Optional retries for failed method calls (default: 3)
  methodRetries?: number;

  // Optional delay between retries in milliseconds (default: 1000)
  retryDelayMs?: number;
}

export class ERC721EnrichmentStrategy extends BaseEnrichmentStrategy<
  ERC721TokenData,
  ERC721EnrichmentStrategyOptions
> {
  constructor() {
    super(
      "erc721-token-data",
      "ERC721 Token Data",
      [ProjectType.CRYPTO, ProjectType.NFT],
      {
        timeoutMs: 60000, // 1 minute timeout for the entire enrichment process
        methodTimeoutMs: 30000, // 30 seconds timeout per method call
        methodRetries: 3, // 3 retries for failed method calls
        retryDelayMs: 1000, // 1 second delay between retries
      }
    );
  }

  /**
   * Overrides the canEnrich method to check if the project has a contract address and chain name
   */
  canEnrich<M extends CryptoEVMProjectMetadata>(project: Project<M>): boolean {
    if (!super.canEnrich(project)) {
      return false;
    }

    const metadata = project.getMetadata() as CryptoEVMProjectMetadata;
    return Boolean(metadata.contractAddress && metadata.chainName);
  }

  /**
   * Helper method to call a contract method with retries
   */
  private async callContractMethodWithRetry<T>(
    methodName: string,
    contract: any,
    options: ERC721EnrichmentStrategyOptions
  ): Promise<T> {
    const maxRetries = options.methodRetries ?? 3;
    const retryDelay = options.retryDelayMs ?? 1000;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        // Create a promise with timeout
        const result = (await Promise.race([
          // Using the read method to call functions by name
          contract.read[methodName](),
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
    options: ERC721EnrichmentStrategyOptions
  ): Promise<EnrichmentResult<ERC721TokenData>> {
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

      console.log(
        `Fetching ERC721 data for contract ${contractAddress} on ${chainName}`
      );

      // Create public client for the specified chain using EVMUtils
      const client = EVMUtils.getPublicClient(chainName);

      // Create a contract instance
      const contract = getContract({
        address: contractAddress as `0x${string}`,
        abi: ERC721_ABI,
        client,
      });

      // Fetch token data with retries
      console.log(`Fetching name for ${contractAddress}...`);
      const name = await this.callContractMethodWithRetry<string>(
        "name",
        contract,
        options
      );

      console.log(`Fetching symbol for ${contractAddress}...`);
      const symbol = await this.callContractMethodWithRetry<string>(
        "symbol",
        contract,
        options
      );

      console.log(`Fetching totalSupply for ${contractAddress}...`);
      const totalSupply = await this.callContractMethodWithRetry<bigint>(
        "totalSupply",
        contract,
        options
      );

      console.log(`Successfully fetched ERC721 data for ${contractAddress}`);
      console.log(
        `Name: ${name}, Symbol: ${symbol}, Total Supply: ${totalSupply}`
      );

      return {
        success: true,
        data: {
          name,
          symbol,
          totalSupply,
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
