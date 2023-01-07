export default function Footer() {
    return <>
        <div className={"mt-10 bg-quase-cinza rounded-t-[30px] py-5 flex flex-col gap-1 items-center justify-center"}>
            {/* dados da empresa */}
            <div>
                <p className="text-cinza font-georama text-body2 text-center">Lejaum Marketing e Design LTDA</p>
                <p className="text-cinza font-georama text-body2  text-center">45.522.499/0001-35</p>
            </div>
            {/* redes sociais */}
            <div className="flex items-center gap-1 underline text-cinza font-georama text-body2">
                <a href="http://">Facebook |</a>
                <a href="http://">Instagram |</a>
                <a href="http://">Behance</a>
            </div>
            <p className="text-cinza font-georama text-body2">Feito com ❤️ por lejaum</p>
        </div>
    </>

}
