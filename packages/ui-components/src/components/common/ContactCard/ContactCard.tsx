"use client";

import React from "react";
import { ContactCardProps, ContactCardStyle } from "./ContactCard.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClientInfoService } from "@/services";
import { Button } from "@/components/ui";
const ContactCard = (props: ContactCardProps) => {
  //Hooks
  const { width } = useClientInfoService();
  const cardStyle = props.style ? props.style : ContactCardStyle.default;
  return (
    <>
      {/* FINAL COMPONENT */}
      {cardStyle === ContactCardStyle.default ? (
        <div
          style={{ borderColor: props.mainColor }}
          className={`
            contact-card tw-inline-flex tw-h-[116px] tw-w-[424px]
            tw-items-center tw-justify-center tw-gap-[26px] tw-rounded-lg
            tw-border-2 tw-bg-gradient-to-l tw-px-9 tw-py-[29px]
            secondary-gradient

            lg:tw-h-[431px] lg:tw-w-[335px]

            md:tw-h-[241px] md:tw-w-[538px] md:tw-flex-col
          `}
        >
          <div
            className={`
              contact-card-top-card tw-flex tw-items-center tw-justify-start
              tw-gap-[26px] tw-self-stretch

              lg:tw-inline-flex lg:tw-flex-col lg:tw-justify-center
            `}
          >
            <div
              className={`
                contact-card-image-wrapper tw-flex tw-h-[58px] tw-w-[58px]
                tw-items-center tw-justify-center

                lg:tw-h-[124px] lg:tw-w-[124px]

                md:tw-h-[98px] md:tw-w-[98px]
              `}
            >
              <div
                className={`
                  contact-card-image tw-flex tw-h-[58px] tw-w-[58px]
                  tw-items-center tw-justify-center tw-rounded-lg

                  lg:tw-h-[124px] lg:tw-w-[124px]

                  md:tw-h-[98px] md:tw-w-[98px]
                `}
                style={{ backgroundColor: props.mainColor }}
              >
                {typeof props.icon === "string" ? (
                  <img src={props.icon} alt={props.title} />
                ) : (
                  <FontAwesomeIcon
                    style={{
                      color: "white",
                      width: width < 768 ? "30px" : "50px",
                      height: width < 768 ? "30px" : "50px",
                    }}
                    icon={props.icon}
                  />
                )}
              </div>
            </div>
            {width >= 768 && (
              <div
                className={`
                  contact-card-info tw-flex tw-shrink tw-grow tw-basis-0
                  tw-flex-col tw-items-start tw-justify-center

                  lg:tw-h-[130px] lg:tw-items-center lg:tw-justify-center
                  lg:tw-self-stretch

                  md:max-lg:tw-shrink md:max-lg:tw-grow md:max-lg:tw-basis-0
                `}
              >
                <p
                  className={`
                    contact-card-title tw-self-stretch tw-text-start
                    tw-font-inter tw-text-2xl tw-font-black tw-leading-[35px]
                    tw-text-headings

                    lg:tw-text-center lg:tw-text-3xl lg:tw-leading-10
                  `}
                >
                  {props.title}
                </p>
                <p
                  className={`
                    contact-card-description tw-self-stretch tw-text-start
                    tw-font-inter tw-text-xl tw-font-normal tw-leading-[30px]
                    tw-text-body

                    lg:tw-text-center
                  `}
                >
                  {props.description}
                </p>
              </div>
            )}
          </div>

          <Button
            customColorString={props.mainColor}
            onClick={async (e) => {
              await props.onClick(e);
            }}
            className={`
              contact-card-button tw-inline-flex tw-h-[58px] tw-items-center
              tw-justify-center tw-gap-2.5 tw-self-stretch tw-rounded-lg
              tw-border tw-border-primary tw-bg-[#F28307] tw-px-[30px] tw-py-5

              max-md:tw-shrink max-md:tw-grow max-md:tw-basis-0
            `}
            size="lg"
          >
            {props.buttonText}
          </Button>
        </div>
      ) : (
        <div
          style={{ borderColor: props.mainColor }}
          onClick={async (e) => {
            await props.onClick(e);
          }}
          className={`
            contact-card tw-inline-flex tw-items-center tw-justify-center
            tw-gap-[26px] tw-rounded-lg tw-border-2 tw-bg-gradient-to-l tw-p-4
            secondary-gradient tw-cursor-pointer

            md:tw-flex-col
          `}
        >
          <div
            className={`
              contact-card-image-wrapper tw-flex tw-h-[65px] tw-w-[65px]
              tw-items-center tw-justify-center

              lg:tw-h-[124px] lg:tw-w-[124px]

              md:tw-h-[98px] md:tw-w-[98px]
            `}
          >
            <div
              className={`
                contact-card-image tw-flex tw-h-[65px] tw-w-[65px]
                tw-items-center tw-justify-center tw-rounded-lg

                lg:tw-h-[124px] lg:tw-w-[124px]

                md:tw-h-[98px] md:tw-w-[98px]
              `}
              style={{ backgroundColor: props.mainColor }}
            >
              {typeof props.icon === "string" ? (
                <img src={props.icon} alt={props.title} />
              ) : (
                <FontAwesomeIcon
                  style={{
                    color: "white",
                    width: width < 768 ? "30px" : "50px",
                    height: width < 768 ? "30px" : "50px",
                  }}
                  icon={props.icon}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;
