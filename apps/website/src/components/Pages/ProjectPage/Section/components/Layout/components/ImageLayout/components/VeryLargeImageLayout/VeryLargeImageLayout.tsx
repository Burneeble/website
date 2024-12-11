import { VeryLargeImageLayoutProps } from "./VeryLargeImageLayout.types";

const VeryLargeImageLayout = (props: VeryLargeImageLayoutProps) => {
  return (
    <div
      className={`
        images-layout very-large-image-layout tw-relative tw-w-full tw-h-[410px]

        md:tw-h-[600px]
      `}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-h-full tw-w-full`}
      />
    </div>
  );
};

export default VeryLargeImageLayout;
