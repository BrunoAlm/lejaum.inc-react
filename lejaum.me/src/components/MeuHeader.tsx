import LogoLejaum from '../assets/lejaum/logo-w.svg';
import * as React from 'react';
import Botao from './botao';

export default function MeuHeader() {
    const [drawerAberto, setDrawerAberto] = React.useState(false);
    const AbreDrawer = () => setDrawerAberto(!drawerAberto);


    if (drawerAberto) {

    }

    return (
        <>
            <div className='h-16 px-28 bg-laranjaum flex items-center justify-between'>
                <div className='flex cursor-pointer items-center' >
                    <LogoLejaum />
                    <p className='font-georama text-h4 text-branquin italic'>lejaum</p>
                </div>
                <div className='h-6 w-6 cursor-pointer bg-branquin' onClick={AbreDrawer} ></div>
            </div>
            {drawerAberto && (
                <div className='flex'>
                    <div
                        className='transition-all absolute z-10 top-0 right-0 bg-pretao w-1/4 h-full flex flex-col items-center justify-center'>
                        <p>puta que pariu</p>
                        <Botao text='Início'/>
                        <div className='h-3'></div>
                        <Botao text='Sobre'/>
                        <div className='h-3'></div>
                        <Botao text='Portfólio'/>
                        <div className='h-3'></div>
                        <Botao text='Contato'/>
                    </div>
                    <div className='bg-branquin bg-opacity-5 backdrop-blur-sm min-h-full min-w-full absolute top-0 right-0' onClick={AbreDrawer}></div>
                </div>
            )}
        </>
    )
}

