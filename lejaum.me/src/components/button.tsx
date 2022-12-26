export default function CustomButton({ text = '', href = '', target = '_self', onClick = ()=>{} }) {
    return (
        <>
            <a href={href} target={target} className="bg-pretao border-branquin border-2 w-44 h-fit py-2 rounded-3xl cursor-pointer" onClick={onClick}>
                <p className="text-center text-branquin text-BUTTON uppercase">{text}</p>
            </a>
        </>
    )
}