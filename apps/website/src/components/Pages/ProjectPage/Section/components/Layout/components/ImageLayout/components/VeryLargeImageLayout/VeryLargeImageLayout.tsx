import { VeryLargeImageLayoutProps } from "./VeryLargeImageLayout.types";

const VeryLargeImageLayout = (props: VeryLargeImageLayoutProps) => {
  return (
    <div
      className={`images-layout very-large-image-layout tw-relative tw-w-full`}
    >
      <img
        src={props.image1}
        className={`tw-object-cover tw-aspect-[1300/600] tw-w-full`}
      />
    </div>
  );
};

export default VeryLargeImageLayout;
