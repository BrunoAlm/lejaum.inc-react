import SmSwiper01 from "../../components/portfolio/sm_swiper01";
import SmSwiper02 from "../../components/portfolio/sm_swiper02";

export default function Section2() {
    return (
        <>
            {/* Início do portfolio de social media */}
            <div id="portfolio" className="h-screen pt-[45px] sm:h-[calc(100vh-60px)] w-full bg-pretao border border-branquin border-dashed">
                <p className="text-home font-black text-laranjaum text-center font-georama">Social Media</p>
                <p className="text-body2 text-branquin text-center font-georama">Toque para visualizar em tela cheia</p>
                {/* wrapper de varios swipers */}
                <div className="w-screen">
                    <SmSwiper01/>
                    <SmSwiper02/>
                </div>
            </div> {/* FINAL */}
        </>
    )
}