import React from "react";
import "./Features.css";
//import caixa from "../../assets/images/caixa.png";
//import pessoa from "../../assets/images/pessoa.png";
//import dedo from "../../assets/images/dedo.png";

const Features = () => {
  const features = [
    { icon: "fa-box", title: "Estoque", info: "Union St, Seattle, WA 98101, United States"},
    { icon: "fa-hand-point-up", title: "Intuitivo", info: "(110) 111-1010"},
    { icon: "fa-users-cog", title: "Gestão de Usuários", info: "Contact@HydraYTech.com"},
  ];

  return (
    <section className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <i className={`fas ${feature.icon}`}></i>
          <div>
            <div className="feature-title">{feature.title}</div>
            <div className="feature-info">{feature.info}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
