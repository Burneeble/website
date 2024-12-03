import { OneImageLayoutProps } from "./OneImageLayout.types";

const OneImageLayout = (props: OneImageLayoutProps) => {
  return (
    <div className={`images-layout one-image-layout tw-relative tw-w-full`}>
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-[630/532] tw-w-full`}
      />
    </div>
  );
};

export default OneImageLayout;
