import { FigmaImagesLayoutProps } from "./FigmaImagesLayout.types";

const FigmaImagesLayout = (props: FigmaImagesLayoutProps) => {
  return (
    <div
      className={`
        figma-images-layout images-layout tw-w-screen tw-relative tw-my-[2.5rem]
        tw-shadow-[0px_0px_100px_rgba(242,_163,_7,_.6)] tw-max-h-[345px]

        md:tw-my-[3.5rem] md:tw-max-h-[485px]

        xl:tw-my-[2rem] xl:tw-max-h-[375px]
      `}
    >
      <img
        src="/img/project/sections/figma-icon.png"
        style={{ rotate: "12deg" }}
        className={`
          figma-icon tw-top-[-15%] tw-right-[7%] tw-w-[90px] !tw-delay-800

          md:tw-w-[120px]

          xl:tw-w-[170px]
        `}
      />
      <img
        src="/img/project/sections/figma-icon.png"
        style={{ rotate: "-15deg" }}
        className={`
          figma-icon tw-bottom-[-17.5%] tw-left-[4%] tw-w-[100px]

          md:tw-w-[155px]

          xl:tw-w-[130px]
        `}
      />
      <img src={props.image1} className="tw-w-full tw-max-h-full" />
    </div>
  );
};

export default FigmaImagesLayout;
