import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "../styles/Home.module.scss";
import { Grid } from "@mui/material";

const TestSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slidesWithTitles = [
    { src: "https://swiperjs.com/demos/images/nature-1.jpg", title: "Title 0" },
    { src: "https://swiperjs.com/demos/images/nature-2.jpg", title: "Title 1" },
    { src: "https://swiperjs.com/demos/images/nature-3.jpg", title: "Title 2" },
    { src: "https://swiperjs.com/demos/images/nature-4.jpg", title: "Title 3" },
  ];

  const handleSlideChange = (swiper: any) => {
    const adjustedIndex = swiper.realIndex % slidesWithTitles.length;
    setActiveIndex(adjustedIndex);
  };

  return (
    <Grid container spacing={2} className={styles.custom_grid_container}>
      <Grid item xs={12} md={6} className={styles.custom_grid}>
        <div className={styles.swiper_text}>
          <h3>{slidesWithTitles[activeIndex].title}</h3>
          <p>lorem ipsum</p>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={styles.custom_grid}>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          centeredSlides={false}
          onSlideChange={handleSlideChange}
          pagination={{
            clickable: true,
            bulletActiveClass: styles.bullet_active,
            bulletClass: `swiper-pagination-bullet ${styles.bullet}`,
          }}
          modules={[Pagination]}
          className={styles.mySlider}
          slideToClickedSlide={true}
        >
          {slidesWithTitles.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.swiper_slide} ${
                activeIndex === index ? styles.swiper_slide_active : ""
              }`}
            >
              {/* <Image src={slide.src} alt={`Slide ${index}`} layout="fill" /> */}
              <img src={slide.src} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default TestSlider;
