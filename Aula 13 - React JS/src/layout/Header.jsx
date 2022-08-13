function Header() {
    return (
        <header>

            <div className="topo">
                .
                <div className="topo-text">
                    <h1>Loja virtual Senac</h1>
                </div>
                <div className="vitrine-top">
                    <a href="/vitrine">Vitrine</a>
                </div>
                <div className="FaleConosco">
                    <a href="/contato">Fale Conosco</a>
                </div>
                <div className="carrinho-top">
                    <a href="/carrinho">Carrinho</a>
                </div>
                <div className="carrinho-top">
                    <a href="/formulario">Endereço</a>
                </div>


            </div>
            <div id="produto-lista">

            </div>
        </header>

    )
}

export default Header;