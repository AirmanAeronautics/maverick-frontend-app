import React from 'react';
import './communitypage.css';
import biPersonPlusIcon from './bi_person-plus.svg?url';

// Image assets from Figma
const imgImage = "https://www.figma.com/api/mcp/asset/fef54a34-f074-4b6a-b39e-d06ad1e6d8d2";
const imgImage1 = "https://www.figma.com/api/mcp/asset/ff5e55d3-1b3f-4aff-bf35-f3e91b8c6374";
const imgOutline = "https://www.figma.com/api/mcp/asset/3b736ce2-af21-48a9-b326-0992a3bbd2b1";
const imgBatteryEnd = "https://www.figma.com/api/mcp/asset/92ac5572-b0d3-4d07-976e-09e416780e22";
const imgFill = "https://www.figma.com/api/mcp/asset/0568e182-439c-4d85-82a7-a75674fda338";
const imgWifi = "https://www.figma.com/api/mcp/asset/46af0c08-4be9-4858-9391-efdd3c25cb17";
const imgIconMobileSignal = "https://www.figma.com/api/mcp/asset/c0e73d38-0fcb-466e-938e-ff3c21f2d842";
const imgFluentPeople20Regular = "https://www.figma.com/api/mcp/asset/0a74f808-da9c-4250-9453-2485228a939c";
const imgArrowArrowLeftMd = "https://www.figma.com/api/mcp/asset/80ec8b56-948f-4271-9e53-aad5456b83dc";
const imgGroup = biPersonPlusIcon;
const imgMynauiMessage = "https://www.figma.com/api/mcp/asset/e910d120-53c9-4ff7-a3a9-c73324fd1e5b";
const imgFluentLive24Regular = "https://www.figma.com/api/mcp/asset/b6666844-cd0c-46e5-87e1-6831543a9e69";
const imgFrame = "https://www.figma.com/api/mcp/asset/9bb0a10b-c9f6-4d06-83ac-d5906c288d7b";
const imgGroup1 = biPersonPlusIcon;
const imgMynauiChatPlus = "https://www.figma.com/api/mcp/asset/e480d4e0-f4eb-48b3-9b87-a1b3d6fa4a15";

type StatusBarBatteryProps = {
  className?: string;
  darkMode?: "False";
  charge?: "100%";
  charging?: "False";
  percentage?: "False";
};

const StatusBarBattery: React.FC<StatusBarBatteryProps> = ({ 
  className, 
  darkMode = "False", 
  charge = "100%", 
  charging = "False", 
  percentage = "False" 
}) => {
  return (
    <div className={`status-bar-battery ${className || ''}`}>
      <div className="status-bar-battery__outline">
        <img alt="" className="status-bar-battery__outline-img" src={imgOutline} />
      </div>
      <div className="status-bar-battery__end">
        <img alt="" className="status-bar-battery__end-img" src={imgBatteryEnd} />
      </div>
      <div className="status-bar-battery__fill">
        <img alt="" className="status-bar-battery__fill-img" src={imgFill} />
      </div>
    </div>
  );
};

const CommunityPage: React.FC = () => {
  return (
    <div className="community-page">
      {/* Status Bar */}
      <div className="community-page__status-bar">
        <div className="status-bar__left">
          <div className="status-bar__time">
            <p className="status-bar__time-text">9:41</p>
          </div>
        </div>
        <div className="status-bar__right">
          <StatusBarBattery className="status-bar__battery" />
          <div className="status-bar__wifi">
            <img alt="" className="status-bar__wifi-img" src={imgWifi} />
          </div>
          <div className="status-bar__signal">
            <img alt="" className="status-bar__signal-img" src={imgIconMobileSignal} />
          </div>
        </div>
      </div>

      {/* Community at a glance card */}
      <div className="community-page__glance-card">
        <div className="glance-card__content">
          <p className="glance-card__title">Your community at a glance</p>
          <p className="glance-card__subtitle">See what's happening and quickly reach your people.</p>
        </div>
        <a className="glance-card__button" href="#">
          <p className="glance-card__button-text">Explore</p>
        </a>
      </div>

      {/* Stats Cards */}
      <div className="community-page__stats">
        <div className="stats-card stats-card--members">
          <div className="stats-card__content">
            <p className="stats-card__label">Members</p>
            <p className="stats-card__value">1247</p>
          </div>
          <div className="stats-card__icon">
            <img alt="" className="stats-card__icon-img" src={imgFluentPeople20Regular} />
          </div>
        </div>
        <div className="stats-card stats-card--live">
          <div className="stats-card__content">
            <p className="stats-card__label">Live now</p>
            <p className="stats-card__value">312</p>
          </div>
          <div className="stats-card__icon">
            <img alt="" className="stats-card__icon-img" src={imgFluentLive24Regular} />
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="community-page__actions">
        <a className="action-card action-card--connections" href="#">
          <div className="action-card__spacer"></div>
          <div className="action-card__arrow">
            <div className="action-card__arrow-wrapper">
              <div className="action-card__arrow-icon">
                <img alt="" className="action-card__arrow-img" src={imgArrowArrowLeftMd} />
              </div>
            </div>
          </div>
          <div className="action-card__content">
            <div className="action-card__icon-wrapper">
              <div className="action-card__icon">
                <div className="action-card__icon-inner">
                  <div className="action-card__icon-group">
                    <img alt="" className="action-card__icon-group-img" src={imgGroup} />
                  </div>
                </div>
              </div>
            </div>
            <div className="action-card__text">
              <p className="action-card__title">Connections</p>
              <p className="action-card__subtitle">Find and add new pilots</p>
            </div>
          </div>
        </a>
        <a className="action-card action-card--messages" href="#">
          <div className="action-card__spacer"></div>
          <div className="action-card__arrow">
            <div className="action-card__arrow-wrapper">
              <div className="action-card__arrow-icon">
                <img alt="" className="action-card__arrow-img" src={imgArrowArrowLeftMd} />
              </div>
            </div>
          </div>
          <div className="action-card__content">
            <div className="action-card__icon-wrapper">
              <div className="action-card__icon">
                <div className="action-card__icon-inner">
                  <div className="action-card__icon-message">
                    <img alt="" className="action-card__icon-message-img" src={imgMynauiMessage} />
                  </div>
                </div>
              </div>
            </div>
            <div className="action-card__text">
              <p className="action-card__title">Channels and Messages</p>
              <p className="action-card__subtitle">3 New Messages</p>
            </div>
          </div>
        </a>
      </div>

      {/* Action Buttons */}
      <div className="community-page__action-buttons">
        <div className="action-button action-button--primary">
          <div className="action-button__content">
            <div className="action-button__icon">
              <div className="action-button__icon-group">
                <img alt="" className="action-button__icon-group-img" src={imgGroup1} />
              </div>
            </div>
            <p className="action-button__text">Invite Members</p>
          </div>
        </div>
        <a className="action-button action-button--secondary" href="#">
          <div className="action-button__content">
            <div className="action-button__icon-secondary">
              <img alt="" className="action-button__icon-secondary-img" src={imgMynauiChatPlus} />
            </div>
            <p className="action-button__text-secondary">New Message</p>
          </div>
        </a>
      </div>

      {/* Recent Messages */}
      <div className="community-page__recent-messages">
        <div className="recent-messages__header">
          <div className="recent-messages__title-wrapper">
            <p className="recent-messages__title">Recent Messages</p>
          </div>
        </div>
        <p className="recent-messages__subtitle">Stay current with what your community is doing.</p>
        <a className="recent-message-item" href="#">
          <div className="recent-message-item__content">
            <div className="recent-message-item__avatar">
              <img alt="" className="recent-message-item__avatar-img" height="40" src={imgImage} width="40" />
            </div>
            <div className="recent-message-item__text">
              <p className="recent-message-item__name">Alex has messaged you</p>
              <p className="recent-message-item__time">2m ago</p>
            </div>
          </div>
        </a>
        <div className="recent-message-item">
          <div className="recent-message-item__content">
            <div className="recent-message-item__avatar">
              <img alt="" className="recent-message-item__avatar-img" height="40" src={imgImage1} width="40" />
            </div>
            <div className="recent-message-item__text">
              <p className="recent-message-item__name">Tom started group DM</p>
              <p className="recent-message-item__time">2m ago</p>
            </div>
          </div>
        </div>
        <div className="recent-message-item recent-message-item--last">
          <div className="recent-message-item__frame">
            <img alt="" className="recent-message-item__frame-img" src={imgFrame} />
          </div>
          <div className="recent-message-item__text recent-message-item__text--frame">
            <p className="recent-message-item__name recent-message-item__name--frame">New message from Priya</p>
            <p className="recent-message-item__time recent-message-item__time--frame">28m ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

