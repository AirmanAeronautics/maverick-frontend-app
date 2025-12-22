// DO NOT MODIFY OTHER FILES — home SCREEN ONLY
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

// Image assets from local files
const imgEllipse195 = require('../assets/home-icons/imgEllipse195.png');
const imgFrame1341 = require('../assets/home-icons/imgFrame1341.svg');
const imgMavLogo = require('../assets/home-icons/mav-logo.png');
const imgMaterialSymbolsLightNotificationsUnreadOutlineRounded = require('../assets/home-icons/imgMaterialSymbolsLightNotificationsUnreadOutlineRounded.svg');
const imgMdiAirplane = require('../assets/home-icons/imgMdiAirplane.svg');
const imgBiFire = require('../assets/home-icons/imgBiFire.svg');
const imgMingcuteTrendingUpLine = require('../assets/home-icons/imgMingcuteTrendingUpLine.svg');
const imgFluentWeatherRainShowersDay24Regular = require('../assets/home-icons/imgFluentWeatherRainShowersDay24Regular.svg');
const imgGroup = require('../assets/home-icons/imgGroup.svg');
const imgCircle = require('../assets/home-icons/imgCircle.svg');
const imgArrowArrowLeftMd = require('../assets/home-icons/imgArrowArrowLeftMd.svg');
const imgBasilEditOutline = require('../assets/home-icons/imgBasilEditOutline.svg');
const imgFluentDelete16Regular = require('../assets/home-icons/imgFluentDelete16Regular.svg');
const imgProiconsAirplane = require('../assets/home-icons/imgProiconsAirplane.svg');
const imgThin = require('../assets/home-icons/imgThin.svg');
const imgLine733 = require('../assets/home-icons/imgLine733.svg');
const imgLine = require('../assets/home-icons/Line.png');

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      {/* Header with gradient */}
      <LinearGradient
        colors={['#19a3f7', '#46bbfb', '#ffffff']}
        locations={[0, 0.32697, 1]}
        style={styles.homeHeader}
      >
        <View style={styles.homeHeaderContent}>
          <View style={styles.homeLogoSection}>
            <View style={styles.homeLogoIconWrapper}>
              <View style={styles.homeLogoIconInner}>
                <View style={styles.homeLogoIcon}>
                  <Image source={imgMavLogo} style={styles.homeLogoIconImage} />
                </View>
              </View>
            </View>
            <View style={styles.homeLogoTextWrapper}>
              <Text style={styles.homeLogoText}>MAVERICK</Text>
            </View>
          </View>
          <View style={styles.homeHeaderRight}>
            <View style={styles.homeNotificationIcon}>
              <Image source={imgMaterialSymbolsLightNotificationsUnreadOutlineRounded} style={styles.homeIconImage} />
            </View>
            <View style={styles.homeProfileAvatar}>
              <Image source={imgEllipse195} style={styles.homeProfileAvatarImage} />
            </View>
          </View>
        </View>
        <View style={styles.homeWelcomeSection}>
          <Text style={styles.homeWelcomeTitle}>Welcome Sudersan👋</Text>
          <Text style={styles.homeWelcomeSubtitle}>Your aviation journey, simplified ✈️</Text>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView 
        style={styles.homeScrollView}
        contentContainerStyle={styles.homeMainContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Today's Overview Section */}
        <View style={styles.homeTodayOverview}>
          <Text style={styles.homeSectionTitle}>Today's Overview</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.homeOverviewCards}
            contentContainerStyle={styles.homeOverviewCardsContent}
          >
            <View style={[styles.homeOverviewCard, styles.homeOverviewCardBlue]}>
              <View style={styles.homeOverviewCardContent}>
                <View style={[styles.homeOverviewCardIconBg, styles.homeOverviewCardIconBgBlue]}>
                  <View style={styles.homeOverviewCardIcon}>
                    <Image source={imgMdiAirplane} style={styles.homeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.homeOverviewCardText}>
                  <Text style={styles.homeOverviewCardValue}>1250</Text>
                  <Text style={styles.homeOverviewCardLabel}>Total Flight Hours</Text>
                </View>
              </View>
            </View>
            <View style={[styles.homeOverviewCard, styles.homeOverviewCardOrange]}>
              <View style={styles.homeOverviewCardContent}>
                <View style={[styles.homeOverviewCardIconBg, styles.homeOverviewCardIconBgOrange]}>
                  <View style={styles.homeOverviewCardIcon}>
                    <Image source={imgBiFire} style={styles.homeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.homeOverviewCardText}>
                  <Text style={styles.homeOverviewCardValue}>7 Days</Text>
                  <Text style={styles.homeOverviewCardLabel}>Study Streak</Text>
                </View>
              </View>
            </View>
            <View style={[styles.homeOverviewCard, styles.homeOverviewCardPurple]}>
              <View style={styles.homeOverviewCardContent}>
                <View style={[styles.homeOverviewCardIconBg, styles.homeOverviewCardIconBgPurple]}>
                  <View style={styles.homeOverviewCardIcon}>
                    <Image source={imgMingcuteTrendingUpLine} style={styles.homeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.homeOverviewCardText}>
                  <Text style={styles.homeOverviewCardValue}>23%</Text>
                  <Text style={styles.homeOverviewCardLabel}>Progress</Text>
                </View>
              </View>
            </View>
            <View style={[styles.homeOverviewCard, styles.homeOverviewCardGreen]}>
              <View style={styles.homeOverviewCardContent}>
                <View style={[styles.homeOverviewCardIconBg, styles.homeOverviewCardIconBgGreen]}>
                  <View style={styles.homeOverviewCardIcon}>
                    <Image source={imgFluentWeatherRainShowersDay24Regular} style={styles.homeOverviewCardIconImage} />
                  </View>
                </View>
                <View style={styles.homeOverviewCardText}>
                  <Text style={styles.homeOverviewCardValue}>18°C</Text>
                  <Text style={styles.homeOverviewCardLabel}>KJFK →VFR</Text>
                </View>
              </View>
            </View>
            <View style={[styles.homeOverviewCard, styles.homeOverviewCardBlueLast]}>
              <View style={styles.homeOverviewCardContent}>
                <View style={[styles.homeOverviewCardIconBg, styles.homeOverviewCardIconBgBlueLast]}>
                  <View style={[styles.homeOverviewCardIcon, styles.homeOverviewCardIconWind]}>
                    <View style={styles.homeOverviewCardIconInner}>
                      <View style={styles.homeOverviewCardIconInner2}>
                        <Image source={imgGroup} style={styles.homeOverviewCardIconImage} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.homeOverviewCardText}>
                  <Text style={styles.homeOverviewCardValue}>10 Mph</Text>
                  <Text style={styles.homeOverviewCardLabel}>East South Side</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* On Your Learning Path Section */}
        <View style={styles.homeLearningPath}>
          <Text style={styles.homeSectionTitle}>On Your Learning Path</Text>
          <View style={styles.homeLearningCard}>
            <View style={styles.homeLearningCardHeader}>
              <View style={styles.homeLearningCardText}>
                <Text style={styles.homeLearningCardTitle}>Air Meteorology</Text>
                <Text style={styles.homeLearningCardSubtitle}>Continue your learning for CPL</Text>
              </View>
              <View style={styles.homeProgressCircleWrapper}>
                <View style={styles.homeProgressCircle}>
                  <Image source={imgCircle} style={styles.homeProgressCircleImage} />
                </View>
                <View style={styles.homeProgressPercentageWrapper}>
                  <Text style={styles.homeProgressPercentage}>67%</Text>
                </View>
              </View>
            </View>
            <View style={styles.homeLearningCardBody}>
              <View style={styles.homeProgressSection}>
                <Text style={styles.homeLearningGoal}>Pass with 80% +</Text>
                <View style={styles.homeProgressBarContainer}>
                  <View style={styles.homeProgressBarTrack} />
                  <View style={styles.homeProgressBarFill} />
                </View>
              </View>
              <View style={styles.homeLearningCardFooter}>
                <View style={styles.homeRemainingTag}>
                  <Text style={styles.homeRemainingTagText}>2 Weeks Remaining</Text>
                </View>
                <View style={styles.homeContinueLearning}>
                  <Text style={styles.homeContinueLearningText}>Continue Learning</Text>
                  <View style={styles.homeContinueLearningArrow}>
                    <Image 
                      source={imgArrowArrowLeftMd} 
                      style={[styles.homeContinueLearningArrowIcon, { transform: [{ rotate: '180deg' }, { scaleY: -1 }] }]} 
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Logs Section */}
        <View style={styles.homeRecentLogs}>
          <View style={styles.homeRecentLogsHeader}>
            <Text style={styles.homeRecentLogsTitle}>Recent Logs</Text>
            <Text style={styles.homeSeeAll}>See All</Text>
          </View>
          <View style={styles.homeLogCard}>
            <View style={styles.homeLogCardActions}>
              <View style={styles.homeLogActionIcon}>
                <Image source={imgBasilEditOutline} style={styles.homeLogActionIconImage} />
              </View>
              <View style={styles.homeLogActionIcon}>
                <Image source={imgFluentDelete16Regular} style={styles.homeLogActionIconImage} />
              </View>
            </View>
            <View style={styles.homeLogCardContent}>
              <View style={styles.homeLogHeader}>
                <Text style={styles.homeLogDuration}>6 Hours</Text>
                <View style={styles.homeLogAircraft}>
                  <View style={styles.homeLogAircraftIcon}>
                    <Image source={imgProiconsAirplane} style={styles.homeLogAircraftIconImage} />
                  </View>
                  <Text style={styles.homeLogAircraftText}>Registration of Aircraft</Text>
                </View>
              </View>
              <View style={styles.homeLogDivider}>
                <Image source={imgThin} style={styles.homeLogDividerImage} />
              </View>
              <View style={styles.homeLogFlightInfo}>
                <View style={styles.homeLogDeparture}>
                  <Text style={styles.homeLogDepartureCode}>MGM</Text>
                  <Text style={styles.homeLogDepartureDate}>Wed, 02/02/2025</Text>
                </View>
                <View style={styles.homeLogFlightTags}>
                  <View style={styles.homeLogTagTraining}>
                    <Text style={styles.homeLogTagTrainingText}>Training</Text>
                  </View>
                  <View style={styles.homeLogTagArrow}>
                    <Image source={imgLine} style={styles.homeLogTagArrowImage} />
                  </View>
                  <View style={styles.homeLogTagIfr}>
                    <Text style={styles.homeLogTagIfrText}>IFR</Text>
                  </View>
                </View>
                <View style={styles.homeLogDestination}>
                  <Text style={styles.homeLogDestinationCode}>VGP</Text>
                  <Text style={styles.homeLogDestinationDate}>Wed, 02/02/2025</Text>
                </View>
                <View style={styles.homeLogArrowLine}>
                  <Image source={imgLine733} style={styles.homeLogArrowLineImage} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.homeLogCard}>
            <View style={[styles.homeLogCardActions, styles.homeLogCardActionsSecond]}>
              <View style={styles.homeLogActionIcon}>
                <Image source={imgBasilEditOutline} style={styles.homeLogActionIconImage} />
              </View>
              <View style={styles.homeLogActionIcon}>
                <Image source={imgFluentDelete16Regular} style={styles.homeLogActionIconImage} />
              </View>
            </View>
            <View style={styles.homeLogCardContent}>
              <View style={styles.homeLogHeader}>
                <Text style={styles.homeLogDuration}>6 Hours</Text>
                <View style={styles.homeLogAircraft}>
                  <View style={styles.homeLogAircraftIcon}>
                    <Image source={imgProiconsAirplane} style={styles.homeLogAircraftIconImage} />
                  </View>
                  <Text style={styles.homeLogAircraftText}>Registration of Aircraft</Text>
                </View>
              </View>
              <View style={styles.homeLogDivider}>
                <Image source={imgThin} style={styles.homeLogDividerImage} />
              </View>
              <View style={styles.homeLogFlightInfo}>
                <View style={styles.homeLogDeparture}>
                  <Text style={styles.homeLogDepartureCode}>MGM</Text>
                  <Text style={styles.homeLogDepartureDate}>Wed, 02/02/2025</Text>
                </View>
                <View style={styles.homeLogFlightTags}>
                  <View style={styles.homeLogTagTraining}>
                    <Text style={styles.homeLogTagTrainingText}>Training</Text>
                  </View>
                  <View style={styles.homeLogTagArrow}>
                    <Image source={imgLine} style={styles.homeLogTagArrowImage} />
                  </View>
                  <View style={styles.homeLogTagIfr}>
                    <Text style={styles.homeLogTagIfrText}>IFR</Text>
                  </View>
                </View>
                <View style={styles.homeLogDestination}>
                  <Text style={styles.homeLogDestinationCode}>VGP</Text>
                  <Text style={styles.homeLogDestinationDate}>Wed, 02/02/2025</Text>
                </View>
                <View style={styles.homeLogArrowLine}>
                  <Image source={imgLine733} style={styles.homeLogArrowLineImage} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: APP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  homeHeader: {
    position: 'absolute',
    height: 225,
    left: 0,
    top: 0,
    width: 430,
    overflow: 'hidden',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  homeHeaderContent: {
    position: 'absolute',
    left: (APP_WIDTH - 381) / 2,
    top: 78,
    width: 381,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  homeLogoSection: {
    flexDirection: 'row',
    gap: 3.435,
    alignItems: 'center',
    flexShrink: 0,
  },
  homeLogoIconWrapper: {
    height: 22.26,
    width: 24.349,
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
  },
  homeLogoIconInner: {
    position: 'absolute',
    height: 19.715,
    left: 0,
    top: 0.38,
    width: 24.349,
  },
  homeLogoIcon: {
    position: 'absolute',
    inset: 0,
  },
  homeLogoIconImage: {
    width: '100%',
    height: '100%',
  },
  homeLogoTextWrapper: {
    height: 14.054,
    width: 103.063,
    position: 'relative',
    flexShrink: 0,
  },
  homeLogoText: {
    position: 'absolute',
    left: (103.063 - 100) / 2,
    top: 0,
    fontFamily: 'Rany',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 19.283,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.1928,
  },
  homeHeaderRight: {
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexShrink: 0,
  },
  homeNotificationIcon: {
    width: 26,
    height: 26,
    flexShrink: 0,
    position: 'relative',
  },
  homeIconImage: {
    width: '100%',
    height: '100%',
  },
  homeProfileAvatar: {
    width: 26,
    height: 26,
    flexShrink: 0,
    position: 'relative',
  },
  homeProfileAvatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
  },
  homeWelcomeSection: {
    position: 'absolute',
    left: 25,
    top: 139,
    width: 242,
    flexDirection: 'column',
    gap: 11,
    alignItems: 'flex-start',
  },
  homeWelcomeTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'left',
    letterSpacing: -0.24,
    width: 236,
  },
  homeWelcomeSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'left',
    letterSpacing: -0.16,
    minWidth: '100%',
  },
  homeScrollView: {
    flex: 1,
  },
  homeMainContent: {
    marginTop: 239,
    marginLeft: 23,
    width: 490.659,
    flexDirection: 'column',
    gap: 32,
    alignItems: 'flex-start',
    paddingBottom: 100,
  },
  homeTodayOverview: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingRight: 10,
    width: '100%',
    flexShrink: 0,
  },
  homeSectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.694,
    color: '#1e1e1e',
    textAlign: 'center',
    letterSpacing: -0.18,
  },
  homeOverviewCards: {
    width: '100%',
  },
  homeOverviewCardsContent: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  homeOverviewCard: {
    backgroundColor: '#eff6ff',
    borderWidth: 0.733,
    borderColor: '#dbeafe',
    borderRadius: 10.258,
    padding: 11.724,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
  },
  homeOverviewCardBlue: {
    backgroundColor: '#eff6ff',
    borderColor: '#dbeafe',
  },
  homeOverviewCardOrange: {
    backgroundColor: '#fff7e6',
    borderColor: '#fef1d6',
  },
  homeOverviewCardPurple: {
    backgroundColor: '#f5eeff',
    borderColor: '#e1e7ff',
    height: 83.55,
  },
  homeOverviewCardGreen: {
    backgroundColor: '#f0fdfa',
    borderColor: '#d0fff4',
    height: 83.55,
  },
  homeOverviewCardBlueLast: {
    backgroundColor: '#eef2ff',
    borderColor: '#d6ecfe',
    height: 83.55,
  },
  homeOverviewCardContent: {
    flexDirection: 'column',
    gap: 11.724,
    alignItems: 'center',
    width: 57.885,
    flexShrink: 0,
  },
  homeOverviewCardIconBg: {
    backgroundColor: '#dbeafe',
    borderRadius: 13.189,
    padding: 4.396,
    width: 26.378,
    height: 26.378,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },
  homeOverviewCardIconBgBlue: {
    backgroundColor: '#dbeafe',
  },
  homeOverviewCardIconBgOrange: {
    backgroundColor: '#fbe9cd',
  },
  homeOverviewCardIconBgPurple: {
    backgroundColor: '#eee0ff',
  },
  homeOverviewCardIconBgGreen: {
    backgroundColor: '#ccfbf1',
  },
  homeOverviewCardIconBgBlueLast: {
    backgroundColor: '#e0e7ff',
  },
  homeOverviewCardIcon: {
    width: 17.585,
    height: 17.585,
    flexShrink: 0,
    position: 'relative',
  },
  homeOverviewCardIconWind: {
    width: 17.59,
    height: 17.59,
    overflow: 'hidden',
  },
  homeOverviewCardIconInner: {
    position: 'absolute',
    left: '8.33%',
    top: '12.5%',
    right: '8.33%',
    bottom: '12.5%',
  },
  homeOverviewCardIconInner2: {
    position: 'absolute',
    left: '-4.09%',
    top: '-4.55%',
    right: '-4.09%',
    bottom: '-4.55%',
  },
  homeOverviewCardIconImage: {
    width: '100%',
    height: '100%',
  },
  homeOverviewCardText: {
    flexDirection: 'column',
    gap: 6,
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  },
  homeOverviewCardValue: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14.654,
    lineHeight: 8.952,
    color: '#000000',
    textAlign: 'center',
    minWidth: '100%',
  },
  homeOverviewCardLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 6.674,
    color: '#000000',
    textAlign: 'center',
    width: '100%',
    flexShrink: 0,
  },
  homeLearningPath: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 381,
    flexShrink: 0,
  },
  homeLearningCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 14.648,
    paddingVertical: 22,
    paddingHorizontal: 18,
    height: 161,
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
    overflow: 'hidden',
    width: '100%',
    flexShrink: 0,
    position: 'relative',
  },
  homeLearningCardHeader: {
    flexDirection: 'row',
    gap: 102,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  },
  homeLearningCardText: {
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
    height: 39,
    width: 207,
    flexShrink: 0,
  },
  homeLearningCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 4,
    color: '#000000',
    marginBottom: 16,
  },
  homeLearningCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 4,
    color: '#000000',
  },
  homeProgressCircleWrapper: {
    position: 'relative',
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  homeProgressCircle: {
    width: 36,
    height: 36,
    position: 'absolute',
  },
  homeProgressCircleImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  homeProgressPercentageWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeProgressPercentage: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 8,
    color: '#168aad',
  },
  homeLearningCardBody: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  },
  homeProgressSection: {
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  },
  homeLearningGoal: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#000000',
    flexShrink: 0,
  },
  homeProgressBarContainer: {
    position: 'relative',
    width: '100%',
    height: 10,
    flexShrink: 0,
  },
  homeProgressBarTrack: {
    position: 'absolute',
    backgroundColor: '#e5e7eb',
    height: 10,
    left: 0,
    borderRadius: 100,
    top: 0,
    width: 344,
  },
  homeProgressBarFill: {
    position: 'absolute',
    height: 10,
    left: 0.9,
    borderRadius: 100,
    top: 0,
    width: 190.911,
    backgroundColor: '#118bd7',
  },
  homeLearningCardFooter: {
    flexDirection: 'row',
    gap: 107,
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  },
  homeRemainingTag: {
    backgroundColor: '#ceecff',
    borderWidth: 0.809,
    borderColor: '#c4eeff',
    borderRadius: 14.555,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  homeRemainingTagText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 11.32,
    color: '#168aad',
    flexShrink: 0,
  },
  homeContinueLearning: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  homeContinueLearningText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#000000',
    flexShrink: 0,
  },
  homeContinueLearningArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  homeContinueLearningArrowIcon: {
    width: 20,
    height: 20,
  },
  homeRecentLogs: {
    flexDirection: 'column',
    gap: 15,
    alignItems: 'flex-start',
    width: 381,
    flexShrink: 0,
  },
  homeRecentLogsHeader: {
    flexDirection: 'row',
    gap: 233,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  },
  homeRecentLogsTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.694,
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.18,
    flexShrink: 0,
  },
  homeSeeAll: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
    flexShrink: 0,
  },
  homeLogCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 14.648,
    height: 145,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    flexShrink: 0,
    marginBottom: 15,
  },
  homeLogCardActions: {
    position: 'absolute',
    left: 304,
    top: 16,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  homeLogCardActionsSecond: {
    top: 21,
  },
  homeLogActionIcon: {
    width: 20,
    height: 20,
    flexShrink: 0,
    position: 'relative',
  },
  homeLogActionIconImage: {
    width: '100%',
    height: '100%',
  },
  homeLogCardContent: {
    position: 'absolute',
    left: 17,
    top: 21,
    width: 343,
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  homeLogHeader: {
    flexDirection: 'column',
    gap: 6,
    alignItems: 'flex-start',
    width: 141,
    flexShrink: 0,
  },
  homeLogDuration: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 15.051,
    color: '#000000',
    flexShrink: 0,
  },
  homeLogAircraft: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 140,
    flexShrink: 0,
  },
  homeLogAircraftIcon: {
    width: 16,
    height: 16,
    flexShrink: 0,
    position: 'relative',
  },
  homeLogAircraftIconImage: {
    width: '100%',
    height: '100%',
  },
  homeLogAircraftText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.051,
    color: '#4e4e4e',
    flexShrink: 0,
  },
  homeLogDivider: {
    height: 1,
    width: '100%',
    flexShrink: 0,
    position: 'relative',
  },
  homeLogDividerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  homeLogFlightInfo: {
    height: 44,
    width: '100%',
    flexShrink: 0,
    position: 'relative',
  },
  homeLogDeparture: {
    position: 'absolute',
    height: 43,
    left: 0,
    top: 0,
    width: 109,
  },
  homeLogDepartureCode: {
    position: 'absolute',
    left: 0,
    top: -0.28,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.26,
    color: '#27272a',
  },
  homeLogDepartureDate: {
    position: 'absolute',
    left: 0,
    top: 23,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.08,
    color: '#27272a',
  },
  homeLogFlightTags: {
    position: 'absolute',
    height: 6,
    left: (343 - 87) / 2,
    top: 27,
    width: 87,
  },
  homeLogTagTraining: {
    position: 'absolute',
    backgroundColor: '#ceecff',
    borderWidth: 0.679,
    borderColor: '#c4eeff',
    borderRadius: 12.217,
    height: 13.574,
    left: 20,
    paddingVertical: 4.072,
    paddingHorizontal: 8.144,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -26,
  },
  homeLogTagTrainingText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6.787,
    lineHeight: 9.502,
    color: '#272727',
    flexShrink: 0,
  },
  homeLogTagArrow: {
    position: 'absolute',
    left: '50%',
    top: -6.5,
    transform: [{ translateX: -32 }],
    width: 64,
    height: 4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  homeLogTagArrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  homeLogTagIfr: {
    position: 'absolute',
    borderWidth: 0.68,
    borderColor: '#dbdbdb',
    borderRadius: 18,
    height: 13.574,
    left: 22,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -1,
  },
  homeLogTagIfrText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6.787,
    lineHeight: 9.502,
    color: '#272727',
    flexShrink: 0,
  },
  homeLogDestination: {
    position: 'absolute',
    height: 44,
    left: 234,
    top: 0,
    width: 109,
  },
  homeLogDestinationCode: {
    position: 'absolute',
    left: 0,
    top: -0.28,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.26,
    color: '#27272a',
  },
  homeLogDestinationDate: {
    position: 'absolute',
    left: 0,
    top: 23,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.08,
    color: '#27272a',
  },
  homeLogArrowLine: {
    position: 'absolute',
    height: 1,
    left: (343 - 85.02) / 2,
    top: 22,
    width: 85.02,
  },
  homeLogArrowLineImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Home;

