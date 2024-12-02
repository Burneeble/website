import { ProjectLogo, Technologies } from "@/components/Pages";
import Section, {
  ImageLayoutType,
  LayoutType,
} from "@/components/Pages/ProjectPage/Section";
import { IProjectModel, ProjectService } from "@/services/ProjectService";

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
        mainColor={project.mainColor || "#000"}
      />
      <Section
        layoutType={LayoutType.TextTopCenterShapeHorizontalBottom}
        title={"Title"}
        text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageLayoutType={"" as any}
        imageLayoutInfo={{
          imagesLayoutSm: { image1: "" },
          imagesLayoutMd: { image1: "" },
          imagesLayoutXl: { image1: "" },
          slug: "",
        }}
        enableBars={["sm", "md"]}
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
