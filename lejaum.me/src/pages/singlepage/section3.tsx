import IdSwiper01 from "../../components/portfolio/id/id_swiper01";
import IdSwiper02 from "../../components/portfolio/id/id_swiper02";
import IdSwiper03 from "../../components/portfolio/id/id_swiper03";

export default function Section3({ id = "" }) {
    return (
        <>
            {/* Início do portfolio de Identidade Visual */}
            <div id={id} className="h-full w-full bg-pretao py-8">
                <p className="text-home font-black text-laranjaum text-center font-georama">Identidade Visual</p>
                <p className="text-body2 text-branquin text-center font-georama">Toque para visualizar o projeto inteiro</p>
                {/* wrapper de varios swipers */}
                <div className="w-full overflow-hidden">
                    <IdSwiper01/>
                    <IdSwiper02/>
                    <IdSwiper03/>
                </div>
            </div> {/* FINAL */}
        </>
    )
}