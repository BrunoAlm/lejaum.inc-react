import FilledButton from '../../components/buttons/lejaum_filled_button';
import CardSwiper from '../../components/page1/card_swiper';

export default function Section1({ id = "" }) {
    return (
        <>
            {/* Tela de entrada do usuário */}
            <div id={id} className="h-screen w-full sm:h-[calc(100vh-60px)] bg-pretao flex flex-col justify-center items-center">
                {/* Texto principal */}
                <div className="w-fit ">
                    <p className="text-home text-laranjaum text-center uppercase line-through font-georama">Não vendemos Serviços,</p>
                    <p className="text-home font-black text-laranjaum text-center uppercase font-georama">nós entregamos soluções!</p>
                </div>
                {/* Carrossel com textos de imagens */}
                <div className='w-full  my-8 sm:hidden '>
                    <CardSwiper />
                </div>
                {/* Botão de chamada que da scroll para o portfólio */}
                <FilledButton
                    text='ver portfólio'
                    href='#portfolio-sm'
                />
            </div> {/* FINAL */}
        </>
    )
}