import { createPublicClient, http, defineChain } from "viem";
import { mainnet, polygon, optimism, arbitrum, base } from "viem/chains";

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
    const client = createPublicClient({
      chain,
      transport: http(),
    });

    return client;
  }
}
