"use client";

import {
  Button,
  Label,
  Popup,
  PopupType,
  useClientInfoService,
} from "@burneeble/ui-components";
import { FilterPopupProps } from "./FilterPopup.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faXmark } from "@fortawesome/free-solid-svg-icons";

const FilterPopup = (props: FilterPopupProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getButtonSize = () => {
    switch (screen) {
      case "sm":
        return "sm";
      default:
        return "default";
    }
  };

  return (
    <Popup
      logic={props.popupLogic}
      type={PopupType.Absolute}
      className={`tw-right-0 tw-top-[calc(100%+.5rem)]`}
    >
      <div
        className={`filter-popup tw-flex tw-w-full tw-flex-col tw-gap-[20px]`}
      >
        <div
          className={`
            header tw-flex tw-items-center tw-justify-between tw-border-b
            tw-border-solid tw-border-neutral tw-pb-[15px]
          `}
        >
          <Button
            variant="secondary-outline"
            size={getButtonSize()}
            onClick={() => {
              props.setActiveCategories([]);
            }}
          >
            <FontAwesomeIcon icon={faEraser} className="tw-mr-2" /> Remove All
            Filters
          </Button>
          <Button
            onClick={() => {
              props.popupLogic.closePopup();
            }}
            variant="secondary-outline"
            size={getButtonSize()}
            className="tw-aspect-square !tw-rounded-full"
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
        <div className={`categories tw-flex tw-flex-wrap tw-gap-[10px]`}>
          {props.categories.map((category, i) => {
            return (
              <Label
                key={i}
                text={category}
                onClick={() => {
                  if (props.activeCategories.includes(category)) {
                    props.setActiveCategories((prev) =>
                      prev.filter((c) => c !== category)
                    );
                  } else
                    props.setActiveCategories((prev) => [...prev, category]);
                }}
                variant={
                  props.activeCategories.includes(category)
                    ? "active"
                    : "disabled"
                }
                size={screen === "sm" ? "sm" : "default"}
              />
            );
          })}
        </div>
      </div>
    </Popup>
  );
};

export default FilterPopup;
