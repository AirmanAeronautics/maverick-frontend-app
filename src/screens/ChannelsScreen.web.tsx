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
import muteNotificationIcon from '../../ep_mute-notification.svg?url';
import pinIcon from './pin.svg?url';
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

const buildChannelActionItems = (hasUnreadBadge: boolean, isMuted: boolean, isPinned: boolean): ActionItem[] => [
  { id: 'pin', label: () => (isPinned ? 'Unpin' : 'Pin') },
  { id: 'copy-link', label: () => 'Copy Link' },
  hasUnreadBadge
    ? { id: 'mark-read', label: () => 'Mark as read' }
    : { id: 'mark-unread', label: () => 'Mark as unread' },
  { id: 'mute', label: () => (isMuted ? 'Unmute' : 'Mute') },
  { id: 'channel-info', label: () => 'Channel info' },
  { id: 'leave-channel', label: () => 'Leave channel', destructive: true },
];

const CHANNEL_ACTION_ITEMS_COUNT = 6;

type ChannelCardProps = {
  item: ChannelItem;
  onLongPress?: (item: ChannelItem, rect: RectLike | null) => void;
  isActive?: boolean;
  isDimmed?: boolean;
  unreadCount?: number;
  showManualUnread?: boolean;
  isMuted?: boolean;
  isPinned?: boolean;
};

const ChannelCard = ({
  item,
  onLongPress,
  isActive,
  isDimmed,
  unreadCount = 0,
  showManualUnread,
  isMuted,
  isPinned,
}: ChannelCardProps) => {
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
            <div className="chat-item-name-row">
              <p className="channels-screen-item__name">{item.name}</p>
              {isPinned ? <img src={pinIcon} alt="Pinned" className="channels-screen-pin-icon" /> : null}
              {isMuted ? <img src={muteNotificationIcon} alt="Muted" className="chat-item-mute-icon" /> : null}
            </div>
            <p className="channels-screen-item__description">{item.description}</p>
          </div>
        </div>
        <div className="channels-screen-item__meta">
          <span className="channels-screen-item__time">{item.time}</span>
        </div>
        {unreadCount > 0 ? (
          <div className="unread-badge">
            <span className="unread-badge-text">{unreadCount}</span>
          </div>
        ) : showManualUnread ? (
          <div className="chat-item-unread-dot" />
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
  onActionSelect?: (actionId: string) => void;
};

const ChannelActionPanel = ({ channel, position, onClose, actions, onActionSelect }: ChannelActionPanelProps) => {
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
            className={['chat-action-row', action.destructive ? 'chat-action-row--destructive' : '']
              .filter(Boolean)
              .join(' ')}
            type="button"
            onClick={() => {
              onActionSelect?.(action.id);
              onClose();
            }}
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
  onNavigateToCreate?: () => void;
};

const ChannelsScreen = ({ onNavigateToMessages, onNavigateToCreate }: ChannelsScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<ChannelCategory>('General');
  const [activeChannel, setActiveChannel] = useState<ChannelItem | null>(null);
  const [panelPosition, setPanelPosition] = useState<{ top: number } | null>(null);
  const [channelManualUnreadState, setChannelManualUnreadState] = useState<Record<string, boolean>>({});
  const [channelUnreadCounts, setChannelUnreadCounts] = useState<Record<string, number>>(() => {
    return CHANNEL_ITEMS.reduce<Record<string, number>>((acc, channel) => {
      if (typeof channel.unreadCount === 'number' && channel.unreadCount > 0) {
        acc[channel.id] = channel.unreadCount;
      }
      return acc;
    }, {});
  });
  const [channelMuteState, setChannelMuteState] = useState<Record<string, boolean>>({});
  const [channelPinnedState, setChannelPinnedState] = useState<Record<string, number>>({});
  const [pendingLeaveChannel, setPendingLeaveChannel] = useState<ChannelItem | null>(null);

  const visibleChannels = useMemo(() => {
    const filtered = CHANNEL_ITEMS.filter(channel => channel.category === selectedCategory);
    const pinned = filtered
      .filter(channel => channelPinnedState[channel.id])
      .sort((a, b) => (channelPinnedState[b.id] ?? 0) - (channelPinnedState[a.id] ?? 0));
    const unpinned = filtered.filter(channel => !channelPinnedState[channel.id]);
    return [...pinned, ...unpinned];
  }, [channelPinnedState, selectedCategory]);

  const markChannelAsUnread = useCallback((channelId: string) => {
    setChannelManualUnreadState(prev => {
      if (prev[channelId]) return prev;
      return { ...prev, [channelId]: true };
    });
  }, []);

  const clearChannelManualUnread = useCallback((channelId: string) => {
    setChannelManualUnreadState(prev => {
      if (!prev[channelId]) return prev;
      const updated = { ...prev };
      delete updated[channelId];
      return updated;
    });
  }, []);

  const clearChannelUnreadCount = useCallback((channelId: string) => {
    setChannelUnreadCounts(prev => {
      if (!prev[channelId]) return prev;
      const updated = { ...prev };
      delete updated[channelId];
      return updated;
    });
  }, []);

  const handleLongPress = useCallback((item: ChannelItem, rect: RectLike | null) => {
    const containerRect = readRect(containerRef.current);
    if (!containerRect || !rect) return;

    const panelHeight =
      CHANNEL_ACTION_ITEMS_COUNT * PANEL_ROW_HEIGHT +
      Math.max(CHANNEL_ACTION_ITEMS_COUNT - 1, 0) * PANEL_ROW_GAP +
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
  const activeChannelHasUnreadBadge = activeChannel ? Boolean(channelUnreadCounts[activeChannel.id]) : false;
  const activeChannelIsMuted = activeChannel ? Boolean(channelMuteState[activeChannel.id]) : false;
  const activeChannelIsPinned = activeChannel ? Boolean(channelPinnedState[activeChannel.id]) : false;
  const actionItems = useMemo(
    () => buildChannelActionItems(activeChannelHasUnreadBadge, activeChannelIsMuted, activeChannelIsPinned),
    [activeChannelHasUnreadBadge, activeChannelIsMuted, activeChannelIsPinned],
  );

  const handleActionSelect = useCallback(
    (actionId: string) => {
      if (!activeChannel) return;
      const selectedChannel = activeChannel;
      if (actionId === 'mark-unread') {
        clearChannelUnreadCount(selectedChannel.id);
        markChannelAsUnread(selectedChannel.id);
      } else if (actionId === 'mark-read') {
        clearChannelManualUnread(selectedChannel.id);
        clearChannelUnreadCount(selectedChannel.id);
      } else if (actionId === 'mute') {
        setChannelMuteState(prev => {
          const isMuted = Boolean(prev[selectedChannel.id]);
          const updated = { ...prev };
          if (isMuted) {
            delete updated[selectedChannel.id];
          } else {
            updated[selectedChannel.id] = true;
          }
          return updated;
        });
      } else if (actionId === 'pin') {
        setChannelPinnedState(prev => {
          const isPinned = Boolean(prev[selectedChannel.id]);
          if (isPinned) {
            const updated = { ...prev };
            delete updated[selectedChannel.id];
            return updated;
          }
          return { ...prev, [selectedChannel.id]: Date.now() };
        });
      } else if (actionId === 'leave-channel') {
        setPendingLeaveChannel(selectedChannel);
      }
    },
    [activeChannel, clearChannelManualUnread, clearChannelUnreadCount, markChannelAsUnread],
  );

  const handleCancelLeaveChannel = useCallback(() => {
    setPendingLeaveChannel(null);
  }, []);

  const handleConfirmLeaveChannel = useCallback(() => {
    setPendingLeaveChannel(null);
  }, []);

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
            const unreadCount = channelUnreadCounts[channel.id] ?? 0;
            const showManualUnread = !unreadCount && Boolean(channelManualUnreadState[channel.id]);
            const isMuted = Boolean(channelMuteState[channel.id]);
            const isPinned = Boolean(channelPinnedState[channel.id]);
            return (
              <ChannelCard
                key={channel.id}
                item={channel}
                onLongPress={handleLongPress}
                isActive={isActive}
                isDimmed={Boolean(isActionMode && !isActive)}
                unreadCount={unreadCount}
                showManualUnread={showManualUnread}
                isMuted={isMuted}
                isPinned={isPinned}
              />
            );
          })}
        </div>
      </div>

      <button className="fab" type="button" onClick={onNavigateToCreate}>
        <img src={addIcon} alt="Add Channel" className="fab-icon" />
      </button>

      <ChannelActionPanel
        channel={activeChannel}
        position={panelPosition}
        onClose={closeActionPanel}
        actions={actionItems}
        onActionSelect={handleActionSelect}
      />
      {pendingLeaveChannel ? (
        <div className="block-modal-backdrop">
          <div
            className="block-modal-frame"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leave-channel-modal-title"
            aria-describedby="leave-channel-modal-description"
          >
            <h3 id="leave-channel-modal-title" className="block-modal-title">
              Are you sure you want to unfollow this channel?
            </h3>
            <p id="leave-channel-modal-description" className="block-modal-description">
              You will stop receiving updates from this channel.
            </p>
            <div className="block-modal-cta-row">
              <button
                type="button"
                className="block-modal-cta block-modal-cta--secondary"
                onClick={handleCancelLeaveChannel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="block-modal-cta block-modal-cta--primary leave-channel-modal-primary"
                onClick={handleConfirmLeaveChannel}
              >
                Unfollow
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChannelsScreen;

