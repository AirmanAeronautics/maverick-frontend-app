import React from 'react';
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
const imgOutline = 'https://www.figma.com/api/mcp/asset/ea095336-7c59-45af-a6a1-c8e685ed2324';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/65a0a657-f35e-436d-9db7-9a858789e87e';
const imgFill = 'https://www.figma.com/api/mcp/asset/0685ed38-a9a5-4b2b-9201-6667b1748c2e';
const imgWifi = 'https://www.figma.com/api/mcp/asset/23762f59-c27e-499d-b8aa-4c50543e3678';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d4404a29-dc2f-4ae2-9e28-4dae12979e8c';
const imgPhDotsThreeVertical = 'https://www.figma.com/api/mcp/asset/d3be18f1-c10e-4506-9b0c-a66c5c067efc';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/15731158-712e-465a-8916-59b6d9f8f331';
const imgImage = 'https://www.figma.com/api/mcp/asset/0c817d9e-98ae-49a0-8a74-3385e941f970';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/e7ba614e-14fd-4b9f-aaa6-f9e3391f8082';
const imgImage2 = 'https://www.figma.com/api/mcp/asset/40f50a1b-1053-4b1a-ba34-e6f17b84b633';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/d3ccd26c-62ca-4bba-ad3d-94854e79d44c';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/13038650-aeaa-430c-afed-cd17f3d54f36';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/3e4f5801-310b-43e5-8f8b-8c5df48dd3f1';
const imgBasilCrossOutline = 'https://www.figma.com/api/mcp/asset/3fa02f13-f756-4a78-92e6-4773b51e6a05';
const imgMdiTick = 'https://www.figma.com/api/mcp/asset/f0f210a6-afb7-46d9-8d9b-357ce79ce850';
const imgLine1Owj = 'https://www.figma.com/api/mcp/asset/8690efd6-7a87-4f3b-a98d-fb09fa2ecc64';

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

type ApprovalItem = {
  id: string;
  name: string;
  subtitle: string;
  avatar: string;
};

type PendingItem = {
  id: string;
  name: string;
  subtitle: string;
  avatar: string;
  buttonType: 'message' | 'pending';
  buttonColor: string;
  buttonTextColor: string;
};

type ApprovalItemWithColor = ApprovalItem & {
  subtitleColor: string;
};

const APPROVALS: ApprovalItemWithColor[] = [
  {
    id: '1',
    name: 'Yuri Enzo',
    subtitle: 'gave you a request',
    avatar: imgImage,
    subtitleColor: '#5a5a5a',
  },
  {
    id: '2',
    name: 'Beckam',
    subtitle: 'gave you a request',
    avatar: imgImage1,
    subtitleColor: '#585858',
  },
  {
    id: '3',
    name: 'Marie',
    subtitle: 'gave you a request',
    avatar: imgImage2,
    subtitleColor: '#585858',
  },
];

const PENDING: PendingItem[] = [
  {
    id: '1',
    name: 'Nathan',
    subtitle: 'Accepted your request',
    avatar: imgImage3,
    buttonType: 'message',
    buttonColor: '#007598',
    buttonTextColor: '#007598',
  },
  {
    id: '2',
    name: 'Vijay Nagesh',
    subtitle: 'Pending request',
    avatar: imgImage4,
    buttonType: 'pending',
    buttonColor: '#6d6d6d',
    buttonTextColor: '#6d6d6d',
  },
  {
    id: '3',
    name: 'Nignen',
    subtitle: 'Pending request',
    avatar: imgImage5,
    buttonType: 'pending',
    buttonColor: '#585858',
    buttonTextColor: '#585858',
  },
];

type CatchupListProps = {
  onNavigateToPeopleList?: () => void;
  onNavigateToConnectionList?: () => void;
};

const CatchupList = ({ onNavigateToPeopleList, onNavigateToConnectionList }: CatchupListProps = {}) => {
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
        <TouchableOpacity 
          style={styles.tab} 
          activeOpacity={0.7}
          onPress={onNavigateToPeopleList}
        >
          <Text style={styles.tabText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tab} 
          activeOpacity={0.7}
          onPress={onNavigateToConnectionList}
        >
          <Text style={styles.tabText}>Connections</Text>
        </TouchableOpacity>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabText}>Catch up</Text>
          <View style={styles.tabIndicator} />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Approvals Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Approvals</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.sectionSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          {APPROVALS.map((item, index) => (
            <View key={item.id} style={[styles.approvalCard, index === APPROVALS.length - 1 && { marginBottom: 0 }]}>
              <View style={styles.cardContent}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={[styles.cardSubtitle, { color: item.subtitleColor }]}>{item.subtitle}</Text>
                </View>
                <View style={styles.approvalButtons}>
                  <TouchableOpacity style={styles.cancelButton} activeOpacity={0.7}>
                    <Image source={{ uri: imgBasilCrossOutline }} style={styles.buttonIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.approveButton} activeOpacity={0.7}>
                    <Image source={{ uri: imgMdiTick }} style={styles.buttonIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <Image source={{ uri: imgLine1Owj }} style={styles.dividerImage} />
        </View>

        {/* Pending Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pending</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.sectionSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          {PENDING.map((item, index) => (
            <View key={item.id} style={[styles.pendingCard, index === PENDING.length - 1 && { marginBottom: 0 }]}>
              <View style={styles.cardContent}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </View>
                <TouchableOpacity 
                  style={[styles.pendingButton, { borderColor: item.buttonColor }]} 
                  activeOpacity={0.7}
                >
                  <Text style={[styles.pendingButtonText, { color: item.buttonTextColor }]}>
                    {item.buttonType === 'message' ? 'Message' : 'Pending'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
    alignSelf: 'center',
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
    margin: 0,
    padding: 0,
    textAlignVertical: 'center',
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
    marginTop: 50,
  },
  scrollViewContent: {
    paddingTop: 16,
    paddingBottom: 100,
    width: 382,
    maxWidth: '100%',
  },
  section: {
    marginBottom: 19,
    width: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 19,
    height: 18,
  },
  sectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
  },
  sectionSeeAll: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 18,
  },
  approvalCard: {
    width: 382,
    height: 84,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#e6e9f0',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12.348,
    paddingVertical: 8.82,
    justifyContent: 'center',
  },
  pendingCard: {
    width: 382,
    height: 84,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#e6e9f0',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12.348,
    paddingVertical: 8.82,
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  cardTextContainer: {
    flex: 1,
    gap: 2,
  },
  cardName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 21.281,
  },
  cardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
  approvalButtons: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  cancelButton: {
    width: 37,
    height: 37,
    borderRadius: 38.542 / 2,
    borderWidth: 1,
    borderColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  approveButton: {
    width: 37,
    height: 37,
    borderRadius: 38.542 / 2,
    backgroundColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 23.896,
    height: 23.896,
  },
  pendingButton: {
    borderWidth: 0.686,
    borderRadius: 51.695 / 2,
    paddingHorizontal: 13.537,
    paddingVertical: 6.768,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 11.603,
    fontWeight: '400',
    textAlign: 'center',
  },
  divider: {
    width: 428,
    height: 1,
    marginVertical: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerImage: {
    width: '100%',
    height: '100%',
  },
});

export default CatchupList;

