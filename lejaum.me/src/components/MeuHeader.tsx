import LogoLejaum from '../assets/lejaum/logo-w.svg';
import * as React from 'react';
import Botao from './botao';
import useCheckMobileScreen from './deviceCheck/checkMobileScreen';
import useCheckTabletScreen from './deviceCheck/checkTabletScreen';

export default function MeuHeader() {
    const [drawerAberto, setDrawerAberto] = React.useState(false);
    const AbreDrawer = () => setDrawerAberto(!drawerAberto);

    const isMobile = useCheckMobileScreen();
    const isTablet = useCheckTabletScreen();
    return (
        <>
            <div className={`h-[80px] w-screen px-12 sm:px-20 sm:h-[60px] bg-laranjaum flex items-center justify-between`}>
                <a href='http://localhost:3000/' target={'_self'} className='flex cursor-pointer items-center'>
                    <LogoLejaum />
                    <p className='font-georama text-h4 text-branquin italic'>lejaum</p>
                </a>
                <div className={`z-[11] right-0  transform transition-all duration-500 ${drawerAberto ? '-translate-x-[270px]' : ''}`} >
                    <button className="relative group" onClick={AbreDrawer}>
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[45px] h-[45px] transform transition-all bg-laranjaum ring-0 ring-branquin hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                            <div className="flex flex-col justify-between w-[10px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div className="bg-branquin h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                                <div className="bg-branquin h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                                <div className="bg-branquin h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
                                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                    <div className="absolute bg-branquin h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                    <div className="absolute bg-branquin h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div >

            {drawerAberto && (
                <div className='flex'>
                    <div className={`absolute z-20 top-0 right-0 transform transition-all duration-500 ${drawerAberto ? `${isMobile ? 'w-[70%]' : isTablet ? 'w-[50%]' : 'w-1/4'}` : 'w-0 h-0'} bg-pretao h-full flex flex-col items-center justify-center`}>
                        <p>puta que pariu</p>
                        <Botao href='#' text='Início' onClick={AbreDrawer} />
                        <div className='h-3'></div>
                        <Botao text='Sobre' onClick={AbreDrawer} />
                        <div className='h-3'></div>
                        <Botao text='Portfólio' onClick={AbreDrawer} />
                        <div className='h-3'></div>
                        <Botao text='Contato' onClick={AbreDrawer} />
                    </div>
                    <div className='z-10 bg-branquin bg-opacity-5 backdrop-blur-sm min-h-full min-w-full absolute top-0 right-0' onClick={AbreDrawer}></div>
                </div>
            )}
        </>
    )
}

