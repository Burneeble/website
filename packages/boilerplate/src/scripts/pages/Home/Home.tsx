import { useLocation, useNavigate } from "react-router";
import { HomeProps } from "./Home.types";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Popup, usePopup } from "@minteeble/ui-components";
import PortfolioImages from "../../components/PortfolioImages";
import PortfolioPopup from "../../components/PortfolioPopup";

const Home = (props: HomeProps) => {
  const handleForm = usePopup();
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const [isPortfolioPopupOpen, setIsPortfolioPopupOpen] = useState<boolean>(false);

  const openPopup=()=>{
    setIsPortfolioPopupOpen(true);
  }

  const closePopup=()=>{
    setIsPortfolioPopupOpen(false);
  }

  return (
    <>
      <section className="homepage " id="homepage">
        {isPortfolioPopupOpen && (
        <PortfolioPopup 
          closePopup={closePopup} 
          title="Alien Clubs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et diam risus. Nam at augue odio. Fusce in gravida elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sit amet ex ac mauris consequat porta in sit amet diam. Proin diam nulla, maximus at justo in, gravida pellentesque nulla. Nulla molestie vitae ipsum vel aliquam. Praesent convallis quis quam quis semper. Integer sodales neque quam. Maecenas faucibus tristique turpis. Phasellus rhoncus dolor velit, sed interdum ante facilisis id. Nulla convallis quis diam vel condimentum." 
          srcImg="/build/images/portfolio/ZoppelUniverseLanding.webp" 
          link=""  
          tags={["#Mintin Dapps", "#Web3 Website"]}
          />
          )}
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
            <div className="developers-company montserrat-regular align-items-center flex-row justify-content-center burn-button">
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
                      
                      figureCaption: "Alien Clubs NFT Website",
                      onImageClick: openPopup,
                    },

                    {
                      src: "/build/images/portfolio/SkullMetacomm.png",
                      
                      figureCaption: "Skull N Bananas Form with Captcha",
                      onImageClick: openPopup,
                    
                    },
                    {
                      src: "/build/images/portfolio/BoredApe.webp",
                      
                      figureCaption: "Bored Ape Referral NFT Website",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/SkullNBananas.webp",
                      
                      figureCaption: "Skull N Bananas NFT Website",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/ZoppelUniverseLanding.webp",
                      
                      figureCaption: "Zoppel Universe Landing Page",
                      onImageClick: openPopup,
                    },
                  ]}
                  secondColumn={[
                    {
                      src: "/build/images/portfolio/Vandals.png",
                      
                      figureCaption: "Vandals Union Minting Dapp",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/Hourglass.png",
                      
                      figureCaption: "Hourglass Minting Dapp",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/Zoppel-Universe.png",
                      
                      figureCaption: "Zoppel Universe NFT Website",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/Benjis.webp",
                      
                      figureCaption: "Benjis NFT Website",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/FighterPunks.webp",
                      
                      figureCaption: "Fighter Punks NFT Website",
                      onImageClick: openPopup,
                    },
                    {
                      src: "/build/images/portfolio/Kaijocats.webp",
                      
                      figureCaption: "Kaijocats Minting Dapp",
                      onImageClick: openPopup,
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
