export interface PortfolioImagesProps {
  firstColumn: InfoImages[];
  secondColumn: InfoImages[];
}
export interface InfoImages {
  //link: string;
  src: string;
  figureCaption: string;
  onImageClick: () => void;
}

const PortfolioImages = (props: PortfolioImagesProps) => {
  return (
    <>
      <div className="container-no_animation">
        <div className="gallery ">
          <div className="gallery__column animate" style={{ left: "0" }}>
            {props.firstColumn.map((item) => {
              return (
                <a
                  onClick={item.onImageClick}
                  target="_blank"
                  className="gallery__link"
                >
                  <figure className="gallery__thumb">
                    <img
                      src={item.src}
                      alt={item.figureCaption}
                      className="gallery__image"
                    />
                    <figcaption className="gallery__caption">
                      {item.figureCaption}
                    </figcaption>
                  </figure>
                </a>
              );
            })}
            {props.firstColumn.map((item) => {
              return (
                <a
                  onClick={item.onImageClick}
                  target="_blank"
                  className="gallery__link"
                >
                  <figure className="gallery__thumb">
                    <img
                      src={item.src}
                      alt={item.figureCaption}
                      className="gallery__image"
                    />
                    <figcaption className="gallery__caption">
                      {item.figureCaption}
                    </figcaption>
                  </figure>
                </a>
              );
            })}
            {/* <a
              // href="https://unsplash.com/@jeka_fe"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                  alt="Portrait by Jessica Felicio"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Jessica Felicio
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@oladimeg"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/AHBvAIVqk64/300x500"
                  alt="Portrait by Oladimeji Odunsi"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Oladimeji Odunsi
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@a2eorigins"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                  alt="Portrait by Alex Perez"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Alex Perez
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@dimadallacqua"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                  alt="Portrait by Dima DallAcqua"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Dima DallAcqua
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@von_co"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                  alt="Portrait by Ivana Cajina"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Ivana Cajina
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@samburriss"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/tV_1sC603zA/300x500"
                  alt="Portrait by Sam Burriss"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Sam Burriss
                </figcaption>
              </figure>
            </a> */}
          </div>
          <div
            className="gallery__column animate-reverse"
            style={{ right: "0" }}
          >
            {props.secondColumn.map((item) => {
              return (
                <a
                  onClick={item.onImageClick}
                  target="_blank"
                  className="gallery__link"
                >
                  <figure className="gallery__thumb">
                    <img
                      src={item.src}
                      alt={item.figureCaption}
                      className="gallery__image"
                    />
                    <figcaption className="gallery__caption">
                      {item.figureCaption}
                    </figcaption>
                  </figure>
                </a>
              );
            })}
            {props.secondColumn.map((item) => {
              return (
                <a
                  onClick={item.onImageClick}
                  target="_blank"
                  className="gallery__link"
                >
                  <figure className="gallery__thumb">
                    <img
                      src={item.src}
                      alt={item.figureCaption}
                      className="gallery__image"
                    />
                    <figcaption className="gallery__caption">
                      {item.figureCaption}
                    </figcaption>
                  </figure>
                </a>
              );
            })}
            {/* <a
              // href="https://unsplash.com/@marilezhava"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                  alt="Portrait by Mari Lezhava"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Mari Lezhava
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@ethanhaddox"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                  alt="Portrait by Ethan Haddox"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Ethan Haddox
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@mr_geshani"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                  alt="Portrait by Amir Geshani"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Amir Geshani
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@frxgui"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                  alt="Portrait by Guilian Fremaux"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Guilian Fremaux
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@majestical_jasmin"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                  alt="Portrait by Jasmin Chew"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Jasmin Chew
                </figcaption>
              </figure>
            </a>

            <a
              // href="https://unsplash.com/@dimadallacqua"
              target="_blank"
              className="gallery__link"
            >
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                  alt="Portrait by Dima DallAcqua"
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  Portrait by Dima DallAcqua
                </figcaption>
              </figure>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioImages;
