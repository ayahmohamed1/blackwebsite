import React from 'react';
import { ArrowRight } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function OutroPage({ onNextPage }) {
  const { outroPage } = websiteData;

  return (
    <div className="slide-content-wrapper outro-page-wrapper">
      <span className="page-indicator-badge">{outroPage.pageNumber}</span>

      <div className="outro-layout">
        {/* Top Left: Message & Cursive Wish */}
        <div className="outro-left-content">
          <h2 className="outro-title">{outroPage.title}</h2>
          <div className="outro-message-lines">
            {outroPage.messageLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div className="outro-pink-wish">
            {outroPage.pinkWish}
          </div>
        </div>

        {/* Top Right: Date Badge (25 OCT 2001) & Crown Doodle */}
        <div className="outro-right-badge">
          <div className="birth-date-stack">
            <span className="birth-day">{outroPage.dateBadge.day}</span>
            <span className="birth-month">{outroPage.dateBadge.month}</span>
            <span className="birth-year">{outroPage.dateBadge.year}</span>
          </div>
          <div className="outro-crown-doodle">👑</div>
        </div>
      </div>

      {/* Bottom Row: Button on left, 'The Best is yet to come' on right */}
      <div className="outro-bottom-row">
        <button className="surprise-btn keep-being-btn" onClick={onNextPage}>
          <span>{outroPage.buttonText}</span>
          <ArrowRight size={16} />
        </button>

        <div className="outro-footer-quote">
          {outroPage.footerRightText.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
