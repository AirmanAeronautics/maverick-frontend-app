import React from 'react';
import './CatchupList.css';

// Image assets from Figma
const imgOutline = 'https://www.figma.com/api/mcp/asset/ea095336-7c59-45af-a6a1-c8e685ed2324';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/65a0a657-f35e-436d-9db7-9a858789e87e';
const imgFill = 'https://www.figma.com/api/mcp/asset/0685ed38-a9a5-4b2b-9201-6667b1748c2e';
const imgWifi = 'https://www.figma.com/api/mcp/asset/23762f59-c27e-499d-b8aa-4c50543e3678';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d4404a29-dc2f-4ae2-9e28-4dae12979e8c';
const imgPhDotsThreeVertical = 'https://www.figma.com/api/mcp/asset/d3be18f1-c10e-4506-9b0c-a66c5c067efc';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/15731158-712e-465a-8916-59b6d9f8f331';
const imgImage = 'https://www.figma.com/api/mcp/asset/0c817d9e-98ae-49a0-8a74-3385e941f970';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/e7ba614e-14fd-4b9f-aaa6-f9e3391f8082';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/40f50a1b-1053-4b1a-ba34-e6f17b84b633';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/d3ccd26c-62ca-4bba-ad3d-94854e79d44c';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/13038650-aeaa-430c-afed-cd17f3d54f36';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/3e4f5801-310b-43e5-8f8b-8c5df48dd3f1';
const imgBasilCrossOutline = 'https://www.figma.com/api/mcp/asset/3fa02f13-f756-4a78-92e6-4773b51e6a05';
const imgMdiTick = 'https://www.figma.com/api/mcp/asset/f0f210a6-afb7-46d9-8d9b-357ce79ce850';
const imgLine1Owj = 'https://www.figma.com/api/mcp/asset/8690efd6-7a87-4f3b-a98d-fb09fa2ecc64';

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
    <div className="battery-container">
      <div className="battery-outline">
        <img src={imgOutline} alt="" className="battery-outline-image" />
      </div>
      <div className="battery-end">
        <img src={imgBatteryEnd} alt="" className="battery-end-image" />
      </div>
      <div className="battery-fill">
        <img src={imgFill} alt="" className="battery-fill-image" />
      </div>
    </div>
  );
};

type ApprovalItem = {
  id: string;
  name: string;
  subtitle: string;
  avatar: string;
  subtitleColor: string;
};

type PendingItem = {
  id: string;
  name: string;
  subtitle: string;
  avatar: string;
  buttonType: 'message' | 'pending';
  buttonColor: string;
  buttonTextColor: string;
};

const APPROVALS: ApprovalItem[] = [
  {
    id: '1',
    name: 'Yuri Enzo',
    subtitle: 'gave you a request',
    avatar: imgImage,
    subtitleColor: '#5a5a5a',
  },
  {
    id: '2',
    name: 'Beckam',
    subtitle: 'gave you a request',
    avatar: imgImage1,
    subtitleColor: '#585858',
  },
  {
    id: '3',
    name: 'Marie',
    subtitle: 'gave you a request',
    avatar: imgImage2,
    subtitleColor: '#585858',
  },
];

const PENDING: PendingItem[] = [
  {
    id: '1',
    name: 'Nathan',
    subtitle: 'Accepted your request',
    avatar: imgImage3,
    buttonType: 'message',
    buttonColor: '#007598',
    buttonTextColor: '#007598',
  },
  {
    id: '2',
    name: 'Vijay Nagesh',
    subtitle: 'Pending request',
    avatar: imgImage4,
    buttonType: 'pending',
    buttonColor: '#6d6d6d',
    buttonTextColor: '#6d6d6d',
  },
  {
    id: '3',
    name: 'Nignen',
    subtitle: 'Pending request',
    avatar: imgImage5,
    buttonType: 'pending',
    buttonColor: '#585858',
    buttonTextColor: '#585858',
  },
];

type CatchupListProps = {
  onNavigateToPeopleList?: () => void;
  onNavigateToConnectionList?: () => void;
};

const CatchupList = ({ onNavigateToPeopleList, onNavigateToConnectionList }: CatchupListProps = {}) => {
  return (
    <div className="catchup-list-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <StatusBarBattery />
          <img src={imgWifi} alt="WiFi" className="status-bar-icon" />
          <img src={imgIconMobileSignal} alt="Signal" className="status-bar-icon" />
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <button className="back-button">
          <img src={imgArrowArrowLeftMd} alt="Back" className="back-icon" />
        </button>
        <div className="header-content">
          <div className="header-text-container">
            <h2 className="header-title">Connect with People</h2>
            <div className="header-subtitle-container">
              <span className="header-subtitle">Explore the aviation people</span>
            </div>
          </div>
        </div>
        <button className="menu-button">
          <img src={imgPhDotsThreeVertical} alt="Menu" className="menu-icon" />
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button 
          className="tab"
          onClick={onNavigateToPeopleList}
        >
          <span className="tab-text">People</span>
        </button>
        <button 
          className="tab"
          onClick={onNavigateToConnectionList}
        >
          <span className="tab-text">Connections</span>
        </button>
        <div className="tab tab-active">
          <span className="tab-text">Catch up</span>
          <div className="tab-indicator" />
        </div>
      </div>

      {/* Content */}
      <div className="scroll-view">
        <div className="scroll-view-content">
          {/* Approvals Section */}
          <div className="section">
            <div className="section-header">
              <h3 className="section-title">Approvals</h3>
              <button className="section-see-all">See all</button>
            </div>
            {APPROVALS.map((item, index) => (
              <div key={item.id} className={`approval-card ${index === APPROVALS.length - 1 ? 'last-card' : ''}`}>
                <div className="card-content">
                  <img src={item.avatar} alt={item.name} className="avatar" />
                  <div className="card-text-container">
                    <p className="card-name">{item.name}</p>
                    <p className="card-subtitle" style={{ color: item.subtitleColor }}>{item.subtitle}</p>
                  </div>
                  <div className="approval-buttons">
                    <button className="cancel-button">
                      <img src={imgBasilCrossOutline} alt="Cancel" className="button-icon" />
                    </button>
                    <button className="approve-button">
                      <img src={imgMdiTick} alt="Approve" className="button-icon" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="divider">
            <img src={imgLine1Owj} alt="" className="divider-image" />
          </div>

          {/* Pending Section */}
          <div className="section">
            <div className="section-header">
              <h3 className="section-title">Pending</h3>
              <button className="section-see-all">See all</button>
            </div>
            {PENDING.map((item, index) => (
              <div key={item.id} className={`pending-card ${index === PENDING.length - 1 ? 'last-card' : ''}`}>
                <div className="card-content">
                  <img src={item.avatar} alt={item.name} className="avatar" />
                  <div className="card-text-container">
                    <p className="card-name">{item.name}</p>
                    <p className="card-subtitle">{item.subtitle}</p>
                  </div>
                  <button 
                    className="pending-button"
                    style={{ 
                      borderColor: item.buttonColor,
                      color: item.buttonTextColor 
                    }}
                  >
                    <span 
                      className="pending-button-text"
                      style={{ color: item.buttonTextColor }}
                    >
                      {item.buttonType === 'message' ? 'Message' : 'Pending'}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchupList;

