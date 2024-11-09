import { Contact, Customers, Hero } from "@/components/Pages";
import dynamic from "next/dynamic";
import React from "react";

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
const HomePageProviders = dynamic(
  () => import("@/components/ProviderWrappers/HomePageProviders")
);

export default async function Home() {
  return (
    <HomePageProviders>
      <div className="home-page tw-h-full tw-max-w-[100vw] tw-overflow-x-hidden">
        <Hero />
        <Customers />
        <Contact />
      </div>
    </HomePageProviders>
  );
}
