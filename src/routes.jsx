import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import E01 from "./pages/ex01";
import E02 from "./pages/ex02";
import E04 from "./pages/ex04";
import E05 from "./pages/ex05";
import E10 from "./pages/ex10";
import E11 from "./pages/ex11";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/e01' element={<E01 />} />
                <Route path='/e02' element={<E02 />} />
                <Route path='/e04' element={<E04 />} />
                <Route path='/e05' element={<E05 />} />
                <Route path='/e10' element={<E10 />} />
                <Route path='/e11' element={<E11 />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }