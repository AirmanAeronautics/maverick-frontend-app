import React, { useState } from 'react';
import './PeopleList.css';

// Image assets from Figma
const imgRectangle4249 = 'https://www.figma.com/api/mcp/asset/0819f6cb-e382-4719-9e12-dfb5bd59da53';
const imgImage = 'https://www.figma.com/api/mcp/asset/87192873-4b5e-4766-b324-41750ff58d0e';
const imgRectangle4250 = 'https://www.figma.com/api/mcp/asset/5dd89eb9-c3dc-40b0-a9f4-f030ff34bfb8';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/87e67e70-0e62-4449-a8fd-3dff5f1ade0f';
const imgRectangle4251 = 'https://www.figma.com/api/mcp/asset/84471e95-34fa-489d-9de5-41aee95a3b1f';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/ea1a5fb9-24b4-4ace-9899-61ac7a5f4db6';
const imgRectangle4252 = 'https://www.figma.com/api/mcp/asset/b0e5cdf1-4ca2-439e-9035-fdd03640e640';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/60a82511-9ef1-4771-8944-1dca683483b1';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/c4ff77c9-8557-4483-8652-23e2a6b2addd';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/03d8f5ca-5a5c-4667-836d-116a3c30bbf7';
const imgOutline = 'https://www.figma.com/api/mcp/asset/ea095336-7c59-45af-a6a1-c8e685ed2324';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/65a0a657-f35e-436d-9db7-9a858789e87e';
const imgFill = 'https://www.figma.com/api/mcp/asset/0685ed38-a9a5-4b2b-9201-6667b1748c2e';
const imgWifi = 'https://www.figma.com/api/mcp/asset/23762f59-c27e-499d-b8aa-4c50543e3678';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d4404a29-dc2f-4ae2-9e28-4dae12979e8c';
const imgPhDotsThreeVertical = 'https://www.figma.com/api/mcp/asset/d3be18f1-c10e-4506-9b0c-a66c5c067efc';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/15731158-712e-465a-8916-59b6d9f8f331';
const imgFrame1171275571 = 'https://www.figma.com/api/mcp/asset/32ccedea-d40b-49fc-9ff6-77ee0f6db33e';
const imgLine720 = 'https://www.figma.com/api/mcp/asset/cc82d5bb-0d54-462c-9f18-cf62b38ec0ab';

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

export type PersonCard = {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
  profileImage: string;
  badgeText: string;
  badgeColor: string;
  badgeBorderColor: string;
};

export const PEOPLE_NEAR_LOCATION: PersonCard[] = [
  {
    id: '1',
    name: 'Alexander Bell',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4249,
    profileImage: imgImage,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '2',
    name: 'Aiden',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4250,
    profileImage: imgImage1,
    badgeText: 'Seasoned Pilot',
    badgeColor: '#a66c00',
    badgeBorderColor: '#a66c00',
  },
  {
    id: '3',
    name: 'Leena',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4251,
    profileImage: imgImage2,
    badgeText: 'Flight Instructor',
    badgeColor: '#490098',
    badgeBorderColor: '#490098',
  },
  {
    id: '4',
    name: 'Hiroshiman',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4252,
    profileImage: imgImage3,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '7',
    name: 'Alexander Bell',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4249,
    profileImage: imgImage,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '8',
    name: 'Aiden',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4250,
    profileImage: imgImage1,
    badgeText: 'Seasoned Pilot',
    badgeColor: '#a66c00',
    badgeBorderColor: '#a66c00',
  },
  {
    id: '9',
    name: 'Leena',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4251,
    profileImage: imgImage2,
    badgeText: 'Flight Instructor',
    badgeColor: '#490098',
    badgeBorderColor: '#490098',
  },
  {
    id: '10',
    name: 'Hiroshiman',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4252,
    profileImage: imgImage3,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
];

export const PEOPLE_FROM_SCHOOL: PersonCard[] = [
  {
    id: '5',
    name: 'Daniel',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4249,
    profileImage: imgImage4,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '6',
    name: 'Ryan Reynold',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4250,
    profileImage: imgImage5,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '11',
    name: 'Daniel',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4249,
    profileImage: imgImage4,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '12',
    name: 'Ryan Reynold',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4250,
    profileImage: imgImage5,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
];

const PersonCard = ({ person, isPending, onConnectClick }: { person: PersonCard; isPending?: boolean; onConnectClick?: () => void }) => {
  return (
    <div className="person-card">
      <div className="person-card-inner">
        <div className="person-card-background">
          <img src={person.backgroundImage} alt="" className="person-card-background-image" />
        </div>
        <div className="person-card-profile-image-container">
          <img src={person.profileImage} alt={person.name} className="person-card-profile-image" />
        </div>
        <div className="person-card-content">
          <p className="person-card-name">{person.name}</p>
          <p className="person-card-description">{person.description}</p>
        </div>
        <button 
          className={`connect-button ${isPending ? 'connect-button--pending' : ''}`}
          onClick={onConnectClick}
        >
          <span className="connect-button-text">{isPending ? 'Pending' : 'Connect'}</span>
        </button>
        <div className="badge" style={{ borderColor: person.badgeBorderColor }}>
          <span className="badge-text" style={{ color: person.badgeColor }}>
            {person.badgeText}
          </span>
        </div>
        <div className="favorite-icon">
          <img src={imgFrame1171275571} alt="" className="favorite-icon-image" />
        </div>
      </div>
    </div>
  );
};

type PeopleListProps = {
  onSeeAll?: (category: 'near-location' | 'from-school') => void;
};

const PeopleList = ({ onSeeAll }: PeopleListProps = {}) => {
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());

  const handleConnectClick = (personId: string) => {
    setPendingIds(prev => {
      const next = new Set(prev);
      if (next.has(personId)) {
        next.delete(personId);
      } else {
        next.add(personId);
      }
      return next;
    });
  };

  return (
    <div className="people-list-container">
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
        <div className="tab tab-active">
          <span className="tab-text">People</span>
          <div className="tab-indicator" />
        </div>
        <button className="tab">
          <span className="tab-text">Catch up</span>
        </button>
      </div>

      {/* Content */}
      <div className="scroll-view">
        <div className="scroll-view-content">
          {/* People near location */}
          <div className="section">
            <div className="section-header">
              <h3 className="section-title">People near location</h3>
              <button className="section-see-all" onClick={() => onSeeAll?.('near-location')}>See all</button>
            </div>
            <div className="cards-row">
              {PEOPLE_NEAR_LOCATION.slice(0, 2).map(person => (
                <PersonCard 
                  key={person.id} 
                  person={person} 
                  isPending={pendingIds.has(person.id)}
                  onConnectClick={() => handleConnectClick(person.id)}
                />
              ))}
            </div>
            <div className="cards-row">
              {PEOPLE_NEAR_LOCATION.slice(2, 4).map(person => (
                <PersonCard 
                  key={person.id} 
                  person={person} 
                  isPending={pendingIds.has(person.id)}
                  onConnectClick={() => handleConnectClick(person.id)}
                />
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="section-separator" />

          {/* People from your school */}
          <div className="section">
            <div className="section-header">
              <h3 className="section-title">People from your school</h3>
              <button className="section-see-all" onClick={() => onSeeAll?.('from-school')}>See all</button>
            </div>
            <div className="cards-container">
              {PEOPLE_FROM_SCHOOL.map(person => (
                <PersonCard 
                  key={person.id} 
                  person={person} 
                  isPending={pendingIds.has(person.id)}
                  onConnectClick={() => handleConnectClick(person.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleList;

