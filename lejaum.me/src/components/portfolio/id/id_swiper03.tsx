
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

export default function IdSwiper03() {

    SwiperCore.use([Autoplay]);
    var w = 618.81;
    var h = 333.69;

    return (
        <Swiper
            slidesPerView={1}
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
                    src={'/assets/id/id3/id01.webp'}
                    alt={'id01_image'}
                    width={w}
                    height={h}
                    className={"rounded-tl-[12px] rounded-bl-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/id/id3/id02.webp'}
                    alt={'id02_image'}
                    width={w}
                    height={h}
                    className={"rounded-tr-[12px] rounded-br-[12px]"}
                />
            </SwiperSlide>

        </Swiper>
    );
};