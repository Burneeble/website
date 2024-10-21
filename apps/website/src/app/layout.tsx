import type { Metadata } from "next";
import "../styles/main.scss";
import cn from "classnames";
import LayoutWrapper from "@/components/LayoutWrapper";
import dynamic from "next/dynamic";
import { Sidebar } from "@/components";

export const metadata: Metadata = {
  title: "Burneeble website",
  description: "Burneeble website",
};

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const CommonProviders = dynamic(
  () => import("@/components/ProviderWrappers/CommonProviders")
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
          <Sidebar>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Sidebar>
        </CommonProviders>
      </body>
    </html>
  );
}
