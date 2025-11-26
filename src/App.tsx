import React, { useCallback, useEffect, useState } from 'react';
import ChannelsScreen from './screens/ChannelsScreen.web';
import ChannelsScreenEmpty from './screens/ChannelsScreenEmpty.web';
import AllInOneChats from './screens/AllInOneChats.web';
import AllInOneChatsEmpty from './screens/AllInOneChatsEmpty.web';
import ExploreChannel from './screens/ExploreChannel.web';
import ExploreChannelFull from './screens/ExploreChannelFull.web';
import CreateChannel from './screens/CreateChannel.web';
import { CHANNEL_CATEGORIES, CHANNEL_CATEGORY_MAP, type ChannelCategoryId } from './screens/exploreChannelData';
import './App.css';

type ScreenKey =
  | 'channels'
  | 'messages'
  | 'explore'
  | 'explore-full'
  | 'channels-empty'
  | 'messages-empty'
  | 'create-channel';

const VALID_SCREENS: ScreenKey[] = [
  'channels',
  'messages',
  'explore',
  'explore-full',
  'channels-empty',
  'messages-empty',
  'create-channel',
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
      ) : (
        <AllInOneChats onNavigateToChannels={() => navigateTo('channels')} />
      )}
    </div>
  );
};

export default App;

