import GraphQLServiceProvider from "@/services/GraphQLService";
import { CommonProvidersProps } from "./CommonProviders.types";
import ProjectServiceProvider from "@/services/ProjectService";
import { ClientInfoServiceProvider } from "@burneeble/ui-components";

const CommonProviders = (props: CommonProvidersProps) => {
  return (
    <ClientInfoServiceProvider>
      <GraphQLServiceProvider>
        <ProjectServiceProvider>{props.children}</ProjectServiceProvider>
      </GraphQLServiceProvider>
    </ClientInfoServiceProvider>
  );
};

export default CommonProviders;
