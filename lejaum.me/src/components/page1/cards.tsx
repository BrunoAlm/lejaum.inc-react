import Image from "next/image";

export default function Boxes({ text = '', text_negrito = '', iconPath = '' }) {
    return (
        <>
            <div className="border-laranjaum border-[.2rem] w-[320px] h-[90px] p-2 rounded-[11.62px] flex items-center">
                    <Image
                        src={iconPath}
                        alt='box_icon'
                        width={55}
                        height={67.25}
                    />
                <div className="pl-2">
                    <p className="block text-branquin text-body1 text-left font-georama">{text} <strong>{text_negrito}</strong></p>
                </div>
            </div>
        </>
    )
}