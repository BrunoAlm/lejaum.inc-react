import IdSwiper01 from "../../components/portfolio/id/id_swiper01";
import IdSwiper02 from "../../components/portfolio/id/id_swiper02";
import IdSwiper03 from "../../components/portfolio/id/id_swiper03";

export default function Section3() {
    return (
        <>
            {/* Início do portfolio de Identidade Visual */}
            <div className="h-fit pt-[45px] pb-[1px] w-full bg-pretao">
                <p className="text-home font-black text-laranjaum text-center font-georama">Identidade Visual</p>
                <p className="text-body2 text-branquin text-center font-georama">Toque para visualizar o projeto inteiro</p>
                {/* wrapper de varios swipers */}
                <div className="w-screen">
                    <IdSwiper01/>
                    <IdSwiper02/>
                    <IdSwiper03/>
                </div>
            </div> {/* FINAL */}
        </>
    )
}