import type { Metadata } from "next";
import "../styles/main.scss";
import cn from "classnames";
import { ProvidersWrapper } from "@/components";
import LayoutWrapper from "@/components/LayoutWrapper";
import dynamic from "next/dynamic";
import ProjectServiceProvider from "@/services/ProjectService";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Burneeble website",
  description: "Burneeble website",
};

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const QueryProvider = dynamic(
  () => import("@/services/GraphQLService/GraphQLServiceProvider")
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("burneeble-default-theme")}>
        <QueryProvider>
          <ProjectServiceProvider>
            <ProvidersWrapper>
              <LayoutWrapper>
                {/* <p>Project name: {data.projects?.edges[0].node.title}</p>
                <p>Project slug: {data.projects?.edges[0].node.slug}</p>
                <p>Project id: {data.projects?.edges[0].node.id}</p>
                <p>
                  Project category:{" "}
                  {
                    data.projects?.edges[0].node.projectFields?.category
                      ?.nodes[0].name
                  }
                </p>
                <p>
                  Project url:{" "}
                  <a
                    href={
                      data.projects?.edges[0].node.projectFields?.projectUrl ||
                      ""
                    }
                  >
                    {data.projects?.edges[0].node.projectFields?.projectUrl}
                  </a>
                </p>
                <img
                  src={
                    data.projects?.edges[0].node.projectFields?.thumbnail?.node
                      .sourceUrl || ""
                  }
                /> */}
                <Button>Hello World</Button>
                {children}
              </LayoutWrapper>
            </ProvidersWrapper>
          </ProjectServiceProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
