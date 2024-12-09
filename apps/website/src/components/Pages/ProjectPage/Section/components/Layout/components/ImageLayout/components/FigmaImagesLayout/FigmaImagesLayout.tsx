import { FigmaImagesLayoutProps } from "./FigmaImagesLayout.types";

const FigmaImagesLayout = (props: FigmaImagesLayoutProps) => {
  return (
    <div
      className={`
        figma-images-layout images-layout tw-w-screen tw-relative tw-my-[2.5rem]

        md:tw-my-[3.5rem]

        xl:tw-my-[2rem]
      `}
    >
      <img
        src="/img/project/sections/figma-icon.png"
        className={`
          figma-icon tw-rotate-[15deg] tw-top-[-15%] tw-right-[7%] tw-w-[90px]

          md:tw-w-[120px]

          xl:tw-w-[170px]
        `}
      />
      <img
        src="/img/project/sections/figma-icon.png"
        className={`
          figma-icon tw-rotate-[-12deg] tw-bottom-[-17.5%] tw-left-[4%]
          tw-w-[100px]

          md:tw-w-[155px]

          xl:tw-w-[130px]
        `}
      />
      <img src={props.image1} className="tw-w-full" />
    </div>
  );
};

export default FigmaImagesLayout;
