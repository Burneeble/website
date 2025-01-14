import { YoutubeProps } from "./Youtube.types";

const Youtube = (props: YoutubeProps) => {
  return (
    <section
      className={`
        youtube cs-website-vertical-padding tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center tw-min-h-screen
        tw-relative
      `}
    ></section>
  );
};

export default Youtube;
