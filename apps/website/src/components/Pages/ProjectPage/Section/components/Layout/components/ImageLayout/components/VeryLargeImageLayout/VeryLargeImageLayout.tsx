import { cn } from "@/lib/utils";
import { VeryLargeImageLayoutProps } from "./VeryLargeImageLayout.types";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const VeryLargeImageLayout = (props: VeryLargeImageLayoutProps) => {
  return (
    <div
      className={cn(
        `
          images-layout very-large-image-layout tw-relative tw-w-full
          tw-max-h-full
        `,
        props.layoutType === LayoutType.TextCenterCenterImageBackground
          ? `tw-h-full`
          : `
            tw-h-[410px]

            md:tw-h-[600px]
          `
      )}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-h-full tw-w-full`}
      />
    </div>
  );
};

export default VeryLargeImageLayout;
