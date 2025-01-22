import {
  CategoryArticles,
  CategoryHero,
  CategoryPageServiceProvider,
} from "@/components/Pages";
import { ArticleService } from "@/services";
import { redirect } from "next/navigation";

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
