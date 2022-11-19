import Botao from "../../components/botao";
import imagemAstronauta from "../../assets/lejaum/astronauta-ss.png"
import imagemSombra from "../../assets/lejaum/sombra.png"
import Image from "next/image";

export default function Page1() {
    return (
        <>
            <div className="min-w-full min-h-screen bg-pretao flex items-center">
                <div className="hover:animate-viraDeLadin transition-all duration-[2000ms] absolute right-[20%]">
                    <div className="animate-quica ">
                        <Image
                            src={imagemAstronauta}
                            alt="img pra chamar atenção"

                            width={150}

                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </div>
                    <div className="animate-pulse2">
                        <Image
                            src={imagemSombra}
                            alt="img assombrosa"
                            width={150}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </div></div>
            </div>

        </>
    )
}