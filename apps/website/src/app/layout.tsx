import "../styles/main.scss";
import cn from "classnames";
import dynamic from "next/dynamic";
import { LayoutWrapper } from "@/components";
import { Inter, Bowlby_One, Bowlby_One_SC } from "next/font/google";
import { headers } from "next/headers";

export async function generateMetadata() {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }
  console.log("HOST", `${protocol}://${currentHost}`);

  const host = `${protocol}://${currentHost}`;
  const image = `${host}/img/meta/home-page.png`;
  const icon = `${host}/img/meta/logo.png`;

  const tags = {
    title: "Burneeble -  We develop digital solutions without limits",
    description:
      "We are a group of developers capable of developing any type of app or website. From integrations with blockchain, Web3, Stripe API and Shopify, to customized solutions. We bring your ideas to reality with designs and features designed to offer you a complete and innovative digital experience.",
    icon,
    image,
  };

  return {
    title: tags.title,
    description: tags.description,
    icons: [tags.icon],
    openGraph: {
      icon: tags.icon,
      title: tags.title,
      description: tags.description,
      images: [tags.image],
    },
    twitter: {
      icon: tags.icon,
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
const bowlbyOneSc = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--secondary-font-title",
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
            bowlbyOneSc.variable,
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
