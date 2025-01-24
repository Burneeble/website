"use client";

import RoundedWrapper from "@/components/RoundedWrapper";
import { ArticleContentProps } from "./ArticleContent.types";
import { Label, useClientInfoService } from "@burneeble/ui-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "./prism-import";
import { ContentIndex } from "./components";
import { useRouter } from "next/navigation";

const ArticleContent = (props: ArticleContentProps) => {
  //States
  const [content, setContent] = useState<string>(props.article.content);

  //Hooks
  const { isClient } = useClientInfoService();
  const router = useRouter();

  //Effects
  useEffect(() => {
    Prism.highlightAll();
  }, [props.article.content]);

  useEffect(() => {
    const codes = document.querySelectorAll(".dm-code-snippet");

    if (codes) {
      for (let i = 0; i < codes.length; i++) {
        // @ts-ignore
        const code = codes[i].children[0].children[1].children[0].innerText;

        const button =
          codes[i].children[0].children[0].children[1].children[0].children[0];

        button.addEventListener("click", () => {
          window.navigator.clipboard.writeText(code);
          // @ts-ignore
          button.innerText = "Copied!";
          setTimeout(() => {
            // @ts-ignore
            button.innerText = "Copy Code";
          }, 2000);
        });
      }
    }
  }, []);

  useEffect(() => {
    formatContent();
  }, []);

  //Methods
  const formatDate = (isoDateString: string): string => {
    const date = new Date(isoDateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const formatContent = () => {
    console.log("formatContent");
    try {
      const content = props.article.content;

      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");

      const h2Elements = doc.querySelectorAll("h2");

      h2Elements.forEach((h2) => {
        if (h2.textContent) {
          const id = h2.textContent
            .replace(/ /g, "-")
            .replaceAll("#", "")
            .replaceAll(".", "")
            .toLowerCase();
          h2.setAttribute("id", id);
        }
      });

      const anchorElements = doc.querySelectorAll("a");
      anchorElements.forEach((a) => {
        const href = a.getAttribute("href");
        if (href && href.includes("https://burneeble.com")) {
          const updatedHref = href.replace(
            "https://burneeble.com",
            `${isClient && window ? window.location.origin : ""}/blog/article`
          );
          a.setAttribute("href", updatedHref);
        }
      });

      setContent(doc.body.innerHTML);
    } catch {
      setContent(
        props.article.content.replaceAll(
          "https://burneeble.com",
          `${isClient && window ? window.location.origin : ""}/blog/article`
        )
      );
    }
  };

  return (
    <section className={`cs-structure-page article-content`}>
      <RoundedWrapper
        className={`
          tw-py-[50px] tw-flex tw-flex-col tw-items-start tw-justify-start
          !tw-gap-[10px]
        `}
      >
        <Label
          text={props.article.categories[0].name}
          variant={"active"}
          onClick={() => {
            router.push(`/blog/category/${props.article.categories[0].slug}`);
          }}
        />
        <h1
          className={`
            title !tw-leading-[47px]

            md:!tw-leading-[94px]

            sm:!tw-leading-[70px]
          `}
        >
          {props.article.title}
        </h1>
        <p className="author tw-pb-[10px] p-small tw-text-headings">
          Published by{" "}
          <Link
            href={"/"}
            className={`
              tw-text-action tw-transition-all tw-duration-200 tw-ease-in-out

              hover:tw-text-action-hover
            `}
          >
            burneeble team
          </Link>{" "}
          on {formatDate(props.article.date || "")}
        </p>
        <ContentIndex article={props.article} />
        <div
          className={`
            article-body tw-flex tw-flex-col tw-gap-[30px] tw-text-headings
          `}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </RoundedWrapper>
    </section>
  );
};

export default ArticleContent;
