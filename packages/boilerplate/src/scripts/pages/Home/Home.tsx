import { useLocation, useNavigate } from "react-router";
import { HomeProps } from "./Home.types";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Popup, usePopup } from "@minteeble/ui-components";
import PortfolioImages from "../../components/PortfolioImages";

const Home = (props: HomeProps) => {
  const handleForm = usePopup();
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <section className="homepage " id="homepage">
        <div
          className="flex-row justify-content-space-between align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className={`text-content  flex-column align-items-start text-align-start ${
              width <= 950
                ? "website-left-padding website-right-padding"
                : "website-left-padding"
            }`}
          >
            <div className="developers-company montserrat-regular align-items-center flex-row justify-content-center">
              <img
                className="web3-icon-image"
                src="/build/images/homepage/web3Icon.png"
                alt="WEB3"
              />
              WEB3 developers
            </div>
            <h1 className="white-title">
              Build and grow your project with
              <div className="gradient-burneeble text-transform-uppercase">
                <h1 className="burneeble-text">BURNEEBLE</h1>
              </div>
            </h1>
            <p className="gray-description">
              Build your own awesome Web3 applications and start exploring this
              new world. What are you waiting for?
            </p>
            <button
              onClick={() => {
                handleForm.openPopup();
              }}
              className="white-button text-transform-uppercase montserrat-semibold"
            >
              Talk To Us
            </button>
          </div>

          {/* TODO add slider portfolio project */}
          {width > 950 && (
            <div className="linear-gradient-background">
              <>
                <PortfolioImages
                  firstColumn={[
                    {
                      src: "/build/images/portfolio/AlienClubsDapp.webp",
                      link: "",
                      figureCaption: "Alien Clubs NFT Website",
                    },

                    {
                      src: "/build/images/portfolio/SkullMetacomm.png",
                      link: "",
                      figureCaption: "Skull N Bananas Form with Captcha",
                    },
                    {
                      src: "/build/images/portfolio/BoredApe.webp",
                      link: "",
                      figureCaption: "Bored Ape Referral NFT Website",
                    },
                    {
                      src: "/build/images/portfolio/SkullNBananas.webp",
                      link: "",
                      figureCaption: "Skull N Bananas NFT Website",
                    },
                    {
                      src: "/build/images/portfolio/ZoppelUniverseLanding.webp",
                      link: "",
                      figureCaption: "Zoppel Universe Landing Page",
                    },
                  ]}
                  secondColumn={[
                    {
                      src: "/build/images/portfolio/Vandals.png",
                      link: "",
                      figureCaption: "Vandals Union Minting Dapp",
                    },
                    {
                      src: "/build/images/portfolio/Hourglass.png",
                      link: "",
                      figureCaption: "Hourglass Minting Dapp",
                    },
                    {
                      src: "/build/images/portfolio/Zoppel-Universe.png",
                      link: "",
                      figureCaption: "Zoppel Universe NFT Website",
                    },
                    {
                      src: "/build/images/portfolio/Benjis.webp",
                      link: "",
                      figureCaption: "Benjis NFT Website",
                    },
                    {
                      src: "/build/images/portfolio/FighterPunks.webp",
                      link: "",
                      figureCaption: "Fighter Punks NFT Website",
                    },
                    {
                      src: "/build/images/portfolio/Kaijocats.webp",
                      link: "",
                      figureCaption: "Kaijocats Minting Dapp",
                    },
                  ]}
                ></PortfolioImages>
              </>
              <img
                className="home-flames"
                src="/build/images/assets/flameShadow.png"
                alt="Flames"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
