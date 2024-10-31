import "!style-loader!css-loader!sass-loader!../src/style/main.scss";

import { ToastContainer } from "react-toastify";

import "./custom.scss";

import { ClientInfoServiceProvider } from "../src/services/ClientInfoService";

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
        <ClientInfoServiceProvider>
          <Story />
          <ToastContainer />
        </ClientInfoServiceProvider>
      </>
    );
  },
];
export const tags = ["autodocs"];
