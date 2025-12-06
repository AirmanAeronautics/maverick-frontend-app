// DO NOT MODIFY OTHER FILES — Pilotinfo SCREEN ONLY
import React from 'react';
import './Pilotinfo.css';

// Image assets from Figma
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/e518b10a-4f88-4657-90dc-6ca2030cb0df';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/b68a373b-00b4-42bd-89b5-350f851f901e';
const imgWifi = 'https://www.figma.com/api/mcp/asset/8d1e73a7-f856-42df-8bad-5527661bb69b';
const imgBattery = 'https://www.figma.com/api/mcp/asset/94639649-e89c-4464-bd02-c0d121fd215c';
const imgOcticonUnverified24 = 'https://www.figma.com/api/mcp/asset/5fabf528-df70-474b-97c6-1db86335c688';
const imgTablerUpload = 'https://www.figma.com/api/mcp/asset/d10b9dd4-0df2-4241-a707-a2e3384dc52d';
const imgIconParkOutlineLoadingOne = 'https://www.figma.com/api/mcp/asset/7e8d2ba0-c215-43f6-ad11-1495d622bcc8';
const imgGroup = 'https://www.figma.com/api/mcp/asset/2322856a-f13a-4d21-9aa7-584ab67dd19c';
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/1d06ff79-742c-4f7f-af8c-3f339f28bd7c';

const Pilotinfo = () => {
  return (
    <div className="pilotinfo-container">
      {/* Status Bar */}
      <div className="pilotinfo-status-bar">
        <span className="pilotinfo-status-bar-time">9:41</span>
        <div className="pilotinfo-status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="pilotinfo-status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="pilotinfo-status-bar-wifi" />
          <div className="pilotinfo-battery-container">
            <img src={imgBattery} alt="Battery" className="pilotinfo-battery-image" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="pilotinfo-header">
        <div className="pilotinfo-back-button-container">
          <img src={imgArrowArrowLeftMd} alt="Back" className="pilotinfo-back-button-icon" />
        </div>
        <p className="pilotinfo-header-title">Aviation Info</p>
        <p className="pilotinfo-header-save">Save</p>
      </div>

      {/* Verification Banner */}
      <div className="pilotinfo-verification-banner">
        <div className="pilotinfo-verification-banner-content">
          <div className="pilotinfo-verification-banner-row">
            <div className="pilotinfo-verification-icon-container">
              <div className="pilotinfo-verification-icon-inner">
                <img src={imgGroup1} alt="Verified" className="pilotinfo-verification-icon" />
              </div>
            </div>
            <p className="pilotinfo-verification-text">Upload required documents to verify</p>
          </div>
        </div>
      </div>

      {/* Form Fields Container */}
      <div className="pilotinfo-form-container">
        {/* License level */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">License level</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-not-verified">
              <img src={imgOcticonUnverified24} alt="Not verified" className="pilotinfo-status-badge-icon" />
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area">
              <p className="pilotinfo-input-text">Commercial Pilot License</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={imgTablerUpload} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>

        {/* Type Rating */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">Type Rating</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-in-review">
              <img src={imgIconParkOutlineLoadingOne} alt="In Review" className="pilotinfo-status-badge-icon" />
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-in-review">In Review</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area pilotinfo-input-area-small">
              <p className="pilotinfo-input-text">Cessna 172</p>
            </div>
            <div className="pilotinfo-input-area pilotinfo-input-area-small pilotinfo-input-area-second">
              <p className="pilotinfo-input-text">Airbus A320</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={imgTablerUpload} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>

        {/* FTO / Airline Affiliation */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">FTO / Airline Affliation</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-verified">
              <div className="pilotinfo-verification-icon-container-small">
                <div className="pilotinfo-verification-icon-inner-small">
                  <img src={imgGroup} alt="Verified" className="pilotinfo-status-badge-icon-verified" />
                </div>
              </div>
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-verified">Verified</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area">
              <p className="pilotinfo-input-text">Blue ray Aviation</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={imgTablerUpload} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>

        {/* Total Flight Hours */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">Total Flight Hours</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-not-verified">
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area">
              <p className="pilotinfo-input-text">60 Hours</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={imgTablerUpload} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>

        {/* Medical and Rating Certificates */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">Medical and Rating Certificates</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-verified">
              <div className="pilotinfo-verification-icon-container-small">
                <div className="pilotinfo-verification-icon-inner-small">
                  <img src={imgGroup} alt="Verified" className="pilotinfo-status-badge-icon-verified" />
                </div>
              </div>
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-verified">Verified</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area">
              <p className="pilotinfo-input-text">Medical Certificates</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={imgTablerUpload} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilotinfo;

