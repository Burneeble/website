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
      {width >= 1000 && (
        <div className="responsive-desktop tw-w-[309px] tw-h-[441px] tw-px-[22px] tw-py-[29px] tw-bg-gradient-to-l tw-from-black tw-to-[#2b2b2b] tw-rounded-md tw-border-2 tw-border-[#f28307] tw-flex-col tw-justify-between tw-items-center tw-inline-flex">
          <div className="custom-logos-icon tw-w-[124px] tw-h-[124px] tw-bg-[#f28307] tw-rounded-[10.69px] tw-justify-center tw-items-center tw-gap-[32.90px] tw-inline-flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="tw-text-white tw-text-7xl"
            />
          </div>
          <div className="Info tw-self-stretch tw-h-[130px] tw-flex-col tw-justify-center tw-items-center tw-flex">
            <div className="email tw-self-stretch tw-text-center tw-text-white tw-text-3xl tw-font-black tw-font-['Inter'] tw-leading-10">
              Email
            </div>
            <div className="contact tw-self-stretch tw-text-center tw-text-[#acacac] tw-text-xl tw-font-normal tw-font-['Inter'] tw-leading-[30px]">
              You can contact us by email, we will reply you as soon as
              possible.
            </div>
          </div>
          <div className="button tw-h-[58px] tw-px-[30px] tw-py-5 tw-bg-[#f28307] tw-rounded-lg tw-border tw-border-[#f28307] tw-justify-center tw-items-center tw-gap-2.5 tw-inline-flex">
            <div className="tw-start-building tw-text-white tw-text-2xl tw-font-normal tw-font-['Bowlby One'] tw-cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      )}
      {width < 1000 && width >= 768 && (
        <div className="responsive-tablet tw-h-[253px] tw-px-9 tw-py-[29px] tw-bg-gradient-to-l tw-from-black tw-to-[#2b2b2b] tw-rounded-md tw-border-2 tw-border-[#f28307] tw-flex-col tw-justify-center tw-items-center tw-gap-[26px] tw-inline-flex">
          <div className="tw-justify-start tw-items-center tw-gap-[26px] tw-inline-flex">
            <div className="custom-logo-icon tw-w-[98px] tw-h-[98px] tw-bg-[#f28307] tw-rounded-lg tw-justify-center tw-items-center tw-gap-[26px] tw-flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="tw-text-white tw-text-6xl"
              />
            </div>
            <div className="tw-w-[338px] tw-flex-col tw-justify-center tw-items-start tw-gap-2.5 tw-inline-flex">
              <div className="email tw-self-stretch tw-text-white tw-text-2xl tw-font-black tw-font-['Inter'] tw-leading-[35px]">
                Email
              </div>
              <div className="contact tw-self-stretch tw-text-[#acacac] tw-text-xl tw-font-normal tw-font-['Inter'] tw-leading-loose">
                You can contact us by email, we will reply you as soon as
                possible.
              </div>
            </div>
          </div>
          <div className="tw-self-stretch tw-h-[60px] tw-py-1.5 tw-bg-[#f28307] tw-rounded-lg tw-justify-center tw-items-center tw-gap-2.5 tw-inline-flex">
            <div className="contact tw-grow tw-shrink tw-basis-0 tw-text-center tw-text-white tw-text-xl tw-font-normal tw-font-['Bowlby One'] tw-cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      )}
      {width < 768 && (
        <div className="responsive-mobile tw-w-[424px] tw-h-[116px] tw-px-9 tw-py-[29px] tw-bg-gradient-to-l tw-from-black tw-to-[#2b2b2b] tw-rounded-md tw-border-2 tw-border-[#f28307] tw-justify-center tw-items-center tw-gap-[26px] tw-inline-flex">
          <div className="custom-logos-icon tw-w-[58px] tw-h-[58px] tw-bg-[#f28307] tw-rounded-[5px] tw-justify-center tw-items-center tw-gap-[15.39px] tw-flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="tw-text-white tw-text-3xl"
            />
          </div>
          <div className="button tw-grow tw-shrink tw-basis-0 tw-h-[58px] tw-px-[30px] tw-py-5 tw-bg-[#f28307] tw-rounded-lg tw-border tw-border-[#f28307] tw-justify-center tw-items-center tw-gap-2.5 tw-flex">
            <div className="start-building tw-text-white tw-text-lg tw-font-normal tw-font-['Bowlby One'] tw-cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;
