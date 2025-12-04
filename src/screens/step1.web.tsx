import React from 'react';
import './step1.css';

// Image assets from Figma
const imgEllipse191 = 'https://www.figma.com/api/mcp/asset/d41ae17a-e008-4673-9f28-4abd21ec3f7c';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/67ff1704-0ee8-4ed6-8015-a88f41d97701';
const imgWifi = 'https://www.figma.com/api/mcp/asset/884b2c55-422d-4b8c-b058-7bc6d34663e5';
const imgBattery = 'https://www.figma.com/api/mcp/asset/c063dd3e-10c2-4340-bb76-efca961ff75d';
const img = 'https://www.figma.com/api/mcp/asset/e67cd214-48ee-44a0-9b7c-c1ffb4350aa2';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/ed06d357-8351-420d-88a1-5fb5ae10696c';
const imgArrowArrowLeftMd1 = 'https://www.figma.com/api/mcp/asset/429d6cb5-de33-48d8-b5a2-4140cc8addc4';

const Step1 = () => {
  return (
    <div className="step1-container">
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

      {/* Step Header */}
      <div className="step-header">
        <p className="step-text">Step 1 of 2</p>
        <div className="progress-container">
          <div className="progress-dot-active"></div>
          <div className="progress-dot"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Title Section */}
        <div className="title-section">
          <p className="title">Tell us about Yourself</p>
          <p className="subtitle">Let's build your profile</p>
        </div>

        {/* Profile Photo Section */}
        <div className="profile-section">
          <div className="profile-label-row">
            <p className="profile-label">Profile Photo</p>
            <p className="optional-label">Optional</p>
          </div>
          <div className="profile-upload-container">
            <div className="profile-avatar">
              <p className="profile-initials">NK</p>
            </div>
            <div className="profile-text-container">
              <p className="profile-text1">Tap to Upload your Photo</p>
              <p className="profile-text2">JPG or PNG, max 5 mb</p>
            </div>
            <button className="add-photo-button" type="button">
              <span className="add-photo-button-text">Add Photo</span>
            </button>
          </div>
        </div>

        {/* Name Input */}
        <div className="input-field">
          <p className="input-label">Name</p>
          <div className="input-area">
            <input
              type="text"
              className="input-text"
              placeholder="Enter your Full name"
            />
          </div>
        </div>

        {/* Pilot Name Input */}
        <div className="input-field">
          <p className="input-label">Call Sign</p>
          <div className="input-area">
            <input
              type="text"
              className="input-text"
              placeholder="Enter your Call Sign"
            />
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="phone-field">
          <p className="phone-label">Phone Number</p>
          <div className="phone-input-area">
            <div className="country-code-container">
              <img src={imgEllipse191} alt="Country Flag" className="country-flag" />
              <img src={img} alt="Arrow Down" className="arrow-down" />
            </div>
            <input
              type="tel"
              className="phone-input-text"
              placeholder="021345678"
            />
          </div>
        </div>

        {/* Bio Input */}
        <div className="bio-field">
          <p className="bio-label">Bio</p>
          <div className="bio-input-area">
            <textarea
              className="bio-input-text"
              placeholder="Tell us about your Aviation Journey"
              rows={3}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="previous-button" type="button">
          <img src={imgArrowArrowLeftMd} alt="Previous" className="previous-arrow" />
          <span className="previous-text">Previous</span>
        </button>
        <button className="next-button" type="button">
          <span className="next-button-text">Next</span>
          <div className="next-arrow-container">
            <img src={imgArrowArrowLeftMd1} alt="Next" className="next-arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Step1;

