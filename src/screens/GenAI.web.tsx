// DO NOT MODIFY OTHER FILES — PERMISSION SCREEN ONLY

import React from 'react';
import './GenAI.css';

// Image assets from Figma
import aiBg from '../assets/AI Bg.png?url';
import logoImg from '../assets/logo img.png?url';
import onlineDot from '../assets/online-dot.png?url';
import sendIcon from '../assets/iconamoon_send-fill.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';

const imgAvatar = logoImg;
const imgRectangle4257 = aiBg;
const imgImage = logoImg;
const imgMobileSignal = mobileSignalIcon;
const imgWifi = wifiIcon;
const imgBattery = statusBarBatteryIcon;
const imgIconamoonSendFill = sendIcon;
const imgEllipse177 = onlineDot;

const GenAI = () => {
  return (
    <div className="permission-genai-container">
      {/* Status Bar */}
      <div className="permission-status-bar">
        <div className="permission-status-bar-time">
          <p style={{ margin: 0, lineHeight: '18.365px' }}>9:41</p>
        </div>
        <div className="permission-status-bar-right">
          <div style={{ height: '11.479px', position: 'relative', flexShrink: 0, width: '20.66px' }}>
            <img alt="" className="permission-mobile-signal" src={imgMobileSignal} />
          </div>
          <div style={{ height: '12.586px', position: 'relative', flexShrink: 0, width: '17.529px' }}>
            <img alt="" className="permission-wifi" src={imgWifi} />
          </div>
          <div className="permission-battery-container">
            <img alt="" className="permission-battery" src={imgBattery} />
          </div>
        </div>
      </div>

      {/* Header Section with Sky Background */}
      <div className="permission-header-section">
        <div className="permission-header-bg">
          <img alt="" className="permission-header-bg-image" src={imgRectangle4257} />
        </div>
        <div className="permission-header-divider"></div>
        <div className="permission-chat-header">
          <div className="permission-chat-header-content">
            <div className="permission-chat-header-image">
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgImage} />
            </div>
            <div className="permission-chat-header-text">
              <p className="permission-chat-header-name">Maverick</p>
              <div className="permission-online-status">
                <div className="permission-online-dot">
                  <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgEllipse177} />
                </div>
                <p className="permission-online-text">Online</p>
              </div>
            </div>
          </div>
        </div>
        <div className="permission-header-bg-overlay"></div>
      </div>

      {/* Main Content Area */}
      <div className="permission-content-area">
        {/* Message from Maverick */}
        <div className="permission-message-container">
          <div className="permission-message-avatar">
            <img alt="" className="permission-message-avatar-image" src={imgAvatar} />
          </div>
          <div className="permission-message-content">
            <div className="permission-message-name-time">
              <div className="permission-message-name-container">
                <p className="permission-message-name">Maverick</p>
              </div>
            </div>
            <div className="permission-message-bubble">
              <p className="permission-message-text">Welcome back, Captain. Ready to take off? How can I help you today?</p>
            </div>
          </div>
        </div>

        {/* Try Asking Section */}
        <p className="permission-try-asking">Try Asking :</p>

        {/* Suggestion Buttons */}
        <div className="permission-suggestion-button permission-suggestion-button-1">
          <div className="permission-suggestion-text">
            <p style={{ margin: 0, lineHeight: 'normal' }}>Am I current to fly today?</p>
          </div>
        </div>

        <div className="permission-suggestion-button permission-suggestion-button-2">
          <div className="permission-suggestion-text">
            <p style={{ margin: 0, lineHeight: 'normal' }}>What Expires Soon?</p>
          </div>
        </div>

        <div className="permission-suggestion-button permission-suggestion-button-3">
          <div className="permission-suggestion-text">
            <p style={{ margin: 0, lineHeight: 'normal' }}>Can I carry my Passengers?</p>
          </div>
        </div>

        <div className="permission-suggestion-button permission-suggestion-button-4">
          <div className="permission-suggestion-text">
            <p style={{ margin: 0, lineHeight: 'normal' }}>Am I current for night IFR?</p>
          </div>
        </div>

        {/* Content Divider */}
        <div className="permission-content-divider"></div>

        {/* Input Container */}
        <div className="permission-input-container">
          <input 
            type="text" 
            className="permission-input-field" 
            placeholder="Type a Message"
          />
          <div className="permission-send-button">
            <div className="permission-send-button-gradient">
              <div className="permission-send-icon">
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgIconamoonSendFill} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAI;

