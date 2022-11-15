export default function Botao({ text = '' }) {
    return (
        <>
            <div className="bg-laranjaum border-pretao w-44 py-2 rounded-3xl cursor-pointer">
                <p className="text-center text-branquin text-BUTTON uppercase">{text}</p>
            </div>
        </>
    )
}