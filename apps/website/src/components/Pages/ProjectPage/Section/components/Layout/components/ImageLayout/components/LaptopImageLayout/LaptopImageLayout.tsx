import { LaptopImageLayoutProps } from "./LaptopImageLayout.types";

const LaptopImageLayout = (props: LaptopImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout laptop-image-layout tw-relative tw-h-full
        tw-aspect-[950/678]
      `}
    >
      <img
        src="/img/project/sections/pc-layout.png"
        className={`
          tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
          -tw-translate-y-1/2
        `}
      />
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-aspect-[720/450] tw-w-[75%] tw-absolute tw-left-1/2
          -tw-translate-x-1/2 tw-top-[13.5%]
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
