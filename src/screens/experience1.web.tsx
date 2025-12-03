// DO NOT MODIFY OTHER FILES — PERMISSION SCREEN ONLY
import React, { useState } from 'react';
import './experience1.css';

// Image assets from Figma
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/1651ae52-0077-4ef6-9cd6-9d6890396c9a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/f8a0ee2e-0ff2-4918-a2a1-769a3c57c7ad';
const imgBattery = 'https://www.figma.com/api/mcp/asset/1bfca9be-42ad-4adb-b5ba-94228bb72f6a';
const imgCamera = 'https://www.figma.com/api/mcp/asset/09a6bdb3-a23a-4a4d-9157-94bf19890b5c';
const imgArrowRight = 'https://www.figma.com/api/mcp/asset/a0a150ed-628b-4591-aa35-658b2f924007';

type Experience1Props = {
  onContinue?: () => void;
};

const Experience1 = ({ onContinue }: Experience1Props = {}) => {
  const [selectedRole, setSelectedRole] = useState<'pilot' | 'instructor'>('pilot');
  const [licenseLevel, setLicenseLevel] = useState('');
  const [typeRating, setTypeRating] = useState('');
  const [ftoAffiliation, setFtoAffiliation] = useState('');
  const [pilotNumber, setPilotNumber] = useState('');

  return (
    <div className="permission-experience1-container">
      {/* Status Bar */}
      <div className="permission-status-bar">
        <span className="permission-status-bar-time">9:41</span>
        <div className="permission-status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="permission-status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="permission-status-bar-wifi" />
          <div className="permission-battery-container">
            <img src={imgBattery} alt="Battery" className="permission-battery-image" />
          </div>
        </div>
      </div>

      {/* Step Header */}
      <div className="permission-step-header">
        <p className="permission-step-text">Step 2 of 2</p>
        <div className="permission-progress-container">
          <div className="permission-progress-dot-active"></div>
          <div className="permission-progress-dot-active"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="permission-content-container">
        {/* Title Section */}
        <div className="permission-title-section">
          <p className="permission-title">Your Flight Experience</p>
          <p className="permission-subtitle">Let's build your profile</p>
        </div>

        {/* Segmented Control */}
        <div className="permission-segmented-control">
          <button
            className={`permission-segment-button ${selectedRole === 'pilot' ? 'permission-segment-button-active' : ''}`}
            onClick={() => setSelectedRole('pilot')}
            type="button"
          >
            <span className="permission-segment-button-text">Pilot</span>
          </button>
          <button
            className={`permission-segment-button ${selectedRole === 'instructor' ? 'permission-segment-button-active' : ''}`}
            onClick={() => setSelectedRole('instructor')}
            type="button"
          >
            <span className="permission-segment-button-text">Flight Instructor</span>
          </button>
        </div>

        {/* Input Fields */}
        <div className="permission-input-fields">
          {/* License Level */}
          <div className="permission-input-field">
            <p className="permission-input-label">License Level</p>
            <div className="permission-input-area">
              <select
                className="permission-input-select"
                value={licenseLevel}
                onChange={(e) => setLicenseLevel(e.target.value)}
              >
                <option value="">Select your License Level</option>
                <option value="ppl">Private Pilot License (PPL)</option>
                <option value="cpl">Commercial Pilot License (CPL)</option>
                <option value="atpl">Airline Transport Pilot License (ATPL)</option>
              </select>
            </div>
          </div>

          {/* Type Rating */}
          <div className="permission-input-field">
            <p className="permission-input-label">Type Rating</p>
            <div className="permission-input-area">
              <input
                type="text"
                className="permission-input-text"
                placeholder="Enter your Type Rating"
                value={typeRating}
                onChange={(e) => setTypeRating(e.target.value)}
              />
            </div>
          </div>

          {/* FTO / Airline Affiliation */}
          <div className="permission-input-field">
            <p className="permission-input-label">FTO / Airline Affiliation</p>
            <div className="permission-input-area">
              <input
                type="text"
                className="permission-input-text"
                placeholder="Enter your FTOs / Airline Affiliation"
                value={ftoAffiliation}
                onChange={(e) => setFtoAffiliation(e.target.value)}
              />
            </div>
          </div>

          {/* Applicant Pilot Number */}
          <div className="permission-input-field">
            <p className="permission-input-label">Applicant Pilot Number</p>
            <div className="permission-input-area">
              <input
                type="text"
                className="permission-input-text"
                placeholder="Enter your Pilot Number"
                value={pilotNumber}
                onChange={(e) => setPilotNumber(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Upload License Button */}
        <button className="permission-upload-license-button" type="button">
          <div className="permission-upload-license-content">
            <div className="permission-upload-license-icon-container">
              <img src={imgCamera} alt="Camera" className="permission-upload-license-icon" />
            </div>
            <span className="permission-upload-license-text">Upload License</span>
          </div>
          <img src={imgArrowRight} alt="Arrow" className="permission-upload-license-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Experience1;

