import React, { useState } from 'react';
import './Profile1.css';

// Image assets from Figma
const imgRectangle4250 = 'https://www.figma.com/api/mcp/asset/c2097ca7-3958-4a28-a7de-2cab572d71b7';
const imgEllipse3 = 'https://www.figma.com/api/mcp/asset/c3decf4d-f619-4fd7-8046-6af876d3b1c1';
const imgEllipse4 = 'https://www.figma.com/api/mcp/asset/c5e7549b-d505-4e32-9699-de01931cb761';
const imgEllipse5 = 'https://www.figma.com/api/mcp/asset/2d2075d8-3817-4fa0-8e7c-bf60061194e4';
const imgEllipse6 = 'https://www.figma.com/api/mcp/asset/139a7180-3380-424e-9611-362313b06a4f';
const imgImage = 'https://www.figma.com/api/mcp/asset/5dbbfcaf-276b-4b4a-8c09-6cd596b6edcb';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/0c0c65ec-6de7-4b54-bb1a-bcce626e6383';
const imgGroup = 'https://www.figma.com/api/mcp/asset/d4cead55-a938-4eed-9e45-a9f287c59ee9';
const imgOutline = 'https://www.figma.com/api/mcp/asset/f97911df-0450-47c9-9c82-c45beb4e0482';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/940aa4a9-2c56-4287-94d3-2076992c7254';
const imgFill = 'https://www.figma.com/api/mcp/asset/9c312083-ae1d-4792-872c-df2d36baf343';
const imgWifi = 'https://www.figma.com/api/mcp/asset/772d34d4-9b2c-400b-ab37-ca570f59f0e4';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/e0681899-0c1e-4e63-8e30-66fe95574bdd';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/724af93c-eabe-48e2-870f-3ad6096fa32e';
const imgLucideShare = 'https://www.figma.com/api/mcp/asset/695e6b06-467e-4c09-bd54-3b374b9891d6';
const imgLine1Owj = 'https://www.figma.com/api/mcp/asset/9aec680b-c3a6-491e-bccf-bf568306da19';
const imgLine725 = 'https://www.figma.com/api/mcp/asset/8f8bf28d-189b-454f-9685-338a52385a0f';
const imgLine726 = 'https://www.figma.com/api/mcp/asset/729616ee-d12b-4048-ab12-4bf663585e5d';

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
      <div className="battery-outline">
        <img src={imgOutline} alt="" className="battery-outline-image" />
      </div>
      <div className="battery-end">
        <img src={imgBatteryEnd} alt="" className="battery-end-image" />
      </div>
      <div className="battery-fill">
        <img src={imgFill} alt="" className="battery-fill-image" />
      </div>
    </div>
  );
};

type Profile1Props = {
  onBack?: () => void;
};

const Profile1 = ({ onBack }: Profile1Props = {}) => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(true);
  const [isLicensesExpanded, setIsLicensesExpanded] = useState(false);
  const [isInterestsExpanded, setIsInterestsExpanded] = useState(false);
  const [isConnectPending, setIsConnectPending] = useState(false);

  return (
    <div className="profile1-container">

      {/* Header Background Image */}
      <div className="header-background">
        <img src={imgRectangle4250} alt="" className="header-background-image" />
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={imgIconMobileSignal} alt="Signal" className="status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        <img src={imgArrowArrowLeftMd} alt="Back" className="back-icon" />
      </button>

      {/* Profile Image */}
      <div className="profile-image-container">
        <img src={imgImage} alt="Profile" className="profile-image" />
      </div>

      {/* Name */}
      <p className="name">Sudershan</p>

      {/* Title */}
      <p className="title">Seasoned Pilot</p>

      {/* Connections */}
      <div className="connections-container">
        <div className="joined-users">
          <div className="avatar-container">
            <img src={imgEllipse3} alt="" className="avatar" />
          </div>
          <div className="avatar-container avatar-overlap">
            <img src={imgEllipse4} alt="" className="avatar" />
          </div>
          <div className="avatar-container avatar-overlap">
            <img src={imgEllipse5} alt="" className="avatar" />
          </div>
          <div className="avatar-container avatar-overlap">
            <img src={imgEllipse6} alt="" className="avatar" />
          </div>
        </div>
        <span className="connections-count">328 </span>
        <span className="connections-label">Connections</span>
      </div>

      {/* Description */}
      <p className="description">
        Seasoned commercial pilot with over 4,500 flight hours across A320 and B737 fleets. Passionate about precision flying, safety culture, and mentoring young aviators. Dedicated to continuous learning, operational excellence, and delivering smooth skies for every passenger.
      </p>

      {/* Action Buttons */}
      <div className="action-buttons-container">
        <button 
          className={`connect-button ${isConnectPending ? 'connect-button--pending' : ''}`}
          onClick={() => setIsConnectPending(true)}
        >
          <div className="connect-button-content">
            {!isConnectPending && (
              <div className="connect-icon-container">
                <img src={imgGroup} alt="" className="connect-icon" />
              </div>
            )}
            <span className={`connect-button-text ${isConnectPending ? 'connect-button-text--pending' : ''}`}>
              {isConnectPending ? 'Pending' : 'Connect'}
            </span>
          </div>
        </button>
        <button className="share-button">
          <img src={imgLucideShare} alt="Share" className="share-icon" />
        </button>
      </div>

      {/* Divider Line */}
      <div className="divider-line">
        <img src={imgLine1Owj} alt="" className="divider-image" />
      </div>

      {/* Scrollable Content */}
      <div className="scroll-content">
        <div className="scroll-content-container">
          {/* Experience Section */}
          <div className="experience-card">
            <button 
              className="experience-header"
              onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
            >
              <span className="experience-title">Experience</span>
              <div className={`chevron-up ${!isExperienceExpanded ? 'chevron-down' : ''}`}>
                <img src={imgImage1} alt="" className="chevron-image" />
              </div>
            </button>
            {isExperienceExpanded && (
              <div className="experience-tags-container">
                <div className="experience-tag">
                  <span className="experience-tag-text">Multi Engine Piston</span>
                </div>
                <div className="experience-tag">
                  <span className="experience-tag-text">Turbo prop</span>
                </div>
                <div className="experience-tag">
                  <span className="experience-tag-text">Sea plane</span>
                </div>
                <div className="experience-tag">
                  <span className="experience-tag-text">Jet</span>
                </div>
                <div className="experience-tag">
                  <span className="experience-tag-text">Single Engine Piston</span>
                </div>
              </div>
            )}
          </div>

          {/* Divider Line 725 */}
          <div className="divider-line725">
            <img src={imgLine725} alt="" className="divider-image" />
          </div>

          {/* Licenses and Certificates */}
          <div className="section-item">
            <button 
              className="section-item-header"
              onClick={() => setIsLicensesExpanded(!isLicensesExpanded)}
            >
              <span className="section-item-text">Licenses and Certificates</span>
              <div className={`chevron-up ${!isLicensesExpanded ? 'chevron-down' : ''}`}>
                <img src={imgImage1} alt="" className="chevron-image" />
              </div>
            </button>
            {isLicensesExpanded && (
              <div className="section-item-content">
                <span className="section-item-placeholder">Content coming soon</span>
              </div>
            )}
          </div>

          {/* Divider Line 726 */}
          <div className="divider-line726">
            <img src={imgLine726} alt="" className="divider-image" />
          </div>

          {/* Home and Interests */}
          <div className="section-item">
            <button 
              className="section-item-header"
              onClick={() => setIsInterestsExpanded(!isInterestsExpanded)}
            >
              <span className="section-item-text">Home and Interests</span>
              <div className={`chevron-up ${!isInterestsExpanded ? 'chevron-down' : ''}`}>
                <img src={imgImage1} alt="" className="chevron-image" />
              </div>
            </button>
            {isInterestsExpanded && (
              <div className="section-item-content">
                <span className="section-item-placeholder">Content coming soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;

