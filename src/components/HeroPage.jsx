import React from 'react';
import { ArrowRight } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function HeroPage({ onOpenSurprise }) {
  const { hero } = websiteData;

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-quote">
          {hero.quoteLine1}<br />
          {hero.quoteLine2}<br />
          {hero.quoteLine3}
        </h1>

        <div className="hero-signature">
          {hero.signature}
        </div>

        <button
          className="surprise-btn"
          onClick={onOpenSurprise}
        >
          <span>{hero.buttonText}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
