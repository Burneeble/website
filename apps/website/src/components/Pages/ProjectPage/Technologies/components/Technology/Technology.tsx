import { TechnologyProps } from "./Technology.types";

const Technology = (props: TechnologyProps) => {
  return <div className="technology">{props.technology}</div>;
};

export default Technology;
