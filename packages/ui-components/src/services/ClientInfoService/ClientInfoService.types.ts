import { PropsWithChildren } from "react";
import tailwindConfig from "tailwind.config";

export type Screen = keyof typeof tailwindConfig.theme.screens;

export interface ClientInfoServiceProviderProps extends PropsWithChildren {}
