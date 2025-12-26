// DO NOT MODIFY OTHER FILES — flashcard2 SCREEN ONLY
import React, { useState } from 'react';
import './flashcard2.css';

// Image assets from local files
import imgOutline from '../assets/flashcard2-assets/imgOutline.png?url';
import imgBatteryEnd from '../assets/flashcard2-assets/imgBatteryEnd.png?url';
import imgFill from '../assets/flashcard2-assets/imgFill.png?url';
import imgArrowArrowLeftMd from '../assets/flashcard2-assets/imgArrowArrowLeftMd.svg?url';
import imgWifi from '../assets/flashcard2-assets/imgWifi.svg?url';
import imgIconMobileSignal from '../assets/flashcard2-assets/imgIconMobileSignal.svg?url';
import imgArrowDown from '../assets/flashcard2-assets/imgArrowDown.svg?url';
import imgFluentCheckmarkCircleHint16Filled from '../assets/flashcard2-assets/imgFluentCheckmarkCircleHint16Filled.svg?url';
import imgMaterialSymbolsRefreshRounded from '../assets/flashcard2-assets/imgMaterialSymbolsRefreshRounded.svg?url';
import imgGroup from '../assets/flashcard2-assets/imgGroup.svg?url';
import imgMdiTickCircleOutline from '../assets/flashcard2-assets/imgMdiTickCircleOutline.svg?url';

type StatusBarBatteryProps = {
  className?: string;
};

function StatusBarBattery({ className }: StatusBarBatteryProps) {
  return (
    <div className={`fc2-battery-container ${className || ''}`}>
      <div className="fc2-battery-outline">
        <img alt="" src={imgOutline} className="fc2-battery-outline-image" />
      </div>
      <div className="fc2-battery-end">
        <img alt="" src={imgBatteryEnd} className="fc2-battery-end-image" />
      </div>
      <div className="fc2-battery-fill">
        <img alt="" src={imgFill} className="fc2-battery-fill-image" />
      </div>
    </div>
  );
}

export default function Flashcard2() {
  const [isStudyAidExpanded, setIsStudyAidExpanded] = useState(true);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const toggleStudyAid = () => {
    setIsStudyAidExpanded(!isStudyAidExpanded);
  };

  const toggleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="fc2-container">
      {/* Status Bar */}
      <div className="fc2-status-bar">
        <div className="fc2-status-bar-left">
          <div className="fc2-status-bar-time-container">
            <p className="fc2-status-bar-time">9:41</p>
          </div>
        </div>
        <div className="fc2-status-bar-right">
          <StatusBarBattery className="fc2-battery-container-style" />
          <div className="fc2-wifi-icon">
            <img alt="" src={imgWifi} />
          </div>
          <div className="fc2-mobile-signal-icon">
            <img alt="" src={imgIconMobileSignal} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="fc2-header">
        <div className="fc2-header-content">
          <div className="fc2-arrow-container">
            <img alt="" src={imgArrowArrowLeftMd} className="fc2-arrow-image" />
          </div>
          <div className="fc2-header-text-container">
            <p className="fc2-header-text">Back to Topics</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="fc2-scroll-view">
        <div className="fc2-scroll-content">
          {/* Title Section */}
          <div className="fc2-title-section">
            <div className="fc2-title-container">
              <p className="fc2-title">Fundamentals & Basics</p>
              <p className="fc2-description">
                Master the essential concepts and foundatonal Knowledege and required for aviation excellence
              </p>
            </div>
          </div>

          {/* Progress Card */}
          <div className="fc2-progress-card">
            <div className="fc2-progress-content">
              <div className="fc2-progress-header">
                <p className="fc2-progress-text">Question 8 of 15</p>
                <p className="fc2-progress-percent">67%</p>
              </div>
              <div className="fc2-progress-bar-container">
                <div className="fc2-progress-bar-background"></div>
                <div className="fc2-progress-bar-fill"></div>
              </div>
            </div>
          </div>

          {/* Study Aid Card */}
          <div className="fc2-study-aid-card">
            <div className="fc2-study-aid-content">
              <div className="fc2-study-aid-header" onClick={toggleStudyAid} style={{ cursor: 'pointer' }}>
                <div className="fc2-study-aid-title-frame">
                  <div className="fc2-study-aid-left">
                    <div className="fc2-checkmark-icon">
                      <img alt="" src={imgFluentCheckmarkCircleHint16Filled} className="fc2-checkmark-image" />
                    </div>
                    <p className="fc2-study-aid-title">Study Aid</p>
                  </div>
                  <p className="fc2-study-aid-subtitle">Hints and Explanations</p>
                </div>
                <div className={`fc2-arrow-down-container ${isStudyAidExpanded ? 'fc2-arrow-expanded' : ''}`}>
                  <div className="fc2-arrow-down-rotated">
                    <img alt="" src={imgArrowDown} className="fc2-arrow-down-image" />
                  </div>
                </div>
              </div>
              {isStudyAidExpanded && (
                <p className="fc2-study-aid-text">
                  Think about the key aviation concepts, regulations or procedures that relate to this question. Connect safety implications and practical applications
                </p>
              )}
            </div>
          </div>

          {/* Question Card - Flip Card */}
          <div className={`fc2-question-card-wrapper ${isCardFlipped ? 'fc2-flipped' : ''}`} onClick={toggleCardFlip}>
            <div className="fc2-question-card-inner">
              {/* Front Side - Question */}
              <div className="fc2-question-card-front">
                <div className="fc2-question-header">
                  <div className="fc2-question-icon-container">
                    <div className="fc2-question-icon-bg">
                      <div className="fc2-question-icon-inner">
                        <img alt="" src={imgGroup} className="fc2-question-icon-image" />
                      </div>
                    </div>
                  </div>
                  <div className="fc2-question-label-container">
                    <p className="fc2-question-label">Questions</p>
                    <div className="fc2-question-tag">
                      <p className="fc2-question-tag-text">Weather</p>
                    </div>
                  </div>
                </div>
                <p className="fc2-question-text">What does METAR stands for?</p>
                <div className="fc2-reveal-button">
                  <img alt="" src={imgMaterialSymbolsRefreshRounded} className="fc2-reveal-icon" />
                  <p className="fc2-reveal-text">Tap to Reveal the Answer</p>
                </div>
              </div>
              
              {/* Back Side - Answer */}
              <div className="fc2-question-card-back">
                <div className="fc2-answer-header">
                  <div className="fc2-answer-icon-container">
                    <div className="fc2-answer-icon-bg">
                      <img alt="" src={imgMdiTickCircleOutline} className="fc2-answer-icon-image" />
                    </div>
                  </div>
                  <div className="fc2-answer-label-container">
                    <p className="fc2-answer-label">Answer</p>
                    <div className="fc2-answer-tag">
                      <p className="fc2-answer-tag-text">Weather</p>
                    </div>
                  </div>
                </div>
                <div className="fc2-answer-text-container">
                  <p className="fc2-answer-text">METAR Stands for</p>
                  <p className="fc2-answer-text-blue">Meteorological Aerodrome Report</p>
                </div>
                <div className="fc2-show-question-button">
                  <img alt="" src={imgMaterialSymbolsRefreshRounded} className="fc2-reveal-icon" />
                  <p className="fc2-reveal-text">Show the Question</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fc2-bottom-nav">
        <div className="fc2-previous-button">
          <img alt="" src={imgArrowArrowLeftMd} className="fc2-nav-arrow" />
          <p className="fc2-previous-text">Previous</p>
        </div>
        <div className="fc2-next-button">
          <p className="fc2-next-text">Next</p>
          <div className="fc2-next-arrow-container">
            <img alt="" src={imgArrowArrowLeftMd} className="fc2-nav-arrow fc2-next-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

