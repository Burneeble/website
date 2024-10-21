import GraphQLServiceProvider from "@/services/GraphQLService";
import { CommonProvidersProps } from "./CommonProviders.types";
import ProjectServiceProvider from "@/services/ProjectService";

const CommonProviders = (props: CommonProvidersProps) => {
  return (
    <GraphQLServiceProvider>
      <ProjectServiceProvider>{props.children}</ProjectServiceProvider>
    </GraphQLServiceProvider>
  );
};

export default CommonProviders;
