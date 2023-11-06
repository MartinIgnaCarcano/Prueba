import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    )
}

export default AppRoutes;