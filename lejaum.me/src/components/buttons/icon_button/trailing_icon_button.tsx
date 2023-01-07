import Image from "next/image";
export default function TrailingIconButton({ text = '', onClick = () => { }, imageUrl = "" }) {
    return (
        <>
            {/* 
                Imitação do Leading e Trailing do flutter
                Leading é icone no começo e Trailing é icone no final
            */}
            <a className="bg-branquin dark:bg-pretao dark:border-branquin border-pretao dark: border-2 w-[90px] h-fit py-2 flex items-center justify-center gap-1 rounded-3xl cursor-pointer" onClick={onClick}>
                <p className="text-center text-pretao dark:text-branquin font-georama text-BUTTON">{text}</p>
                <Image
                    src={imageUrl}
                    alt='icon_button'
                    width={20}
                    height={20}
                />
            </a>
        </>
    )
}