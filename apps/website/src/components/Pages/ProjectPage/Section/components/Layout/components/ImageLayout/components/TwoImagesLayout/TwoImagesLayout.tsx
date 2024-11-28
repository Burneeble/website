import { TwoImagesLayoutProps } from "./TwoImagesLayout.types";

const TwoImagesLayout = (props: TwoImagesLayoutProps) => {
  return (
    <div
      className={`
        images-layout two-images-layout tw-relative tw-w-[95vw]
        tw-aspect-[460/345] tw-max-w-[680px]

        xl:tw-max-w-[645px] xl:tw-aspect-[645/580]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-aspect-[365/230] tw-absolute tw-top-0 tw-z-[1]
          tw-w-[75vw] tw-left-0 tw-max-w-[540px]

          xl:tw-aspect-[525/415] xl:tw-max-w-[525px]
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-object-cover tw-aspect-[425/340] tw-absolute tw-z-[2] tw-w-[59vw]
          tw-bottom-0 tw-right-0 tw-max-w-[426px]
        `}
      />
    </div>
  );
};

export default TwoImagesLayout;
