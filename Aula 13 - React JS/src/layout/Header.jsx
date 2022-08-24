
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>

            <div className="topo">
                .
                <div className="topo-text">
                    <h1>Loja virtual Senac</h1>
                </div>
                <div className="menu-header">
                    <ul>
                        <li><Link to="/vitrine">Vitrine</Link></li>
                        <li><Link to="/contato">Fale Conosco</Link></li>
                        <li><Link to="/carrinho">Carrinho</Link></li>
                        <li><Link to="/formulario">Endereço</Link></li>
                    </ul>
                </div>
            </div>
            <div id="produto-lista">

            </div>
        </header>

    )
}

export default Header;