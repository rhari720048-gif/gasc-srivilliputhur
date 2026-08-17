import React from 'react';
import { Cpu, Cloud, Award, Palette, BarChart3, Binary, Compass, GraduationCap } from 'lucide-react';

const skillsList = [
  { id: 1, title: "AI Driven Digital Marketing", icon: Cpu, desc: "Modern digital strategy, SEO, content automation & AI marketing tools." },
  { id: 2, title: "Cloud Computing", icon: Cloud, desc: "Cloud architecture, infrastructure deployment, server management & security." },
  { id: 3, title: "Employability Skills", icon: Award, desc: "Soft skills, interview prep, workplace ethics, resume crafting & communication." },
  { id: 4, title: "Fundamental of Design Skills", icon: Palette, desc: "UI/UX principles, graphic design basics, visual layout & digital media." },
  { id: 5, title: "Data Analytics & Visualization", icon: BarChart3, desc: "Data processing, Business Intelligence dashboards, Excel & Power BI fundamentals." },
  { id: 6, title: "Data Science with Python", icon: Binary, desc: "Python programming, statistical analysis, machine learning basics & data modeling." }
];

export default function SkillsSection() {
  return (
    <section className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" style={{ backgroundColor: 'rgba(217, 119, 6, 0.12)', color: 'var(--accent-gold)' }}>
            TN Skills Initiative (Naan Mudhalvan)
          </span>
          <h2 className="section-title heading-serif">Building Skills Beyond the Classroom</h2>
          <p className="section-subtitle">
            Integrated into semester coursework under the <strong>TN Skills (தமிழ்நாடு திறன்மேம்பாடு)</strong> scheme to equip every student with high-demand job skills.
          </p>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div className="skill-card" key={skill.id}>
                <div className="skill-number">
                  <SkillIcon size={18} />
                </div>
                <div className="skill-info">
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Career Guidance Banner */}
        <div className="career-banner">
          <div className="career-banner-text">
            <h3>Final-Year Career Guidance & Placement Training</h3>
            <p>
              Dedicated career counseling sessions, mock interviews, and industry readiness workshops are conducted for all final-year students to ensure successful career placement.
            </p>
          </div>
          <a href="/services#career" className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            <Compass size={16} /> Placement Cell Details
          </a>
        </div>
      </div>
    </section>
  );
}
