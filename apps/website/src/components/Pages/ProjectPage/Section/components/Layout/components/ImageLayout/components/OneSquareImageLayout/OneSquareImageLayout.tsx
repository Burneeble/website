import { cn } from "@/lib/utils";
import { OneSquareImageLayoutProps } from "./OneSquareImageLayout.types";

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
          ? "tw-h-full tw-max-h-[35rem]"
          : "tw-w-full tw-max-w-[35rem]"
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
