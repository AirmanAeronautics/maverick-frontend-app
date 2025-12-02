import React from 'react';
import './step2.css';

// Image assets from Figma
const imgRectangle4252 = 'https://www.figma.com/api/mcp/asset/26b1828c-d647-46a2-91f9-4439b9fe647a';
const imgRectangle4253 = 'https://www.figma.com/api/mcp/asset/18fb08e2-128b-4f6e-8a35-d97671ff12c7';
const imgRectangle4254 = 'https://www.figma.com/api/mcp/asset/9f16ae60-d679-4e15-83fe-5f6a8e31d39a';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/eb6bfd76-1ca2-41ad-9ed6-47b040cf370a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/23c96b17-d74a-4880-a854-1634e9f83611';
const imgBattery = 'https://www.figma.com/api/mcp/asset/0df8df47-306d-4f70-ba45-5e52be4d0faa';
const imgFrame = 'https://www.figma.com/api/mcp/asset/09a6bdb3-a23a-4a4d-9157-94bf19890b5c';
const imgFrame1 = 'https://www.figma.com/api/mcp/asset/a0a150ed-628b-4591-aa35-658b2f924007';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/6969daf3-58b8-4ebb-af5f-f1a6ae9e6066';
const imgArrowArrowLeftMd1 = 'https://www.figma.com/api/mcp/asset/18c22802-7e78-421e-b2c4-efd0fd0eff2d';

const Step2 = () => {
  return (
    <div className="step2-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-bar-time">9:41</span>
        <div className="status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="status-bar-wifi" />
          <div className="battery-container">
            <img src={imgBattery} alt="Battery" className="battery-image" />
          </div>
        </div>
      </div>

      {/* Step Header */}
      <div className="step-header">
        <p className="step-text">Step 2 of 3</p>
        <div className="progress-container">
          <div className="progress-dot-active"></div>
          <div className="progress-dot-active"></div>
          <div className="progress-dot"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Title Section */}
        <div className="title-section">
          <p className="title">What's Your Role</p>
          <p className="subtitle">Help us to customize your Experience</p>
        </div>

        {/* Role Cards */}
        <div className="role-cards-container">
          {/* Student Pilot Card */}
          <div className="role-card">
            <div className="role-card-image-container">
              <img src={imgRectangle4252} alt="Student Pilot" className="role-card-image" />
            </div>
            <div className="role-card-overlay"></div>
            <p className="role-card-text">Student Pilot</p>
          </div>

          {/* Seasoned Pilot Card */}
          <div className="role-card">
            <div className="role-card-image-container">
              <img src={imgRectangle4253} alt="Seasoned Pilot" className="role-card-image" />
            </div>
            <div className="role-card-overlay"></div>
            <p className="role-card-text">Seasoned Pilot</p>
          </div>

          {/* Flight Instructor Card */}
          <div className="role-card">
            <div className="role-card-image-container">
              <img src={imgRectangle4254} alt="Flight Instructor" className="role-card-image" />
            </div>
            <div className="role-card-overlay"></div>
            <p className="role-card-text">Flight Instructor</p>
            <p className="role-card-premium-text">Instructors get premium features</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Upload License Section */}
      <div className="upload-license-container">
        <div className="upload-license-content">
          <div className="upload-license-icon-container">
            <div className="upload-license-icon-bg">
              <img src={imgFrame1} alt="Upload Icon" className="upload-license-icon" />
            </div>
          </div>
          <div className="upload-license-text-container">
            <p className="upload-license-title">Upload License</p>
            <p className="upload-license-subtitle">Verify your credentials.</p>
          </div>
        </div>
        <img src={imgFrame} alt="Arrow" className="upload-license-arrow" />
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="previous-button" type="button">
          <img src={imgArrowArrowLeftMd} alt="Previous" className="previous-arrow" />
          <span className="previous-text">Previous</span>
        </button>
        <button className="next-button" type="button">
          <span className="next-button-text">Next</span>
          <div className="next-arrow-container">
            <img src={imgArrowArrowLeftMd1} alt="Next" className="next-arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Step2;

