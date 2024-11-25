import { LayoutProps } from "./Layout.types";

const Layout = (props: LayoutProps) => {
  //Methods
  const getImageLayout = () => {
    switch (props.imageLayoutType) {
      default:
        return <div className="layout"></div>;
    }
  };
  return <div className="layout">{getImageLayout()}</div>;
};

export default Layout;
