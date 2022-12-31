
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

export default function SmSwiper01() {

    SwiperCore.use([Autoplay]);
    var w = 218.81;
    var h = 386.24;

    return (
        <Swiper
            slidesPerView={1.67}
            spaceBetween={13}
            loop={true}
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
                    src={'/assets/sm/sm1/sm01.webp'}
                    alt={'sm01_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px] drop-shadow-2xl"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm02.webp'}
                    alt={'sm02_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm03.webp'}
                    alt={'sm03_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm04.webp'}
                    alt={'sm04_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm05.webp'}
                    alt={'sm05_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm06.webp'}
                    alt={'sm06_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm07.webp'}
                    alt={'sm07_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm08.webp'}
                    alt={'sm08_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm09.webp'}
                    alt={'sm09_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={'/assets/sm/sm1/sm10.webp'}
                    alt={'sm10_image'}
                    width={w}
                    height={h}
                    className={"rounded-[12px]"}
                />
            </SwiperSlide>

        </Swiper>
    );
};