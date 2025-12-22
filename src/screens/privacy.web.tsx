import React, { useState } from 'react';
import './privacy.css';

// Local image assets - using Vite imports for proper processing (same as adddocuments screen)
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';

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
    <div className="privacy-battery-container">
      <img src={statusBarBatteryIcon} alt="Battery level" className="privacy-battery-image" />
    </div>
  );
};

type PrivacyProps = {
  onContinue?: () => void;
};

const Privacy = ({ onContinue: _onContinue }: PrivacyProps = {}) => {
  const [privacyAllowProfileDiscovery, setPrivacyAllowProfileDiscovery] = useState(false);
  const [privacyAllowConnectionRequests, setPrivacyAllowConnectionRequests] = useState(true);
  const [privacySyncContacts, setPrivacySyncContacts] = useState(false);
  const [privacyAutoAcceptFromSchool, setPrivacyAutoAcceptFromSchool] = useState(false);

  const PrivacyToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <div 
        className={`privacy-toggle-switch ${value ? 'privacy-toggle-switch--active' : ''}`}
        onClick={() => onValueChange(!value)}
      >
        <div className="privacy-toggle-button" />
      </div>
    );
  };

  return (
    <div className="privacy-container">
      {/* Status Bar */}
      <div className="privacy-status-bar">
        <span className="privacy-status-bar-time">9:41</span>
        <div className="privacy-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="privacy-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="privacy-status-bar-wifi" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="privacy-header">
        <div className="privacy-back-button-container">
          <img src={arrowLeftIcon} alt="Back" className="privacy-back-button-icon" />
        </div>
        <p className="privacy-header-title">Privacy & Discovery</p>
        <p className="privacy-header-save">Save</p>
      </div>

      {/* Title Section */}
      <div className="privacy-title-section">
        <p className="privacy-subtitle">Control how others can find and connect with you</p>
      </div>

      {/* Cards Container */}
      <div className="privacy-cards-container">
        {/* Profile Discovery Card */}
        <div className="privacy-card">
        <div className="privacy-card-header">
          <p className="privacy-card-title">Profile Discovery</p>
          <p className="privacy-card-subtitle">Control who can find your profile</p>
        </div>
        
        <div className="privacy-setting-item">
          <div className="privacy-setting-content">
            <p className="privacy-setting-title">Allow profile discovery</p>
            <p className="privacy-setting-description">Let others find you through search and suggestions</p>
          </div>
          <div className="privacy-toggle-container">
            <PrivacyToggleSwitch value={privacyAllowProfileDiscovery} onValueChange={setPrivacyAllowProfileDiscovery} />
          </div>
        </div>

        <div className="privacy-setting-item">
          <div className="privacy-setting-content">
            <p className="privacy-setting-title">Allow connection requests</p>
            <p className="privacy-setting-description">Let others send you connection requests</p>
          </div>
          <div className="privacy-toggle-container">
            <PrivacyToggleSwitch value={privacyAllowConnectionRequests} onValueChange={setPrivacyAllowConnectionRequests} />
          </div>
        </div>
        </div>

        {/* Contact Sync Card */}
        <div className="privacy-card">
        <div className="privacy-card-header">
          <p className="privacy-card-title">Contact Sync</p>
          <p className="privacy-card-subtitle">Find friends from your contacts</p>
        </div>
        
        <div className="privacy-setting-item">
          <div className="privacy-setting-content">
            <p className="privacy-setting-title">Sync contacts</p>
            <p className="privacy-setting-description">We'll match your contacts with Maverick users. Your contacts are never shared.</p>
          </div>
          <div className="privacy-toggle-container">
            <PrivacyToggleSwitch value={privacySyncContacts} onValueChange={setPrivacySyncContacts} />
          </div>
        </div>
        </div>

        {/* Connection Preferences Card */}
        <div className="privacy-card">
        <div className="privacy-card-header">
          <p className="privacy-card-title">Connection Preferences</p>
          <p className="privacy-card-subtitle">Automatic connection settings</p>
        </div>
        
        <div className="privacy-setting-item">
          <div className="privacy-setting-content">
            <p className="privacy-setting-title">Auto-accept from same school</p>
            <p className="privacy-setting-description">Automatically accept connection requests from your flight school</p>
          </div>
          <div className="privacy-toggle-container">
            <PrivacyToggleSwitch value={privacyAutoAcceptFromSchool} onValueChange={setPrivacyAutoAcceptFromSchool} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

