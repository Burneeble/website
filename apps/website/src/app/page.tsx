import { ProjectService } from "@/services/ProjectService";
import React from "react";

export default async function Home() {
  const data = await ProjectService.instance.getProject("cG9zdDozMg==");

  return (
    <div className="text-sky-600 ">
      <p>Project title: {data?.title}</p>
      <p>Project description: {data?.description}</p>
      <p>Project url: {data?.projectUrl}</p>
      <p>Project category: {data?.category}</p>
      <img src={data?.thumbnailUrl} />
    </div>
  );
}
