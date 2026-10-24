import React from 'react';
import { Smile, Target, Heart, Crown, Shield, Star } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function AppreciationPage() {
  const { appreciationPage } = websiteData;

  // Icon mapping matching the original icons in Image 1
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'smile':
        return <Smile size={20} strokeWidth={1.8} />;
      case 'target':
        return <Target size={20} strokeWidth={1.8} />;
      case 'heart':
        return <Heart size={20} strokeWidth={1.8} />;
      case 'crown':
        return <Crown size={20} strokeWidth={1.8} />;
      case 'shield':
        return <Shield size={20} strokeWidth={1.8} />;
      case 'star':
        return <Star size={20} strokeWidth={1.8} />;
      default:
        return <Heart size={20} strokeWidth={1.8} />;
    }
  };

  return (
    <div className="slide-content-wrapper">
      {/* Top page indicator */}
      <span className="page-indicator-badge">{appreciationPage.pageNumber}</span>

      <div className="appreciate-container">
        {/* Header: Things I Appreciate About You */}
        <div className="appreciate-header" style={{ direction: 'ltr' }}>
          <h2 className="title-primary" style={{ display: 'inline-block', marginRight: '10px' }}>
            {appreciationPage.title}
          </h2>
          <span className="title-script">{appreciationPage.subtitle}</span>
        </div>

        {/* Paper tape strips list (Single photo completely removed as requested) */}
        <div className="paper-strips-list">
          {appreciationPage.items.map((item) => (
            <div key={item.id} className="paper-tape-strip">
              <span className="strip-tape-edge"></span>
              <div className="strip-icon-box">
                {renderIcon(item.icon)}
              </div>
              <div className="strip-text-content">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Handwritten appreciation footer note */}
        <div className="appreciate-footer-quote">
          {appreciationPage.footerQuote}
        </div>
      </div>
    </div>
  );
}
