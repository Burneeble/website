"use client";

import { Button, useClientInfoService } from "@burneeble/ui-components";
import { SectionInfoProps, SectionInfoVariants } from "./SectionInfo.types";
import { cn } from "@/lib/utils";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const SectionInfo = (props: SectionInfoProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={cn(
        SectionInfoVariants({ alignment: props.alignment }),
        [
          LayoutType.TextTopCenterShapeHorizontalBottom,
          LayoutType.TextTopStartShapeHorizontalBottom,
          LayoutType.TextTopCenterFullImageBottomCenter,
          LayoutType.TextTopStartFullImageBottomCenter,
        ].includes(props.layoutType) && `tw-mb-[50px]`
      )}
    >
      <h2
        className={cn(
          "title tw-w-full",
          (!props.textAlignment || props.textAlignment === "center") &&
            "tw-text-center"
        )}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p
        className={cn(
          "text p-default",
          (!props.textAlignment || props.textAlignment === "center") &&
            "tw-text-center"
        )}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
      {props.buttonText && props.buttonUrl && (
        <Button
          onClick={() => {
            window.open(props.buttonUrl, "_blank");
          }}
          size={props.buttonSize}
          fit={screen == "sm" ? "full" : "inline"}
          className="tw-mt-[20px]"
        >
          {props.buttonText}
        </Button>
      )}
    </div>
  );
};

export default SectionInfo;
