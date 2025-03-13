"use client";

import React from "react";
import { ContactCardProps, ContactCardStyle } from "./ContactCard.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClientInfoService } from "@/services";
import { Button } from "@/components/ui";
import Image from "next/image";
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
            contact-card tw-inline-flex tw-h-[116px] tw-w-full tw-items-center
            tw-justify-center tw-gap-[26px] tw-rounded-lg tw-border-2
            tw-bg-gradient-to-l tw-px-5 tw-py-[29px]
            secondary-gradient-to-custom

            2lg:tw-h-[431px] 2lg:tw-w-[335px]

            md:tw-h-[241px] md:tw-w-[538px] md:tw-flex-col
          `}
        >
          <div
            className={`
              contact-card-top-card tw-flex tw-items-center tw-justify-start
              tw-gap-[26px] tw-self-stretch

              2lg:tw-inline-flex 2lg:tw-flex-col 2lg:tw-justify-center
            `}
          >
            <div
              className={`
                contact-card-image-wrapper tw-flex tw-h-[58px] tw-w-[58px]
                tw-items-center tw-justify-center

                2lg:tw-h-[124px] 2lg:tw-w-[124px]

                md:tw-h-[98px] md:tw-w-[98px]
              `}
            >
              <div
                className={`
                  contact-card-image tw-flex tw-h-[58px] tw-w-[58px]
                  tw-items-center tw-justify-center tw-overflow-hidden
                  tw-rounded-lg

                  2lg:tw-h-[124px] 2lg:tw-w-[124px]

                  md:tw-h-[98px] md:tw-w-[98px]
                `}
                style={{ backgroundColor: props.mainColor }}
              >
                {typeof props.icon === "string" ? (
                  <Image
                    width={500}
                    height={500}
                    className="tw-h-full tw-w-full"
                    src={props.icon}
                    alt={
                      props.title
                        ? props.title
                        : props.icon
                            ?.split("/")
                            .pop()
                            ?.split(".")
                            .slice(0, -1)
                            .join(".") || "contact-card"
                    }
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{
                      color: "white",
                      width: width && width < 768 ? "30px" : "50px",
                      height: width && width < 768 ? "30px" : "50px",
                    }}
                    icon={props.icon}
                  />
                )}
              </div>
            </div>
            {width && width >= 768 && (
              <div
                className={`
                  contact-card-info tw-flex tw-shrink tw-grow tw-basis-0
                  tw-flex-col tw-items-start tw-justify-center

                  2lg:tw-h-[130px] 2lg:tw-items-center 2lg:tw-justify-center
                  2lg:tw-self-stretch

                  md:max-2lg:tw-shrink md:max-2lg:tw-grow md:max-2lg:tw-basis-0
                `}
              >
                <p
                  className={`
                    contact-card-title p-small tw-self-stretch tw-text-start
                    tw-font-black

                    2lg:tw-text-center
                  `}
                >
                  {props.title}
                </p>
                <p
                  className={`
                    contact-card-description p-smaller tw-self-stretch
                    tw-text-start

                    2lg:tw-text-center
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
            secondary-gradient-to-custom tw-cursor-pointer

            md:tw-flex-col
          `}
        >
          <div
            className={`
              contact-card-image-wrapper tw-flex tw-h-[58px] tw-w-[58px]
              tw-items-center tw-justify-center

              2lg:tw-h-[124px] 2lg:tw-w-[124px]

              md:tw-h-[98px] md:tw-w-[98px]
            `}
          >
            <div
              className={`
                contact-card-image tw-flex tw-h-[58px] tw-w-[58px]
                tw-items-center tw-justify-center tw-rounded-lg

                2lg:tw-h-[124px] 2lg:tw-w-[124px]

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
                    width: width && width < 768 ? "30px" : "50px",
                    height: width && width < 768 ? "30px" : "50px",
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
