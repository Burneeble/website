"use client";

import { useState, useEffect } from "react";
import { ProjectService } from "@/services/ProjectService";
import { Projects } from "./Projects";
import Landing from "./Landing";
import AuthGuard from "./AuthGuard";
import { PAGE_CONFIGS, PageVariant } from "./config";

interface ProjectsPageProps {
  variant: PageVariant;
  categories?: string[] | null;
}

const ProjectsPageContent = ({ variant, categories }: ProjectsPageProps) => {
  const config = PAGE_CONFIGS[variant];

  return (
    <div
      className={`
        ${config.className}

        cs-page tw-bg-gradient-to-t tw-from-[var(--secondary-darker)]
        tw-to-[var(--secondary-base)]
      `}
    >
      <Landing variant={variant} />
      <Projects
        categories={categories || []}
        isPortfolio={variant === "portfolio"}
        excludeCategories={config.excludeCategories}
        batchSize={config.batchSize}
      />
    </div>
  );
};

const ProjectsPage = ({ variant, categories }: ProjectsPageProps) => {
  const config = PAGE_CONFIGS[variant];
  const [localCategories, setLocalCategories] = useState<string[] | null>(categories || null);

  useEffect(() => {
    // Only fetch categories if not provided and we're on client
    if (!categories && typeof window !== "undefined") {
      fetchCategories();
    }
  }, [categories]);

  const fetchCategories = async () => {
    try {
      const res = await ProjectService.instance.getCategories();
      setLocalCategories(res);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setLocalCategories([]);
    }
  };

  const content = (
    <ProjectsPageContent 
      variant={variant} 
      categories={localCategories} 
    />
  );

  // Wrap with AuthGuard if authentication is required
  if (config.requiresAuth) {
    return <AuthGuard>{content}</AuthGuard>;
  }

  return content;
};

export default ProjectsPage;