// CenteredSlider.tsx

import React, { useState } from 'react'
import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../styles/Home.module.scss'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'

const CenteredSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <Grid paddingTop={10} paddingLeft={18}>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        pagination={{
          clickable: true,
          bulletActiveClass: styles.bullet_active,
          bulletClass: `swiper-pagination-bullet ${styles.bullet}`
        }}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        className={`mySwiper ${styles.mySwiper}`}
        slideToClickedSlide={true}

        style={{ height: '37rem', paddingTop: '12rem' }}
      >
        {[0, 1, 2, 3, 4].map(index => (
          <SwiperSlide key={index}>
            <img
              src={`./Polygon.png`}
              alt={`Slide ${index + 1}`}
              className={`${styles['swiper-slide-item']} ${activeIndex === index ? styles['active-slide'] : ''
                } ${activeIndex === index - 1 ? styles['prev-slide'] : ''} ${activeIndex === index + 1 ? styles['next-slide'] : ''
                }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  )
}

export default CenteredSlider
