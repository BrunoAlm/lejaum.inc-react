import ExpandablePanel from "../../components/expansivePanel/expansive_panel";
import { panelData } from "../../components/expansivePanel/panel_data";

export default function Section4({ id = "" }) {


    
    var ultimoClicado = ['']

    return (
        <>
            {/* Início das Soluções */}
            <div id={id} className="h-full w-full bg-pretao py-8">
                <p className="text-home font-black text-laranjaum text-center font-georama">Soluções</p>
                <p className="text-body2 text-branquin text-center font-georama">Veja o porque somos a melhor solução para a sua empresa:</p>

                <div className="flex flex-col gap-3 my-4 items-center">
                    {panelData.map(({ id, title, content }) => (<ExpandablePanel id={id} ult_click={ultimoClicado} title={title} content={content} />))}
                </div>
            </div> {/* FINAL */}
        </>
    )
}
