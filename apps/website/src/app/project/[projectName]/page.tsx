import { ProjectLogo, Technologies } from "@/components/Pages";
import Section, {
  ImageLayoutType,
  LayoutType,
} from "@/components/Pages/ProjectPage/Section";
import { IProjectModel, ProjectService } from "@/services/ProjectService";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = params;

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
}

const ProjectPage = async ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;

  const res = await ProjectService.instance.getProject(projectName);

  const project: IProjectModel = JSON.parse(JSON.stringify(res));
  console.log(JSON.stringify(project.sections, null, 2));
  return (
    <div className="cs-page project-page">
      <ProjectLogo
        favicon={project.favicon || ""}
        title={project.title}
        mainColor={project.mainColor || "rgb(0,0,0)"}
      />
      {project.sections && project.sections[0] && (
        <>
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
        </>
      )}
      <Technologies technologies={project.technologies || []} />
      {project.sections &&
        project.sections.slice(1, project.sections.length).map((section, i) => {
          return (
            <>
              <Section
                key={i}
                layoutType={section.layout as LayoutType}
                title={section.title}
                text={section.text}
                imageLayoutType={section.imageLayout.slug as ImageLayoutType}
                imageLayoutInfo={section.imageLayout}
                enableBars={i < project.sections!.length - 2}
              />
            </>
          );
        })}
    </div>
  );
};

export default ProjectPage;
