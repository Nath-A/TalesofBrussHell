// CenteredSlider.tsx

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import styles from '../styles/Home.module.scss';
import CardItem from './CardItem'; // Import the new CardItem component

const CenteredSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slidesData = [
    {
      imgSrc: './placeholder.png',
      title: 'Slide 1',
      description: 'Description for char 1',
      buttonText: 'Preview'
    },
    {
      imgSrc: './placeholder.png',
      title: 'Slide 2',
      description: 'Description for char 2',
      buttonText: 'Preview'
    },
    {
      imgSrc: './placeholder.png',
      title: 'Slide 3',
      description: 'Description for char 3',
      buttonText: 'Preview'
    },
    {
      imgSrc: './placeholder.png',
      title: 'Slide 4',
      description: 'Description for char 4',
      buttonText: 'Preview'
    },
    {
      imgSrc: './placeholder.png',
      title: 'Slide 5',
      description: 'Description for char 5',
      buttonText: 'Preview'
    }
  ];

  return (
    <Grid paddingTop={10} paddingLeft={1}>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}


        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        className={`mySwiper ${styles.mySwiper}`}
        slideToClickedSlide={true}
        style={{ height: '30rem', paddingTop: '1rem' }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <CardItem
              imgSrc={slide.imgSrc}
              title={slide.title}
              description={slide.description}
              buttonText={slide.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default CenteredSlider;
