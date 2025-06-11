import HomeTecnico from "./pages/HomeTecnico.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CadastroLoja from "./pages/CadastroLoja.jsx";

import CadastroTecnico from "./pages/CadastroTecnico.jsx";
import CadastroGerente from "./pages/CadastroLoginMaster.jsx";
import TelaLogin from "./components/LoginPage/LoginPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ConfigGerente from "./pages/ConfiguracoesGerente.jsx";
import NovaOrdemServico from "./pages/OrdemServico.jsx";
import RequisicaoPecas from "./pages/RequesicaoPeca.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import Estoque from "./pages/Estoque.jsx"
import Reparos from "./pages/Reparos.jsx"
import CadastroCliente from "./pages/CadastroCliente.jsx";
import DetalhesReparo from "./pages/DiagnosticoServico.jsx";
import Teste1 from "./pages/HistoricoGerente.jsx";
import HomeGerente from "./pages/MainGerente.jsx"
import EditarTecnico from "./components/Usuarios/EditarTecnico";
import EditarCliente from "./components/Usuarios/EditarCliente";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para o cadastro da loja */}
        <Route path="/cadastro-loja" element={<CadastroLoja />} />

        {/* Rota para o cadastro de gerente */}
        <Route path="/cadastro-gerente" element={<CadastroGerente />} />

        {/* Rota para o cadastro de técnico */}
        <Route path="/cadastro-tecnico" element={<CadastroTecnico />} />

        {/* Rota para o cadastro de cliente */}
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

        <Route path="/detalhes-reparo/:id" element={<DetalhesReparo />} />

        <Route path="/reparos-semana" element={<Teste1 />} />

        <Route path="/home-gerente" element={<HomeGerente />} />

        <Route path="/editar-tecnico/:id" element={<EditarTecnico />} />
        
        <Route path="/editar-cliente/:id" element={<EditarCliente />} />

        {/* Rota raiz (opcional - pode redirecionar) */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
