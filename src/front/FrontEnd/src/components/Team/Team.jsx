import React from "react";
import "./Team.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";

const Team = () => {
  
  const teamMembers = [
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "João Ricardo Fiuza",
      alt: "BackEnd",
      linkedin: "https://www.linkedin.com/in/joao-ricardo-fiuza",
      github: "https://github.com/joaoricardofiuza",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "João Pedro Maciel",
      alt: "BackEnd & FrontEnd",
      linkedin: "https://www.linkedin.com/in/joao-pedro-maciel",
      github: "https://github.com/joaopedromaciel",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Gabriel Victor Lopes",
      alt: "FrontEnd",
      linkedin: "https://www.linkedin.com/in/gabrielvictorsouza/",
      github: "https://github.com/GabrielVSL",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Igor Rodrigo Costa",
      alt: "FrontEnd",
      linkedin: "https://www.linkedin.com/in/igor-rodrigo-costa",
      github: "https://github.com/igorrodrigo",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Francisco Rafael",
      alt: "BackEnd & FrontEnd",
      linkedin: "https://www.linkedin.com/in/francisco-rafael",
      github: "https://github.com/franciscorafael",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Felipe Augusto Mendes",
      alt: "BackEnd",
      linkedin: "https://www.linkedin.com/in/felipe-augusto-mendes",
      github: "https://github.com/felipeaugustomendes",
    },
  ];

  return (
    <section className="team-container">
      <h2 className="team-title">Nosso Time</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.alt} className="member-photo" />
            <h4 className="member-name">{member.name}</h4>
            <p className="member-bio">{member.alt}</p>
            <div className="card-cta">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" title="GitHub" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
