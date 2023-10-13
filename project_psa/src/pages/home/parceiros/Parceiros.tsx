import styles from "./Parceiros.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import parceirosData from "../../../typescript/parceirosData";

import { Autoplay, Pagination, Navigation, Virtual } from "swiper/modules";

const Parceiros = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <div className={styles.Title_parceiro}>
            <h1>Veja quem são nossos Parceiros</h1>
          </div>

          <div className={styles.container_cardSlider}>
            <div className={styles.container_slider}>
              <Swiper
                modules={[Autoplay, Pagination, Navigation, Virtual]}
                className={styles.mySwiper}
                virtual
                slidesPerView={1}
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                  delay: 2700,
                  disableOnInteraction: false,
                }}
                navigation={true}
              >
                {parceirosData.map((itemParceiro) => (
                  <SwiperSlide
                    className={styles.SwiperSlide}
                    key={itemParceiro.id}
                  >
                    <img
                      className={styles.imgParceiro}
                      src={itemParceiro.image}
                      alt="Marcas Parceiras"
                      width={120}
                      height={30}
                    />
                    <h2>{itemParceiro.brandName}</h2>
                    <h3>{itemParceiro.subName}</h3>
                    <a className={styles.btn_more} href={itemParceiro.link}>
                      Saiba Mais
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parceiros;
