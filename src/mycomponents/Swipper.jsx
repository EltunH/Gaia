import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function Carousel() {
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
                        <img src={`/public/assets/img/swp${i + 1}.png`} alt={`swp photo ${i + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

