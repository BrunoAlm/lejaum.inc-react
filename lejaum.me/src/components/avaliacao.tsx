import Image from "next/image";

export default function Avaliacao({ pessoa = '', empresa = '', servico = '' }) {
    return <>
        <div className="w-4/5 bg-quase-cinza rounded-[10px] py -5 flex flex-col items-center justify-center">
            <audio src="" className="bg-branquin w-4/5"></audio>
            {/* <Image
                    alt=""
                    src={""}
                    height={23}
                    width={24}
                    className={'rounded-[12px]'}
                /> */}
            <div className="flex items-center justify-center gap-2">
                <div className="h-[23px] w-[23px] bg-laranjaum rounded-[12px]"></div>
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <p className="text-body2 font-georama text-branquin font-bold">{pessoa}</p>
                        <p className="text-body2 font-georama text-branquin">{empresa}</p>
                    </div>
                    <p className="text-body2 font-georama text-cinza">{servico}</p>
                </div>
            </div>
        </div>
    </>

}
