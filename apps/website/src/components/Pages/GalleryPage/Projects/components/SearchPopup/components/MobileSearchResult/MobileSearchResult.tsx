import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileSearchResultProps } from "./MobileSearchResult.types";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const MobileSearchResult = (props: MobileSearchResultProps) => {
  return (
    <div
      className={cn(
        `
          mobile-search-result tw-inline-flex tw-h-12 tw-cursor-pointer
          tw-items-center tw-justify-start tw-gap-2.5 tw-rounded-lg
          tw-border-[1px] tw-border-solid tw-border-[rgba(0,0,0,0)] tw-p-2.5
          tw-transition-all tw-duration-200 tw-ease-in-out
        `,
        props.isActive
          ? "!tw-border-[var(--primary-light)] tw-bg-secondary"
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
          name tw-shrink tw-grow tw-basis-0 tw-text-text-body-active
          tw-font-inter tw-text-lg tw-font-normal tw-leading-7
        `}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
      <FontAwesomeIcon icon={faLayerGroup} />
    </div>
  );
};

export default MobileSearchResult;
