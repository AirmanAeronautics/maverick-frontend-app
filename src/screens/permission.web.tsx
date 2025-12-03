import React, { useState } from 'react';
import './permission.css';

// Image assets from Figma
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/1651ae52-0077-4ef6-9cd6-9d6890396c9a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/f8a0ee2e-0ff2-4918-a2a1-769a3c57c7ad';
const imgBattery = 'https://www.figma.com/api/mcp/asset/1bfca9be-42ad-4adb-b5ba-94228bb72f6a';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/597f51de-7c2b-491c-a8f4-c5ec727f58b6';

type PermissionProps = {
  onContinue?: () => void;
};

const Permission = ({ onContinue }: PermissionProps = {}) => {
  const [allowProfileDiscovery, setAllowProfileDiscovery] = useState(false);
  const [allowConnectionRequests, setAllowConnectionRequests] = useState(true);
  const [syncContacts, setSyncContacts] = useState(false);
  const [autoAcceptFromSchool, setAutoAcceptFromSchool] = useState(false);

  const ToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <div 
        className={`toggle-switch ${value ? 'toggle-switch--active' : ''}`}
        onClick={() => onValueChange(!value)}
      >
        <div className="toggle-button" />
      </div>
    );
  };

  return (
    <div className="permission-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-bar-time">9:41</span>
        <div className="status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="status-bar-wifi" />
          <div className="battery-container">
            <img src={imgBattery} alt="Battery" className="battery-image" />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="title-section">
        <p className="title">Privacy & Discovery</p>
        <p className="subtitle">Control how others can find and connect with you</p>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        {/* Profile Discovery Card */}
        <div className="card">
        <div className="card-header">
          <p className="card-title">Profile Discovery</p>
          <p className="card-subtitle">Control who can find your profile</p>
        </div>
        
        <div className="setting-item">
          <div className="setting-content">
            <p className="setting-title">Allow profile discovery</p>
            <p className="setting-description">Let others find you through search and suggestions</p>
          </div>
          <div className="toggle-container">
            <ToggleSwitch value={allowProfileDiscovery} onValueChange={setAllowProfileDiscovery} />
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-content">
            <p className="setting-title">Allow connection requests</p>
            <p className="setting-description">Let others send you connection requests</p>
          </div>
          <div className="toggle-container">
            <ToggleSwitch value={allowConnectionRequests} onValueChange={setAllowConnectionRequests} />
          </div>
        </div>
        </div>

        {/* Contact Sync Card */}
        <div className="card">
        <div className="card-header">
          <p className="card-title">Contact Sync</p>
          <p className="card-subtitle">Find friends from your contacts</p>
        </div>
        
        <div className="setting-item">
          <div className="setting-content">
            <p className="setting-title">Sync contacts</p>
            <p className="setting-description">We'll match your contacts with Maverick users. Your contacts are never shared.</p>
          </div>
          <div className="toggle-container">
            <ToggleSwitch value={syncContacts} onValueChange={setSyncContacts} />
          </div>
        </div>
        </div>

        {/* Connection Preferences Card */}
        <div className="card">
        <div className="card-header">
          <p className="card-title">Connection Preferences</p>
          <p className="card-subtitle">Automatic connection settings</p>
        </div>
        
        <div className="setting-item">
          <div className="setting-content">
            <p className="setting-title">Auto-accept from same school</p>
            <p className="setting-description">Automatically accept connection requests from your flight school</p>
          </div>
          <div className="toggle-container">
            <ToggleSwitch value={autoAcceptFromSchool} onValueChange={setAutoAcceptFromSchool} />
          </div>
        </div>
        </div>
      </div>

      {/* Continue Button */}
      <button 
        className="continue-button"
        onClick={onContinue}
        type="button"
      >
        <span className="continue-button-text">Continue</span>
        <div className="continue-button-icon">
          <img src={imgArrowArrowLeftMd} alt="Arrow" className="continue-button-arrow" />
        </div>
      </button>
    </div>
  );
};

export default Permission;

