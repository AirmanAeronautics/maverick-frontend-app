// DO NOT MODIFY OTHER FILES — loglist SCREEN ONLY
import React from 'react';
import './loglist.css';

// Image assets from Figma
const imgOutline = 'https://www.figma.com/api/mcp/asset/13d5e4cd-0c75-49bc-911e-6c91023fbf35';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/4099bdcd-0046-491a-a481-8d5b8ed37fa0';
const imgFill = 'https://www.figma.com/api/mcp/asset/e04faab5-0a04-44ab-8c09-c6a80ffdfadb';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/019c2e96-cc05-473f-b46f-e16bfc4b7efc';
const imgWifi = 'https://www.figma.com/api/mcp/asset/a62571fc-0542-4128-8a96-d09fb430066a';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/8db0de48-7703-42eb-8232-8f88849227fb';
const imgBasilEditOutline = 'https://www.figma.com/api/mcp/asset/fc7019c4-425f-4378-8f30-f1e99b1e3799';
const imgFluentDelete16Regular = 'https://www.figma.com/api/mcp/asset/dd1b5629-087a-4211-9a01-1f0e6d433491';
const imgProiconsAirplane = 'https://www.figma.com/api/mcp/asset/1d85b66f-90d5-4f32-89f2-c3991c819bbf';
const imgThin = 'https://www.figma.com/api/mcp/asset/69bfcd09-ab82-4254-b646-10747a9d9fa5';
const imgLine733 = 'https://www.figma.com/api/mcp/asset/8c7e7fde-742f-4439-a6a6-09ba79bfa560';
const imgSearch = 'https://www.figma.com/api/mcp/asset/25ec8e33-d5db-451f-afde-aa684c0f8b01';
const imgOcticonFilter16 = 'https://www.figma.com/api/mcp/asset/63abddbf-a31b-4e0d-8775-51f745560b7b';
const imgFrame1171275563 = 'https://www.figma.com/api/mcp/asset/3ca80c41-3f9f-49f8-a5d1-2af23e2b62d8';

type StatusBarBatteryProps = {
  className?: string;
};

const StatusBarBattery = ({ className }: StatusBarBatteryProps) => {
  return (
    <div className={className}>
      <div className="ll-battery-outline">
        <img className="ll-battery-outline-image" alt="" src={imgOutline} />
      </div>
      <div className="ll-battery-end">
        <img className="ll-battery-end-image" alt="" src={imgBatteryEnd} />
      </div>
      <div className="ll-battery-fill">
        <img className="ll-battery-fill-image" alt="" src={imgFill} />
      </div>
    </div>
  );
};

type LogListProps = {
  onBack?: () => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onAdd?: () => void;
};

const LogList = ({ onBack, onEdit, onDelete, onAdd }: LogListProps = {}) => {
  // Sample log entries data
  const logEntries = [
    { id: 1, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 2, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 3, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 4, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 5, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
  ];

  return (
    <div className="ll-container">
      {/* Status Bar */}
      <div className="ll-status-bar">
        <div className="ll-status-bar-left">
          <div className="ll-status-bar-time-container">
            <span className="ll-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="ll-status-bar-right">
          <img src={imgIconMobileSignal} alt="Signal" className="ll-status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="ll-status-bar-wifi" />
          <StatusBarBattery className="ll-battery-container" />
        </div>
      </div>

      {/* Header */}
      <div className="ll-header">
        <div className="ll-header-content">
          <button className="ll-back-button" type="button" onClick={onBack}>
            <img alt="" className="ll-back-button-icon" src={imgArrowArrowLeftMd} />
          </button>
          <div className="ll-header-title-container">
            <p className="ll-header-title">Logbook list</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="ll-search-filter-container">
        <div className="ll-search-input-container">
          <div className="ll-search-input">
            <div className="ll-search-input-content">
              <div className="ll-search-icon-container">
                <div className="ll-search-icon">
                  <img alt="" className="ll-search-icon-image" src={imgSearch} />
                </div>
                <span className="ll-search-placeholder">Search Your Logs</span>
              </div>
            </div>
          </div>
        </div>
        <button className="ll-filter-button" type="button">
          <div className="ll-filter-icon">
            <img alt="" className="ll-filter-icon-image" src={imgOcticonFilter16} />
          </div>
        </button>
      </div>

      {/* Log Entries List */}
      <div className="ll-list-container">
        <div className="ll-list-items">
          {logEntries.map((entry) => (
            <div key={entry.id} className="ll-log-card">
              <div className="ll-log-card-actions">
                <button
                  className="ll-edit-button"
                  type="button"
                  onClick={() => onEdit?.(entry.id)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <div className="ll-edit-icon">
                    <img alt="" className="ll-edit-icon-image" src={imgBasilEditOutline} />
                  </div>
                </button>
                <button
                  className="ll-delete-button"
                  type="button"
                  onClick={() => onDelete?.(entry.id)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <div className="ll-delete-icon">
                    <img alt="" className="ll-delete-icon-image" src={imgFluentDelete16Regular} />
                  </div>
                </button>
              </div>
              <div className="ll-log-card-content">
                <div className="ll-log-header">
                  <p className="ll-log-hours">{entry.hours}</p>
                  <div className="ll-log-registration">
                    <div className="ll-airplane-icon">
                      <img alt="" className="ll-airplane-icon-image" src={imgProiconsAirplane} />
                    </div>
                    <p className="ll-registration-text">{entry.registration}</p>
                  </div>
                </div>
                <div className="ll-divider">
                  <div className="ll-divider-line">
                    <img alt="" className="ll-divider-line-image" src={imgThin} />
                  </div>
                </div>
                <div className="ll-flight-details">
                  <div className="ll-departure">
                    <p className="ll-departure-code">{entry.departure}</p>
                    <p className="ll-departure-date">{entry.date}</p>
                  </div>
                  <div className="ll-flight-info">
                    <div className="ll-training-badge">
                      <p className="ll-training-text">Training</p>
                    </div>
                    <div className="ll-ifr-badge">
                      <p className="ll-ifr-text">IFR</p>
                    </div>
                  </div>
                  <div className="ll-destination">
                    <p className="ll-destination-code">{entry.destination}</p>
                    <p className="ll-destination-date">{entry.date}</p>
                  </div>
                  <div className="ll-arrow-line">
                    <div className="ll-arrow-line-image">
                      <img alt="" className="ll-arrow-line-image-img" src={imgLine733} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="ll-fab" type="button" onClick={onAdd}>
        <img alt="" className="ll-fab-image" src={imgFrame1171275563} />
      </button>
    </div>
  );
};

export default LogList;

