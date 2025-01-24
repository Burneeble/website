import {
  CategoryArticles,
  CategoryHero,
  CategoryPageServiceProvider,
} from "@/components/Pages";
import { ArticleService } from "@/services";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string };
}) {
  const { categorySlug } = params;

  const res = await ArticleService.instance.getCategory(categorySlug);

  if (!res) {
    redirect("/not-found");
  }

  const category = JSON.parse(JSON.stringify(res));

  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }

  const generatedImageUrl = `${protocol}://${currentHost}/api/generate-blog-category-image?categoryName=${encodeURIComponent(
    category.name
  )}`;

  const tags = {
    title: category.name,
    description: category.description,
    image: generatedImageUrl,
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

const CategoryPage = async ({
  params,
}: {
  params: { categorySlug: string };
}) => {
  const { categorySlug } = params;

  const res = await ArticleService.instance.getCategory(categorySlug);

  if (!res) {
    redirect("/not-found");
  }

  const category = JSON.parse(JSON.stringify(res));

  return (
    <div className="cs-page category-page">
      <CategoryPageServiceProvider categoryName={category.name}>
        <CategoryHero category={category} />
        <CategoryArticles />
      </CategoryPageServiceProvider>
    </div>
  );
};

export default CategoryPage;
