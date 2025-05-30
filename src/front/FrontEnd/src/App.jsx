import HomeTecnico from "./pages/HomeTecnico.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CadastroLoja from "./pages/CadastroLoja.jsx";

import CadastroTecnico from "./pages/CadastroTecnico.jsx";
import TelaLogin from "./components/TelaLogin.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ConfigGerente from "./pages/ConfiguracoesGerente.jsx";
import NovaOrdemServico from "./pages/OrdemServico.jsx";
import RequisicaoPecas from "./pages/RequesicaoPeca.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import Estoque from "./pages/Estoque.jsx"
import Reparos from "./pages/Reparos.jsx"
import CadastroCliente from "./pages/CadastroCliente.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para o cadastro da loja */}
        <Route path="/cadastro-loja" element={<CadastroLoja />} />

        {/* Rota para o cadastro de técnico */}
        <Route path="/cadastro-tecnico" element={<CadastroTecnico />} />

        <Route path="/cadastro-cliente" element={<CadastroCliente />} />

        {/* Rota para o login */}
        <Route path="/login" element={<TelaLogin />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/home-tecnico" element={<HomeTecnico />} />

        <Route path="/configuracoes-gerente" element={<ConfigGerente />} />

        <Route path="/landing-page" element={<LandingPage />} />

        <Route path="/nova-ordem-servico" element={<NovaOrdemServico />} />

        <Route path="/requisicao-peca" element={<RequisicaoPecas />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/estoque" element={<Estoque />} />

        <Route path="/reparos" element={<Reparos />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/" element={<Estoque />} />
      </Routes>
    </Router>
  );
}

export default App;
