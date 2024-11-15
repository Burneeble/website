import { Landing, Projects } from "@/components/Pages";

const GalleryPage = () => {
  return (
    <div
      className={`
        gallery-page cs-page tw-from-[var(--secondary-darker)]
        tw-to-[var(--secondary-base)] tw-from-[20%] tw-to-[20%]
        tw-bg-gradient-to-t
      `}
    >
      <Landing />
      <Projects />
    </div>
  );
};

export default GalleryPage;
