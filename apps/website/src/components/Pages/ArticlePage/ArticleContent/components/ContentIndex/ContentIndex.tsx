"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentIndexProps } from "./ContentIndex.types";
import { faCaretDown, faList } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ContentIndex = (props: ContentIndexProps) => {
  //States
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Effects
  useEffect(() => {
    const paragraphs = document.querySelectorAll("h2");
    console.log(paragraphs);
  }, []);

  return (
    <div
      className={`
        content-index tw-mx-auto tw-text-headings tw-border-[2px]
        tw-border-white tw-rounded-[.5rem] p-default tw-w-full tw-p-[.6rem]
      `}
    >
      <div className="header tw-flex tw-items-center tw-justify-between">
        <span className="text tw-text-action tw-font-bold tw-tracking-[1px]">
          Contents Index
        </span>
        <span
          className={`
            icon tw-flex tw-items-center tw-justify-center tw-gap-[5px]
            tw-border-[2px] tw-border-white tw-p-[.2rem] tw-rounded-[.4rem]
            tw-transition-all tw-duration-500 tw-ease-in-out tw-group
            tw-cursor-pointer

            hover:tw-border-active
          `}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon icon={faList} />
          <FontAwesomeIcon
            icon={faCaretDown}
            className={cn(
              `
                tw-transition-all tw-duration-500 tw-ease-in-out group

                group-hover:tw-rotate-[-22.5deg]
              `,
              isOpen && "!tw-rotate-[-180deg]"
            )}
          />
        </span>
      </div>
      <div
        className={cn(
          "paragraphs",
          isOpen ? "tw-max-h-[100rem]" : `tw-max-h-0`
        )}
      ></div>
    </div>
  );
};

export default ContentIndex;
