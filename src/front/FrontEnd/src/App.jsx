import HomeTecnico from "./pages/HomeTecnico.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CadastroLoja from "./pages/CadastroLoja.jsx";

import CadastroTecnico from "./pages/CadastroTecnico.jsx";
import TelaLogin from "./components/TelaLogin.jsx";

import ConfigGerente from "./pages/ConfiguracoesGerente.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para o cadastro da loja */}
        <Route path="/cadastro-loja" element={<CadastroLoja />} />

        {/* Rota para o cadastro de técnico */}
        <Route path="/cadastro-tecnico" element={<CadastroTecnico />} />

        {/* Rota para o login */}
        <Route path="/login" element={<TelaLogin />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/home-tecnico" element={<HomeTecnico />} />

        <Route path="/configuracoes-gerente" element={<ConfigGerente />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/" element={<CadastroTecnico />} />
      </Routes>
    </Router>
  );
}

export default App;
