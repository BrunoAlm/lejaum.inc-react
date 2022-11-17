export default function Botao({ text = '' }) {
    return (
        <>
            <div className="bg-pretao border-branquin border-2 w-44 py-2 rounded-3xl cursor-pointer">
                <p className="text-center text-branquin text-BUTTON uppercase">{text}</p>
            </div>
        </>
    )
}