import { ThreeImagesLayoutProps } from "./ThreeImagesLayout.types";

const ThreeImagesLayout = (props: ThreeImagesLayoutProps) => {
  return (
    <div
      className={`
        images-layout three-images-layout tw-relative tw-aspect-[365/370]
        tw-h-auto tw-w-full tw-max-w-[50vw]

        md:tw-aspect-[710/440]

        xl:tw-aspect-[1110/555]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-absolute tw-left-0 tw-top-0 tw-z-[1] tw-aspect-[720/450] tw-w-full
          tw-object-cover

          md:tw-left-[19.7%] md:tw-w-[76%]

          xl:tw-left-0 xl:tw-w-[64.8%]
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-absolute tw-left-[6.8%] tw-top-[27%] tw-z-[2] tw-aspect-[600/450]
          tw-w-[63%] -tw-rotate-12 tw-object-cover

          md:tw-bottom-0 md:tw-left-0 md:tw-right-[unset] md:tw-top-[unset]
          md:tw-w-[63%] md:tw-rotate-0

          xl:tw-bottom-0 xl:tw-left-[unset] xl:tw-right-[13%] xl:tw-w-[54%]
        `}
      />
      <img
        src={props.image3}
        className={`
          tw-absolute tw-bottom-0 tw-right-[20.5%] tw-z-[3] tw-aspect-[205/440]
          tw-w-[22%] tw-object-cover

          md:tw-bottom-0 md:tw-right-0 md:tw-w-[16.2%] md:tw-rotate-[11deg]

          xl:tw-top-0 xl:tw-w-[18.4%] xl:tw-rotate-0
        `}
      />
    </div>
  );
};

export default ThreeImagesLayout;
