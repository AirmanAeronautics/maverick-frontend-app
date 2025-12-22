// DO NOT MODIFY OTHER FILES — newuserhome SCREEN ONLY
import React, { useState } from 'react';
import './newuserhome.css';

// Image assets from Figma
const imgEllipse195 = "https://www.figma.com/api/mcp/asset/d02585cf-61a6-4d5b-ad55-90ef49e108f4";
const imgImage = "https://www.figma.com/api/mcp/asset/bd88da07-936e-4f07-a2e2-8a1018e19b3e";
const imgImage1 = "https://www.figma.com/api/mcp/asset/69853f45-5d88-4524-8838-791117d8abe9";
const imgOutline = "https://www.figma.com/api/mcp/asset/06dfc7f6-35f2-466c-ac70-fd495fc44025";
const imgBatteryEnd = "https://www.figma.com/api/mcp/asset/9f2466a1-3477-45a8-b166-85e9c488e157";
const imgFill = "https://www.figma.com/api/mcp/asset/20233499-b750-428e-955b-f81bd4f4bdeb";
const imgFrame1341 = "https://www.figma.com/api/mcp/asset/ab4cbe23-9282-425f-bd17-57021cea5508";
const imgMaterialSymbolsLightNotificationsUnreadOutlineRounded = "https://www.figma.com/api/mcp/asset/9e5aea82-30b2-492d-a060-31d596bc74e7";
const imgWifi = "https://www.figma.com/api/mcp/asset/995f6e0d-5253-441d-8e87-7bf29dee767d";
const imgIconMobileSignal = "https://www.figma.com/api/mcp/asset/80b436be-0464-4030-94d9-e7910563ea35";
const imgMdiAirplane = "https://www.figma.com/api/mcp/asset/4b6a004a-6415-4ee5-b2e2-2e4dab06a439";
const imgBiFire = "https://www.figma.com/api/mcp/asset/1c556726-1fa2-4a87-a920-b0f2a253463d";
const imgMingcuteTrendingUpLine = "https://www.figma.com/api/mcp/asset/8431cada-2667-416c-b636-a7f4c2864a5b";
const imgFluentWeatherRainShowersDay24Regular = "https://www.figma.com/api/mcp/asset/f5258e27-4b1d-4f03-b7b3-20971b88ceb8";
const imgGroup = "https://www.figma.com/api/mcp/asset/e4cf7785-d616-424a-983d-71e7b94fe197";
const imgCircle = "https://www.figma.com/api/mcp/asset/0f20540e-8cf1-4d0a-a03e-1345d21d420b";
const imgArrowArrowLeftMd = "https://www.figma.com/api/mcp/asset/27a3ee65-d5ba-41b1-88ce-b8768136b67e";
const imgFluentPeopleCommunity12Filled = "https://www.figma.com/api/mcp/asset/c65616ab-9120-4d16-9407-3990a5deaa20";
const imgArrowArrowLeftMd1 = "https://www.figma.com/api/mcp/asset/99edea97-4434-47e1-8bb6-e7bef44aa2b0";

type StatusBarBatteryProps = {
  className?: string;
};

function StatusBarBattery({ className }: StatusBarBatteryProps) {
  return (
    <div className={className}>
      <div className="newuserhome-battery-outline">
        <img className="newuserhome-battery-outline-img" alt="" src={imgOutline} />
      </div>
      <div className="newuserhome-battery-end">
        <img className="newuserhome-battery-end-img" alt="" src={imgBatteryEnd} />
      </div>
      <div className="newuserhome-battery-fill">
        <img className="newuserhome-battery-fill-img" alt="" src={imgFill} />
      </div>
    </div>
  );
}

type FollowButtonProps = {
  className?: string;
  isFollowing?: boolean;
  onClick?: () => void;
};

function FollowButton({ className, isFollowing = false, onClick }: FollowButtonProps) {
  return (
    <button 
      className={`${className} ${isFollowing ? 'newuserhome-follow-button-unfollow' : ''}`}
      onClick={onClick}
    >
      <div className="newuserhome-follow-button-text">
        <p>{isFollowing ? 'Unfollow' : 'Follow'}</p>
      </div>
    </button>
  );
}

export default function NewUserHome() {
  const [followStates, setFollowStates] = useState<Record<string, boolean>>({});

  const handleToggleFollow = (channelId: string) => {
    setFollowStates(prev => ({
      ...prev,
      [channelId]: !prev[channelId],
    }));
  };

  return (
    <div className="newuserhome-container">
      {/* Header with gradient */}
      <div className="newuserhome-header">
        <div className="newuserhome-header-content">
          <div className="newuserhome-logo-section">
            <div className="newuserhome-logo-icon-wrapper">
              <div className="newuserhome-logo-icon-inner">
                <div className="newuserhome-logo-icon">
                  <img alt="" src={imgFrame1341} />
                </div>
              </div>
            </div>
            <div className="newuserhome-logo-text-wrapper">
              <div className="newuserhome-logo-text">
                <p>MAVERICK</p>
              </div>
            </div>
          </div>
          <div className="newuserhome-header-right">
            <div className="newuserhome-notification-icon">
              <img alt="" src={imgMaterialSymbolsLightNotificationsUnreadOutlineRounded} />
            </div>
            <div className="newuserhome-profile-avatar">
              <img alt="" src={imgEllipse195} height="26" width="26" />
            </div>
          </div>
        </div>
        <div className="newuserhome-welcome-section">
          <div className="newuserhome-welcome-title">
            <p>Welcome Sudersan👋</p>
          </div>
          <div className="newuserhome-welcome-subtitle">
            <p>Your aviation journey, simplified ✈️</p>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="newuserhome-status-bar">
        <div className="newuserhome-status-bar-left">
          <div className="newuserhome-status-bar-time-container">
            <p className="newuserhome-status-bar-time">9:41</p>
          </div>
        </div>
        <div className="newuserhome-status-bar-right">
          <StatusBarBattery className="newuserhome-battery-container" />
          <div className="newuserhome-wifi-icon">
            <img alt="" src={imgWifi} />
          </div>
          <div className="newuserhome-mobile-signal-icon">
            <img alt="" src={imgIconMobileSignal} />
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="newuserhome-bottom-spacer" />

      {/* Main Content */}
      <div className="newuserhome-main-content">
        {/* Today's Overview Section */}
        <div className="newuserhome-today-overview">
          <div className="newuserhome-section-title">
            <p>Today's Overview</p>
          </div>
          <div className="newuserhome-overview-cards">
            <div className="newuserhome-overview-card">
              <div className="newuserhome-overview-card-content">
                <div className="newuserhome-overview-card-icon-bg">
                  <div className="newuserhome-overview-card-icon">
                    <img alt="" src={imgMdiAirplane} />
                  </div>
                </div>
                <div className="newuserhome-overview-card-text">
                  <div className="newuserhome-overview-card-value">
                    <p>0</p>
                  </div>
                  <div className="newuserhome-overview-card-label">
                    <p>Total Flight Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="newuserhome-overview-card newuserhome-overview-card-orange">
              <div className="newuserhome-overview-card-content">
                <div className="newuserhome-overview-card-icon-bg newuserhome-overview-card-icon-bg-orange">
                  <div className="newuserhome-overview-card-icon">
                    <img alt="" src={imgBiFire} />
                  </div>
                </div>
                <div className="newuserhome-overview-card-text">
                  <div className="newuserhome-overview-card-value">
                    <p>0 Days</p>
                  </div>
                  <div className="newuserhome-overview-card-label">
                    <p>Study Streak</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="newuserhome-overview-card newuserhome-overview-card-purple">
              <div className="newuserhome-overview-card-content">
                <div className="newuserhome-overview-card-icon-bg newuserhome-overview-card-icon-bg-purple">
                  <div className="newuserhome-overview-card-icon">
                    <img alt="" src={imgMingcuteTrendingUpLine} />
                  </div>
                </div>
                <div className="newuserhome-overview-card-text">
                  <div className="newuserhome-overview-card-value">
                    <p>0%</p>
                  </div>
                  <div className="newuserhome-overview-card-label">
                    <p>Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="newuserhome-overview-card newuserhome-overview-card-green">
              <div className="newuserhome-overview-card-content">
                <div className="newuserhome-overview-card-icon-bg newuserhome-overview-card-icon-bg-green">
                  <div className="newuserhome-overview-card-icon">
                    <img alt="" src={imgFluentWeatherRainShowersDay24Regular} />
                  </div>
                </div>
                <div className="newuserhome-overview-card-text">
                  <div className="newuserhome-overview-card-value">
                    <p>18°C</p>
                  </div>
                  <div className="newuserhome-overview-card-label">
                    <p>KJFK →VFR</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="newuserhome-overview-card newuserhome-overview-card-blue">
              <div className="newuserhome-overview-card-content">
                <div className="newuserhome-overview-card-icon-bg newuserhome-overview-card-icon-bg-blue">
                  <div className="newuserhome-overview-card-icon newuserhome-overview-card-icon-wind">
                    <div className="newuserhome-overview-card-icon-inner">
                      <div className="newuserhome-overview-card-icon-inner-2">
                        <img alt="" src={imgGroup} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newuserhome-overview-card-text">
                  <div className="newuserhome-overview-card-value">
                    <p>10 Mph</p>
                  </div>
                  <div className="newuserhome-overview-card-label">
                    <p>East South Side</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* On Your Learning Path Section */}
        <div className="newuserhome-learning-path">
          <div className="newuserhome-section-title">
            <p>On Your Learning Path</p>
          </div>
          <div className="newuserhome-learning-card">
            <div className="newuserhome-learning-card-header">
              <div className="newuserhome-learning-card-text">
                <p className="newuserhome-learning-card-title">Air Meteorology</p>
                <p className="newuserhome-learning-card-subtitle">Start your learning for CPL</p>
              </div>
              <div className="newuserhome-progress-circle-wrapper">
                <div className="newuserhome-progress-percentage">
                  <p>0%</p>
                </div>
                <div className="newuserhome-progress-circle">
                  <img alt="" src={imgCircle} />
                </div>
              </div>
            </div>
            <div className="newuserhome-learning-card-body">
              <div className="newuserhome-progress-section">
                <div className="newuserhome-learning-goal">
                  <p>Pass with 80% +</p>
                </div>
                <div className="newuserhome-progress-bar-container">
                  <div className="newuserhome-progress-bar-track"></div>
                  <div className="newuserhome-progress-bar-fill"></div>
                </div>
              </div>
              <div className="newuserhome-learning-card-footer">
                <div className="newuserhome-remaining-tag">
                  <p className="newuserhome-remaining-tag-text">Flashcards, quiz, etc</p>
                </div>
                <div className="newuserhome-continue-learning">
                  <div className="newuserhome-continue-learning-text">
                    <p>Start Learning</p>
                  </div>
                  <div className="newuserhome-continue-learning-arrow">
                    <div className="newuserhome-continue-learning-arrow-inner">
                      <div className="newuserhome-continue-learning-arrow-icon">
                        <img alt="" src={imgArrowArrowLeftMd} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Channels Section */}
        <div className="newuserhome-explore-channels">
          <div className="newuserhome-explore-channels-header">
            <div className="newuserhome-section-title">
              <p>Explore Channels</p>
            </div>
            <div className="newuserhome-see-all">
              <p>See All</p>
            </div>
          </div>
          <div className="newuserhome-channel-card">
            <div className="newuserhome-channel-card-content">
              <div className="newuserhome-channel-avatar">
                <img alt="" src={imgImage} height="48" width="48" />
              </div>
              <div className="newuserhome-channel-info">
                <div className="newuserhome-channel-name">
                  <p>Airman Support</p>
                </div>
                <div className="newuserhome-channel-followers">
                  <div className="newuserhome-channel-followers-icon">
                    <img alt="" src={imgFluentPeopleCommunity12Filled} />
                  </div>
                  <p className="newuserhome-channel-followers-text">100K followers</p>
                </div>
              </div>
              <FollowButton 
                className="newuserhome-follow-button" 
                isFollowing={followStates['airman-support']}
                onClick={() => handleToggleFollow('airman-support')}
              />
            </div>
          </div>
          <div className="newuserhome-channel-card">
            <div className="newuserhome-channel-card-content">
              <div className="newuserhome-channel-avatar">
                <img alt="" src={imgImage1} height="48" width="48" />
              </div>
              <div className="newuserhome-channel-info">
                <div className="newuserhome-channel-name">
                  <p>Jetstream</p>
                </div>
                <div className="newuserhome-channel-followers">
                  <div className="newuserhome-channel-followers-icon">
                    <img alt="" src={imgFluentPeopleCommunity12Filled} />
                  </div>
                  <p className="newuserhome-channel-followers-text">100K followers</p>
                </div>
              </div>
              <FollowButton 
                className="newuserhome-follow-button" 
                isFollowing={followStates['jetstream']}
                onClick={() => handleToggleFollow('jetstream')}
              />
            </div>
          </div>
        </div>

        {/* Recent Logs Section */}
        <div className="newuserhome-recent-logs">
          <div className="newuserhome-recent-logs-header">
            <div className="newuserhome-section-title">
              <p>Recent Logs</p>
            </div>
            <div className="newuserhome-see-all">
              <p>See All</p>
            </div>
          </div>
          <div className="newuserhome-no-logs-card">
            <div className="newuserhome-no-logs-content">
              <div className="newuserhome-no-logs-text">
                <p>No Logs Yet </p>
              </div>
              <div className="newuserhome-start-adding-logs">
                <div className="newuserhome-start-adding-logs-text">
                  <p>Start adding your logs </p>
                </div>
                <div className="newuserhome-start-adding-logs-arrow">
                  <img alt="" src={imgArrowArrowLeftMd1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

