import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { ChatItem } from './types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);
const CHAT_CARD_WIDTH = 382;
const HEADER_TOP = 65;
const HEADER_HEIGHT = 66;
const CHAT_LIST_GAP = 36;
const CHAT_LIST_TOP = HEADER_TOP + HEADER_HEIGHT + CHAT_LIST_GAP;

const imgChannelBg = Image.resolveAssetSource(require('../../channel Bg.png')).uri;
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';

type ArchiveChatsProps = {
  archivedChats?: ChatItem[];
  onBack?: () => void;
  onUnarchiveChat?: (chatId: string) => void;
  onDeleteChat?: (chatId: string) => void;
};

type ActionItem = {
  id: string;
  label: (context?: ChatItem | null) => string;
  destructive?: boolean;
};

const ARCHIVE_SECONDARY_ACTIONS: ActionItem[] = [
  { id: 'favourite', label: () => 'Add to Favourites' },
  { id: 'block', label: context => `Block ${context?.name ?? 'user'}` },
  { id: 'delete', label: () => 'Delete chat', destructive: true },
];

const buildArchiveActionItems = (hasUnreadBadge: boolean): ActionItem[] => [
  { id: 'unarchive', label: () => 'Unarchive' },
  hasUnreadBadge
    ? { id: 'mark-read', label: () => 'Mark as read' }
    : { id: 'mark-unread', label: () => 'Mark as unread' },
  ...ARCHIVE_SECONDARY_ACTIONS,
];

const StatusBarBattery = () => (
  <View style={styles.batteryContainer}>
    <View style={styles.batteryOutline}>
      <Image source={{ uri: imgOutline }} style={styles.batteryOutlineImage} />
    </View>
    <View style={styles.batteryEnd}>
      <Image source={{ uri: imgBatteryEnd }} style={styles.batteryEndImage} />
    </View>
    <View style={styles.batteryFill}>
      <Image source={{ uri: imgFill }} style={styles.batteryFillImage} />
    </View>
  </View>
);

type ChatItemComponentProps = {
  item: ChatItem;
  onLongPress?: (item: ChatItem, layout: { top: number; height: number }) => void;
  isActive?: boolean;
  isDimmed?: boolean;
  onPress?: (item: ChatItem) => void;
  showManualUnread?: boolean;
  unreadCount?: number;
};

const ChatItemComponent = ({
  item,
  onLongPress,
  isActive,
  isDimmed,
  onPress,
  showManualUnread,
  unreadCount = 0,
}: ChatItemComponentProps) => {
  const chatItemRef = useRef<View>(null);

  const handleLongPress = useCallback(() => {
    if (!onLongPress) return;
    chatItemRef.current?.measureInWindow((_, y, __, height) => {
      if (typeof y === 'number' && typeof height === 'number') {
        onLongPress(item, { top: y, height });
      }
    });
  }, [item, onLongPress]);

  const handlePress = useCallback(() => {
    onPress?.(item);
  }, [item, onPress]);

  return (
    <TouchableOpacity
      style={[
        styles.chatItemContainer,
        isActive && styles.chatItemContainerActive,
        isDimmed && styles.chatItemContainerDimmed,
      ]}
      activeOpacity={0.7}
      delayLongPress={350}
      onLongPress={handleLongPress}
      onPress={handlePress}
    >
      <View style={styles.chatItem} ref={chatItemRef}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0.929, y: 0.847 }}
          end={{ x: 0, y: 0 }}
          style={styles.chatItemGradient}
        >
          <View style={styles.chatItemInnerBorder}>
            <View style={styles.chatItemContent}>
              <Image source={{ uri: item.avatarUri }} style={styles.chatItemAvatar} />
              <View style={styles.chatItemTextContainer}>
                <Text style={styles.chatItemName} numberOfLines={1}>
                  {item.name}
                </Text>
                {item.preview ? (
                  <Text style={styles.chatItemPreview} numberOfLines={1}>
                    {item.preview}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        </LinearGradient>
        {unreadCount > 0 ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
          </View>
        ) : showManualUnread ? (
          <View style={styles.manualUnreadDot} />
        ) : null}
        {item.time ? (
          <View style={styles.chatItemTimeContainer}>
            <Text style={styles.chatItemTime}>{item.time}</Text>
          </View>
        ) : null}
        {isDimmed && <View style={styles.chatItemDimOverlay} pointerEvents="none" />}
      </View>
    </TouchableOpacity>
  );
};

type ChatActionPanelProps = {
  visible: boolean;
  anchorY: number;
  containerTop: number;
  onDismiss: () => void;
  chatContext: ChatItem | null;
  actions: ActionItem[];
  onActionSelect?: (actionId: string) => void;
};

const ChatActionPanel = ({
  visible,
  anchorY,
  containerTop,
  onDismiss,
  chatContext,
  actions,
  onActionSelect,
}: ChatActionPanelProps) => {
  if (!visible) return null;

  const relativeTop = Math.min(
    Math.max(anchorY - containerTop, CHAT_LIST_TOP + 8),
    screenHeight - 320,
  );

  return (
    <View style={styles.actionPanelLayer} pointerEvents="box-none">
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View
          style={[
            styles.actionPanelDismissArea,
            {
              top: CHAT_LIST_TOP,
              height: Math.max(screenHeight - CHAT_LIST_TOP, 0),
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <View style={[styles.actionPanelWrapper, { top: relativeTop }]}>
        <View style={styles.actionPanel}>
          {actions.map((action, index) => {
            const showSeparator = index < actions.length - 1;
            return (
              <TouchableOpacity
                key={action.id}
                style={styles.actionPanelRow}
                activeOpacity={0.7}
                onPress={() => {
                  onActionSelect?.(action.id);
                  onDismiss();
                }}
              >
                <Text
                  style={[
                    styles.actionPanelRowText,
                    action.destructive && styles.actionPanelRowTextDestructive,
                  ]}
                >
                  {action.label(chatContext)}
                </Text>
                {showSeparator && <View style={styles.actionPanelRowSeparator} pointerEvents="none" />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const ArchiveChats = ({
  archivedChats = [],
  onBack,
  onUnarchiveChat,
  onDeleteChat,
}: ArchiveChatsProps) => {
  const containerRef = useRef<View>(null);
  const [containerTop, setContainerTop] = useState(0);
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);
  const [panelAnchorY, setPanelAnchorY] = useState(0);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
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

  const handleContainerLayout = useCallback(() => {
    containerRef.current?.measureInWindow((_, y) => {
      setContainerTop(y);
    });
  }, []);

  const handleLongPress = useCallback((item: ChatItem, layout?: { top: number; height: number }) => {
    if (!layout) return;
    const anchor = layout.top + layout.height + 12;
    setActiveChat(item);
    setPanelAnchorY(anchor);
    setIsPanelVisible(true);
  }, []);

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
      if (isPanelVisible) return;
      clearChatUnread(item.id);
      clearChatUnreadCount(item.id);
    },
    [clearChatUnread, clearChatUnreadCount, isPanelVisible],
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

  const closePanel = useCallback(() => {
    setIsPanelVisible(false);
    setActiveChat(null);
  }, []);

  const isActionMode = Boolean(isPanelVisible && activeChat);
  const activeChatHasUnreadBadge = activeChat ? Boolean(chatUnreadCounts[activeChat.id]) : false;
  const actionItems = useMemo(() => buildArchiveActionItems(activeChatHasUnreadBadge), [activeChatHasUnreadBadge]);

  return (
    <View
      style={styles.container}
      ref={containerRef}
      onLayout={handleContainerLayout}
    >
      <ImageBackground source={{ uri: imgChannelBg }} style={styles.backgroundImage} blurRadius={50}>
        <View style={styles.backgroundOverlay} />
      </ImageBackground>

      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <View style={styles.statusBarTimeContainer}>
            <Text style={styles.statusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Archived</Text>
          <Text style={styles.headerSubtitle}>
            {archivedChats.length} {archivedChats.length === 1 ? 'chat' : 'chats'}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.archiveList}
        contentContainerStyle={styles.archiveListContent}
        showsVerticalScrollIndicator={false}
      >
        {archivedChats.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🗂️</Text>
            <Text style={styles.emptyTitle}>No archived chats yet</Text>
            <Text style={styles.emptyCopy}>Archive chats to keep your inbox tidy.</Text>
          </View>
        ) : (
          archivedChats.map(item => {
            const isActive = item.id === activeChat?.id;
            const displayUnreadCount = chatUnreadCounts[item.id] ?? 0;
            const hasManualUnread = Boolean(chatManualUnreadState[item.id]);
            return (
              <ChatItemComponent
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
      </ScrollView>

      <ChatActionPanel
        visible={isPanelVisible}
        anchorY={panelAnchorY}
        containerTop={containerTop}
        onDismiss={closePanel}
        chatContext={activeChat}
        actions={actionItems}
        onActionSelect={handleActionSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: DESIGN_WIDTH,
    height: screenHeight,
    top: 0,
    left: (screenWidth > DESIGN_WIDTH ? DESIGN_WIDTH : screenWidth) / 2 - DESIGN_WIDTH / 2,
  },
  backgroundOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  statusBar: {
    height: 47,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusBarIcon: {
    width: 18,
    height: 12,
  },
  batteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  batteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
    height: 13,
  },
  batteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  batteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
    height: 4.22,
  },
  batteryEndImage: {
    width: '100%',
    height: '100%',
  },
  batteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
    height: 9,
  },
  batteryFillImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 65,
    left: 0,
    width: APP_WIDTH,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backIcon: {
    width: 28,
    height: 28,
  },
  headerTextContainer: {
    marginLeft: 16,
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    margin: 0,
    padding: 0,
    textAlignVertical: 'center',
  },
  headerSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    color: '#424242',
    marginTop: 4,
  },
  archiveList: {
    flex: 1,
    marginTop: CHAT_LIST_TOP,
    paddingHorizontal: (APP_WIDTH - CHAT_CARD_WIDTH) / 2,
  },
  archiveListContent: {
    paddingBottom: 80,
  },
  chatItemContainer: {
    marginBottom: 12,
    position: 'relative',
  },
  chatItemContainerActive: {
    zIndex: 30,
    shadowColor: '#0A8ACB',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  chatItemContainerDimmed: {
    zIndex: 1,
  },
  chatItem: {
    width: CHAT_CARD_WIDTH,
    height: 82,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  chatItemGradient: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    borderRadius: 14,
    justifyContent: 'center',
  },
  chatItemInnerBorder: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  chatItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chatItemAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  chatItemTextContainer: {
    flex: 1,
    gap: 4,
  },
  chatItemName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  chatItemPreview: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    color: '#373737',
  },
  unreadBadge: {
    position: 'absolute',
    left: 349,
    top: 43,
    width: 17,
    height: 17,
    backgroundColor: '#00769a',
    borderRadius: 29.167,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBadgeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 9.857,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  manualUnreadDot: {
    position: 'absolute',
    left: 349,
    top: 43,
    width: 17,
    height: 17,
    backgroundColor: '#00769a',
    borderRadius: 29.167,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  chatItemTimeContainer: {
    position: 'absolute',
    left: 326,
    top: 20.15,
    width: 40,
    height: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  chatItemTime: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10.041,
    fontWeight: '400',
    color: '#373737',
  },
  chatItemDimOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    backgroundColor: 'rgba(6, 24, 40, 0.25)',
    zIndex: 5,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 60,
    gap: 8,
    paddingHorizontal: 16,
  },
  emptyEmoji: {
    fontSize: 72,
  },
  emptyTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  emptyCopy: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
  },
  actionPanelLayer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 20,
  },
  actionPanelDismissArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  actionPanelWrapper: {
    position: 'absolute',
    right: 24,
    width: 220,
  },
  actionPanel: {
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 4,
    paddingHorizontal: 6,
    gap: 4,
  },
  actionPanelRow: {
    height: 44,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'relative',
  },
  actionPanelRowSeparator: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 0,
    height: 0.5,
    backgroundColor: '#E2EBF0',
  },
  actionPanelRowText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#0F172A',
  },
  actionPanelRowTextDestructive: {
    color: '#E02424',
  },
});

export default ArchiveChats;


