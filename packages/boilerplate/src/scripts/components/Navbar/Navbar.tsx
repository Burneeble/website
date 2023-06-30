import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faTwitter,
  faInstagram,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import { HashLink as Link } from "react-router-hash-link";

export interface PageItem {
  To: string;
  Text: string;
}

export interface NavbarProps {
  Title?: string;
  Logo?: string;
  Pages: PageItem[];
  Socials: {
    Instagram?: string;
    Linkedin?: string;
    Twitter?: string;
    Opensea?: string;
    Discord?: string;
    Facebook?: string;
    Telegram?: string;
    Tiktok?: string;
  };
  StartTransparent?: boolean;
}

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth!,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Navbar = (props: NavbarProps) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [ani, setAni] = useState<boolean>(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(typeof props.StartTransparent !== "undefined" && true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const onLinkClick = () => {
    if (
      (size.width || 0) <=
      responsiveWidth /*|| window.scrollY >= 90 || popupOpen*/
    ) {
      if (popupOpen) {
        setAni(false);
        setTimeout(() => {
          setPopupOpen(false);
        }, 1000);
      } else {
        setAni(true);
        setPopupOpen(true);
      }
    }
  };
  const size = useWindowSize();
  const [lock, setLock] = useState<boolean>(false);
  const responsiveWidth: number = 1008;

  useEffect(() => {
    if (popupOpen) {
      setLock(true);
      console.log("ciao");
    } else {
      setLock(false);
    }
  }, [popupOpen]);

  useEffect(() => {
    if ((size.width || 0) > responsiveWidth) {
      setAni(false);
      setTimeout(() => {
        setPopupOpen(false);
      }, 1000);
    }
  }, [size.width]);

  return (
    <nav className="navbar-demo">
      <div className="wrapper logo-navbar">
        <img src="/build/images/logo/burneebleB.png" alt="Burneeble" />
      </div>
    </nav>

    // <nav className={colorChange ? "navbar" : "navbar transparent"}>
    //   <div className="navbar-content">
    //     <div className="nav-logo-wrapper position-absolute">
    //       {props.Logo && (
    //         <div>
    //           <Link to="/">
    //             <img src={props.Logo} alt="" className="nav-logo" />
    //           </Link>
    //         </div>
    //       )}
    //       {props.Title && (
    //         <h2 className="nav-title">
    //           <Link to="/company" onClick={onLinkClick}>
    //             {props.Title}
    //           </Link>
    //         </h2>
    //       )}
    //     </div>
    //     <div className="link-nav-row centered-Menu">
    //       <Link
    //         to={"/the-legend-of-furiax"}
    //         onClick={onLinkClick}
    //         className=" display-none brother-width"
    //       >
    //         THE LEGEND OF FURIAX
    //       </Link>
    //       <Link
    //         to={"/comicbook"}
    //         onClick={onLinkClick}
    //         className=" display-none brother-width"
    //       >
    //         COMIC BOOK
    //       </Link>
    //       <Link
    //         to={"/company"}
    //         onClick={onLinkClick}
    //         className=" display-none brother-width"
    //       >
    //         ZOPPEL UNIVERSE
    //       </Link>
    //     </div>

    //     <div className="link-nav-row right">
    //       <Link
    //         to={"/mintpage"}
    //         onClick={onLinkClick}
    //         className="mint-btn btn-frame"
    //       >
    //         MINT NFT
    //       </Link>
    //       <DropdownMenu
    //         btn_text=""
    //         btn_bg={false}
    //         btn_dark={false}
    //         btn_icon={<FontAwesomeIcon icon={faShareNodes} />}
    //         right={true}
    //         fullscreen={false}
    //         sections={[
    //           {
    //             text: "Twitter",
    //             link: "https://twitter.com/zoppel_u",
    //             icon: <FontAwesomeIcon icon={faTwitter} />,
    //           },
    //           {
    //             text: "Discord",
    //             link: "https://discord.gg/ZFUKfMw9",
    //             icon: <FontAwesomeIcon icon={faDiscord} />,
    //           },
    //           {
    //             text: "Telegram",
    //             link: "https://t.me/ZOPPELINT",
    //             icon: <FontAwesomeIcon icon={faTelegram} />,
    //           },
    //           {
    //             text: "Instagram",
    //             link: "https://www.instagram.com/zoppeluniverse/",
    //             icon: <FontAwesomeIcon icon={faInstagram} />,
    //           },
    //           {
    //             text: "Linkedin",
    //             link: "https://www.linkedin.com/company/zoppel-universe",
    //             icon: <FontAwesomeIcon icon={faLinkedin} />,
    //           },
    //           {
    //             text: "Medium",
    //             link: "https://zoppeluniverse.medium.com/",
    //             icon: <FontAwesomeIcon icon={faMedium} />,
    //           },
    //         ]}
    //       />
    //     </div>

    //     <div
    //       className={`navbar-expand ${ani ? "open " : ""}${
    //         (size.width || 0) <= responsiveWidth ? "visible" : ""
    //       }`}
    //       onClick={() => {
    //         onLinkClick();
    //       }}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </div>

    //     {/* {links} */}
    //   </div>
    //   <div
    //     className="popup-toolbar"
    //     style={{
    //       display: popupOpen ? "block" : "none",
    //       opacity: popupOpen ? "1" : "0",
    //       pointerEvents: popupOpen ? "all" : "none",
    //     }}
    //   ></div>
    //   {popupOpen && (
    //     <div
    //       className="navbar-popup"
    //       style={{
    //         animationName: ani ? "translatePosition" : "translateReposition",
    //       }}
    //     >
    //       <NavPopup
    //         onLinkClick={() => onLinkClick}
    //         sections={[
    //           {
    //             name: "The Legend of Furiax",
    //             link: "/the-legend-of-furiax",
    //             bgColor: "#ee9831cc",
    //             hoverDecoration:
    //               "url(/build/images/exagon/esagoni_gialli-ai.svg",
    //             hoverImage: "/build/images/gameGraphics/ARCO01.png",
    //             hoverSecondImage: "/build/images/gameGraphics/ARCO01.png",
    //             firstImgType: 1,
    //             secondImgType: 2,
    //           },
    //           {
    //             name: "Comic Book",
    //             link: "/comicbook",
    //             bgColor: "#02eaeccc",
    //             hoverDecoration:
    //               "url(/build/images/exagon/esagoni_azzurri-ai.svg)",
    //             hoverImage: "/build/images/comicBook/comicCover.jpg",
    //             firstImgType: 3,
    //           },
    //           {
    //             name: "Zoppel Universe",
    //             link: "/company",
    //             bgColor: "#5c039ccc",
    //             hoverDecoration:
    //               "url(/build/images/exagon/esagoni_viola-ai.svg)",
    //             hoverImage: "/build/images/zoppelUniverseLogo.png",
    //             firstImgType: 4,
    //           },
    //           {
    //             name: "Mint Nft",
    //             link: "/mintpage",
    //             bgColor: "#ce1314cc",
    //             hoverDecoration:
    //               "url(/build/images/exagon/esagoni_rosso-ai.svg)",
    //             hoverImage: "",
    //             firstImgType: 5,
    //           },
    //         ]}
    //         socialsBgColor="linear-gradient(45deg, #e28726, #c93d04)"
    //         socialRows={[
    //           {
    //             socials: [
    //               {
    //                 nameSocial: "twitter",
    //                 faIcon: (
    //                   <>
    //                     {" "}
    //                     <FontAwesomeIcon
    //                       className={` fa twitter-social`}
    //                       icon={faTwitter}
    //                     />
    //                   </>
    //                 ),
    //                 socialLink: "https://twitter.com/zoppel_u",
    //               },
    //               {
    //                 nameSocial: "telegram",
    //                 faIcon: (
    //                   <>
    //                     {" "}
    //                     <FontAwesomeIcon
    //                       className={` fa telegram-social`}
    //                       icon={faTelegram}
    //                     />
    //                   </>
    //                 ),
    //                 socialLink: "https://t.me/ZOPPELINT",
    //               },
    //               {
    //                 nameSocial: "discord",
    //                 faIcon: (
    //                   <>
    //                     {" "}
    //                     <FontAwesomeIcon
    //                       className={` fa discord-social`}
    //                       icon={faDiscord}
    //                     />
    //                   </>
    //                 ),
    //                 socialLink: "https://discord.gg/ZFUKfMw9",
    //               },
    //             ],
    //           },
    //           {
    //             socials: [
    //               {
    //                 nameSocial: "instagram",
    //                 faIcon: (
    //                   <>
    //                     <FontAwesomeIcon
    //                       className={` fa instagram-social`}
    //                       icon={faInstagram}
    //                     />
    //                   </>
    //                 ),
    //                 socialLink: "https://www.instagram.com/zoppeluniverse/",
    //               },
    //               {
    //                 nameSocial: "linkedin",
    //                 faIcon: (
    //                   <>
    //                     <FontAwesomeIcon
    //                       className="fa linkedin-social"
    //                       icon={faLinkedin}
    //                     />
    //                   </>
    //                 ),
    //                 socialLink:
    //                   "https://www.linkedin.com/company/zoppel-universe",
    //               },
    //               {
    //                 nameSocial: "medium",
    //                 faIcon: (
    //                   <>
    //                     <FontAwesomeIcon
    //                       className={` fa medium-social`}
    //                       icon={faMedium}
    //                     />
    //                   </>
    //                 ),
    //                 socialLink: "https://zoppeluniverse.medium.com/",
    //               },
    //             ],
    //           },
    //         ]}
    //       />
    //     </div>
    //   )}
    // </nav>
  );
};

export default Navbar;
