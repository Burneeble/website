"use client";

import { createContext } from "react";

export interface GraphQLServiceContent {}

export const graphQLServiceContext = createContext<GraphQLServiceContent>({});
