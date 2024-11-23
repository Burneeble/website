import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileSearchResultProps } from "./MobileSearchResult.types";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const MobileSearchResult = (props: MobileSearchResultProps) => {
  return (
    <div
      className={cn(
        `
          mobile-search-result tw-h-12 tw-p-2.5 tw-rounded-lg tw-justify-start
          tw-items-center tw-gap-2.5 tw-inline-flex tw-border-solid
          tw-border-[1px] tw-border-[rgba(0,0,0,0)] tw-cursor-pointer
          tw-transition-all tw-duration-200 tw-ease-in-out
        `,
        props.isActive
          ? "tw-bg-secondary !tw-border-[var(--primary-light)]"
          : `
            tw-bg-neutral

            hover:tw-border-[var(--primary-base)]
          `
      )}
      onClick={() => {
        props.onClick();
      }}
    >
      <div
        className={`
          name tw-grow tw-shrink tw-basis-0 tw-text-text-body-active tw-text-lg
          tw-font-normal tw-font-inter tw-leading-7
        `}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
      <FontAwesomeIcon icon={faLayerGroup} />
    </div>
  );
};

export default MobileSearchResult;
