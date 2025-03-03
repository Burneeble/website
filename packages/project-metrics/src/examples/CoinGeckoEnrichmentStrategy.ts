import { Project } from "../core/Project";
import { CryptoEVMProjectMetadata, ProjectType } from "../core/ProjectTypes";
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  EnrichmentStrategyOptions,
} from "../enrichment/EnrichmentStrategy";

/**
 * Market data structure for cryptocurrency projects
 */
export interface CryptoMarketData {
  /** Current price in USD */
  currentPrice: number;
  /** Market cap in USD */
  marketCap: number;
  /** 24h trading volume */
  volume24h: number;
  /** 24h price change percentage */
  priceChangePercentage24h: number;
  /** All-time high price in USD */
  ath: number;
  /** Date of data retrieval */
  lastUpdated: string;
}

/**
 * CoinGecko enrichment strategy options
 */
export interface CoinGeckoEnrichmentOptions extends EnrichmentStrategyOptions {
  /** CoinGecko API key for premium features */
  apiKey?: string;
  /** Whether to include additional market data */
  includeAdditionalMarketData?: boolean;
  /** Currency to fetch prices in (default: 'usd') */
  currency?: string;
}

/**
 * Strategy that enriches crypto projects with market data from CoinGecko
 */
export class CoinGeckoEnrichmentStrategy extends BaseEnrichmentStrategy<
  CryptoMarketData,
  CoinGeckoEnrichmentOptions
> {
  constructor() {
    super(
      "coingecko-market-data",
      "CoinGecko Market Data",
      [ProjectType.CRYPTO, ProjectType.NFT],
      {
        timeoutMs: 10000,
        currency: "usd",
        includeAdditionalMarketData: false,
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

  /**
   * Implements the enrichment logic for fetching cryptocurrency market data
   */
  protected async executeEnrichment<M extends CryptoEVMProjectMetadata>(
    project: Project<M>,
    options: CoinGeckoEnrichmentOptions
  ): Promise<EnrichmentResult<CryptoMarketData>> {
    const metadata = project.getMetadata() as CryptoEVMProjectMetadata;

    if (!metadata.symbol) {
      return {
        success: false,
        error: "No cryptocurrency symbol found in project metadata",
      };
    }

    try {
      const currency = options.currency || "usd";

      // In a real implementation, we would make an API call to CoinGecko
      // For this example, we'll simulate a response
      const marketData = await this.fetchMarketData(
        metadata.symbol.toLowerCase(),
        currency,
        options
      );

      return {
        success: true,
        data: marketData,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }

  /**
   * Simulates fetching market data from CoinGecko API
   * In a real implementation, this would make an actual API call
   */
  private async fetchMarketData(
    symbol: string,
    currency: string,
    options: CoinGeckoEnrichmentOptions
  ): Promise<CryptoMarketData> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Generate realistic mock data based on the symbol
    // In a real implementation, this would fetch from CoinGecko's API
    const basePrice = this.getSeededRandomPrice(symbol);
    const priceChange = Math.random() * 20 - 10; // -10% to +10%

    return {
      currentPrice: basePrice,
      marketCap: basePrice * (Math.random() * 1000000000 + 10000000),
      volume24h: basePrice * (Math.random() * 10000000 + 100000),
      priceChangePercentage24h: priceChange,
      ath: basePrice * (1 + Math.random() * 0.5),
      lastUpdated: new Date().toISOString(),
    };
  }

  /**
   * Generates a consistent price based on the symbol string
   * This is just for demo purposes to get consistent results
   */
  private getSeededRandomPrice(symbol: string): number {
    // Create a simple hash of the symbol for consistent results
    let hash = 0;
    for (let i = 0; i < symbol.length; i++) {
      hash = (hash << 5) - hash + symbol.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }

    // Generate a price based on the hash, between $0.01 and $10,000
    const maxExponent = 6; // 10^6 = $1,000,000
    const normalizedHash = Math.abs(hash) / 2147483647; // Normalize to 0-1

    // Calculate price with exponential distribution to get realistic crypto price ranges
    const exponent = normalizedHash * maxExponent;
    const price = Math.pow(10, exponent) / 100;

    // Round to appropriate number of decimal places based on price magnitude
    if (price < 0.1) {
      return Math.round(price * 10000) / 10000; // 4 decimal places
    } else if (price < 1) {
      return Math.round(price * 1000) / 1000; // 3 decimal places
    } else if (price < 100) {
      return Math.round(price * 100) / 100; // 2 decimal places
    } else {
      return Math.round(price); // Whole dollars
    }
  }
}
