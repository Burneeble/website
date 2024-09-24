import "!style-loader!css-loader!sass-loader!../src/style/main.scss";

import { ToastContainer } from "react-toastify";

import "./custom.scss";

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
        <Story />
        <ToastContainer />
      </>
    );
  },
];
export const tags = ["autodocs"];
