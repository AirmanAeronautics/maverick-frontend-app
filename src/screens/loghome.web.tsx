// DO NOT MODIFY OTHER FILES — loghome SCREEN ONLY.
import React from 'react';
import './loghome.css';

// Image assets - Local imports
import imgWhatsAppImage20251104At140830Ee24Dbf33 from '../assets/loghome-icons/imgWhatsAppImage20251104At140830Ee24Dbf33.jpg?url';
import imgArrowArrowLeftMd from '../assets/loghome-icons/imgArrowArrowLeftMd.svg?url';
import imgTablerLogs from '../assets/loghome-icons/imgTablerLogs.svg?url';
import imgTablerLogs1 from '../assets/loghome-icons/imgTablerLogs1.svg?url';
import imgGroup from '../assets/loghome-icons/imgGroup.svg?url';
import imgGroup1 from '../assets/loghome-icons/imgGroup1.svg?url';
import imgMajesticonsAnalyticsPlusLine from '../assets/loghome-icons/imgMajesticonsAnalyticsPlusLine.svg?url';
import imgMajesticonsAnalyticsPlusLine1 from '../assets/loghome-icons/imgMajesticonsAnalyticsPlusLine1.svg?url';
import imgGroup2 from '../assets/loghome-icons/imgGroup2.svg?url';
import imgGroup3 from '../assets/loghome-icons/imgGroup3.svg?url';
import imgMobileSignal from '../assets/loghome-icons/imgMobileSignal.svg?url';
import imgWifi from '../assets/loghome-icons/imgWifi.svg?url';
import imgBattery from '../assets/loghome-icons/imgBattery.svg?url';
import imgPhArrowsClockwise from '../assets/loghome-icons/imgPhArrowsClockwise.svg?url';
import imgPhArrowsClockwise1 from '../assets/loghome-icons/imgPhArrowsClockwise1.svg?url';
import imgPhCertificateLight from '../assets/loghome-icons/imgPhCertificateLight.svg?url';
import imgPhCertificateLight1 from '../assets/loghome-icons/imgPhCertificateLight1.svg?url';

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
                <p className="loghome-card-subtitle">Track your flight currency requirements</p>
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
                <p className="loghome-card-subtitle">Manage your certificates and endorsements</p>
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




