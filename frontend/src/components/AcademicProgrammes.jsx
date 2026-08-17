import React from 'react';
import { BookOpen, Languages, Coins, Calculator, Laptop, ArrowRight } from 'lucide-react';

const programmes = [
  {
    code: "TAM",
    name: "Department of Tamil",
    tamil: "தமிழ்த்துறை",
    degree: "B.A. Tamil",
    icon: BookOpen,
    desc: "Fostering Tamil literature, classical linguistics, regional cultural heritage, and advanced creative writing."
  },
  {
    code: "ENG",
    name: "Department of English",
    tamil: "ஆங்கிலத்துறை",
    degree: "B.A. English",
    icon: Languages,
    desc: "Developing global communicative competence, literary analysis, critical thinking, and professional language skills."
  },
  {
    code: "COM",
    name: "Department of Commerce",
    tamil: "வணிகவியல் துறை",
    degree: "B.Com",
    icon: Coins,
    desc: "Building strong foundations in accounting, corporate laws, business management, auditing, and financial analysis."
  },
  {
    code: "MAT",
    name: "Department of Mathematics",
    tamil: "கணிதத்துறை",
    degree: "B.Sc. Mathematics",
    icon: Calculator,
    desc: "Cultivating logical reasoning, mathematical modeling, numerical analysis, problem-solving, and quantitative aptitude."
  },
  {
    code: "CSC",
    name: "Department of Computer Science",
    tamil: "கணிணி அறிவியல் துறை",
    degree: "B.Sc. Computer Science",
    icon: Laptop,
    desc: "Imparting expertise in programming logic, web engineering, database management, software design, and modern technologies."
  }
];

export default function AcademicProgrammes() {
  return (
    <section className="section-padding programmes-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Undergraduate Programmes</span>
          <h2 className="section-title heading-serif">Academic Disciplines Offered</h2>
          <p className="section-subtitle">
            Affiliated with Madurai Kamaraj University, providing three-year degree programs tailored for academic excellence and employability.
          </p>
        </div>

        <div className="programmes-grid">
          {programmes.map((p) => {
            const IconComponent = p.icon;
            return (
              <div className="programme-card" key={p.code}>
                <div>
                  <div className="programme-header">
                    <div className="programme-icon">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <span className="programme-degree">{p.degree}</span>
                      <h3 className="programme-title">{p.name}</h3>
                      <p className="programme-tamil">{p.tamil}</p>
                    </div>
                  </div>
                  <p className="programme-desc">{p.desc}</p>
                </div>

                <a href={`/departments#${p.code.toLowerCase()}`} className="btn btn-outline btn-sm">
                  View Department <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
