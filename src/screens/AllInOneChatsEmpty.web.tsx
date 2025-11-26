import React from 'react';
import './AllInOneChats.css';

import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import addIcon from '../../add.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import pilotMessageImage from '../assets/pilot message.png';

type StatusBarBatteryProps = {
  darkMode?: 'False';
  charge?: '100%';
  charging?: 'False';
  percentage?: 'False';
};

const StatusBarBattery = ({
  darkMode = 'False',
  charge = '100%',
  charging = 'False',
  percentage = 'False',
}: StatusBarBatteryProps) => {
  return (
    <div className="battery-container">
      <img src={statusBarBatteryIcon} alt="Battery level" className="battery-outline-image" />
    </div>
  );
};

type AllInOneChatsEmptyProps = {
  onNavigateToChannels?: () => void;
};

const AllInOneChatsEmpty = ({ onNavigateToChannels }: AllInOneChatsEmptyProps) => {
  return (
    <div className="all-in-one-chats-container">
      <div className="background-wrapper">
        <img src={channelBg} alt="Background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      <div className="header">
        <button className="back-button" type="button">
          <img src={arrowLeftIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content">
          <div className="header-text-container">
            <h2 className="header-title">All in One Chats</h2>
            <div className="header-subtitle-container">
              <span className="header-subtitle">Join discussion channels</span>
            </div>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-input-container">
          <div className="search-input">
            <div className="search-content">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input type="text" className="search-text-input" placeholder="Search for Channels" />
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tab-active">
          <span className="tab-text">Messages</span>
        </div>
        <button className="tab-inactive" type="button" onClick={onNavigateToChannels}>
          <span className="tab-text tab-text--dimmed">Channels</span>
        </button>
      </div>

      <div className="chat-list">
        <div className="empty-state empty-state--messages">
          <div className="empty-state__emoji">
            <img
              src={pilotMessageImage}
              alt="Pilots greeting each other"
              className="empty-state__image empty-state__image--messages"
            />
          </div>
          <p className="empty-state__title">Ready for some pilot talk?</p>
          <p className="empty-state__subtitle">Start a private sky chat!</p>
        </div>
      </div>

      <button className="fab" type="button">
        <img src={addIcon} alt="Start chat" className="fab-icon" />
      </button>
    </div>
  );
};

export default AllInOneChatsEmpty;


