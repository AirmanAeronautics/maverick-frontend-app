import React from 'react';
import followersIcon from '../../fluent_people-community-12-filled.svg?url';
import {
  FOLLOWERS_LABEL,
  type ChannelAvatarKey,
  type ChannelDefinition,
} from './exploreChannelData';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';
import avatar6 from '../assets/avatar-archived.png';
import avatar7 from '../assets/avatar-2.png';
import avatar8 from '../assets/avatar-3.png';
import './ChannelCardShared.css';

const AVATAR_MAP: Record<ChannelAvatarKey, string> = {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
};

type ChannelFollowCardProps = {
  channel: ChannelDefinition;
  isFollowing: boolean;
  onToggleFollow: (channelId: string) => void;
  className?: string;
};

const ChannelFollowCard = ({ channel, isFollowing, onToggleFollow, className }: ChannelFollowCardProps) => {
  const avatarSrc = AVATAR_MAP[channel.avatarKey];
  const containerClassName = ['chat-item-container', 'channel-card', className].filter(Boolean).join(' ');
  const buttonClassName = [
    'channel-card__follow-button',
    isFollowing ? 'channel-card__follow-button--active' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      <div className="chat-item">
        <div className="chat-item-content">
          <img src={avatarSrc} alt={channel.name} className="chat-item-avatar" />
          <div className="chat-item-text-container">
            <p className="chat-item-name">{channel.name}</p>
            <div className="channel-card__followers">
              <img src={followersIcon} alt="" aria-hidden="true" className="channel-card__followers-icon" />
              <span className="channel-card__followers-text">{FOLLOWERS_LABEL}</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={buttonClassName}
          onClick={() => onToggleFollow(channel.id)}
          aria-pressed={isFollowing}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default ChannelFollowCard;









