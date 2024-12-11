import { LargeImageLayoutProps } from "./LargeImageLayout.types";

const LargeImageLayout = (props: LargeImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout large-image-layout tw-relative tw-w-full tw-h-[293px]

        md:tw-h-[480px]
      `}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-w-full tw-h-full`}
      />
    </div>
  );
};

export default LargeImageLayout;
