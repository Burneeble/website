import { ProjectModel } from "@/services";
import { PropsWithChildren } from "react";

export interface ShowcaseProps extends PropsWithChildren {
  projects: ProjectModel[];
}
