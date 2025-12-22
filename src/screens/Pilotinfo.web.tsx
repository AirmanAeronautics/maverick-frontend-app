// DO NOT MODIFY OTHER FILES — Pilotinfo SCREEN ONLY
import React from 'react';
import './Pilotinfo.css';

// Local image assets - using Vite imports for proper processing
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import tablerUploadIcon from '../../tabler_upload.svg?url';
import unverifiedIcon from '../../unverified.svg?url';
import circleTickIcon from '../../circle-tick.svg?url';
import loadingIcon from '../../loading.svg?url';

const Pilotinfo = () => {
  return (
    <div className="pilotinfo-container">
      {/* Status Bar */}
      <div className="pilotinfo-status-bar">
        <span className="pilotinfo-status-bar-time">9:41</span>
        <div className="pilotinfo-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="pilotinfo-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="pilotinfo-status-bar-wifi" />
          <div className="pilotinfo-battery-container">
            <img src={statusBarBatteryIcon} alt="Battery" className="pilotinfo-battery-image" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="pilotinfo-header">
        <div className="pilotinfo-back-button-container">
          <img src={arrowLeftIcon} alt="Back" className="pilotinfo-back-button-icon" />
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
                <img src={circleTickIcon} alt="Verified" className="pilotinfo-verification-icon" />
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
              <img src={unverifiedIcon} alt="Not verified" className="pilotinfo-status-badge-icon" />
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area">
              <p className="pilotinfo-input-text">Commercial Pilot License</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={tablerUploadIcon} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>

        {/* Type Rating */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">Type Rating</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-in-review">
              <img src={loadingIcon} alt="In Review" className="pilotinfo-status-badge-icon" />
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
              <img src={tablerUploadIcon} alt="Upload" className="pilotinfo-upload-icon" />
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
                  <img src={circleTickIcon} alt="Verified" className="pilotinfo-status-badge-icon-verified" />
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
              <img src={tablerUploadIcon} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>

        {/* Total Flight Hours */}
        <div className="pilotinfo-input-field">
          <div className="pilotinfo-input-title-row">
            <p className="pilotinfo-input-title">Total Flight Hours</p>
            <div className="pilotinfo-status-badge pilotinfo-status-badge-not-verified">
              <img src={unverifiedIcon} alt="Not verified" className="pilotinfo-status-badge-icon" />
              <p className="pilotinfo-status-badge-text pilotinfo-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="pilotinfo-input-row">
            <div className="pilotinfo-input-area">
              <p className="pilotinfo-input-text">60 Hours</p>
            </div>
            <div className="pilotinfo-upload-button">
              <img src={tablerUploadIcon} alt="Upload" className="pilotinfo-upload-icon" />
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
                  <img src={circleTickIcon} alt="Verified" className="pilotinfo-status-badge-icon-verified" />
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
              <img src={tablerUploadIcon} alt="Upload" className="pilotinfo-upload-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilotinfo;

