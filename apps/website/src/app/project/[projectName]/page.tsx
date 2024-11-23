import { ProjectService } from "@/services/ProjectService";

const ProjectPage = async ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;

  const res = await ProjectService.instance.getProject(projectName);

  const project = JSON.parse(JSON.stringify(res));

  console.log("Project", JSON.stringify(project, null, 2));

  return <div className="cs-page project-page"></div>;
};

export default ProjectPage;
