import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import SocialsLink from "../Footer/SocialsLink";

export interface FooterProps {
  Title?: string;
  Logo?: string;
  children?: any;
  Copyright?: string;
  anchorClass: string;
  lineColor: string;
  Links: { To: string; Text: string }[];
  bgColor?: string;
}

const Footer = (props: FooterProps) => {
  return (
    // "radial-gradient(97.71% 97.71% at 50% 0%, rgb(83 12 208) 43.84%, #260068 54.38%, #05010C 100%)"
    <>
      <footer>
        <div className="first top-line"></div>
        <div className="second top-line"></div>
        <div
          className="la-footer"
          style={{
            background: `${
              props.bgColor || "linear-gradient(135deg, #FF5C01, #FCFF03)"
            }`,
          }}
        >
          <div className="footer-top">
            <div className="footer-logo-wrapper">
              <img
                src={`/build/images/logo/${props.Logo}`}
                // src="/build/images/secondLogo.png"
                alt="The Legend Of Furiax"
              />
            </div>
            {props.children}
          </div>
          <div className="footer-bottom">
            <SocialsLink
              gradientBackground={"linear-gradient(135deg, #000 10%, #2B2B2B)"}
              firstRowSocials={[
                {
                  nameSocial: "twitter",
                  faIcon: (
                    <>
                      {" "}
                      <FontAwesomeIcon
                        className={` fa twitter-social`}
                        icon={faTwitter}
                      />
                    </>
                  ),
                  socialLink: "https://twitter.com/zoppel_u",
                },
                {
                  nameSocial: "telegram",
                  faIcon: (
                    <>
                      {" "}
                      <FontAwesomeIcon
                        className={` fa telegram-social`}
                        icon={faTelegram}
                      />
                    </>
                  ),
                  socialLink: "https://t.me/ZOPPELINT",
                },
                {
                  nameSocial: "discord",
                  faIcon: (
                    <>
                      {" "}
                      <FontAwesomeIcon
                        className={` fa discord-social`}
                        icon={faDiscord}
                      />
                    </>
                  ),
                  socialLink: "https://discord.gg/ZFUKfMw9",
                },
              ]}
              secondRowSocials={[
                {
                  nameSocial: "instagram",
                  faIcon: (
                    <>
                      <FontAwesomeIcon
                        className={` fa instagram-social`}
                        icon={faInstagram}
                      />
                    </>
                  ),
                  socialLink: "https://www.instagram.com/zoppeluniverse/",
                },
                {
                  nameSocial: "linkedin",
                  faIcon: (
                    <>
                      <FontAwesomeIcon
                        className="fa linkedin-social"
                        icon={faLinkedin}
                      />
                    </>
                  ),
                  socialLink:
                    "https://www.linkedin.com/company/zoppel-universe",
                },
                {
                  nameSocial: "medium",
                  faIcon: (
                    <>
                      <FontAwesomeIcon
                        className={` fa medium-social`}
                        icon={faMedium}
                      />
                    </>
                  ),
                  socialLink: "https://zoppeluniverse.medium.com/",
                },
              ]}
            ></SocialsLink>
            <p className="footer-copy poppins-regular">
              {props.Copyright}
              {/* The Legend of Furiax © 2023 */}
            </p>
            <div
              className="footer-hr"
              style={{
                background: `linear-gradient(90deg, transparent, ${props.lineColor}, transparent)`,
              }}
            ></div>
            <div className="footer-end">
              <div className="footer-rights poppins-regular">
                <a href="#" target={"_blank"} className="footer-doc terms">
                  Terms & Conditions
                </a>
                <p className="reservedRights">
                  {" "}
                  - All rights reserved by BURNEEBLE © 2023 -{" "}
                </p>
                <a href="#" target={"_blank"} className="footer-doc privacy">
                  Privacy Policy
                </a>
              </div>
              {/* TODO add developed by Burneeble  */}
              {/* <div className="footer-developer poppins-regular">
              <p>developed by</p>
              <a target="_blank" href="https://minteeble.com/">
                <img
                  src="/build/images/mintLogo.png"
                  alt=""
                  className="footer-mintee"
                />
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
