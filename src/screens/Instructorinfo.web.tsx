// DO NOT MODIFY OTHER FILES — Instructorinfo SCREEN ONLY
import React from 'react';
import './Instructorinfo.css';

// Local image assets - using same icons as Pilotinfo
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import tablerUploadIcon from '../../tabler_upload.svg?url';
import unverifiedIcon from '../../unverified.svg?url';
import circleTickIcon from '../../circle-tick.svg?url';
import loadingIcon from '../../loading.svg?url';

const Instructorinfo = () => {
  return (
    <div className="inst-container">
      {/* Status Bar */}
      <div className="inst-status-bar">
        <span className="inst-status-bar-time">9:41</span>
        <div className="inst-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="inst-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="inst-status-bar-wifi" />
          <div className="inst-battery-container">
            <img src={statusBarBatteryIcon} alt="Battery" className="inst-battery-image" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="inst-header">
        <div className="inst-back-button-container">
          <img src={arrowLeftIcon} alt="Back" className="inst-back-button-icon" />
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
                <img src={circleTickIcon} alt="Verified" className="inst-verification-icon" />
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
              <img src={unverifiedIcon} alt="Not verified" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">Class 4</p>
            </div>
            <div className="inst-upload-button">
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Type Rating */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Type Rating</p>
            <div className="inst-status-badge inst-status-badge-in-review">
              <img src={loadingIcon} alt="In Review" className="inst-status-badge-icon" />
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
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
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
                  <img src={circleTickIcon} alt="Verified" className="inst-status-badge-icon-verified" />
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
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Total Flight Hours */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Total Flight Hours</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <img src={unverifiedIcon} alt="Not verified" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">60 Hours</p>
            </div>
            <div className="inst-upload-button">
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Instructor Role */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Instructor Role</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <img src={unverifiedIcon} alt="Not verified" className="inst-status-badge-icon" />
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
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>

        {/* Total Instruction Hours */}
        <div className="inst-input-field">
          <div className="inst-input-title-row">
            <p className="inst-input-title">Total Instruction Hours</p>
            <div className="inst-status-badge inst-status-badge-not-verified">
              <img src={unverifiedIcon} alt="Not verified" className="inst-status-badge-icon" />
              <p className="inst-status-badge-text inst-status-badge-text-not-verified">Not verified</p>
            </div>
          </div>
          <div className="inst-input-row">
            <div className="inst-input-area">
              <p className="inst-input-text">60 Hours</p>
            </div>
            <div className="inst-upload-button">
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
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
                  <img src={circleTickIcon} alt="Verified" className="inst-status-badge-icon-verified" />
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
              <img src={tablerUploadIcon} alt="Upload" className="inst-upload-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructorinfo;

