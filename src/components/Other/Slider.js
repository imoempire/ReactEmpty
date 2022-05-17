import React from 'react'
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './slider.css'
import image from '../../Assets/logo.png'
import image1 from '../../Assets/Books/crimes.JPG'
import image2 from '../../Assets/Books/curse.JPG'
import image3 from '../../Assets/Books/Dune.JPG'
import image4 from '../../Assets/Books/element.JPG'
import image5 from '../../Assets/Books/eternal.JPG'
import image6 from '../../Assets/Books/Fellow.JPG'
import image7 from '../../Assets/Books/gravity.JPG'

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const slide_img = [
   '../../Assets/logo.png',
   {image1},
   {image2},
   {image3},
   {image4},
   {image5},
   {image6},
   {image7},
   "https://swiperjs.com/demos/images/nature-9.jpg",
 ];
const Slider = () => {
  return (
     <div className='swp' >
        <Swiper
         autoplay={{delay: 3000}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
             <img src={image7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img src={image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img src={image5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img src={image6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div> 
  )
}

export default Slider