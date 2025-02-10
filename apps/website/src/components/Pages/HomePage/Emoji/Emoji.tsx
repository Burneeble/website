import { EmojiProps } from "./Emoji.types";

const Emoji = (props: EmojiProps) => {
  return (
    <section
      className={`
        emoji-section cs-section-structure tw-relative tw-flex tw-items-center
        tw-justify-center
      `}
    >
      <div
        className={`
          emoji-shape tw-absolute tw-left-1/2 tw-top-1/2 tw-h-[40rem]
          tw-w-[40rem] -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-opacity-[.5] tw-blur-[100px]
        `}
      />
      <div
        className={`
          text tw-z-[2] tw-text-center cs-s tw-font-bowlby-one tw-text-3xl
          tw-font-normal tw-text-headings

          md:tw-text-5xl

          xl:tw-text-7xl
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
