import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 932;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);
const PANEL_WIDTH = 285;
const PANEL_HEIGHT = 92;
const PANEL_BORDER_RADIUS = 46;
const INPUT_HEIGHT = 49;
const INPUT_VERTICAL_PADDING = 20;
const PANEL_BOTTOM_GAP = 8;
const PANEL_BOTTOM_OFFSET = INPUT_HEIGHT + INPUT_VERTICAL_PADDING + PANEL_BOTTOM_GAP;
const PANEL_LEFT_OFFSET = Math.max((APP_WIDTH - PANEL_WIDTH) / 2, 0);
const ICON_TILE_SIZE = 54;
const ICON_LABEL_GAP = 6;
const REACTION_PANEL_WIDTH = 276;
const REACTION_PANEL_HEIGHT = 58;
const ACTION_MENU_WIDTH = 254;

// Image assets from Figma
const imgImage = 'https://www.figma.com/api/mcp/asset/166573e9-968c-4330-8cca-d15e7bd6a074';
const imgIPhone1415Pro1 = 'https://www.figma.com/api/mcp/asset/3236f5b6-5c6c-4888-91be-ffe3039ee9bc';
const imgRectangle1 = 'https://www.figma.com/api/mcp/asset/32e10b63-b6d0-4133-bc69-c34557014ae4';
const imgAvatar = 'https://www.figma.com/api/mcp/asset/02204879-0fa7-4d07-a529-d8d70ea06faa';
const imgRectangle5 = 'https://www.figma.com/api/mcp/asset/08d0ab5a-fee5-4cb8-b761-0b385ff013e2';
const imgAvatar1 = 'https://www.figma.com/api/mcp/asset/468b3ca7-7e1b-4a4a-a93b-c4049fcd8943';
const imgIncomingCustomPreview = 'https://www.figma.com/api/mcp/asset/3ad3463e-4750-491f-9600-324117e47dd3';
const imgMap = Image.resolveAssetSource(require('../assets/map.png')).uri;
const imgPhDotsThreeVertical = 'https://www.figma.com/api/mcp/asset/f6282d6c-70c2-45e0-b53c-af783653ffa9';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/0a37a700-9d60-4529-9ed0-4a3d30e262dc';
const imgIcSharpPlus = 'https://www.figma.com/api/mcp/asset/7a66548f-9537-4f30-b835-e195d306df29';
const imgMdiMicrophone = 'https://www.figma.com/api/mcp/asset/5194ef10-81ef-41a3-9bd8-5298a70f8f4a';
const imgGroup = 'https://www.figma.com/api/mcp/asset/0b345df3-7c0d-4b2a-9bfc-8ce2ab448717';
const imgWifi = 'https://www.figma.com/api/mcp/asset/8c290831-5680-4336-bc36-b7560bb4dc53';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/cfb203a4-60ed-476c-a701-61ca3f31dc79';
const imgFrame1171275495 = 'https://www.figma.com/api/mcp/asset/f8663a0d-4c75-4d4b-ae43-2d39d583ad4d';
const imgEllipse10 = 'https://www.figma.com/api/mcp/asset/607c5eb4-72c9-4521-9801-c423705062ca';

const ATTACHMENT_OPTIONS = [
  { label: 'Attach', icon: 'attach-sharp' },
  { label: 'Camera', icon: 'camera' },
  { label: 'Location', icon: 'location' },
  { label: 'Video', icon: 'videocam' },
];

type MessageType = 'incoming' | 'outgoing' | 'media' | 'outgoingVoice' | 'incomingCustom' | 'outgoingCustom';

type IncomingCustomBubbleContent = {
  title: string;
  meta: string[];
  previewUri: string;
  timestampTop?: string;
  timestampBottom?: string;
};

type MessageLayout = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Message = {
  id: string;
  type: MessageType;
  authorName?: string;
  role?: string;
  text?: string;
  mediaUri?: string;
  duration?: string;
  timestamp: string;
  showStatus?: boolean;
  avatarUri?: string;
  nameVariant?: 'default' | 'max';
  customBubble?: IncomingCustomBubbleContent;
};

const REACTION_EMOJIS = ['😂', '😅', '🥰', '😴', '😜', '😭', '+'];

const ACTION_MENU_ITEMS = [
  { key: 'reply', label: 'Reply', icon: 'return-up-back-outline' },
  { key: 'copy', label: 'Copy', icon: 'copy-outline' },
  { key: 'forward', label: 'Forward', icon: 'arrow-redo-outline' },
  { key: 'info', label: 'Info', icon: 'information-circle-outline' },
  { key: 'star', label: 'Star', icon: 'star-outline' },
  { key: 'delete', label: 'Delete', icon: 'trash-outline', destructive: true },
  { key: 'more', label: 'More', icon: 'ellipsis-horizontal' },
];

const OUTGOING_VOICE_WAVEFORM = [
  6, 12.5, 9, 15, 17, 11.5, 8, 13.2, 7.4, 16.4, 10.1, 5.5, 14.6, 17,
  9.2, 6.4, 11.8, 15.3, 8.6, 7, 12.4, 16.1, 9.8, 5.8, 13.7, 17, 10.5, 6.2,
];

const MESSAGES: Message[] = [
  {
    id: '0',
    type: 'incomingCustom',
    timestamp: '2:40pm',
    authorName: 'Airman Admin',
    role: 'Training',
    avatarUri: imgAvatar,
    nameVariant: 'default',
    customBubble: {
      title: 'Airman Academy',
      meta: ['2 pages', '80Kb', 'PDF'],
      previewUri: imgIncomingCustomPreview,
      timestampTop: '2:40pm',
      timestampBottom: '2:40pm',
    },
  },
  {
    id: '1',
    type: 'incoming',
    authorName: 'Cap Steve',
    role: 'Pilot',
    text: 'Morning all — 737 tech deferred item cleared. Line check tomorrow at 0800, be ready.',
    timestamp: '2:40pm',
    avatarUri: imgAvatar,
    nameVariant: 'default',
  },
  {
    id: '2',
    type: 'incoming',
    authorName: 'Cap Steve',
    role: 'Pilot',
    text: 'Morning all — 737 tech deferred item cleared. Line check tomorrow at 0800, be ready.',
    timestamp: '2:40pm',
    avatarUri: imgAvatar,
    nameVariant: 'default',
  },
  {
    id: '3',
    type: 'outgoing',
    text: 'Did one today — felt long. Any tips on staying cool during a rejected landing?',
    timestamp: '2:40pm',
    showStatus: true,
  },
  {
    id: '4',
    type: 'outgoingVoice',
    duration: '1:05',
    timestamp: '2:40pm',
    showStatus: true,
  },
  {
    id: '6',
    type: 'outgoingCustom',
    timestamp: '2:40pm',
    showStatus: true,
    customBubble: {
      title: 'Flight Manual Update',
      meta: ['2 pages', '80Kb', 'PDF'],
      previewUri: imgMap,
      timestampTop: '2:40pm',
      timestampBottom: '2:40pm',
    },
  },
  {
    id: '5',
    type: 'media',
    authorName: 'Max Mayfield',
    role: 'Pilot',
    mediaUri: imgRectangle5,
    timestamp: '2:40pm',
    avatarUri: imgAvatar1,
    nameVariant: 'max',
  },
];

type AttachmentPanelProps = {
  visible: boolean;
  animation: Animated.Value;
};

const AttachmentPanel = ({ visible, animation }: AttachmentPanelProps) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={[
        styles.attachmentPanel,
        {
          opacity: animation,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.attachmentPanelInner}>
        <View style={styles.attachmentOptionsRow}>
          {ATTACHMENT_OPTIONS.map(option => (
            <TouchableOpacity key={option.label} style={styles.attachmentOption} activeOpacity={0.85}>
              <View style={styles.attachmentIconWrapper}>
                <Ionicons name={option.icon} size={22} color="#007C91" style={styles.attachmentIcon} />
              </View>
              <Text style={styles.attachmentLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

type SettingsPanelProps = {
  visible: boolean;
  animation: Animated.Value;
  onClose: () => void;
  messagesAreaLayout: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

const SETTINGS_OPTIONS = [
  { key: 'mute', label: 'Mute Notifications', icon: 'notifications-off-outline' },
  { key: 'search', label: 'Search', icon: 'search-outline' },
  { key: 'media', label: 'Media, Files & Links', icon: 'images-outline' },
  { key: 'privacy', label: 'Privacy & Security', icon: 'lock-closed-outline' },
  { key: 'addMembers', label: 'Add Members', icon: 'person-add-outline' },
  { key: 'clearChat', label: 'Clear Chat', icon: 'trash-outline' },
  { key: 'addShortcut', label: 'Add Shortcut', icon: 'bookmark-outline' },
  { key: 'leave', label: 'Leave Group', icon: 'log-out-outline', destructive: true },
];

const SettingsPanel = ({ visible, animation, onClose, messagesAreaLayout }: SettingsPanelProps) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });
  const opacity = animation.interpolate({
    inputRange: [0, 0.01, 1],
    outputRange: [0, 1, 1],
  });

  const panelStyle = useMemo(() => {
    const width = Math.min(ACTION_MENU_WIDTH, messagesAreaLayout.width - 32);
    // Position slightly to the right from center (shift by ~25% of available space)
    const centerLeft = messagesAreaLayout.x + (messagesAreaLayout.width - width) / 2;
    const rightShift = (messagesAreaLayout.width - width) * 0.25;
    const left = centerLeft + rightShift;
    // Position just below the header (status bar: 47px + header: 66.5px = 113.5px, add 12px gap)
    const headerBottom = 47 + 66.5 + 12;
    const top = headerBottom;
    return { width, left, top };
  }, [messagesAreaLayout]);

  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={[
        styles.settingsPanel,
        panelStyle,
        {
          opacity: visible ? opacity : 0,
          transform: [{ translateY }],
        },
      ]}
    >
      <BlurView
        blurAmount={80}
        blurType={Platform.OS === 'ios' ? 'regular' : 'light'}
        reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.9)"
        style={styles.settingsPanelBlur}
      />
      <View pointerEvents="none" style={styles.settingsPanelTint} />
      <View style={styles.settingsPanelContent}>
        {SETTINGS_OPTIONS.map((option, index) => (
          <React.Fragment key={option.key}>
            <TouchableOpacity
              style={styles.settingsOption}
              activeOpacity={0.9}
              onPress={() => {
                // Handle option press
                if (option.key === 'leave') {
                  // Handle leave group
                }
                onClose();
              }}
            >
              <Text
                style={[
                  styles.settingsOptionLabel,
                  option.destructive && styles.settingsOptionLabelDestructive,
                ]}
              >
                {option.label}
              </Text>
              <Ionicons
                name={option.icon as any}
                size={18}
                color={option.destructive ? '#E53935' : '#0F172A'}
                style={styles.settingsOptionIcon}
              />
            </TouchableOpacity>
            {index < SETTINGS_OPTIONS.length - 1 && <View style={styles.settingsSeparator} />}
          </React.Fragment>
        ))}
      </View>
    </Animated.View>
  );
};

type ReactionStripProps = {
  onSelect: (emoji: string) => void;
};

const ReactionStrip = ({ onSelect }: ReactionStripProps) => (
  <View style={styles.reactionPanel}>
    {REACTION_EMOJIS.map(emoji => (
      <TouchableOpacity
        key={emoji}
        style={styles.reactionEmojiButton}
        activeOpacity={0.85}
        onPress={() => onSelect(emoji)}
      >
        <Text style={styles.reactionEmojiText}>{emoji}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

type IncomingCustomBubbleProps = {
  title: string;
  metadata: string[];
  previewUri: string;
  timestampTop?: string;
  timestampBottom?: string;
};

const IncomingCustomBubble = ({
  title,
  metadata,
  previewUri,
  timestampTop,
  timestampBottom,
}: IncomingCustomBubbleProps) => {
  const bottomTimestamp = timestampBottom ?? timestampTop;

  return (
    <View style={styles.incomingCustomWrapper}>
      <View style={[styles.messageBubble, styles.messageBubbleLeft, styles.incomingCustomBubble]}>
        <View style={styles.incomingCustomPreviewFrame}>
          <Image source={{ uri: previewUri }} style={styles.incomingCustomPreviewImage} resizeMode="cover" />
          <View style={styles.incomingCustomPreviewMask} />
        </View>
        <View style={styles.incomingCustomDetails}>
          <Text style={styles.incomingCustomTitle}>{title}</Text>
          <View style={styles.incomingCustomMetaRow}>
            {metadata.map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <Text style={styles.incomingCustomMetaText}>{item}</Text>
                {index < metadata.length - 1 && <View style={styles.incomingCustomMetaDivider} />}
              </React.Fragment>
            ))}
          </View>
        </View>
        {!!bottomTimestamp && (
          <View style={styles.incomingCustomTimestampRow}>
            <Text style={styles.messageTime}>{bottomTimestamp}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

type OutgoingCustomBubbleProps = {
  title: string;
  metadata: string[];
  previewUri: string;
  timestamp: string;
  showStatus?: boolean;
};

const OutgoingCustomBubble = ({
  title,
  metadata,
  previewUri,
  timestamp,
  showStatus,
}: OutgoingCustomBubbleProps) => {
  return (
    <View style={[styles.messageBubble, styles.outgoingCustomBubble]}>
      <View style={styles.outgoingCustomPreviewFrame}>
        <Image source={{ uri: previewUri }} style={styles.outgoingCustomPreviewImage} resizeMode="cover" />
      </View>
      <View style={styles.outgoingCustomTimestampRow}>
        <Text style={styles.messageTime}>{timestamp}</Text>
        {showStatus && (
          <Ionicons name="checkmark-done" size={14} color="#34C759" style={styles.timestampIcon} />
        )}
      </View>
    </View>
  );
};

const ActionMenu = () => (
  <View style={styles.actionMenu}>
    <BlurView
      blurAmount={80}
      blurType={Platform.OS === 'ios' ? 'regular' : 'light'}
      reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.75)"
      style={styles.actionMenuBlur}
    />
    <View pointerEvents="none" style={styles.actionMenuTint} />
    <View style={styles.actionMenuContent}>
      {ACTION_MENU_ITEMS.map((item, index) => (
        <React.Fragment key={item.key}>
          <TouchableOpacity style={styles.actionMenuRow} activeOpacity={0.9} onPress={() => {}}>
            <Text
              style={[
                styles.actionMenuLabel,
                item.destructive && styles.actionMenuLabelDestructive,
              ]}
            >
              {item.label}
            </Text>
            <Ionicons
              name={item.icon as any}
              size={18}
              color={item.destructive ? '#E53935' : '#0F172A'}
              style={styles.actionMenuIcon}
            />
          </TouchableOpacity>
          {index < ACTION_MENU_ITEMS.length - 1 && <View style={styles.actionMenuSeparator} />}
        </React.Fragment>
      ))}
    </View>
  </View>
);

type ChannelGroupsPrivateProps = {
  onBack?: () => void;
};

const ChannelGroupsPrivate = ({ onBack }: ChannelGroupsPrivateProps) => {
  const [isAttachOpen, setAttachOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
  const attachmentAnimation = useRef(new Animated.Value(0)).current;
  const settingsAnimation = useRef(new Animated.Value(0)).current;
  const [messagesAreaLayout, setMessagesAreaLayout] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const messageLayoutsRef = useRef<Record<string, MessageLayout>>({});
  const scrollOffsetRef = useRef(0);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [selectedMessageLayout, setSelectedMessageLayout] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const [contextVisible, setContextVisible] = useState(false);
  const [messageReactions, setMessageReactions] = useState<Record<string, string>>({});
  const reactionOverlayAnimation = useRef(new Animated.Value(0)).current;
  const actionOverlayAnimation = useRef(new Animated.Value(0)).current;

  const renderMessageBubble = useCallback(
    (message: Message) => {
      const reaction = messageReactions[message.id];
      const isOutgoing = message.type === 'outgoing' || message.type === 'outgoingVoice' || message.type === 'outgoingCustom';
      let bubbleContent: React.ReactNode = null;

      if (message.type === 'incomingCustom' && message.customBubble) {
        return (
          <View
            style={[
              styles.messageBubbleWrapper,
              styles.messageBubbleWrapperLeft,
            ]}
          >
            <IncomingCustomBubble
              title={message.customBubble.title}
              metadata={message.customBubble.meta}
              previewUri={message.customBubble.previewUri}
              timestampTop={message.customBubble.timestampTop ?? message.timestamp}
              timestampBottom={message.customBubble.timestampBottom ?? message.timestamp}
            />
            {reaction ? (
              <View style={styles.messageReactionBadgeIncomingCustom}>
                <Text style={styles.messageReactionEmoji}>{reaction}</Text>
              </View>
            ) : null}
          </View>
        );
      } else if (message.type === 'outgoingCustom' && message.customBubble) {
        return (
          <View
            style={[
              styles.messageBubbleWrapper,
              styles.messageBubbleWrapperRight,
            ]}
          >
            <OutgoingCustomBubble
              title={message.customBubble.title}
              metadata={message.customBubble.meta}
              previewUri={message.customBubble.previewUri}
              timestamp={message.timestamp}
              showStatus={message.showStatus}
            />
            {reaction ? (
              <View style={styles.messageReactionBadge}>
                <Text style={styles.messageReactionEmoji}>{reaction}</Text>
              </View>
            ) : null}
          </View>
        );
      } else if (message.type === 'media' && message.mediaUri) {
        bubbleContent = (
          <View style={[styles.messageBubble, styles.messageBubbleLeft, styles.messageBubbleImage]}>
            <Image source={{ uri: message.mediaUri }} style={styles.messageImage} />
            <Text style={styles.messageTimeImage}>{message.timestamp}</Text>
          </View>
        );
      } else if (message.type === 'outgoingVoice') {
        bubbleContent = (
          <View style={[styles.messageBubble, styles.messageBubbleRight, styles.voiceMessageBubble]}>
            <View style={styles.voiceContentRow}>
              <View style={styles.voiceWaveform}>
                {OUTGOING_VOICE_WAVEFORM.map((height, index) => (
                  <View key={index} style={[styles.voiceWaveformBar, { height }]} />
                ))}
              </View>
              <View style={styles.voiceControls}>
                <Text style={styles.voiceDuration}>{message.duration ?? '0:00'}</Text>
                <TouchableOpacity style={styles.voicePlayButton} activeOpacity={0.85}>
                  <Ionicons name="play" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.voiceStatusRow}>
              <Text style={styles.messageTime}>{message.timestamp}</Text>
              {message.showStatus && (
                <Ionicons name="checkmark-done" size={14} color="#34C759" style={styles.timestampIcon} />
              )}
            </View>
          </View>
        );
      } else {
        const isOutgoingText = message.type === 'outgoing';
        bubbleContent = (
          <View
            style={[
              styles.messageBubble,
              isOutgoingText ? styles.messageBubbleRight : styles.messageBubbleLeft,
            ]}
          >
            <View style={styles.messageTextRow}>
              <Text style={[styles.messageText, isOutgoingText && styles.messageTextOutgoing]}>
                {message.text}
              </Text>
              <View style={styles.timestampContainer}>
                <Text style={styles.messageTime}>{message.timestamp}</Text>
                {message.showStatus && (
                  <Ionicons name="checkmark-done" size={14} color="#34C759" style={styles.timestampIcon} />
                )}
              </View>
            </View>
          </View>
        );
      }

      if (!bubbleContent) {
        return null;
      }

      return (
        <View
          style={[
            styles.messageBubbleWrapper,
            isOutgoing ? styles.messageBubbleWrapperRight : styles.messageBubbleWrapperLeft,
          ]}
        >
          {bubbleContent}
          {reaction ? (
            <View style={styles.messageReactionBadge}>
              <Text style={styles.messageReactionEmoji}>{reaction}</Text>
            </View>
          ) : null}
        </View>
      );
    },
    [messageReactions],
  );

  useEffect(() => {
    if (isAttachOpen) {
      setOverlayVisible(true);
    }

    Animated.timing(attachmentAnimation, {
      toValue: isAttachOpen ? 1 : 0,
      duration: 200,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start(() => {
      if (!isAttachOpen) {
        setOverlayVisible(false);
      }
    });
  }, [attachmentAnimation, isAttachOpen]);

  useEffect(() => {
    console.log('Settings useEffect triggered, isSettingsOpen:', isSettingsOpen);
    if (isSettingsOpen) {
      // Show overlay immediately
      setSettingsOverlayVisible(true);
      console.log('Starting settings animation to 1');
      // Start animation immediately
      Animated.timing(settingsAnimation, {
        toValue: 1,
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }).start(() => {
        console.log('Settings animation completed (opened)');
      });
    } else {
      console.log('Starting settings animation to 0');
      // Animate out
      Animated.timing(settingsAnimation, {
        toValue: 0,
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }).start(() => {
        console.log('Settings animation completed (closed)');
        setSettingsOverlayVisible(false);
      });
    }
  }, [settingsAnimation, isSettingsOpen]);

  const handleToggleAttachment = () => {
    setAttachOpen(prev => !prev);
  };

  const handleCloseAttachment = () => {
    if (isAttachOpen) {
      setAttachOpen(false);
    }
  };

  const handleCloseSettings = () => {
    setSettingsOpen(false);
  };

  const handleMessageLongPress = useCallback(
    (message: Message) => {
      if (!messagesAreaLayout) {
        return;
      }
      const layout = messageLayoutsRef.current[message.id];
      if (!layout) {
        return;
      }

      const overlayTop = messagesAreaLayout.y + layout.y - scrollOffsetRef.current;
      const overlayLeft = messagesAreaLayout.x + layout.x;
      setSelectedMessageId(message.id);
      setSelectedMessage(message);
      setSelectedMessageLayout({
        top: overlayTop,
        left: overlayLeft,
        width: layout.width,
        height: layout.height,
      });
      setContextVisible(true);
      reactionOverlayAnimation.setValue(0);
      actionOverlayAnimation.setValue(0);
      Animated.parallel([
        Animated.timing(reactionOverlayAnimation, {
          toValue: 1,
          duration: 180,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(actionOverlayAnimation, {
          toValue: 1,
          duration: 220,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    },
    [messagesAreaLayout, reactionOverlayAnimation, actionOverlayAnimation],
  );

  const handleDismissContext = useCallback(() => {
    if (!contextVisible) {
      return;
    }
    Animated.parallel([
      Animated.timing(reactionOverlayAnimation, {
        toValue: 0,
        duration: 140,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(actionOverlayAnimation, {
        toValue: 0,
        duration: 140,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setContextVisible(false);
      setSelectedMessage(null);
      setSelectedMessageId(null);
      setSelectedMessageLayout(null);
    });
  }, [contextVisible, reactionOverlayAnimation, actionOverlayAnimation]);

  const handleSelectReaction = useCallback(
    (emoji: string) => {
      if (!selectedMessageId) {
        return;
      }
      setMessageReactions(prev => ({
        ...prev,
        [selectedMessageId]: emoji,
      }));
      handleDismissContext();
    },
    [selectedMessageId, handleDismissContext],
  );

  const reactionOverlayStyle = useMemo(() => {
    if (!selectedMessageLayout || !messagesAreaLayout) {
      return null;
    }
    const width = Math.min(REACTION_PANEL_WIDTH, messagesAreaLayout.width - 16);
    const leftBound = messagesAreaLayout.x + 8;
    const rightBound = messagesAreaLayout.x + messagesAreaLayout.width - width - 8;
    const centeredLeft =
      selectedMessageLayout.left + selectedMessageLayout.width / 2 - width / 2;
    const left = Math.min(Math.max(centeredLeft, leftBound), Math.max(leftBound, rightBound));
    const top = Math.max(selectedMessageLayout.top - REACTION_PANEL_HEIGHT - 12, messagesAreaLayout.y + 8);
    return { width, left, top };
  }, [selectedMessageLayout, messagesAreaLayout]);

  const actionOverlayStyle = useMemo(() => {
    if (!selectedMessageLayout || !messagesAreaLayout) {
      return null;
    }
    const width = Math.min(ACTION_MENU_WIDTH, messagesAreaLayout.width - 32);
    const left = messagesAreaLayout.x + (messagesAreaLayout.width - width) / 2;
    const maxTop = messagesAreaLayout.y + messagesAreaLayout.height - 200;
    const top = Math.min(selectedMessageLayout.top + selectedMessageLayout.height + 16, maxTop);
    return { width, left, top };
  }, [selectedMessageLayout, messagesAreaLayout]);

  return (
    <View style={styles.container}>
      {/* Background with blur effect */}
      <ImageBackground
        source={{ uri: imgIPhone1415Pro1 }}
        style={styles.backgroundImage}
        blurRadius={5}
      >
        <View style={styles.backgroundOverlay} />
      </ImageBackground>

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <Text style={styles.statusBarTime}>9:41</Text>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <View style={styles.batteryContainer}>
            <View style={styles.batteryOutline} />
            <View style={styles.batteryFill} />
            <View style={styles.batteryEnd} />
          </View>
        </View>
      </View>

      {/* Header with blur */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => onBack?.()}
        >
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image source={{ uri: imgImage }} style={styles.headerAvatar} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Cessna - 172</Text>
            <Text style={styles.headerSubtitle}>2 members</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            console.log('Settings button clicked, setting isSettingsOpen to true');
            setSettingsOpen(true);
          }}
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image source={{ uri: imgPhDotsThreeVertical }} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      {/* Background pattern */}
      <View style={styles.backgroundPattern}>
        <Image
          source={{ uri: imgRectangle1 }}
          style={styles.patternImage}
          resizeMode="cover"
        />
      </View>

      {/* Decorative elements */}
      <Image source={{ uri: imgFrame1171275495 }} style={styles.decorativeIcon1} />
      <Image source={{ uri: imgEllipse10 }} style={styles.decorativeIcon2} />

      {/* Messages ScrollView */}
      <View style={styles.messagesArea} onLayout={({ nativeEvent }) => setMessagesAreaLayout(nativeEvent.layout)}>
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
          onScroll={event => {
            scrollOffsetRef.current = event.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
        >
          {MESSAGES.map(message => {
            const isOutgoing = message.type === 'outgoing' || message.type === 'outgoingVoice' || message.type === 'outgoingCustom';
            return (
              <View
                key={message.id}
                style={isOutgoing ? styles.messageContainerRight : styles.messageContainer}
              >
                {!isOutgoing && message.avatarUri ? (
                  <Image source={{ uri: message.avatarUri }} style={styles.messageAvatar} />
                ) : null}
                <View style={[styles.messageContent, isOutgoing && styles.messageContentRight]}>
                  {message.authorName && !isOutgoing && (
                    <View style={styles.messageHeader}>
                      <Text
                        style={
                          message.nameVariant === 'max' ? styles.messageNameMax : styles.messageName
                        }
                      >
                        {message.authorName}
                      </Text>
                      <Text
                        style={message.nameVariant === 'max' ? styles.messageRoleMax : styles.messageRole}
                      >
                        {message.role}
                      </Text>
                    </View>
                  )}
                  <Pressable
                    delayLongPress={250}
                    onLongPress={() => handleMessageLongPress(message)}
                    onLayout={({ nativeEvent }) =>
                      (messageLayoutsRef.current[message.id] = nativeEvent.layout)
                    }
                    style={({ pressed }) => [
                      styles.messagePressable,
                      pressed && styles.messagePressablePressed,
                    ]}
                    collapsable={false}
                  >
                    {renderMessageBubble(message)}
                  </Pressable>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {contextVisible && selectedMessage && selectedMessageLayout && messagesAreaLayout && (
        <View pointerEvents="box-none" style={StyleSheet.absoluteFillObject}>
          <BlurView
            blurAmount={13}
            blurType={Platform.OS === 'ios' ? 'regular' : 'light'}
            reducedTransparencyFallbackColor="transparent"
            style={[
              styles.messagesBlurOverlay,
              {
                top: 114,
                left: 0,
                right: 0,
                bottom: 100,
              },
            ]}
          />
          <TouchableWithoutFeedback onPress={handleDismissContext}>
            <View style={styles.contextBackdrop} />
          </TouchableWithoutFeedback>
          <View
            pointerEvents="none"
            style={[
              styles.selectedMessageClone,
              {
                top: selectedMessageLayout.top,
                left: selectedMessageLayout.left,
                width: selectedMessageLayout.width,
                height: selectedMessageLayout.height,
              },
            ]}
          >
            {renderMessageBubble(selectedMessage)}
          </View>
          {reactionOverlayStyle && (
            <Animated.View
              pointerEvents="box-none"
              style={[
                styles.reactionPanelWrapper,
                reactionOverlayStyle,
                {
                  opacity: reactionOverlayAnimation,
                  transform: [
                    {
                      scale: reactionOverlayAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.9, 1],
                      }),
                    },
                  ],
                },
              ]}
            >
            <ReactionStrip onSelect={handleSelectReaction} />
            </Animated.View>
          )}
          {actionOverlayStyle && (
            <Animated.View
              pointerEvents="box-none"
              style={[
                styles.actionMenuWrapper,
                actionOverlayStyle,
                {
                  opacity: actionOverlayAnimation,
                  transform: [
                    {
                      translateY: actionOverlayAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <ActionMenu />
            </Animated.View>
          )}
        </View>
      )}

      {overlayVisible && (
        <TouchableWithoutFeedback onPress={handleCloseAttachment}>
          <Animated.View
            pointerEvents="auto"
            style={[styles.attachmentOverlay, { opacity: attachmentAnimation }]}
          />
        </TouchableWithoutFeedback>
      )}

      <AttachmentPanel visible={isAttachOpen} animation={attachmentAnimation} />

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type a Message"
            placeholderTextColor="#1b1b1b"
          />
          <TouchableOpacity style={styles.plusButton} onPress={handleToggleAttachment} activeOpacity={0.8}>
            <Image source={{ uri: imgIcSharpPlus }} style={styles.plusIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.micButton}>
          <LinearGradient
            colors={['#2fb7ff', '#caf0f8']}
            style={styles.micButtonGradient}
          >
            <Image source={{ uri: imgMdiMicrophone }} style={styles.micIcon} />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Settings Panel - Render inside chatting screen */}
      {(isSettingsOpen || settingsOverlayVisible) && messagesAreaLayout && (
        <View pointerEvents="box-none" style={StyleSheet.absoluteFillObject}>
          <TouchableWithoutFeedback onPress={handleCloseSettings}>
            <View style={styles.settingsBackdrop} />
          </TouchableWithoutFeedback>
          <SettingsPanel 
            visible={isSettingsOpen} 
            animation={settingsAnimation} 
            onClose={handleCloseSettings}
            messagesAreaLayout={messagesAreaLayout}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
    overflow: 'visible',
  },
  backgroundImage: {
    position: 'absolute',
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
    top: screenHeight / 2 - DESIGN_HEIGHT / 2,
    left: (screenWidth > DESIGN_WIDTH ? DESIGN_WIDTH : screenWidth) / 2 - DESIGN_WIDTH / 2,
    opacity: 0.1,
  },
  backgroundOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusBar: {
    height: 47,
    width: screenWidth > DESIGN_WIDTH ? DESIGN_WIDTH : screenWidth,
    backgroundColor: 'rgba(207, 200, 200, 0.05)',
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
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
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
    width: 27.4,
    height: 13,
    position: 'relative',
  },
  batteryOutline: {
    width: 25,
    height: 13,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  batteryFill: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 19,
    height: 9,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  batteryEnd: {
    position: 'absolute',
    right: 0,
    top: 4,
    width: 1.4,
    height: 4.22,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  header: {
    position: 'absolute',
    top: 47,
    left: 0,
    width: screenWidth > DESIGN_WIDTH ? DESIGN_WIDTH : screenWidth,
    height: 66.5,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    zIndex: 100,
    elevation: 100,
  },
  backButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backIcon: {
    width: 27.52,
    height: 27.52,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    zIndex: 1,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
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
  },
  headerSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 22.933,
  },
  menuButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 1000,
  },
  menuIcon: {
    width: 27.52,
    height: 27.52,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 114,
    left: 0,
    width: screenWidth > DESIGN_WIDTH ? DESIGN_WIDTH : screenWidth,
    height: 693,
    opacity: 0.02,
    overflow: 'hidden',
  },
  messagesArea: {
    flex: 1,
  },
  patternImage: {
    width: '161.16%',
    height: '105.63%',
    left: '-30.58%',
    top: '-2.6%',
  },
  decorativeIcon1: {
    position: 'absolute',
    left: 20,
    top: 792,
    width: 11,
    height: 11,
  },
  decorativeIcon2: {
    position: 'absolute',
    left: 46,
    top: 71,
    width: 77,
    height: 77,
  },
  messagesContainer: {
    flex: 1,
    marginTop: 114,
    paddingHorizontal: 20,
  },
  messagesContent: {
    paddingBottom: 100,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  messageContainerRight: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'flex-end',
    paddingLeft: 86,
  },
  messageAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
    maxWidth: 312,
  },
  messageContentRight: {
    alignItems: 'flex-end',
  },
  messagePressable: {
    borderRadius: 18,
  },
  messagePressablePressed: {
    opacity: 0.96,
  },
  messageBubbleWrapper: {
    position: 'relative',
  },
  messageBubbleWrapperLeft: {
    alignSelf: 'flex-start',
  },
  messageBubbleWrapperRight: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginRight: 0,
  },
  messageTextRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 0,
  },
  messageName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12.367,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17.667,
  },
  messageNameMax: {
    fontFamily: 'Inter',
    fontSize: 12.367,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17.667,
  },
  messageRole: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '400',
    color: '#141414',
    lineHeight: 15.9,
  },
  messageRoleMax: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '400',
    color: '#333333',
    lineHeight: 15.9,
  },
  incomingCustomWrapper: {
    width: 228,
    paddingBottom: 18,
    position: 'relative',
  },
  incomingCustomBubble: {
    width: 228,
    height: 187,
    minHeight: 187,
    padding: 0,
    overflow: 'hidden',
  },
  incomingCustomPreviewFrame: {
    position: 'absolute',
    top: 8,
    left: 9,
    width: 210,
    height: 131,
    borderRadius: 6,
    overflow: 'hidden',
  },
  incomingCustomPreviewImage: {
    width: '100%',
    height: '100%',
  },
  incomingCustomPreviewMask: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 48,
    backgroundColor: 'rgba(245, 245, 245, 0.77)',
  },
  incomingCustomDetails: {
    position: 'absolute',
    left: 13,
    top: 147,
    width: 206,
  },
  incomingCustomTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 12,
  },
  incomingCustomMetaRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  incomingCustomMetaText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 8,
    fontWeight: '400',
    color: '#383838',
    marginRight: 6,
  },
  incomingCustomMetaDivider: {
    width: 3.148,
    height: 2.098,
    borderRadius: 19,
    backgroundColor: '#168AAD',
    marginRight: 6,
  },
  incomingCustomTimestampRow: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  outgoingCustomWrapper: {
    paddingBottom: 18,
    position: 'relative',
    marginLeft: 'auto',
  },
  outgoingCustomBubble: {
    width: 228,
    height: 171,
    minHeight: 171,
    padding: 0,
    paddingRight: 0,
    margin: 0,
    marginRight: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 18,
  },
  outgoingCustomPreviewFrame: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 212,
    height: 135,
    borderRadius: 6,
    overflow: 'hidden',
  },
  outgoingCustomPreviewImage: {
    width: '100%',
    height: '100%',
  },
  outgoingCustomPreviewMask: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 48,
    backgroundColor: 'rgba(245, 245, 245, 0.77)',
  },
  outgoingCustomDetails: {
    position: 'absolute',
    left: 13,
    top: 147,
    width: 206,
  },
  outgoingCustomTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 12,
  },
  outgoingCustomMetaRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  outgoingCustomMetaText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 8,
    fontWeight: '400',
    color: '#383838',
    marginRight: 6,
  },
  outgoingCustomMetaDivider: {
    width: 3.148,
    height: 2.098,
    borderRadius: 19,
    backgroundColor: '#168AAD',
    marginRight: 6,
  },
  outgoingCustomTimestampRow: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  messageReactionBadge: {
    position: 'absolute',
    bottom: 0,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  messageReactionBadgeIncomingCustom: {
    position: 'absolute',
    bottom: 4,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  messageReactionEmoji: {
    fontSize: 14,
    lineHeight: 16,
  },
  messageBubble: {
    borderRadius: 18,
    padding: 16,
    minHeight: 73,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  messageBubbleLeft: {
    backgroundColor: 'rgba(196, 238, 255, 0.84)',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  messageBubbleRight: {
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    alignSelf: 'flex-end',
    width: 321,
    paddingRight: 12,
  },
  voiceMessageBubble: {
    width: 321,
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  voiceContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  voicePlayButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007EA7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  voiceWaveform: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 8,
  },
  voiceWaveformBar: {
    width: 2.1,
    minWidth: 2.1,
    maxWidth: 2.1,
    flexShrink: 0,
    flexBasis: 2.1,
    borderRadius: 2,
    backgroundColor: 'rgba(27, 27, 27, 0.6)',
  },
  voiceDuration: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#1B1B1B',
  },
  voiceControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  voiceStatusRow: {
    marginTop: 8,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2,
  },
  timestampContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  timestampIcon: {
    marginLeft: 4,
  },
  messageBubbleImage: {
    padding: 8,
    minHeight: 246,
    width: 272,
    backgroundColor: 'rgba(182, 234, 255, 0.92)',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  messageText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 21.2,
    flex: 1,
    marginRight: 8,
  },
  messageTextOutgoing: {
    marginBottom: 0,
  },
  messageTime: {
    fontFamily: 'Helvetica Neue',
    fontSize: 8,
    fontWeight: '400',
    color: '#2C2C2C',
    opacity: 0.65,
    lineHeight: 15.9,
  },
  messageTimeImage: {
    fontFamily: 'Helvetica Neue',
    fontSize: 8,
    fontWeight: '400',
    color: '#373737',
    lineHeight: 15.9,
    position: 'absolute',
    bottom: 8,
    right: 16,
  },
  messageImage: {
    width: 252,
    height: 210,
    borderRadius: 6,
    marginBottom: 8,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 5,
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    flex: 1,
    maxWidth: 339,
    height: 49,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#1b1b1b',
    height: '100%',
  },
  plusButton: {
    width: 29,
    height: 29,
    borderRadius: 16,
    backgroundColor: '#323232',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 16,
    height: 16,
  },
  micButton: {
    width: 49,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micButtonGradient: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    width: 24,
    height: 24,
  },
  messagesBlurOverlay: {
    position: 'absolute',
  },
  contextBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  selectedMessageClone: {
    position: 'absolute',
    zIndex: 10,
  },
  reactionPanelWrapper: {
    position: 'absolute',
  },
  reactionPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  reactionEmojiButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactionEmojiText: {
    fontSize: 22,
    lineHeight: 22,
  },
  actionMenuWrapper: {
    position: 'absolute',
  },
  actionMenu: {
    borderRadius: 22,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 14 },
    elevation: 18,
    overflow: 'hidden',
  },
  actionMenuBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  actionMenuTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  actionMenuContent: {
    paddingVertical: 6,
  },
  actionMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  actionMenuSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(84, 84, 88, 0.65)',
  },
  actionMenuIcon: {
    marginLeft: 12,
    width: 24,
    textAlign: 'center',
  },
  actionMenuLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: '#0F172A',
    flex: 1,
  },
  actionMenuLabelDestructive: {
    color: '#E53935',
  },
  attachmentOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 25,
  },
  attachmentPanel: {
    position: 'absolute',
    width: PANEL_WIDTH,
    height: PANEL_HEIGHT,
    left: PANEL_LEFT_OFFSET,
    bottom: PANEL_BOTTOM_OFFSET,
    zIndex: 30,
  },
  attachmentPanelInner: {
    width: '100%',
    height: '100%',
    borderRadius: PANEL_BORDER_RADIUS,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 14,
    shadowColor: 'rgba(6, 35, 45, 0.4)',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 16,
  },
  attachmentOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
  },
  attachmentOption: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: ICON_TILE_SIZE,
    gap: ICON_LABEL_GAP,
  },
  attachmentIconWrapper: {
    width: ICON_TILE_SIZE,
    height: ICON_TILE_SIZE,
    borderRadius: 18,
    backgroundColor: '#E8F6FB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(142, 188, 206, 0.45)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 6,
  },
  attachmentIcon: {
    fontWeight: '700',
  },
  attachmentLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 14,
    textAlign: 'center',
    width: '100%',
  },
  settingsOverlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 200,
    elevation: 200,
  },
  settingsOverlayTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 47, 0.35)',
  },
  settingsBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  settingsPanel: {
    position: 'absolute',
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 14 },
    elevation: 18,
    overflow: 'hidden',
    zIndex: 300,
  },
  settingsPanelBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  settingsPanelTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  settingsPanelContent: {
    paddingVertical: 6,
  },
  settingsOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  settingsOptionLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: '#0F172A',
    flex: 1,
  },
  settingsOptionLabelDestructive: {
    color: '#E53935',
  },
  settingsOptionIcon: {
    marginLeft: 12,
    width: 24,
    textAlign: 'center',
  },
  settingsSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(84, 84, 88, 0.65)',
  },
});

export default ChannelGroupsPrivate;

