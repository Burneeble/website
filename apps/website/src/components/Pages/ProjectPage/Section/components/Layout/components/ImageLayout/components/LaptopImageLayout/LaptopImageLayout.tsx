import { LaptopImageLayoutProps } from "./LaptopImageLayout.types";

const LaptopImageLayout = (props: LaptopImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout tw-relative tw-w-[1110px] tw-h-[555px]

        md:tw-w-[710px] md:tw-h-[440px]

        xl:tw-w-[365px] xl:tw-h-[370px]
      `}
    >
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-aspect-[720/450] tw-w-[720px] tw-absolute tw-top-0
          tw-left-0 tw-z-[1]

          md:tw-w-[540px] md:tw-left-[140px]

          xl:tw-w-[365px] xl:tw-left-0
        `}
      />
      <img
        src={props.image2}
        className={`
          tw-object-cover tw-aspect-[600/450] tw-w-[600px] tw-absolute
          tw-bottom-0 tw-right-[72px] tw-z-[2]

          md:tw-w-[450px] md:tw-bottom-0 md:tw-left-0 md:tw-right-[unset]

          xl:tw-w-[230px] xl:tw-rotate-[-12deg] xl:tw-bottom-[unset]
          xl:tw-top-[100px] xl:tw-left-[25px]
        `}
      />
      <img
        src={props.image3}
        className={`
          tw-object-cover tw-aspect-[205/440] tw-w-[205px] tw-absolute tw-top-0
          tw-right-0 tw-z-[3]

          md:tw-w-[155px] md:tw-bottom-0 md:tw-top-[unset] md:tw-rotate-[11deg]

          xl:tw-w-[80px] xl:tw-right-[75px] xl:tw-rotate-0
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
