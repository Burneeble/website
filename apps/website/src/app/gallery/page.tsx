import { ProjectsPage } from "@/components/Pages/ProjectsPage";
import { ProjectService } from "@/services/ProjectService";
import { generateProjectsPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return generateProjectsPageMetadata({
    title: "Discover our project gallery",
    description:
      "We develop projects in all categories: telegrams mini apps, websites, e-commerce solutions with Shopify, advanced integrations such as blockchain and Web3, and APIs such as Stripe. Each project is custom-developed to offer powerful and innovative features, without technological limitations.",
    imagePath: "/img/meta/gallery-page.png",
  });
}

const GalleryPage = async () => {
  let categories = null;

  try {
    const res = await ProjectService.instance.getCategories();
    categories = JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  return <ProjectsPage variant="gallery" categories={categories} />;
};

export default GalleryPage;
