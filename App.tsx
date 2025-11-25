import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ChannelGroupsPrivate from './src/screens/ChannelGroupsPrivate';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ChannelGroupsPrivate />
    </SafeAreaView>
  );
};

export default App;

