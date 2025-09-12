import { headers } from "next/headers";

interface MetadataConfig {
  title: string;
  description: string;
  imagePath?: string;
}

export async function generateProjectsPageMetadata(config: MetadataConfig) {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }

  const image = config.imagePath
    ? `${protocol}://${currentHost}${config.imagePath}`
    : `${protocol}://${currentHost}/img/meta/gallery-page.png`;

  const tags = {
    title: config.title,
    description: config.description,
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
      card: "summary_large_image" as const,
      title: tags.title,
      description: tags.description,
      images: [tags.image],
    },
  };
}