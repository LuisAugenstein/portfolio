import { makeStyles } from '@material-ui/styles';
import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import Image1 from "../../img/portfolio/portfolio-details-1.jpg"
import Image2 from "../../img/portfolio/portfolio-details-2.jpg"
import Image3 from "../../img/portfolio/portfolio-details-3.jpg"

const useStyles = makeStyles(theme => ({
    swiper: {
        '& img': {
            width: "100%"
        },
        '& .swiper-pagination': {
            marginTop: "20px",
            position: "relative",
            '& .swiper-pagination-bullet': {
                width: "12px",
                height: "12px",
                backgroundColor: "#fff",
                opacity: "1",
                border: `1px solid ${theme.palette.primary.main}`,
            },
            '& .swiper-pagination-bullet-active': {
                backgroundColor: theme.palette.primary.main
            }
        }
    }
}))

SwiperCore.use([Navigation, Pagination]);

function ImageSwiper() {
    const classes = useStyles()
    return (
        <Swiper
            className={"portfolio-details-slider " + classes.swiper}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide><img src={Image1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Image2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        </Swiper>
    );
}

export default ImageSwiper