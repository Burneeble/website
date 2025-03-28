import { cn } from "@/lib/utils";
import { LargeImageLayoutProps } from "./LargeImageLayout.types";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const LargeImageLayout = (props: LargeImageLayoutProps) => {
  return (
    <div
      className={cn(
        `images-layout large-image-layout tw-relative tw-max-h-full`,
        props.layoutType === LayoutType.TextCenterCenterImageBackground
          ? `tw-h-full`
          : `
            tw-aspect-[350/293] tw-w-full

            md:tw-aspect-[1300/480]

            sm:tw-aspect-[682/480]

            tw:tw-h-auto
          `
      )}
    >
      <img
        src={props.image1}
        className={`tw-h-full tw-w-full tw-object-cover`}
      />
    </div>
  );
};

export default LargeImageLayout;
