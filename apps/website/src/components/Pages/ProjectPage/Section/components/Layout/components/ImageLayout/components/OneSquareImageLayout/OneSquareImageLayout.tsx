import { OneSquareImageLayoutProps } from "./OneSquareImageLayout.types";

const OneSquareImageLayout = (props: OneSquareImageLayoutProps) => {
  return (
    <div
      className={`images-layout one-square-image-layout tw-relative tw-w-full`}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-square tw-w-full`}
      />
    </div>
  );
};

export default OneSquareImageLayout;
