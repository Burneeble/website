"use client";

import { ProvidersWrapperProps } from "./ProvidersWrapper.types";

const ProvidersWrapper = (props: ProvidersWrapperProps) => {
  return <>{props.children}</>;
};

export default ProvidersWrapper;
