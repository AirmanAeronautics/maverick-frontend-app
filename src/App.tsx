import React, { useCallback, useEffect, useState } from 'react';
import ChannelsScreen from './screens/ChannelsScreen.web';
import ChannelsScreenEmpty from './screens/ChannelsScreenEmpty.web';
import AllInOneChats from './screens/AllInOneChats.web';
import AllInOneChatsEmpty from './screens/AllInOneChatsEmpty.web';
import ExploreChannel from './screens/ExploreChannel.web';
import ExploreChannelFull from './screens/ExploreChannelFull.web';
import CreateChannel from './screens/CreateChannel.web';
import ChannelGroupsPrivate from './screens/ChannelGroupsPrivate.web';
import ArchiveChats from './screens/ArchiveChats.web';
import type { ChatItem } from './screens/types';
import { CHANNEL_CATEGORIES, CHANNEL_CATEGORY_MAP, type ChannelCategoryId } from './screens/exploreChannelData';
import './App.css';
import avatar1 from './assets/avatar-1.png';
import avatar2 from './assets/avatar-2.png';
import avatar3 from './assets/avatar-3.png';
import avatar4 from './assets/avatar-4.png';
import avatar5 from './assets/avatar-5.png';

const INITIAL_CHAT_ITEMS: ChatItem[] = [
  {
    id: 'steve1',
    name: 'Steve Harrington',
    preview:
      "Morning team — heads up, runway 27L lighting's partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.",
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar1,
  },
  {
    id: 'kavin',
    name: 'Kavin ',
    preview:
      "Morning team — heads up, runway 27L lighting's partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.",
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    preview:
      "Morning team — heads up, runway 27L lighting's partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.",
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar3,
  },
  {
    id: 'landing-legends',
    name: '#landing-legends',
    preview:
      "Morning team — heads up, runway 27L lighting's partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.",
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar4,
    isGroup: true,
  },
  {
    id: 'cessna-172',
    name: '#cessna -172',
    preview:
      "Morning team — heads up, runway 27L lighting's partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.",
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar5,
    isGroup: true,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    preview:
      "Morning team — heads up, runway 27L lighting's partially down until 0900Z. Expect single runway ops and a little delay. Bring patience & snacks.",
    time: '04:30 pm',
    unreadCount: 1,
    avatarUri: avatar1,
  },
];

type ScreenKey =
  | 'channels'
  | 'messages'
  | 'archive-chats'
  | 'explore'
  | 'explore-full'
  | 'channels-empty'
  | 'messages-empty'
  | 'create-channel'
  | 'channel-groups-private';

const VALID_SCREENS: ScreenKey[] = [
  'channels',
  'messages',
  'explore',
  'explore-full',
  'channels-empty',
  'messages-empty',
  'create-channel',
  'channel-groups-private',
  'archive-chats',
];

const getScreenFromHash = (): ScreenKey => {
  if (typeof window === 'undefined') {
    return 'channels';
  }
  const hash = window.location.hash.replace('#', '') as ScreenKey;
  return VALID_SCREENS.includes(hash) ? hash : 'channels';
};

const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>(() => getScreenFromHash());
  const [followStates, setFollowStates] = useState<Record<string, boolean>>({});
  const [chats, setChats] = useState<ChatItem[]>(() => INITIAL_CHAT_ITEMS);
  const [archivedChats, setArchivedChats] = useState<ChatItem[]>([]);
  const [fullListCategoryId, setFullListCategoryId] = useState<ChannelCategoryId>('popular');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveScreen(getScreenFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((screen: ScreenKey) => {
    if (typeof window !== 'undefined') {
      window.location.hash = screen;
    }
    setActiveScreen(screen);
  }, []);

  const handleToggleFollow = useCallback((channelId: string) => {
    setFollowStates(prev => ({
      ...prev,
      [channelId]: !prev[channelId],
    }));
  }, []);

  const handleArchiveChat = useCallback((chatId: string) => {
    setChats(prevChats => {
      const chatToArchive = prevChats.find(chat => chat.id === chatId);
      if (!chatToArchive) {
        return prevChats;
      }
      setArchivedChats(prevArchived => {
        if (prevArchived.some(chat => chat.id === chatId)) {
          return prevArchived;
        }
        return [chatToArchive, ...prevArchived];
      });
      return prevChats.filter(chat => chat.id !== chatId);
    });
  }, []);

  const handleUnarchiveChat = useCallback((chatId: string) => {
    setArchivedChats(prevArchived => {
      const chatToRestore = prevArchived.find(chat => chat.id === chatId);
      if (!chatToRestore) {
        return prevArchived;
      }
      setChats(prevChats => {
        if (prevChats.some(chat => chat.id === chatId)) {
          return prevChats;
        }
        return [chatToRestore, ...prevChats];
      });
      return prevArchived.filter(chat => chat.id !== chatId);
    });
  }, []);

  const handleDeleteArchivedChat = useCallback((chatId: string) => {
    setArchivedChats(prevArchived => prevArchived.filter(chat => chat.id !== chatId));
  }, []);

  const handleSeeAll = useCallback(
    (categoryId: ChannelCategoryId) => {
      setFullListCategoryId(categoryId);
      navigateTo('explore-full');
    },
    [navigateTo],
  );

  const fullListCategory = CHANNEL_CATEGORY_MAP[fullListCategoryId] ?? CHANNEL_CATEGORIES[0];

  return (
    <div className="app-container">
      {activeScreen === 'explore-full' ? (
        <ExploreChannelFull
          title={fullListCategory.title}
          channels={fullListCategory.channels}
          followStates={followStates}
          onToggleFollow={handleToggleFollow}
          onBack={() => navigateTo('explore')}
        />
      ) : activeScreen === 'explore' ? (
        <ExploreChannel
          followStates={followStates}
          onToggleFollow={handleToggleFollow}
          onSeeAll={handleSeeAll}
          onBack={() => navigateTo('channels')}
        />
      ) : activeScreen === 'channels-empty' ? (
        <ChannelsScreenEmpty
          followStates={followStates}
          onToggleFollow={handleToggleFollow}
          onSeeAll={handleSeeAll}
          onNavigateToMessages={() => navigateTo('messages-empty')}
        />
      ) : activeScreen === 'channels' ? (
        <ChannelsScreen onNavigateToMessages={() => navigateTo('messages')} />
      ) : activeScreen === 'create-channel' ? (
        <CreateChannel />
      ) : activeScreen === 'messages-empty' ? (
        <AllInOneChatsEmpty onNavigateToChannels={() => navigateTo('channels-empty')} />
      ) : activeScreen === 'archive-chats' ? (
        <ArchiveChats
          archivedChats={archivedChats}
          onBack={() => navigateTo('messages')}
          onUnarchiveChat={handleUnarchiveChat}
          onDeleteChat={handleDeleteArchivedChat}
        />
      ) : activeScreen === 'channel-groups-private' ? (
        <ChannelGroupsPrivate onBack={() => navigateTo('messages')} />
      ) : (
        <AllInOneChats
          chats={chats}
          archivedChats={archivedChats}
          onArchiveChat={handleArchiveChat}
          onNavigateToChannels={() => navigateTo('channels')}
          onOpenChat={() => navigateTo('channel-groups-private')}
          onNavigateToArchive={() => navigateTo('archive-chats')}
        />
      )}
    </div>
  );
};

export default App;

