// DO NOT MODIFY OTHER FILES — adddocuments SCREEN ONLY
import React, { useState, useRef, useEffect } from 'react';
import './adddocuments.css';

// Local image assets - using Vite imports for proper processing
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import chevronDownIcon from '../assets/chevron-down.svg?url';
import tablerUploadIcon from '../../tabler_upload.svg?url';
import pajamasRetryIcon from '../../pajamas_retry.svg?url';

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
    <div className="ad-battery-container">
      <img src={statusBarBatteryIcon} alt="Battery level" className="ad-status-bar-battery" />
    </div>
  );
};

type AddDocumentsProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const AddDocuments = ({ onBack, onSave }: AddDocumentsProps) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [notes, setNotes] = useState('');
  const [showTitleDropdown, setShowTitleDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const titleOptions = ['License', 'Certificate', 'Rating', 'Endorsement'];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowTitleDropdown(false);
      }
    };

    if (showTitleDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTitleDropdown]);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="ad-container">
      {/* Status Bar */}
      <div className="ad-status-bar">
        <div className="ad-status-bar-left">
          <span className="ad-status-bar-time">9:41</span>
        </div>
        <div className="ad-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="ad-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="ad-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="ad-header">
        <button className="ad-back-button" onClick={onBack} type="button">
          <img src={arrowLeftIcon} alt="Back" className="ad-back-icon" />
        </button>
        <h2 className="ad-header-title">Upload Documents</h2>
        <button className="ad-save-button" type="button" onClick={onSave}>
          <span className="ad-save-text">Save</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="ad-scroll-view">
        <div className="ad-scroll-content">
          {/* Title Field */}
          <div className="ad-form-field">
            <label className="ad-form-label">Title</label>
            <div className="ad-dropdown-wrapper" ref={dropdownRef}>
              <div
                className="ad-input-container"
                onClick={() => setShowTitleDropdown(!showTitleDropdown)}
              >
                <input
                  type="text"
                  className="ad-input"
                  placeholder="License"
                  value={title}
                  readOnly
                />
                <img src={chevronDownIcon} alt="Dropdown" className="ad-chevron-icon" />
              </div>
              {showTitleDropdown && (
                <div className="ad-dropdown">
                  {titleOptions.map((option) => (
                    <div
                      key={option}
                      className="ad-dropdown-item"
                      onClick={() => {
                        setTitle(option);
                        setShowTitleDropdown(false);
                      }}
                    >
                      <span className="ad-dropdown-text">{option}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Type Field */}
          <div className="ad-form-field">
            <label className="ad-form-label">Type</label>
            <div className="ad-input-container">
              <input
                type="text"
                className="ad-input"
                placeholder="e.g Class 1 Medical"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>

          {/* Upload Document Field */}
          <div className="ad-form-field">
            <label className="ad-form-label">Upload Document</label>
            <div className="ad-upload-container">
              <div className="ad-file-input-container">
                <span className="ad-file-input-text">{fileName}</span>
              </div>
              <button
                type="button"
                className="ad-upload-button"
                onClick={handleFileSelect}
              >
                <img src={tablerUploadIcon} alt="Upload" className="ad-upload-icon" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                className="ad-file-input-hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Notes Field */}
          <div className="ad-form-field">
            <label className="ad-form-label">Notes</label>
            <div className="ad-text-area-container">
              <textarea
                className="ad-text-area"
                placeholder="Additional notes or remark"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          {/* Retry Offline Documents Button */}
          <button type="button" className="ad-retry-button">
            <img src={pajamasRetryIcon} alt="Retry" className="ad-retry-icon" />
            <span className="ad-retry-text">Retry Offline Documents</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDocuments;










