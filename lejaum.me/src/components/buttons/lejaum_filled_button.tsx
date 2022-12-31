export default function FilledButton({ text = '', href = '', target = '_self'}) {
    return (
        <>
            <a href={href} target={target} className="bg-laranjaum w-44 h-fit py-2 rounded-3xl cursor-pointer" >
                <p className="text-center text-branquin text-BUTTON uppercase">{text}</p>
            </a>
        </>
    )
}