import { Landing, Projects } from "@/components/Pages";
import { ProjectService } from "@/services/ProjectService";
import { headers } from "next/headers";

export async function generateMetadata() {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }

  const image = `${protocol}://${currentHost}/img/meta/gallery-page.png`;

  const tags = {
    title: "Burneeble website",
    description: "Burneeble website gallery",
    image,
  };

  return {
    title: tags.title,
    description: tags.description,
    openGraph: {
      title: tags.title,
      description: tags.description,
      images: [tags.image],
    },
    twitter: {
      card: "summary_large_image",
      title: tags.title,
      description: tags.description,
      images: [tags.image],
    },
  };
}

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
