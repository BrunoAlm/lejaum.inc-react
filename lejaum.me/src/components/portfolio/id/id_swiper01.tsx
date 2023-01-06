
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

export default function IdSwiper01() {

    SwiperCore.use([Autoplay]);
    var w = 218.81;
    var h = 333.69;

    return (
        <Swiper
            slidesPerView={1.9}
            spaceBetween={-.4}
            className={'my-2 drop-shadow-card'}
            breakpoints={{
                640: {
                    slidesPerView: 5.4,
                },
            }}
        >
            <SwiperSlide>
                <Image
                    src={'/assets/id/id1/id01.webp'}
                    alt={'id01_image'}
                    width={w}
                    height={h}
                    className={"rounded-tl-[12px] rounded-bl-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/id/id1/id02.webp'}
                    alt={'id02_image'}
                    width={w}
                    height={h}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/id/id1/id03.webp'}
                    alt={'id03_image'}
                    width={w}
                    height={h}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/id/id1/id04.webp'}
                    alt={'id04_image'}
                    width={w}
                    height={h}
                    className={"rounded-tr-[12px] rounded-br-[12px]"}
                />
            </SwiperSlide>
        </Swiper>
    );
};