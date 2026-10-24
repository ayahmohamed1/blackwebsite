import React, { useState } from 'react';
import { websiteData } from '../data/websiteData';

export default function Header({ currentPage, setCurrentPage, totalPages }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { meta } = websiteData;

  const pageNames = [
    { id: 1, name: "Intro & Surprise", num: "01 / 08" },
    { id: 2, name: "Adham.exe (Stats)", num: "02 / 08" },
    { id: 3, name: "Little Memories (3 Photos)", num: "03 / 08" },
    { id: 4, name: "Things I Appreciate", num: "04 / 08" },
    { id: 5, name: "And We've Got a Lot More", num: "05 / 08" },
    { id: 6, name: "One Last Thing... (Letter)", num: "06 / 08" },
    { id: 7, name: "That’s all...", num: "07 / 08" },
    { id: 8, name: "For Adham 🎵 (Song Player)", num: "08 / 08" },
  ];

  const handleSelectPage = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <div className="header-to">To {meta.recipientName},</div>
          <div className="header-sub">on {meta.age}</div>
        </div>

        <div className="header-right">
          <span className="header-meta">
            {meta.dateText} &nbsp;•&nbsp; {meta.levelText}
          </span>
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة والتنقل"
            title="القائمة والتنقل"
          >
            <span className="menu-line" style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span className="menu-line" style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span className="menu-line" style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="nav-drawer">
          <ul className="nav-drawer-list">
            {pageNames.map((p) => (
              <li
                key={p.id}
                className={`nav-drawer-item ${currentPage === p.id ? 'active' : ''}`}
                onClick={() => handleSelectPage(p.id)}
              >
                <span>{p.name}</span>
                <span className="nav-drawer-num">{p.num}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
