"use client";

// import { ProjectService } from "@/services/ProjectService";
import { Carousel } from "@burneeble/ui-components";
import React from "react";

export default function Home() {
  // const data = await ProjectService.instance.getProject("cG9zdDozMg==");

  return (
    <div className="tw-h-full">
      <Carousel
        images={[
          "https://picsum.photos/500",
          "https://picsum.photos/600",
          "https://picsum.photos/1920/1080",
          "https://picsum.photos/800/900",
          "https://picsum.photos/100",
          "https://picsum.photos/500/325",
        ]}
      />
      {/* <p>Project title: {data?.title}</p>
      <p>Project description: {data?.description}</p>
      <p>Project url: {data?.projectUrl}</p>
      <p>Project category: {data?.category}</p>
      <img src={data?.thumbnailUrl} /> */}
    </div>
  );
}
