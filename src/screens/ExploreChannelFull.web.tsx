import React from 'react';
import './ExploreChannelFull.css';

import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import { type ChannelDefinition } from './exploreChannelData';
import ChannelFollowCard from './ChannelFollowCard';

type ExploreChannelFullProps = {
  title: string;
  channels: ChannelDefinition[];
  followStates: Record<string, boolean>;
  onToggleFollow: (channelId: string) => void;
  onBack: () => void;
};

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={statusBarBatteryIcon} alt="Battery level" className="battery-outline-image" />
  </div>
);

const ExploreChannelFull = ({ title, channels, followStates, onToggleFollow, onBack }: ExploreChannelFullProps) => {
  return (
    <div className="all-in-one-chats-container explore-channel-container explore-channel-full-container">
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
        <button className="back-button" type="button" onClick={onBack}>
          <img src={arrowLeftIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content">
          <div className="header-text-container">
            <h2 className="header-title">{title}</h2>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-input-container">
          <div className="search-input">
            <div className="search-content">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input type="text" className="search-text-input" placeholder="Search channels" />
            </div>
          </div>
        </div>
      </div>

      <div className="explore-channel-full-content">
        <div className="explore-channel-full-list">
          {channels.map(channel => {
            const isFollowing = Boolean(followStates[channel.id]);
            return (
              <ChannelFollowCard
                key={channel.id}
                channel={channel}
                isFollowing={isFollowing}
                onToggleFollow={onToggleFollow}
                className="explore-channel-card"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreChannelFull;


