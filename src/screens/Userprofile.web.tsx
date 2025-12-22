// DO NOT MODIFY OTHER FILES — Userprofile SCREEN ONLY
import React from 'react';
import './Userprofile.css';

// Local SVG icon imports
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import editIcon from '../../edit.svg?url';
import cameraIcon from '../../camera.svg?url';
import infoIcon from '../../info-icon.svg?url';
import chevronRightIcon from '../../arr.svg?url';

// Image assets from Figma (keeping background images that may not have local equivalents)
import imgBackgroundJet from '../../USER BG.png?url';
// Use local profile image
import imgProfilePicture from '../../prp.png?url';

// SVG Icons
import iconUserPlus from '../../user-plus.svg?url';
import iconUser from '../../user.svg?url';
import iconAirplane from '../../airplane.svg?url';
import iconShield from '../../shield.svg?url';
import iconPayments from '../../payments.svg?url';
import iconSettings from '../../settings.svg?url';
import iconLogOut from '../../log-out.svg?url';

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
    <div className="up-battery-container">
      <img src={batteryIcon} alt="Battery" className="up-battery-image" />
    </div>
  );
};

type UserprofileProps = {
  onBack?: () => void;
};

const Userprofile = ({ onBack }: UserprofileProps = {}) => {
  return (
    <div className="up-container">
      {/* Header Background Image */}
      <div className="up-header-background">
        <img src={imgBackgroundJet} alt="" className="up-header-background-image" />
        {/* Edit Background Icon */}
        <button className="up-edit-background-button" type="button">
          <div className="up-edit-background-icon">
            <img src={editIcon} alt="Edit Background" className="up-edit-background-image" />
          </div>
        </button>
      </div>

      {/* Status Bar */}
      <div className="up-status-bar">
        <div className="up-status-bar-left">
          <div className="up-status-bar-time-container">
            <span className="up-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="up-status-bar-right">
          <img src={signalIcon} alt="Signal" className="up-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="up-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Profile Picture with Progress Ring */}
      <div className="up-profile-image-container">
        <div className="up-progress-ring-container">
          <div className="up-progress-ring"></div>
          <span className="up-progress-text">20%</span>
        </div>
        <div className="up-profile-image-wrapper">
          <img 
            src={imgProfilePicture} 
            alt="Profile" 
            className="up-profile-image"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              if (target.src && !target.src.includes('data:image')) {
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23E5E5E5"/%3E%3C/svg%3E';
              }
            }}
            loading="eager"
          />
        </div>
        <button className="up-camera-button" type="button">
          <div className="up-camera-icon">
            <img src={cameraIcon} alt="Camera" className="up-camera-image" />
          </div>
        </button>
      </div>

      {/* Name */}
      <p className="up-name">Sudershan</p>

      {/* Email */}
      <p className="up-email">nathank18uiux@gmail.com</p>

      {/* Badges */}
      <div className="up-badges-container">
        <div className="up-badge-blue">
          <span className="up-badge-blue-text">Seasoned Pilot</span>
        </div>
        <div className="up-badge-blue">
          <span className="up-badge-blue-text">DGCA</span>
        </div>
        <div className="up-badge-light-blue">
          <img src={infoIcon} alt="Info" className="up-badge-info-icon" />
          <span className="up-badge-light-blue-text">Unverified</span>
        </div>
      </div>

      {/* Navigation List Items */}
      <div className="up-scroll-content">
        <div className="up-scroll-content-container">
          <button className="up-nav-item" type="button">
            <div className="up-nav-item-left">
              <img src={iconUserPlus} alt="" className="up-nav-icon" />
              <span className="up-nav-text">Invite a Friend</span>
            </div>
            <img src={chevronRightIcon} alt="" className="up-nav-chevron" />
          </button>

          <div className="up-divider-thick" />

          <button className="up-nav-item" type="button">
            <div className="up-nav-item-left">
              <img src={iconUser} alt="" className="up-nav-icon" />
              <span className="up-nav-text">Edit Personal Info</span>
            </div>
            <img src={chevronRightIcon} alt="" className="up-nav-chevron" />
          </button>

          <div className="up-divider" />

          <button className="up-nav-item" type="button">
            <div className="up-nav-item-left">
              <img src={iconAirplane} alt="" className="up-nav-icon" />
              <span className="up-nav-text">Edit Aviation Info</span>
            </div>
            <img src={chevronRightIcon} alt="" className="up-nav-chevron" />
          </button>

          <div className="up-divider" />

          <button className="up-nav-item" type="button">
            <div className="up-nav-item-left">
              <img src={iconShield} alt="" className="up-nav-icon" />
              <span className="up-nav-text">Privacy and Discovery</span>
            </div>
            <img src={chevronRightIcon} alt="" className="up-nav-chevron" />
          </button>

          <div className="up-divider" />

          <button className="up-nav-item" type="button">
            <div className="up-nav-item-left">
              <img src={iconPayments} alt="" className="up-nav-icon" />
              <span className="up-nav-text">Payments and Subscriptions</span>
            </div>
            <img src={chevronRightIcon} alt="" className="up-nav-chevron" />
          </button>

          <div className="up-divider" />

          <button className="up-nav-item" type="button">
            <div className="up-nav-item-left">
              <img src={iconSettings} alt="" className="up-nav-icon" />
              <span className="up-nav-text">Settings</span>
            </div>
            <img src={chevronRightIcon} alt="" className="up-nav-chevron" />
          </button>

          <div className="up-divider-thick" />

          {/* Log Out */}
          <button className="up-log-out-item" type="button">
            <img src={iconLogOut} alt="Log Out" className="up-log-out-icon" />
            <span className="up-log-out-text">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;

