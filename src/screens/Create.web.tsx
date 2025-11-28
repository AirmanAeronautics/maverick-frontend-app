import React from 'react';
import './Create.css';

// Local image assets - using Vite imports for proper processing
import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import groupsIcon from '../../groups.svg?url';
import channelIcon from '../../channel.svg?url';
import contactIcon from '../../contact.svg?url';

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={batteryIcon} alt="Battery level" className="battery-outline-image" />
  </div>
);

type ConnectionItem = {
  id: string;
  name: string;
  subtitle: string;
  avatarUri: string;
};

const CONNECTION_ITEMS: ConnectionItem[] = [
  {
    id: 'steve1',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: 'https://www.figma.com/api/mcp/asset/aad76d2d-b0da-4c3c-a132-23ebc110011f',
  },
  {
    id: 'kavin',
    name: 'Kavin',
    subtitle: 'Flight Instructor',
    avatarUri: 'https://www.figma.com/api/mcp/asset/3e9b54fa-11d6-4ea9-a97d-abb74125bf5c',
  },
  {
    id: 'marcus',
    name: 'Marcus',
    subtitle: 'ATC',
    avatarUri: 'https://www.figma.com/api/mcp/asset/cb0a01d9-5ca6-4bf1-8968-73bbc8735ce0',
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: 'https://www.figma.com/api/mcp/asset/aad76d2d-b0da-4c3c-a132-23ebc110011f',
  },
];

type CreateOption = {
  iconUri: string;
  title: string;
  onClick?: () => void;
};

type CreateOptionsCardProps = {
  options: CreateOption[];
  width?: number;
  height?: number;
};

const CreateOptionsCard = ({ options, width = 382, height = 246 }: CreateOptionsCardProps) => {
  return (
    <div className="create-options-card-container" style={{ width, height }}>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          <div
            className="create-option-row"
            onClick={option.onClick}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                option.onClick?.();
              }
            }}
          >
            <div className="create-option-icon-container">
              <img src={option.iconUri} alt={option.title} className="create-option-icon" />
            </div>
            <p className="create-option-title">{option.title}</p>
          </div>
          {index < options.length - 1 && <div className="create-option-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

type ConnectionCardProps = {
  item: ConnectionItem;
  onClick?: (item: ConnectionItem) => void;
  width?: number;
  height?: number;
};

const ConnectionCard = ({ item, onClick, width = 382, height = 82 }: ConnectionCardProps) => {
  return (
    <div
      className="create-connection-card-container"
      style={{ width, height }}
      onClick={() => onClick?.(item)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.(item);
        }
      }}
    >
      <div className="create-connection-card-content">
        <img src={item.avatarUri} alt={item.name} className="create-connection-card-avatar" />
        <div className="create-connection-card-text-container">
          <p className="create-connection-card-name">{item.name}</p>
          <p className="create-connection-card-subtitle">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

type CreateProps = {
  onNavigateToCreateChannel?: () => void;
  onNavigateToCreateGroup?: () => void;
};

const Create = ({ onNavigateToCreateChannel, onNavigateToCreateGroup }: CreateProps) => {
  return (
    <div className="all-in-one-chats-container create-container">
      {/* Background with blur effect */}
      <div className="background-wrapper">
        <img src={channelBg} alt="Background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={signalIcon} alt="Signal" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="header create-header">
        <button className="back-button" type="button">
          <img src={arrowLeftIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content create-header-content">
          <div className="header-text-container">
          </div>
        </div>
        <span className="header-button-placeholder" />
      </div>

      {/* Search Input */}
      <div className="search-container">
        <div className="search-input-container">
          <div className="search-input">
            <div className="search-content">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input
                type="text"
                className="search-text-input"
                placeholder="Search for Channels"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="create-scroll-view">
        <div className="create-scroll-content">
          <div className="create-cards-container">
            <CreateOptionsCard
              options={[
                { iconUri: groupsIcon, title: 'New Group', onClick: onNavigateToCreateGroup },
                { iconUri: channelIcon, title: 'New Channel', onClick: onNavigateToCreateChannel },
              ]}
              width={382}
              height={205}
            />

            {/* Connection List */}
            <div className="create-connection-list-container">
              <h3 className="create-connection-list-title">Connection List</h3>
              {CONNECTION_ITEMS.map(item => (
                <ConnectionCard key={item.id} item={item} width={382} height={82} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

