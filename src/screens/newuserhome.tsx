// DO NOT MODIFY OTHER FILES — newuserhome SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma URLs
const imgWhatsAppImage20251104At140830Ee24Dbf33 = { uri: "https://www.figma.com/api/mcp/asset/27eaace6-5135-4fa2-adc7-ecd6301c2be6" };
const imgEllipse195 = { uri: "https://www.figma.com/api/mcp/asset/d02585cf-61a6-4d5b-ad55-90ef49e108f4" };
const imgImage = { uri: "https://www.figma.com/api/mcp/asset/bd88da07-936e-4f07-a2e2-8a1018e19b3e" };
const imgImage1 = { uri: "https://www.figma.com/api/mcp/asset/69853f45-5d88-4524-8838-791117d8abe9" };
const imgOutline = { uri: "https://www.figma.com/api/mcp/asset/06dfc7f6-35f2-466c-ac70-fd495fc44025" };
const imgBatteryEnd = { uri: "https://www.figma.com/api/mcp/asset/9f2466a1-3477-45a8-b166-85e9c488e157" };
const imgFill = { uri: "https://www.figma.com/api/mcp/asset/20233499-b750-428e-955b-f81bd4f4bdeb" };
const imgFrame1341 = { uri: "https://www.figma.com/api/mcp/asset/ab4cbe23-9282-425f-bd17-57021cea5508" };
const imgMaterialSymbolsLightNotificationsUnreadOutlineRounded = { uri: "https://www.figma.com/api/mcp/asset/9e5aea82-30b2-492d-a060-31d596bc74e7" };
const imgWifi = { uri: "https://www.figma.com/api/mcp/asset/995f6e0d-5253-441d-8e87-7bf29dee767d" };
const imgIconMobileSignal = { uri: "https://www.figma.com/api/mcp/asset/80b436be-0464-4030-94d9-e7910563ea35" };
const imgMdiAirplane = { uri: "https://www.figma.com/api/mcp/asset/4b6a004a-6415-4ee5-b2e2-2e4dab06a439" };
const imgBiFire = { uri: "https://www.figma.com/api/mcp/asset/1c556726-1fa2-4a87-a920-b0f2a253463d" };
const imgMingcuteTrendingUpLine = { uri: "https://www.figma.com/api/mcp/asset/8431cada-2667-416c-b636-a7f4c2864a5b" };
const imgFluentWeatherRainShowersDay24Regular = { uri: "https://www.figma.com/api/mcp/asset/f5258e27-4b1d-4f03-b7b3-20971b88ceb8" };
const imgGroup = { uri: "https://www.figma.com/api/mcp/asset/e4cf7785-d616-424a-983d-71e7b94fe197" };
const imgCircle = { uri: "https://www.figma.com/api/mcp/asset/0f20540e-8cf1-4d0a-a03e-1345d21d420b" };
const imgArrowArrowLeftMd = { uri: "https://www.figma.com/api/mcp/asset/27a3ee65-d5ba-41b1-88ce-b8768136b67e" };
const imgFluentPeopleCommunity12Filled = { uri: "https://www.figma.com/api/mcp/asset/c65616ab-9120-4d16-9407-3990a5deaa20" };
const imgArrowArrowLeftMd1 = { uri: "https://www.figma.com/api/mcp/asset/99edea97-4434-47e1-8bb6-e7bef44aa2b0" };

type StatusBarBatteryProps = {
  style?: any;
};

function StatusBarBattery({ style }: StatusBarBatteryProps) {
  return (
    <View style={style}>
      <View style={styles.newuserhomeBatteryOutline}>
        <Image source={imgOutline} style={styles.newuserhomeBatteryOutlineImg} />
      </View>
      <View style={styles.newuserhomeBatteryEnd}>
        <Image source={imgBatteryEnd} style={styles.newuserhomeBatteryEndImg} />
      </View>
      <View style={styles.newuserhomeBatteryFill}>
        <Image source={imgFill} style={styles.newuserhomeBatteryFillImg} />
      </View>
    </View>
  );
}

type FollowButtonProps = {
  style?: any;
};

function FollowButton({ style }: FollowButtonProps) {
  return (
    <View style={[styles.newuserhomeFollowButton, style]}>
      <Text style={styles.newuserhomeFollowButtonText}>Follow</Text>
    </View>
  );
}

export default function NewUserHome() {
  return (
    <View style={styles.newuserhomeContainer}>
      {/* Bottom background image */}
      <View style={styles.newuserhomeBottomBg}>
        <View style={styles.newuserhomeBottomBgOverlay}>
          <Image source={imgWhatsAppImage20251104At140830Ee24Dbf33} style={styles.newuserhomeBottomBgImg} />
        </View>
      </View>

      {/* Header with gradient */}
      <LinearGradient
        colors={['#19a3f7', '#46bbfb', '#ffffff']}
        locations={[0, 0.32697, 1]}
        style={styles.newuserhomeHeader}
      >
        <View style={styles.newuserhomeHeaderContent}>
          <View style={styles.newuserhomeLogoSection}>
            <View style={styles.newuserhomeLogoIconWrapper}>
              <View style={styles.newuserhomeLogoIconInner}>
                <View style={styles.newuserhomeLogoIcon}>
                  <Image source={imgFrame1341} style={styles.newuserhomeLogoIconImage} />
                </View>
              </View>
            </View>
            <View style={styles.newuserhomeLogoTextWrapper}>
              <Text style={styles.newuserhomeLogoText}>MAVERICK</Text>
            </View>
          </View>
          <View style={styles.newuserhomeHeaderRight}>
            <View style={styles.newuserhomeNotificationIcon}>
              <Image source={imgMaterialSymbolsLightNotificationsUnreadOutlineRounded} style={styles.newuserhomeIconImage} />
            </View>
            <View style={styles.newuserhomeProfileAvatar}>
              <Image source={imgEllipse195} style={styles.newuserhomeProfileAvatarImage} />
            </View>
          </View>
        </View>
        <View style={styles.newuserhomeWelcomeSection}>
          <Text style={styles.newuserhomeWelcomeTitle}>Welcome Sudersan👋</Text>
          <Text style={styles.newuserhomeWelcomeSubtitle}>Your aviation journey, simplified ✈️</Text>
        </View>
      </LinearGradient>

      {/* Status Bar */}
      <View style={styles.newuserhomeStatusBar}>
        <View style={styles.newuserhomeStatusBarLeft}>
          <View style={styles.newuserhomeStatusBarTimeContainer}>
            <Text style={styles.newuserhomeStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.newuserhomeStatusBarRight}>
          <StatusBarBattery style={styles.newuserhomeBatteryContainer} />
          <View style={styles.newuserhomeWifiIcon}>
            <Image source={imgWifi} style={styles.newuserhomeWifiIconImage} />
          </View>
          <View style={styles.newuserhomeMobileSignalIcon}>
            <Image source={imgIconMobileSignal} style={styles.newuserhomeMobileSignalIconImage} />
          </View>
        </View>
      </View>

      {/* Bottom spacer */}
      <View style={styles.newuserhomeBottomSpacer} />

      {/* Main Content */}
      <ScrollView 
        style={styles.newuserhomeScrollView}
        contentContainerStyle={styles.newuserhomeMainContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Today's Overview Section */}
        <View style={styles.newuserhomeTodayOverview}>
          <Text style={styles.newuserhomeSectionTitle}>Today's Overview</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.newuserhomeOverviewCards}
            contentContainerStyle={styles.newuserhomeOverviewCardsContent}
          >
            <View style={[styles.newuserhomeOverviewCard, styles.newuserhomeOverviewCardBlue]}>
              <View style={styles.newuserhomeOverviewCardContent}>
                <View style={[styles.newuserhomeOverviewCardIconBg, styles.newuserhomeOverviewCardIconBgBlue]}>
                  <View style={styles.newuserhomeOverviewCardIcon}>
                    <Image source={imgMdiAirplane} style={styles.newuserhomeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.newuserhomeOverviewCardText}>
                  <Text style={styles.newuserhomeOverviewCardValue}>0</Text>
                  <Text style={styles.newuserhomeOverviewCardLabel}>Total Flight Hours</Text>
                </View>
              </View>
            </View>
            <View style={[styles.newuserhomeOverviewCard, styles.newuserhomeOverviewCardOrange]}>
              <View style={styles.newuserhomeOverviewCardContent}>
                <View style={[styles.newuserhomeOverviewCardIconBg, styles.newuserhomeOverviewCardIconBgOrange]}>
                  <View style={styles.newuserhomeOverviewCardIcon}>
                    <Image source={imgBiFire} style={styles.newuserhomeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.newuserhomeOverviewCardText}>
                  <Text style={styles.newuserhomeOverviewCardValue}>0 Days</Text>
                  <Text style={styles.newuserhomeOverviewCardLabel}>Study Streak</Text>
                </View>
              </View>
            </View>
            <View style={[styles.newuserhomeOverviewCard, styles.newuserhomeOverviewCardPurple]}>
              <View style={styles.newuserhomeOverviewCardContent}>
                <View style={[styles.newuserhomeOverviewCardIconBg, styles.newuserhomeOverviewCardIconBgPurple]}>
                  <View style={styles.newuserhomeOverviewCardIcon}>
                    <Image source={imgMingcuteTrendingUpLine} style={styles.newuserhomeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.newuserhomeOverviewCardText}>
                  <Text style={styles.newuserhomeOverviewCardValue}>0%</Text>
                  <Text style={styles.newuserhomeOverviewCardLabel}>Progress</Text>
                </View>
              </View>
            </View>
            <View style={[styles.newuserhomeOverviewCard, styles.newuserhomeOverviewCardGreen]}>
              <View style={styles.newuserhomeOverviewCardContent}>
                <View style={[styles.newuserhomeOverviewCardIconBg, styles.newuserhomeOverviewCardIconBgGreen]}>
                  <View style={styles.newuserhomeOverviewCardIcon}>
                    <Image source={imgFluentWeatherRainShowersDay24Regular} style={styles.newuserhomeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.newuserhomeOverviewCardText}>
                  <Text style={styles.newuserhomeOverviewCardValue}>18°C</Text>
                  <Text style={styles.newuserhomeOverviewCardLabel}>KJFK →VFR</Text>
                </View>
              </View>
            </View>
            <View style={[styles.newuserhomeOverviewCard, styles.newuserhomeOverviewCardIndigo]}>
              <View style={styles.newuserhomeOverviewCardContent}>
                <View style={[styles.newuserhomeOverviewCardIconBg, styles.newuserhomeOverviewCardIconBgIndigo]}>
                  <View style={styles.newuserhomeOverviewCardIcon}>
                    <View style={styles.newuserhomeWindIconGroup}>
                      <Image source={imgGroup} style={styles.newuserhomeWindIconGroupImage} />
                    </View>
                  </View>
                </View>
                <View style={styles.newuserhomeOverviewCardText}>
                  <Text style={styles.newuserhomeOverviewCardValue}>10 Mph</Text>
                  <Text style={styles.newuserhomeOverviewCardLabel}>East South Side</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* On Your Learning Path Section */}
        <View style={styles.newuserhomeLearningPath}>
          <Text style={styles.newuserhomeSectionTitle}>On Your Learning Path</Text>
          <View style={styles.newuserhomeLearningCard}>
            <View style={styles.newuserhomeLearningCardHeader}>
              <View style={styles.newuserhomeLearningCardTitleSection}>
                <Text style={styles.newuserhomeLearningCardTitle}>Air Meteorology</Text>
                <Text style={styles.newuserhomeLearningCardSubtitle}>Start your learning for CPL</Text>
              </View>
              <View style={styles.newuserhomeProgressCircleWrapper}>
                <Text style={styles.newuserhomeProgressPercentage}>0%</Text>
                <View style={styles.newuserhomeProgressCircle}>
                  <Image source={imgCircle} style={styles.newuserhomeProgressCircleImage} />
                </View>
              </View>
            </View>
            <View style={styles.newuserhomeLearningCardContent}>
              <Text style={styles.newuserhomeLearningCardPassText}>Pass with 80% +</Text>
              <View style={styles.newuserhomeProgressBarContainer}>
                <View style={styles.newuserhomeProgressBarBg} />
                <View style={styles.newuserhomeProgressBarFill} />
              </View>
              <View style={styles.newuserhomeLearningCardFooter}>
                <View style={styles.newuserhomeFlashcardsTag}>
                  <Text style={styles.newuserhomeFlashcardsTagText}>Flashcards, quiz, etc</Text>
                </View>
                <View style={styles.newuserhomeStartLearning}>
                  <Text style={styles.newuserhomeStartLearningText}>Start Learning</Text>
                  <View style={styles.newuserhomeStartLearningArrow}>
                    <Image source={imgArrowArrowLeftMd} style={styles.newuserhomeStartLearningArrowImage} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Explore Channels Section */}
        <View style={styles.newuserhomeExploreChannels}>
          <View style={styles.newuserhomeExploreChannelsHeader}>
            <Text style={styles.newuserhomeSectionTitle}>Explore Channels</Text>
            <Text style={styles.newuserhomeSeeAll}>See All</Text>
          </View>
          <View style={styles.newuserhomeChannelCard}>
            <View style={styles.newuserhomeChannelCardContent}>
              <View style={styles.newuserhomeChannelAvatar}>
                <Image source={imgImage} style={styles.newuserhomeChannelAvatarImage} />
              </View>
              <View style={styles.newuserhomeChannelInfo}>
                <Text style={styles.newuserhomeChannelName}>Airman Support</Text>
                <View style={styles.newuserhomeChannelFollowers}>
                  <View style={styles.newuserhomeChannelFollowersIcon}>
                    <Image source={imgFluentPeopleCommunity12Filled} style={styles.newuserhomeChannelFollowersIconImage} />
                  </View>
                  <Text style={styles.newuserhomeChannelFollowersText}>100K followers</Text>
                </View>
              </View>
              <FollowButton style={styles.newuserhomeFollowButton} />
            </View>
          </View>
          <View style={styles.newuserhomeChannelCard}>
            <View style={styles.newuserhomeChannelCardContent}>
              <View style={styles.newuserhomeChannelAvatar}>
                <Image source={imgImage1} style={styles.newuserhomeChannelAvatarImage} />
              </View>
              <View style={styles.newuserhomeChannelInfo}>
                <Text style={styles.newuserhomeChannelName}>Jetstream</Text>
                <View style={styles.newuserhomeChannelFollowers}>
                  <View style={styles.newuserhomeChannelFollowersIcon}>
                    <Image source={imgFluentPeopleCommunity12Filled} style={styles.newuserhomeChannelFollowersIconImage} />
                  </View>
                  <Text style={styles.newuserhomeChannelFollowersText}>100K followers</Text>
                </View>
              </View>
              <FollowButton style={styles.newuserhomeFollowButton} />
            </View>
          </View>
        </View>

        {/* Recent Logs Section */}
        <View style={styles.newuserhomeRecentLogs}>
          <View style={styles.newuserhomeRecentLogsHeader}>
            <Text style={styles.newuserhomeSectionTitle}>Recent Logs</Text>
            <Text style={styles.newuserhomeSeeAll}>See All</Text>
          </View>
          <View style={styles.newuserhomeNoLogsCard}>
            <View style={styles.newuserhomeNoLogsContent}>
              <Text style={styles.newuserhomeNoLogsText}>No Logs Yet </Text>
              <View style={styles.newuserhomeStartAddingLogs}>
                <Text style={styles.newuserhomeStartAddingLogsText}>Start adding your logs </Text>
                <View style={styles.newuserhomeStartAddingLogsArrow}>
                  <Image source={imgArrowArrowLeftMd1} style={styles.newuserhomeStartAddingLogsArrowImage} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  newuserhomeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: APP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  newuserhomeBottomBg: {
    position: 'absolute',
    bottom: 0,
    left: (APP_WIDTH - 430) / 2,
    width: 430,
    height: 63,
    overflow: 'hidden',
  },
  newuserhomeBottomBgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  newuserhomeBottomBgImg: {
    position: 'absolute',
    height: 1479.37 * 63 / 100,
    left: -0.59 * 430 / 100,
    top: -1379.37 * 63 / 100,
    width: 100.71 * 430 / 100,
  },
  newuserhomeHeader: {
    position: 'absolute',
    height: 225,
    left: 0,
    top: 0,
    width: 430,
    overflow: 'hidden',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  newuserhomeHeaderContent: {
    position: 'absolute',
    left: (APP_WIDTH - 381) / 2,
    top: 78,
    width: 381,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  newuserhomeLogoSection: {
    flexDirection: 'row',
    gap: 3.435,
    alignItems: 'center',
  },
  newuserhomeLogoIconWrapper: {
    height: 22.26,
    width: 24.349,
    overflow: 'hidden',
  },
  newuserhomeLogoIconInner: {
    position: 'absolute',
    height: 19.715,
    left: 0,
    top: 0.38,
    width: 24.349,
  },
  newuserhomeLogoIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  newuserhomeLogoIconImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeLogoTextWrapper: {
    height: 14.054,
    width: 103.063,
  },
  newuserhomeLogoText: {
    position: 'absolute',
    left: 103.063 / 2,
    top: 7.09,
    transform: [{ translateX: -103.063 / 2 }, { translateY: -7.09 }],
    fontFamily: 'Rany',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 19.283,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.1928,
  },
  newuserhomeHeaderRight: {
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  newuserhomeNotificationIcon: {
    width: 26,
    height: 26,
  },
  newuserhomeIconImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeProfileAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    overflow: 'hidden',
  },
  newuserhomeProfileAvatarImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeWelcomeSection: {
    position: 'absolute',
    left: 25,
    top: 139,
    width: 242,
    flexDirection: 'column',
    gap: 11,
    alignItems: 'flex-start',
  },
  newuserhomeWelcomeTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  newuserhomeWelcomeSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.16,
  },
  newuserhomeStatusBar: {
    position: 'absolute',
    height: 47,
    left: 0,
    top: 0,
    width: 430,
    overflow: 'hidden',
  },
  newuserhomeStatusBarLeft: {
    position: 'absolute',
    left: (APP_WIDTH - 316) / 2,
    top: 14,
  },
  newuserhomeStatusBarTimeContainer: {
    position: 'absolute',
    height: 21,
    left: 0,
    borderRadius: 24,
    top: 0,
    width: 54,
  },
  newuserhomeStatusBarTime: {
    position: 'absolute',
    fontFamily: 'SF Pro Text',
    height: 20,
    lineHeight: 21,
    left: 27,
    fontWeight: '600',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    top: 1,
    letterSpacing: -0.32,
    transform: [{ translateX: -27 }],
    width: 54,
  },
  newuserhomeStatusBarRight: {
    position: 'absolute',
    left: (APP_WIDTH + 291.4) / 2,
    top: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newuserhomeBatteryContainer: {
    position: 'absolute',
    height: 13,
    left: 170.7,
    top: 0,
    width: 27.401,
  },
  newuserhomeBatteryOutline: {
    position: 'absolute',
    height: 13,
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
  },
  newuserhomeBatteryOutlineImg: {
    width: '100%',
    height: '100%',
  },
  newuserhomeBatteryEnd: {
    position: 'absolute',
    height: 4.22,
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
  },
  newuserhomeBatteryEndImg: {
    width: '100%',
    height: '100%',
  },
  newuserhomeBatteryFill: {
    position: 'absolute',
    height: 9,
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
  },
  newuserhomeBatteryFillImg: {
    width: '100%',
    height: '100%',
  },
  newuserhomeWifiIcon: {
    position: 'absolute',
    height: 11.834,
    left: 141.5,
    top: 1,
    width: 17,
  },
  newuserhomeWifiIconImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeMobileSignalIcon: {
    position: 'absolute',
    height: 12,
    left: 116,
    top: 1,
    width: 18,
  },
  newuserhomeMobileSignalIconImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeBottomSpacer: {
    position: 'absolute',
    bottom: 0,
    height: 62,
    left: 0,
    width: 430,
  },
  newuserhomeScrollView: {
    flex: 1,
  },
  newuserhomeMainContent: {
    position: 'relative',
    left: 23,
    top: 239,
    width: 490.659,
    flexDirection: 'column',
    gap: 32,
    alignItems: 'flex-start',
    paddingBottom: 50,
  },
  newuserhomeTodayOverview: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    width: '100%',
  },
  newuserhomeSectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.694,
    color: '#1e1e1e',
    textAlign: 'center',
    letterSpacing: -0.18,
  },
  newuserhomeOverviewCards: {
    width: '100%',
  },
  newuserhomeOverviewCardsContent: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    paddingRight: 16,
  },
  newuserhomeOverviewCard: {
    backgroundColor: '#eff6ff',
    borderWidth: 0.733,
    borderColor: '#dbeafe',
    borderRadius: 10.258,
    padding: 11.724,
    alignItems: 'center',
    overflow: 'hidden',
  },
  newuserhomeOverviewCardBlue: {
    backgroundColor: '#eff6ff',
    borderColor: '#dbeafe',
  },
  newuserhomeOverviewCardOrange: {
    backgroundColor: '#fff7e6',
    borderColor: '#fef1d6',
  },
  newuserhomeOverviewCardPurple: {
    backgroundColor: '#f5eeff',
    borderColor: '#e1e7ff',
    height: 83.55,
  },
  newuserhomeOverviewCardGreen: {
    backgroundColor: '#f0fdfa',
    borderColor: '#d0fff4',
    height: 83.55,
  },
  newuserhomeOverviewCardIndigo: {
    backgroundColor: '#eef2ff',
    borderColor: '#d6ecfe',
    height: 83.55,
  },
  newuserhomeOverviewCardContent: {
    flexDirection: 'column',
    gap: 11.724,
    alignItems: 'center',
    width: 57.885,
  },
  newuserhomeOverviewCardIconBg: {
    backgroundColor: '#dbeafe',
    borderRadius: 13.189,
    padding: 4.396,
    width: 26.378,
    height: 26.378,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newuserhomeOverviewCardIconBgBlue: {
    backgroundColor: '#dbeafe',
  },
  newuserhomeOverviewCardIconBgOrange: {
    backgroundColor: '#fbe9cd',
  },
  newuserhomeOverviewCardIconBgPurple: {
    backgroundColor: '#eee0ff',
  },
  newuserhomeOverviewCardIconBgGreen: {
    backgroundColor: '#ccfbf1',
  },
  newuserhomeOverviewCardIconBgIndigo: {
    backgroundColor: '#e0e7ff',
  },
  newuserhomeOverviewCardIcon: {
    width: 17.585,
    height: 17.585,
  },
  newuserhomeOverviewCardIconImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeWindIconGroup: {
    overflow: 'hidden',
    width: 17.59,
    height: 17.59,
  },
  newuserhomeWindIconGroupImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeOverviewCardText: {
    flexDirection: 'column',
    gap: 6,
    alignItems: 'center',
    width: '100%',
  },
  newuserhomeOverviewCardValue: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14.654,
    lineHeight: 8.952,
    color: '#000000',
    textAlign: 'center',
  },
  newuserhomeOverviewCardLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 6.674,
    color: '#000000',
    textAlign: 'center',
  },
  newuserhomeLearningPath: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 381,
  },
  newuserhomeLearningCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 14.648,
    paddingVertical: 22,
    paddingHorizontal: 18,
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
    overflow: 'hidden',
    height: 161,
    width: '100%',
  },
  newuserhomeLearningCardHeader: {
    flexDirection: 'row',
    gap: 117,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  newuserhomeLearningCardTitleSection: {
    flexDirection: 'column',
    height: 39,
    gap: 4,
    alignItems: 'flex-start',
    width: 189,
  },
  newuserhomeLearningCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 4,
    color: '#000000',
    marginBottom: 16,
  },
  newuserhomeLearningCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 4,
    color: '#000000',
  },
  newuserhomeProgressCircleWrapper: {
    position: 'relative',
    width: 36,
    height: 36,
  },
  newuserhomeProgressPercentage: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 8,
    color: '#464646',
    textAlign: 'center',
    left: 11.26,
    top: 18.82,
    transform: [{ translateY: -9.41 }],
  },
  newuserhomeProgressCircle: {
    position: 'absolute',
    width: 36,
    height: 36,
    left: 0,
    top: 0,
  },
  newuserhomeProgressCircleImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeLearningCardContent: {
    flexDirection: 'column',
    gap: 24,
    alignItems: 'flex-start',
    width: '100%',
  },
  newuserhomeLearningCardPassText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#000000',
  },
  newuserhomeProgressBarContainer: {
    position: 'relative',
    width: 344,
    height: 10,
  },
  newuserhomeProgressBarBg: {
    position: 'absolute',
    backgroundColor: '#e5e7eb',
    height: 10,
    left: 0,
    borderRadius: 100,
    top: 0,
    width: 344,
  },
  newuserhomeProgressBarFill: {
    position: 'absolute',
    height: 10,
    left: 1,
    top: 0.45,
    width: 0,
    backgroundColor: '#118bd7',
    borderRadius: 100,
  },
  newuserhomeLearningCardFooter: {
    flexDirection: 'row',
    gap: 127,
    alignItems: 'center',
    width: '100%',
  },
  newuserhomeFlashcardsTag: {
    backgroundColor: '#ceecff',
    borderWidth: 0.809,
    borderColor: '#c4eeff',
    borderRadius: 14.555,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newuserhomeFlashcardsTagText: {
    fontFamily: 'Helvetica Neue',
    lineHeight: 11.32,
    fontWeight: '500',
    fontSize: 10,
    color: '#168aad',
  },
  newuserhomeStartLearning: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newuserhomeStartLearningText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#000000',
  },
  newuserhomeStartLearningArrow: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
  },
  newuserhomeStartLearningArrowImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeExploreChannels: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 381,
  },
  newuserhomeExploreChannelsHeader: {
    flexDirection: 'row',
    gap: 194,
    alignItems: 'center',
    width: '100%',
  },
  newuserhomeSeeAll: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
  },
  newuserhomeChannelCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 14.648,
    paddingVertical: 15,
    paddingHorizontal: 18,
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    width: '100%',
  },
  newuserhomeChannelCardContent: {
    flexDirection: 'row',
    gap: 12.769,
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    width: 345,
  },
  newuserhomeChannelAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  newuserhomeChannelAvatarImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeChannelInfo: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
  },
  newuserhomeChannelName: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    height: 18,
    fontSize: 16,
    lineHeight: 21.281,
    color: '#000000',
  },
  newuserhomeChannelFollowers: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
  newuserhomeChannelFollowersIcon: {
    width: 16,
    height: 16,
  },
  newuserhomeChannelFollowersIconImage: {
    width: '100%',
    height: '100%',
  },
  newuserhomeChannelFollowersText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 14,
    color: '#373737',
    width: 268.145,
  },
  newuserhomeFollowButton: {
    backgroundColor: '#168aad',
    height: 24.868,
    overflow: 'hidden',
    borderRadius: 46.053,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newuserhomeFollowButtonText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
  newuserhomeRecentLogs: {
    flexDirection: 'column',
    gap: 15,
    alignItems: 'flex-start',
    width: 381,
  },
  newuserhomeRecentLogsHeader: {
    flexDirection: 'row',
    gap: 233,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  newuserhomeNoLogsCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 14.648,
    paddingVertical: 24,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  newuserhomeNoLogsContent: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    width: 141,
    alignSelf: 'center',
  },
  newuserhomeNoLogsText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 15.051,
    color: '#000000',
  },
  newuserhomeStartAddingLogs: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
  },
  newuserhomeStartAddingLogsText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.051,
    color: '#168aad',
  },
  newuserhomeStartAddingLogsArrow: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
  },
  newuserhomeStartAddingLogsArrowImage: {
    width: '100%',
    height: '100%',
  },
});






