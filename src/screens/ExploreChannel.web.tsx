import React from 'react';
import './ExploreChannel.css';

import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import {
  CHANNEL_CATEGORIES,
  CHANNEL_PREVIEW_COUNT,
  type ChannelCategoryId,
} from './exploreChannelData';
import ChannelFollowCard from './ChannelFollowCard';

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={statusBarBatteryIcon} alt="Battery level" className="battery-outline-image" />
  </div>
);

type ExploreChannelProps = {
  followStates: Record<string, boolean>;
  onToggleFollow: (channelId: string) => void;
  onSeeAll: (categoryId: ChannelCategoryId) => void;
  onBack?: () => void;
};

const ExploreChannel = ({ followStates, onToggleFollow, onSeeAll, onBack }: ExploreChannelProps) => {
  return (
    <div className="all-in-one-chats-container explore-channel-container">
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
            <h2 className="header-title">Explore Channels</h2>
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

      <div className="explore-channel-content">
        <div className="chat-list-content">
          {CHANNEL_CATEGORIES.map(category => {
            const previewChannels = category.channels.slice(0, CHANNEL_PREVIEW_COUNT);
            return (
              <section key={category.id} className="explore-channel-section">
                <div className="explore-channel-section-header">
                  <h3 className="explore-channel-section-title">{category.title}</h3>
                  <button type="button" className="explore-channel-section-cta" onClick={() => onSeeAll(category.id)}>
                    See all
                  </button>
                </div>
                <div className="explore-channel-items">
                  {previewChannels.map(channel => {
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
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreChannel;


