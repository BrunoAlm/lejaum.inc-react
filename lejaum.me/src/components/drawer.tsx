import TrailingIconButton from "./buttons/icon_button/leading_icon_button";
import LeadingIconButton from "./buttons/icon_button/trailing_icon_button";
import BorderButton from "./buttons/lejaum_border_button";
import Logo from "./logo";

export default function TopbarDrawer({ drawerAberto = false, AbreDrawer = () => { } }) {
    return <>
        <div className='flex  '>
            <div className={`fixed z-[10000] gap-[22px] top-0 right-0 transform transition-all duration-500 ${drawerAberto ? 'w-[70%] sm:w-[50%]' : 'w-0 h-0'} bg-pretao h-full flex flex-col items-center justify-center`}>
                <Logo />
                <BorderButton href='#' text='Início' onClick={AbreDrawer} />
                <BorderButton text='Sobre' onClick={AbreDrawer} />
                <BorderButton href="#portfolio" text='Portfólio' onClick={AbreDrawer} />
                <BorderButton text='Ver Planos' onClick={AbreDrawer} />
                <BorderButton text='Whastapp' onClick={AbreDrawer} />
                <BorderButton text='Avaliações' onClick={AbreDrawer} />
                <p className="text-center text-branquin text-BUTTON uppercase font-georama">Alterar tema:</p>
                <div className="flex gap-2">
                    <LeadingIconButton imageUrl="/assets/icons/sun-outline.svg" text="claro" />
                    <TrailingIconButton imageUrl="/assets/icons/moon-outline.svg" text="escuro" />
                </div>
            </div>
            <div className='z-[9999] fixed bg-branquin bg-opacity-5 backdrop-blur-sm min-h-full min-w-full top-0 right-0' onClick={AbreDrawer}></div>
        </div>
    </>
}