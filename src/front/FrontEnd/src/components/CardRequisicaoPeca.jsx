import React from "react";
import { Card, Table, Badge, Button } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

function CardRequisicaoPeca({ numero = "002", data = "22/10/2025", status = "Pendente", componentes = [], observacoes }) {
  const badgeColor = {
    Pendente: "warning",
    Aceito: "success",
    Recusado: "danger",
  };

  return (
    <Card className="shadow-sm rounded" style={{ width: "250px", fontSize: "0.9rem" }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <Card.Title className="mb-0" style={{ fontWeight: "bold", color: "#09095B" }}>
              #{numero}
            </Card.Title>
            <small>{data}</small>
          </div>
          <Badge bg={badgeColor[status] || "secondary"}>{status}</Badge>
        </div>

        <Table striped borderless size="sm" className="text-center mb-2">
          <thead>
            <tr style={{ backgroundColor: "#09095B", color: "white", fontSize: "0.85rem" }}>
              <th>Componente</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {componentes.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.qtd}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>Observações:</div>
        <div
          style={{
            backgroundColor: "#f2f2f2",
            padding: "5px 10px",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        >
          {observacoes}
        </div>

        <Button variant="primary" className="w-100 d-flex justify-content-between align-items-center">
          Ver Detalhes <FaInfoCircle />
        </Button>
      </Card.Body>
    </Card>
  );
}

const dadosMockados = [
  {
    numero: "001",
    data: "20/05/2025",
    status: "Aceito",
    componentes: [
      { nome: "Parafuso", qtd: 10 },
      { nome: "Porca", qtd: 5 },
    ],
    observacoes: "Verificar a compatibilidade.",
  },
  {
    numero: "002",
    data: "22/05/2025",
    status: "Pendente",
    componentes: [
      { nome: "Motor", qtd: 1 },
      { nome: "Rolamento", qtd: 4 },
    ],
    observacoes: "Prioridade alta.",
  },
  {
    numero: "003",
    data: "25/05/2025",
    status: "Recusado",
    componentes: [
      { nome: "Bateria", qtd: 2 },
    ],
    observacoes: "Requisição negada por falta de estoque.",
  },
];

export default function ListaRequisicoes() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {dadosMockados.map((req) => (
        <CardRequisicaoPeca
          key={req.numero}
          numero={req.numero}
          data={req.data}
          status={req.status}
          componentes={req.componentes}
          observacoes={req.observacoes}
        />
      ))}
    </div>
  );
}