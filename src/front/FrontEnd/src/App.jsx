import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CadastroLoja from "./pages/CadastroLoja.jsx";
import CadastroLoginMaster from "./pages/CadastroLoginMaster.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para o cadastro do gerente */}
        <Route path="/cadastro-gerente" element={<CadastroLoginMaster />} />
        
        {/* Rota para o cadastro da loja */}
        <Route path="/cadastro-loja" element={<CadastroLoja />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/" element={<CadastroLoginMaster />} />
      </Routes>
    </Router>
  );
}

export default App;
