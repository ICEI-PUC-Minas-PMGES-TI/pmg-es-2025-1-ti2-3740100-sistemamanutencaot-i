import React from "react";
import "./Features.css";
import caixa from "../../assets/images/caixa.png";
import pessoa from "../../assets/images/pessoa.png";
import dedo from "../../assets/images/dedo.png";

const Features = () => {
  const features = [
    {
      icon: caixa,
      title: "Estoque",
      info: "Acompanhe em tempo real peças, equipamentos e suprimentos disponíveis na loja.",
    },
    {
      icon: dedo,
      title: "Intuitivo",
      info: "Navegação simples e rápida, pensado para agilizar o atendimento e organização.",
    },
    {
      icon: pessoa,
      title: "Usuários",
      info: "Gerencie dados dos clientes, histórico de serviços e acompanhe solicitações com facilidade.",
    },
  ];

  return (
    <section className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature">
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <div className="feature-desc">
              <div className="feature-title">{feature.title}</div>
              <div className="feature-info">{feature.info}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
