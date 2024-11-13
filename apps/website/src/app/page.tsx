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
      {/* tw-from-0% tw-to-[8%] were in conflict with tw-from-[var(--secondary-darker)]
          tw-to-[var(--secondary-base)]  */}
      <div
        className={`
          home-page tw-h-full tw-max-w-[100vw] tw-overflow-x-hidden
          tw-bg-gradient-to-t tw-from-[var(--secondary-darker)]
          tw-to-[var(--secondary-base)] tw-pb-[45px] tw-from-0% tw-to-[8%]
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
