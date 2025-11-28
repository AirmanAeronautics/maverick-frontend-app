import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Local image assets
const imgChannelBg = Image.resolveAssetSource(require('../../channel Bg.png')).uri;
const imgGroupsIcon = Image.resolveAssetSource(require('../../groups.svg')).uri;
const imgChannelIcon = Image.resolveAssetSource(require('../../channel.svg')).uri;
const imgContactIcon = Image.resolveAssetSource(require('../../contact.svg')).uri;

// Image assets from Figma
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgSearch = 'https://www.figma.com/api/mcp/asset/2dd6b37b-3679-466e-8433-2267ff11d6ec';
const imgImage = 'https://www.figma.com/api/mcp/asset/32295c0f-d36f-4da1-a594-bc8e1b9d2d32';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/aad76d2d-b0da-4c3c-a132-23ebc110011f';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/3e9b54fa-11d6-4ea9-a97d-abb74125bf5c';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/cb0a01d9-5ca6-4bf1-8968-73bbc8735ce0';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/02b0850c-23c5-4b50-a4a7-7857e6ed7ae6';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/b939ecad-fbe5-4c07-af4e-38b2cfa51051';
const imgOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';

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
  percentage = 'False',
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

type ConnectionItem = {
  id: string;
  name: string;
  subtitle: string;
  avatarUri: string;
};

const CONNECTION_ITEMS: ConnectionItem[] = [
  {
    id: 'steve1',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: imgImage1,
  },
  {
    id: 'kavin',
    name: 'Kavin',
    subtitle: 'Flight Instructor',
    avatarUri: imgImage2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    subtitle: 'ATC',
    avatarUri: imgImage3,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: imgImage1,
  },
];

type CreateOption = {
  iconUri: string;
  title: string;
  onPress?: () => void;
};

type CreateOptionsCardProps = {
  options: CreateOption[];
  width?: number;
  height?: number;
};

const CreateOptionsCard = ({ options, width = 382, height = 246 }: CreateOptionsCardProps) => {
  return (
    <View style={[styles.createOptionsCardContainer, { width, height }]}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
        start={{ x: 0.929, y: 0.847 }}
        end={{ x: 0, y: 0 }}
        style={styles.createOptionsCardGradient}
      >
        <View style={styles.createOptionsCardInnerBorder}>
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={styles.createOptionRow}
                activeOpacity={0.7}
                onPress={option.onPress}
              >
                <View style={styles.createOptionIconContainer}>
                  <Image source={{ uri: option.iconUri }} style={styles.createOptionIcon} />
                </View>
                <Text style={styles.createOptionTitle}>{option.title}</Text>
              </TouchableOpacity>
              {index < options.length - 1 && <View style={styles.createOptionDivider} />}
            </React.Fragment>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

type ConnectionCardProps = {
  item: ConnectionItem;
  onPress?: (item: ConnectionItem) => void;
  width?: number;
  height?: number;
};

const ConnectionCard = ({ item, onPress, width = 382, height = 82 }: ConnectionCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.connectionCardContainer, { width, height }]}
      activeOpacity={0.7}
      onPress={() => onPress?.(item)}
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
        start={{ x: 0.929, y: 0.847 }}
        end={{ x: 0, y: 0 }}
        style={styles.connectionCardGradient}
      >
        <View style={styles.connectionCardInnerBorder}>
          <View style={styles.connectionCardContent}>
            <Image source={{ uri: item.avatarUri }} style={styles.connectionCardAvatar} />
            <View style={styles.connectionCardTextContainer}>
              <Text style={styles.connectionCardName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.connectionCardSubtitle} numberOfLines={1}>
                {item.subtitle}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

type CreateProps = {
  onNavigateToCreateChannel?: () => void;
  onNavigateToCreateGroup?: () => void;
};

const Create = ({ onNavigateToCreateChannel, onNavigateToCreateGroup }: CreateProps) => {
  return (
    <View style={styles.container}>
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
          </View>
        </View>
        <View style={styles.headerButtonPlaceholder} />
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

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardsContainer}>
          <CreateOptionsCard
            options={[
              { iconUri: imgGroupsIcon, title: 'New Group', onPress: onNavigateToCreateGroup },
              { iconUri: imgChannelIcon, title: 'New Channel', onPress: onNavigateToCreateChannel },
            ]}
            width={382}
            height={205}
          />

          {/* Connection List */}
          <View style={styles.connectionListContainer}>
            <Text style={styles.connectionListTitle}>Connection List</Text>
            {CONNECTION_ITEMS.map(item => (
              <ConnectionCard key={item.id} item={item} width={382} height={82} />
            ))}
          </View>
        </View>
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
    justifyContent: 'center',
    marginLeft: 21,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22.933,
  },
  headerButtonPlaceholder: {
    width: 27.52,
    height: 27.52,
  },
  scrollView: {
    flex: 1,
    marginTop: 190,
  },
  searchContainer: {
    position: 'absolute',
    top: 130,
    left: '50%',
    transform: [{ translateX: -191 }],
    width: 382,
    height: 44,
    zIndex: 10,
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },
  cardsContainer: {
    width: 382,
    gap: 8,
  },
  createOptionsCardContainer: {
    marginBottom: 8,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  createOptionsCardGradient: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    borderRadius: 14,
  },
  createOptionsCardInnerBorder: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 24,
  },
  createOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    minHeight: 58,
  },
  createOptionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#168aad',
    marginRight: 12,
  },
  createOptionIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  createOptionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 21.281,
    flex: 1,
  },
  createOptionDivider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginLeft: 60,
    marginRight: 16,
  },
  connectionListContainer: {
    marginTop: 16,
    gap: 8,
  },
  connectionListTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    paddingLeft: 4,
  },
  connectionCardContainer: {
    marginBottom: 8,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  connectionCardGradient: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    borderRadius: 14,
    justifyContent: 'center',
  },
  connectionCardInnerBorder: {
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
  connectionCardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 58,
  },
  connectionCardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  connectionCardTextContainer: {
    flex: 1,
    gap: 4,
  },
  connectionCardName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 21.281,
  },
  connectionCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '400',
    color: '#373737',
    lineHeight: 16,
  },
});

export default Create;

