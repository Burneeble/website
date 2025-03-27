import {
  Abilities,
  Blog,
  Congrats,
  Contact,
  Customers,
  Emoji,
  Hero,
  Showcase,
  Youtube,
} from "@/components/Pages";
import { fetchYoutubeVideos } from "@/lib/recentYoutubeVideos";
import { SkillService } from "@/services";
import { ProjectService } from "@/services/ProjectService";
import dynamic from "next/dynamic";
import React from "react";

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const HomePageProviders = dynamic(
  () => import("@/components/ProviderWrappers/HomePageProviders")
);

export default async function Home() {
  //SSR data fetching
  let projects = null;
  let skills = null;
  let videos = [] as Array<YoutubeVideo> | null;

  try {
    const [projectsInfo, skillsInfo] = await Promise.all([
      ProjectService.instance.getProjects(),
      SkillService.instance.getSkills(),
    ]);

    projects = JSON.parse(
      JSON.stringify(
        projectsInfo.map((project) => {
          return {
            thumbnailUrl: project.thumbnailUrl,
            categories: project.categories,
            title: project.title,
            description: project.description,
            projectUrl: project.projectUrl,
          };
        })
      )
    );

    skills = JSON.parse(
      JSON.stringify(
        skillsInfo.map((skill) => {
          return {
            title: skill.title,
            sm: skill.sm,
            md: skill.md,
            xl: skill.xl,
          };
        })
      )
    );

    videos = await fetchYoutubeVideos();
  } catch (err) {
    console.log("error getting projects and skills", err);
  }

  return (
    <HomePageProviders>
      <div
        className={`
          home-page cs-page tw-bg-gradient-to-t
          tw-from-[var(--secondary-darker)] tw-to-[var(--secondary-base)]
        `}
      >
        <Hero />
        <Youtube
          video={videos}
          className={`
            youtube-section-home-page cs-section-structure tw-z-[1]
            min-h-[unset] tw-mb-12
          `}
        />

        <Customers />
        {skills && <Abilities skills={skills} />}
        <Emoji />
        {projects && <Showcase projects={projects} />}

        <Contact />
        <Blog />
        <Congrats />
      </div>
    </HomePageProviders>
  );
}
