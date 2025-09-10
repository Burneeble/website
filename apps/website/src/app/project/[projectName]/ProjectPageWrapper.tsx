"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IProjectModel } from "@/services/ProjectService";
import { ProjectLogo, Technologies } from "@/components/Pages";
import Section, {
  ImageLayoutType,
  LayoutType,
} from "@/components/Pages/ProjectPage/Section";

interface ProjectPageWrapperProps {
  project: IProjectModel;
  projectName: string;
}

const ProjectPageWrapper = ({ project, projectName }: ProjectPageWrapperProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if project has "Portfolio Only" category
    const isPortfolioOnly = project.categories.includes("Portfolio Only");
    
    if (isPortfolioOnly) {
      // Check authentication
      const authStatus = sessionStorage.getItem("portfolio_auth");
      if (authStatus !== "true") {
        // Not authenticated, redirect to portfolio page with redirect URL
        const redirectUrl = `/project/${projectName}`;
        router.push(`/portfolio?redirect=${encodeURIComponent(redirectUrl)}`);
        return;
      }
    }
    
    // Either not portfolio-only or authenticated
    setIsAuthenticated(true);
    setIsLoading(false);
  }, [project, router]);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="cs-page project-page">
      <ProjectLogo
        favicon={project.favicon || ""}
        title={project.title}
        mainColor={project.mainColor || "rgb(0,0,0)"}
        backgroundVideo={project.backgroundVideo}
      />
      {project.sections && project.sections[0] && (
        <Section
          layoutType={project.sections[0].layout as LayoutType}
          title={project.sections[0].title}
          text={project.sections[0].text}
          imageLayoutType={
            project.sections[0].imageLayout.slug as ImageLayoutType
          }
          imageLayoutInfo={project.sections[0].imageLayout}
          enableBars={["sm", "md"]}
          buttonText={project.sections[0].buttonText}
          buttonUrl={project.sections[0].buttonUrl}
        />
      )}
      <Technologies technologies={project.technologies || []} />
      {project.sections &&
        project.sections
          .slice(1, project.sections.length)
          .map((section, i) => {
            return (
              <Section
                key={i}
                layoutType={section.layout as LayoutType}
                title={section.title}
                text={section.text}
                imageLayoutType={
                  section.imageLayout.slug as ImageLayoutType
                }
                imageLayoutInfo={section.imageLayout}
                enableBars={i < project.sections!.length - 2}
              />
            );
          })}
    </div>
  );
};

export default ProjectPageWrapper;