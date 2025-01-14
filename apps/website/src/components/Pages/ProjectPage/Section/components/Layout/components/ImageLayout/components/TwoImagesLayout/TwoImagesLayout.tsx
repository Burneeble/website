import { TwoImagesLayoutProps } from "./TwoImagesLayout.types";

const TwoImagesLayout = (props: TwoImagesLayoutProps) => {
  return (
    <div
      className={`
        images-layout two-images-layout tw-relative tw-w-[95%] tw-h-auto
        tw-max-h-full tw-aspect-[460/345] tw-max-w-[50vw]

        xl:tw-max-w-[645px] xl:tw-aspect-[645/580]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-aspect-[365/230] tw-absolute tw-top-0 tw-z-[1]
          tw-w-[75%] tw-left-0

          xl:tw-aspect-[525/415]
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-object-cover tw-aspect-[425/340] tw-absolute tw-z-[2] tw-w-[59%]
          tw-bottom-0 tw-right-0
        `}
      />
    </div>
  );
};

export default TwoImagesLayout;
