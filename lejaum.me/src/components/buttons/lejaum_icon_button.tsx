import Image from "next/image";
export default function IconButton({ text = '', href = '', target = '_self', onClick = () => { }, imageUrl = "" }) {
    return (
        <>
            {/* 
                Imitar Leading e Trailing do flutter
                Iconizin na frente e atras
            */}
            <a href={href} target={target} className="bg-pretao border-branquin border-2 w-44 h-fit py-2 flex items-center justify-center gap-1 rounded-3xl cursor-pointer" onClick={onClick}>
                <Image
                    src={imageUrl}
                    alt='icon_button'
                    width={16.8}
                    height={16.8}
                />
                <p className="text-center text-branquin font-georama text-BUTTON">{text}</p>
            </a>
        </>
    )
}