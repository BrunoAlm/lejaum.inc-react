import imagemAstronauta from "../../assets/lejaum/astronauta-ss.png"
import imagemSombra from "../../assets/lejaum/sombra.png"
import iconGrafico from "../../assets/lejaum/grafico_icon.webp"
import iconInsta from "../../assets/lejaum/like_insta_icon.webp"
import iconSino from "../../assets/lejaum/sino_icon.webp"
import iconMao from "../../assets/lejaum/mao_icon.webp"
import Image from "next/image";
import Boxes from "../../components/page1/boxes";
import CustomButton from "../../components/button"
import CustomIconButton from "../../components/icon_button"

export default function Page1() {
    return (
        <>
            <div className=" min-w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-60px)] bg-pretao flex flex-col justify-center items-center">
                <div className="w-fit mb-8 border border-branquin border-dashed">
                    <p className="text-home text-laranjaum text-center uppercase line-through font-georama">Não vendemos Serviços,</p>
                    <p className="text-home font-black text-laranjaum text-center uppercase font-georama">nós entregamos soluções!</p>
                </div>
                <div className="w-full border border-branquin border-dashed flex flex-wrap justify-center items-center content-center gap-4">
                    <CustomIconButton imageUrl="/assets/icons/arrow-down.svg" text="Saber Mais" />
                    <CustomIconButton imageUrl="/assets/icons/arrow-down.svg" text="Portfólio" />
                    <CustomIconButton imageUrl="/assets/icons/credit-card.svg" text="Ver Planos" />
                    <CustomIconButton imageUrl="/assets/icons/whatsapp.svg" text="Whatsapp" />
                </div>



                {/* <div className="">
                    <p className="text-home text-laranjaum uppercase line-through -mb-5 font-georama">Não vendemos Serviços,</p>
                    <p className="text-home-bold text-laranjaum uppercase font-georama">nós entregamos soluções!</p>
                </div>
                <p className="text-branquin font-georama ">O que nós oferecemos:</p>
                <div className="flex gap-2">
                    <Boxes
                        text="Seja reconhecido pelo seus clientes e fidelize eles com"
                        text_negrito=" identidade visual"
                        iconPath={iconMao}
                    />
                    <Boxes
                        text="Desenvolva relacionamento com seu público com nosso"
                        text_negrito=" social media"
                        iconPath={iconInsta}
                    />
                    <Boxes
                        text="Apareça no digital para a pessoa certa, no momento certo com"
                        text_negrito=" tráfego pago"
                        iconPath={iconSino}

                    />
                    <Boxes
                        text="Transforme seus Leads em Vendas com"
                        text_negrito=" marketing"
                        iconPath={iconGrafico}
                    />
                </div>
                <div className="invisible sm:visible hover:animate-viraDeLadin absolute right-[5%]">
                    <div className="animate-quica ">
                        <Image
                            src={imagemAstronauta}
                            alt="img pra chamar atenção"
                            width={290}
                        />
                    </div>
                    <div className="animate-pulse2">
                        <Image
                            src={imagemSombra}
                            alt="img assombrosa"
                            width={150}
                        />
                    </div>
                </div> */}
            </div>
        </>
    )
}