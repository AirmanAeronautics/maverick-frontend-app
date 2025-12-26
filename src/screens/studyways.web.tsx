// DO NOT MODIFY OTHER FILES — studyways SCREEN ONLY
import React from 'react';
import './studyways.css';
import imgQuizIcon from '../../hugeicons_quiz-02.svg?url';
import imgQuizIconGroup from '../assets/studyways-assets/imgQuizIconGroup.svg?url';

// Image assets from local files
import imgOutline from '../assets/studyways-assets/imgOutline.png?url';
import imgBatteryEnd from '../assets/studyways-assets/imgBatteryEnd.png?url';
import imgFill from '../assets/studyways-assets/imgFill.png?url';
import imgArrowArrowLeftMd from '../assets/studyways-assets/imgArrowArrowLeftMd.svg?url';
import imgWifi from '../assets/studyways-assets/imgWifi.svg?url';
import imgIconMobileSignal from '../assets/studyways-assets/imgIconMobileSignal.svg?url';
import imgGroup from '../assets/studyways-assets/imgGroup.svg?url';
import imgBiFire from '../assets/studyways-assets/imgBiFire.svg?url';
import imgGroup6851 from '../assets/studyways-assets/imgGroup6851.svg?url';
import imgEllipse194 from '../assets/studyways-assets/imgEllipse194.png?url';
import imgGroup6851Quiz from '../assets/studyways-assets/Group6851.svg?url';
import imgGroup6852 from '../assets/studyways-assets/imgGroup6852.svg?url';
import imgIconoirFlashSolid from '../assets/studyways-assets/imgIconoirFlashSolid.svg?url';
import imgGroup6853 from '../assets/studyways-assets/imgGroup6853.svg?url';
import imgOpenBookVectorSeamlessPatternWithBlackBackground1045893158 from '../assets/studyways-assets/imgOpenBookPattern1.png?url';
import imgGeminiGeneratedImage85Qlow85Qlow85QlPhotoroom1 from '../assets/studyways-assets/imgGeminiPattern.png?url';
import imgOpenBookVectorSeamlessPatternWithBlackBackground1045893159 from '../assets/studyways-assets/imgOpenBookPattern2.png?url';
import imgOpenBookVectorSeamlessPatternWithBlackBackground1045893160 from '../assets/studyways-assets/imgOpenBookPattern3.png?url';

type StatusBarBatteryProps = {
  className?: string;
};

function StatusBarBattery({ className }: StatusBarBatteryProps) {
  return (
    <div className={`studyways-battery-container ${className || ''}`}>
      <div className="studyways-battery-outline">
        <img alt="" src={imgOutline} className="studyways-battery-outline-image" />
      </div>
      <div className="studyways-battery-end">
        <img alt="" src={imgBatteryEnd} className="studyways-battery-end-image" />
      </div>
      <div className="studyways-battery-fill">
        <img alt="" src={imgFill} className="studyways-battery-fill-image" />
      </div>
    </div>
  );
}

export default function StudyWays() {
  return (
    <div className="studyways-container">
      {/* Status Bar */}
      <div className="studyways-status-bar">
        <div className="studyways-status-bar-left">
          <div className="studyways-status-bar-time-container">
            <p className="studyways-status-bar-time">9:41</p>
          </div>
        </div>
        <div className="studyways-status-bar-right">
          <StatusBarBattery className="studyways-battery-container-style" />
          <div className="studyways-wifi-icon">
            <img alt="" src={imgWifi} />
          </div>
          <div className="studyways-mobile-signal-icon">
            <img alt="" src={imgIconMobileSignal} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="studyways-header">
        <div className="studyways-header-content">
          <div className="studyways-arrow-container">
            <img alt="" src={imgArrowArrowLeftMd} className="studyways-arrow-image" />
          </div>
          <div className="studyways-header-text-container">
            <p className="studyways-header-text">Back to Learning</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="studyways-scroll-view">
        <div className="studyways-content-container">
          {/* Air Meteorology Card */}
          <div className="studyways-card">
            <div className="studyways-card-content">
              <div className="studyways-card-title-container">
                <p className="studyways-card-title">Air Meteorolgy</p>
                <p className="studyways-card-subtitle">Choose and Activity to continue learning</p>
              </div>
              <div className="studyways-progress-container">
                <div className="studyways-progress-header">
                  <p className="studyways-progress-label">Progress</p>
                  <p className="studyways-progress-value">67%</p>
                </div>
                <div className="studyways-progress-bar-container">
                  <div className="studyways-progress-bar-track"></div>
                  <div className="studyways-progress-bar-fill"></div>
                </div>
              </div>
              <div className="studyways-card-footer">
                <div className="studyways-last-activity-container">
                  <div className="studyways-clock-icon">
                    <img alt="" src={imgGroup} className="studyways-clock-icon-image" />
                  </div>
                  <p className="studyways-last-activity-text">Last : Today</p>
                </div>
                <div className="studyways-streak-badge">
                  <div className="studyways-streak-badge-content">
                    <img alt="" src={imgBiFire} className="studyways-streak-icon" />
                    <p className="studyways-streak-text">7 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Study Statistics Card */}
          <div className="studyways-card">
            <div className="studyways-card-content">
              <div className="studyways-card-title-container">
                <p className="studyways-card-title">Study Statistics</p>
                <p className="studyways-card-subtitle">Choose and Activity to continue learning</p>
              </div>
              <div className="studyways-stats-container">
                <div className="studyways-stat-item">
                  <p className="studyways-stat-value">47.5h</p>
                  <p className="studyways-stat-label">Total Time</p>
                </div>
                <div className="studyways-stat-item">
                  <p className="studyways-stat-value">32m</p>
                  <p className="studyways-stat-label">Avg Session</p>
                </div>
                <div className="studyways-stat-item">
                  <p className="studyways-stat-value">89</p>
                  <p className="studyways-stat-label">Total Session</p>
                </div>
                <div className="studyways-stat-item">
                  <p className="studyways-stat-value">8.5</p>
                  <p className="studyways-stat-label">This week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Cards Grid */}
          <div className="studyways-activity-grid">
            {/* Study Card */}
            <div className="studyways-activity-card">
              <div className="studyways-activity-card-header studyways-activity-card-header-blue">
                <img alt="" src={imgOpenBookVectorSeamlessPatternWithBlackBackground1045893158} className="studyways-activity-card-pattern" />
              </div>
              <div className="studyways-activity-card-icon-container">
                <img alt="" src={imgGroup6851} className="studyways-activity-card-icon" />
              </div>
              <div className="studyways-activity-card-content">
                <p className="studyways-activity-card-title">Study</p>
                <p className="studyways-activity-card-description">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>

            {/* Quiz Card */}
            <div className="studyways-activity-card">
              <div className="studyways-activity-card-header studyways-activity-card-header-teal">
                <img alt="" src={imgGeminiGeneratedImage85Qlow85Qlow85QlPhotoroom1} className="studyways-activity-card-pattern" />
              </div>
              <div className="studyways-activity-card-icon-container">
                <img alt="" src={imgGroup6851Quiz} className="studyways-activity-card-icon" />
              </div>
              <div className="studyways-activity-card-content">
                <p className="studyways-activity-card-title">Quiz</p>
                <p className="studyways-activity-card-description">Test your Knowledge with quick Questions</p>
              </div>
            </div>

            {/* Flash Cards Card */}
            <div className="studyways-activity-card">
              <div className="studyways-activity-card-header studyways-activity-card-header-purple">
                <img alt="" src={imgOpenBookVectorSeamlessPatternWithBlackBackground1045893159} className="studyways-activity-card-pattern" />
              </div>
              <div className="studyways-activity-card-icon-container">
                <img alt="" src={imgGroup6852} className="studyways-activity-card-icon" />
                <img alt="" src={imgIconoirFlashSolid} className="studyways-activity-card-flash-icon" />
              </div>
              <div className="studyways-activity-card-content">
                <p className="studyways-activity-card-title">Flash Cards</p>
                <p className="studyways-activity-card-description studyways-flash-cards-description">Review Key<br />concepts and definitions</p>
              </div>
            </div>

            {/* Practice Test Card */}
            <div className="studyways-activity-card">
              <div className="studyways-activity-card-header studyways-activity-card-header-dark-purple">
                <img alt="" src={imgOpenBookVectorSeamlessPatternWithBlackBackground1045893160} className="studyways-activity-card-pattern" />
              </div>
              <div className="studyways-activity-card-icon-container">
                <img alt="" src={imgGroup6853} className="studyways-activity-card-icon" />
              </div>
              <div className="studyways-activity-card-content">
                <p className="studyways-activity-card-title">Practice Test</p>
                <p className="studyways-activity-card-description">Full exam simulation with scoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

