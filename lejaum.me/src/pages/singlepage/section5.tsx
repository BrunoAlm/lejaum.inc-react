import Avaliacao from "../../components/avaliacao";
import Footer from "../../components/footer";

export default function Section5({ id = "" }) {
    return (
        <>
            {/* Início das Avaliações */}
            <div id={id} className="h-[calc(100vh-45px)] pt-8 w-full bg-pretao flex flex-col justify-between">
                {/* justify-between para deixa o footer no final  */}
                <div>
                    <p className="text-home font-black text-laranjaum text-center font-georama">Avaliações</p>
                    <p className="text-body2 text-branquin text-center font-georama">Veja algumas avaliações de nossos clientes:</p>
                    <div className="w-full mt-4 flex flex-col items-center content-center gap-5">
                        <Avaliacao pessoa="Letícia |" empresa=" Janfíe Boutique" servico="Naming e Identidade visual" />
                        <Avaliacao pessoa="Rheiner |" empresa=" Musta Grill" servico="Identidade visual e Social Media" />
                        <Avaliacao pessoa="Cliente Top |" empresa=" Loja mais top" servico="Identidade visual e outro serviço ai" />
                        <Avaliacao pessoa="Cliente Top |" empresa=" Loja mais top" servico="Identidade visual e outro serviço ai" />
                    </div>
                </div>
                <Footer />
            </div> {/* FINAL */}
        </>
    )
}