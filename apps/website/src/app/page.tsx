"use client";

// import { ProjectService } from "@/services/ProjectService";
import { Carousel } from "@burneeble/ui-components";
import React from "react";

export default function Home() {
  // const data = await ProjectService.instance.getProject("cG9zdDozMg==");

  return (
    <div className="tw-h-full">
      <Carousel />
      {/* <p>Project title: {data?.title}</p>
      <p>Project description: {data?.description}</p>
      <p>Project url: {data?.projectUrl}</p>
      <p>Project category: {data?.category}</p>
      <img src={data?.thumbnailUrl} /> */}
    </div>
  );
}
