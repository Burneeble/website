import { RoundedWrapper } from "@/components";
import { BlogHero, Latest } from "@/components/Pages";
import { headers } from "next/headers";

export async function generateMetadata() {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }

  const image = `${protocol}://${currentHost}/img/meta/blog-page.png`;

  const tags = {
    title: "Burneeble Blog -  Learn more about Development and AI",
    description:
      "Welcome to the Burneeble Blog. Check out our articles to learn more about AI in development! We provide news, tutorials, how-to videos, and more, exploring the latest innovations and trends in the world of software development and AI.",
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

const BlogPage = async () => {
  return (
    <div
      className={`
        blog-page cs-page tw-from-[var(--secondary-darker)]
        tw-to-[var(--secondary-base)] tw-from-[50%] tw-to-[50%]
        tw-bg-gradient-to-t
      `}
    >
      <BlogHero />
      <RoundedWrapper>
        <Latest />
      </RoundedWrapper>
    </div>
  );
};

export default BlogPage;
