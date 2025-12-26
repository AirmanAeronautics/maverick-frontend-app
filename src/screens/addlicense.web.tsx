// DO NOT MODIFY OTHER FILES — addlicense SCREEN ONLY
import React, { useState, useEffect, useRef } from 'react';
import './addlicense.css';

// Local image assets - using Vite imports for proper processing
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import calendarIcon from '../assets/calendar-icon.svg?url';
import chevronDownIcon from '../assets/chevron-down.svg?url';

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
    <div className="addlicense-battery-container">
      <img src={statusBarBatteryIcon} alt="Battery level" className="addlicense-status-bar-battery" />
    </div>
  );
};

type AddLicenseProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const AddLicense = ({ onBack, onSave }: AddLicenseProps) => {
  const [type, setType] = useState('License');
  const [name, setName] = useState('');
  const [issuingAuthority, setIssuingAuthority] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const typeOptions = ['License', 'Certificate', 'Rating', 'Endorsement'];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowTypeDropdown(false);
      }
    };

    if (showTypeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTypeDropdown]);

  return (
    <div className="addlicense-container">
      {/* Status Bar */}
      <div className="addlicense-status-bar">
        <div className="addlicense-status-bar-left">
          <span className="addlicense-status-bar-time">9:41</span>
        </div>
        <div className="addlicense-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="addlicense-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="addlicense-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="addlicense-header">
        <button className="addlicense-back-button" onClick={onBack}>
          <img src={arrowLeftIcon} alt="Back" className="addlicense-back-icon" />
        </button>
        <h2 className="addlicense-header-title">Add Certificate</h2>
        <button className="addlicense-save-button" type="button" onClick={onSave}>
          <span className="addlicense-save-text">Save</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="addlicense-scroll-view">
        <div className="addlicense-scroll-content">
          {/* Type Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Type</label>
            <div className="addlicense-dropdown-wrapper" ref={dropdownRef}>
              <div
                className="addlicense-input-container"
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                style={{ cursor: 'pointer' }}
              >
                <span className={`addlicense-input-text ${type ? '' : 'addlicense-input-text-placeholder'}`}>
                  {type || 'Select type'}
                </span>
                <img src={chevronDownIcon} alt="Dropdown" className="addlicense-chevron-icon" />
              </div>
              {showTypeDropdown && (
                <div className="addlicense-dropdown-menu">
                  {typeOptions.map((option) => (
                    <div
                      key={option}
                      className="addlicense-dropdown-option"
                      onClick={() => {
                        setType(option);
                        setShowTypeDropdown(false);
                      }}
                    >
                      <span className={`addlicense-dropdown-option-text ${type === option ? 'addlicense-dropdown-option-text-active' : ''}`}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Name Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Name</label>
            <div className="addlicense-input-container">
              <input
                type="text"
                className="addlicense-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g Private Pilot License"
              />
            </div>
          </div>

          {/* Issuing Authority Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Issuing Authority</label>
            <div className="addlicense-input-container">
              <input
                type="text"
                className="addlicense-input"
                value={issuingAuthority}
                onChange={(e) => setIssuingAuthority(e.target.value)}
                placeholder="e.g FAA, DGCA"
              />
            </div>
          </div>

          {/* Issue Date Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Issue Date</label>
            <div className="addlicense-input-container">
              <img src={calendarIcon} alt="Calendar" className="addlicense-calendar-icon" />
              <input
                type="text"
                className="addlicense-input addlicense-input-with-icon"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                placeholder="Mention the Issue Date"
              />
            </div>
          </div>

          {/* Expiry Date Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Expiry Date</label>
            <div className="addlicense-input-container">
              <img src={calendarIcon} alt="Calendar" className="addlicense-calendar-icon" />
              <input
                type="text"
                className="addlicense-input addlicense-input-with-icon"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="Mention the Expiry Date"
              />
            </div>
          </div>

          {/* Certificate Number Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Certificate Number</label>
            <div className="addlicense-input-container">
              <input
                type="text"
                className="addlicense-input"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>

          {/* Notes Field */}
          <div className="addlicense-form-field">
            <label className="addlicense-form-label">Notes</label>
            <div className="addlicense-input-container addlicense-text-area-container">
              <textarea
                className="addlicense-text-area"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional notes or remark"
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLicense;









