import React from 'react';
import './ChannelsScreen.css';

import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import addIcon from '../../add.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import pilotChannelImage from '../assets/pilot channel.png';
import { CHANNEL_CATEGORIES, type ChannelCategoryId } from './exploreChannelData';
import ChannelFollowCard from './ChannelFollowCard';

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

type ChannelsScreenEmptyProps = {
  followStates: Record<string, boolean>;
  onToggleFollow: (channelId: string) => void;
  onSeeAll: (categoryId: ChannelCategoryId) => void;
  onNavigateToMessages?: () => void;
  onNavigateToCreate?: () => void;
};

const ChannelsScreenEmpty = ({
  followStates,
  onToggleFollow,
  onSeeAll,
  onNavigateToMessages,
  onNavigateToCreate,
}: ChannelsScreenEmptyProps) => {
  const previewSections = CHANNEL_CATEGORIES.map(category => ({
    id: category.id,
    title: category.title,
    channels: category.channels.slice(0, 2),
  }));

  return (
    <div className="all-in-one-chats-container channels-screen-container channels-screen-empty">
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

      <div className="tabs-container channels-screen-tabs">
        <button className="tab-inactive" type="button" onClick={onNavigateToMessages}>
          <span className="tab-text tab-text--dimmed">Messages</span>
        </button>
        <div className="tab-active">
          <span className="tab-text">Channels</span>
        </div>
      </div>

      <div className="chat-list channels-empty-list">
        <div className="chat-list-content channels-empty-content">
          <div className="empty-state empty-state--channels">
            <div className="empty-state__emoji">
              <img
                src={pilotChannelImage}
                alt="Captain with sparkles"
                className="empty-state__image empty-state__image--channels"
              />
            </div>
            <p className="empty-state__title">Ready for takeoff?</p>
            <p className="empty-state__subtitle">Explore channels and</p>
            <p className="empty-state__subtitle">join your first flight crew!</p>
          </div>

          {previewSections.map(section => (
            <section key={section.id} className="channels-empty-section">
              <div className="channels-empty-section__header">
                <h3 className="channels-empty-section__title">{section.title}</h3>
                <button
                  type="button"
                  className="channels-empty-section__cta"
                  onClick={() => onSeeAll(section.id)}
                >
                  See all
                </button>
              </div>
              <div className="channels-empty-section__cards">
                {section.channels.map(channel => {
                  const isFollowing = Boolean(followStates[channel.id]);
                  return (
                    <ChannelFollowCard
                      key={channel.id}
                      channel={channel}
                      isFollowing={isFollowing}
                      onToggleFollow={onToggleFollow}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <button className="fab" type="button" onClick={onNavigateToCreate}>
        <img src={addIcon} alt="New channel" className="fab-icon" />
      </button>
    </div>
  );
};

export default ChannelsScreenEmpty;


