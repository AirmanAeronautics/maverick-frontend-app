// DO NOT MODIFY OTHER FILES — Instructorinfo SCREEN ONLY
import React from 'react';
import './Instructorinfo.css';

// Image assets from Figma
const instImgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/e518b10a-4f88-4657-90dc-6ca2030cb0df';
const instImgMobileSignal = 'https://www.figma.com/api/mcp/asset/b68a373b-00b4-42bd-89b5-350f851f901e';
const instImgWifi = 'https://www.figma.com/api/mcp/asset/8d1e73a7-f856-42df-8bad-5527661bb69b';
const instImgBattery = 'https://www.figma.com/api/mcp/asset/94639649-e89c-4464-bd02-c0d121fd215c';
const instImgOcticonUnverified24 = 'https://www.figma.com/api/mcp/asset/5fabf528-df70-474b-97c6-1db86335c688';
const instImgTablerUpload = 'https://www.figma.com/api/mcp/asset/d10b9dd4-0df2-4241-a707-a2e3384dc52d';
const instImgIconParkOutlineLoadingOne = 'https://www.figma.com/api/mcp/asset/7e8d2ba0-c215-43f6-ad11-1495d622bcc8';
const instImgGroup = 'https://www.figma.com/api/mcp/asset/2322856a-f13a-4d21-9aa7-584ab67dd19c';
const instImgGroup1 = 'https://www.figma.com/api/mcp/asset/1d06ff79-742c-4f7f-af8c-3f339f28bd7c';

const Instructorinfo = () => {
  return (
    <div className="inst-container">
      {/* Status Bar */}
      <div className="inst-status-bar">
        <span className="inst-status-bar-time">9:41</span>
        <div className="inst-status-bar-right">
          <img src={instImgMobileSignal} alt="Signal" className="inst-status-bar-icon" />
          <img src={instImgWifi} alt="WiFi" className="inst-status-bar-wifi" />
          <div className="inst-battery-container">
            <img src={instImgBattery} alt="Battery" className="inst-battery-image" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="inst-header">
        <div className="inst-back-button-container">
          <img src={instImgArrowArrowLeftMd} alt="Back" className="inst-back-button-icon" />
        </div>
        <p className="inst-header-title">Aviation Info</p>
        <p className="inst-header-save">Save</p>
      </div>

      {/* Verification Banner */}
      <div className="inst-verification-banner">
        <div className="inst-verification-banner-content">
          <div className="inst-verification-banner-row">
            <div className="inst-verification-icon-container">
              <div className="inst-verification-icon-inner">
                <img src={instImgGroup1} alt="Verified" className="inst-verification-icon" />
              </div>
            </div>
            <p className="inst-verification-text">Upload required documents to verify</p>
          </div>
        </div>
      </div>

      {/* Form Fields Container */}
      <div className="inst-form-container">
        {/* License level */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">License level</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <img src={instImgOcticonUnverified24} alt="Not verified" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">Class 4</p>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Type Rating */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Type Rating</p>
            <div className="inst-status-badge inst-status-badge-in-review">
              <img src={instImgIconParkOutlineLoadingOne} alt="In Review" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-in-review">In Review</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area inst-input-area-small">
              <p className="inst-input-text">Cessna 172</p>
            </div>
            <div className="inst-input-area inst-input-area-small inst-input-area-second">
              <p className="inst-input-text">Airbus A320</p>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* FTO / Airline Affiliation */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">FTO / Airline Affliation</p>
            <div className="inst-status-badge inst-status-badge-verified">
              <div className="inst-verification-icon-container-small">
                <div className="inst-verification-icon-inner-small">
                  <img src={instImgGroup} alt="Verified" className="inst-status-badge-icon-verified" />
                </div>
              </div>
              <p className="inst-status-badge-text inst-status-badge-text-verified">Verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">Blue ray Aviation</p>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Total Flight Hours */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Total Flight Hours</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">60 Hours</p>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Instructor Role */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Instructor Role</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <img src={instImgOcticonUnverified24} alt="Not verified" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area inst-input-area-select">
              <select className="inst-input-select" defaultValue="Ground Instructor">
                <option value="Ground Instructor">Ground Instructor</option>
                <option value="Flight Instructor">Flight Instructor</option>
                <option value="Simulator Instructor">Simulator Instructor</option>
              </select>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Total Instruction Hours */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Total Instruction Hours</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <img src={instImgOcticonUnverified24} alt="Not verified" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">60 Hours</p>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Medical and Rating Certificates */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Medical and Rating Certificates</p>
            <div className="inst-status-badge inst-status-badge-verified">
              <div className="inst-verification-icon-container-small">
                <div className="inst-verification-icon-inner-small">
                  <img src={instImgGroup} alt="Verified" className="inst-status-badge-icon-verified" />
                </div>
              </div>
              <p className="inst-status-badge-text inst-status-badge-text-verified">Verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">Medical Certificates</p>
            </div>
            <div className="inst-upload-button">
              <img src={instImgTablerUpload} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructorinfo;

