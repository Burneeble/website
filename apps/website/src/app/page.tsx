import {
  Congrats,
  Contact,
  Customers,
  Hero,
  Showcase,
} from "@/components/Pages";
import dynamic from "next/dynamic";
import React from "react";

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const HomePageProviders = dynamic(
  () => import("@/components/ProviderWrappers/HomePageProviders")
);

export default async function Home() {
  return (
    <HomePageProviders>
      <div
        className={`
          home-page tw-h-full tw-max-w-[100vw] tw-overflow-x-hidden
          tw-bg-gradient-to-t tw-from-[var(--secondary-darker)]
          tw-to-[var(--secondary-base)] tw-from-0% tw-to-[8%] tw-pb-[45px]
        `}
      >
        <Hero />
        <Customers />
        <Showcase />
        <Contact />
        <Congrats />
      </div>
    </HomePageProviders>
  );
}
