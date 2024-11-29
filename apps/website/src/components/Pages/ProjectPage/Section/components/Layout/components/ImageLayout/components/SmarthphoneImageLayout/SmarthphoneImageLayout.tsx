import { SmarthphoneImageLayoutProps } from "./SmarthphoneImageLayout.types";

const SmarthphoneImageLayout = (props: SmarthphoneImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout smarthphone-image-layout tw-relative tw-h-full
        tw-aspect-[224/462] tw-max-h-[80vh]
      `}
    >
      <img
        src="/img/project/sections/smartphone-base-layout.svg"
        className={`
          tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
          -tw-translate-y-1/2 tw-h-full
        `}
      />
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-w-[calc(100%-24px)] tw-rounded-[50px]
          tw-h-[calc(100%-24px)] tw-absolute tw-top-1/2 tw-left-1/2
          -tw-translate-x-1/2 -tw-translate-y-1/2
        `}
      />
      <img
        src="/img/project/sections/smartphone-dock-layout.svg"
        className={`
          tw-absolute tw-top-[10px] tw-w-[49%] tw-left-1/2 -tw-translate-x-1/2
        `}
      />
    </div>
  );
};

export default SmarthphoneImageLayout;
