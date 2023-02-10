import {Swiper, SwiperSlide } from "swiper/react"
import images from "../dat/images"
const SwiperUI = function(){
    const slides = images.map((image, index) => {
        <SwiperSlide key={index}>
            <img src={image.url} alt="adsf" />
        </SwiperSlide>
    })
    return(
        <div>
            <h1>Day-60 Swiper JS with React</h1>
            <Swiper
            spacebetween={50}
            slidesPerView={1}
            onSlideChange
            onSwipe>
                {slides}
            </Swiper>
        </div>
    )
}
export default SwiperUI