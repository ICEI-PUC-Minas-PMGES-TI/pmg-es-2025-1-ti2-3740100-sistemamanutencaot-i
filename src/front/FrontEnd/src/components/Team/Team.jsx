import React from "react";
import "./Team.css";
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/github.png"

const Team = () => {
  const teamMembers = [
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "João Ricardo Fiuza",
      alt: "BackEnd",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "João Pedro Maciel",
      alt: "BackEnd & FrontEnd",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Gabriel Victor Lopes",
      alt: "FrontEnd",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Igor Rodrigo Costa",
      alt: "FrontEnd",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Francisco Rafael",
      alt: "BackEnd & FrontEnd",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "Felipe Augusto Mendes",
      alt: "BackEnd",
    },
  ];

  return (
    <section className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.img} alt={member.alt} className="member-photo" />
          <h4 className="member-name">{member.name}</h4>
          <p className="member-bio">{member.alt}</p>
          <div className="card-cta">
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
            
          </div>
        </div>
      ))}
    </section>
  );
};

export default Team;
