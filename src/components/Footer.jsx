import React from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function Footer({
  currentPage,
  setCurrentPage,
  totalPages,
  isPlayingAudio,
  onToggleAudio
}) {
  const { hero } = websiteData;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <footer className="site-footer-bar">
      {/* Audio player indicator with song support */}
      <div className="footer-left">
        <div className="audio-equalizer">
          <span className={`audio-bar ${isPlayingAudio ? 'playing' : ''}`}></span>
          <span className={`audio-bar ${isPlayingAudio ? 'playing' : ''}`}></span>
          <span className={`audio-bar ${isPlayingAudio ? 'playing' : ''}`}></span>
          <span className={`audio-bar ${isPlayingAudio ? 'playing' : ''}`}></span>
        </div>
        <span className="footer-audio-label">{hero.audioLabel}</span>
        <button
          className="audio-toggle-btn"
          onClick={onToggleAudio}
          title={isPlayingAudio ? "إيقاف الأغنية" : "تشغيل الأغنية (من public/music.mp3)"}
        >
          {isPlayingAudio ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Volume2 size={12} /> Pause Music
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <VolumeX size={12} /> Play Song
            </span>
          )}
        </button>
      </div>

      {/* Pagination & Arrows */}
      <div className="nav-pagination-wrap">
        <button
          className="nav-arrow-btn"
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          title="الصفحة السابقة"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <span
                key={pageNum}
                className={`page-dot ${currentPage === pageNum ? 'active' : ''}`}
                onClick={() => setCurrentPage(pageNum)}
                title={`الصفحة ${pageNum}`}
              />
            );
          })}
        </div>

        <button
          className="nav-arrow-btn"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          title="الصفحة التالية"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </footer>
  );
}
