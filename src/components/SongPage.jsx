import React, { useState } from 'react';
import { Heart, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function SongPage({
  isPlayingAudio,
  onToggleAudio,
  currentTime,
  duration,
  onSeek,
}) {
  const { songPlayerPage } = websiteData;
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);

  // Format seconds to m:ss
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return '0:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.max(0, Math.min(1, clickX / rect.width));
    if (duration > 0 && onSeek) {
      onSeek(clickRatio * duration);
    }
  };

  return (
    <div className="slide-content-wrapper exact-player-page-wrapper">
      <span className="page-indicator-badge">{songPlayerPage.pageNumber}</span>

      <div className="exact-player-outer-container">
        {/* The Card + Peeking Vinyl Disc */}
        <div className="player-card-relative-wrap">
          {/* Vinyl Disc Peeking from behind the right side */}
          <div className={`peeking-vinyl-disc ${isPlayingAudio ? 'spinning-vinyl' : ''}`}>
            <div className="peeking-vinyl-ring ring-a"></div>
            <div className="peeking-vinyl-ring ring-b"></div>
            <div className="peeking-vinyl-ring ring-c"></div>
            <div className="peeking-vinyl-center"></div>
          </div>

          {/* Main Dark Glass Player Card */}
          <div className="exact-glass-card">
            {/* Top Outlined Heart Icon */}
            <div className="player-top-heart">
              <Heart size={24} color="#e6b2ba" strokeWidth={1.5} />
            </div>

            {/* Song Title & Subtitle */}
            <h2 className="exact-card-title">{songPlayerPage.cardTitle}</h2>
            <p className="exact-card-subtitle">{songPlayerPage.cardSubtitle}</p>

            {/* Scrubber Progress Bar */}
            <div className="exact-progress-wrapper" onClick={handleProgressClick}>
              <div className="exact-progress-track">
                <div
                  className="exact-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="exact-progress-dot"></div>
                </div>
              </div>
              <div className="exact-time-row">
                <span>{formatTime(currentTime)}</span>
                <span>{duration > 0 ? formatTime(duration) : songPlayerPage.defaultDuration}</span>
              </div>
            </div>

            {/* Controls Row: Shuffle, Prev, Play/Pause, Next, Repeat */}
            <div className="exact-controls-row">
              <button
                className={`player-icon-btn ${isShuffle ? 'active-icon' : ''}`}
                onClick={() => setIsShuffle(!isShuffle)}
                title="Shuffle"
              >
                <Shuffle size={18} />
              </button>

              <button
                className="player-icon-btn"
                onClick={() => onSeek && onSeek(Math.max(0, currentTime - 10))}
                title="Previous"
              >
                <SkipBack size={20} fill="#dfdfe6" />
              </button>

              <button
                className="exact-play-circle-btn"
                onClick={onToggleAudio}
                title={isPlayingAudio ? "Pause" : "Play"}
              >
                {isPlayingAudio ? (
                  <Pause size={22} fill="#ffffff" color="#ffffff" />
                ) : (
                  <Play size={22} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                )}
              </button>

              <button
                className="player-icon-btn"
                onClick={() => onSeek && onSeek(Math.min(duration || 205, currentTime + 10))}
                title="Next"
              >
                <SkipForward size={20} fill="#dfdfe6" />
              </button>

              <button
                className={`player-icon-btn ${isRepeat ? 'active-icon' : ''}`}
                onClick={() => setIsRepeat(!isRepeat)}
                title="Repeat"
              >
                <Repeat size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Quote Below the Song Player (بدل المكتوبة) */}
        <div className="exact-bottom-quote-wrap">
          <p className="exact-bottom-quote-text">
            {songPlayerPage.bottomQuote}
          </p>
          <div className="scribble-crown">👑</div>
        </div>
      </div>
    </div>
  );
}
