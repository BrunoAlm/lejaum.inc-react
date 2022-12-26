import Image from "next/image";
import Whatsapp from "../assets/icons/whatsapp.svg";
export default function CustomIconButton({ text = '', href = '', target = '_self', onClick = () => { }, imageUrl = "" }) {
    return (
        <>
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