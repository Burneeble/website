import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";
import { ShapeVertical2ImagesWrapperProps } from "./ShapeVertical2ImagesWrapper.types";
import ImageLayout from "../../../ImageLayout";
import { VerticalShape2 } from "../../Shapes";
import { cn } from "@/lib/utils";

const ShapeVertical2ImagesWrapper = (
  props: ShapeVertical2ImagesWrapperProps
) => {
  return (
    <div
      className={`
        wrapper tw-relative tw-aspect-[400/300] tw-w-screen

        lg:tw-h-[90vh] lg:tw-flex-1

        md:tw-aspect-auto md:tw-h-[535px]

        sm:tw-h-[450px]
      `}
    >
      <VerticalShape2 align={props.side} />
      <div
        className={cn(
          `
            images tw-absolute tw-left-1/2 tw-top-1/2 tw-flex
            tw-aspect-[350/230] tw-w-[calc(100%-40px)] tw-max-w-[385px]
            -tw-translate-x-1/2 -tw-translate-y-1/2 tw-items-center
            tw-justify-center

            lg:tw-aspect-[328/675] lg:tw-h-[unset] lg:tw-w-[calc(100%-40px)]
            lg:tw-min-w-[320px] lg:tw-max-w-[330px]

            md:tw-aspect-square md:tw-h-[85%] md:tw-w-auto md:tw-max-w-[unset]

            sm:tw-aspect-[385/535]
          `,
          [ImageLayoutType.SmarthphoneImageLayout].includes(
            props.imageLayoutType
          )
            ? `lg:tw-w-[675px] lg:tw-max-w-[675px]`
            : `lg:tw-max-h-[100vh] lg:tw-max-w-[330px]`,
          props.side === "right"
            ? `lg:tw-left-[calc((100vw/2)-10px-74%)]`
            : `
              lg:tw-left-[unset] lg:tw-right-[calc((100vw/2)-10px-74%)]
              lg:tw-translate-x-1/2
            `
        )}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default ShapeVertical2ImagesWrapper;
