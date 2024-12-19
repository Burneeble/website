import { cn } from "@/lib/utils";
import { OneSquareImageLayoutProps } from "./OneSquareImageLayout.types";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const OneSquareImageLayout = (props: OneSquareImageLayoutProps) => {
  //States
  const mainAxis = props.mainAxis || "height";

  return (
    <div
      className={cn(
        `
          images-layout one-square-image-layout tw-relative tw-aspect-squar
          tw-flex tw-items-center tw-justify-center
        `,
        mainAxis === "height"
          ? `
            tw-h-full

            ${
              props.layoutType !== LayoutType.TextCenterCenterImageBackground
                ? `tw-max-h-[35rem]`
                : `tw-max-h-full`
            }
          `
          : `
            tw-w-full

            ${
              props.layoutType !== LayoutType.TextCenterCenterImageBackground
                ? `tw-max-w-[35rem]`
                : `tw-max-w-full`
            }
          `
      )}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-square tw-h-full`}
      />
    </div>
  );
};

export default OneSquareImageLayout;
