import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ChannelsScreen from './src/screens/ChannelsScreen';
import AllInOneChats from './src/screens/AllInOneChats';
import ChannelGroupsPrivate from './src/screens/ChannelGroupsPrivate';

const App = () => {
  const [activeScreen, setActiveScreen] = useState<'channels' | 'messages' | 'channel-group'>('channels');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {activeScreen === 'channels' ? (
        <ChannelsScreen onNavigateToMessages={() => setActiveScreen('messages')} />
      ) : activeScreen === 'channel-group' ? (
        <ChannelGroupsPrivate onBack={() => setActiveScreen('messages')} />
      ) : (
        <AllInOneChats
          onNavigateToChannels={() => setActiveScreen('channels')}
          onOpenChat={() => setActiveScreen('channel-group')}
        />
      )}
    </SafeAreaView>
  );
};

export default App;

