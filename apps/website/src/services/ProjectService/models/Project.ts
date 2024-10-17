export enum ProjectCategory {
  Dapp = 1,
}

export interface IProjectModel {
  title: string;
  description: string;
  projectUrl: string;
  thumbnailUrl: string;
  category: ProjectCategory;
}

export class ProjectModel implements IProjectModel {
  title: string;
  description: string;
  projectUrl: string;
  thumbnailUrl: string;
  category: ProjectCategory;

  constructor(obj?: Partial<IProjectModel>) {
    this.title = obj?.title ?? "";
    this.description = obj?.description ?? "";
    this.projectUrl = obj?.projectUrl ?? "";
    this.thumbnailUrl = obj?.thumbnailUrl ?? "";
    this.category = obj?.category ?? ProjectCategory.Dapp;
  }
}
