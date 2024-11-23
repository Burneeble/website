import type { Metadata } from "next";
import "../styles/main.scss";
import cn from "classnames";
import dynamic from "next/dynamic";
import { LayoutWrapper } from "@/components";
import { Inter, Bowlby_One } from "next/font/google";

export const metadata: Metadata = {
  title: "Burneeble website",
  description: "Burneeble website",
};

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
