import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AtribuirManutencao.css";

const AtribuirManutencao = ({ ordemId, onClose, onAtribuido }) => {
  const [tecnicos, setTecnicos] = useState([]);
  const [tecnicoSelecionado, setTecnicoSelecionado] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/tecnicos")
      .then(response => {
        setTecnicos(response.data);
        setCarregando(false);
      })
      .catch(error => {
        console.error("Erro ao buscar técnicos:", error);
        setErro("Erro ao carregar técnicos");
        setCarregando(false);
      });
  }, []);

  const handleAtribuir = () => {
    if (!tecnicoSelecionado) {
      setErro("Selecione um técnico");
      return;
    }

    axios.put(`http://localhost:8080/ordem-servicos/${ordemId}/atribuir`, { tecnicoId: tecnicoSelecionado })
      .then(() => {
        onAtribuido(ordemId, tecnicoSelecionado);
        onClose();
      })
      .catch(error => {
        console.error("Erro ao atribuir ordem:", error);
        setErro("Erro ao atribuir ordem de serviço");
      });
  };

  return (
    <div className="modal-atribuir">
      <div className="conteudo-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Atribuir Manutenção</h2>
        
        {erro && <p className="erro">{erro}</p>}
        
        <div className="form-group">
          <label htmlFor="tecnico">Selecione o técnico:</label>
          {carregando ? (
            <p>Carregando técnicos...</p>
          ) : (
            <select
              id="tecnico"
              value={tecnicoSelecionado}
              onChange={(e) => setTecnicoSelecionado(e.target.value)}
              className="select-tecnico"
            >
              <option value="">Selecione um técnico</option>
              {tecnicos.map(tecnico => (
                <option key={tecnico.id} value={tecnico.id}>
                  {tecnico.nome}
                </option>
              ))}
            </select>
          )}
        </div>
        
        <div className="botoes-modal">
          <button onClick={handleAtribuir} className="botao-atribuir">
            Atribuir
          </button>
          <button onClick={onClose} className="botao-cancelar">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AtribuirManutencao;