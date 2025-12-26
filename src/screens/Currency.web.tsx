// DO NOT MODIFY OTHER FILES — Currency SCREEN ONLY
import React from 'react';
import './Currency.css';

// Import icons
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import refreshIcon from '../../mi_refresh.svg?url';

const StatusBarBattery = () => (
  <div className="Currency-battery-container">
    <img src={statusBarBatteryIcon} alt="Battery level" className="Currency-battery-outline-image" />
  </div>
);

type CurrencyProps = {
  onBack?: () => void;
};

const Currency = ({ onBack }: CurrencyProps = {}) => {
  const currencyItems = [
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
  ];

  return (
    <div className="Currency-container">
      {/* Status Bar */}
      <div className="Currency-status-bar">
        <div className="Currency-status-bar-left">
          <div className="Currency-status-bar-time-container">
            <span className="Currency-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="Currency-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="Currency-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="Currency-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="Currency-nav-bar">
        <button className="Currency-back-button" onClick={onBack}>
          <img src={arrowLeftIcon} alt="Back" className="Currency-back-icon" />
        </button>
        <div className="Currency-nav-title">Currency</div>
        <div className="Currency-nav-right" />
      </div>

      {/* Content */}
      <div className="Currency-scroll-view">
        <div className="Currency-scroll-content">
          {/* Current Currency Section */}
          <div className="Currency-current-section">
            <h2 className="Currency-current-title">Current Currency</h2>
            <div className="Currency-current-header">
              <p className="Currency-current-description">
                Enter your details manually and get submitted to your log or
              </p>
              <button className="Currency-refresh-button">
                <img src={refreshIcon} alt="Refresh" className="Currency-refresh-icon" />
                <span className="Currency-refresh-text">Refresh Currency</span>
              </button>
            </div>
          </div>

          {/* Currency Item Cards */}
          {currencyItems.map((item, index) => (
            <div key={index} className="Currency-item-card">
              <div className="Currency-item-left">
                <div className="Currency-item-number">{item.number}</div>
                <div className="Currency-item-category">{item.category}</div>
                <div className="Currency-item-details">{item.details}</div>
              </div>
              <div className="Currency-item-right">
                <div className="Currency-item-cutoff">Cutoff : {item.cutoff}</div>
                <button className="Currency-current-button">
                  <span className="Currency-current-button-text">Current</span>
                </button>
              </div>
            </div>
          ))}

          {/* PIC Currency Card */}
          <div className="Currency-item-card Currency-item-card-pic">
            <div className="Currency-item-left">
              <div className="Currency-item-category">PIC Currency</div>
              <div className="Currency-item-details">Requires valid medical . Medical : OK</div>
            </div>
            <div className="Currency-item-right Currency-item-right-pic">
              <button className="Currency-current-button">
                <span className="Currency-current-button-text">Current</span>
              </button>
            </div>
          </div>

          {/* Medical Certificate Section */}
          <div className="Currency-add-section">
            <div className="Currency-add-left">
              <div className="Currency-add-title">Medical Certificate</div>
              <div className="Currency-add-status">Not Provided</div>
            </div>
            <button className="Currency-add-button">
              <span className="Currency-add-button-plus">+</span>
              <span className="Currency-add-button-text">Add Medical Certficate</span>
            </button>
          </div>

          {/* Flight Review Section */}
          <div className="Currency-add-section">
            <div className="Currency-add-left">
              <div className="Currency-add-title">Flight Review</div>
              <div className="Currency-add-status">Not Provided</div>
            </div>
            <button className="Currency-add-button">
              <span className="Currency-add-button-plus">+</span>
              <span className="Currency-add-button-text">Add Flight Review</span>
            </button>
          </div>

          {/* Endorsements & Ratings Section */}
          <div className="Currency-add-section">
            <div className="Currency-add-left">
              <div className="Currency-add-title">Endorsements & Ratings</div>
              <div className="Currency-add-status">Not endorsements on file</div>
            </div>
            <button className="Currency-add-button">
              <span className="Currency-add-button-plus">+</span>
              <span className="Currency-add-button-text">Add Endorsement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;









