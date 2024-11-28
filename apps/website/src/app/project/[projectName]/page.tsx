import { ProjectLogo, Technologies } from "@/components/Pages";
import Section, {
  ImageLayout,
  ImageLayoutType,
  LayoutType,
} from "@/components/Pages/ProjectPage/Section";
import { IProjectModel, ProjectService } from "@/services/ProjectService";

const ProjectPage = async ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;

  const res = await ProjectService.instance.getProject(projectName);

  const project: IProjectModel = JSON.parse(JSON.stringify(res));

  return (
    <div className="cs-page project-page">
      <ProjectLogo
        favicon={project.favicon || ""}
        title={project.title}
        mainColor={project.mainColor || "#000"}
      />
      <ImageLayout
        layoutType={LayoutType.TextTopStartShapeHorizontalBottom}
        title={
          '<span class="cs-text-color-primary-gradient">Title</span> Goes Here'
        }
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        }
        imageLayoutType={ImageLayoutType.LaptopImageLayout}
        image1={"https://picsum.photos/1920/1080"}
        image2={"https://picsum.photos/600/450"}
        image3={"https://picsum.photos/205/445"}
      />

      <Technologies technologies={project.technologies || []} />
      {project.sections?.map((section, i) => {
        return (
          <>
            <Section
              key={i}
              layoutType={section.layout as LayoutType}
              title={section.title}
              text={section.text}
              imageLayoutType={section.imageLayout.slug as ImageLayoutType}
              imageLayoutInfo={section.imageLayout}
            />
          </>
        );
      })}
    </div>
  );
};

export default ProjectPage;
