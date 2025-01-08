import "../styles/main.scss";
import cn from "classnames";
import dynamic from "next/dynamic";
import { LayoutWrapper } from "@/components";
import { Inter, Bowlby_One } from "next/font/google";
import { headers } from "next/headers";

export async function generateMetadata() {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }
  console.log("HOST", `${protocol}://${currentHost}`);

  const image = `${protocol}://${currentHost}/img/meta/home-page.png`;

  const tags = {
    title: "Burneeble website",
    description: "Burneeble website",
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

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const CommonProviders = dynamic(
  () => import("@/components/ProviderWrappers/CommonProviders")
);

const inter = Inter({
  weight: ["400", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});
const bowlyOne = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="tw-bg-black tw-max-w-[100vw]">
        <body
          className={cn(
            "burneeble-default-theme",
            inter.variable,
            bowlyOne.variable,
            `tw-max-w-[100vw] tw-overflow-x-hidden tw-relative`
          )}
        >
          <CommonProviders>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CommonProviders>
        </body>
      </html>
    </>
  );
}
