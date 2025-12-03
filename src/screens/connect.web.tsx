import React, { useState } from 'react';
import './connect.css';
import './PeopleList.css';

// Image assets from Figma
const imgRectangle4249 = 'https://www.figma.com/api/mcp/asset/342a94c9-d6d9-451c-b138-8e584031d162';
const imgImage = 'https://www.figma.com/api/mcp/asset/60094928-1a81-4b08-9dea-98b4314dbe5a';
const imgRectangle4250 = 'https://www.figma.com/api/mcp/asset/5ed49815-e63a-4cc3-8219-6b81438a2304';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/b560572e-3032-4f45-a71e-d760cd32b000';
const imgRectangle4251 = 'https://www.figma.com/api/mcp/asset/448cc550-0003-4290-a6c8-761a0cead9ef';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/c2296b1d-7bf5-4780-b6b4-ddbcd6e421b0';
const imgRectangle4252 = 'https://www.figma.com/api/mcp/asset/7e8b855a-57c3-49fe-8bb9-22b9d510cb8c';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/6e4c846b-3e6d-4b68-9088-12c7425c6ad1';
const imgGroup = 'https://www.figma.com/api/mcp/asset/92e1f45f-6423-4d5c-bde4-2e03297abc9f';
const imgSearch = 'https://www.figma.com/api/mcp/asset/910800f4-eeb5-4b9e-b6ac-0d9658f58ca1';
const imgFrame1171275571 = 'https://www.figma.com/api/mcp/asset/520eae60-4899-4a19-aa6e-99f9054ee985';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/1289ba1a-8038-452b-866b-893bc4a874e1';
const imgWifi = 'https://www.figma.com/api/mcp/asset/4f9f6283-55dc-4d94-95d3-a65e0ef44e48';
const imgBattery = 'https://www.figma.com/api/mcp/asset/c5fb2280-2012-4fa4-aee3-2b2fab776ef2';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/9d618623-432d-4a5f-aaca-2286e4a90016';

type PersonCard = {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
  profileImage: string;
  badgeText: string;
  badgeColor: string;
  badgeBorderColor: string;
};

const PEOPLE_NEAR_LOCATION: PersonCard[] = [
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
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '3',
    name: 'Leena',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4251,
    profileImage: imgImage2,
    badgeText: 'Flight Instructor',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
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

const Connect = () => {
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());
  const [searchText, setSearchText] = useState('');

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
    <div className="connect-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <div className="battery-container">
            <img src={imgBattery} alt="Battery" className="battery-image" />
          </div>
          <img src={imgWifi} alt="WiFi" className="status-bar-icon" />
          <img src={imgMobileSignal} alt="Signal" className="status-bar-icon" />
        </div>
      </div>

      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">Connect with Others</h1>
          <p className="description-text">
            Find pilots, instructors, and students in the Maverick community. You can explore, search, invite or skip for now
          </p>
        </div>
        <button className="skip-button">
          <span className="skip-text">Skip</span>
          <div className="skip-icon-container">
            <img src={imgArrowArrowLeftMd} alt="Skip" className="skip-icon" />
          </div>
        </button>
      </div>

      {/* Suggested List Section */}
      <div className="suggested-list-section">
        <div className="suggested-list-header">
          <h2 className="suggested-list-title">Suggested List</h2>
          <button className="invite-button">
            <div className="invite-button-content">
              <img src={imgGroup} alt="Invite" className="invite-icon" />
              <span className="invite-button-text">Invite Members</span>
            </div>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-container">
          <div className="search-icon-container">
            <img src={imgSearch} alt="Search" className="search-icon" />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search people"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* People near location */}
      <div className="people-section">
        <div className="section-header">
          <h3 className="section-title">People near location</h3>
          <button className="section-see-all">See all</button>
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
    </div>
  );
};

export default Connect;

