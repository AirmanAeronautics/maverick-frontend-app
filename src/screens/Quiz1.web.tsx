// DO NOT MODIFY OTHER FILES — Quiz1 SCREEN ONLY
import React from 'react';
import './Quiz1.css';

// Image assets from local files
import imgOutline from '../assets/quiz1-assets/imgOutline.png?url';
import imgBatteryEnd from '../assets/quiz1-assets/imgBatteryEnd.png?url';
import imgFill from '../assets/quiz1-assets/imgFill.png?url';
import imgArrowArrowLeftMd from '../assets/quiz1-assets/imgArrowArrowLeftMd.svg?url';
import imgWifi from '../assets/quiz1-assets/imgWifi.svg?url';
import imgIconMobileSignal from '../assets/quiz1-assets/imgIconMobileSignal.svg?url';
import imgEllipse177 from '../assets/quiz1-assets/imgEllipse177.png?url';
import imgPrimeStar from '../assets/quiz1-assets/imgPrimeStar.svg?url';
import imgArrowDown from '../assets/quiz1-assets/imgArrowDown.svg?url';
import imgPrimeThumbsUp from '../assets/quiz1-assets/imgPrimeThumbsUp.svg?url';
import imgMaterialSymbolsRefreshRounded from '../assets/quiz1-assets/imgMaterialSymbolsRefreshRounded.svg?url';
import imgEvaLoaderOutline from '../assets/quiz1-assets/imgEvaLoaderOutline.svg?url';
import imgGroup from '../assets/quiz1-assets/imgGroup.svg?url';

type StatusBarBatteryProps = {
  className?: string;
};

function StatusBarBattery({ className }: StatusBarBatteryProps) {
  return (
    <div className={`quiz1-battery-container ${className || ''}`}>
      <div className="quiz1-battery-outline">
        <img alt="" src={imgOutline} className="quiz1-battery-outline-image" />
      </div>
      <div className="quiz1-battery-end">
        <img alt="" src={imgBatteryEnd} className="quiz1-battery-end-image" />
      </div>
      <div className="quiz1-battery-fill">
        <img alt="" src={imgFill} className="quiz1-battery-fill-image" />
      </div>
    </div>
  );
}

export default function Quiz1() {
  return (
    <div className="quiz1-container">
      {/* Status Bar */}
      <div className="quiz1-status-bar">
        <div className="quiz1-status-bar-left">
          <div className="quiz1-status-bar-time-container">
            <p className="quiz1-status-bar-time">9:41</p>
          </div>
        </div>
        <div className="quiz1-status-bar-right">
          <StatusBarBattery className="quiz1-battery-container-style" />
          <div className="quiz1-wifi-icon">
            <img alt="" src={imgWifi} />
          </div>
          <div className="quiz1-mobile-signal-icon">
            <img alt="" src={imgIconMobileSignal} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="quiz1-header">
        <div className="quiz1-header-content">
          <div className="quiz1-arrow-container">
            <img alt="" src={imgArrowArrowLeftMd} className="quiz1-arrow-image" />
          </div>
          <div className="quiz1-header-text-container">
            <p className="quiz1-header-text">Back to Main Menu</p>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="quiz1-title-section">
        <div className="quiz1-quiz-icon-container">
          <div className="quiz1-quiz-icon-inner">
            <img alt="" src={imgGroup} className="quiz1-quiz-icon-image" />
          </div>
        </div>
        <div className="quiz1-title-text-container">
          <p className="quiz1-title">Practice Quizzes</p>
          <p className="quiz1-subtitle">Pick a quiz to strengthen your aviation fundamentals</p>
        </div>
      </div>

      {/* Quiz Cards */}
      <div className="quiz1-card quiz1-card-1">
            <div className="quiz1-card-content">
              <div className="quiz1-card-left">
                <div className="quiz1-card-text-container">
                  <p className="quiz1-card-number">1. Fundamentals & Basics</p>
                  <p className="quiz1-card-description">
                    Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                  </p>
                </div>
                <div className="quiz1-card-footer">
                  <div className="quiz1-status-container">
                    <div className="quiz1-status-dot"></div>
                    <p className="quiz1-status-text">Completed</p>
                  </div>
                  <div className="quiz1-badge quiz1-badge-excellent">
                    <img alt="" src={imgPrimeStar} className="quiz1-badge-icon" />
                    <p className="quiz1-badge-text quiz1-badge-text-excellent">Excellent</p>
                  </div>
                </div>
              </div>
              <div className="quiz1-card-arrow">
                <div className="quiz1-card-arrow-rotated">
                  <img alt="" src={imgArrowDown} className="quiz1-card-arrow-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="quiz1-card quiz1-card-2">
            <div className="quiz1-card-content">
              <div className="quiz1-card-left">
                <div className="quiz1-card-text-container">
                  <p className="quiz1-card-number">2. Advanced Concepts</p>
                  <p className="quiz1-card-description">
                    Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                  </p>
                </div>
                <div className="quiz1-card-footer">
                  <div className="quiz1-status-container">
                    <div className="quiz1-status-dot"></div>
                    <p className="quiz1-status-text">Completed</p>
                  </div>
                  <div className="quiz1-badge quiz1-badge-good">
                    <img alt="" src={imgPrimeThumbsUp} className="quiz1-badge-icon" />
                    <p className="quiz1-badge-text quiz1-badge-text-good">Good</p>
                  </div>
                </div>
              </div>
              <div className="quiz1-card-arrow">
                <div className="quiz1-card-arrow-rotated">
                  <img alt="" src={imgArrowDown} className="quiz1-card-arrow-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="quiz1-card quiz1-card-3">
            <div className="quiz1-card-content">
              <div className="quiz1-card-left">
                <div className="quiz1-card-text-container">
                  <p className="quiz1-card-number">3. Specialized Knowledge</p>
                  <p className="quiz1-card-description">
                    Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                  </p>
                </div>
                <div className="quiz1-card-footer">
                  <div className="quiz1-status-container">
                    <div className="quiz1-status-dot"></div>
                    <p className="quiz1-status-text">Completed</p>
                  </div>
                  <div className="quiz1-badge quiz1-badge-needs-improvement">
                    <img alt="" src={imgMaterialSymbolsRefreshRounded} className="quiz1-badge-icon" />
                    <p className="quiz1-badge-text quiz1-badge-text-needs-improvement">Needs Improvement</p>
                  </div>
                </div>
              </div>
              <div className="quiz1-card-arrow">
                <div className="quiz1-card-arrow-rotated">
                  <img alt="" src={imgArrowDown} className="quiz1-card-arrow-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="quiz1-card quiz1-card-4">
            <div className="quiz1-card-content">
              <div className="quiz1-card-left">
                <div className="quiz1-card-text-container">
                  <p className="quiz1-card-number">4. Fundamentals & Basics</p>
                  <p className="quiz1-card-description">
                    Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                  </p>
                </div>
                <div className="quiz1-card-footer">
                  <div className="quiz1-status-container">
                    <div className="quiz1-status-dot quiz1-status-dot-in-progress"></div>
                    <p className="quiz1-status-text">In-progress</p>
                  </div>
                  <div className="quiz1-badge quiz1-badge-ongoing">
                    <img alt="" src={imgEvaLoaderOutline} className="quiz1-badge-icon" />
                    <p className="quiz1-badge-text quiz1-badge-text-ongoing">Ongoing</p>
                  </div>
                </div>
              </div>
              <div className="quiz1-card-arrow">
                <div className="quiz1-card-arrow-rotated">
                  <img alt="" src={imgArrowDown} className="quiz1-card-arrow-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="quiz1-card quiz1-card-5">
            <div className="quiz1-card-content">
              <div className="quiz1-card-left">
                <div className="quiz1-card-text-container">
                  <p className="quiz1-card-number">5. Fundamentals & Basics</p>
                  <p className="quiz1-card-description">
                    Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                  </p>
                </div>
                <div className="quiz1-card-footer">
                  <div className="quiz1-status-container">
                    <div className="quiz1-status-dot quiz1-status-dot-not-started"></div>
                    <p className="quiz1-status-text">Not started</p>
                  </div>
                </div>
              </div>
              <div className="quiz1-card-arrow">
                <div className="quiz1-card-arrow-rotated">
                  <img alt="" src={imgArrowDown} className="quiz1-card-arrow-image" />
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

