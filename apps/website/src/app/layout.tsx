import type { Metadata } from "next";
import "../styles/main.scss";
import cn from "classnames";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Burneeble website",
  description: "Burneeble website",
};

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const CommonProviders = dynamic(
  () => import("@/components/ProviderWrappers/CommonProviders")
);

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const LayoutWrapper = dynamic(
  () => import("@/components/LayoutWrapper/LayoutWrapper")
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("burneeble-default-theme")}>
        <CommonProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </CommonProviders>
      </body>
    </html>
  );
}
