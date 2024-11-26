import { LayoutType } from "../../Section.types";
import { FigmaLayout } from "./components";
import { LayoutProps } from "./Layout.types";

const Layout = (props: LayoutProps) => {
  //Methods
  const getLayout = () => {
    console.log(props.layoutType);
    switch (props.layoutType) {
      case LayoutType.FigmaLayout:
        return <FigmaLayout {...props} />;
      default:
        return <></>;
    }
  };

  return getLayout();
};

export default Layout;
