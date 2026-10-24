import React, { useState } from 'react';
import { X } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function MemoriesPage() {
  const { memoriesPage } = websiteData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="slide-content-wrapper memories-page-wrapper">
      {/* Top Header Row: Page indicator on left, handwritten scribble on right */}
      <div className="memories-top-bar">
        <span className="page-indicator-badge">{memoriesPage.pageNumber}</span>
        <div className="memories-top-scribble">
          <div>{memoriesPage.topRightLine1}</div>
          <div>{memoriesPage.topRightLine2}</div>
        </div>
      </div>

      {/* Title block with generous spacing matching Image 2 */}
      <div className="memories-title-block">
        <h2 className="memories-title-main">{memoriesPage.title}</h2>
        <div className="memories-title-cursive">{memoriesPage.subtitle}</div>
        <div className="memories-description">
          {memoriesPage.description.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>

      <div className="memories-divider"></div>

      {/* Exactly 3 Polaroids in a clean row (3 صور بس) */}
      <div className="polaroid-grid-three">
        {memoriesPage.memories.map((item) => (
          <div
            key={item.id}
            className="polaroid-card"
            style={{ transform: `rotate(${item.rotation}deg)` }}
            onClick={() => setSelectedPhoto(item)}
            title="اضغط للتكبير"
          >
            {/* Scotch tape on top */}
            <div className="polaroid-tape"></div>

            <div className="polaroid-img-wrapper">
              <img
                src={item.image}
                alt={item.caption}
                className="polaroid-img"
                loading="lazy"
              />
            </div>

            <div className="polaroid-caption-box">
              <p className="polaroid-caption-text">{item.caption}</p>
              <p className="polaroid-year">{item.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="إغلاق"
            >
              <X size={28} />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.caption}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <p style={{ fontWeight: 600 }}>{selectedPhoto.caption}</p>
              <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>{selectedPhoto.year}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
