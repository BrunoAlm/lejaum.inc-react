// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Boxes from './page1/boxes';

export default function MeuSwiper() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide><Boxes
                text="Transforme seus Leads em Vendas com"
                text_negrito=" marketing"
                iconPath="/assets/lejaum/grafico_icon.webp"
            /></SwiperSlide>
            ...
        </Swiper>
    );
};