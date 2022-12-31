import SmSwiper01 from "../../components/portfolio/sm_swiper01";
import SmSwiper02 from "../../components/portfolio/sm_swiper02";

export default function Section4() {
    return (
        <>
            {/* Início do portfolio de social media */}
            <div id="portfolio" className="h-screen pt-[45px] sm:h-[calc(100vh-60px)] w-full bg-pretao">
                <p className="text-home font-black text-laranjaum text-center font-georama">Identidade Visual</p>
                <p className="text-body2 text-branquin text-center font-georama">Toque para visualizar o projeto inteiro</p>
                {/* wrapper de varios swipers */}
                <div className="w-screen">
                    {/* <SmSwiper01 />
                    <SmSwiper02 /> */}
                </div>
            </div> {/* FINAL */}
        </>
    )
}