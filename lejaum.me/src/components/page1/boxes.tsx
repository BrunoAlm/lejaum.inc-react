import Image from "next/image";

export default function Boxes({ text = '', text_negrito = '', iconPath = '' }) {
    return (
        <>
            <div className="border-laranjaum border-[.2rem] w-[280px] h-[80px] p-2 rounded-[11.6px] flex items-center">
                    <Image
                        src={iconPath}
                        alt='Box icon'
                        width={55}
                        height={30}
                    />
                <div className="pl-2">
                    <p className="block text-branquin text-body2 text-justify font-georama">{text} <strong>{text_negrito}</strong></p>
                </div>
            </div>
        </>
    )
}