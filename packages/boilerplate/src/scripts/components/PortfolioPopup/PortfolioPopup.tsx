export interface PortfolioPopupProps {
  description: string;
  srcImg: string;
  link: string;
  closePopup: ()=>void;
  };
  

// Hook


const PortfolioPopup = (props: PortfolioPopupProps) => {
  
  return (
    <div className="popup-wrapper">
      <div className="popup-background" onClick={props.closePopup}></div>
      <div className="popup-container">
      <div className="image-wrapper">
      <img src={props.srcImg} alt="Immagine" className="image"></img>
      </div>
      <div className="logo-wrapper">
        <img src="/build/images/logo/burneebleB.png" alt="Logo Burneeble" className="logo" />
      </div>
      <div className="description-container gray-description">
        <p>
          {props.description}
        </p>
      </div>
        <a href={props.link} className="see-more burn-button">See more</a> 
      </div>
    </div>
    

      );
};

export default PortfolioPopup;
