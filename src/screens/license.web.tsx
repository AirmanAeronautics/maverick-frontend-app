// DO NOT MODIFY OTHER FILES — license SCREEN ONLY
import React from 'react';
import './license.css';

// Local image assets - using Vite imports for proper processing
import licenseArrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import licenseAddIcon from '../../add.svg?url';
import licenseWifiIcon from '../../Wifi.svg?url';
import licenseMobileSignalIcon from '../../Mobile Signal.svg?url';
import licenseStatusBarBatteryIcon from '../../_StatusBar-battery.svg?url';

type License = {
  id: string;
  title: string;
  licenseNumber: string;
  issuingAuthority: string;
  flagEmoji: string;
  validityStart: string;
  validityEnd: string;
};

const LICENSES: License[] = [
  {
    id: '1',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '2',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '3',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '4',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '5',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '6',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '7',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
];

type LicenseProps = {
  onBack?: () => void;
  onAddLicense?: () => void;
};

const License = ({ onBack, onAddLicense }: LicenseProps) => {
  return (
    <div className="license-container">
      {/* Status Bar */}
      <div className="license-status-bar">
        <div className="license-status-bar-left">
          <div className="license-status-bar-time-container">
            <span className="license-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="license-status-bar-right">
          <img src={licenseMobileSignalIcon} alt="Signal" className="license-status-bar-icon" />
          <img src={licenseWifiIcon} alt="WiFi" className="license-status-bar-icon" />
          <div className="license-battery-container">
            <img src={licenseStatusBarBatteryIcon} alt="Battery" className="license-battery-image" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="license-header">
        <button className="license-back-button" onClick={onBack}>
          <img src={licenseArrowLeftIcon} alt="Back" className="license-back-icon" />
        </button>
        <div className="license-header-content">
          <h2 className="license-header-title" style={{ fontSize: '20px' }}>Certificates</h2>
        </div>
      </div>

      {/* Page Title */}
      <div className="license-page-title-container">
        <h1 className="license-page-title" style={{ fontSize: '22px', fontWeight: '500', lineHeight: '28px' }}>Certificates</h1>
      </div>

      {/* License List */}
      <div className="license-list">
        <div className="license-list-content">
          {LICENSES.map((license) => (
            <div key={license.id} className="license-card">
              <div className="license-card-content">
                <div className="license-card-top-row">
                  <h3 className="license-card-title">{license.title}</h3>
                  <span className="license-card-license-number">LN: {license.licenseNumber}</span>
                </div>
                <div className="license-card-separator"></div>
                <div className="license-card-bottom-row">
                  <div className="license-card-authority">
                    <span className="license-card-authority-text">{license.issuingAuthority}</span>
                  </div>
                  <span className="license-card-validity">
                    {license.validityStart} to {license.validityEnd}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="license-fab" type="button" onClick={onAddLicense}>
        <div className="license-fab-plus"></div>
      </button>
    </div>
  );
};

export default License;
