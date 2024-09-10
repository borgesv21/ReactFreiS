import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import E01 from "./pages/ex01";
import E11 from "./pages/ex11";
import E02 from "./pages/ex02";
import E04 from "./pages/ex04";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/e01' element={<E01 />} />
                <Route path='/e11' element={<E11 />} />
                <Route path='/e02' element={<E02 />} />
                <Route path='/e04' element={<E04 />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }