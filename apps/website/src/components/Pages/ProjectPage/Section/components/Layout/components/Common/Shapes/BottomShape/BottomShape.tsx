import { BottomShapeProps } from "./BottomShape.types";

const BottomShape = (props: BottomShapeProps) => {
  return (
    <div
      className={`
        layout-shape tw-left-1/2 tw-bottom-0 tw-h-[164px] tw-w-screen
        -tw-translate-x-1/2

        lg:tw-h-[411px]

        md:tw-h-[250px]

        sm:tw-w-full sm:tw-rounded-t-lg
      `}
    />
  );
};

export default BottomShape;
