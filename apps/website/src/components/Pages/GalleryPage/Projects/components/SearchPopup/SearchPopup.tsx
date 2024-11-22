"use client";

import { useEffect, useState } from "react";
import { SearchPopupProps } from "./SearchPopup.types";
import {
  NotFound,
  NotificationHandler,
  Popup,
  Spinner,
  useClientInfoService,
} from "@burneeble/ui-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MobileSearchResult } from "./components";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_QUERY } from "@/services/ProjectService";
import { cn } from "@/lib/utils";

const SearchPopup = (props: SearchPopupProps) => {
  //States
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<
    string | null
  >(null);
  const [categoriesSearchResults, setCategoriesSearchResults] = useState<
    string[]
  >([]);
  const [projectsSearchResults, setProjectsSearchResults] = useState<
    Array<string>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Hooks
  const { screen } = useClientInfoService();
  const { fetchMore } = useQuery(GET_PROJECTS_QUERY, {
    variables: {
      limit: 0,
      offset: "0",
      search: debouncedSearchQuery || "",
    },
  });

  //Effects
  useEffect(() => {
    const handler = setTimeout(() => {
      if (["sm", "md"].includes(screen)) {
        setDebouncedSearchQuery(searchQuery);
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setCategoriesSearchResults(
        props.categories.filter((category) => {
          return category
            .toLowerCase()
            .includes(debouncedSearchQuery?.toLowerCase() || "");
        })
      );
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (props.popupLogic.isPopupOpen && debouncedSearchQuery) searchProjects();
  }, [debouncedSearchQuery]);

  useEffect(() => {
    setDebouncedSearchQuery(null);
    setSearchQuery(null);
  }, [props.popupLogic.isPopupOpen]);

  //Methods
  const searchProjects = async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchMore({
        variables: {
          limit: 0,
          offset: "0",
          search: debouncedSearchQuery || "",
        },
      });

      const projects = data.projects
        ? data.projects.edges.map((edge) => edge.node.title || "")
        : [];
      setProjectsSearchResults(projects || []);
    } catch (err) {
      console.log(err);
      NotificationHandler.instance.error("Failed to search projects");
    } finally {
      setIsLoading(false);
    }
  };

  const highlightText = (text: string, query: string) => {
    const words = query.split(" ").filter((word) => word.trim() !== "");
    let highlightedText = text;
    words.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<span class="highlight">$1</span>'
      );
    });
    return highlightedText;
  };

  return (
    <Popup logic={props.popupLogic} variant="secondary" className="!tw-min-h-0">
      <div
        className={`
          search-popup tw-font-inter tw-text-lg tw-w-full tw-flex tw-flex-col
        `}
      >
        <div
          className={`
            search tw-flex tw-gap-[10px] tw-items-center tw-text-border-neutral
            tw-w-full
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
        <div
          className={cn(
            `results tw-transition-[height] tw-duration-1000 tw-ease-in-out`,
            !searchQuery && !isLoading
              ? `tw-h-0 tw-overflow-hidden tw-mt-0`
              : `tw-h-[270px] tw-overflow-y-scroll tw-mt-[15px]`,
            searchQuery && `tw-border-t-[1px] tw-border-solid tw-border-neutral`
          )}
        >
          {isLoading || searchQuery !== debouncedSearchQuery ? (
            <div
              className={`
                spinner-wrapper tw-w-full tw-h-full tw-flex tw-items-center
                tw-justify-center
              `}
            >
              {searchQuery && <Spinner />}
            </div>
          ) : (
            <>
              {categoriesSearchResults.length <= 0 &&
              projectsSearchResults.length <= 0 ? (
                <NotFound title={"Oops!"} text={"No Element Found"} />
              ) : (
                <>
                  {categoriesSearchResults.length > 0 && (
                    <div className="search-section">
                      <h3 className="section-name">Categories</h3>
                      {categoriesSearchResults.map((category, i) => {
                        return (
                          <MobileSearchResult
                            key={i}
                            text={highlightText(
                              category,
                              debouncedSearchQuery || ""
                            )}
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
                    </div>
                  )}
                  {projectsSearchResults.length > 0 && (
                    <div className="search-section">
                      <h3 className="section-name">Project Names</h3>
                      {projectsSearchResults.map((proj, i) => {
                        return (
                          <MobileSearchResult
                            key={i}
                            text={highlightText(
                              proj,
                              debouncedSearchQuery || ""
                            )}
                            isActive={false}
                            onClick={() => {}}
                          />
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Popup>
  );
};

export default SearchPopup;
