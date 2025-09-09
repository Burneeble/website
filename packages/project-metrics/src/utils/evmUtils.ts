import { createPublicClient, http, defineChain } from "viem";
import { mainnet, polygon, optimism, arbitrum, base, theta } from "viem/chains";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/*
 * EVMUtils
 *
 * A collection of utility functions for working with the EVM.
 */
export class EVMUtils {
  /**
   * Get the chain definition for a given chain name.
   * @param chainName The name of the chain
   * @returns The chain definition
   */
  public static getChainByName(chainName: string) {
    const chainMap: {
      [chainName: string]: ReturnType<typeof defineChain>;
    } = {
      ethereum: mainnet,
      polygon: polygon,
      optimism: optimism,
      arbitrum: arbitrum,
      base: base,
      theta: theta,
      // Add other chains as needed
    };

    const chain = chainMap[chainName.toLowerCase()];
    if (!chain) {
      throw new Error(`Chain "${chainName}" not found`);
    }

    return chain;
  }

  public static getPublicClient(chainName: string) {
    const chain = this.getChainByName(chainName);

    // Check for environment variable with RPC URL for this chain
    const envVarName = `${chainName.toUpperCase()}_RPC_URL`;
    const customRpcUrl = process.env[envVarName];

    let transport;
    if (customRpcUrl) {
      console.log(
        `Using custom RPC URL from ${envVarName} environment variable`
      );
      transport = http(customRpcUrl);
    } else {
      console.log(
        `No custom RPC URL found for ${chainName}, using default transport`
      );
      transport = http();
    }

    const client = createPublicClient({
      chain,
      transport,
    });

    return client;
  }
}
