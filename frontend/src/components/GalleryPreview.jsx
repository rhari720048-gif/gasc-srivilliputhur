import React from 'react';
import { Image, ArrowRight } from 'lucide-react';

const galleryImages = [
  { id: 1, title: "Official College Emblem", category: "Institutional Identity", src: "/assets/college_logo.png", fit: "contain" },
  { id: 2, title: "Dr. Suba. Saravanan (Principal i/c)", category: "College Leadership", src: "/assets/principal_saravanan.jpg", fit: "cover" },
  { id: 3, title: "Permanent Campus Building (Pillaiyarkulam)", category: "College Campus", src: "/assets/college_building_hd.png", fit: "cover" }
];

export default function GalleryPreview() {
  return (
    <section className="section-padding gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visual Showcase</span>
          <h2 className="section-title heading-serif">Campus Life & Gallery Preview</h2>
          <p className="section-subtitle">
            Authentic photographs of Government Arts and Science College, Srivilliputhur.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <div className="gallery-item" key={img.id} style={{ backgroundColor: '#FFF' }}>
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ objectFit: img.fit || 'cover', padding: img.fit === 'contain' ? '1.5rem' : 0 }} 
              />
              <div className="gallery-caption">
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary-gold)', display: 'block' }}>
                  {img.category}
                </span>
                {img.title}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/gallery" className="btn btn-outline">
            <Image size={16} /> View Full Photo Gallery <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
