import Image from "next/image";

export default function Boxes({ text = '', text_negrito = '', iconPath = '' }) {
    return (
        <>
            <div className="border-laranjaum border-[.2rem] w-[96%] h-[90px] p-4 rounded-[11.62px] flex items-center">
                    <Image
                        src={iconPath}
                        alt='box_icon'
                        width={50}
                        height={25}
                    />
                <div className="pl-4">
                    <p className="block text-branquin text-body1 text-left font-georama">{text} <strong>{text_negrito}</strong></p>
                </div>
            </div>
        </>
    )
}