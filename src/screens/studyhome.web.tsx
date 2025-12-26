// DO NOT MODIFY OTHER FILES — studyhome SCREEN ONLY
import React from 'react';
import './studyhome.css';

// Image assets from local files
import imgRectangle4258 from '../assets/studyhome-icons/imgRectangle4258.png?url';
import imgRectangle4259 from '../assets/studyhome-icons/imgRectangle4259.png?url';
import imgRectangle4260 from '../assets/studyhome-icons/imgRectangle4260.png?url';
import imgRectangle4261 from '../assets/studyhome-icons/imgRectangle4261.png?url';
import imgCircle from '../assets/studyhome-icons/imgCircle.svg?url';
import imgArrowArrowLeftMd from '../assets/studyhome-icons/imgArrowArrowLeftMd.svg?url';
import imgFrame from '../assets/studyhome-icons/imgFrame.svg?url';
import imgBiFire from '../assets/studyhome-icons/imgBiFire.svg?url';
import imgBiFire1 from '../assets/studyhome-icons/imgBiFire1.svg?url';
import imgFa6SolidMedal from '../assets/studyhome-icons/imgFa6SolidMedal.svg?url';
import imgFa6SolidMedal1 from '../assets/studyhome-icons/imgFa6SolidMedal1.svg?url';
import imgSolarMedalStarCircleBoldDuotone from '../assets/studyhome-icons/imgSolarMedalStarCircleBoldDuotone.svg?url';
import imgSolarMedalStarCircleBoldDuotone1 from '../assets/studyhome-icons/imgSolarMedalStarCircleBoldDuotone1.svg?url';
import imgMakiRocket from '../assets/studyhome-icons/imgMakiRocket.svg?url';
import imgMaterialSymbolsLock from '../assets/studyhome-icons/imgMaterialSymbolsLock.svg?url';
import imgSearch from '../assets/studyhome-icons/imgSearch.svg?url';

export default function StudyHome() {
  return (
    <div className="studyhome-container">
      {/* Bottom spacer */}
      <div className="studyhome-bottom-spacer" />

      {/* Title and Search Frame */}
      <div className="studyhome-title-search-frame">
        <div className="studyhome-title-container">
          <p className="studyhome-title">Master aviation Knowledge and advance your career</p>
        </div>
        <div className="studyhome-search-container">
          <div className="studyhome-search-input">
            <div className="studyhome-search-content">
              <img src={imgSearch} alt="" className="studyhome-search-icon" />
              <input
                type="text"
                className="studyhome-search-text"
                placeholder="Search Subjects, topics or chapters"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="studyhome-scroll-view">
        <div className="studyhome-main-content">
          {/* Continue Learning Card */}
          <div className="studyhome-continue-learning-card">
            <div className="studyhome-continue-learning-content">
              <div className="studyhome-progress-circle-wrapper">
                <p className="studyhome-progress-percentage">67%</p>
                <img src={imgCircle} alt="" className="studyhome-progress-circle" />
              </div>
              <div className="studyhome-continue-learning-text">
                <p className="studyhome-continue-learning-title">Air Meteorology</p>
                <p className="studyhome-continue-learning-subtitle">Continue learning at where you left</p>
                <p className="studyhome-continue-learning-chapters">4 / 12 Chapters </p>
              </div>
            </div>
            <div className="studyhome-continue-learning-arrow">
              <img src={imgArrowArrowLeftMd} alt="" className="studyhome-arrow-image" />
            </div>
          </div>

          {/* Achievements and Next Goal Frame */}
          <div className="studyhome-achievements-next-goal-frame">
            {/* Achievements Section */}
            <div className="studyhome-achievements-section">
              <div className="studyhome-achievements-header">
                <img src={imgFrame} alt="" className="studyhome-achievements-icon" />
                <p className="studyhome-achievements-title">Achievements</p>
              </div>
              <div className="studyhome-achievements-cards">
                <div className="studyhome-achievements-cards-content">
                  {/* Streak Monster Card */}
                  <div className="studyhome-achievement-card studyhome-achievement-card-yellow">
                    <img src={imgBiFire1} alt="" className="studyhome-achievement-card-icon" />
                    <div className="studyhome-achievement-card-text">
                      <p className="studyhome-achievement-card-title">Streak Monster</p>
                      <p className="studyhome-achievement-card-subtitle">7 days in a Row</p>
                    </div>
                    <img src={imgBiFire} alt="" className="studyhome-achievement-card-bg-icon" />
                  </div>

                  {/* Quiz Master Card */}
                  <div className="studyhome-achievement-card studyhome-achievement-card-blue">
                    <img src={imgFa6SolidMedal1} alt="" className="studyhome-achievement-card-icon" />
                    <div className="studyhome-achievement-card-text">
                      <p className="studyhome-achievement-card-title">Quiz Master</p>
                      <p className="studyhome-achievement-card-subtitle">10 Quizzes Completed</p>
                    </div>
                    <img src={imgFa6SolidMedal} alt="" className="studyhome-achievement-card-bg-icon" />
                  </div>

                  {/* Streak Monster Card 2 */}
                  <div className="studyhome-achievement-card studyhome-achievement-card-green">
                    <img src={imgSolarMedalStarCircleBoldDuotone1} alt="" className="studyhome-achievement-card-icon-large" />
                    <div className="studyhome-achievement-card-text">
                      <p className="studyhome-achievement-card-title">Streak Monster</p>
                      <p className="studyhome-achievement-card-subtitle">7 days in a Row</p>
                    </div>
                    <img src={imgSolarMedalStarCircleBoldDuotone} alt="" className="studyhome-achievement-card-bg-icon-large" />
                  </div>

                  {/* Expert Aviator Card (Locked) */}
                  <div className="studyhome-achievement-card studyhome-achievement-card-gray">
                    <img src={imgMaterialSymbolsLock} alt="" className="studyhome-achievement-card-icon" />
                    <div className="studyhome-achievement-card-text">
                      <p className="studyhome-achievement-card-title">Expert Aviator</p>
                      <p className="studyhome-achievement-card-subtitle">7 days in a Row</p>
                    </div>
                    <img src={imgMakiRocket} alt="" className="studyhome-achievement-card-bg-icon" />
                  </div>

                  {/* Locked Card 2 */}
                  <div className="studyhome-achievement-card studyhome-achievement-card-gray">
                    <img src={imgMaterialSymbolsLock} alt="" className="studyhome-achievement-card-icon" />
                    <div className="studyhome-achievement-card-text">
                      <p className="studyhome-achievement-card-title">Streak Monster</p>
                      <p className="studyhome-achievement-card-subtitle">7 days in a Row</p>
                    </div>
                    <img src={imgMakiRocket} alt="" className="studyhome-achievement-card-bg-icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Next Goal Section */}
            <div className="studyhome-next-goal-section">
              <div className="studyhome-next-goal-title-row">
                <p className="studyhome-next-goal-title">Next Goal : "Expert Aviator" (Level 10)</p>
                <p className="studyhome-next-goal-progress">45% to level 10</p>
              </div>
              <div className="studyhome-next-goal-bar-container">
                <div className="studyhome-next-goal-bar-track"></div>
                <div className="studyhome-next-goal-bar-fill"></div>
              </div>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="studyhome-subjects-section">
            <p className="studyhome-subjects-title">Subjects</p>
            <div className="studyhome-subjects-grid">
              {/* Air Meteorology */}
              <div className="studyhome-subject-card">
                <img src={imgRectangle4258} alt="" className="studyhome-subject-card-image" />
                <div className="studyhome-subject-card-overlay"></div>
                <div className="studyhome-subject-card-content">
                  <p className="studyhome-subject-card-title">Air Meteorolgy</p>
                  <div className="studyhome-subject-card-progress-row">
                    <div className="studyhome-subject-card-progress">
                      <div className="studyhome-subject-card-progress-track"></div>
                      <div className="studyhome-subject-card-progress-fill"></div>
                    </div>
                    <p className="studyhome-subject-card-chapters">3/12 Chapters</p>
                  </div>
                </div>
              </div>

              {/* Air Navigation */}
              <div className="studyhome-subject-card">
                <img src={imgRectangle4259} alt="" className="studyhome-subject-card-image" />
                <div className="studyhome-subject-card-overlay"></div>
                <div className="studyhome-subject-card-content">
                  <p className="studyhome-subject-card-title">Air Navigation</p>
                  <div className="studyhome-subject-card-progress-row">
                    <div className="studyhome-subject-card-progress">
                      <div className="studyhome-subject-card-progress-track"></div>
                      <div className="studyhome-subject-card-progress-fill"></div>
                    </div>
                    <p className="studyhome-subject-card-chapters">3/12 Chapters</p>
                  </div>
                </div>
              </div>

              {/* Air Regulation */}
              <div className="studyhome-subject-card">
                <img src={imgRectangle4260} alt="" className="studyhome-subject-card-image" />
                <div className="studyhome-subject-card-overlay"></div>
                <div className="studyhome-subject-card-content">
                  <p className="studyhome-subject-card-title">Air Regulation</p>
                  <div className="studyhome-subject-card-progress-row">
                    <div className="studyhome-subject-card-progress">
                      <div className="studyhome-subject-card-progress-track"></div>
                      <div className="studyhome-subject-card-progress-fill"></div>
                    </div>
                    <p className="studyhome-subject-card-chapters">3/12 Chapters</p>
                  </div>
                </div>
              </div>

              {/* Technical General */}
              <div className="studyhome-subject-card">
                <img src={imgRectangle4261} alt="" className="studyhome-subject-card-image" />
                <div className="studyhome-subject-card-overlay"></div>
                <div className="studyhome-subject-card-content">
                  <p className="studyhome-subject-card-title">Technical General</p>
                  <div className="studyhome-subject-card-progress-row">
                    <div className="studyhome-subject-card-progress">
                      <div className="studyhome-subject-card-progress-track"></div>
                      <div className="studyhome-subject-card-progress-fill"></div>
                    </div>
                    <p className="studyhome-subject-card-chapters">3/12 Chapters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

