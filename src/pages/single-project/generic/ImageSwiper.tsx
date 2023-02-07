import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Theme } from '@mui/material';
import 'swiper/css';

const createSwiperStyles = (theme: Theme) => ({
  //   '& img, .swiper-slide-active': {
  //     width: '100% !important',
  //   },
  //   '& .swiper-button-prev, .swiper-button-next': {
  //     color: theme.palette.primary.main,
  //   },
  //   '& .swiper-pagination': {
  //     marginTop: '20px',
  //     position: 'relative',
  //     '& .swiper-pagination-bullet': {
  //       width: '12px',
  //       height: '12px',
  //       backgroundColor: '#fff',
  //       opacity: '1',
  //       border: `1px solid ${theme.palette.primary.main}`,
  //     },
  //     '& .swiper-pagination-bullet-active': {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //   },
});

// SwiperCore.use([Navigation, Pagination]);

/*
<Swiper spaceBetween={50} navigation pagination={{ clickable: true }}>
  {props.images.map((image, index) => (
    <SwiperSlide key={index}>
    <img src={image} alt="" /> 
    </SwiperSlide>
  ))}
</Swiper>;
*/

export type ImageSwiperProps = {
  images: string[];
};

function ImageSwiper(props: ImageSwiperProps): JSX.Element {
  return (
    <Box sx={(theme: Theme) => createSwiperStyles(theme)}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Box>
  );
}

export default ImageSwiper;
