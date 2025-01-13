import { cn } from "@/lib/utils";
import { VeryLargeImageLayoutProps } from "./VeryLargeImageLayout.types";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const VeryLargeImageLayout = (props: VeryLargeImageLayoutProps) => {
  return (
    <div
      className={cn(
        `images-layout very-large-image-layout tw-relative tw-max-h-full`,
        props.layoutType === LayoutType.TextCenterCenterImageBackground
          ? `tw-h-full`
          : `
            tw-aspect-[350/410] tw-w-full

            md:tw-aspect-[1300/600]

            sm:tw-aspect-[682/625]

            tw:tw-h-auto
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
