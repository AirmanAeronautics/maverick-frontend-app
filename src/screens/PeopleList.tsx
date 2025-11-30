import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgRectangle4249 = 'https://www.figma.com/api/mcp/asset/0819f6cb-e382-4719-9e12-dfb5bd59da53';
const imgImage = 'https://www.figma.com/api/mcp/asset/87192873-4b5e-4766-b324-41750ff58d0e';
const imgRectangle4250 = 'https://www.figma.com/api/mcp/asset/5dd89eb9-c3dc-40b0-a9f4-f030ff34bfb8';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/87e67e70-0e62-4449-a8fd-3dff5f1ade0f';
const imgRectangle4251 = 'https://www.figma.com/api/mcp/asset/84471e95-34fa-489d-9de5-41aee95a3b1f';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/ea1a5fb9-24b4-4ace-9899-61ac7a5f4db6';
const imgRectangle4252 = 'https://www.figma.com/api/mcp/asset/b0e5cdf1-4ca2-439e-9035-fdd03640e640';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/60a82511-9ef1-4771-8944-1dca683483b1';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/c4ff77c9-8557-4483-8652-23e2a6b2addd';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/03d8f5ca-5a5c-4667-836d-116a3c30bbf7';
const imgOutline = 'https://www.figma.com/api/mcp/asset/ea095336-7c59-45af-a6a1-c8e685ed2324';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/65a0a657-f35e-436d-9db7-9a858789e87e';
const imgFill = 'https://www.figma.com/api/mcp/asset/0685ed38-a9a5-4b2b-9201-6667b1748c2e';
const imgWifi = 'https://www.figma.com/api/mcp/asset/23762f59-c27e-499d-b8aa-4c50543e3678';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d4404a29-dc2f-4ae2-9e28-4dae12979e8c';
const imgPhDotsThreeVertical = 'https://www.figma.com/api/mcp/asset/d3be18f1-c10e-4506-9b0c-a66c5c067efc';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/15731158-712e-465a-8916-59b6d9f8f331';
const imgFrame1171275571 = 'https://www.figma.com/api/mcp/asset/32ccedea-d40b-49fc-9ff6-77ee0f6db33e';
const imgLine720 = 'https://www.figma.com/api/mcp/asset/cc82d5bb-0d54-462c-9f18-cf62b38ec0ab';

type StatusBarBatteryProps = {
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

type PersonCard = {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
  profileImage: string;
  badgeText: string;
  badgeColor: string;
  badgeBorderColor: string;
};

const PEOPLE_NEAR_LOCATION: PersonCard[] = [
  {
    id: '1',
    name: 'Alexander Bell',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4249,
    profileImage: imgImage,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '2',
    name: 'Aiden',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4250,
    profileImage: imgImage1,
    badgeText: 'Seasoned Pilot',
    badgeColor: '#a66c00',
    badgeBorderColor: '#a66c00',
  },
  {
    id: '3',
    name: 'Leena',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4251,
    profileImage: imgImage2,
    badgeText: 'Flight Instructor',
    badgeColor: '#490098',
    badgeBorderColor: '#490098',
  },
  {
    id: '4',
    name: 'Hiroshiman',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4252,
    profileImage: imgImage3,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
];

const PEOPLE_FROM_SCHOOL: PersonCard[] = [
  {
    id: '5',
    name: 'Daniel',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4249,
    profileImage: imgImage4,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
  {
    id: '6',
    name: 'Ryan Reynold',
    description: 'A330 Captain with 12 years of international flying experience. Specialized in long-haul ops, ETOPS routes, and crew training. Passionate about cockpit automation and sharing real-world flight insights with cadets.',
    backgroundImage: imgRectangle4250,
    profileImage: imgImage5,
    badgeText: 'Student Pilot',
    badgeColor: '#007598',
    badgeBorderColor: '#007598',
  },
];

const PersonCard = ({ person, isPending, onConnectClick }: { person: PersonCard; isPending?: boolean; onConnectClick?: () => void }) => {
  return (
    <View style={styles.personCard}>
      <View style={styles.personCardInner}>
        <View style={styles.personCardBackground}>
          <Image source={{ uri: person.backgroundImage }} style={styles.personCardBackgroundImage} />
        </View>
        <View style={styles.personCardProfileImageContainer}>
          <Image source={{ uri: person.profileImage }} style={styles.personCardProfileImage} />
        </View>
        <View style={styles.personCardContent}>
          <Text style={styles.personCardName}>{person.name}</Text>
          <Text style={styles.personCardDescription} numberOfLines={2} ellipsizeMode="tail">
            {person.description}
          </Text>
        </View>
        <TouchableOpacity 
          style={[styles.connectButton, isPending && styles.connectButtonPending]} 
          activeOpacity={0.7}
          onPress={onConnectClick}
        >
          <Text style={[styles.connectButtonText, isPending && styles.connectButtonTextPending]}>
            {isPending ? 'Pending' : 'Connect'}
          </Text>
        </TouchableOpacity>
        <View style={[styles.badge, { borderColor: person.badgeBorderColor }]}>
          <Text style={[styles.badgeText, { color: person.badgeColor }]}>{person.badgeText}</Text>
        </View>
        <View style={styles.favoriteIcon}>
          <Image source={{ uri: imgFrame1171275571 }} style={styles.favoriteIconImage} />
        </View>
      </View>
    </View>
  );
};

type PeopleListProps = {
  onSeeAll?: (category: 'near-location' | 'from-school') => void;
  onNavigateToConnectionList?: () => void;
};

const PeopleList = ({ onSeeAll, onNavigateToConnectionList }: PeopleListProps = {}) => {
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());

  const handleConnectClick = (personId: string) => {
    setPendingIds(prev => {
      const next = new Set(prev);
      if (next.has(personId)) {
        next.delete(personId);
      } else {
        next.add(personId);
      }
      return next;
    });
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <View style={styles.statusBarTimeContainer}>
            <Text style={styles.statusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.statusBarRight}>
          <StatusBarBattery />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Connect with People</Text>
            <View style={styles.headerSubtitleContainer}>
              <Text style={styles.headerSubtitle}>Explore the aviation people</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
          <Image source={{ uri: imgPhDotsThreeVertical }} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabText}>People</Text>
          <View style={styles.tabIndicator} />
        </View>
        <TouchableOpacity 
          style={styles.tab} 
          activeOpacity={0.7}
          onPress={onNavigateToConnectionList}
        >
          <Text style={styles.tabText}>Connections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
          <Text style={styles.tabText}>Catch up</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* People near location */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>People near location</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.sectionSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsRow}>
            {PEOPLE_NEAR_LOCATION.slice(0, 2).map(person => (
              <PersonCard 
                key={person.id} 
                person={person} 
                isPending={pendingIds.has(person.id)}
                onConnectClick={() => handleConnectClick(person.id)}
              />
            ))}
          </View>
          <View style={styles.cardsRow}>
            {PEOPLE_NEAR_LOCATION.slice(2, 4).map(person => (
              <PersonCard 
                key={person.id} 
                person={person} 
                isPending={pendingIds.has(person.id)}
                onConnectClick={() => handleConnectClick(person.id)}
              />
            ))}
          </View>
        </View>

        {/* Separator */}
        <View style={styles.sectionSeparator} />

        {/* People from your school */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>People from your school</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.sectionSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsRow}>
            {PEOPLE_FROM_SCHOOL.map(person => (
              <PersonCard 
                key={person.id} 
                person={person} 
                isPending={pendingIds.has(person.id)}
                onConnectClick={() => handleConnectClick(person.id)}
              />
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
  statusBar: {
    height: 60,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: '#FFFFFF',
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
    height: 66.507,
    width: APP_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19.93,
    backgroundColor: '#FFFFFF',
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
    gap: 12,
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
  headerSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: -1,
  },
  headerSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#424242',
    lineHeight: 22.933,
  },
  menuButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 27.52,
    height: 27.52,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 37,
    paddingHorizontal: 24,
    position: 'relative',
    alignSelf: 'center',
    width: 430,
    gap: 32,
    height: 24,
  },
  tab: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    margin: 0,
    padding: 0,
    width: 'auto',
  },
  tabActive: {
    position: 'relative',
  },
  tabText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 0,
    margin: 0,
    padding: 0,
  },
  tabIndicator: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -45.5 }],
    bottom: -10,
    width: 91,
    height: 5,
    backgroundColor: '#00627f',
    borderRadius: 24,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingTop: 16,
    paddingBottom: 100,
    width: 382,
    maxWidth: '100%',
  },
  section: {
    marginBottom: 32,
  },
  sectionSeparator: {
    width: '100%',
    height: 6,
    backgroundColor: '#F4F3F8',
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  sectionSeeAll: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  personCard: {
    width: 183.188,
    height: 203.082,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: '#e6e9f0',
    overflow: 'hidden',
  },
  personCardInner: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  personCardBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64.65,
    borderTopLeftRadius: 3.316,
    borderTopRightRadius: 3.316,
    overflow: 'hidden',
  },
  personCardBackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  personCardProfileImageContainer: {
    position: 'absolute',
    left: 14.09,
    top: 32.33,
    width: 62.997,
    height: 62.997,
    borderRadius: 31.4985,
    overflow: 'hidden',
  },
  personCardProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  personCardContent: {
    position: 'absolute',
    left: 14.09,
    top: 101.95,
    width: 158.321,
    height: 44.761,
  },
  personCardName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13.262,
    fontWeight: '500',
    color: '#0a0f1f',
    lineHeight: 18.626,
    marginBottom: 0,
  },
  personCardDescription: {
    fontFamily: 'Roboto',
    fontSize: 9.947,
    fontWeight: '400',
    color: '#585858',
    lineHeight: 15.522,
    marginTop: 0,
    height: 31,
  },
  connectButton: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -77.0885 }],
    top: 161.64,
    width: 154.177,
    height: 26.525,
    backgroundColor: '#168aad',
    borderRadius: 46.053,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectButtonPending: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#6D6D6D',
  },
  connectButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 9.95,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  connectButtonTextPending: {
    color: '#6D6D6D',
  },
  badge: {
    position: 'absolute',
    right: 6,
    top: 71.29,
    borderWidth: 0.323,
    borderRadius: 24.343,
    paddingHorizontal: 6.374,
    paddingVertical: 3.187,
  },
  badgeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 5.464,
    fontWeight: '400',
    textAlign: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    left: 156,
    top: 16,
    width: 16,
    height: 16,
  },
  favoriteIconImage: {
    width: '100%',
    height: '100%',
  },
});

export default PeopleList;

