import {
  Congrats,
  Contact,
  Customers,
  Emoji,
  Hero,
  Showcase,
} from "@/components/Pages";
import { ProjectService } from "@/services/ProjectService";
import dynamic from "next/dynamic";
import React from "react";

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const HomePageProviders = dynamic(
  () => import("@/components/ProviderWrappers/HomePageProviders")
);

export default async function Home() {
  //SSR data fetching
  const res = await ProjectService.instance.getProjects();
  const projects = JSON.parse(
    JSON.stringify(
      res.map((project) => {
        return {
          thumbnail: project.thumbnailUrl,
          categories: project.categories,
        };
      })
    )
  );

  return (
    <HomePageProviders>
      <div
        className={`
          home-page tw-h-full tw-max-w-[100vw] tw-overflow-x-hidden
          tw-bg-gradient-to-t tw-from-[var(--secondary-darker)]
          tw-to-[var(--secondary-base)] tw-pb-[45px] tw-from-0% tw-to-[8%]
        `}
      >
        <Hero />
        <Customers />
        <Emoji />
        <Showcase projects={projects} />
        <Contact />
        <Congrats />
      </div>
    </HomePageProviders>
  );
}
