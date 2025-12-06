import React, { useCallback, useEffect, useState } from 'react';
import ChannelsScreen from './screens/ChannelsScreen.web';
import ChannelsScreenEmpty from './screens/ChannelsScreenEmpty.web';
import AllInOneChats from './screens/AllInOneChats.web';
import AllInOneChatsEmpty from './screens/AllInOneChatsEmpty.web';
import ExploreChannel from './screens/ExploreChannel.web';
import ExploreChannelFull from './screens/ExploreChannelFull.web';
import CreateChannel from './screens/CreateChannel.web';
import Create from './screens/Create.web';
import CreateGroup from './screens/CreateGroup.web';
import CreateGroupMembers from './screens/CreateGroupMembers.web';
import AddPeopleInChannel from './screens/AddPeopleInChannel.web';
import ChannelGroupsPrivate from './screens/ChannelGroupsPrivate.web';
import ArchiveChats from './screens/ArchiveChats.web';
import CommunityPage from './screens/communitypage.web';
import PeopleList from './screens/PeopleList1.web';
import PeopleListFull from './screens/PeopleListFull.web';
import ConnectionList from './screens/ConnectionList.web';
import CatchupList from './screens/CatchupList.web';
import Profile1 from './screens/Profile1.web';
import ChannelProfile from './screens/ChannelProfile.web';
import Login from './screens/login.web';
import Signup from './screens/signup.web';
import RegBody from './screens/regbody.web';
import RegBodyAll from './screens/regbodyall.web';
import Step1 from './screens/step1.web';
import Step2 from './screens/step2.web';
import Connect from './screens/connect.web';
import Permission from './screens/permission.web';
import Experience1 from './screens/experience1.web';
import GenAI from './screens/GenAI.web';
import Pilotinfo from './screens/Pilotinfo.web';
import Instructorinfo from './screens/Instructorinfo.web';
import { PEOPLE_NEAR_LOCATION, PEOPLE_FROM_SCHOOL } from './screens/PeopleList1.web';
import type { ChatItem } from './screens/types';
import { CHANNEL_CATEGORIES, CHANNEL_CATEGORY_MAP, type ChannelCategoryId } from './screens/exploreChannelData';
import './App.css';
import avatar1 from './assets/avatar-1.png';
import avatar2 from './assets/avatar-2.png';
import avatar3 from './assets/avatar-3.png';
import avatar4 from './assets/avatar-4.png';
import avatar5 from './assets/avatar-5.png';

// Contact data for CreateGroupMembers
const ALL_CONTACTS = [
  {
    id: 'steve1',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: avatar1,
  },
  {
    id: 'kavin',
    name: 'Kavin',
    subtitle: 'Flight Instructor',
    avatarUri: avatar2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    subtitle: 'ATC',
    avatarUri: avatar3,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: avatar1,
  },
  {
    id: 'contact5',
    name: 'John Doe',
    subtitle: 'Co-Pilot',
    avatarUri: avatar4,
  },
  {
    id: 'contact6',
    name: 'Jane Smith',
    subtitle: 'Ground Crew',
    avatarUri: avatar5,
  },
  {
    id: 'contact7',
    name: 'Mike Johnson',
    subtitle: 'Air Traffic Controller',
    avatarUri: avatar2,
  },
  {
    id: 'contact8',
    name: 'Sarah Williams',
    subtitle: 'Flight Dispatcher',
    avatarUri: avatar3,
  },
  {
    id: 'contact9',
    name: 'David Brown',
    subtitle: 'Aircraft Mechanic',
    avatarUri: avatar4,
  },
  {
    id: 'contact10',
    name: 'Emily Davis',
    subtitle: 'Ground Operations',
    avatarUri: avatar5,
  },
];

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
  | 'login'
  | 'signup'
  | 'channels'
  | 'messages'
  | 'archive-chats'
  | 'explore'
  | 'explore-full'
  | 'channels-empty'
  | 'messages-empty'
  | 'create-channel'
  | 'create'
  | 'create-group'
  | 'create-group-members'
  | 'add-people-in-channel'
  | 'channel-groups-private'
  | 'community'
  | 'people-list'
  | 'people-list-full'
  | 'connection-list'
  | 'catchup-list'
  | 'profile1'
  | 'channel-profile'
  | 'regbody'
  | 'regbodyall'
  | 'step1'
  | 'step2'
  | 'connect'
  | 'permission'
  | 'experience1'
  | 'genai'
  | 'pilotinfo'
  | 'instructorinfo';

const VALID_SCREENS: ScreenKey[] = [
  'login',
  'signup',
  'channels',
  'messages',
  'explore',
  'explore-full',
  'channels-empty',
  'messages-empty',
  'create-channel',
  'create',
  'create-group',
  'create-group-members',
  'add-people-in-channel',
  'channel-groups-private',
  'archive-chats',
  'community',
  'people-list',
  'people-list-full',
  'connection-list',
  'catchup-list',
  'profile1',
  'channel-profile',
  'regbody',
  'regbodyall',
  'step1',
  'step2',
  'connect',
  'permission',
  'experience1',
  'genai',
  'pilotinfo',
  'instructorinfo',
];

const getScreenFromHash = (): ScreenKey => {
  if (typeof window === 'undefined') {
    return 'login';
  }
  const hash = window.location.hash.replace('#', '') as ScreenKey;
  return VALID_SCREENS.includes(hash) ? hash : 'login';
};

const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>(() => getScreenFromHash());
  const [followStates, setFollowStates] = useState<Record<string, boolean>>({});
  const [chats, setChats] = useState<ChatItem[]>(() => INITIAL_CHAT_ITEMS);
  const [archivedChats, setArchivedChats] = useState<ChatItem[]>([]);
  const [fullListCategoryId, setFullListCategoryId] = useState<ChannelCategoryId>('popular');
  const [selectedGroupMembers, setSelectedGroupMembers] = useState<string[]>([]);
  const [peopleListCategory, setPeopleListCategory] = useState<'near-location' | 'from-school'>('near-location');

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

  const handlePeopleSeeAll = useCallback(
    (category: 'near-location' | 'from-school') => {
      setPeopleListCategory(category);
      navigateTo('people-list-full');
    },
    [navigateTo],
  );

  const fullListCategory = CHANNEL_CATEGORY_MAP[fullListCategoryId] ?? CHANNEL_CATEGORIES[0];

  return (
    <div className="app-container">
      {activeScreen === 'login' ? (
        <Login 
          onLogin={() => navigateTo('messages')}
          onSignUp={() => navigateTo('messages')}
          onNavigateToSignup={() => navigateTo('signup')}
        />
      ) : activeScreen === 'signup' ? (
        <Signup 
          onLogin={() => navigateTo('messages')}
          onSignUp={() => navigateTo('messages')}
          onNavigateToLogin={() => navigateTo('login')}
        />
      ) : activeScreen === 'explore-full' ? (
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
          onNavigateToCreate={() => navigateTo('create')}
        />
      ) : activeScreen === 'channels' ? (
        <ChannelsScreen 
          onNavigateToMessages={() => navigateTo('messages')}
          onNavigateToCreate={() => navigateTo('create')}
        />
      ) : activeScreen === 'create-channel' ? (
        <CreateChannel onBack={() => navigateTo('create')} />
      ) : activeScreen === 'create' ? (
        <Create
          onNavigateToCreateChannel={() => navigateTo('create-channel')}
          onNavigateToCreateGroup={() => navigateTo('create-group')}
        />
      ) : activeScreen === 'create-group' ? (
        <CreateGroup
          onBack={() => navigateTo('create')}
          onContinue={selectedIds => {
            setSelectedGroupMembers(selectedIds);
            navigateTo('create-group-members');
          }}
        />
      ) : activeScreen === 'create-group-members' ? (
        <CreateGroupMembers
          selectedMembers={ALL_CONTACTS.filter(contact => selectedGroupMembers.includes(contact.id))}
          onBack={() => navigateTo('create-group')}
          onAddMembers={() => navigateTo('create-group')}
          onCreate={(groupName) => {
            console.log('Creating group:', { groupName, members: selectedGroupMembers });
            // Navigate back to messages after creation
            navigateTo('messages');
          }}
        />
      ) : activeScreen === 'add-people-in-channel' ? (
        <AddPeopleInChannel
          onBack={() => navigateTo('channel-groups-private')}
          onContinue={selectedIds => {
            console.log('Adding people to channel:', selectedIds);
            // Navigate back after adding
            navigateTo('channel-groups-private');
          }}
        />
      ) : activeScreen === 'messages-empty' ? (
        <AllInOneChatsEmpty 
          onNavigateToChannels={() => navigateTo('channels-empty')}
          onNavigateToCreate={() => navigateTo('create')}
        />
      ) : activeScreen === 'archive-chats' ? (
        <ArchiveChats
          archivedChats={archivedChats}
          onBack={() => navigateTo('messages')}
          onUnarchiveChat={handleUnarchiveChat}
          onDeleteChat={handleDeleteArchivedChat}
        />
      ) : activeScreen === 'channel-groups-private' ? (
        <ChannelGroupsPrivate onBack={() => navigateTo('messages')} />
      ) : activeScreen === 'community' ? (
        <CommunityPage />
      ) : activeScreen === 'people-list-full' ? (
        <PeopleListFull
          title={peopleListCategory === 'near-location' ? 'People near location' : 'People from your school'}
          people={peopleListCategory === 'near-location' ? PEOPLE_NEAR_LOCATION : PEOPLE_FROM_SCHOOL}
          onBack={() => navigateTo('people-list')}
        />
      ) : activeScreen === 'people-list' ? (
        <PeopleList 
          onSeeAll={handlePeopleSeeAll}
          onNavigateToConnectionList={() => navigateTo('connection-list')}
          onNavigateToCatchupList={() => navigateTo('catchup-list')}
        />
      ) : activeScreen === 'connection-list' ? (
        <ConnectionList 
          onNavigateToPeople={() => navigateTo('people-list')}
          onNavigateToCatchupList={() => navigateTo('catchup-list')}
        />
      ) : activeScreen === 'catchup-list' ? (
        <CatchupList 
          onNavigateToPeopleList={() => navigateTo('people-list')}
          onNavigateToConnectionList={() => navigateTo('connection-list')}
        />
      ) : activeScreen === 'profile1' ? (
        <Profile1 
          onBack={() => navigateTo('messages')}
        />
      ) : activeScreen === 'channel-profile' ? (
        <ChannelProfile 
          onBack={() => navigateTo('messages')}
        />
      ) : activeScreen === 'regbody' ? (
        <RegBody />
      ) : activeScreen === 'regbodyall' ? (
        <RegBodyAll />
      ) : activeScreen === 'step1' ? (
        <Step1 />
      ) : activeScreen === 'step2' ? (
        <Step2 />
      ) : activeScreen === 'connect' ? (
        <Connect />
      ) : activeScreen === 'permission' ? (
        <Permission onContinue={() => navigateTo('messages')} />
      ) : activeScreen === 'experience1' ? (
        <Experience1 onContinue={() => navigateTo('messages')} />
      ) : activeScreen === 'genai' ? (
        <GenAI />
      ) : activeScreen === 'pilotinfo' ? (
        <Pilotinfo />
      ) : activeScreen === 'instructorinfo' ? (
        <Instructorinfo />
      ) : (
        <AllInOneChats
          chats={chats}
          archivedChats={archivedChats}
          onArchiveChat={handleArchiveChat}
          onNavigateToChannels={() => navigateTo('channels')}
          onNavigateToCreate={() => navigateTo('create')}
          onOpenChat={() => navigateTo('channel-groups-private')}
          onNavigateToArchive={() => navigateTo('archive-chats')}
        />
      )}
    </div>
  );
};

export default App;

