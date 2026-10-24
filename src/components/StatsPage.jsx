import React from 'react';
import { websiteData } from '../data/websiteData';

export default function StatsPage() {
  const { statsPage } = websiteData;

  return (
    <div className="slide-content-wrapper">
      {/* Top row with page indicator & handwritten note */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
        <span className="page-indicator-badge">{statsPage.pageNumber}</span>
        <div className="handwritten-scribble-top">
          {statsPage.topRightNote}
        </div>
      </div>

      <div className="stats-page-layout">
        {/* Left Side: Title & Sticky Tape Note */}
        <div className="stats-left-side">
          <div className="page-main-header" style={{ direction: 'ltr', textAlign: 'left' }}>
            <h2 className="title-primary">{statsPage.title}</h2>
            <div className="title-script">{statsPage.subtitle}</div>
          </div>

          {/* Sticky paper note with scotch tape */}
          <div className="sticky-paper-note">
            <div className="scotch-tape"></div>
            <div className="sticky-note-text">
              {statsPage.stickyNote.text.split('\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>

            <div className="sticky-note-footer">
              <span className="sticky-crown-icon">👑</span>
              <div className="sticky-signature">
                <div>{statsPage.stickyNote.smile}</div>
                <div>{statsPage.stickyNote.signature}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Adham.exe Stats Box Card */}
        <div className="stats-box-card">
          {statsPage.stats.map((item) => (
            <div key={item.id} className="stat-row">
              <div className="stat-header">
                <span>{item.label}</span>
                <span className="stat-value">{item.display}</span>
              </div>
              <div className="stat-bar-track">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}

          {/* Crown doodle in bottom corner */}
          <div className="card-doodle-crown">
            👑
          </div>
        </div>
      </div>
    </div>
  );
}
