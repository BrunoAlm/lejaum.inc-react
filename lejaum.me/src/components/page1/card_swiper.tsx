
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import Boxes from './cards';

export default function CardSwiper() {

    SwiperCore.use([Autoplay])

    return (
        <Swiper
            slidesPerView={1.18}
            autoplay={{ delay: 5000 }}
            loop={true}
        >
            <SwiperSlide>
                <Boxes
                    text="Seja reconhecido pelo seus clientes e fidelize eles com "
                    text_negrito="identidade visual"
                    iconPath="/assets/lejaum/mao_icon.webp"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Boxes
                    text="Desenvolva relacionamento com seu público com nosso "
                    text_negrito="social media"
                    iconPath="/assets/lejaum/like_insta_icon.webp"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Boxes
                    text="Apareça no digital para a pessoa certa, no momento certo com "
                    text_negrito="tráfego pago"
                    iconPath="/assets/lejaum/sino_icon.webp"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Boxes
                    text="Transforme seus Leads em Vendas com"
                    text_negrito=" marketing"
                    iconPath="/assets/lejaum/grafico_icon.webp"
                />
            </SwiperSlide>
        </Swiper>
    );
};