import React, { useCallback, useState } from 'react';
import './CreateGroup.css';

// Local image assets - using Vite imports for proper processing
import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import arrowRightIcon from '../../arrow_right.svg?url';
import searchIcon from '../../search.svg?url';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={batteryIcon} alt="Battery level" className="battery-outline-image" />
  </div>
);

type Contact = {
  id: string;
  name: string;
  subtitle: string;
  avatarUri: string;
};

const ALL_CONTACTS: Contact[] = [
  {
    id: 'steve1',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: avatar1,
  },
  {
    id: 'kavin',
    name: 'Kavin',
    subtitle: 'Flight Instructor',
    avatarUri: avatar2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    subtitle: 'ATC',
    avatarUri: avatar3,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: avatar1,
  },
  {
    id: 'contact5',
    name: 'John Doe',
    subtitle: 'Co-Pilot',
    avatarUri: avatar4,
  },
  {
    id: 'contact6',
    name: 'Jane Smith',
    subtitle: 'Ground Crew',
    avatarUri: avatar5,
  },
  {
    id: 'contact7',
    name: 'Mike Johnson',
    subtitle: 'Air Traffic Controller',
    avatarUri: avatar2,
  },
  {
    id: 'contact8',
    name: 'Sarah Williams',
    subtitle: 'Flight Dispatcher',
    avatarUri: avatar3,
  },
  {
    id: 'contact9',
    name: 'David Brown',
    subtitle: 'Aircraft Mechanic',
    avatarUri: avatar4,
  },
  {
    id: 'contact10',
    name: 'Emily Davis',
    subtitle: 'Ground Operations',
    avatarUri: avatar5,
  },
];

const FREQUENTLY_CONTACTED = ALL_CONTACTS.slice(0, 4);
const CONNECTION_LIST = ALL_CONTACTS.slice(4);

type SelectedMemberChipProps = {
  contact: Contact;
  onRemove: (contactId: string) => void;
};

const SelectedMemberChip = ({ contact, onRemove }: SelectedMemberChipProps) => {
  return (
    <div className="create-group-selected-member-chip">
      <div className="create-group-selected-member-image-container">
        <img src={contact.avatarUri} alt={contact.name} className="create-group-selected-member-avatar" />
        <button
          className="create-group-selected-member-close-button"
          onClick={() => onRemove(contact.id)}
          type="button"
          aria-label={`Remove ${contact.name}`}
        >
          ×
        </button>
      </div>
      <span className="create-group-selected-member-name">{contact.name}</span>
    </div>
  );
};

type ContactCardProps = {
  contact: Contact;
  isSelected: boolean;
  onToggle: (contact: Contact) => void;
};

const ContactCard = ({ contact, isSelected, onToggle }: ContactCardProps) => {
  return (
    <div
      className="create-group-contact-card-container"
      onClick={() => onToggle(contact)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onToggle(contact);
        }
      }}
    >
      <div className="create-group-contact-card-content">
        <img src={contact.avatarUri} alt={contact.name} className="create-group-contact-card-avatar" />
        <div className="create-group-contact-card-text-container">
          <p className="create-group-contact-card-name">{contact.name}</p>
          <p className="create-group-contact-card-subtitle">{contact.subtitle}</p>
        </div>
        <div className="create-group-checkbox-container">
          <div className={['create-group-checkbox', isSelected ? 'create-group-checkbox--selected' : ''].filter(Boolean).join(' ')}>
            {isSelected && <div className="create-group-checkbox-inner" />}
          </div>
        </div>
      </div>
    </div>
  );
};

type CreateGroupProps = {
  onContinue?: (selectedContactIds: string[]) => void;
  onBack?: () => void;
};

const CreateGroup = ({ onContinue, onBack }: CreateGroupProps) => {
  const [selectedContactIds, setSelectedContactIds] = useState<Set<string>>(new Set());

  const handleToggleContact = useCallback((contact: Contact) => {
    setSelectedContactIds(prev => {
      const next = new Set(prev);
      if (next.has(contact.id)) {
        next.delete(contact.id);
      } else {
        next.add(contact.id);
      }
      return next;
    });
  }, []);

  const handleRemoveSelected = useCallback((contactId: string) => {
    setSelectedContactIds(prev => {
      const next = new Set(prev);
      next.delete(contactId);
      return next;
    });
  }, []);

  const handleContinue = useCallback(() => {
    if (selectedContactIds.size > 0) {
      onContinue?.(Array.from(selectedContactIds));
    }
  }, [selectedContactIds, onContinue]);

  const selectedContacts = ALL_CONTACTS.filter(contact => selectedContactIds.has(contact.id));

  return (
    <div className="all-in-one-chats-container create-group-container">
      {/* Background with blur effect */}
      <div className="background-wrapper">
        <img src={channelBg} alt="Background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={signalIcon} alt="Signal" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="header create-group-header">
        <button className="back-button" type="button" onClick={onBack}>
          <img src={arrowLeftIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content create-group-header-content">
          <div className="header-text-container">
            <h2 className="header-title">New Group</h2>
          </div>
        </div>
        <span className="header-button-placeholder" />
      </div>

      {/* Search Input */}
      <div className="create-group-search-container">
        <div className="create-group-search-input-container">
          <div className="create-group-search-input">
            <div className="create-group-search-content">
              <img src={searchIcon} alt="Search" className="create-group-search-icon" />
              <input
                type="text"
                className="create-group-search-text-input"
                placeholder="Search contacts"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Selected Members Row */}
      {selectedContacts.length > 0 && (
        <>
          <div className="create-group-selected-members-container">
            <div className="create-group-selected-members-scroll">
              {selectedContacts.map(contact => (
                <SelectedMemberChip
                  key={contact.id}
                  contact={contact}
                  onRemove={handleRemoveSelected}
                />
              ))}
            </div>
          </div>
          {/* Separator */}
          <div className="create-group-separator" />
        </>
      )}

      {/* Content */}
      <div
        className={`create-group-scroll-view ${selectedContacts.length > 0 ? 'has-selected-members' : ''}`}
        style={{ marginTop: selectedContacts.length > 0 ? '302.007px' : '189.507px' }}
      >
        <div
          className="create-group-scroll-content"
          style={{ padding: '0', paddingBottom: 'calc(var(--chat-bottom-safe-area) + 24px)', margin: '0' }}
        >
          {/* Frequently Contacted Section */}
          <div className="create-group-section-container" style={{ marginTop: '0px', paddingTop: '0px' }}>
            <h3 className="create-group-section-title" style={{ marginTop: '0px', paddingTop: '0px', lineHeight: '18px', marginBottom: '8px' }}>Frequently contacted</h3>
            {FREQUENTLY_CONTACTED.map(contact => (
              <ContactCard
                key={contact.id}
                contact={contact}
                isSelected={selectedContactIds.has(contact.id)}
                onToggle={handleToggleContact}
              />
            ))}
          </div>

          {/* Connection List Section */}
          {CONNECTION_LIST.length > 0 && (
            <div className="create-group-section-container">
              <h3 className="create-group-section-title">Connection list</h3>
              {CONNECTION_LIST.map(contact => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  isSelected={selectedContactIds.has(contact.id)}
                  onToggle={handleToggleContact}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="create-group-fab" type="button" onClick={handleContinue}>
        <img src={arrowRightIcon} alt="Continue" className="create-group-fab-icon" />
      </button>
    </div>
  );
};

export default CreateGroup;

