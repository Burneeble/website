import { definitions } from "./projectDefinitions";

async function runEnrichmentProcess() {
  for (const definition of definitions) {
    const { project, strategies, options } = definition;

    for (const strategy of strategies) {
      const strategyOptions = options[strategies.indexOf(strategy)];
      const result = await strategy.enrich(project, strategyOptions);

      if (result.success) {
        console.log(
          `Enriched data for project ${project.getMetadata().id}:`,
          result.data
        );
      } else {
        console.error(
          `Failed to enrich project ${project.getMetadata().id}:`,
          result.error
        );
      }
    }
  }
}

runEnrichmentProcess().catch((error) => {
  console.error("Error running enrichment process:", error);
});
