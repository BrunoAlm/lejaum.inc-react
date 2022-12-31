import Image from "next/image";

export default function Logo() {
    return <div className='w-[50px] h-[50px] bg-laranjaum rounded-[10px] flex items-center justify-center'>
        <Image
            src="/assets/lejaum/logo-w.svg"
            alt='logo-lejaum'
            width={35.8}
            height={35}
        />
    </div>

}
