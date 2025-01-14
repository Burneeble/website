import { GridProps } from "./Grid.types";

const Grid = (props: GridProps) => {
  return <div className="grid">{props.children}</div>;
};
