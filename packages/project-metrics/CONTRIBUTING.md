# Contributing to project-metrics

Thank you for your interest in contributing to the project-metrics library! This document provides guidelines and instructions for contributing to the project.

## Development Setup

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Getting Started

1. Fork and clone the repository
2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```
3. Build the project
   ```bash
   npm run build
   # or
   yarn build
   ```

## Architecture Overview

The library is structured around a few core concepts:

1. **Project Model**: The foundation of the system, defining how project metadata is stored and managed
2. **Enrichment Strategies**: Plugins that add data to projects from various sources
3. **Enrichment Manager**: Coordinates the application of strategies to projects

### Directory Structure

```
src/
├── core/              # Core project model
│   ├── Project.ts     # Base project class
│   └── ProjectTypes.ts # Type definitions for projects
├── enrichment/        # Enrichment framework
│   ├── EnrichmentStrategy.ts # Strategy interface and base class
│   └── EnrichmentManager.ts  # Strategy management and execution
├── factory/           # Factory methods
│   └── ProjectFactory.ts # Project creation helpers
├── examples/          # Example implementations
└── index.ts           # Main library exports
```

## Adding New Features

### Creating a New Enrichment Strategy

1. Create a new file in an appropriate location (e.g., `src/strategies/MyStrategy.ts`)
2. Extend the `BaseEnrichmentStrategy` class to implement your strategy
3. Define the input options and output data types for your strategy
4. Implement the `executeEnrichment` method with your enrichment logic
5. Export your strategy in the appropriate module

Example:

```typescript
import {
  BaseEnrichmentStrategy,
  EnrichmentResult,
  ProjectType,
} from "../enrichment/EnrichmentStrategy";

// Define your strategy's output data type
interface MyStrategyData {
  fieldA: string;
  fieldB: number;
}

// Define your strategy's options
interface MyStrategyOptions extends EnrichmentStrategyOptions {
  customOption?: string;
}

// Implement your strategy
export class MyStrategy extends BaseEnrichmentStrategy<
  MyStrategyData,
  MyStrategyOptions
> {
  constructor() {
    super(
      "my-strategy", // Unique ID
      "My Custom Strategy", // Human-readable name
      [ProjectType.SOFTWARE], // Applicable project types
      { timeoutMs: 5000 } // Default options
    );
  }

  protected async executeEnrichment(
    project: any,
    options: MyStrategyOptions
  ): Promise<EnrichmentResult<MyStrategyData>> {
    try {
      // Your implementation here
      return {
        success: true,
        data: {
          fieldA: "value",
          fieldB: 42,
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
```

### Adding a New Project Type

1. Update the `ProjectType` enum in `src/core/ProjectTypes.ts`
2. Create a new metadata interface extending `BaseProjectMetadata`
3. Update the `ProjectMetadata` union type
4. Add a factory method to `ProjectFactory` if appropriate

Example:

```typescript
// 1. Add to the ProjectType enum
export enum ProjectType {
  // Existing types...
  MARKETPLACE = "marketplace",
}

// 2. Create a new metadata interface
export interface MarketplaceProjectMetadata extends BaseProjectMetadata {
  vendors: string[];
  products: number;
  launchDate?: string;
}

// 3. Update the union type
export type ProjectMetadata =
  | BaseProjectMetadata
  | CryptoProjectMetadata
  | NFTProjectMetadata
  | SoftwareProjectMetadata
  | MarketplaceProjectMetadata; // Add your new type
```

## Code Style and Standards

- Use TypeScript's strict mode
- Follow existing code style patterns
- Document public APIs with TSDoc comments
- Keep individual strategies focused on a specific task
- Use meaningful names for types, methods, and variables

## Pull Request Process

1. Create a new branch for your feature or bugfix
2. Implement your changes following the coding standards
3. Add or update tests if applicable
4. Ensure the code builds successfully with `npm run build`
5. Update documentation as needed
6. Create a pull request with a clear description of the changes

## License

By contributing to project-metrics, you agree that your contributions will be licensed under the project's MIT License.
