import Section, {
  ImageLayoutType,
  LayoutType,
} from "@/components/Pages/ProjectPage/Section";

const LayoutTestPage = () => {
  return (
    <>
      {Object.keys(LayoutType).map((layoutType) => {
        return (
          <>
            <p className="tw-text-headings">{layoutType}</p>
            <Section
              // @ts-ignore
              layoutType={LayoutType[layoutType]}
              imageLayoutInfo={{
                slug: "slug",
                imagesLayoutSm: { image1: "https://picsum.photos/1300/480" },
                imagesLayoutMd: { image1: "https://picsum.photos/682/480" },
                imagesLayoutXl: { image1: "https://picsum.photos/350/290" },
              }}
              title={"Title goes here"}
              text={
                "We created custom designs from scratch to bring ZIP.Link digital vision to life. Using Figma we defined the optimal structure and flow of the application, ensuring an intuitive and engaging user experience"
              }
              imageLayoutType={ImageLayoutType.LargeImageLayout}
            />
          </>
        );
      })}
    </>
  );
};

export default LayoutTestPage;
