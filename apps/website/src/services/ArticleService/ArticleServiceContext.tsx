"use client";

import { createContext } from "react";

export interface ArticleServiceContent {}

export const articleServiceContext = createContext<ArticleServiceContent>({});
