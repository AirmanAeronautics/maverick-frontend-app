import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './ChannelGroupsPrivate.css';
import {
  IoArrowRedoOutline,
  IoCheckmarkDone,
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoInformationCircleOutline,
  IoPlay,
  IoReturnUpBackOutline,
  IoStarOutline,
  IoTrashOutline,
  IoClose,
  IoNotificationsOffOutline,
  IoSearchOutline,
  IoImagesOutline,
  IoLockClosedOutline,
  IoLogOutOutline,
  IoChevronForward,
  IoPersonAddOutline,
  IoBookmarkOutline,
} from 'react-icons/io5';

// Import the background image - Vite will handle this
import chatBackground from '../assets/Chat Bg.png';
import mapImage from '../assets/map.png';
import iconSignal from '@/assets/icon-signal.png?url';
import iconWifi from '@/assets/icon-wifi.png?url';
import iconBatteryOutline from '@/assets/battery-outline.png?url';
import iconBatteryEnd from '@/assets/battery-end.png?url';
import iconBatteryFill from '@/assets/battery-fill.png?url';
import iconBack from '@/assets/arrow-back.png?url';
import iconMenu from '@/assets/icon-menu.png?url';

// Use the imported image URL
const chatBgUrl = chatBackground;

const StatusBarBattery = () => (
  <div className="battery-container">
    <div className="battery-outline">
      <img src={iconBatteryOutline} alt="" className="battery-outline-image" />
    </div>
    <div className="battery-end">
      <img src={iconBatteryEnd} alt="" className="battery-end-image" />
    </div>
    <div className="battery-fill">
      <img src={iconBatteryFill} alt="" className="battery-fill-image" />
    </div>
  </div>
);

// Image assets from Figma
const imgImage = 'https://www.figma.com/api/mcp/asset/166573e9-968c-4330-8cca-d15e7bd6a074';
const imgRectangle1 = 'https://www.figma.com/api/mcp/asset/32e10b63-b6d0-4133-bc69-c34557014ae4';
const imgAvatar = 'https://www.figma.com/api/mcp/asset/02204879-0fa7-4d07-a529-d8d70ea06faa';
const imgRectangle5 = 'https://www.figma.com/api/mcp/asset/08d0ab5a-fee5-4cb8-b761-0b385ff013e2';
const imgAvatar1 = 'https://www.figma.com/api/mcp/asset/468b3ca7-7e1b-4a4a-a93b-c4049fcd8943';
const imgIcSharpPlus = 'https://www.figma.com/api/mcp/asset/7a66548f-9537-4f30-b835-e195d306df29';
const imgMdiMicrophone = 'https://www.figma.com/api/mcp/asset/5194ef10-81ef-41a3-9bd8-5298a70f8f4a';
const imgFrame1171275495 = 'https://www.figma.com/api/mcp/asset/f8663a0d-4c75-4d4b-ae43-2d39d583ad4d';
const imgEllipse10 = 'https://www.figma.com/api/mcp/asset/607c5eb4-72c9-4521-9801-c423705062ca';
const imgIncomingCustomPreview = 'https://www.figma.com/api/mcp/asset/3ad3463e-4750-491f-9600-324117e47dd3';

type MessageType = 'incoming' | 'outgoing' | 'media' | 'outgoingVoice' | 'incomingCustom' | 'outgoingCustom';

type IncomingCustomBubbleContent = {
  title: string;
  meta: string[];
  previewUri: string;
  timestampTop?: string;
  timestampBottom?: string;
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
  { key: 'reply', label: 'Reply', icon: <IoReturnUpBackOutline /> },
  { key: 'copy', label: 'Copy', icon: <IoCopyOutline /> },
  { key: 'forward', label: 'Forward', icon: <IoArrowRedoOutline /> },
  { key: 'info', label: 'Info', icon: <IoInformationCircleOutline /> },
  { key: 'star', label: 'Star', icon: <IoStarOutline /> },
  { key: 'delete', label: 'Delete', icon: <IoTrashOutline />, destructive: true },
  { key: 'more', label: 'More', icon: <IoEllipsisHorizontal /> },
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
      previewUri: mapImage,
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
  onAttachPressed: () => void;
  onCameraPressed: () => void;
  onLocationPressed: () => void;
  onVideoPressed: () => void;
};

type AttachmentIconType = 'attach' | 'camera' | 'location' | 'video';

const AttachmentIcon = ({ type }: { type: AttachmentIconType }) => {
  switch (type) {
    case 'attach':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M5.80783 11.6693L11.6422 5.83489C11.9232 5.554 12.2567 5.3312 12.6238 5.17921C12.9909 5.02722 13.3843 4.94902 13.7816 4.94907C14.1789 4.94912 14.5723 5.02742 14.9393 5.17951C15.3063 5.33159 15.6398 5.55448 15.9207 5.83544C16.2016 6.1164 16.4244 6.44994 16.5764 6.81701C16.7284 7.18408 16.8066 7.57749 16.8065 7.97478C16.8065 8.37207 16.7281 8.76546 16.5761 9.13249C16.424 9.49952 16.2011 9.833 15.9201 10.1139L8.91973 17.1143C8.66169 17.3723 8.31171 17.5173 7.94678 17.5173C7.58185 17.5173 7.23187 17.3723 6.97383 17.1143C6.71579 16.8562 6.57082 16.5063 6.57082 16.1413C6.57082 15.7764 6.71579 15.4264 6.97383 15.1684L13.1965 8.94569C13.3423 8.7893 13.4216 8.58245 13.4178 8.36872C13.4141 8.15499 13.3275 7.95106 13.1763 7.79991C13.0252 7.64875 12.8212 7.56217 12.6075 7.5584C12.3938 7.55463 12.1869 7.63396 12.0305 7.77969L5.80783 14.0024C5.2404 14.5698 4.92162 15.3394 4.92162 16.1419C4.92162 16.9444 5.2404 17.714 5.80783 18.2814C6.37526 18.8488 7.14486 19.1676 7.94733 19.1676C8.7498 19.1676 9.5194 18.8488 10.0868 18.2814L17.0861 11.2799C17.946 10.3998 18.4242 9.2161 18.4171 7.98567C18.4099 6.75523 17.9179 5.57723 17.0479 4.70717C16.1778 3.8371 14.9998 3.34514 13.7694 3.33797C12.5389 3.3308 11.3553 3.80902 10.4751 4.66889L4.64183 10.5022C4.4961 10.6586 4.41677 10.8654 4.42054 11.0792C4.42431 11.2929 4.51089 11.4968 4.66205 11.648C4.8132 11.7991 5.01713 11.8857 5.23086 11.8895C5.44459 11.8933 5.65144 11.8139 5.80783 11.6682"
            fill="#168AAD"
          />
        </svg>
      );
    case 'camera':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M18.5625 5.32813H15.6406L14.9445 3.37734C14.8964 3.24386 14.8083 3.12847 14.6922 3.04695C14.5761 2.96543 14.4376 2.92175 14.2957 2.92188H7.7043C7.41426 2.92188 7.1543 3.10449 7.05762 3.37734L6.35938 5.32813H3.4375C2.48789 5.32813 1.71875 6.09727 1.71875 7.04688V16.8438C1.71875 17.7934 2.48789 18.5625 3.4375 18.5625H18.5625C19.5121 18.5625 20.2812 17.7934 20.2812 16.8438V7.04688C20.2812 6.09727 19.5121 5.32813 18.5625 5.32813ZM18.7344 16.8438C18.7344 16.9383 18.657 17.0156 18.5625 17.0156H3.4375C3.34297 17.0156 3.26562 16.9383 3.26562 16.8438V7.04688C3.26562 6.95234 3.34297 6.875 3.4375 6.875H7.44863L7.81602 5.84805L8.30801 4.46875H13.6898L14.1818 5.84805L14.5492 6.875H18.5625C18.657 6.875 18.7344 6.95234 18.7344 7.04688V16.8438ZM11 8.25C9.10078 8.25 7.5625 9.78828 7.5625 11.6875C7.5625 13.5867 9.10078 15.125 11 15.125C12.8992 15.125 14.4375 13.5867 14.4375 11.6875C14.4375 9.78828 12.8992 8.25 11 8.25ZM11 13.75C9.86133 13.75 8.9375 12.8262 8.9375 11.6875C8.9375 10.5488 9.86133 9.625 11 9.625C12.1387 9.625 13.0625 10.5488 13.0625 11.6875C13.0625 12.8262 12.1387 13.75 11 13.75Z"
            fill="#168AAD"
          />
        </svg>
      );
    case 'location':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 11.9141C12.5188 11.9141 13.75 10.6828 13.75 9.16406C13.75 7.64528 12.5188 6.41406 11 6.41406C9.48122 6.41406 8.25 7.64528 8.25 9.16406C8.25 10.6828 9.48122 11.9141 11 11.9141Z"
            stroke="#168AAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.0003 1.83203C9.0554 1.83203 7.19014 2.60465 5.81488 3.97991C4.43961 5.35518 3.66699 7.22044 3.66699 9.16536C3.66699 10.8997 4.03549 12.0345 5.04199 13.2904L11.0003 20.1654L16.9587 13.2904C17.9652 12.0345 18.3337 10.8997 18.3337 9.16536C18.3337 7.22044 17.561 5.35518 16.1858 3.97991C14.8105 2.60465 12.9452 1.83203 11.0003 1.83203Z"
            stroke="#168AAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'video':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M13.75 9.16667L17.9236 7.08033C18.0633 7.01052 18.2185 6.97756 18.3746 6.98458C18.5306 6.99161 18.6823 7.03839 18.8151 7.12049C18.948 7.20258 19.0577 7.31727 19.1338 7.45367C19.2099 7.59006 19.2499 7.74364 19.25 7.89983V14.1002C19.2499 14.2564 19.2099 14.4099 19.1338 14.5463C19.0577 14.6827 18.948 14.7974 18.8151 14.8795C18.6823 14.9616 18.5306 15.0084 18.3746 15.0154C18.2185 15.0224 18.0633 14.9895 17.9236 14.9197L13.75 12.8333V9.16667ZM2.75 7.33333C2.75 6.8471 2.94315 6.38079 3.28697 6.03697C3.63079 5.69315 4.0971 5.5 4.58333 5.5H11.9167C12.4029 5.5 12.8692 5.69315 13.213 6.03697C13.5568 6.38079 13.75 6.8471 13.75 7.33333V14.6667C13.75 15.1529 13.5568 15.6192 13.213 15.963C12.8692 16.3068 12.4029 16.5 11.9167 16.5H4.58333C4.0971 16.5 3.63079 16.3068 3.28697 15.963C2.94315 15.6192 2.75 15.1529 2.75 14.6667V7.33333Z"
            stroke="#168AAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
  }
};

const AttachmentPanel = ({
  onAttachPressed,
  onCameraPressed,
  onLocationPressed,
  onVideoPressed,
}: AttachmentPanelProps) => {
  const items = useMemo(
    () =>
      [
        { key: 'attach', label: 'Attach', onPress: onAttachPressed },
        { key: 'camera', label: 'Camera', onPress: onCameraPressed },
        { key: 'location', label: 'Location', onPress: onLocationPressed },
        { key: 'video', label: 'Video', onPress: onVideoPressed },
      ] as { key: AttachmentIconType; label: string; onPress: () => void }[],
    [onAttachPressed, onCameraPressed, onLocationPressed, onVideoPressed],
  );

  return (
    <div className="attachment-panel">
      {items.map(item => (
        <button key={item.key} type="button" className="attachment-item" onClick={item.onPress}>
          <span className="attachment-icon">
            <AttachmentIcon type={item.key} />
          </span>
          <span className="attachment-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

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
    <div className="incoming-custom-wrapper">
      <div className="message-bubble message-bubble-left incoming-custom-bubble">
        <div className="incoming-custom-preview">
          <img src={previewUri} alt="Preview" className="incoming-custom-preview-image" />
          <div className="incoming-custom-preview-mask" />
        </div>
        <div className="incoming-custom-details">
          <span className="incoming-custom-title">{title}</span>
          <div className="incoming-custom-meta-row">
            {metadata.map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <span className="incoming-custom-meta-text">{item}</span>
                {index < metadata.length - 1 && <span className="incoming-custom-meta-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
        {!!bottomTimestamp && (
          <div className="incoming-custom-timestamp-row">
            <span className="message-time">{bottomTimestamp}</span>
          </div>
        )}
      </div>
    </div>
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
    <div className="message-bubble outgoing-custom-bubble">
      <div className="outgoing-custom-preview">
        <img src={previewUri} alt="Preview" className="outgoing-custom-preview-image" />
      </div>
      <div className="outgoing-custom-timestamp-row">
        <span className="message-time">{timestamp}</span>
        {showStatus && <IoCheckmarkDone className="timestamp-icon" size={14} color="#34C759" />}
      </div>
    </div>
  );
};

const SETTINGS_OPTIONS = [
  { key: 'mute', label: 'Mute Notifications', icon: <IoNotificationsOffOutline /> },
  { key: 'search', label: 'Search', icon: <IoSearchOutline /> },
  { key: 'media', label: 'Media, Files & Links', icon: <IoImagesOutline /> },
  { key: 'privacy', label: 'Privacy & Security', icon: <IoLockClosedOutline /> },
  { key: 'addMembers', label: 'Add Members', icon: <IoPersonAddOutline /> },
  { key: 'clearChat', label: 'Clear Chat', icon: <IoTrashOutline /> },
  { key: 'addShortcut', label: 'Add Shortcut', icon: <IoBookmarkOutline /> },
  { key: 'leave', label: 'Leave Group', icon: <IoLogOutOutline />, destructive: true },
];

const SettingsPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="settings-panel">
      <div className="settings-panel-content">
        {SETTINGS_OPTIONS.map((option, index) => (
          <React.Fragment key={option.key}>
            <button
              type="button"
              className={`settings-option ${option.destructive ? 'destructive' : ''}`}
              onClick={() => {
                if (option.key === 'leave') {
                  // Handle leave group
                }
                onClose();
              }}
            >
              <span className="settings-option-label">{option.label}</span>
              <span className="settings-option-icon">{option.icon}</span>
            </button>
            {index < SETTINGS_OPTIONS.length - 1 && <div className="settings-separator" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ChannelGroupsPrivate = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isPanelMounted, setIsPanelMounted] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSettingsMounted, setIsSettingsMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const settingsPanelRef = useRef<HTMLDivElement | null>(null);
  const plusButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const messagesAreaRef = useRef<HTMLDivElement | null>(null);
  const messageRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const longPressTimer = useRef<number | null>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [selectedLayout, setSelectedLayout] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const [contextVisible, setContextVisible] = useState(false);
  const [messageReactions, setMessageReactions] = useState<Record<string, string>>({});
  const [messagesAreaRect, setMessagesAreaRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (isPanelOpen) {
      setIsPanelMounted(true);
      return;
    }
    if (!isPanelMounted) {
      return;
    }
    const timeout = setTimeout(() => setIsPanelMounted(false), 220);
    return () => clearTimeout(timeout);
  }, [isPanelOpen, isPanelMounted]);

  useEffect(() => {
    if (isSettingsOpen) {
      setIsSettingsMounted(true);
      return;
    }
    if (!isSettingsMounted) {
      return;
    }
    const timeout = setTimeout(() => setIsSettingsMounted(false), 300);
    return () => clearTimeout(timeout);
  }, [isSettingsOpen, isSettingsMounted]);

  useEffect(() => {
    if (!isPanelOpen) {
      return;
    }

    const globalDocument = (globalThis as { document?: { addEventListener?: (...args: any[]) => void; removeEventListener?: (...args: any[]) => void } }).document;
    if (!globalDocument?.addEventListener) {
      return;
    }

    const handleClickOutside = (event: any) => {
      const target = event.target;
      if ((panelRef.current as any)?.contains?.(target)) {
        return;
      }
      if ((plusButtonRef.current as any)?.contains?.(target)) {
        return;
      }
      setIsPanelOpen(false);
    };

    globalDocument.addEventListener('mousedown', handleClickOutside);
    return () => globalDocument.removeEventListener?.('mousedown', handleClickOutside);
  }, [isPanelOpen]);

  useEffect(() => {
    if (!isSettingsOpen) {
      return;
    }

    const globalDocument = (globalThis as { document?: { addEventListener?: (...args: any[]) => void; removeEventListener?: (...args: any[]) => void } }).document;
    if (!globalDocument?.addEventListener) {
      return;
    }

    const handleClickOutside = (event: any) => {
      const target = event.target;
      if ((settingsPanelRef.current as any)?.contains?.(target)) {
        return;
      }
      setIsSettingsOpen(false);
    };

    globalDocument.addEventListener('mousedown', handleClickOutside);
    return () => globalDocument.removeEventListener?.('mousedown', handleClickOutside);
  }, [isSettingsOpen]);

  const togglePanel = useCallback(() => {
    setIsPanelOpen(prev => !prev);
  }, []);

  const handleAttachPressed = useCallback(() => {
    setIsPanelOpen(false);
    console.log('Attach pressed');
  }, []);
  const handleCameraPressed = useCallback(() => {
    setIsPanelOpen(false);
    console.log('Camera pressed');
  }, []);
  const handleLocationPressed = useCallback(() => {
    setIsPanelOpen(false);
    console.log('Location pressed');
  }, []);
  const handleVideoPressed = useCallback(() => {
    setIsPanelOpen(false);
    console.log('Video pressed');
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (messagesAreaRef.current) {
        const rect = messagesAreaRef.current.getBoundingClientRect();
        const rootRect = containerRef.current?.getBoundingClientRect();
        setMessagesAreaRect({
          top: rootRect ? rect.top - rootRect.top : rect.top,
          left: rootRect ? rect.left - rootRect.left : rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clearLongPressTimer = useCallback(() => {
    if (longPressTimer.current) {
      window.clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const openContextForMessage = useCallback(
    (message: Message) => {
      if (!containerRef.current || !messageRefs.current[message.id]) {
        return;
      }
      const rootRect = containerRef.current.getBoundingClientRect();
      const messageRect = messageRefs.current[message.id]!.getBoundingClientRect();
      setSelectedMessageId(message.id);
      setSelectedMessage(message);
      setSelectedLayout({
        top: messageRect.top - rootRect.top,
        left: messageRect.left - rootRect.left,
        width: messageRect.width,
        height: messageRect.height,
      });
      if (messagesAreaRef.current) {
        const rect = messagesAreaRef.current.getBoundingClientRect();
        setMessagesAreaRect({
          top: rect.top - rootRect.top,
          left: rect.left - rootRect.left,
          width: rect.width,
          height: rect.height,
        });
      }
      setContextVisible(true);
    },
    [],
  );

  const handlePointerDown = useCallback(
    (message: Message) => {
      clearLongPressTimer();
      longPressTimer.current = window.setTimeout(() => {
        openContextForMessage(message);
      }, 250);
    },
    [clearLongPressTimer, openContextForMessage],
  );

  const handlePointerUp = useCallback(() => {
    clearLongPressTimer();
  }, [clearLongPressTimer]);

  const handleDismissContext = useCallback(() => {
    setContextVisible(false);
    setSelectedMessage(null);
    setSelectedMessageId(null);
    setSelectedLayout(null);
  }, []);

  const handleSelectReaction = useCallback(
    (emoji: string) => {
      if (!selectedMessageId) {
        return;
      }
      setMessageReactions(prev => ({ ...prev, [selectedMessageId]: emoji }));
      handleDismissContext();
    },
    [selectedMessageId, handleDismissContext],
  );

  const renderMessageBubble = useCallback(
    (message: Message) => {
      const reaction = messageReactions[message.id];
      const isOutgoing = message.type === 'outgoing' || message.type === 'outgoingVoice' || message.type === 'outgoingCustom';
      let bubbleContent: React.ReactNode = null;

      if (message.type === 'incomingCustom' && message.customBubble) {
        return (
          <div className="message-bubble-wrapper left">
            <IncomingCustomBubble
              title={message.customBubble.title}
              metadata={message.customBubble.meta}
              previewUri={message.customBubble.previewUri}
              timestampTop={message.customBubble.timestampTop ?? message.timestamp}
              timestampBottom={message.customBubble.timestampBottom ?? message.timestamp}
            />
            {reaction ? (
              <div className="message-reaction-badge message-reaction-badge-incoming-custom">
                <span className="message-reaction-emoji">{reaction}</span>
              </div>
            ) : null}
          </div>
        );
      } else if (message.type === 'outgoingCustom' && message.customBubble) {
        return (
          <div className="message-bubble-wrapper right">
            <OutgoingCustomBubble
              title={message.customBubble.title}
              metadata={message.customBubble.meta}
              previewUri={message.customBubble.previewUri}
              timestamp={message.timestamp}
              showStatus={message.showStatus}
            />
            {reaction ? (
              <div className="message-reaction-badge">
                <span className="message-reaction-emoji">{reaction}</span>
              </div>
            ) : null}
          </div>
        );
      } else if (message.type === 'media' && message.mediaUri) {
        bubbleContent = (
          <div className="message-bubble message-bubble-left message-bubble-image">
            <img src={message.mediaUri} alt="Attachment" className="message-image" />
            <span className="message-time message-time-image">{message.timestamp}</span>
          </div>
        );
      } else if (message.type === 'outgoingVoice') {
        bubbleContent = (
          <div className="message-bubble message-bubble-right message-bubble-voice">
            <div className="voice-content-row">
              <div className="voice-waveform">
                {OUTGOING_VOICE_WAVEFORM.map((height, index) => (
                  <span
                    key={`voice-bar-${index}`}
                    className="voice-waveform-bar"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
              <div className="voice-controls">
                <span className="voice-duration">{message.duration ?? '0:00'}</span>
                <button type="button" className="voice-play-button">
                  <IoPlay size={16} color="#FFFFFF" />
                </button>
              </div>
            </div>
            <div className="voice-status-row">
              <span className="message-time">{message.timestamp}</span>
              {message.showStatus ? (
                <IoCheckmarkDone className="timestamp-icon" size={14} color="#34C759" />
              ) : null}
            </div>
          </div>
        );
      } else {
        const isOutgoingText = message.type === 'outgoing';
        bubbleContent = (
          <div
            className={`message-bubble ${isOutgoingText ? 'message-bubble-right' : 'message-bubble-left'}`}
          >
            <div className="message-text-row">
              <p className="message-text">{message.text}</p>
              <div className="timestamp-container">
                <span className="message-time">{message.timestamp}</span>
                {message.showStatus ? (
                  <IoCheckmarkDone className="timestamp-icon" size={14} color="#34C759" />
                ) : null}
              </div>
            </div>
          </div>
        );
      }

      if (!bubbleContent) {
        return null;
      }

      return (
        <div className={`message-bubble-wrapper ${isOutgoing ? 'right' : 'left'}`}>
          {bubbleContent}
          {reaction ? (
            <div className="message-reaction-badge">
              <span className="message-reaction-emoji">{reaction}</span>
            </div>
          ) : null}
        </div>
      );
    },
    [messageReactions],
  );

  const reactionStyle = useMemo(() => {
    if (!selectedLayout || !messagesAreaRect) {
      return undefined;
    }
    const width = Math.min(276, messagesAreaRect.width - 16);
    const centeredLeft = selectedLayout.left + selectedLayout.width / 2 - width / 2;
    const left = Math.min(
      Math.max(centeredLeft, messagesAreaRect.left + 8),
      messagesAreaRect.left + messagesAreaRect.width - width - 8,
    );
    const top = Math.max(
      selectedLayout.top - 70,
      messagesAreaRect.top + 8,
    );
    return { width, left, top };
  }, [selectedLayout, messagesAreaRect]);

  const actionStyle = useMemo(() => {
    if (!selectedLayout || !messagesAreaRect) {
      return undefined;
    }
    const width = Math.min(messagesAreaRect.width - 24, 254);
    const left = messagesAreaRect.left + (messagesAreaRect.width - width) / 2;
    const top = Math.min(
      selectedLayout.top + selectedLayout.height + 16,
      messagesAreaRect.top + messagesAreaRect.height - 220,
    );
    return { width, left, top };
  }, [selectedLayout, messagesAreaRect]);

  return (
    <div className="channel-container" ref={containerRef}>
      {/* Background with Chat Bg.png */}
      <div className="background-wrapper">
        <img 
          src={chatBgUrl} 
          alt="Chat Background" 
          className="background-image-img"
        />
        <div className="background-overlay" />
      </div>

      {contextVisible && selectedMessage && selectedLayout && messagesAreaRect && (
        <div className="context-overlay">
          <div
            className="messages-blur-overlay"
            style={{
              top: '114px',
              left: 0,
              right: 0,
              bottom: '100px',
            }}
          />
          <div className="context-backdrop" onClick={handleDismissContext} />
          <div
            className="selected-message-clone"
            style={{
              top: selectedLayout.top,
              left: selectedLayout.left,
              width: selectedLayout.width,
              height: selectedLayout.height,
            }}
          >
            {renderMessageBubble(selectedMessage)}
          </div>
          {reactionStyle && (
            <div className="reaction-panel-wrapper" style={reactionStyle}>
              <div className="reaction-panel">
                {REACTION_EMOJIS.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    className="reaction-emoji-button"
                    onClick={() => handleSelectReaction(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
          {actionStyle && (
            <div className="action-menu-wrapper" style={actionStyle}>
              <div className="action-menu">
                {ACTION_MENU_ITEMS.map(item => (
                  <button
                    key={item.key}
                    type="button"
                    className={`action-menu-row${item.destructive ? ' destructive' : ''}`}
                  >
                    <span className="action-menu-label">{item.label}</span>
                    <span className="action-menu-icon">{item.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-left">
          <span className="status-bar-time">9:41</span>
        </div>
        <div className="status-bar-right">
          <img src={iconSignal} alt="Signal" className="status-bar-icon" />
          <img src={iconWifi} alt="WiFi" className="status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header with blur */}
      <div className="header">
        <button className="back-button">
          <img src={iconBack} alt="Back" className="back-icon" />
        </button>
        <div className="header-content">
          <img src={imgImage} alt="Channel" className="header-avatar" />
          <div className="header-text-container">
            <h2 className="header-title">Cessna - 172</h2>
            <p className="header-subtitle">2 members</p>
          </div>
        </div>
        <button
          className="menu-button"
          type="button"
          onClick={() => {
            console.log('Settings button clicked');
            setIsSettingsOpen(true);
          }}
        >
          <img src={iconMenu} alt="Menu" className="menu-icon" />
        </button>
      </div>

      {/* Background pattern */}
      <div className="background-pattern">
        <img
          src={imgRectangle1}
          alt="Pattern"
          className="pattern-image"
        />
      </div>

      {/* Decorative elements */}
      <img src={imgFrame1171275495} alt="Decorative" className="decorative-icon-1" />
      <img src={imgEllipse10} alt="Decorative" className="decorative-icon-2" />

      {/* Messages Container */}
      <div
        className="messages-area"
        ref={messagesAreaRef}
        onScroll={() => {
          if (contextVisible) {
            handleDismissContext();
          }
        }}
      >
        <div className="messages-container">
          {MESSAGES.map(message => {
            const isOutgoing = message.type === 'outgoing' || message.type === 'outgoingVoice' || message.type === 'outgoingCustom';
            const containerClass = isOutgoing ? 'message-container-right' : 'message-container';
            return (
              <div key={message.id} className={containerClass}>
                {!isOutgoing && message.avatarUri ? (
                  <img src={message.avatarUri} alt="Avatar" className="message-avatar" />
                ) : null}
                <div className={`message-content ${isOutgoing ? 'message-content-right' : ''}`}>
                  {message.authorName && !isOutgoing && (
                    <div className="message-header">
                      <span
                        className={
                          message.nameVariant === 'max' ? 'message-name message-name-max' : 'message-name'
                        }
                      >
                        {message.authorName}
                      </span>
                      <span
                        className={
                          message.nameVariant === 'max' ? 'message-role message-role-max' : 'message-role'
                        }
                      >
                        {message.role}
                      </span>
                    </div>
                  )}
                  <div
                    className="message-pressable"
                    ref={el => (messageRefs.current[message.id] = el)}
                    onPointerDown={() => handlePointerDown(message)}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onContextMenu={event => {
                      event.preventDefault();
                      openContextForMessage(message);
                    }}
                  >
                    {renderMessageBubble(message)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isPanelMounted && (
        <>
          <div
            className={`attachment-overlay ${isPanelOpen ? 'open' : 'closing'}`}
            onClick={() => setIsPanelOpen(false)}
          />
          <div
            className={`attachment-panel-container ${isPanelOpen ? 'open' : 'closing'}`}
            ref={panelRef}
          >
            <AttachmentPanel
              onAttachPressed={handleAttachPressed}
              onCameraPressed={handleCameraPressed}
              onLocationPressed={handleLocationPressed}
              onVideoPressed={handleVideoPressed}
            />
          </div>
        </>
      )}

      {/* Settings Panel */}
      {isSettingsMounted && messagesAreaRect && (
        <div className="settings-panel-wrapper">
          <div
            className="settings-backdrop"
            onClick={() => setIsSettingsOpen(false)}
          />
          <div
            className={`settings-panel-container ${isSettingsOpen ? 'open' : 'closing'}`}
            ref={settingsPanelRef}
            style={{
              left: messagesAreaRect.left + (messagesAreaRect.width - 254) / 2 + (messagesAreaRect.width - 254) * 0.25,
              // Position just below the header (status bar: 47px + header: 66.5px = 113.5px, add 12px gap)
              top: 47 + 66.5 + 12,
            }}
          >
            <SettingsPanel onClose={() => setIsSettingsOpen(false)} />
          </div>
        </div>
      )}

      {/* Input Bar */}
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            className="input"
            placeholder="Type a Message"
          />
          <button className="plus-button" type="button" onClick={togglePanel} ref={plusButtonRef}>
            <img src={imgIcSharpPlus} alt="Plus" className="plus-icon" />
          </button>
        </div>
        <button className="mic-button">
          <div className="mic-button-gradient">
            <img src={imgMdiMicrophone} alt="Microphone" className="mic-icon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChannelGroupsPrivate;

