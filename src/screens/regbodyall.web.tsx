import React from 'react';
import './regbodyall.css';

// Image assets from Figma
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/bebd6a53-d1a9-4f8c-bdf3-b6ca136fe6a6';
const imgWifi = 'https://www.figma.com/api/mcp/asset/d0a0c95d-2302-4371-ba54-4ffcb65eb9b5';
const imgBattery = 'https://www.figma.com/api/mcp/asset/b7c67c85-509d-4faf-9ec1-90577d8776ce';
const imgSearch = 'https://www.figma.com/api/mcp/asset/751eebd5-c8d2-4fd7-9653-9e30a3b1fab9';

const REGULATORY_BODIES = [
  {
    id: 1,
    flag: '\u{1F1E6}\u{1F1EA}', // 🇦🇪
    name: 'United Arab Emirates – GCAA (General Civil Aviation Authority)',
  },
  {
    id: 2,
    flag: '\u{1F1E6}\u{1F1F7}', // 🇦🇷
    name: 'Argentina – ANAC (Administración Nacional de Aviación Civil)',
  },
  {
    id: 3,
    flag: '\u{1F1E7}\u{1F1F7}', // 🇧🇷
    name: 'Brazil – ANAC Brazil (Agência Nacional de Aviação Civil)',
  },
  {
    id: 4,
    flag: '\u{1F1E8}\u{1F1F1}', // 🇨🇱
    name: 'Chile – DGAC (Dirección General de Aeronáutica Civil)',
  },
  {
    id: 5,
    flag: '\u{1F1E8}\u{1F1F3}', // 🇨🇳
    name: 'China – CAAC (Civil Aviation Administration of China)',
  },
  {
    id: 6,
    flag: '\u{1F1EA}\u{1F1EC}', // 🇪🇬
    name: 'Egypt – ECAA (Egyptian Civil Aviation Authority)',
  },
  {
    id: 7,
    flag: '\u{1F1ED}\u{1F1F0}', // 🇭🇰
    name: 'Hong Kong – HKCAD (Civil Aviation Department Hong Kong)',
  },
  {
    id: 8,
    flag: '\u{1F1EE}\u{1F1E9}', // 🇮🇩
    name: 'Indonesia – DGCA Indonesia (Directorate General of Civil Aviation)',
  },
  {
    id: 9,
    flag: '\u{1F1EE}\u{1F1EA}', // 🇮🇪
    name: 'Ireland – IAA (Irish Aviation Authority)',
  },
  {
    id: 10,
    flag: '\u{1F1EE}\u{1F1F1}', // 🇮🇱
    name: 'Israel – CAA Israel (Civil Aviation Authority of Israel)',
  },
  {
    id: 11,
    flag: '\u{1F1EF}\u{1F1F5}', // 🇯🇵
    name: 'Japan – JCAB (Japan Civil Aviation Bureau)',
  },
  {
    id: 12,
    flag: '\u{1F1F1}\u{1F1F0}', // 🇱🇰
    name: 'Sri Lanka – CAASL (Civil Aviation Authority of Sri Lanka)',
  },
  {
    id: 13,
    flag: '\u{1F1F2}\u{1F1FE}', // 🇲🇾
    name: 'Malaysia – CAAM (Civil Aviation Authority of Malaysia)',
  },
  {
    id: 14,
    flag: '\u{1F1F2}\u{1F1FD}', // 🇲🇽
    name: 'Mexico – AFAC (Agencia Federal de Aviación Civil)',
  },
];

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={imgBattery} alt="Battery" className="battery-image" />
  </div>
);

const RegBodyAll = () => {
  return (
    <div className="regbodyall-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <span className="status-bar-time">9:41</span>
        </div>
        <div className="status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="wifi-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Title */}
      <div className="title-container">
        <h1 className="title">Select Your Regulatory Body</h1>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-container">
          <img src={imgSearch} alt="Search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search your Regulatory body"
          />
        </div>
      </div>

      {/* Regulatory Bodies List */}
      <div className="scroll-view">
        <div className="scroll-content">
          {REGULATORY_BODIES.map((body) => (
            <div key={body.id} className="list-item">
              <p className="list-item-text">{body.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegBodyAll;

