import React, { useState } from 'react';
import './ChannelProfile.css';

// Local image assets - using Vite imports for proper processing
import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import followingIcon from '../../following.svg?url';
import arrowRightIcon from '../../arrow-right.svg?url';
import shareIcon from '../../share.svg?url';
import muteIcon from '../../mute.svg?url';
import globeIcon from '../../globe.svg?url';
import leaveIcon from '../../leave.svg?url';
import reportIcon from '../../report.svg?url';
import media1 from '../../1img.png';
import media2 from '../../2img.png';
import media3 from '../../3img.png';
import media4 from '../../4img.png';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={batteryIcon} alt="Battery level" className="battery-outline-image" />
  </div>
);


type ChannelProfileProps = {
  onBack?: () => void;
};

const ChannelProfile = ({ onBack }: ChannelProfileProps = {}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const channelName = 'cessna -172';
  const followerCount = '2,59,191';
  const description = 'This channel is created for Job & Internship seekers....';
  const fullDescription = 'This channel is created for Job & Internship seekers to find opportunities and connect with employers.';
  const createdDate = '02/02/24';
  const mediaCount = '3,137';

  const mediaItems = [
    { id: '1', uri: media1 },
    { id: '2', uri: media2 },
    { id: '3', uri: media3 },
    { id: '4', uri: media4 },
  ];

  return (
    <div className="all-in-one-chats-container channel-profile-container">
      {/* Background with blur effect */}
      <div className="background-wrapper">
        <img src={channelBg} alt="Background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">12:05</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={signalIcon} alt="Signal" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="channel-profile-scroll-view">
        <div className="channel-profile-scroll-content">
          {/* Header Section */}
          <div className="channel-profile-header-section">
            <button className="channel-profile-back-button" type="button" onClick={onBack}>
              <img src={arrowLeftIcon} alt="Back" className="channel-profile-back-icon" />
            </button>

            <div className="channel-profile-header-content-wrapper">
              <div className="channel-profile-image-container">
                <div className="channel-profile-image-placeholder" style={{ width: '140px', height: '140px', borderRadius: '70px' }}>
                  <span className="channel-profile-image-text">cessna -172</span>
                </div>
              </div>
              <h2 className="channel-profile-name">{channelName}</h2>
              <p className="channel-profile-follower-count">Channel • {followerCount} followers</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="channel-profile-action-buttons">
            <button className="channel-profile-action-button" type="button">
              <div className="channel-profile-action-button-content">
                <div className="channel-profile-action-button-icon">
                  <img src={followingIcon} alt="Following" className="channel-profile-action-button-icon-image" />
                </div>
                <span className="channel-profile-action-button-text">Following</span>
              </div>
            </button>

            <button className="channel-profile-action-button" type="button">
              <div className="channel-profile-action-button-content">
                <div className="channel-profile-action-button-icon">
                  <img src={arrowRightIcon} alt="Forward" className="channel-profile-action-button-icon-image" />
                </div>
                <span className="channel-profile-action-button-text">Forward</span>
              </div>
            </button>

            <button className="channel-profile-action-button" type="button">
              <div className="channel-profile-action-button-content">
                <div className="channel-profile-action-button-icon">
                  <img src={shareIcon} alt="Share" className="channel-profile-action-button-icon-image" />
                </div>
                <span className="channel-profile-action-button-text">Share</span>
              </div>
            </button>
          </div>

          {/* Description Card */}
          <div className="channel-profile-card">
            <div className="channel-profile-card-inner">
              <div className="channel-profile-description-content">
                <div className="channel-profile-description-text-container">
                  <p className="channel-profile-description-text">
                    {isDescriptionExpanded ? fullDescription : description}{' '}
                    <span
                      className="channel-profile-read-more"
                      onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      style={{ cursor: 'pointer' }}
                    >
                      Read more
                    </span>
                  </p>
                </div>
              </div>
              <div className="channel-profile-created-date-row">
                <p className="channel-profile-created-date-text">Created on {createdDate}</p>
              </div>
            </div>
          </div>

          {/* Media and Links Section */}
          <div className="channel-profile-card">
            <div className="channel-profile-card-inner">
              <div className="channel-profile-media-section-header">
                <h3 className="channel-profile-media-section-title">Media and links</h3>
                <div className="channel-profile-media-count-container">
                  <span className="channel-profile-media-count">{mediaCount}</span>
                  <span className="channel-profile-media-arrow">›</span>
                </div>
              </div>
              <div className="channel-profile-media-scroll">
                {mediaItems.map(item => (
                  <div key={item.id} className="channel-profile-media-thumbnail">
                    <img src={item.uri} alt={`Media ${item.id}`} className="channel-profile-media-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mute Notifications Card */}
          <div className="channel-profile-card">
            <div className="channel-profile-card-inner">
              <div className="channel-profile-setting-row">
                <div className="channel-profile-setting-icon-container">
                  <img src={muteIcon} alt="Mute" className="channel-profile-setting-icon-image" />
                </div>
                <span className="channel-profile-setting-text">Mute notifications</span>
                <div className="channel-profile-toggle-container">
                  <input
                    type="checkbox"
                    checked={isMuted}
                    onChange={e => setIsMuted(e.target.checked)}
                    className="channel-profile-toggle"
                    id="mute-toggle"
                  />
                  <label htmlFor="mute-toggle" className="channel-profile-toggle-label">
                    <span className="channel-profile-toggle-switch" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Public Channel Card */}
          <div className="channel-profile-card">
            <div className="channel-profile-card-inner">
              <div className="channel-profile-setting-row-with-subtitle">
                <div className="channel-profile-setting-icon-container">
                  <img src={globeIcon} alt="Globe" className="channel-profile-setting-icon-image" />
                </div>
                <div className="channel-profile-setting-text-container">
                  <span className="channel-profile-setting-text">Public channel</span>
                  <p className="channel-profile-setting-subtitle">
                    Anyone can find this channel and see what's been shared.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Unfollow Channel Card */}
          <div className="channel-profile-card">
            <div className="channel-profile-card-inner">
              <button className="channel-profile-setting-row" type="button" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', width: '100%' }}>
                <div className="channel-profile-setting-icon-container">
                  <img src={leaveIcon} alt="Leave" className="channel-profile-red-icon-image" />
                </div>
                <span className="channel-profile-setting-text channel-profile-red-text">Unfollow channel</span>
              </button>
            </div>
          </div>

          {/* Report Channel Card */}
          <div className="channel-profile-card">
            <div className="channel-profile-card-inner">
              <button className="channel-profile-setting-row" type="button" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', width: '100%' }}>
                <div className="channel-profile-setting-icon-container">
                  <img src={reportIcon} alt="Report" className="channel-profile-red-icon-image" />
                </div>
                <span className="channel-profile-setting-text channel-profile-red-text">Report channel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelProfile;

