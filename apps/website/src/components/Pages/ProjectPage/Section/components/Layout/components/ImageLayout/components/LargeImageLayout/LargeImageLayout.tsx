import { cn } from "@/lib/utils";
import { LargeImageLayoutProps } from "./LargeImageLayout.types";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const LargeImageLayout = (props: LargeImageLayoutProps) => {
  return (
    <div
      className={cn(
        `images-layout large-image-layout tw-relative tw-w-full tw-max-h-full`,
        props.layoutType === LayoutType.TextCenterCenterImageBackground
          ? `tw-h-full`
          : `
            tw-h-[293px]

            md:tw-h-[480px]
          `
      )}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-w-full tw-h-full`}
      />
    </div>
  );
};

export default LargeImageLayout;
