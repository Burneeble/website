/* eslint-disable @burneeble/burneeble/camel-case-vars */
export type PageVariant = "gallery" | "portfolio";

export interface PageConfig {
  variant: PageVariant;
  excludeCategories: string[];
  requiresAuth: boolean;
  batchSize: number;
  className: string;
}

export const PAGE_CONFIGS: Record<PageVariant, PageConfig> = {
  gallery: {
    variant: "gallery",
    excludeCategories: ["Portfolio Only"],
    requiresAuth: false,
    batchSize: 9,
    className: "gallery-page",
  },
  portfolio: {
    variant: "portfolio",
    excludeCategories: ["Gallery Only"],
    requiresAuth: true,
    batchSize: 9,
    className: "portfolio-page",
  },
};
