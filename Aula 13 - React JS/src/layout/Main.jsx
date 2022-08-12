import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Carrinho from "../components/Carrinho";
import FaleConosco from "../views/FaleConosco";
import Vitrine from "../components/Vitrine";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contato" element={<FaleConosco />}></Route>
                <Route path="/carrinho" element={<Carrinho />}></Route>
                <Route path="/vitrine" element={<Vitrine />}></Route>
            </Routes>
        </main>
    )
}

export default Main;