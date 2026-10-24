import React from 'react';
import { websiteData } from '../data/websiteData';

export default function LotMorePage() {
  const { lotMorePage } = websiteData;

  return (
    <div className="slide-content-wrapper lot-more-wrapper">
      <span className="page-indicator-badge">{lotMorePage.pageNumber}</span>

      <div className="lot-more-layout">
        {/* Left Side: English Title, Arabic Message, Mountain Doodle */}
        <div className="lot-more-left">
          <div className="lot-more-title-block">
            <h2 className="title-primary">{lotMorePage.titleLine1}</h2>
            <div className="title-script">{lotMorePage.titleLine2}</div>
          </div>

          <div className="lot-more-arabic-box">
            {lotMorePage.arabicMessage.map((line, idx) => (
              <p key={idx} className="lot-more-arabic-line">{line}</p>
            ))}
          </div>

          {/* Minimalist Mountain Line Art Doodle matching the image */}
          <div className="mountain-doodle-container">
            <svg
              viewBox="0 0 240 70"
              fill="none"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mountain-svg"
            >
              {/* Mountain ridge outline */}
              <path d="M 10 65 L 45 42 L 65 52 L 100 20 L 125 45 L 140 32 L 175 65" />
              <path d="M 90 65 L 130 30 L 155 50 L 190 28 L 230 65" />
              {/* Mountain shading ridges */}
              <path d="M 100 20 L 95 38 L 105 48 L 102 65" stroke="rgba(255, 255, 255, 0.25)" />
              <path d="M 130 30 L 135 45 L 128 65" stroke="rgba(255, 255, 255, 0.25)" />
              <path d="M 190 28 L 185 45 L 192 65" stroke="rgba(255, 255, 255, 0.25)" />
            </svg>
          </div>
        </div>

        {/* Right Side: Sleek Dark Glowing Card with Cursive List (No photo as requested) */}
        <div className="lot-more-right">
          <div className="wishes-night-card">
            <div className="stars-ambient-glow"></div>
            <div className="wishes-list-content">
              {lotMorePage.wishesList.map((item, idx) => (
                <div key={idx} className="wishes-item-line">
                  {item}
                </div>
              ))}
              <div className="wishes-heart-sign">
                {lotMorePage.heartSign}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
