import { cn } from "@/lib/utils";
import { OneImageLayoutProps } from "./OneImageLayout.types";

const OneImageLayout = (props: OneImageLayoutProps) => {
  //States
  const mainAxis = props.mainAxis || "height";

  return (
    <div
      className={cn(
        `
          images-layout one-image-layout tw-relative tw-aspect-[630/532] tw-flex
          tw-items-center tw-justify-center
        `,
        mainAxis === "height"
          ? "tw-h-full tw-max-h-[35rem]"
          : `tw-w-full tw-max-w-[41.5rem]`
      )}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-[630/532] tw-h-full`}
      />
    </div>
  );
};

export default OneImageLayout;
