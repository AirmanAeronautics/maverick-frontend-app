import React, { useState } from 'react';
import './CreateGroupMembers.css';

import channelBg from '../assets/channel Bg.png';
import backIcon from '../../Arrow_Left_MD.svg?url';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import avatarImage from '../../profile.jpg';
import editIcon from '../../edit.svg';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';

const StatusBarBattery = () => (
  <div className="battery-container">
    <img src={batteryIcon} alt="Battery" className="battery-outline-image" />
  </div>
);

type Contact = {
  id: string;
  name: string;
  subtitle: string;
  avatarUri: string;
};

type SelectedMemberChipProps = {
  contact: Contact;
};

const SelectedMemberChip = ({ contact }: SelectedMemberChipProps) => {
  return (
    <div className="create-group-members-selected-member-chip">
      <div className="create-group-members-selected-member-image-container">
        <img src={contact.avatarUri} alt={contact.name} className="create-group-members-selected-member-avatar" />
      </div>
      <span className="create-group-members-selected-member-name">{contact.name}</span>
    </div>
  );
};

type CreateGroupMembersProps = {
  selectedMembers?: Contact[];
  onBack?: () => void;
  onAddMembers?: () => void;
  onCreate?: (groupName: string) => void;
};

const CreateGroupMembers = ({
  selectedMembers = [],
  onBack,
  onAddMembers,
  onCreate,
}: CreateGroupMembersProps) => {
  const [groupName, setGroupName] = useState('');

  const handleCreate = () => {
    onCreate?.(groupName);
  };

  return (
    <div className="all-in-one-chats-container create-group-members-container">
      <div className="background-wrapper">
        <img src={channelBg} alt="Channels background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={signalIcon} alt="Signal strength" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      <div className="header create-group-members-header">
        <button className="back-button" type="button" onClick={onBack}>
          <img src={backIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content create-group-members-header-content">
          <div className="header-text-container">
            <h2 className="header-title">Create Group</h2>
          </div>
        </div>
        <span className="header-placeholder" />
      </div>

      <div className="create-group-members-content">
        <div className="create-group-members-form-wrapper">
          {/* Group Profile Image */}
          <div className="create-group-members-avatar-block">
            <div className="create-group-members-avatar">
              <div className="create-group-members-avatar-image-container">
                <img src={avatarImage} alt="Group" className="create-group-members-avatar-image" />
              </div>
              <button className="create-group-members-avatar-edit" type="button">
                <img src={editIcon} alt="Edit avatar" className="create-group-members-avatar-edit-icon" />
              </button>
            </div>
          </div>

          <form className="create-group-members-form">
            {/* Name of the group */}
            <div className="create-group-members-field">
              <label className="create-group-members-label" htmlFor="group-name">
                Name of the group
              </label>
              <div className="search-input create-group-members-input">
                <div className="search-content create-group-members-input-content">
                  <input
                    id="group-name"
                    className="search-text-input create-group-members-text-input"
                    placeholder="Enter your group name"
                    value={groupName}
                    onChange={event => setGroupName(event.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Selected Members Grid */}
            {selectedMembers.length > 0 ? (
              <div className="create-group-members-selected-members-grid">
                {selectedMembers.map(contact => (
                  <SelectedMemberChip key={contact.id} contact={contact} />
                ))}
              </div>
            ) : (
              <div className="create-group-members-add-members-container">
                <button className="create-group-members-add-members-button" type="button" onClick={onAddMembers}>
                  <span className="create-group-members-add-members-text">Add Members</span>
                </button>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="create-group-members-footer">
              <button
                className="create-group-members-btn create-group-members-btn--ghost"
                type="button"
                onClick={onBack}
              >
                Cancel
              </button>
              <button
                className="create-group-members-btn create-group-members-btn--primary"
                type="button"
                onClick={handleCreate}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupMembers;

