import { RefObject } from "react";

export interface TechnologyProps {
  wrapperRef: RefObject<HTMLDivElement>;
  name: string;
  description: string;
  slug: string;
}
