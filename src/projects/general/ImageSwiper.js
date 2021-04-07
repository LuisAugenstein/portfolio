import { makeStyles } from '@material-ui/styles';
import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



const useStyles = makeStyles(theme => ({
    swiper: {
        '& img, .swiper-slide-active': {
            width: "100% !important"
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

function ImageSwiper({ images }) {
    const classes = useStyles()
    return (
        <Swiper
            className={classes.swiper}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
        >
            {images.map(image => {
                console.log("Hallo")
                return < SwiperSlide > <img src={image} alt="" /></SwiperSlide>
            })}
        </Swiper >
    );
}

export default ImageSwiper