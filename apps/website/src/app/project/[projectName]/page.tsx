import { IProjectModel, ProjectService } from "@/services/ProjectService";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import ProjectPageWrapper from "./ProjectPageWrapper";

export async function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = params;

  try {
    const res = await ProjectService.instance.getProject(projectName);

    const project: IProjectModel = JSON.parse(JSON.stringify(res));

    const currentHost = headers().get("host");
    const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

    if (!currentHost) {
      throw new Error("Host unavailable");
    }

    const generatedImageUrl = `${protocol}://${currentHost}/api/generate-image?imageUrl=${encodeURIComponent(
      project.favicon || ""
    )}&mainColor=${encodeURIComponent(
      project.mainColor || "rgb(0,0,0)"
    )}&projectName=${encodeURIComponent(project.title)}`;

    if (project) {
      const tags = {
        title: `Burneeble - Check out ${project.title} Project`,
        description: `${project.title} - ${project.description}`,
        image: generatedImageUrl,
      };

      return {
        title: tags.title,
        description: tags.description,
        openGraph: {
          title: tags.title,
          description: tags.description,
          images: [tags.image],
        },
        twitter: {
          card: "summary_large_image",
          title: tags.title,
          description: tags.description,
          images: [tags.image],
        },
      };
    }
  } catch (err) {
    console.log("error", err);
  }
}

const ProjectPage = async ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;

  let project: IProjectModel | null = null;
  try {
    const res = await ProjectService.instance.getProject(projectName);
    if (!res) {
      notFound();
    }
    project = JSON.parse(JSON.stringify(res));
  } catch {
    notFound();
  }

  return project ? <ProjectPageWrapper project={project} projectName={projectName} /> : null;
};

export default ProjectPage;
