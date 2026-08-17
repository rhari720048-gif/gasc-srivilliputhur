import React from 'react';
import { Calendar as CalendarIcon, ArrowRight, Clock } from 'lucide-react';

const milestones = [
  { date: "15 June 2026", day: "Monday", event: "Reopening Day for Odd Semester (I, III, V)", type: "Academic" },
  { date: "10 August 2026", day: "Monday", event: "First Internal Assessment Examinations Begin", type: "Examination" },
  { date: "24 September 2026", day: "Thursday", event: "Second Internal Assessment Examinations Begin", type: "Examination" },
  { date: "15 October 2026", day: "Thursday", event: "Model Examinations Commencement (Odd Semester)", type: "Examination" },
  { date: "27 October 2026", day: "Tuesday", event: "Last Working Day for Odd Semester (90 Working Days)", type: "Academic" },
  { date: "23 November 2026", day: "Monday", event: "Reopening Day for Even Semester (II, IV, VI)", type: "Academic" },
  { date: "07 April 2027", day: "Wednesday", event: "Last Working Day for Even Semester", type: "Academic" }
];

export default function AcademicCalendar() {
  return (
    <section className="section-padding calendar-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Key Milestones</span>
          <h2 className="section-title heading-serif">Academic Calendar 2026–2027</h2>
          <p className="section-subtitle">
            Important dates, continuous internal assessment (CIA) schedules, model examinations, and working days.
          </p>
        </div>

        <div className="calendar-timeline">
          {milestones.map((m, idx) => (
            <div className="calendar-card" key={idx}>
              <div className="calendar-date-box">
                <span className="date-pill">{m.date}</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>{m.day}</span>
              </div>
              <div className="calendar-event-text">
                {m.event}
              </div>
              <span className={`calendar-type-tag ${m.type}`}>
                {m.type}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/academic#calendar" className="btn btn-primary">
            <CalendarIcon size={16} /> View Full Academic Calendar (PDF) <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
