import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

function ImageSwiper() {
    return (
        <Swiper
            className="portfolio-details-slider"
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide><img src="img/portfolio/portfolio-details-1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/portfolio/portfolio-details-2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/portfolio/portfolio-details-3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/portfolio/portfolio-details-1.jpg" alt="" /></SwiperSlide>
        </Swiper>
    );
}

export default ImageSwiper