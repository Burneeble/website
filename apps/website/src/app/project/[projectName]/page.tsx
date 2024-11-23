import { ProjectLogo } from "@/components/Pages";
import { IProjectModel, ProjectService } from "@/services/ProjectService";

const ProjectPage = async ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;

  const res = await ProjectService.instance.getProject(projectName);

  const project: IProjectModel = JSON.parse(JSON.stringify(res));

  console.log(JSON.stringify(project, null, 2));

  return (
    <div className="cs-page project-page">
      <ProjectLogo
        favicon={project.favicon || ""}
        title={project.title}
        mainColor={project.mainColor || "#000"}
      />
    </div>
  );
};

export default ProjectPage;
