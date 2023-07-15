export interface PortfolioPopupProps {
  title: string;
  description: string;
  srcImg: string;
  link: string;
  tags: string[];
  closePopup: ()=>void;
  };
  




const PortfolioPopup = (props: PortfolioPopupProps) => {
  
  return (
    <div className="popup-wrapper">
      <div className="popup-background" onClick={props.closePopup}></div>
      <div className="popup-container">
      <div className="image-wrapper">
      <img src={props.srcImg} alt="Immagine" className="image"></img>
      </div>
      <div className="logo-row">
        <hr className="row first" />
      <div className="logo-wrapper">
        
        {/* <div className="line" /> */}
        
        <img src="/build/images/logo/burneebleB.png" alt="Logo Burneeble" className="logo" />
        
        {/* <div className="line" /> */}

      </div>
      <hr className="row second"/>
      </div>
      <div className="popup-content">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="tags-container">
          {props.tags.map((item)=>{
            return(
            <>
            <div className="tag">
              {item}
            </div>
            </>
            )            
          })}
        </div>
        <div className="description-container gray-description">
          <p>
            {props.description}
          </p>
        </div>
           
        </div>
        
          <a href={props.link} className="see-website burn-button">See website</a>

      </div>

    </div>
    

      );
};

export default PortfolioPopup;
