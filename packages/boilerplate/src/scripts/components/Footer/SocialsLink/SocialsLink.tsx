import React from "react";

export interface SocialItem {
  nameSocial: string; //(lowercase) class to use in css
  faIcon: any; //faSocial icon={faSocial}
  socialLink: string; //social link
}

export interface SocialsLinkProps {
  gradientBackground: string; //background social container
  firstRowSocials: SocialItem[];
  secondRowSocials: SocialItem[];
}

const SocialsLink = (props: SocialsLinkProps) => {
  return (
    <>
      <div className="flex-socials">
        <div className="wrapperFlex">
          {" "}
          {props.firstRowSocials.map((item) => {
            return (
              <>
                <li>
                  <a
                    target="_blank"
                    href={item.socialLink}
                    style={
                      {
                        "--social-linear-gradient": `${props.gradientBackground}`,
                      } as React.CSSProperties
                    }
                  >
                    {item.faIcon}
                  </a>
                </li>
              </>
            );
          })}
        </div>
        <div className="wrapperFlex">
          {props.secondRowSocials.map((item) => {
            return (
              <>
                <li>
                  <a
                    target="_blank"
                    href={item.socialLink}
                    style={
                      {
                        "--social-linear-gradient": `${props.gradientBackground}`,
                      } as React.CSSProperties
                    }
                  >
                    {item.faIcon}
                  </a>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialsLink;
