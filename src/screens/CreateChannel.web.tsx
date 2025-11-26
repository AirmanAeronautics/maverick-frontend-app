import React, { useMemo, useState } from 'react';
import './CreateChannel.css';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import channelBg from '../assets/channel Bg.png';
import backIcon from '../../Arrow_Left_MD.svg?url';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import avatarImage from '../assets/avatar-4.png';
import editIcon from '../assets/icon-fab.png';

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={batteryIcon} alt="Battery" className="battery-outline-image" />
  </div>
);

const CATEGORY_OPTIONS = ['General', 'Flight School', 'Private'] as const;
type ChannelCategory = (typeof CATEGORY_OPTIONS)[number];

const CreateChannel = () => {
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ChannelCategory>('General');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [visibility, setVisibility] = useState<'Public' | 'Private'>('Public');

  const toggleCategoryMenu = () => setIsCategoryOpen(prev => !prev);
  const handleSelectCategory = (value: ChannelCategory) => {
    setCategory(value);
    setIsCategoryOpen(false);
  };

  const categoryIcon = useMemo(() => (isCategoryOpen ? <IoChevronUp /> : <IoChevronDown />), [isCategoryOpen]);

  return (
    <div className="all-in-one-chats-container create-channel-container">
      <div className="background-wrapper">
        <img src={channelBg} alt="Channels background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={signalIcon} alt="Signal strength" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      <div className="header create-channel-header">
        <button className="back-button" type="button">
          <img src={backIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content create-channel-header-content">
          <div className="header-text-container">
            <h2 className="header-title">Create Channel</h2>
          </div>
        </div>
        <span className="header-placeholder" />
      </div>

      <div className="create-channel-content">
        <div className="create-channel-form-wrapper">
          <div className="create-channel-avatar-block">
            <div className="create-channel-avatar">
              <img src={avatarImage} alt="Channel" className="create-channel-avatar-image" />
              <button className="create-channel-avatar-edit" type="button">
                <img src={editIcon} alt="Edit avatar" className="create-channel-avatar-edit-icon" />
              </button>
            </div>
          </div>

          <form className="create-channel-form">
            <div className="create-channel-field">
              <label className="create-channel-label" htmlFor="channel-name">
                Name of the channel
              </label>
              <div className="search-input create-channel-input">
                <div className="search-content create-channel-input-content">
                  <input
                    id="channel-name"
                    className="search-text-input create-channel-text-input"
                    placeholder="Enter your channel name"
                    value={channelName}
                    onChange={event => setChannelName(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="create-channel-field">
              <label className="create-channel-label" htmlFor="channel-description">
                Description of the channel
              </label>
              <div className="search-input create-channel-input create-channel-input--textarea">
                <div className="search-content create-channel-input-content create-channel-input-content--textarea">
                  <textarea
                    id="channel-description"
                    className="search-text-input create-channel-textarea"
                    placeholder="Description of your channel name"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="create-channel-field">
              <span className="create-channel-label">Select Category</span>
              <div className="create-channel-select-stack">
                <div className="search-input create-channel-input create-channel-select">
                  <button className="create-channel-select-trigger" type="button" onClick={toggleCategoryMenu}>
                    <span>{category}</span>
                    <span className="create-channel-select-icon" aria-hidden="true">
                      {categoryIcon}
                    </span>
                  </button>
                </div>
                {isCategoryOpen ? (
                  <div className="create-channel-select-menu">
                    {CATEGORY_OPTIONS.map(option => (
                      <button
                        key={option}
                        className={[
                          'create-channel-select-option',
                          option === category ? 'create-channel-select-option--active' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        type="button"
                        onClick={() => handleSelectCategory(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="create-channel-field">
              <span className="create-channel-label">Visibility</span>
              <div className="create-channel-visibility">
                {(['Public', 'Private'] as const).map(option => (
                  <label className="create-channel-radio" key={option}>
                    <input
                      type="radio"
                      name="channel-visibility"
                      value={option}
                      checked={visibility === option}
                      onChange={() => setVisibility(option)}
                    />
                    <span className="create-channel-radio-control" />
                    <span className="create-channel-radio-label">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="create-channel-footer">
              <button className="create-channel-btn create-channel-btn--ghost" type="button">
                Cancel
              </button>
              <button className="create-channel-btn create-channel-btn--primary" type="button">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateChannel;


