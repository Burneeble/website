import { BlogPagesProviders } from "@/components";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlogPagesProviders>{children}</BlogPagesProviders>;
}
