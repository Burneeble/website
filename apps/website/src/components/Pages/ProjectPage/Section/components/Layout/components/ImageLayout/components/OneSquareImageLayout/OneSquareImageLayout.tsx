import { OneSquareImageLayoutProps } from "./OneSquareImageLayout.types";

const OneSquareImageLayout = (props: OneSquareImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout one-square-image-layout tw-relative tw-w-full tw-h-full
        tw-flex tw-items-center tw-justify-center
      `}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-square tw-h-full`}
      />
    </div>
  );
};

export default OneSquareImageLayout;
