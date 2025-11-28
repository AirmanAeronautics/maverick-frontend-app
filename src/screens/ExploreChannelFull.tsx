import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  CHANNEL_CATEGORIES,
  FOLLOWERS_LABEL,
  type ChannelAvatarKey,
  type ChannelDefinition,
} from './exploreChannelData';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

const imgChannelBg = Image.resolveAssetSource(require('../../channel Bg.png')).uri;
const imgArrowLeft = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgSearch = 'https://www.figma.com/api/mcp/asset/2dd6b37b-3679-466e-8433-2267ff11d6ec';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgBatteryOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgBatteryFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';
const avatar1 = 'https://www.figma.com/api/mcp/asset/aad76d2d-b0da-4c3c-a132-23ebc110011f';
const avatar2 = 'https://www.figma.com/api/mcp/asset/3e9b54fa-11d6-4ea9-a97d-abb74125bf5c';
const avatar3 = 'https://www.figma.com/api/mcp/asset/cb0a01d9-5ca6-4bf1-8968-73bbc8735ce0';
const avatar4 = 'https://www.figma.com/api/mcp/asset/02b0850c-23c5-4b50-a4a7-7857e6ed7ae6';
const avatar5 = 'https://www.figma.com/api/mcp/asset/b939ecad-fbe5-4c07-af4e-38b2cfa51051';
const avatar6 = 'https://www.figma.com/api/mcp/asset/166573e9-968c-4330-8cca-d15e7bd6a074';
const avatar7 = 'https://www.figma.com/api/mcp/asset/02204879-0fa7-4d07-a529-d8d70ea06faa';
const avatar8 = 'https://www.figma.com/api/mcp/asset/08d0ab5a-fee5-4cb8-b761-0b385ff013e2';
const iconFollowers = Image.resolveAssetSource(require('../../fluent_people-community-12-filled.svg')).uri;

const AVATAR_MAP: Record<ChannelAvatarKey, string> = {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
};

type ChannelCardData = {
  id: string;
  name: string;
  avatarUri: string;
};

const mapChannel = (channel: ChannelDefinition): ChannelCardData => ({
  id: channel.id,
  name: channel.name,
  avatarUri: AVATAR_MAP[channel.avatarKey],
});

const StatusBarBattery = () => (
  <View style={styles.batteryContainer}>
    <View style={styles.batteryOutline}>
      <Image source={{ uri: imgBatteryOutline }} style={styles.batteryOutlineImage} />
    </View>
    <View style={styles.batteryEnd}>
      <Image source={{ uri: imgBatteryEnd }} style={styles.batteryEndImage} />
    </View>
    <View style={styles.batteryFill}>
      <Image source={{ uri: imgBatteryFill }} style={styles.batteryFillImage} />
    </View>
  </View>
);

type ChannelCardProps = {
  channel: ChannelCardData;
  isFollowing: boolean;
  onToggleFollow: () => void;
};

const ChannelCard = ({ channel, isFollowing, onToggleFollow }: ChannelCardProps) => {
  return (
    <View style={styles.channelCardContainer}>
      <View style={styles.channelCard}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0.929, y: 0.847 }}
          end={{ x: 0, y: 0 }}
          style={styles.channelCardGradient}
        >
          <View style={styles.channelCardInnerBorder}>
            <View style={styles.channelCardContent}>
              <Image source={{ uri: channel.avatarUri }} style={styles.channelCardAvatar} />
              <View style={styles.channelCardText}>
                <Text style={styles.channelCardName} numberOfLines={1}>
                  {channel.name}
                </Text>
                <View style={styles.channelCardFollowers}>
                  <Image source={{ uri: iconFollowers }} style={styles.channelCardFollowersIcon} />
                  <Text style={styles.channelCardSubtitle} numberOfLines={1}>
                    {FOLLOWERS_LABEL}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity
          style={[styles.followButton, isFollowing && styles.followButtonActive]}
          activeOpacity={0.85}
          onPress={onToggleFollow}
        >
          <Text style={[styles.followButtonText, isFollowing && styles.followButtonTextActive]}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type ExploreChannelFullProps = {
  title?: string;
  channels?: ChannelDefinition[];
  onBack?: () => void;
};

const ExploreChannelFull = ({
  title,
  channels = CHANNEL_CATEGORIES[0].channels,
  onBack,
}: ExploreChannelFullProps) => {
  const [followStates, setFollowStates] = useState<Record<string, boolean>>({});

  const cardData = useMemo(() => channels.map(mapChannel), [channels]);

  const handleToggleFollow = useCallback((channelId: string) => {
    setFollowStates(prev => ({
      ...prev,
      [channelId]: !prev[channelId],
    }));
  }, []);

  const heading = title ?? CHANNEL_CATEGORIES[0].title;

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imgChannelBg }} style={styles.backgroundImage} blurRadius={45}>
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
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7} onPress={onBack}>
          <Image source={{ uri: imgArrowLeft }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>{heading}</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Image source={{ uri: imgSearch }} style={styles.searchIcon} />
          <TextInput
            style={styles.searchTextInput}
            placeholder="Search channels"
            placeholderTextColor="#454950"
          />
        </View>
      </View>

      <ScrollView
        style={styles.listScroll}
        contentContainerStyle={styles.listScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {cardData.map(channel => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            isFollowing={Boolean(followStates[channel.id])}
            onToggleFollow={() => handleToggleFollow(channel.id)}
          />
        ))}
      </ScrollView>
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
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 26,
  },
  searchContainer: {
    position: 'absolute',
    top: 132,
    left: '50%',
    transform: [{ translateX: -191 }],
    width: 382,
    height: 44,
  },
  searchInput: {
    height: 44,
    borderRadius: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    gap: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: undefined,
  },
  searchTextInput: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#454950',
  },
  listScroll: {
    marginTop: 212,
    paddingHorizontal: 24,
  },
  listScrollContent: {
    paddingBottom: 200,
    alignItems: 'center',
  },
  channelCardContainer: {
    marginBottom: 12,
    position: 'relative',
  },
  channelCard: {
    width: 382,
    height: 82,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  channelCardGradient: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    borderRadius: 14,
    justifyContent: 'center',
  },
  channelCardInnerBorder: {
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
  channelCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 63,
    gap: 12,
  },
  channelCardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  channelCardText: {
    flex: 1,
    gap: 4,
  },
  channelCardFollowers: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  channelCardFollowersIcon: {
    width: 16,
    height: 16,
    marginTop: 0,
  },
  channelCardName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  channelCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '400',
    color: '#373737',
  },
  followButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    width: 96,
    height: 34,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 124, 167, 0.85)',
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -17 }],
  },
  followButtonActive: {
    backgroundColor: 'transparent',
    borderColor: '#168aad',
  },
  followButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.2,
  },
  followButtonTextActive: {
    color: '#168aad',
  },
});

export default ExploreChannelFull;





