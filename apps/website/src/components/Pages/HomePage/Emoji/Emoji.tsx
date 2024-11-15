import { EmojiProps } from "./Emoji.types";

const Emoji = (props: EmojiProps) => {
  return (
    <section
      className={`
        emoji-section cs-section-structure tw-flex tw-items-center
        tw-justify-center tw-relative
      `}
    >
      <div
        className={`
          shape tw-absolute tw-top-[50%] tw-left-[50%] -tw-translate-x-[50%]
          -tw-translate-y-[50%] tw-w-[40rem] tw-h-[40rem]
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-opacity-[.5] tw-blur-[100px]
        `}
      ></div>
      <div
        className={`
          text tw-text-center cs-s tw-font-bowlby-one tw-font-normal tw-text-7xl
          tw-text-headings tw-z-[2]
        `}
      >
        Still{" "}
        <span
          className={`tw-text-primary-default cs-text-color-primary-gradient`}
        >
          not sure
        </span>
        ?
      </div>
    </section>
  );
};

export default Emoji;
