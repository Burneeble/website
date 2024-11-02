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
      {/* DESKTOP */}
      {/* <div className="ResponsiveDesktop w-[335px] h-[431px] px-9 py-[29px] bg-gradient-to-l from-black to-secondary-darker rounded-lg border-2 border-border-primary flex-col justify-center items-center gap-[26px] inline-flex">
        <div className="Frame1201 self-stretch h-[280px] flex-col justify-center items-center gap-[26px] flex">
          <div className="Frame1202 self-stretch justify-center items-center inline-flex">
            <div className="CustomLogosIcon w-[124px] h-[124px] bg-[#f28307] rounded-lg justify-center items-center flex" />
          </div>
          <div className="Info self-stretch h-[130px] flex-col justify-center items-center flex">
            <div className="Title self-stretch text-center text-text-headings text-3xl font-black font-['Inter'] leading-10">
              Email
            </div>
            <div className="Desc self-stretch text-center text-text-body text-xl font-normal font-['Inter'] leading-[30px]">
              You can contact us by email, we will reply you as soon as
              possible.
            </div>
          </div>
        </div>
        <div className="Button self-stretch h-[58px] px-[30px] py-5 bg-[#f28307] rounded-lg border border-border-primary justify-center items-center gap-2.5 inline-flex">
          <div className="StartBuilding text-bg-button-text text-2xl font-normal font-['Bowlby One']">
            Contact Us
          </div>
        </div>
      </div> */}
      {/* TABLET */}
      {/* <div className="ResponsiveTablet w-[538px] h-[241px] px-9 py-[29px] bg-gradient-to-l from-black to-secondary-darker rounded-lg border-2 border-border-primary flex-col justify-center items-center gap-[26px] inline-flex">
        <div className="Frame46 self-stretch justify-center items-center gap-[26px] inline-flex">
          <div className="CustomLogosIcon w-[98px] h-[98px] bg-[#f28307] rounded-lg justify-center items-center flex" />
          <div className="Info grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="Title self-stretch text-text-headings text-2xl font-black font-['Inter'] leading-[35px]">
              Email
            </div>
            <div className="Desc self-stretch text-text-body text-xl font-normal font-['Inter'] leading-loose">
              You can contact us by email, we will reply you as soon as
              possible.
            </div>
          </div>
        </div>
        <div className="Frame43 self-stretch h-[58px] px-[30px] py-5 bg-[#f28307] rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="Contact grow shrink basis-0 text-center text-text-headings text-xl font-normal font-['Bowlby One']">
            Contact
          </div>
        </div>
      </div> */}
      {/* MOBILE */}
      {/* <div className="ResponsiveMobile w-[424px] h-[116px] px-9 py-[29px] bg-gradient-to-l from-black to-secondary-darker rounded-lg border-2 border-border-primary justify-center items-center gap-[26px] inline-flex">
        <div className="Frame1203 h-[58px] justify-start items-center gap-2.5 flex">
          <div className="CustomLogosIcon grow shrink basis-0 h-[58px] bg-[#f28307] rounded-[5px] justify-center items-center flex" />
        </div>
        <div className="Button grow shrink basis-0 h-[58px] px-[30px] py-5 bg-[#f28307] rounded-lg border border-border-primary justify-center items-center gap-2.5 flex">
          <div className="StartBuilding text-bg-button-text text-lg font-normal font-['Bowlby One']">
            Contact
          </div>
        </div>
      </div> */}

      {/* FINAL COMPONENT */}
      <div className="contact-card tw-w-[424px] tw-h-[116px] md:tw-w-[538px] md:tw-h-[241px] lg:tw-w-[335px] lg:tw-h-[431px] tw-px-9 tw-py-[29px] tw-bg-gradient-to-l tw-from-black tw-to-secondary-darker tw-rounded-lg tw-border-2 tw-border-border-primary md:tw-flex-col  tw-justify-center tw-items-center tw-gap-[26px] tw-inline-flex">
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
