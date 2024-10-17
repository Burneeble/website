import { ProjectService } from "@/services/ProjectService";
import React from "react";

export default async function Home() {
  const data = await ProjectService.instance.getProject("cG9zdDozMg==");

  console.log("[Project data]", JSON.stringify(data));

  return (
    <>
      <p>Project name: {data?.title}</p>
      <p>Project category: {data?.category}</p>
      <p>
        Project url: <a href={data?.projectUrl || ""}>{data?.projectUrl}</a>
      </p>
      <img src={data?.thumbnailUrl || ""} />
    </>
  );
}
