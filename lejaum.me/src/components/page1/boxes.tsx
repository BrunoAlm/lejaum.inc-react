import Image from "next/image";

export default function Boxes({ text = '', text_negrito = '', iconPath = Image.prototype }) {
    return (
        <>
            <div className="border-laranjaum border-[2.33px] w-[280px] h-[80px] p-2 rounded-[11.6px] flex items-center">
                <div className="w-[110px]">
                    <Image
                        src={iconPath}
                        alt='Box icon'
                    />
                </div>
                <div className="pl-2">
                    <p className="block text-branquin text-body2 text-justify font-georama">
                        {text}
                        <p className=" inline font-georama text-body2-negrito">
                            {text_negrito}
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}