import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './ArchiveChats.css';

import channelBg from '../assets/channel Bg.png';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import type { ChatItem } from './types';

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

type ActionItem = {
  id: string;
  label: (chat?: ChatItem | null) => string;
  destructive?: boolean;
};

const ARCHIVE_SECONDARY_ACTIONS: ActionItem[] = [
  { id: 'favourite', label: () => 'Add to Favourites' },
  { id: 'block', label: chat => `Block ${chat?.name ?? 'user'}` },
  { id: 'delete', label: () => 'Delete chat', destructive: true },
];

const buildArchiveActionItems = (hasUnreadBadge: boolean): ActionItem[] => [
  { id: 'unarchive', label: () => 'Unarchive' },
  hasUnreadBadge
    ? { id: 'mark-read', label: () => 'Mark as read' }
    : { id: 'mark-unread', label: () => 'Mark as unread' },
  ...ARCHIVE_SECONDARY_ACTIONS,
];

const ARCHIVE_ACTIONS_COUNT = 2 + ARCHIVE_SECONDARY_ACTIONS.length;

type ArchiveChatItemProps = {
  item: ChatItem;
  onLongPress?: (item: ChatItem, rect: RectLike | null) => void;
  isActive?: boolean;
  isDimmed?: boolean;
  onPress?: (item: ChatItem) => void;
  showManualUnread?: boolean;
  unreadCount?: number;
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

const ArchiveChatItem = ({
  item,
  onLongPress,
  isActive,
  isDimmed,
  onPress,
  showManualUnread,
  unreadCount = 0,
}: ArchiveChatItemProps) => {
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
            <p className="chat-item-name">{item.name}</p>
            {item.preview ? <p className="chat-item-preview">{item.preview}</p> : null}
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
const CHAT_LIST_TOP = 265;

type ArchiveChatsProps = {
  archivedChats: ChatItem[];
  onBack?: () => void;
  onOpenChat?: (chat: ChatItem) => void;
  onUnarchiveChat?: (chatId: string) => void;
  onDeleteChat?: (chatId: string) => void;
};

const ArchiveChats = ({
  archivedChats,
  onBack,
  onOpenChat,
  onUnarchiveChat,
  onDeleteChat,
}: ArchiveChatsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);
  const [panelPosition, setPanelPosition] = useState<{ top: number } | null>(null);
  const [chatManualUnreadState, setChatManualUnreadState] = useState<Record<string, boolean>>({});
  const [chatUnreadCounts, setChatUnreadCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    setChatManualUnreadState(prev => {
      const next = { ...prev };
      const ids = new Set(archivedChats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!ids.has(id)) {
          delete next[id];
        }
      });
      return next;
    });
  }, [archivedChats]);

  useEffect(() => {
    setChatUnreadCounts(prev => {
      const next: Record<string, number> = { ...prev };
      const ids = new Set(archivedChats.map(chat => chat.id));
      Object.keys(next).forEach(id => {
        if (!ids.has(id)) {
          delete next[id];
        }
      });
      archivedChats.forEach(chat => {
        if (typeof chat.unreadCount === 'number' && chat.unreadCount > 0 && !next[chat.id]) {
          next[chat.id] = chat.unreadCount;
        }
      });
      return next;
    });
  }, [archivedChats]);

  const markChatAsUnread = useCallback((chatId: string) => {
    setChatManualUnreadState(prev => {
      if (prev[chatId]) return prev;
      return { ...prev, [chatId]: true };
    });
  }, []);

  const clearChatUnread = useCallback((chatId: string) => {
    setChatManualUnreadState(prev => {
      if (!prev[chatId]) return prev;
      const next = { ...prev };
      delete next[chatId];
      return next;
    });
  }, []);

  const clearChatUnreadCount = useCallback((chatId: string) => {
    setChatUnreadCounts(prev => {
      if (!prev[chatId]) return prev;
      const next = { ...prev };
      delete next[chatId];
      return next;
    });
  }, []);

  const handleLongPress = useCallback((item: ChatItem, rect: RectLike | null) => {
    const containerRect = readRect(containerRef.current);
    if (!containerRect || !rect) return;

    const panelHeight =
      ARCHIVE_ACTIONS_COUNT * PANEL_ROW_HEIGHT +
      Math.max(ARCHIVE_ACTIONS_COUNT - 1, 0) * PANEL_ROW_GAP +
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
  const actionItems = useMemo(() => buildArchiveActionItems(activeChatHasUnreadBadge), [activeChatHasUnreadBadge]);

  const handleChatPress = useCallback(
    (item: ChatItem) => {
      if (isActionMode) return;
      clearChatUnread(item.id);
      clearChatUnreadCount(item.id);
      onOpenChat?.(item);
    },
    [clearChatUnread, clearChatUnreadCount, isActionMode, onOpenChat],
  );

  const handleActionSelect = useCallback(
    (actionId: string) => {
      if (!activeChat) return;
      if (actionId === 'unarchive') {
        onUnarchiveChat?.(activeChat.id);
      } else if (actionId === 'mark-unread') {
        clearChatUnreadCount(activeChat.id);
        markChatAsUnread(activeChat.id);
      } else if (actionId === 'mark-read') {
        clearChatUnread(activeChat.id);
        clearChatUnreadCount(activeChat.id);
      } else if (actionId === 'delete') {
        onDeleteChat?.(activeChat.id);
      }
    },
    [activeChat, clearChatUnread, clearChatUnreadCount, markChatAsUnread, onDeleteChat, onUnarchiveChat],
  );

  return (
    <div
      className={[
        'archive-chats-container',
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

      <div className="archive-header">
        <button className="back-button" type="button" onClick={onBack}>
          <img src={arrowLeftIcon} alt="Back" className="back-icon" />
        </button>
        <div className="archive-header-text">
          <h2 className="archive-header-title">Archived</h2>
          <span className="archive-header-count">
            {archivedChats.length} {archivedChats.length === 1 ? 'chat' : 'chats'}
          </span>
        </div>
      </div>

      <div className="archive-chat-list">
        <div className="archive-chat-list-inner">
          {archivedChats.length === 0 ? (
            <div className="archive-empty-state">
              <div className="archive-empty-emoji">🗂️</div>
              <p className="archive-empty-title">No archived chats yet</p>
              <p className="archive-empty-copy">Archive chats to keep your inbox tidy.</p>
            </div>
          ) : (
            archivedChats.map(item => {
              const isActive = item.id === activeChat?.id;
              const displayUnreadCount = chatUnreadCounts[item.id] ?? 0;
              const hasManualUnread = Boolean(chatManualUnreadState[item.id]);
              return (
                <ArchiveChatItem
                  key={item.id}
                  item={item}
                  onLongPress={handleLongPress}
                  isActive={isActive}
                  isDimmed={Boolean(isActionMode && !isActive)}
                  onPress={handleChatPress}
                  showManualUnread={!displayUnreadCount && hasManualUnread}
                  unreadCount={displayUnreadCount}
                />
              );
            })
          )}
        </div>
      </div>

      <ChatActionPanel
        chat={activeChat}
        position={panelPosition}
        onClose={closeActionPanel}
        actions={actionItems}
        onActionSelect={handleActionSelect}
      />
    </div>
  );
};

export default ArchiveChats;


