import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  ImageBackground,
  GestureResponderEvent,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);
const CHAT_LIST_TOP = 255;

// Local image assets
const imgChannelBg = Image.resolveAssetSource(require('../../channel Bg.png')).uri;

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

type StatusBarBatteryProps = {
  className?: string;
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
  label: (context?: ChatItem | null) => string;
  destructive?: boolean;
};

const ACTION_ITEMS: ActionItem[] = [
  { id: 'mark-unread', label: () => 'Mark as unread' },
  { id: 'archive', label: () => 'Archive' },
  { id: 'mute', label: () => 'Mute' },
  { id: 'lock', label: () => 'Lock chat' },
  { id: 'favourite', label: () => 'Add to Favourites' },
  {
    id: 'block',
    label: context => `Block ${context?.name ?? 'user'}`,
  },
  {
    id: 'delete',
    label: () => 'Delete chat',
    destructive: true,
  },
];

type ChatItemComponentProps = {
  item: ChatItem;
  onLongPress?: (item: ChatItem, layout: { top: number; height: number }) => void;
  isActive?: boolean;
  isDimmed?: boolean;
};

const ChatItemComponent = ({
  item,
  onLongPress,
  isActive,
  isDimmed,
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
        {item.unreadCount !== undefined && item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>{item.unreadCount}</Text>
          </View>
        )}
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
};

const ChatActionPanel = ({
  visible,
  anchorY,
  containerTop,
  onDismiss,
  chatContext,
  actions,
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
          {actions.map(action => (
            <TouchableOpacity
              key={action.id}
              style={styles.actionPanelRow}
              activeOpacity={0.7}
              onPress={onDismiss}
            >
              <Text
                style={[
                  styles.actionPanelRowText,
                  action.destructive && styles.actionPanelRowTextDestructive,
                ]}
              >
                {action.label(chatContext)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const AllInOneChats = () => {
  const containerRef = useRef<View>(null);
  const [containerTop, setContainerTop] = useState(0);
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);
  const [panelAnchorY, setPanelAnchorY] = useState(0);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

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

  const closePanel = useCallback(() => {
    setIsPanelVisible(false);
    setActiveChat(null);
  }, []);

  const isActionMode = isPanelVisible && activeChat;

  return (
    <View
      style={styles.container}
      ref={containerRef}
      onLayout={handleContainerLayout}
    >
      {/* Background with blur effect */}
      <ImageBackground
        source={{ uri: imgChannelBg }}
        style={styles.backgroundImage}
        blurRadius={50}
      >
        <View style={styles.backgroundOverlay} />
      </ImageBackground>

      {/* Status Bar */}
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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>All in One Chats</Text>
            <View style={styles.headerSubtitleContainer}>
              <Text style={styles.headerSubtitle}>Join discussion channels</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerEmojiContainer}>
          <Text style={styles.headerEmoji}>✈️</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
          <Image source={{ uri: imgPhDotsThreeVertical }} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <View style={styles.searchInput}>
            <View style={styles.searchContent}>
              <Image source={{ uri: imgSearch }} style={styles.searchIcon} />
              <TextInput
                style={styles.searchTextInput}
                placeholder="Search for Channels"
                placeholderTextColor="#454950"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabActive}>
          <Text style={styles.tabText}>Messages</Text>
        </View>
        <TouchableOpacity style={styles.tabInactive} activeOpacity={0.7}>
          <Text style={styles.tabText}>Channels</Text>
        </TouchableOpacity>
        <View style={styles.tabIndicator} />
      </View>

      {/* Chat List */}
      <ScrollView
        style={styles.chatList}
        contentContainerStyle={styles.chatListContent}
        showsVerticalScrollIndicator={false}
      >
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
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Image source={{ uri: imgFrame1171275563 }} style={styles.fabIcon} />
      </TouchableOpacity>

      <ChatActionPanel
        visible={isPanelVisible}
        anchorY={panelAnchorY}
        containerTop={containerTop}
        onDismiss={closePanel}
        chatContext={activeChat}
        actions={ACTION_ITEMS}
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
    top: screenHeight / 2 - screenHeight / 2,
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
    backgroundColor: 'transparent',
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
    top: 55,
    left: 0,
    width: APP_WIDTH,
    height: 66.507,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19.93,
    zIndex: 10,
  },
  backButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 27.52,
    height: 27.52,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 21,
    gap: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22.933,
    marginBottom: 0,
  },
  headerSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: -1,
  },
  headerSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#424242',
    lineHeight: 22.933,
  },
  headerEmojiContainer: {
    position: 'absolute',
    left: 323,
    top: 56,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerEmoji: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    color: '#000000',
  },
  menuButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  menuIcon: {
    width: 27.52,
    height: 27.52,
  },
  searchContainer: {
    position: 'absolute',
    top: 130,
    left: '50%',
    transform: [{ translateX: -191 }],
    width: 382,
    height: 44,
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInput: {
    height: 44,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 25,
    paddingRight: 94,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  searchContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchTextInput: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#454950',
    height: 20,
  },
  tabsContainer: {
    position: 'absolute',
    top: 212,
    left: 78,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabActive: {
    marginRight: 40,
  },
  tabInactive: {
    marginLeft: 10,
  },
  tabText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
  },
  tabIndicator: {
    position: 'absolute',
    left: 0,
    top: 14,
    width: 91,
    height: 5,
    backgroundColor: '#00627f',
    borderRadius: 24,
  },
  chatList: {
    flex: 1,
    marginTop: 255,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  chatListContent: {
    paddingBottom: 100,
  },
  chatItemContainer: {
    marginBottom: 8,
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
    width: 382,
    height: 82,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  chatItemDimOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    backgroundColor: 'rgba(6, 24, 40, 0.25)',
    zIndex: 5,
    ...(Platform.OS === 'web'
      ? ({ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(6px)' } as any)
      : {}),
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 63,
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
    lineHeight: 21.281,
  },
  chatItemPreview: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '400',
    color: '#373737',
    lineHeight: 16,
    width: 212,
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
    overflow: 'hidden',
  },
  unreadBadgeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 9.857,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 8,
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
    lineHeight: 15,
  },
  fab: {
    position: 'absolute',
    left: APP_WIDTH * 0.8 + 4,
    top: 788,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    width: 56,
    height: 56,
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

export default AllInOneChats;

