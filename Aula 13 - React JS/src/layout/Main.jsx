import { Route, Routes } from "react-router-dom";
import Home from "../Home";
function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </main>
    )
}

export default Main;