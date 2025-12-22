// DO NOT MODIFY OTHER FILES — home SCREEN ONLY
import React from 'react';
import './home.css';

// Image assets from local files
import imgEllipse195 from '../assets/home-icons/imgEllipse195.png?url';
import imgFrame1341 from '../assets/home-icons/imgFrame1341.svg?url';
import imgMavLogo from '../assets/home-icons/mav-logo.png?url';
import imgMaterialSymbolsLightNotificationsUnreadOutlineRounded from '../assets/home-icons/imgMaterialSymbolsLightNotificationsUnreadOutlineRounded.svg?url';
import imgMdiAirplane from '../assets/home-icons/imgMdiAirplane.svg?url';
import imgBiFire from '../assets/home-icons/imgBiFire.svg?url';
import imgMingcuteTrendingUpLine from '../assets/home-icons/imgMingcuteTrendingUpLine.svg?url';
import imgFluentWeatherRainShowersDay24Regular from '../assets/home-icons/imgFluentWeatherRainShowersDay24Regular.svg?url';
import imgGroup from '../assets/home-icons/imgGroup.svg?url';
import imgCircle from '../assets/home-icons/imgCircle.svg?url';
import imgArrowArrowLeftMd from '../assets/home-icons/imgArrowArrowLeftMd.svg?url';
import imgBasilEditOutline from '../assets/home-icons/imgBasilEditOutline.svg?url';
import imgFluentDelete16Regular from '../assets/home-icons/imgFluentDelete16Regular.svg?url';
import imgProiconsAirplane from '../assets/home-icons/imgProiconsAirplane.svg?url';
import imgThin from '../assets/home-icons/imgThin.svg?url';
import imgLine733 from '../assets/home-icons/imgLine733.svg?url';
import imgLine from '../assets/home-icons/Line.png?url';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header with gradient */}
      <div className="home-header">
        <div className="home-header-content">
          <div className="home-logo-section">
            <div className="home-logo-icon-wrapper">
              <div className="home-logo-icon-inner">
                <div className="home-logo-icon">
                  <img alt="" src={imgMavLogo} />
                </div>
              </div>
            </div>
            <div className="home-logo-text-wrapper">
              <div className="home-logo-text">
                <p>MAVERICK</p>
              </div>
            </div>
          </div>
          <div className="home-header-right">
            <div className="home-notification-icon">
              <img alt="" src={imgMaterialSymbolsLightNotificationsUnreadOutlineRounded} />
            </div>
            <div className="home-profile-avatar">
              <img alt="" src={imgEllipse195} height="26" width="26" />
            </div>
          </div>
        </div>
        <div className="home-welcome-section">
          <div className="home-welcome-title">
            <p>Welcome Sudersan👋</p>
          </div>
          <div className="home-welcome-subtitle">
            <p>Your aviation journey, simplified ✈️</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="home-main-content">
        {/* Today's Overview Section */}
        <div className="home-today-overview">
          <div className="home-section-title">
            <p>Today's Overview</p>
          </div>
          <div className="home-overview-cards">
            <div className="home-overview-card">
              <div className="home-overview-card-content">
                <div className="home-overview-card-icon-bg">
                  <div className="home-overview-card-icon">
                    <img alt="" src={imgMdiAirplane} />
                  </div>
                </div>
                <div className="home-overview-card-text">
                  <div className="home-overview-card-value">
                    <p>1250</p>
                  </div>
                  <div className="home-overview-card-label">
                    <p>Total Flight Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-overview-card home-overview-card-orange">
              <div className="home-overview-card-content">
                <div className="home-overview-card-icon-bg home-overview-card-icon-bg-orange">
                  <div className="home-overview-card-icon">
                    <img alt="" src={imgBiFire} />
                  </div>
                </div>
                <div className="home-overview-card-text">
                  <div className="home-overview-card-value">
                    <p>7 Days</p>
                  </div>
                  <div className="home-overview-card-label">
                    <p>Study Streak</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-overview-card home-overview-card-purple">
              <div className="home-overview-card-content">
                <div className="home-overview-card-icon-bg home-overview-card-icon-bg-purple">
                  <div className="home-overview-card-icon">
                    <img alt="" src={imgMingcuteTrendingUpLine} />
                  </div>
                </div>
                <div className="home-overview-card-text">
                  <div className="home-overview-card-value">
                    <p>23%</p>
                  </div>
                  <div className="home-overview-card-label">
                    <p>Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-overview-card home-overview-card-green">
              <div className="home-overview-card-content">
                <div className="home-overview-card-icon-bg home-overview-card-icon-bg-green">
                  <div className="home-overview-card-icon">
                    <img alt="" src={imgFluentWeatherRainShowersDay24Regular} />
                  </div>
                </div>
                <div className="home-overview-card-text">
                  <div className="home-overview-card-value">
                    <p>18°C</p>
                  </div>
                  <div className="home-overview-card-label">
                    <p>KJFK →VFR</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-overview-card home-overview-card-blue">
              <div className="home-overview-card-content">
                <div className="home-overview-card-icon-bg home-overview-card-icon-bg-blue">
                  <div className="home-overview-card-icon home-overview-card-icon-wind">
                    <div className="home-overview-card-icon-inner">
                      <div className="home-overview-card-icon-inner-2">
                        <img alt="" src={imgGroup} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-overview-card-text">
                  <div className="home-overview-card-value">
                    <p>10 Mph</p>
                  </div>
                  <div className="home-overview-card-label">
                    <p>East South Side</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* On Your Learning Path Section */}
        <div className="home-learning-path">
          <div className="home-section-title">
            <p>On Your Learning Path</p>
          </div>
          <div className="home-learning-card">
            <div className="home-learning-card-header">
              <div className="home-learning-card-text">
                <p className="home-learning-card-title">Air Meteorology</p>
                <p className="home-learning-card-subtitle">Continue your learning for CPL</p>
              </div>
              <div className="home-progress-circle-wrapper">
                <div className="home-progress-percentage">
                  <p>67%</p>
                </div>
                <div className="home-progress-circle">
                  <img alt="" src={imgCircle} />
                </div>
              </div>
            </div>
            <div className="home-learning-card-body">
              <div className="home-progress-section">
                <div className="home-learning-goal">
                  <p>Pass with 80% +</p>
                </div>
                <div className="home-progress-bar-container">
                  <div className="home-progress-bar-track"></div>
                  <div className="home-progress-bar-fill"></div>
                </div>
              </div>
              <div className="home-learning-card-footer">
                <div className="home-remaining-tag">
                  <p className="home-remaining-tag-text">2 Weeks Remaining</p>
                </div>
                <div className="home-continue-learning">
                  <div className="home-continue-learning-text">
                    <p>Continue Learning</p>
                  </div>
                  <div className="home-continue-learning-arrow">
                    <div className="home-continue-learning-arrow-inner">
                      <div className="home-continue-learning-arrow-icon">
                        <img alt="" src={imgArrowArrowLeftMd} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Logs Section */}
        <div className="home-recent-logs">
          <div className="home-recent-logs-header">
            <div className="home-recent-logs-title">
              <p>Recent Logs</p>
            </div>
            <div className="home-see-all">
              <p>See All</p>
            </div>
          </div>
          <div className="home-log-card">
            <div className="home-log-card-actions">
              <div className="home-log-action-icon">
                <img alt="" src={imgBasilEditOutline} />
              </div>
              <div className="home-log-action-icon">
                <img alt="" src={imgFluentDelete16Regular} />
              </div>
            </div>
            <div className="home-log-card-content">
              <div className="home-log-header">
                <div className="home-log-duration">
                  <p>6 Hours</p>
                </div>
                <div className="home-log-aircraft">
                  <div className="home-log-aircraft-icon">
                    <img alt="" src={imgProiconsAirplane} />
                  </div>
                  <div className="home-log-aircraft-text">
                    <p>Registration of Aircraft</p>
                  </div>
                </div>
              </div>
              <div className="home-log-divider">
                <img alt="" src={imgThin} />
              </div>
              <div className="home-log-flight-info">
                <div className="home-log-departure">
                  <p className="home-log-departure-code">MGM</p>
                  <p className="home-log-departure-date">Wed, 02/02/2025</p>
                </div>
                <div className="home-log-flight-tags">
                  <div className="home-log-tag-training">
                    <p className="home-log-tag-training-text">Training</p>
                  </div>
                  <div className="home-log-tag-arrow">
                    <img alt="" src={imgLine} />
                  </div>
                  <div className="home-log-tag-ifr">
                    <p className="home-log-tag-ifr-text">IFR</p>
                  </div>
                </div>
                <div className="home-log-destination">
                  <p className="home-log-destination-code">VGP</p>
                  <p className="home-log-destination-date">Wed, 02/02/2025</p>
                </div>
                <div className="home-log-arrow-line">
                  <img alt="" src={imgLine733} />
                </div>
                <div className="home-log-arrow-line-bottom">
                  <img alt="" src={imgLine733} />
                </div>
              </div>
            </div>
          </div>
          <div className="home-log-card">
            <div className="home-log-card-actions home-log-card-actions-second">
              <div className="home-log-action-icon">
                <img alt="" src={imgBasilEditOutline} />
              </div>
              <div className="home-log-action-icon">
                <img alt="" src={imgFluentDelete16Regular} />
              </div>
            </div>
            <div className="home-log-card-content">
              <div className="home-log-header">
                <div className="home-log-duration">
                  <p>6 Hours</p>
                </div>
                <div className="home-log-aircraft">
                  <div className="home-log-aircraft-icon">
                    <img alt="" src={imgProiconsAirplane} />
                  </div>
                  <div className="home-log-aircraft-text">
                    <p>Registration of Aircraft</p>
                  </div>
                </div>
              </div>
              <div className="home-log-divider">
                <img alt="" src={imgThin} />
              </div>
              <div className="home-log-flight-info">
                <div className="home-log-departure">
                  <p className="home-log-departure-code">MGM</p>
                  <p className="home-log-departure-date">Wed, 02/02/2025</p>
                </div>
                <div className="home-log-flight-tags">
                  <div className="home-log-tag-training">
                    <p className="home-log-tag-training-text">Training</p>
                  </div>
                  <div className="home-log-tag-arrow">
                    <img alt="" src={imgLine} />
                  </div>
                  <div className="home-log-tag-ifr">
                    <p className="home-log-tag-ifr-text">IFR</p>
                  </div>
                </div>
                <div className="home-log-destination">
                  <p className="home-log-destination-code">VGP</p>
                  <p className="home-log-destination-date">Wed, 02/02/2025</p>
                </div>
                <div className="home-log-arrow-line">
                  <img alt="" src={imgLine733} />
                </div>
                <div className="home-log-arrow-line-bottom">
                  <img alt="" src={imgLine733} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

