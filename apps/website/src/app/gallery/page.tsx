import { Landing, Projects } from "@/components/Pages";

const GalleryPage = () => {
  return (
    <div
      className={`
        gallery-page cs-page tw-from-[var(--secondary-darker)]
        tw-to-[var(--secondary-base)] tw-from-[50%] tw-to-[50%]
        tw-bg-gradient-to-t
      `}
    >
      <Landing />
      <Projects />
    </div>
  );
};

export default GalleryPage;
