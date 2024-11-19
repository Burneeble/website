"use client";

import { useState } from "react";
import { SearchPopupProps } from "./SearchPopup.types";
import { Popup } from "@burneeble/ui-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MobileSearchResult } from "./components";

const SearchPopup = (props: SearchPopupProps) => {
  //States
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  //   const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<
  //     string | null
  //   >(null);

  //Effects
  // useEffect(() => {
  //     const handler = setTimeout(() => {
  //       if (["sm", "md"].includes(screen)) {
  //         setDebouncedSearchQuery(popupSearchQuery);
  //       }
  //     }, 1000);

  //     return () => {
  //       clearTimeout(handler);
  //     };
  //   }, [popupSearchQuery]);

  return (
    <Popup logic={props.popupLogic}>
      <div className="search-popup tw-font-inter tw-text-lg tw-w-full">
        <div
          className={`
            search tw-pb-[15px] tw-flex tw-gap-[10px] tw-items-center
            tw-text-border-neutral tw-w-full tw-border-b-[1px] tw-border-solid
            tw-border-neutral
          `}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className={`
              search-input tw-flex-1 tw-bg-[rgba(0,0,0,0)] tw-outline-none
              tw-text-headings
            `}
            value={searchQuery || ""}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search..."
          />
        </div>
        <div className="results">
          {/* {searchQuery && (
            <>
              <div className="search-section">
                <h3 className="section-name">Categories</h3>
                {props.categories
                  .filter((category) => {
                    return category
                      .toLowerCase()
                      .includes(searchQuery?.toLowerCase());
                  })
                  .map((category, i) => {
                    return (
                      <MobileSearchResult
                        key={i}
                        text={category}
                        isActive={props.activeCategories.includes(category)}
                        onClick={() => {
                          props.popupLogic.closePopup();
                          props.setActiveCategories((prev) =>
                            prev.includes(category)
                              ? prev.filter((c) => c !== category)
                              : [...prev, category]
                          );
                        }}
                      />
                    );
                  })}
                <MobileSearchResult
                  text={"Blockchain"}
                  isActive={true}
                  onClick={() => {}}
                />
              </div>
              <div className="search-section">
                <h3 className="section-name">Project Names</h3>
                <MobileSearchResult
                  text={"Blockchain"}
                  isActive={false}
                  onClick={() => {}}
                />
              </div>
            </>
          )} */}
        </div>
      </div>
    </Popup>
  );
};

export default SearchPopup;
