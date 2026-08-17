import React from 'react';
import { MapPin, Phone, Mail, Award, Calendar } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <MapPin size={14} className="text-gold" />
            <span>Pillaiyarkulam, Srivilliputhur, Virudhunagar Dt.</span>
          </div>
          <div className="top-bar-item">
            <Award size={14} className="text-gold" />
            <span>Affiliated with Madurai Kamaraj University</span>
          </div>
        </div>
        
        <div className="top-bar-right">
          <div className="top-bar-item">
            <Phone size={14} />
            <span>04563 - 260555</span>
          </div>
          <div className="top-bar-item">
            <Mail size={14} />
            <span>gasc.srivilliputhur@gmail.com</span>
          </div>
          <div className="top-bar-item">
            <Calendar size={14} />
            <span className="badge-ay">Academic Year 2026–2027</span>
          </div>
        </div>
      </div>
    </div>
  );
}
