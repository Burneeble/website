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

  return (
    <Popup
      logic={props.popupLogic}
      type={PopupType.Absolute}
      className={`tw-top-[calc(100%+.5rem)] tw-right-0`}
    >
      <div
        className={`filter-popup tw-w-full tw-flex tw-flex-col tw-gap-[20px]`}
      >
        <div
          className={`
            header tw-flex tw-items-center tw-justify-between tw-pb-[15px]
            tw-border-b-[1px] tw-border-solid tw-border-neutral
          `}
        >
          <Button
            variant="secondary"
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
            variant="secondary"
            size="icon"
            className="!tw-rounded-full"
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
        <div className={`categories tw-flex tw-gap-[10px] tw-flex-wrap`}>
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
