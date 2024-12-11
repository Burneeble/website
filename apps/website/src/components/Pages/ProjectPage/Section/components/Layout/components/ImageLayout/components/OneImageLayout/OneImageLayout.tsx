import { OneImageLayoutProps } from "./OneImageLayout.types";

const OneImageLayout = (props: OneImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout one-image-layout tw-relative tw-h-full tw-w-full tw-flex
        tw-items-center tw-justify-center
      `}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-[630/532] tw-h-full`}
      />
    </div>
  );
};

export default OneImageLayout;
