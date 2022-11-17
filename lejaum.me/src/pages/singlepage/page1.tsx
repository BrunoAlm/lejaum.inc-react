import Botao from "../../components/botao";
import imagemAstronauta from "../../assets/lejaum/astronauta.png"
import Image from "next/image";

export default function Page1() {
    return (
        <>
            <div className="min-w-full min-h-screen bg-pretao flex">
                <div>
                    <p className="text-home text-laranjaum uppercase line-through">Não vendemos Serviços,</p>
                    <p className="text-home-bold text-laranjaum uppercase">nós entregamos soluções!</p>
                    <div className="flex gap-5">
                        <Botao text="Saber Mais" />
                        <Botao text="Portfólio" />
                        <Botao text="Ver Planos" />
                        <Botao text="Whatsapp" />
                    </div>
                </div>
                <Image
                    src={imagemAstronauta}
                    alt="img pra chamar atenção"
                    width={150}
                    className="contain"
                    
                    // height={150}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
            </div>

        </>
    )
}