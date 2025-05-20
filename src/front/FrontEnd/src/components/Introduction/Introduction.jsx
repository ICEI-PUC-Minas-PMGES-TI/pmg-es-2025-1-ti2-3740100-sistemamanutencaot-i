import React from "react";
import "./Introduction.css";
import seta from "../../assets/images/seta-direita.png"
import imagem from "../../assets/images/landingpage2.png"

const Introduction = () => {
  return (
    <section className="introduction-container">
      <div className="introduction-left">
        <div className="section-header">
          <div className="top">
            <h2>INTRODUÇÃO</h2>
          </div>
          <div className="bottom">
            <h2>AO MANAGER.IO</h2>

            <img src={seta} alt="seta" />
          </div>
        </div>

        <div className="image-container">
          <img src={imagem} alt="" />
        </div>

        <div className="section-header">
          <h2>QUEM CRIOU</h2>
          <div className="bottom-bottom">
            <h2>O MANAGER.IO?</h2>
            <img src={seta} alt="seta" />
          </div>
        </div>
      </div>

      <div className="introduction-right">
        <p className="intro-text">
          O Manager.IO é um sistema desenvolvido para otimizar a rotina de
          assistências técnicas de informática. Com uma interface simples e
          intuitiva, ele permite o controle completo de serviços, clientes e
          estoque. Nossa missão é facilitar a gestão e melhorar a eficiência do
          seu atendimento técnico.
        </p>

        <div className="content-block">
          <h3 className="subtitle-blue">O QUE É</h3>
          <h4 className="subtitle-purple">MANAGER.IO</h4>
          <p className="description">
            O nome Manager.IO combina duas ideias principais: "Manager", que em
            inglês significa "gerente" ou "administrador", e ".IO", uma extensão
            muito usada por aplicações e sistemas digitais — remetendo ao
            conceito de input/output (entrada/saída) na computação. A escolha do
            nome reflete diretamente o propósito do sistema: ser uma ferramenta
            que gerencia e organiza as principais entradas e saídas de uma
            assistência técnica, como serviços, clientes e peças. Esse projeto
            foi desenvolvido no contexto acadêmico por estudantes de Engenharia
            de Software, com o objetivo de aplicar conceitos de front-end,
            design responsivo e lógica de sistemas em um caso real. Mais do que
            um exercício técnico, o Manager.IO busca resolver um problema
            prático enfrentado por pequenas e médias lojas do setor de
            informática.
          </p>
          <button className="button">COMEÇAR AGORA</button>
        </div>

        <p className="intro-text">
          O Manager.IO é um projeto acadêmico desenvolvido por alunos do 2º
          período do curso de Engenharia de Software da PUC Minas. Seu objetivo
          é integrar teoria e prática por meio da criação de uma aplicação real
          para gestão de assistências técnicas.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
