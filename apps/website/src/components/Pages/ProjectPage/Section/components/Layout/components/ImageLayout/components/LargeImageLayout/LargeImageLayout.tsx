import { LargeImageLayoutProps } from "./LargeImageLayout.types";

const LargeImageLayout = (props: LargeImageLayoutProps) => {
  return (
    <div className={`images-layout large-image-layout tw-relative tw-w-full`}>
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-[1300/480] tw-w-full`}
      />
    </div>
  );
};

export default LargeImageLayout;
