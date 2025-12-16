// DO NOT MODIFY OTHER FILES — loghome SCREEN ONLY.
import React from 'react';
import './loghome.css';

// Image assets from Figma
const imgWhatsAppImage20251104At140830Ee24Dbf33 = 'https://www.figma.com/api/mcp/asset/ffeaeec6-54e4-40d7-8b86-4f6fbfccae4e';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/a8766184-a2b7-4eea-aac0-bdcd3fe433d6';
const imgTablerLogs = 'https://www.figma.com/api/mcp/asset/e9bf08e6-fb17-45a8-a158-a767a19648d4';
const imgTablerLogs1 = 'https://www.figma.com/api/mcp/asset/96a5fdc5-5180-4dbc-9307-ce38e7c02b2f';
const imgPhArrowsClockwise = 'https://www.figma.com/api/mcp/asset/3b64184c-d2b3-49af-9bfa-d41a9af4c490';
const imgPhArrowsClockwise1 = 'https://www.figma.com/api/mcp/asset/c22df849-c075-4b82-b78b-05bbaed42c21';
const imgGroup = 'https://www.figma.com/api/mcp/asset/0c7393b2-5d9b-44cd-8eff-da7a335c2ac4';
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/6631da69-ab3c-442e-a9ba-d707b4de3c92';
const imgMajesticonsAnalyticsPlusLine = 'https://www.figma.com/api/mcp/asset/2ead85f7-00fc-49c3-bdd2-ce38eb307367';
const imgMajesticonsAnalyticsPlusLine1 = 'https://www.figma.com/api/mcp/asset/491a6748-159e-4f98-b3a8-a71b7f1e0dd6';
const imgPhCertificateLight = 'https://www.figma.com/api/mcp/asset/64618c3e-bcbe-4a7d-9e48-20e74ea2e239';
const imgPhCertificateLight1 = 'https://www.figma.com/api/mcp/asset/919a6d10-a53c-4ba9-8a1c-81f0811876f1';
const imgGroup2 = 'https://www.figma.com/api/mcp/asset/1f403974-4351-4597-b76a-44b9234d07b6';
const imgGroup3 = 'https://www.figma.com/api/mcp/asset/d615e170-f5ed-44e7-b4aa-16d69801595d';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/9b842be9-a029-48b6-b584-6ec193ac368a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/42febd90-d513-4b02-b98a-afa0ca5c3a72';
const imgBattery = 'https://www.figma.com/api/mcp/asset/40c50d6b-858c-4e69-99f4-020c87916565';

type LogHomeProps = {
  onAddLog?: () => void;
  onCardPress?: (cardType: string) => void;
};

const LogHome = ({ onAddLog, onCardPress }: LogHomeProps = {}) => {
  return (
    <div className="loghome-container">
      {/* Status Bar */}
      <div className="loghome-status-bar">
        <span className="loghome-status-bar-time">9:41</span>
        <div className="loghome-status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="loghome-status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="loghome-status-bar-wifi" />
          <div className="loghome-battery-container">
            <img src={imgBattery} alt="Battery" className="loghome-battery-image" />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="loghome-main-content">
        {/* Add New Log Card */}
        <div className="loghome-add-card">
          <div className="loghome-add-card-content">
            <p className="loghome-add-card-title">Add New Log</p>
            <p className="loghome-add-card-subtitle">Digitalize your logs and make it organized</p>
          </div>
          <button 
            className="loghome-add-button"
            onClick={onAddLog}
            type="button"
          >
            <span className="loghome-add-button-text">Add </span>
            <div className="loghome-add-button-icon">
              <img src={imgArrowArrowLeftMd} alt="Arrow" className="loghome-add-button-arrow" />
            </div>
          </button>
        </div>

        {/* Category Cards Container */}
        <div className="loghome-cards-container">
          {/* Logbook Card */}
          <div 
            className="loghome-card loghome-card-logbook"
            onClick={() => onCardPress?.('logbook')}
          >
            <img 
              src={imgTablerLogs} 
              alt="Logbook" 
              className="loghome-card-bg-icon"
            />
            <div className="loghome-card-content">
              <img 
                src={imgTablerLogs1} 
                alt="Logbook Icon" 
                className="loghome-card-icon"
              />
              <div className="loghome-card-text">
                <p className="loghome-card-title loghome-card-title-logbook">Logbook</p>
                <p className="loghome-card-subtitle">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>
          </div>

          {/* Currency Card */}
          <div 
            className="loghome-card loghome-card-currency"
            onClick={() => onCardPress?.('currency')}
          >
            <img 
              src={imgPhArrowsClockwise} 
              alt="Currency" 
              className="loghome-card-bg-icon-currency"
            />
            <div className="loghome-card-content">
              <img 
                src={imgPhArrowsClockwise1} 
                alt="Currency Icon" 
                className="loghome-card-icon"
              />
              <div className="loghome-card-text">
                <p className="loghome-card-title loghome-card-title-currency">Currency</p>
                <p className="loghome-card-subtitle">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>
          </div>

          {/* Documents Card */}
          <div 
            className="loghome-card loghome-card-documents"
            onClick={() => onCardPress?.('documents')}
          >
            <div className="loghome-card-bg-icon-wrapper">
              <img 
                src={imgGroup} 
                alt="Documents" 
                className="loghome-card-bg-icon-documents"
              />
            </div>
            <div className="loghome-card-content">
              <div className="loghome-card-icon-wrapper">
                <img 
                  src={imgGroup1} 
                  alt="Documents Icon" 
                  className="loghome-card-icon-documents"
                />
              </div>
              <div className="loghome-card-text">
                <p className="loghome-card-title loghome-card-title-documents">Documents</p>
                <p className="loghome-card-subtitle">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>
          </div>

          {/* Analytics Card */}
          <div 
            className="loghome-card loghome-card-analytics"
            onClick={() => onCardPress?.('analytics')}
          >
            <img 
              src={imgMajesticonsAnalyticsPlusLine} 
              alt="Analytics" 
              className="loghome-card-bg-icon-analytics"
            />
            <div className="loghome-card-content">
              <img 
                src={imgMajesticonsAnalyticsPlusLine1} 
                alt="Analytics Icon" 
                className="loghome-card-icon"
              />
              <div className="loghome-card-text">
                <p className="loghome-card-title loghome-card-title-analytics">Analytics</p>
                <p className="loghome-card-subtitle">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>
          </div>

          {/* Certificates Card */}
          <div 
            className="loghome-card loghome-card-certificates"
            onClick={() => onCardPress?.('certificates')}
          >
            <img 
              src={imgPhCertificateLight} 
              alt="Certificates" 
              className="loghome-card-bg-icon-certificates"
            />
            <div className="loghome-card-content">
              <img 
                src={imgPhCertificateLight1} 
                alt="Certificates Icon" 
                className="loghome-card-icon"
              />
              <div className="loghome-card-text">
                <p className="loghome-card-title loghome-card-title-certificates">Certificates</p>
                <p className="loghome-card-subtitle">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>
          </div>

          {/* Export Card */}
          <div 
            className="loghome-card loghome-card-export"
            onClick={() => onCardPress?.('export')}
          >
            <div className="loghome-card-bg-icon-wrapper-export">
              <img 
                src={imgGroup2} 
                alt="Export" 
                className="loghome-card-bg-icon-export"
              />
            </div>
            <div className="loghome-card-content">
              <div className="loghome-card-icon-wrapper-export">
                <img 
                  src={imgGroup3} 
                  alt="Export Icon" 
                  className="loghome-card-icon-export"
                />
              </div>
              <div className="loghome-card-text">
                <p className="loghome-card-title loghome-card-title-export">Export</p>
                <p className="loghome-card-subtitle">Interactive Pdf study with AI Assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogHome;



