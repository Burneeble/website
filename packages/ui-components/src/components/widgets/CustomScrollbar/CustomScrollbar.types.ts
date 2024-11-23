import { PropsWithChildren } from "react";

export interface CustomScrollbarProps extends PropsWithChildren {
  onScroll?: (hProgess: number, vProgess: number) => void;
  readHThumbWidth?: (hThumbWidth: number) => void;
  readVThumbHeight?: (vThumbHeight: number) => void;
}
