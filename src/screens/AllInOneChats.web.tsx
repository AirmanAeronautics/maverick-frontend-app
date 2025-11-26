import React, { useCallback, useRef, useState } from 'react';
import './AllInOneChats.css';

// Local image assets - using Vite imports for proper processing
import channelBg from '../assets/channel Bg.png';
import avatarArchived from '../assets/avatar-archived.png';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import addIcon from '../../add.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';

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

type ChatItem = {
  id: string;
  name: string;
  preview: string;
  time: string;
  unreadCount?: number;
  avatarUri: string;
};

const CHAT_ITEMS: ChatItem[] = [
  {
    id: 'archived',
    name: 'Archived',
    preview: '',
    time: '',
    avatarUri: avatarArchived,
  },
  {
    id: 'steve1',
    name: 'Steve Harrington',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar1,
  },
  {
    id: 'kavin',
    name: 'Kavin ',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar3,
  },
  {
    id: 'landing-legends',
    name: '#landing-legends',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar4,
  },
  {
    id: 'cessna-172',
    name: '#cessna -172',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar5,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar1,
  },
];

type ActionItem = {
  id: string;
  label: (chat?: ChatItem | null) => string;
  destructive?: boolean;
};

const ACTION_ITEMS: ActionItem[] = [
  { id: 'mark-unread', label: () => 'Mark as unread' },
  { id: 'archive', label: () => 'Archive' },
  { id: 'mute', label: () => 'Mute' },
  { id: 'lock', label: () => 'Lock chat' },
  { id: 'favourite', label: () => 'Add to Favourites' },
  { id: 'block', label: chat => `Block ${chat?.name ?? 'user'}` },
  { id: 'delete', label: () => 'Delete chat', destructive: true },
];

type ChatItemComponentProps = {
  item: ChatItem;
  onLongPress?: (item: ChatItem, rect: RectLike | null) => void;
  isActive?: boolean;
  isDimmed?: boolean;
};

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

const ChatItemComponent = ({
  item,
  onLongPress,
  isActive,
  isDimmed,
}: ChatItemComponentProps) => {
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
        'chat-item-container',
        isActive ? 'chat-item-container--active' : '',
        isDimmed ? 'chat-item-container--dimmed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={containerRef}
      onContextMenu={event => event.preventDefault()}
      {...longPressHandlers}
    >
      <div className="chat-item">
        <div className="chat-item-content">
          <img src={item.avatarUri} alt={item.name} className="chat-item-avatar" />
          <div className="chat-item-text-container">
            <p className="chat-item-name">{item.name}</p>
            {item.preview ? (
              <p className="chat-item-preview">{item.preview}</p>
            ) : null}
          </div>
        </div>
        {item.unreadCount !== undefined && item.unreadCount > 0 && (
          <div className="unread-badge">
            <span className="unread-badge-text">{item.unreadCount}</span>
          </div>
        )}
        {item.time ? (
          <div className="chat-item-time-container">
            <span className="chat-item-time">{item.time}</span>
          </div>
        ) : null}
        {isDimmed ? <div className="chat-item-dim-overlay" /> : null}
      </div>
    </div>
  );
};

type ChatActionPanelProps = {
  chat: ChatItem | null;
  position: { top: number } | null;
  onClose: () => void;
  actions: ActionItem[];
};

const ChatActionPanel = ({ chat, position, onClose, actions }: ChatActionPanelProps) => {
  if (!chat || !position) return null;

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
            className={[
              'chat-action-row',
              action.destructive ? 'chat-action-row--destructive' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            type="button"
            onClick={onClose}
          >
            {action.label(chat)}
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
const PANEL_CHAT_SPACING = 8;

type AllInOneChatsProps = {
  onNavigateToChannels?: () => void;
};

const AllInOneChats = ({ onNavigateToChannels }: AllInOneChatsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);
  const [panelPosition, setPanelPosition] = useState<{ top: number } | null>(null);
  const CHAT_LIST_TOP = 265;

  const handleLongPress = useCallback((item: ChatItem, rect: RectLike | null) => {
    if (item.id === 'archived') return;
    const containerRect = readRect(containerRef.current);
    if (!containerRect || !rect) return;

    const panelHeight =
      ACTION_ITEMS.length * PANEL_ROW_HEIGHT +
      Math.max(ACTION_ITEMS.length - 1, 0) * PANEL_ROW_GAP +
      PANEL_VERTICAL_PADDING;
    const minTop = CHAT_LIST_TOP + PANEL_CHAT_SPACING;
    const maxTop = Math.max(containerRect.height - panelHeight - PANEL_BOTTOM_PADDING, minTop);
    const chatTop = rect.top - containerRect.top;
    const chatBottom = chatTop + rect.height;
    const desiredTop = chatBottom + PANEL_CHAT_SPACING;

    let absoluteTop = desiredTop;
    if (desiredTop > maxTop) {
      const topAbove = chatTop - PANEL_CHAT_SPACING - panelHeight;
      absoluteTop = Math.max(topAbove, minTop);
    }
    absoluteTop = Math.min(Math.max(absoluteTop, minTop), maxTop);
    const relativeTop = absoluteTop - CHAT_LIST_TOP;

    setActiveChat(item);
    setPanelPosition({ top: relativeTop });
  }, []);

  const closeActionPanel = useCallback(() => {
    setActiveChat(null);
    setPanelPosition(null);
  }, []);

  const isActionMode = Boolean(activeChat);

  return (
    <div
      className={[
        'all-in-one-chats-container',
        isActionMode ? 'all-in-one-chats-container--actions-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={containerRef}
    >
      {/* Background with blur effect */}
      <div className="background-wrapper">
        <img 
          src={channelBg} 
          alt="Background" 
          className="background-image-img"
        />
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
          <img src={mobileSignalIcon} alt="Signal" className="status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <button className="back-button">
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

      {/* Search Input */}
      <div className="search-container">
        <div className="search-input-container">
          <div className="search-input">
            <div className="search-content">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input
                type="text"
                className="search-text-input"
                placeholder="Search for Channels"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tab-active">
          <span className="tab-text">Messages</span>
        </div>
        <button className="tab-inactive" onClick={onNavigateToChannels}>
          <span className="tab-text tab-text--dimmed">Channels</span>
        </button>
      </div>

      {/* Chat List */}
      <div className="chat-list">
        <div className="chat-list-content">
          {CHAT_ITEMS.map(item => {
            const isActive = item.id === activeChat?.id;
            return (
              <ChatItemComponent
                key={item.id}
                item={item}
                onLongPress={handleLongPress}
                isActive={isActive}
                isDimmed={Boolean(isActionMode && !isActive)}
              />
            );
          })}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fab">
        <img src={addIcon} alt="Add" className="fab-icon" />
      </button>

      <ChatActionPanel
        chat={activeChat}
        position={panelPosition}
        onClose={closeActionPanel}
        actions={ACTION_ITEMS}
      />
    </div>
  );
};

export default AllInOneChats;

