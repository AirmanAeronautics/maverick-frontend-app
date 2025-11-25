import React, { useCallback, useRef, useState } from 'react';
import './AllInOneChats.css';

// Local image assets
import channelBg from '../assets/channel Bg.png';

// Image assets from Figma
const imgImage = 'https://www.figma.com/api/mcp/asset/32295c0f-d36f-4da1-a594-bc8e1b9d2d32';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/aad76d2d-b0da-4c3c-a132-23ebc110011f';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/3e9b54fa-11d6-4ea9-a97d-abb74125bf5c';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/cb0a01d9-5ca6-4bf1-8968-73bbc8735ce0';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/02b0850c-23c5-4b50-a4a7-7857e6ed7ae6';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/b939ecad-fbe5-4c07-af4e-38b2cfa51051';
const imgOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';
const imgPhDotsThreeVertical = 'https://www.figma.com/api/mcp/asset/3fd6b1d8-1854-4926-a727-7c552b5b7d23';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgSearch = 'https://www.figma.com/api/mcp/asset/2dd6b37b-3679-466e-8433-2267ff11d6ec';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgFrame1171275563 = 'https://www.figma.com/api/mcp/asset/cf59a2e8-7aa6-43ba-904a-395ecdba7091';

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
  percentage = 'False' 
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
    avatarUri: imgImage,
  },
  {
    id: 'steve1',
    name: 'Steve Harrington',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: imgImage1,
  },
  {
    id: 'kavin',
    name: 'Kavin ',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: imgImage2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: imgImage3,
  },
  {
    id: 'landing-legends',
    name: '#landing-legends',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: imgImage4,
  },
  {
    id: 'cessna-172',
    name: '#cessna -172',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: imgImage5,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    preview: 'Morning team — heads up, runway 27L lighting\'s partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.',
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: imgImage1,
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

const AllInOneChats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);
  const [panelPosition, setPanelPosition] = useState<{ top: number } | null>(null);
  const CHAT_LIST_TOP = 265;

  const handleLongPress = useCallback((item: ChatItem, rect: RectLike | null) => {
    const containerRect = readRect(containerRef.current);
    if (!containerRect || !rect) return;

    const rectBottom = rect.top + rect.height;
    const minTop = CHAT_LIST_TOP + 8;
    const maxTop = Math.max(containerRect.height - 320, minTop);
    const relativeTop = Math.min(Math.max(rectBottom - containerRect.top + 12, minTop), maxTop);

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
          <img src={imgIconMobileSignal} alt="Signal" className="status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <button className="back-button">
          <img src={imgArrowArrowLeftMd} alt="Back" className="back-icon" />
        </button>
        <div className="header-content">
          <div className="header-text-container">
            <h2 className="header-title">All in One Chats</h2>
            <div className="header-subtitle-container">
              <span className="header-subtitle">Join discussion channels</span>
            </div>
          </div>
        </div>
        <button className="menu-button">
          <img src={imgPhDotsThreeVertical} alt="Menu" className="menu-icon" />
        </button>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <div className="search-input-container">
          <div className="search-input">
            <div className="search-content">
              <img src={imgSearch} alt="Search" className="search-icon" />
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
        <button className="tab-inactive">
          <span className="tab-text">Channels</span>
        </button>
        <div className="tab-indicator" />
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
        <img src={imgFrame1171275563} alt="Add" className="fab-icon" />
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

