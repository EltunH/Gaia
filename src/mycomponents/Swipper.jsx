import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import swp1 from "../assets/swp1.png";
import swp2 from "../assets/swp2.png";
import swp3 from "../assets/swp3.png";
import swp4 from "../assets/swp4.png";
import swp5 from "../assets/swp5.png";
import swp6 from "../assets/swp6.png";
import swp7 from "../assets/swp7.png";
import swp8 from "../assets/swp8.png";
import swp9 from "../assets/swp9.png";
import swp10 from "../assets/swp10.png";
import swp11 from "../assets/swp11.png";
import swp12 from "../assets/swp12.png";
import swp13 from "../assets/swp13.png";
import swp14 from "../assets/swp14.png";
import swp15 from "../assets/swp15.png";
import swp16 from "../assets/swp16.png";
import swp17 from "../assets/swp17.png";
import swp18 from "../assets/swp18.png";
import swp19 from "../assets/swp19.png";
import swp20 from "../assets/swp20.png";
import swp21 from "../assets/swp21.png";
import swp22 from "../assets/swp22.png";
import swp23 from "../assets/swp23.png";
import swp24 from "../assets/swp24.png";
import swp25 from "../assets/swp25.png";
import swp26 from "../assets/swp26.png";

export function Carousel() {
    const swpArr = [swp1, swp2, swp3, swp4, swp5, swp6, swp7, swp8, swp9, swp10, swp11, swp12, swp13, swp14, swp15, swp16, swp17, swp18, swp19, swp20, swp21, swp22, swp23, swp24, swp25, swp26]

    return (
        <>
            <Swiper className="mySwiper"
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                }}
                slidesPerGroup={2}
                loop={true}
                breakpoints={{
                    290: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {Array(26).fill('').map((_, i) => (
                    <SwiperSlide key={i}>
                        <img src={swpArr[i]} alt={`swp photo ${i + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

