import { Landing, Projects } from "@/components/Pages";
import { ProjectService } from "@/services/ProjectService";
import { Metadata } from "next";

const tags = {
  title: "Burneeble website",
  description: "Burneeble website gallery",
  image: "./img/meta/gallery-page.png",
};

export const metadata: Metadata = {
  title: tags.title,
  description: tags.description,
  openGraph: {
    images: [tags.image],
    title: tags.title,
    description: tags.description,
  },
  twitter: {
    card: "summary_large_image",
    title: tags.title,
    description: tags.description,
    images: [tags.image],
  },
};

const GalleryPage = async () => {
  const res = await ProjectService.instance.getCategories();
  const categories = JSON.parse(JSON.stringify(res));

  return (
    <div
      className={`
        gallery-page cs-page tw-from-[var(--secondary-darker)]
        tw-to-[var(--secondary-base)] tw-from-[50%] tw-to-[50%]
        tw-bg-gradient-to-t
      `}
    >
      <Landing />
      <Projects categories={categories} />
    </div>
  );
};

export default GalleryPage;
