import { Project } from "@burneeble/ui-components";
import { PropsWithChildren } from "react";

export interface ShowcaseProps extends PropsWithChildren {
  projects: Project[];
}
