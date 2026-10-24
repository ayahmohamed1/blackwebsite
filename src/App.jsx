import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import StatsPage from './components/StatsPage';
import MemoriesPage from './components/MemoriesPage';
import AppreciationPage from './components/AppreciationPage';
import LotMorePage from './components/LotMorePage';
import LetterPage from './components/LetterPage';
import OutroPage from './components/OutroPage';
import SongPage from './components/SongPage';
import { websiteData } from './data/websiteData';
import { ambientSound } from './utils/ambientAudio';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const totalPages = 8;

  // Handle Play/Pause for the MP3 in public/music.mp3
  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlayingAudio) {
        audioRef.current.pause();
        ambientSound.stop();
        setIsPlayingAudio(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlayingAudio(true);
            })
            .catch(() => {
              // Fallback to ambient synth if MP3 is missing/empty
              const isSynthPlaying = ambientSound.toggle();
              setIsPlayingAudio(isSynthPlaying);
            });
        }
      }
    } else {
      const isSynthPlaying = ambientSound.toggle();
      setIsPlayingAudio(isSynthPlaying);
    }
  };

  // Handle scrubbing / seeking through song
  const handleSeek = (newTime) => {
    if (audioRef.current && !isNaN(newTime)) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <HeroPage onOpenSurprise={() => setCurrentPage(2)} />;
      case 2:
        return <StatsPage />;
      case 3:
        return <MemoriesPage />;
      case 4:
        return <AppreciationPage />;
      case 5:
        return <LotMorePage />;
      case 6:
        return <LetterPage />;
      case 7:
        return <OutroPage onNextPage={() => setCurrentPage(8)} />;
      case 8:
        return (
          <SongPage
            isPlayingAudio={isPlayingAudio}
            onToggleAudio={handleToggleAudio}
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
          />
        );
      default:
        return <HeroPage onOpenSurprise={() => setCurrentPage(2)} />;
    }
  };

  return (
    <div className="app-container">
      <div className="vignette-overlay"></div>

      {/* Hidden Audio element linked to public/music.mp3 */}
      <audio
        ref={audioRef}
        src={websiteData.meta.musicPath}
        loop
        preload="auto"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration || 0);
          }
        }}
        onEnded={() => setIsPlayingAudio(false)}
      />

      {/* Top Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      {/* Main Viewport Content */}
      <main className="main-viewport">
        {renderCurrentPage()}
      </main>

      {/* Bottom Footer & Navigation */}
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />
    </div>
  );
}
