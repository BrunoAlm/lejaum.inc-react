import Image from 'next/image';
import * as React from 'react';
import Botao from './buttons/lejaum_border_button';
import useCheckMobileScreen from './deviceCheck/checkMobileScreen';
import useCheckTabletScreen from './deviceCheck/checkTabletScreen';
import TopbarDrawer from './drawer';

export default function TopBar() {
    const [drawerAberto, setDrawerAberto] = React.useState(false);
    const AbreDrawer = () => setDrawerAberto(!drawerAberto);

    return (
        <>
            <div className={`h-[45px] w-full m-0 px-12 sm:px-20 sm:h-[60px] fixed bg-laranjaum flex items-center justify-between shadow-laranjaum shadow-md drop-shadow z-50`}>
                <a href='http://localhost:3000/' target={'_self'} className='flex cursor-pointer items-center'>
                    <Image
                        src="/assets/lejaum/logo-w.svg"
                        alt='logo-lejaum'
                        width={22}
                        height={21}
                    />
                    <p className='font-georama text-h4 text-branquin italic'>lejaum</p>
                </a>
                <button onClick={AbreDrawer}>
                    <div className='flex flex-col items-center justify-center gap-[2px] w-[26.45px] h-[17.05px]'>
                        <div className='h-[3.68px] w-full bg-branquin rounded-[10px]'></div>
                        <div className='h-[3.68px] w-full bg-branquin rounded-[10px]'></div>
                        <div className='h-[3.68px] w-full bg-branquin rounded-[10px]'></div>
                    </div>
                </button>
               
            </div>
            {drawerAberto && (
                <TopbarDrawer drawerAberto={drawerAberto} AbreDrawer={AbreDrawer} />
            )}
        </>
    )
}

