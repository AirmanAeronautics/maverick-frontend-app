// DO NOT MODIFY OTHER FILES — export SCREEN ONLY
import React, { useState, useRef, useEffect } from 'react';
import './export.css';

// Import icons
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import downloadIcon from '../../iconoir_download.svg?url';
import arrowRightIcon from '../../arrow-right.svg?url';

const EXPORT_TYPE_OPTIONS = ['PDF', 'Excel sheet', 'CSV'];

const Export = () => {
  const [exportType, setExportType] = useState('PDF');
  const [isExportTypeOpen, setIsExportTypeOpen] = useState(false);
  const [preferredFormat, setPreferredFormat] = useState('DGCA Pdf');
  const [notificationEmail, setNotificationEmail] = useState('ops@example.com');
  const exportTypeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportTypeDropdownRef.current && !exportTypeDropdownRef.current.contains(event.target as Node)) {
        setIsExportTypeOpen(false);
      }
    };

    if (isExportTypeOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExportTypeOpen]);

  return (
    <div className="export-screen-container">
      {/* Status Bar */}
      <div className="export-screen-status-bar">
        <div className="export-screen-status-bar-left">
          <span className="export-screen-status-bar-time">9:41</span>
        </div>
        <div className="export-screen-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="export-screen-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="export-screen-status-bar-icon" />
          <img src={statusBarBatteryIcon} alt="Battery" className="export-screen-status-bar-battery" />
        </div>
      </div>

      {/* Navigation Header */}
      <div className="export-screen-header">
        <button className="export-screen-back-button" type="button">
          <img src={arrowLeftIcon} alt="Back" className="export-screen-back-arrow" />
        </button>
        <h1 className="export-screen-header-title">Export</h1>
        <div className="export-screen-header-spacer" />
      </div>

      <div className="export-screen-scroll-view">
        <div className="export-screen-scroll-content">
          {/* Information Box */}
          <div className="export-screen-info-box">
            <p className="export-screen-info-box-bold">
              Exports will include all of your logged flights.
            </p>
            <p className="export-screen-info-box-text">
              DGCA Csv/XLSX: Column order mirrors the DGCA paper logbook layout.
            </p>
            <p className="export-screen-info-box-text">
              Standard CSV/PDF: Quick snapshots for personal analysis of logbook layout.
            </p>
          </div>

          {/* DGCA / eGCA Exports Section */}
          <div className="export-screen-section">
            <div className="export-screen-title-description-frame">
              <h2 className="export-screen-section-title">DGCA / eGCA Exports</h2>
              <p className="export-screen-section-description">
                Generate DGCA-ready logbook files with official column ordering. Use them for manual eGCA uploads, printing, or sharing with operators.
              </p>
            </div>

            {/* Export Type Field and Download Button */}
            <div className="export-screen-export-type-frame">
              <label className="export-screen-field-label">Export type</label>
              <div className="export-screen-dropdown-wrapper" ref={exportTypeDropdownRef}>
                <button 
                  type="button" 
                  className="export-screen-dropdown"
                  onClick={() => setIsExportTypeOpen(!isExportTypeOpen)}
                >
                  <span className="export-screen-dropdown-text">{exportType}</span>
                  <div className={`export-screen-dropdown-chevron ${isExportTypeOpen ? 'export-screen-dropdown-chevron--open' : ''}`} />
                </button>
                {isExportTypeOpen && (
                  <div className="export-screen-dropdown-menu">
                    {EXPORT_TYPE_OPTIONS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`export-screen-dropdown-option ${exportType === option ? 'export-screen-dropdown-option--active' : ''}`}
                        onClick={() => {
                          setExportType(option);
                          setIsExportTypeOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button type="button" className="export-screen-button-primary">
                <img src={downloadIcon} alt="" className="export-screen-button-icon" />
                <span className="export-screen-button-text">Download</span>
              </button>
            </div>
          </div>

          {/* Send to eGCA Section */}
          <div className="export-screen-section">
            <div className="export-screen-title-description-frame">
              <h2 className="export-screen-section-title">
                Send to eGCA <span className="export-screen-beta-text">(beta)</span>
              </h2>
              <p className="export-screen-section-description">
                Queue a DGCA export for direct eGCA upload. We'll email you a confirmation as soon as the file is processed.
              </p>
            </div>

            {/* Preferred Format, Notification Email, and Send to eGCA Button */}
            <div className="export-screen-egca-frame">
              {/* Preferred Format Field */}
              <div className="export-screen-field-container">
                <label className="export-screen-field-label">Preferred format</label>
                <button type="button" className="export-screen-dropdown">
                  <span className="export-screen-dropdown-text">{preferredFormat}</span>
                  <div className="export-screen-dropdown-chevron" />
                </button>
              </div>

              {/* Notification Email Field */}
              <div className="export-screen-field-container">
                <label className="export-screen-field-label">Notification email</label>
                <input
                  type="email"
                  className="export-screen-input"
                  value={notificationEmail}
                  onChange={(e) => setNotificationEmail(e.target.value)}
                  placeholder="ops@example.com"
                />
              </div>

              {/* Send to eGCA Button */}
              <button type="button" className="export-screen-button-primary">
                <span className="export-screen-button-text">Send to eGCA</span>
                <img src={arrowRightIcon} alt="" className="export-screen-button-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;




