import { sliderClasses } from "@mui/material";
import Image from "next/image";

export default function Boxes({ text = '', iconPath = Image.prototype}) {
    return (
        <>
            <div className="border-laranjaum border-[2.33px] w-[260px] p-2 rounded-[11.6px] flex">
                <div className="w-[150px]">
                <Image 
                    src={iconPath}
                    alt='Box icon'
                />
                </div>
                <p className="text-branquin text-body2 text-justify">{text}</p>
            </div>
        </>
    )
}