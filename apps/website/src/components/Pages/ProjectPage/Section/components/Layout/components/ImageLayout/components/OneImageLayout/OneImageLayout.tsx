import { cn } from "@/lib/utils";
import { OneImageLayoutProps } from "./OneImageLayout.types";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const OneImageLayout = (props: OneImageLayoutProps) => {
  //States
  const mainAxis = props.mainAxis || "height";

  return (
    <div
      className={cn(
        `
          images-layout one-image-layout tw-relative tw-flex tw-aspect-[630/532]
          tw-items-center tw-justify-center
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
                ? `tw-max-w-[44rem]`
                : `tw-max-w-full`
            }
          `
      )}
    >
      <img
        src={props.image1}
        className={`tw-aspect-[630/532] tw-h-full tw-object-cover`}
      />
    </div>
  );
};

export default OneImageLayout;
