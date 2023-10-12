import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Parceiros.module.scss";
import parceirosData from "../../../typescript/parceirosData";

type parceirosData = {
  id: string;
  image: string;
};

const Parceiros = () => {
  const isMobile = window.innerWidth <= 786;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.Title_parceiro}>
          <h1>Parceiros</h1>
        </div>
        <div className={styles.container_slider}>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={!isMobile}
            autoPlay
            infiniteLoop
          >
            {parceirosData.map((itemParceiro) => (
              <div key={itemParceiro.id}>
                <img
                  className={styles.ParceirosSlider_img}
                  src={itemParceiro.image}
                  alt="Image Slider"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Parceiros;
