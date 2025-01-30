import {
  ArticleContent,
  ArticleHero,
  RelatedArticles,
} from "@/components/Pages";
import { ArticleService } from "@/services";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const res = await ArticleService.instance.getArticle(slug);

  if (!res) {
    redirect("/not-found");
  }

  const article = JSON.parse(JSON.stringify(res));

  const image = article.thumbnail;

  const tags = {
    title: article.title,
    description: article.description,
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

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const res = await ArticleService.instance.getArticle(slug);

  if (!res) {
    redirect("/not-found");
  }

  const article = JSON.parse(JSON.stringify(res));

  return (
    <div className="cs-page article-page">
      <ArticleHero article={article} />
      <ArticleContent article={article} />
      <RelatedArticles />
    </div>
  );
};

export default ArticlePage;
