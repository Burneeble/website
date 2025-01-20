import { cn } from "@/lib/utils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar = (props: SearchBarProps) => {
  //States
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);

  //Effects
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(props.value);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [props.value]);

  useEffect(() => {
    if (typeof debouncedValue === "string") {
      props.onChange(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div
      className={cn(`
        search-bar tw-flex tw-h-[58px] tw-w-full tw-cursor-pointer
        tw-items-center tw-justify-center tw-gap-2.5 tw-rounded-lg tw-border
        tw-border-[var(--neutral-default)] tw-bg-[var(--secondary-base)]
        tw-px-2.5 tw-py-0.5 tw-text-3xl tw-text-[var(--neutral-default)]
        tw-transition-all tw-duration-200 tw-ease-in-out

        hover:tw-border-[var(--primary-base)] hover:tw-text-headings
      `)}
    >
      <input
        value={props.value || ""}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        placeholder="Search..."
        className={`
          tw-flex-1 tw-bg-[rgba(0,0,0,0)] tw-font-inter tw-text-2xl
          tw-text-headings tw-outline-none
        `}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`tw-max-h-[1.875rem]`}
      />
    </div>
  );
};

export default SearchBar;
