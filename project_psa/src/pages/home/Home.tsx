import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dataImg from "../../typescript/imagens";
import styles from "./Home.module.scss";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Categorias from "./Categorias";
import Departamentos from "./Departamentos";
import QuemSomos from "./quemSomos/QuemSomos";
import Parceiros from "./parceiros/Parceiros";

const Home = () => {
  const [slidesPerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidePerView(1);
      } else {
        setSlidePerView(1);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Swiper
          className={styles.mySwiper}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          centeredSlides={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
        >
          {dataImg.map((itemSlider) => (
            <SwiperSlide key={itemSlider.id}>
              <img
                className={styles.SwiperSlider_img}
                src={itemSlider.image}
                alt="Image Slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Categorias />
      <Departamentos />
      <QuemSomos />
      <Parceiros />
    </>
  );
};

export default Home;
