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
    title: "Discover our project gallery",
    description:
      "We develop projects in all categories: telegrams mini apps, websites, e-commerce solutions with Shopify, advanced integrations such as blockchain and Web3, and APIs such as Stripe. Each project is custom-developed to offer powerful and innovative features, without technological limitations.",
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
  let categories = null;

  try {
    const res = await ProjectService.instance.getCategories();
    categories = JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  return (
    <div
      className={`
        gallery-page cs-page tw-bg-gradient-to-t
        tw-from-[var(--secondary-darker)] tw-to-[var(--secondary-base)]
      `}
    >
      <Landing />
      <Projects categories={categories} />
    </div>
  );
};

export default GalleryPage;
