import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      img: "https://storage.googleapis.com/a1aa/image/6c5d8f52-be7c-4595-aa7e-b89d08868497.jpg",
      name: "João Ricardo",
      alt: "Pessoa com óculos de realidade virtual",
    },
    // ... outros membros
  ];

  return (
    <section className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.img} alt={member.alt} className="member-photo" />
          <h4 className="member-name">{member.name}</h4>
          <p className="member-bio">
            Vitae sapien pellentesque habitant morbi nunc...
          </p>
          <button className="card-cta">TRY IT NOW</button>
        </div>
      ))}
    </section>
  );
};

export default Team;
