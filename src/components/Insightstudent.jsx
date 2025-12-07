import React from "react";
import "../styles/Insightstudent.css"; 
import studentImage from "../Assets/courses-img/rubikcourse.png"; 

const StudentsAchievements = () => {
  const students = [
    {
      id: 1,
      name: "Name",
      prize: "prize in",
      description:
        "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    },
    {
      id: 2,
      name: "Name",
      prize: "prize in",
      description:
        "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    },
    {
      id: 3,
      name: "Name",
      prize: "prize in",
      description:
        "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    },
  ];

  return (
    <section className="insightstudent">
      <h2 className="insightstudent-title">
        Students <span className="insightstudent-highlight">Achievements</span>
      </h2>
      <p className="insightstudent-subtitle">Celebrating Our Star Performers</p>
      <div className="insightstudent-container">
        {students.map((student) => (
          <div key={student.id} className="insightstudent-card">
            <div className="insightstudent-image-wrapper">
              <img
                src={studentImage}
                alt={student.name}
                className="insightstudent-image"
              />
            </div>
            <h3 className="insightstudent-name">{student.name}</h3>
            <p className="insightstudent-prize">{student.prize}</p>
            <p className="insightstudent-description">{student.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentsAchievements;