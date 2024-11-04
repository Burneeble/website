"use client";

import React from "react";
import { ContactCardProps } from "./ContactCard.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClientInfoService } from "@/services";
import { Button } from "@/components/ui";
const ContactCard = (props: ContactCardProps) => {
  //Hooks
  const { width } = useClientInfoService();

  return (
    <>
      {/* FINAL COMPONENT */}
      <div
        style={{ borderColor: props.mainColor }}
        className={`contact-card tw-w-[424px] tw-h-[116px] md:tw-w-[538px] md:tw-h-[241px] lg:tw-w-[335px] lg:tw-h-[431px] tw-px-9 tw-py-[29px] tw-bg-gradient-to-l secondary-gradient tw-rounded-lg tw-border-2 md:tw-flex-col  tw-justify-center tw-items-center tw-gap-[26px] tw-inline-flex`}
      >
        <div className="contact-card-top-card tw-self-stretch tw-justify-start lg:tw-justify-center tw-items-center lg:tw-flex-col tw-gap-[26px] tw-flex lg:tw-inline-flex">
          <div className="contact-card-image-wrapper  tw-w-[58px] tw-h-[58px] md:tw-h-[98px] md:tw-w-[98px] lg:tw-h-[124px] lg:tw-w-[124px] tw-justify-center tw-items-center tw-flex">
            <div
              className="contact-card-image tw-w-[58px] tw-h-[58px] md:tw-w-[98px] md:tw-h-[98px] lg:tw-w-[124px] lg:tw-h-[124px]  tw-rounded-lg tw-justify-center tw-items-center tw-flex"
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
            <div className="contact-card-info tw-grow tw-shrink tw-basis-0  md:max-lg:tw-grow md:max-lg:tw-shrink md:max-lg:tw-basis-0 lg:tw-self-stretch lg:tw-h-[130px] tw-flex-col tw-justify-center lg:tw-justify-center tw-items-start lg:tw-items-center tw-flex">
              <p className="contact-card-title tw-self-stretch tw-text-start lg:tw-text-center tw-text-headings tw-text-2xl lg:tw-text-3xl tw-font-black tw-font-inter tw-leading-[35px] lg:tw-leading-10">
                {props.title}
              </p>
              <p className="contact-card-description tw-self-stretch tw-text-start lg:tw-text-center tw-text-body tw-text-xl tw-font-normal tw-font-inter  tw-leading-[30px]">
                {props.description}
              </p>
            </div>
          )}
        </div>

        <Button
          customColorString={props.mainColor}
          className="contact-card-button max-md:tw-grow max-md:tw-shrink max-md:tw-basis-0 tw-self-stretch tw-h-[58px] tw-px-[30px] tw-py-5 tw-rounded-lg tw-border tw-border-primary tw-justify-center tw-items-center tw-gap-2.5 tw-inline-flex tw-bg-[#F28307]"
          size="lg"
        >
          {props.buttonText}
        </Button>
      </div>
    </>
  );
};

export default ContactCard;
