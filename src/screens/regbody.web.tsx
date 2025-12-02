import React from 'react';
import './regbody.css';

// Image assets from Figma
const imgUnnamed61 = 'https://www.figma.com/api/mcp/asset/e489c8bb-2867-4b22-8930-7300fed0479b';
const imgUnnamed62 = 'https://www.figma.com/api/mcp/asset/98e03a61-67d9-4fd1-8f6f-dc1283c185ec';
const imgUnnamed63 = 'https://www.figma.com/api/mcp/asset/148a8589-f797-48bf-9eab-5de10459508e';
const imgUnnamed64 = 'https://www.figma.com/api/mcp/asset/7c532bb3-7e83-42eb-b198-dfed592e7db9';
const imgUnnamed65 = 'https://www.figma.com/api/mcp/asset/aef7602a-3544-4090-a2b6-f96fd9c9e388';
const imgUnnamed66 = 'https://www.figma.com/api/mcp/asset/4c9794af-de3f-40f9-9c7a-e8eb353285ad';
const imgUnnamed67 = 'https://www.figma.com/api/mcp/asset/90cab735-d76e-44f3-9214-343fc92c154e';
const imgUnnamed68 = 'https://www.figma.com/api/mcp/asset/e1899a37-4708-49d6-b04f-cedc3ffd36f9';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/acc57651-8728-4bd6-9259-577a898812b3';
const imgWifi = 'https://www.figma.com/api/mcp/asset/fc19fdf1-c3a2-4186-bc53-8d4fc31f9e0c';
const imgBattery = 'https://www.figma.com/api/mcp/asset/9c2f21ac-f67a-4051-80da-b327eda524c2';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/2c16db95-08e4-40e2-ba93-5fb2bc9e106a';

const REGULATORY_BODIES = [
  {
    id: 1,
    flag: imgUnnamed61,
    name: 'Federal Aviation Administration',
  },
  {
    id: 2,
    flag: imgUnnamed62,
    name: 'Transport Canada Civil Aviation',
  },
  {
    id: 3,
    flag: imgUnnamed63,
    name: 'Civil Aviation Authority',
  },
  {
    id: 4,
    flag: imgUnnamed64,
    name: 'Europe Union Aviation Safety Agency',
  },
  {
    id: 5,
    flag: imgUnnamed65,
    name: 'South African Civil Aviation Authority',
  },
  {
    id: 6,
    flag: imgUnnamed66,
    name: 'Directorate General of Civil Aviation',
  },
  {
    id: 7,
    flag: imgUnnamed67,
    name: 'Civil Aviation Safety Authority',
  },
  {
    id: 8,
    flag: imgUnnamed68,
    name: 'Civil Aviation Authority of New Zealand',
  },
];

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={imgBattery} alt="Battery" className="battery-image" />
  </div>
);

const RegBody = () => {
  return (
    <div className="regbody-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <span className="status-bar-time">9:41</span>
        </div>
        <div className="status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <h1 className="header-title">Select your regulatory body</h1>
        <a href="#" className="see-all-link" onClick={(e) => e.preventDefault()}>
          See All
        </a>
      </div>

      {/* Regulatory Bodies Grid */}
      <div className="scroll-view">
        <div className="scroll-content">
          <div className="grid-container">
            {REGULATORY_BODIES.map((body, index) => (
              <div key={body.id} className="regulatory-card">
                <div className="card-content">
                  <img src={body.flag} alt={body.name} className="flag-image" />
                  <p className="card-text">{body.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="button-container">
        <button className="next-button" type="button">
          <span className="next-button-text">Next</span>
          <div className="arrow-container">
            <img src={imgArrowArrowLeftMd} alt="Arrow" className="arrow-icon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegBody;

