import React from "react";
import { ContactCardProps } from "./ContactCard.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useClientInfoService } from "@/services";

const ContactCard = (props: ContactCardProps) => {
  //Hooks
  const { width } = useClientInfoService();

  return (
    <>
      <div className="contact-card tw-w-[424px] tw-h-[116px] md:tw-w-[538px] md:tw-h-[241px] lg:tw-w-[335px] lg:tw-h-[431px] tw-px-9 tw-py-[29px] tw-bg-gradient-to-l tw-from-black tw-to-secondary-darker tw-rounded-md tw-border-2 tw-border-border-primary md:tw-flex-col  tw-justify-center tw-items-center tw-gap-[26px] tw-inline-flex">
        <div className="contact-card-top-card tw-self-stretch tw-justify-start lg:tw-justify-center tw-items-center lg:tw-flex-col tw-gap-[26px] tw-flex lg:tw-inline-flex">
          <div className="contact-card-image-wrapper  tw-w-[58px] tw-h-[58px] md:tw-h-[98px] md:tw-w-[98px] lg:tw-h-[124px] lg:tw-w-[124px] tw-justify-center tw-items-center tw-flex">
            <div className="contact-card-image tw-w-[58px] tw-h-[58px] md:tw-w-[98px] md:tw-h-[98px] lg:tw-w-[124px] lg:tw-h-[124px] tw-bg-[#f28307] tw-rounded-lg tw-justify-center tw-items-center tw-flex">
              <FontAwesomeIcon style={{ color: "white" }} icon={faEnvelope} />
            </div>
          </div>
          {width >= 768 && (
            <div className="contact-card-info tw-grow tw-shrink tw-basis-0  md:max-lg:tw-grow md:max-lg:tw-shrink md:max-lg:tw-basis-0 lg:tw-self-stretch lg:tw-h-[130px] tw-flex-col tw-justify-center lg:tw-justify-center tw-items-start lg:tw-items-center tw-flex">
              <div className="contact-card-title tw-self-stretch tw-text-start lg:tw-text-center tw-text-text-headings tw-text-2xl lg:tw-text-3xl tw-font-black tw-font-inter tw-leading-[35px] lg:tw-leading-10">
                Email
              </div>
              <div className="contact-card-description tw-self-stretch tw-text-start lg:tw-text-center tw-text-text-body tw-text-xl tw-font-normal tw-font-inter  tw-leading-[30px]">
                You can contact us by email, we will reply you as soon as
                possible.
              </div>
            </div>
          )}
        </div>
        <div className="contact-card-button max-md:tw-grow max-md:tw-shrink max-md:tw-basis-0 tw-self-stretch tw-h-[58px] tw-px-[30px] tw-py-5 tw-bg-[#f28307] tw-rounded-lg tw-border tw-border-border-primary tw-justify-center tw-items-center tw-gap-2.5 tw-inline-flex">
          <div className="contact-card-text tw-text-bg-button-text tw-text-lg lg:tw-text-2xl tw-font-normal tw-font-bowlby-one">
            Contact Us
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
