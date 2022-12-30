import Image from "next/image";
import Boxes from "../../components/page1/boxes";
import "../../components/swiper.js"
import CustomButton from "../../components/button"
import CustomIconButton from "../../components/icon_button"
import MeuSwiper from "../../components/MeuSwiper";

export default function Page1() {
    return (
        <>
            <div className="h-[calc(100vh-80px)] w-full sm:h-[calc(100vh-60px)] bg-pretao">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-fit mb-8 border border-branquin border-dashed">
                        <p className="text-home text-laranjaum text-center uppercase line-through font-georama">Não vendemos Serviços,</p>
                        <p className="text-home font-black text-laranjaum text-center uppercase font-georama">nós entregamos soluções!</p>
                    </div>
                    {/* <div className=" border border-branquin border-dashed flex flex-wrap justify-center items-center content-center gap-4">
                        <CustomIconButton imageUrl="/assets/icons/arrow-down.svg" text="Saber Mais" />
                        <CustomIconButton imageUrl="/assets/icons/arrow-down.svg" text="Portfólio" />
                        <CustomIconButton imageUrl="/assets/icons/credit-card.svg" text="Ver Planos" />
                        <CustomIconButton imageUrl="/assets/icons/whatsapp.svg" text="Whatsapp" />
                    </div> */}
                </div>
                    <MeuSwiper/>
                {/* só no desktop */}
                {/* <div className="swiper">
                    <p className="text-branquin font-georama ">O que nós oferecemos:</p>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Boxes
                                text="Seja reconhecido pelo seus clientes e fidelize eles com"
                                text_negrito=" identidade visual"
                                iconPath="/assets/lejaum/mao_icon.webp"

                            />

                        </div>
                        <div className="swiper-slide">
                            <Boxes
                                text="Desenvolva relacionamento com seu público com nosso"
                                text_negrito=" social media"
                                iconPath="/assets/lejaum/like_insta_icon.webp"
                            />
                        </div>
                        <div className="swiper-slide">
                            <Boxes
                                text="Apareça no digital para a pessoa certa, no momento certo com"
                                text_negrito=" tráfego pago"
                                iconPath="/assets/lejaum/sino_icon.webp"

                            />
                        </div>
                        <div className="swiper-slide">
                            <Boxes
                                text="Transforme seus Leads em Vendas com"
                                text_negrito=" marketing"
                                iconPath="/assets/lejaum/grafico_icon.webp"
                            />
                        </div>

                    </div> */}
                    {/* <!-- If we need navigation buttons --> */}
                    {/* <div className="swiper-button-prev">prev</div>
                    <div className="swiper-button-next">next</div> */}
                    {/* <!-- If we need scrollbar --> */}
                    {/* <div className="swiper-scrollbar"></div> */}
                    {/* BONECAO ASTRONAUTA */}
                    {/* <div className="hover:animate-viraDeLadin absolute right-[5%]">
                        <div className="animate-quica ">
                            <Image
                                src="/assets/lejaum/astronauta-ss.png"
                                alt="img pra chamar atenção"
                                width={290}
                                height={300}
                            />
                        </div>
                        <div className="animate-pulse2">
                            <Image
                                src="/assets/lejaum/sombra.png"
                                alt="img assombrosa"
                                width={150}
                                height={40}
                            />
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </>
    )
}