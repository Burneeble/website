"use client";

import { SocialShareProps } from "./SocialShare.types";
import {
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  XIcon,
} from "react-share";

const SocialShare = (props: SocialShareProps) => {
  return (
    <div className="social-share tw-flex tw-gap-[.5rem]">
      <FacebookShareButton
        url={props.url}
        title={props.title}
        hashtag={props.title}
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={props.url} title={props.title}>
        <XIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={props.url} title={props.title}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={props.url} title={props.title}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      <TelegramShareButton url={props.url} title={props.title}>
        <TelegramIcon size={40} round />
      </TelegramShareButton>

      <EmailShareButton url={props.url} body={props.title}>
        <EmailIcon size={40} round />
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;
