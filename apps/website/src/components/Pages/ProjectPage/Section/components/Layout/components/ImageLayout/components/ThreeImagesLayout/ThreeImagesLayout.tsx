import { ThreeImagesLayoutProps } from "./ThreeImagesLayout.types";

const ThreeImagesLayout = (props: ThreeImagesLayoutProps) => {
  return (
    <div
      className={`
        images-layout three-images-layout tw-relative tw-w-[365px] tw-h-[370px]

        md:tw-w-[710px] md:tw-h-[440px]

        xl:tw-w-[1110px] xl:tw-h-[555px]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-aspect-[720/450] tw-absolute tw-top-0 tw-z-[1]
          tw-w-[365px] tw-left-0

          md:tw-w-[540px] md:tw-left-[140px]

          xl:tw-w-[720px] xl:tw-left-0
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-object-cover tw-aspect-[600/450] tw-absolute tw-z-[2] tw-w-[230px]
          tw-rotate-[-12deg] tw-top-[100px] tw-left-[25px]

          md:tw-w-[450px] md:tw-bottom-0 md:tw-left-0 md:tw-right-[unset]
          md:tw-rotate-0 md:tw-top-[unset]

          xl:tw-left-[unset] xl:tw-w-[600px] xl:tw-bottom-0 xl:tw-right-[72px]
        `}
      />
      <img
        src={props.image3}
        className={`
          tw-object-cover tw-aspect-[205/440] tw-absolute tw-z-[3] tw-w-[80px]
          tw-right-[75px] tw-bottom-0

          md:tw-w-[155px] md:tw-right-0 md:tw-bottom-0 md:tw-rotate-[11deg]

          xl:tw-rotate-0 xl:tw-w-[205px] xl:tw-top-0
        `}
      />
    </div>
  );
};

export default ThreeImagesLayout;
