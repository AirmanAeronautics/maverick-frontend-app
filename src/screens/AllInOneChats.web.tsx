import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './AllInOneChats.css';

// Local image assets - using Vite imports for proper processing
import channelBg from '../assets/channel Bg.png';
import avatarArchived from '../assets/avatar-archived.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import searchIcon from '../../search.svg?url';
import addIcon from '../../add.svg?url';
import muteNotificationIcon from '../../ep_mute-notification.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import deleteIcon from '../../DELETE.svg?url';
import type { ChatItem } from './types';

const ARCHIVE_SUMMARY_ID = '__archive-summary';

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

type ActionItem = {
  id: string;
  label: (chat?: ChatItem | null) => string;
  destructive?: boolean;
};

const STATIC_ACTION_ITEMS: ActionItem[] = [
  { id: 'archive', label: () => 'Archive' },
  { id: 'block', label: chat => `Block ${chat?.name ?? 'user'}` },
  { id: 'delete', label: () => 'Delete chat', destructive: true },
];

const buildActionItems = (hasUnreadBadge: boolean, isMuted: boolean, isFavourite: boolean): ActionItem[] => [
  hasUnreadBadge
    ? { id: 'mark-read', label: () => 'Mark as read' }
    : { id: 'mark-unread', label: () => 'Mark as unread' },
  { id: 'mute', label: () => (isMuted ? 'Unmute' : 'Mute') },
  { id: 'favourite', label: () => (isFavourite ? 'Remove from Favourites' : 'Add to Favourites') },
  ...STATIC_ACTION_ITEMS,
];

const ACTION_ITEMS_COUNT = STATIC_ACTION_ITEMS.length + 3;

type MessageFilter = 'all' | 'groups' | 'favourites';

const MESSAGE_FILTERS: { id: MessageFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'groups', label: 'Groups' },
  { id: 'favourites', label: 'Favourites' },
];

const GROUP_CHAT_IDS = new Set(['landing-legends', 'cessna-172']);

type ChatItemComponentProps = {
  item: ChatItem;
  onLongPress?: (item: ChatItem, rect: RectLike | null) => void;
  isActive?: boolean;
  isDimmed?: boolean;
  onPress?: (item: ChatItem) => void;
  showManualUnread?: boolean;
  unreadCount?: number;
  isMuted?: boolean;
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
  onPress,
  showManualUnread,
  unreadCount = 0,
  isMuted = false,
}: ChatItemComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerLongPress = useCallback(() => {
    if (!onLongPress || !containerRef.current) return;
    const rect = readRect(containerRef.current);
    onLongPress(item, rect);
  }, [item, onLongPress]);

  const longPressHandlers = useLongPress(triggerLongPress, [triggerLongPress]);

  const handlePress = useCallback(() => {
    onPress?.(item);
  }, [item, onPress]);

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
      onClick={handlePress}
      {...longPressHandlers}
    >
      <div className="chat-item">
        <div className="chat-item-content">
          <img src={item.avatarUri} alt={item.name} className="chat-item-avatar" />
          <div className="chat-item-text-container">
            <div className="chat-item-name-row">
              <p className="chat-item-name">{item.name}</p>
              {isMuted ? <img src={muteNotificationIcon} alt="Muted" className="chat-item-mute-icon" /> : null}
            </div>
            {item.preview ? (
              <p className="chat-item-preview">{item.preview}</p>
            ) : null}
          </div>
        </div>
        {unreadCount > 0 ? (
          <div className="unread-badge">
            <span className="unread-badge-text">{unreadCount}</span>
          </div>
        ) : showManualUnread ? (
          <div className="chat-item-unread-dot" />
        ) : null}
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
  onActionSelect?: (actionId: string) => void;
};

const ChatActionPanel = ({ chat, position, onClose, actions, onActionSelect }: ChatActionPanelProps) => {
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
            onClick={() => {
              onActionSelect?.(action.id);
              onClose();
            }}
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
  chats?: ChatItem[];
  archivedChats?: ChatItem[];
  onArchiveChat?: (chatId: string) => void;
  onNavigateToArchive?: () => void;
  onNavigateToChannels?: () => void;
  onOpenChat?: (chat: ChatItem) => void;
  onBlockChat?: (chatId: string, shouldReport?: boolean) => void;
};

const AllInOneChats = ({
  chats = [],
  archivedChats = [],
  onArchiveChat,
  onNavigateToArchive,
  onNavigateToChannels,
  onBlockChat,
}: AllInOneChatsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);
  const [panelPosition, setPanelPosition] = useState<{ top: number } | null>(null);
  const [chatManualUnreadState, setChatManualUnreadState] = useState<Record<string, boolean>>({});
  const [chatUnreadCounts, setChatUnreadCounts] = useState<Record<string, number>>({});
  const [chatMuteState, setChatMuteState] = useState<Record<string, boolean>>({});
  const [chatFavouriteState, setChatFavouriteState] = useState<Record<string, boolean>>(() => {
    return chats.reduce<Record<string, boolean>>((acc, chat) => {
      if (chat.isFavourite) {
        acc[chat.id] = true;
      }
      return acc;
    }, {});
  });
  const [blockedChatIds, setBlockedChatIds] = useState<Record<string, boolean>>({});
  const [pendingBlockChat, setPendingBlockChat] = useState<ChatItem | null>(null);
  const [shouldReportToAirman, setShouldReportToAirman] = useState(false);
  const [pendingDeleteChat, setPendingDeleteChat] = useState<ChatItem | null>(null);
  const [shouldDeleteMediaFromGallery, setShouldDeleteMediaFromGallery] = useState(false);
  const [deletedChatIds, setDeletedChatIds] = useState<Record<string, boolean>>({});
  const [selectedFilter, setSelectedFilter] = useState<MessageFilter>('all');
  const CHAT_LIST_TOP = 265;
  const archivedCount = archivedChats.length;
  const archivedSummaryItem = useMemo<ChatItem>(
    () => ({
      id: ARCHIVE_SUMMARY_ID,
      name: 'Archived',
      preview: archivedCount > 0 ? 'Chats you moved out of the main list' : 'No archived chats yet',
      time: '',
      avatarUri: avatarArchived,
      unreadCount: archivedCount,
    }),
    [archivedCount],
  );
  useEffect(() => {
    setChatFavouriteState(prev => {
      const next: Record<string, boolean> = {};
      chats.forEach(chat => {
        const previousValue = prev[chat.id];
        const resolvedValue = typeof previousValue === 'boolean' ? previousValue : Boolean(chat.isFavourite);
        if (resolvedValue) {
          next[chat.id] = true;
        }
      });
      return next;
    });
  }, [chats]);

  useEffect(() => {
    setBlockedChatIds(prev => {
      const next = { ...prev };
      const currentIds = new Set(chats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!currentIds.has(id)) {
          delete next[id];
        }
      });
      return next;
    });
  }, [chats]);

  useEffect(() => {
    if (pendingBlockChat) {
      setShouldReportToAirman(false);
    }
  }, [pendingBlockChat]);

  useEffect(() => {
    if (pendingDeleteChat) {
      setShouldDeleteMediaFromGallery(false);
    }
  }, [pendingDeleteChat]);

  useEffect(() => {
    setDeletedChatIds(prev => {
      const next = { ...prev };
      const currentIds = new Set(chats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!currentIds.has(id)) {
          delete next[id];
        }
      });
      return next;
    });
  }, [chats]);

  const filteredChats = useMemo(() => {
    return chats.filter(chat => {
      if (blockedChatIds[chat.id]) {
        return false;
      }
      if (deletedChatIds[chat.id]) {
        return false;
      }
      if (selectedFilter === 'groups') {
        return GROUP_CHAT_IDS.has(chat.id);
      }
      if (selectedFilter === 'favourites') {
        return Boolean(chatFavouriteState[chat.id]);
      }
      return true;
    });
  }, [blockedChatIds, chats, chatFavouriteState, deletedChatIds, selectedFilter]);

  const displayedChats = useMemo(() => {
    if (selectedFilter === 'all') {
      return [archivedSummaryItem, ...filteredChats];
    }
    return filteredChats;
  }, [archivedSummaryItem, filteredChats, selectedFilter]);

  useEffect(() => {
    setChatManualUnreadState(prev => {
      const next = { ...prev };
      const currentIds = new Set(chats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!currentIds.has(id)) {
          delete next[id];
        }
      });
      return next;
    });
  }, [chats]);

  useEffect(() => {
    setChatUnreadCounts(prev => {
      const next: Record<string, number> = { ...prev };
      const currentIds = new Set(chats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!currentIds.has(id)) {
          delete next[id];
        }
      });
      chats.forEach(chat => {
        if (typeof chat.unreadCount === 'number' && chat.unreadCount > 0 && !next[chat.id]) {
          next[chat.id] = chat.unreadCount;
        }
      });
      return next;
    });
  }, [chats]);

  useEffect(() => {
    setChatMuteState(prev => {
      const next = { ...prev };
      const currentIds = new Set(chats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!currentIds.has(id)) {
          delete next[id];
        }
      });
      return next;
    });
  }, [chats]);

  const markChatAsUnread = useCallback((chatId: string) => {
    setChatManualUnreadState(prev => {
      if (prev[chatId]) return prev;
      return { ...prev, [chatId]: true };
    });
  }, []);

  const clearChatUnread = useCallback((chatId: string) => {
    setChatManualUnreadState(prev => {
      if (!prev[chatId]) return prev;
      const updated = { ...prev };
      delete updated[chatId];
      return updated;
    });
  }, []);

  const handleLongPress = useCallback((item: ChatItem, rect: RectLike | null) => {
    if (item.id === ARCHIVE_SUMMARY_ID) return;
    const containerRect = readRect(containerRef.current);
    if (!containerRect || !rect) return;

    const panelHeight =
      ACTION_ITEMS_COUNT * PANEL_ROW_HEIGHT +
      Math.max(ACTION_ITEMS_COUNT - 1, 0) * PANEL_ROW_GAP +
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
  const activeChatHasUnreadBadge = activeChat ? Boolean(chatUnreadCounts[activeChat.id]) : false;
  const activeChatIsMuted = activeChat ? Boolean(chatMuteState[activeChat.id]) : false;
  const activeChatIsFavourite = activeChat ? Boolean(chatFavouriteState[activeChat.id]) : false;
  const actionItems = useMemo(
    () => buildActionItems(activeChatHasUnreadBadge, activeChatIsMuted, activeChatIsFavourite),
    [activeChatHasUnreadBadge, activeChatIsMuted, activeChatIsFavourite],
  );

  const clearChatUnreadCount = useCallback((chatId: string) => {
    setChatUnreadCounts(prev => {
      if (!prev[chatId]) return prev;
      const updated = { ...prev };
      delete updated[chatId];
      return updated;
    });
  }, []);

  const handleChatPress = useCallback(
    (item: ChatItem) => {
      if (item.id === ARCHIVE_SUMMARY_ID) {
        onNavigateToArchive?.();
        return;
      }
      if (isActionMode) return;
      clearChatUnread(item.id);
      clearChatUnreadCount(item.id);
    },
    [clearChatUnread, clearChatUnreadCount, isActionMode, onNavigateToArchive],
  );

  const handleActionSelect = useCallback(
    (actionId: string) => {
      if (!activeChat) return;
      const selectedChat = activeChat;
      if (actionId === 'mark-unread') {
        clearChatUnreadCount(selectedChat.id);
        markChatAsUnread(selectedChat.id);
      } else if (actionId === 'mark-read') {
        clearChatUnread(selectedChat.id);
        clearChatUnreadCount(selectedChat.id);
      } else if (actionId === 'archive') {
        onArchiveChat?.(selectedChat.id);
      } else if (actionId === 'mute') {
        setChatMuteState(prev => {
          const isMuted = Boolean(prev[selectedChat.id]);
          const updated = { ...prev };
          if (isMuted) {
            delete updated[selectedChat.id];
          } else {
            updated[selectedChat.id] = true;
          }
          return updated;
        });
      } else if (actionId === 'favourite') {
        setChatFavouriteState(prev => {
          const next = { ...prev };
          if (next[selectedChat.id]) {
            delete next[selectedChat.id];
          } else {
            next[selectedChat.id] = true;
          }
          return next;
        });
      } else if (actionId === 'block') {
        setPendingBlockChat(selectedChat);
      } else if (actionId === 'delete') {
        setPendingDeleteChat(selectedChat);
      }
    },
    [activeChat, clearChatUnread, clearChatUnreadCount, markChatAsUnread, onArchiveChat],
  );

  const handleCancelBlock = useCallback(() => {
    setPendingBlockChat(null);
    setShouldReportToAirman(false);
  }, []);

  const handleConfirmBlock = useCallback(() => {
    if (!pendingBlockChat) return;
    setBlockedChatIds(prev => {
      if (prev[pendingBlockChat.id]) {
        return prev;
      }
      return { ...prev, [pendingBlockChat.id]: true };
    });
    setChatManualUnreadState(prev => {
      if (!prev[pendingBlockChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingBlockChat.id];
      return next;
    });
    setChatUnreadCounts(prev => {
      if (!prev[pendingBlockChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingBlockChat.id];
      return next;
    });
    setChatMuteState(prev => {
      if (!prev[pendingBlockChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingBlockChat.id];
      return next;
    });
    setChatFavouriteState(prev => {
      if (!prev[pendingBlockChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingBlockChat.id];
      return next;
    });
    onBlockChat?.(pendingBlockChat.id, shouldReportToAirman);
    setPendingBlockChat(null);
    setShouldReportToAirman(false);
  }, [onBlockChat, pendingBlockChat, shouldReportToAirman]);

  const handleReportToggle = useCallback((event: ChangeEvent<Element>) => {
    const target = event.target as { checked?: boolean };
    setShouldReportToAirman(Boolean(target.checked));
  }, []);

  const handleCancelDelete = useCallback(() => {
    setPendingDeleteChat(null);
    setShouldDeleteMediaFromGallery(false);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!pendingDeleteChat) return;

    setDeletedChatIds(prev => {
      if (prev[pendingDeleteChat.id]) {
        return prev;
      }
      return { ...prev, [pendingDeleteChat.id]: true };
    });

    setChatManualUnreadState(prev => {
      if (!prev[pendingDeleteChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingDeleteChat.id];
      return next;
    });
    setChatUnreadCounts(prev => {
      if (!prev[pendingDeleteChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingDeleteChat.id];
      return next;
    });
    setChatMuteState(prev => {
      if (!prev[pendingDeleteChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingDeleteChat.id];
      return next;
    });
    setChatFavouriteState(prev => {
      if (!prev[pendingDeleteChat.id]) return prev;
      const next = { ...prev };
      delete next[pendingDeleteChat.id];
      return next;
    });

    setPendingDeleteChat(null);
    setShouldDeleteMediaFromGallery(false);
  }, [pendingDeleteChat]);

  const handleDeleteMediaToggle = useCallback((event: ChangeEvent<Element>) => {
    const target = event.target as { checked?: boolean };
    setShouldDeleteMediaFromGallery(Boolean(target.checked));
  }, []);

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
          <div className="channels-screen-category-chips messages-filter-inline-chips">
            {MESSAGE_FILTERS.map(filter => {
              const isActive = filter.id === selectedFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  className={[
                    'channels-screen-chip',
                    isActive ? 'channels-screen-chip--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          {displayedChats.map(item => {
            const isArchiveSummary = item.id === ARCHIVE_SUMMARY_ID;
            const isActive = !isArchiveSummary && item.id === activeChat?.id;
            const displayUnreadCount = isArchiveSummary ? archivedCount : chatUnreadCounts[item.id] ?? 0;
            const hasManualUnread = !isArchiveSummary && Boolean(chatManualUnreadState[item.id]);
            const isMuted = !isArchiveSummary && Boolean(chatMuteState[item.id]);
            return (
              <ChatItemComponent
                key={item.id}
                item={item}
                onLongPress={isArchiveSummary ? undefined : handleLongPress}
                isActive={isActive}
                isDimmed={Boolean(isActionMode && (!isActive || isArchiveSummary))}
                onPress={handleChatPress}
                showManualUnread={!isArchiveSummary && !displayUnreadCount && hasManualUnread}
                unreadCount={displayUnreadCount}
                isMuted={isMuted}
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
        actions={actionItems}
        onActionSelect={handleActionSelect}
      />
      {pendingBlockChat ? (
        <div className="block-modal-backdrop">
          <div
            className="block-modal-frame"
            role="dialog"
            aria-modal="true"
            aria-labelledby="block-modal-title"
            aria-describedby="block-modal-description"
          >
            <div className="block-modal-icon" aria-hidden="true">
              <span className="block-modal-icon-slash" />
            </div>
            <h3 id="block-modal-title" className="block-modal-title">
              {`Block ${pendingBlockChat.name ?? 'this user'}?`}
            </h3>
            <p id="block-modal-description" className="block-modal-description">
              This person won’t be able to message or call you. They won’t know you blocked or reported them.
            </p>
            <div className="block-modal-report">
              <label className="block-modal-checkbox">
                <input
                  type="checkbox"
                  checked={shouldReportToAirman}
                  onChange={handleReportToggle}
                />
                <span>Report to Airman</span>
              </label>
              <p className="block-modal-checkbox-help">The last 5 messages in this chat will be sent to Airman.</p>
            </div>
            <div className="block-modal-cta-row">
              <button type="button" className="block-modal-cta block-modal-cta--secondary" onClick={handleCancelBlock}>
                Cancel
              </button>
              <button type="button" className="block-modal-cta block-modal-cta--primary" onClick={handleConfirmBlock}>
                Block
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {pendingDeleteChat ? (
        <div className="block-modal-backdrop">
          <div
            className="block-modal-frame"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-description"
          >
            <div className="block-modal-icon delete-modal-icon" aria-hidden="true">
              <img src={deleteIcon} alt="" className="delete-modal-icon-image" />
            </div>
            <h3 id="delete-modal-title" className="block-modal-title">
              Delete this chat?
            </h3>
            <p id="delete-modal-description" className="visually-hidden">
              Choose whether to delete chat media from the device gallery.
            </p>
            <div className="delete-modal-content">
              <label className="block-modal-checkbox delete-modal-checkbox">
                <input
                  type="checkbox"
                  checked={shouldDeleteMediaFromGallery}
                  onChange={handleDeleteMediaToggle}
                />
                <span className="delete-modal-checkbox-label">
                  Also delete media received in this chat from the device gallery
                </span>
              </label>
            </div>
            <div className="block-modal-cta-row">
              <button type="button" className="block-modal-cta block-modal-cta--secondary" onClick={handleCancelDelete}>
                Cancel
              </button>
              <button type="button" className="block-modal-cta block-modal-cta--primary" onClick={handleConfirmDelete}>
                Delete chat
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AllInOneChats;

