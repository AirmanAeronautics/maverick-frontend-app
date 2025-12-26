// DO NOT MODIFY OTHER FILES — Quiz2 SCREEN ONLY
import React, { useState } from 'react';
import './Quiz2.css';

// Image assets from local files - reusing existing assets where possible
import imgOutline from '../assets/quiz1-assets/imgOutline.png?url';
import imgBatteryEnd from '../assets/quiz1-assets/imgBatteryEnd.png?url';
import imgFill from '../assets/quiz1-assets/imgFill.png?url';
import imgArrowArrowLeftMd from '../assets/quiz1-assets/imgArrowArrowLeftMd.svg?url';
import imgWifi from '../assets/quiz1-assets/imgWifi.svg?url';
import imgIconMobileSignal from '../assets/quiz1-assets/imgIconMobileSignal.svg?url';

// Icons from Figma for correct/wrong answers
const imgCheckTick = 'https://www.figma.com/api/mcp/asset/004b793e-5dcf-4f31-8e0c-8346d577741c';
const imgCrossSolid = 'https://www.figma.com/api/mcp/asset/49278544-ad67-4806-bbed-1c73848d1cbd';

type StatusBarBatteryProps = {
  className?: string;
};

function StatusBarBattery({ className }: StatusBarBatteryProps) {
  return (
    <div className={`quiz2-battery-container ${className || ''}`}>
      <div className="quiz2-battery-outline">
        <img alt="" src={imgOutline} className="quiz2-battery-outline-image" />
      </div>
      <div className="quiz2-battery-end">
        <img alt="" src={imgBatteryEnd} className="quiz2-battery-end-image" />
      </div>
      <div className="quiz2-battery-fill">
        <img alt="" src={imgFill} className="quiz2-battery-fill-image" />
      </div>
    </div>
  );
}

export default function Quiz2() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const CORRECT_ANSWER = 'B';

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  const getAnswerClassName = (answer: string) => {
    if (selectedAnswer === answer) {
      return answer === CORRECT_ANSWER 
        ? 'quiz2-answer-option quiz2-answer-correct' 
        : 'quiz2-answer-option quiz2-answer-incorrect';
    }
    // Show correct answer when wrong answer is selected
    if (selectedAnswer && selectedAnswer !== CORRECT_ANSWER && answer === CORRECT_ANSWER) {
      return 'quiz2-answer-option quiz2-answer-correct';
    }
    return 'quiz2-answer-option';
  };

  const getLetterClassName = (answer: string) => {
    if (selectedAnswer === answer) {
      return answer === CORRECT_ANSWER
        ? 'quiz2-answer-letter quiz2-answer-letter-correct'
        : 'quiz2-answer-letter quiz2-answer-letter-incorrect';
    }
    // Show correct answer badge when wrong answer is selected
    if (selectedAnswer && selectedAnswer !== CORRECT_ANSWER && answer === CORRECT_ANSWER) {
      return 'quiz2-answer-letter quiz2-answer-letter-correct';
    }
    return 'quiz2-answer-letter';
  };

  return (
    <div className="quiz2-container">
      {/* Status Bar */}
      <div className="quiz2-status-bar">
        <div className="quiz2-status-bar-left">
          <div className="quiz2-status-bar-time-container">
            <p className="quiz2-status-bar-time">9:41</p>
          </div>
        </div>
        <div className="quiz2-status-bar-right">
          <StatusBarBattery className="quiz2-battery-container-style" />
          <div className="quiz2-wifi-icon">
            <img alt="" src={imgWifi} />
          </div>
          <div className="quiz2-mobile-signal-icon">
            <img alt="" src={imgIconMobileSignal} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="quiz2-header">
        <div className="quiz2-header-content">
          <div className="quiz2-arrow-container">
            <img alt="" src={imgArrowArrowLeftMd} className="quiz2-arrow-image" />
          </div>
          <div className="quiz2-header-text-container">
            <p className="quiz2-header-text">Back to Main Menu</p>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="quiz2-title-section">
        <div className="quiz2-title-text-container">
          <p className="quiz2-title">Fundamentals & Basics</p>
          <p className="quiz2-subtitle">
            Master the essential concepts and foundatonal Knowledege and required for aviation excellence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="quiz2-content-container">
        {/* Progress Card */}
        <div className="quiz2-progress-card">
          <div className="quiz2-progress-content">
            <div className="quiz2-progress-header">
              <p className="quiz2-progress-text">Question 8 of 15</p>
              <p className="quiz2-progress-percent">67%</p>
            </div>
            <div className="quiz2-progress-bar-container">
              <div className="quiz2-progress-bar-background"></div>
              <div className="quiz2-progress-bar-fill"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="quiz2-question-container">
          <p className="quiz2-question-text">
            7. What is the standard atmospheric pressure at sea level?
          </p>

          {/* Answer Options */}
          <div className="quiz2-answers-container">
            <div 
              className={getAnswerClassName('A')}
              onClick={() => handleAnswerClick('A')}
              style={{ cursor: selectedAnswer === null ? 'pointer' : 'default' }}
            >
              <div className={getLetterClassName('A')}>
                {selectedAnswer === 'A' && selectedAnswer !== CORRECT_ANSWER ? (
                  <img src={imgCrossSolid} alt="Wrong" className="quiz2-icon-image quiz2-icon-cross" />
                ) : selectedAnswer === 'A' && selectedAnswer === CORRECT_ANSWER ? (
                  <img src={imgCheckTick} alt="Correct" className="quiz2-icon-image quiz2-icon-check" />
                ) : (
                  <p className="quiz2-answer-letter-text">A</p>
                )}
              </div>
              <p className="quiz2-answer-text">29.92 inches Hg</p>
            </div>

            <div 
              className={getAnswerClassName('B')}
              onClick={() => handleAnswerClick('B')}
              style={{ cursor: selectedAnswer === null ? 'pointer' : 'default' }}
            >
              <div className={getLetterClassName('B')}>
                {(selectedAnswer === 'B' || (selectedAnswer && selectedAnswer !== CORRECT_ANSWER)) ? (
                  <img src={imgCheckTick} alt="Correct" className="quiz2-icon-image quiz2-icon-check" />
                ) : (
                  <p className="quiz2-answer-letter-text">B</p>
                )}
              </div>
              <p className="quiz2-answer-text">30.00 inches Hg</p>
            </div>

            <div 
              className={getAnswerClassName('C')}
              onClick={() => handleAnswerClick('C')}
              style={{ cursor: selectedAnswer === null ? 'pointer' : 'default' }}
            >
              <div className={getLetterClassName('C')}>
                {selectedAnswer === 'C' && selectedAnswer !== CORRECT_ANSWER ? (
                  <img src={imgCrossSolid} alt="Wrong" className="quiz2-icon-image quiz2-icon-cross" />
                ) : selectedAnswer === 'C' && selectedAnswer === CORRECT_ANSWER ? (
                  <img src={imgCheckTick} alt="Correct" className="quiz2-icon-image quiz2-icon-check" />
                ) : (
                  <p className="quiz2-answer-letter-text">C</p>
                )}
              </div>
              <p className="quiz2-answer-text">28.92 inches Hg</p>
            </div>

            <div 
              className={getAnswerClassName('D')}
              onClick={() => handleAnswerClick('D')}
              style={{ cursor: selectedAnswer === null ? 'pointer' : 'default' }}
            >
              <div className={getLetterClassName('D')}>
                {selectedAnswer === 'D' && selectedAnswer !== CORRECT_ANSWER ? (
                  <img src={imgCrossSolid} alt="Wrong" className="quiz2-icon-image quiz2-icon-cross" />
                ) : selectedAnswer === 'D' && selectedAnswer === CORRECT_ANSWER ? (
                  <img src={imgCheckTick} alt="Correct" className="quiz2-icon-image quiz2-icon-check" />
                ) : (
                  <p className="quiz2-answer-letter-text">D</p>
                )}
              </div>
              <p className="quiz2-answer-text">31.92 inches Hg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="quiz2-bottom-nav">
        <div className="quiz2-previous-button">
          <img alt="" src={imgArrowArrowLeftMd} className="quiz2-nav-arrow" />
          <p className="quiz2-previous-text">Previous</p>
        </div>
        <div className="quiz2-next-button">
          <p className="quiz2-next-text">Next</p>
          <div className="quiz2-next-arrow-container">
            <img alt="" src={imgArrowArrowLeftMd} className="quiz2-nav-arrow quiz2-next-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

