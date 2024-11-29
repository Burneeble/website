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

  return (
    <div className="cs-page project-page">
      <ProjectLogo
        favicon={project.favicon || ""}
        title={project.title}
        mainColor={project.mainColor || "#000"}
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
