import type { Metadata } from "next";
import "../styles/main.scss";
import cn from "classnames";
import { ProvidersWrapper } from "@/components";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Burneeble website",
  description: "Burneeble website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("burneeble-default-theme")}>
        <ProvidersWrapper>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
