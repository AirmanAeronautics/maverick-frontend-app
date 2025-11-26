import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ChannelsScreen from './src/screens/ChannelsScreen';
import AllInOneChats from './src/screens/AllInOneChats';

const App = () => {
  const [activeScreen, setActiveScreen] = useState<'channels' | 'messages'>('channels');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {activeScreen === 'channels' ? (
        <ChannelsScreen onNavigateToMessages={() => setActiveScreen('messages')} />
      ) : (
        <AllInOneChats onNavigateToChannels={() => setActiveScreen('channels')} />
      )}
    </SafeAreaView>
  );
};

export default App;

