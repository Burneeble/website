import { TwoImagesLayoutProps } from "./TwoImagesLayout.types";

const TwoImagesLayout = (props: TwoImagesLayoutProps) => {
  return (
    <div
      className={`
        images-layout two-images-layout tw-relative tw-aspect-[460/345]
        tw-h-auto tw-max-h-full tw-w-[95%] tw-max-w-[50vw]

        xl:tw-aspect-[645/580] xl:tw-max-w-[645px]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-absolute tw-left-0 tw-top-0 tw-z-[1] tw-aspect-[365/230] tw-w-3/4
          tw-object-cover

          xl:tw-aspect-[525/415]
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-absolute tw-bottom-0 tw-right-0 tw-z-[2] tw-aspect-[425/340]
          tw-w-[59%] tw-object-cover
        `}
      />
    </div>
  );
};

export default TwoImagesLayout;
