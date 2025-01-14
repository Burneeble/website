import { ThreeImagesLayoutProps } from "./ThreeImagesLayout.types";

const ThreeImagesLayout = (props: ThreeImagesLayoutProps) => {
  return (
    <div
      className={`
        images-layout three-images-layout tw-relative tw-w-full tw-h-auto
        tw-aspect-[365/370] tw-max-w-[50vw]

        md:tw-aspect-[710/440]

        xl:tw-aspect-[1110/555]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-aspect-[720/450] tw-absolute tw-top-0 tw-z-[1]
          tw-w-full tw-left-0

          md:tw-w-[76%] md:tw-left-[19.7%]

          xl:tw-w-[64.8%] xl:tw-left-0
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-object-cover tw-aspect-[600/450] tw-absolute tw-z-[2] tw-w-[63%]
          tw-rotate-[-12deg] tw-top-[27%] tw-left-[6.8%]

          md:tw-w-[63%] md:tw-bottom-0 md:tw-left-0 md:tw-right-[unset]
          md:tw-rotate-0 md:tw-top-[unset]

          xl:tw-left-[unset] xl:tw-w-[54%] xl:tw-bottom-0 xl:tw-right-[13%]
        `}
      />
      <img
        src={props.image3}
        className={`
          tw-object-cover tw-aspect-[205/440] tw-absolute tw-z-[3] tw-w-[22%]
          tw-right-[20.5%] tw-bottom-0

          md:tw-w-[16.2%] md:tw-right-0 md:tw-bottom-0 md:tw-rotate-[11deg]

          xl:tw-rotate-0 xl:tw-w-[18.4%] xl:tw-top-0
        `}
      />
    </div>
  );
};

export default ThreeImagesLayout;
