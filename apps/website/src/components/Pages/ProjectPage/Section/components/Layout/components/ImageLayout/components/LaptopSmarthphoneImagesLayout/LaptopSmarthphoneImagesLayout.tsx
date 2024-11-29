import LaptopImageLayout from "../LaptopImageLayout";
import SmarthphoneImageLayout from "../SmarthphoneImageLayout";
import { LaptopSmarthphoneImagesLayoutProps } from "./LaptopSmarthphoneImagesLayout.types";

const LaptopSmarthphoneImagesLayout = (
  props: LaptopSmarthphoneImagesLayoutProps
) => {
  return (
    <div
      className={`
        images-layout laptop-smarthphone-images-layout tw-h-[20rem]
        tw-max-h-screen tw-flex tw-items-center tw-justify-center
      `}
    >
      <LaptopImageLayout {...props} />
      <div className="tw-h-[66%]">
        <SmarthphoneImageLayout {...props} image1={props.image2!} />
      </div>
    </div>
  );
};

export default LaptopSmarthphoneImagesLayout;
