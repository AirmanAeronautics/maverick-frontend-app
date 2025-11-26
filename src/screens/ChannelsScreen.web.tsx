import React, { useCallback, useMemo, useRef, useState } from 'react';
import './ChannelsScreen.css';

// Local image assets - using Vite imports for proper processing
import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import addIcon from '../../add.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import avatarCessna from '../assets/avatar-5.png';
import avatarDispatch from '../assets/avatar-3.png';
import avatarFlightOps from '../assets/avatar-2.png';
import avatarOpsCenter from '../assets/avatar-1.png';
import avatarLandingLegends from '../assets/avatar-4.png';

type RectLike = {
  top: number;
  height: number;
};

const readRect = (element: unknown): RectLike | null => {
  if (
    element &&
    typeof (element as { getBoundingClientRect?: () => { top?: number; height?: number } }).getBoundingClientRect ===
      'function'
  ) {
    const rect = (element as { getBoundingClientRect: () => { top?: number; height?: number } }).getBoundingClientRect();
    return {
      top: typeof rect?.top === 'number' ? rect.top : 0,
      height: typeof rect?.height === 'number' ? rect.height : 0,
    };
  }
  return null;
};

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
      <img src={statusBarBatteryIcon} alt="Battery level" className="battery-outline-image" />
    </div>
  );
};

type ChannelCategory = 'General' | 'Flight School' | 'Private';

type ChannelItem = {
  id: string;
  name: string;
  description: string;
  time: string;
  unreadCount?: number;
  avatarUri: string;
  category: ChannelCategory;
};

const CHANNEL_CATEGORIES: ChannelCategory[] = ['General', 'Flight School', 'Private'];

const CHANNEL_ITEMS: ChannelItem[] = [
  {
    id: 'general-1',
    name: '#cessna -172',
    description: 'Morning team — heads up, runway 27L lighting’s partially down...',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatarCessna,
    category: 'General',
  },
  {
    id: 'general-2',
    name: 'Dispatch_Alex',
    description: 'Reminder: fuel uplift requests need the new form.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatarDispatch,
    category: 'General',
  },
  {
    id: 'general-3',
    name: '#flight-ops',
    description: 'Heads up: new NOTAM for Mumbai FIR through 0900Z.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatarFlightOps,
    category: 'General',
  },
  {
    id: 'general-4',
    name: '@OpsCenter_Ben',
    description: 'Morning team — heads up, runway 27L lighting’s partially down...',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatarOpsCenter,
    category: 'General',
  },
  {
    id: 'general-5',
    name: '#landing-legends',
    description: 'Morning team — heads up, runway 27L lighting’s partially down...',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatarLandingLegends,
    category: 'General',
  },
  {
    id: 'flight-school-1',
    name: '#flight-school',
    description: 'Simulator schedules updated for the afternoon block.',
    time: '02:15 pm',
    unreadCount: 2,
    avatarUri: avatarFlightOps,
    category: 'Flight School',
  },
  {
    id: 'flight-school-2',
    name: '#dispatch-training',
    description: 'Quiz results posted; review before tomorrow’s briefing.',
    time: '01:00 pm',
    avatarUri: avatarDispatch,
    category: 'Flight School',
  },
  {
    id: 'private-1',
    name: '@Ops Leads',
    description: 'Reminder: update weekend roster in the private sheet.',
    time: '11:20 am',
    unreadCount: 3,
    avatarUri: avatarOpsCenter,
    category: 'Private',
  },
];

const useLongPress = (
  callback: () => void,
  deps: React.DependencyList,
  delay = 450,
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const start = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.persist?.();
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchStart: start,
    onTouchEnd: clear,
    onTouchMove: clear,
  };
};

type ActionItem = {
  id: string;
  label: (channel?: ChannelItem | null) => string;
  destructive?: boolean;
};

const CHANNEL_ACTION_ITEMS: ActionItem[] = [
  { id: 'pin', label: () => 'Pin' },
  { id: 'copy-link', label: () => 'Copy Link' },
  { id: 'mark-unread', label: () => 'Mark as unread' },
  { id: 'mute', label: () => 'Mute' },
  { id: 'channel-info', label: () => 'Channel info' },
  { id: 'leave-channel', label: () => 'Leave channel', destructive: true },
];

type ChannelCardProps = {
  item: ChannelItem;
  onLongPress?: (item: ChannelItem, rect: RectLike | null) => void;
  isActive?: boolean;
  isDimmed?: boolean;
};

const ChannelCard = ({ item, onLongPress, isActive, isDimmed }: ChannelCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerLongPress = useCallback(() => {
    if (!onLongPress || !containerRef.current) return;
    const rect = readRect(containerRef.current);
    onLongPress(item, rect);
  }, [item, onLongPress]);

  const longPressHandlers = useLongPress(triggerLongPress, [triggerLongPress]);

  return (
    <div
      className={[
        'channels-screen-item',
        isActive ? 'channels-screen-item--active' : '',
        isDimmed ? 'channels-screen-item--dimmed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={containerRef}
      onContextMenu={event => event.preventDefault()}
      {...longPressHandlers}
    >
      <div className="channels-screen-item__border">
        <div className="channels-screen-item__content">
          <img src={item.avatarUri} alt={item.name} className="channels-screen-item__avatar" />
          <div className="channels-screen-item__text">
            <p className="channels-screen-item__name">{item.name}</p>
            <p className="channels-screen-item__description">{item.description}</p>
          </div>
        </div>
        <div className="channels-screen-item__meta">
          <span className="channels-screen-item__time">{item.time}</span>
        </div>
        {item.unreadCount ? (
          <span className="channels-screen-item__badge">{item.unreadCount}</span>
        ) : null}
      </div>
      {isDimmed ? <div className="chat-item-dim-overlay" /> : null}
    </div>
  );
};

type ChannelActionPanelProps = {
  channel: ChannelItem | null;
  position: { top: number } | null;
  onClose: () => void;
  actions: ActionItem[];
};

const ChannelActionPanel = ({ channel, position, onClose, actions }: ChannelActionPanelProps) => {
  if (!channel || !position) return null;

  return (
    <div className="chat-action-overlay" onClick={onClose}>
      <div
        className="chat-action-panel"
        style={{ top: position.top }}
        onClick={event => event.stopPropagation()}
      >
        {actions.map(action => (
          <button
            key={action.id}
            className={['chat-action-row', action.destructive ? 'chat-action-row--destructive' : ''].filter(Boolean).join(' ')}
            type="button"
            onClick={onClose}
          >
            {action.label(channel)}
          </button>
        ))}
      </div>
    </div>
  );
};

const PANEL_ROW_HEIGHT = 44;
const PANEL_ROW_GAP = 4;
const PANEL_VERTICAL_PADDING = 12;
const PANEL_BOTTOM_PADDING = 24;
const PANEL_CHANNEL_SPACING = 8;
const CHAT_LIST_TOP = 265;

type ChannelsScreenProps = {
  onNavigateToMessages?: () => void;
};

const ChannelsScreen = ({ onNavigateToMessages }: ChannelsScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<ChannelCategory>('General');
  const [activeChannel, setActiveChannel] = useState<ChannelItem | null>(null);
  const [panelPosition, setPanelPosition] = useState<{ top: number } | null>(null);

  const visibleChannels = useMemo(
    () => CHANNEL_ITEMS.filter(channel => channel.category === selectedCategory),
    [selectedCategory],
  );

  const handleLongPress = useCallback((item: ChannelItem, rect: RectLike | null) => {
    const containerRect = readRect(containerRef.current);
    if (!containerRect || !rect) return;

    const panelHeight =
      CHANNEL_ACTION_ITEMS.length * PANEL_ROW_HEIGHT +
      Math.max(CHANNEL_ACTION_ITEMS.length - 1, 0) * PANEL_ROW_GAP +
      PANEL_VERTICAL_PADDING;

    const minTop = CHAT_LIST_TOP + PANEL_CHANNEL_SPACING;
    const maxTop = Math.max(containerRect.height - panelHeight - PANEL_BOTTOM_PADDING, minTop);
    const channelTop = rect.top - containerRect.top;
    const channelBottom = channelTop + rect.height;
    const desiredTop = channelBottom + PANEL_CHANNEL_SPACING;

    let absoluteTop = desiredTop;
    if (desiredTop > maxTop) {
      const topAbove = channelTop - PANEL_CHANNEL_SPACING - panelHeight;
      absoluteTop = Math.max(topAbove, minTop);
    }
    absoluteTop = Math.min(Math.max(absoluteTop, minTop), maxTop);
    const relativeTop = absoluteTop - CHAT_LIST_TOP;

    setActiveChannel(item);
    setPanelPosition({ top: relativeTop });
  }, []);

  const closeActionPanel = useCallback(() => {
    setActiveChannel(null);
    setPanelPosition(null);
  }, []);

  const isActionMode = Boolean(activeChannel);

  return (
    <div
      className={[
        'all-in-one-chats-container',
        'channels-screen-container',
        isActionMode ? 'all-in-one-chats-container--actions-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={containerRef}
    >
      <div className="background-wrapper">
        <img src={channelBg} alt="Background" className="background-image-img" />
        <div className="background-overlay" />
      </div>

      <div className="status-bar">
        <div className="status-bar-left">
          <div className="status-bar-time-container">
            <span className="status-bar-time">9:41</span>
          </div>
        </div>
        <div className="status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      <div className="header">
        <button className="back-button" type="button">
          <img src={arrowLeftIcon} alt="Back" className="back-icon" />
        </button>
        <div className="header-content">
          <div className="header-text-container">
            <h2 className="header-title">All in One Chats</h2>
            <div className="header-subtitle-container">
              <span className="header-subtitle">Join discussion channels</span>
            </div>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-input-container">
          <div className="search-input">
            <div className="search-content">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input type="text" className="search-text-input" placeholder="Search for Channels" />
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container channels-screen-tabs">
        <button className="tab-inactive" type="button" onClick={onNavigateToMessages}>
          <span className="tab-text tab-text--dimmed">Messages</span>
        </button>
        <div className="tab-active">
          <span className="tab-text">Channels</span>
        </div>
      </div>

      <div className="chat-list channels-screen-list">
        <div className="chat-list-content">
          <div className="channels-screen-category-chips">
            {CHANNEL_CATEGORIES.map(category => {
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  className={[
                    'channels-screen-chip',
                    isActive ? 'channels-screen-chip--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
          {visibleChannels.map(channel => {
            const isActive = channel.id === activeChannel?.id;
            return (
              <ChannelCard
                key={channel.id}
                item={channel}
                onLongPress={handleLongPress}
                isActive={isActive}
                isDimmed={Boolean(isActionMode && !isActive)}
              />
            );
          })}
        </div>
      </div>

      <button className="fab" type="button">
        <img src={addIcon} alt="Add Channel" className="fab-icon" />
      </button>

      <ChannelActionPanel
        channel={activeChannel}
        position={panelPosition}
        onClose={closeActionPanel}
        actions={CHANNEL_ACTION_ITEMS}
      />
    </div>
  );
};

export default ChannelsScreen;

