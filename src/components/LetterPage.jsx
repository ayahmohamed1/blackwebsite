import React from 'react';
import { websiteData } from '../data/websiteData';

export default function LetterPage() {
  const { letterPage } = websiteData;
  const { notebookLetter } = letterPage;

  return (
    <div className="slide-content-wrapper letter-page-wrapper">
      <span className="page-indicator-badge">{letterPage.pageNumber}</span>

      <div className="letter-header-row">
        <h2 className="title-primary" style={{ letterSpacing: '0.5px' }}>
          {letterPage.title}
        </h2>
      </div>

      <div className="letter-content-container">
        {/* Lined Notebook Paper Card (No photo as requested) */}
        <div className="notebook-paper-sheet">
          {/* Subtle notebook binder holes or red margin line */}
          <div className="notebook-margin-line"></div>

          <div className="notebook-header-en">
            {notebookLetter.salutation}
          </div>

          <div className="notebook-arabic-body">
            {notebookLetter.paragraphs.map((p, idx) => (
              <p key={idx} className="notebook-p-line">{p}</p>
            ))}
          </div>

          <div className="notebook-footer-wrap">
            <div className="notebook-closing-en">
              {notebookLetter.closingEn.split('\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>

            <div className="notebook-signature">
              {notebookLetter.signature}
            </div>
          </div>
        </div>

        {/* Cursive doodle below letter */}
        <div className="letter-bottom-doodle">
          {letterPage.subDoodle}
        </div>
      </div>
    </div>
  );
}
