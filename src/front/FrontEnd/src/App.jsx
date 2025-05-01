import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CadastroLoja from "./pages/CadastroLoja.jsx";
import CadastroLoginMaster from "./pages/CadastroLoginMaster.jsx";
import CadastroTecnico from "./pages/CadastroTecnico.jsx";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Rota para o cadastro da loja */}
        <Route path="/cadastro-loja" element={<CadastroLoja />} />
        
        {/* Rota para o cadastro do gerente */}
        <Route path="/cadastro-tecnico" element={<CadastroTecnico />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/" element={<CadastroTecnico />} />
      </Routes>
    </Router>
  );
}

export default App;
