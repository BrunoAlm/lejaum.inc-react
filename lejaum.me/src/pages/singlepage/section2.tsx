import SmSwiper01 from "../../components/portfolio/sm/sm_swiper01";
import SmSwiper02 from "../../components/portfolio/sm/sm_swiper02";
import SmSwiper03 from "../../components/portfolio/sm/sm_swiper03";

export default function Section2() {
    return (
        <>
            {/* Início do portfolio de social media */}
            <div id="portfolio" className="h-fit pt-[1px] pb-[45px] w-full bg-pretao">
                <p className="text-home font-black text-laranjaum text-center font-georama">Social Media</p>
                <p className="text-body2 text-branquin text-center font-georama">Toque para visualizar em tela cheia</p>
                {/* wrapper de varios swipers */}
                <div className="w-full overflow-hidden">
                    <SmSwiper01/>
                    <SmSwiper02/>
                    <SmSwiper03/>
                </div>
            </div> {/* FINAL */}
        </>
    )
}