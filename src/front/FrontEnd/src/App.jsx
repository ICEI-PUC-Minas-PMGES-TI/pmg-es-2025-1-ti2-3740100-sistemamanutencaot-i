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
import DetalhesReparo from "./pages/DiagnosticoServico.jsx";
import Teste1 from "./components/HomeGerente/HomeGerente.jsx";
import HomeGerente from "./components/HomeGerente/HomeGerente.jsx"

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
        <Route path="/login-tecnico" element={<TelaLogin />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/home-tecnico" element={<HomeTecnico />} />

        <Route path="/configuracoes-gerente" element={<ConfigGerente />} />

        <Route path="/landing-page" element={<LandingPage />} />

        <Route path="/nova-ordem-servico" element={<NovaOrdemServico />} />

        <Route path="/requisicao-peca" element={<RequisicaoPecas />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/estoque" element={<Estoque />} />

        <Route path="/reparos" element={<Reparos />} />

        <Route path="/detalhes-reparo" element={<DetalhesReparo />} />

        <Route path="/teste" element={<Teste1 />} />

        <Route path="/home-gerente" element={<HomeGerente />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
