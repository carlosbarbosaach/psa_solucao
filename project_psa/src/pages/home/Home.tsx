import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dataImg from "../../typescript/imagens";
import styles from "./Home.module.scss";

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
    <div className={styles.container}>
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
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
  );
};

export default Home;
