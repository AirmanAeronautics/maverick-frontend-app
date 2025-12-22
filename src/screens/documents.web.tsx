// DO NOT MODIFY OTHER FILES — documents SCREEN ONLY
import React from 'react';
import './documents.css';

// Local SVG icon imports
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import deleteIcon from '../../fluent_delete-16-regular.svg?url';
import downloadIcon from '../../iconoir_download.svg?url';

const imgMobileSignal = signalIcon;
const imgWifi = wifiIcon;
const imgArrowArrowLeftMd = arrowLeftIcon;
const imgBattery = batteryIcon;
const imgDelete = deleteIcon;
const imgDownload = downloadIcon;

// Document data
const documents = [
  { id: 1, name: 'Pilot license.pdf', uploaded: '18 days ago', hasDelete: true },
  { id: 2, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 3, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 4, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 5, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 6, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
];

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
    <div className="docs-battery-container">
      <img src={imgBattery} alt="Battery" className="docs-battery-image" />
    </div>
  );
};

type DocumentsProps = {
  onBack?: () => void;
};

const Documents = ({ onBack }: DocumentsProps = {}) => {
  return (
    <div className="docs-container">
      {/* Status Bar */}
      <div className="docs-status-bar">
        <div className="docs-status-bar-left">
          <div className="docs-status-bar-time-container">
            <div className="docs-status-bar-time">9:41</div>
          </div>
        </div>
        <div className="docs-status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="docs-status-bar-icon" />
          <img src={imgWifi} alt="Wifi" className="docs-status-bar-wifi" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="docs-header">
        <button className="docs-back-button" onClick={onBack} type="button">
          <img src={imgArrowArrowLeftMd} alt="Back" className="docs-back-button-icon" />
        </button>
        <div className="docs-title">Documents</div>
        <div className="docs-header-spacer" />
      </div>

      {/* Content */}
      <div className="docs-scroll-view">
        <div className="docs-scroll-view-content">
          <div className="docs-section-title">Aviation Documents</div>

          {documents.map((doc) => (
            <div key={doc.id} className="docs-card">
              <div className="docs-card-content">
                <div className="docs-card-file-name">{doc.name}</div>
                <div className="docs-card-upload-date">Uploaded {doc.uploaded}</div>
                <div className="docs-card-badges">
                  <div className="docs-badge">
                    <div className="docs-badge-text">Synced</div>
                  </div>
                  <div className="docs-badge">
                    <div className="docs-badge-text">License</div>
                  </div>
                </div>
              </div>
              <div className="docs-card-actions">
                <button className="docs-action-button" type="button">
                  <img src={imgDownload} alt="Download" className="docs-download-icon" />
                </button>
                {doc.hasDelete && (
                  <button className="docs-action-button" type="button">
                    <img src={imgDelete} alt="Delete" className="docs-delete-icon" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="docs-fab" type="button">
        <div className="docs-fab-icon">+</div>
      </button>
    </div>
  );
};

export default Documents;




