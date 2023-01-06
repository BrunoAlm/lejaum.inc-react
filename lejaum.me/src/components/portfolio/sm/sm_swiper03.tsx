
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

export default function SmSwiper03() {

    SwiperCore.use([Autoplay]);
    var w = 332.92;
    var h = 334.31;

    return (
        <Swiper
            slidesPerView={1.27}
            spaceBetween={-.4}
            className={'my-2 drop-shadow-card'}
            breakpoints={{
                640: {
                    slidesPerView: 5.4,
                },
            }}
            autoplay={{ delay: 5000 }}
        >
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm3/sm01.webp'}
                    alt={'sm01_image'}
                    width={w}
                    height={h}
                    className={"rounded-tl-[12px] rounded-bl-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm3/sm02.webp'}
                    alt={'sm02_image'}
                    width={w}
                    height={h}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm3/sm03.webp'}
                    alt={'sm03_image'}
                    width={w}
                    height={h}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm3/sm04.webp'}
                    alt={'sm04_image'}
                    width={w}
                    height={h}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm3/sm05.webp'}
                    alt={'sm05_image'}
                    width={w}
                    height={h}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm3/sm06.webp'}
                    alt={'sm06_image'}
                    width={w}
                    height={h}
                    className={"rounded-tr-[12px] rounded-br-[12px]"}
                />
            </SwiperSlide>
        </Swiper>
    );
};