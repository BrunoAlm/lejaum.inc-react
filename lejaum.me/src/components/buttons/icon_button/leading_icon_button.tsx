import Image from "next/image";
export default function LeadingIconButton({ text = '',  onClick = () => { }, imageUrl = "" }) {
    return (
        <>
            {/* 
                Imitação do Leading e Trailing do flutter
                Leading é icone no começo e Trailing é icone no final
            */}
            <a className="bg-pretao border-branquin border-2 w-[90px] h-fit py-2 flex items-center justify-center gap-1 rounded-3xl cursor-pointer" onClick={onClick}>
                <Image
                    src={imageUrl}
                    alt='icon_button'
                    width={20}
                    height={20}
                />
                <p className="text-center text-branquin font-georama text-BUTTON">{text}</p>
            </a>
        </>
    )
}