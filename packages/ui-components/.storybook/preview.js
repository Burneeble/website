import "!style-loader!css-loader!sass-loader!../src/style/main.scss";

import { ToastContainer } from "react-toastify";

import "./custom.scss";

import { ClientInfoServiceProvider } from "../src/services/ClientInfoService";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider/next-13.5";
import { SkeletonTheme } from "react-loading-skeleton";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  mockAddonConfigs: {
    globalMockData: [],
    ignoreQueryParams: true,
    refreshStoryOnUpdate: true,
    disableUsingOriginal: false,
    disable: false,
  },
  nextjs: {
    appDirectory: true,
  },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <MemoryRouterProvider url="/">
          <ClientInfoServiceProvider>
            <SkeletonTheme
              baseColor="rgba(43,43,43,1)"
              highlightColor="#322923"
            >
              <Story />
            </SkeletonTheme>
            <ToastContainer />
          </ClientInfoServiceProvider>
        </MemoryRouterProvider>
      </>
    );
  },
];
export const tags = ["autodocs"];
