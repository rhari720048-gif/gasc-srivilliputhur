import React from 'react';
import { Eye, Target, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag" style={{ backgroundColor: 'rgba(197, 168, 128, 0.15)', color: 'var(--secondary-gold)' }}>
            Institutional Philosophy
          </span>
          <h2 className="section-title heading-serif" style={{ color: '#FFFFFF' }}>
            Our Vision & Mission
          </h2>
          <p className="section-subtitle" style={{ color: '#CBD5E1' }}>
            Guided by principles of ethical learning, social responsibility, and rural empowerment.
          </p>
        </div>

        <div className="vm-grid">
          {/* Vision Card */}
          <div className="vm-card">
            <div className="vm-icon-badge">
              <Eye size={28} />
            </div>
            <h3 className="vm-title heading-serif">கல்லூரியின் பார்வை (Vision)</h3>
            
            <p className="vm-text-tamil">
              “பக்தியுடன் கல்வி கற்று,<br />
              பண்புடன் பொருள் ஈட்டி,<br />
              தன்மையுடன் தைரியம் வளர்த்து,<br />
              அன்புடன் நல் சமூகப்பணி செய்து,<br />
              ஆனந்தமாய் இரு!”
            </p>

            <p className="vm-text-english">
              “Learn with devotion, earn wealth with virtue, cultivate courage with humility, perform noble social service with love, and live with true joy!”
            </p>
          </div>

          {/* Mission Card */}
          <div className="vm-card">
            <div className="vm-icon-badge">
              <Target size={28} />
            </div>
            <h3 className="vm-title heading-serif">கல்லூரியின் பணி (Mission)</h3>

            <p className="vm-text-tamil">
              “கிராமப்புற ஏழை எளிய மாணவ மாணவியர்களை கல்வியின் மூலம் உயர்ந்த அந்தஸ்தை பெற செய்தல்.”
            </p>

            <p className="vm-text-english">
              “Empowering rural, poor, and economically underprivileged students to attain high socio-economic status and self-reliance through quality higher education.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
