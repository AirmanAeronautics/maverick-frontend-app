// DO NOT MODIFY OTHER FILES — studyways SCREEN ONLY
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

// Local SVG asset
const imgQuizIcon = require('../../hugeicons_quiz-02.svg');

// Image assets from local files
const imgOutline = require('../assets/studyways-assets/imgOutline.png');
const imgBatteryEnd = require('../assets/studyways-assets/imgBatteryEnd.png');
const imgFill = require('../assets/studyways-assets/imgFill.png');
const imgArrowArrowLeftMd = require('../assets/studyways-assets/imgArrowArrowLeftMd.svg');
const imgWifi = require('../assets/studyways-assets/imgWifi.svg');
const imgIconMobileSignal = require('../assets/studyways-assets/imgIconMobileSignal.svg');
const imgGroup = require('../assets/studyways-assets/imgGroup.svg');
const imgBiFire = require('../assets/studyways-assets/imgBiFire.svg');
const imgGroup6851 = require('../assets/studyways-assets/imgGroup6851.svg');
const imgEllipse194 = require('../assets/studyways-assets/imgEllipse194.png');
const imgGroup6851Quiz = require('../assets/studyways-assets/Group6851.svg');
const imgGroup6852 = require('../assets/studyways-assets/imgGroup6852.svg');
const imgIconoirFlashSolid = require('../assets/studyways-assets/imgIconoirFlashSolid.svg');
const imgGroup6853 = require('../assets/studyways-assets/imgGroup6853.svg');
const imgOpenBookVectorSeamlessPatternWithBlackBackground1045893158 = require('../assets/studyways-assets/imgOpenBookPattern1.png');
const imgGeminiGeneratedImage85Qlow85Qlow85QlPhotoroom1 = require('../assets/studyways-assets/imgGeminiPattern.png');
const imgOpenBookVectorSeamlessPatternWithBlackBackground1045893159 = require('../assets/studyways-assets/imgOpenBookPattern2.png');
const imgOpenBookVectorSeamlessPatternWithBlackBackground1045893160 = require('../assets/studyways-assets/imgOpenBookPattern3.png');

type StatusBarBatteryProps = {
  style?: any;
};

function StatusBarBattery({ style }: StatusBarBatteryProps) {
  return (
    <View style={[styles.studywaysBatteryContainer, style]}>
      <View style={styles.studywaysBatteryOutline}>
        <Image source={imgOutline} style={styles.studywaysBatteryOutlineImage} />
      </View>
      <View style={styles.studywaysBatteryEnd}>
        <Image source={imgBatteryEnd} style={styles.studywaysBatteryEndImage} />
      </View>
      <View style={styles.studywaysBatteryFill}>
        <Image source={imgFill} style={styles.studywaysBatteryFillImage} />
      </View>
    </View>
  );
}

export default function StudyWays() {
  return (
    <View style={styles.studywaysContainer}>
      {/* Status Bar */}
      <View style={styles.studywaysStatusBar}>
        <View style={styles.studywaysStatusBarLeft}>
          <View style={styles.studywaysStatusBarTimeContainer}>
            <Text style={styles.studywaysStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.studywaysStatusBarRight}>
          <StatusBarBattery style={styles.studywaysBatteryContainerStyle} />
          <View style={styles.studywaysWifiIcon}>
            <Image source={imgWifi} style={styles.studywaysWifiIconImage} />
          </View>
          <View style={styles.studywaysMobileSignalIcon}>
            <Image source={imgIconMobileSignal} style={styles.studywaysMobileSignalIconImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.studywaysHeader}>
        <View style={styles.studywaysHeaderContent}>
          <View style={styles.studywaysArrowContainer}>
            <Image source={imgArrowArrowLeftMd} style={styles.studywaysArrowImage} />
          </View>
          <View style={styles.studywaysHeaderTextContainer}>
            <Text style={styles.studywaysHeaderText}>Back to Learning</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.studywaysScrollView}
        contentContainerStyle={styles.studywaysContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Air Meteorology Card */}
        <View style={styles.studywaysCard}>
          <View style={styles.studywaysCardContent}>
            <View style={styles.studywaysCardTitleContainer}>
              <Text style={styles.studywaysCardTitle} numberOfLines={1}>Air Meteorolgy</Text>
              <Text style={styles.studywaysCardSubtitle}>Choose and Activity to continue learning</Text>
            </View>
            <View style={styles.studywaysProgressContainer}>
              <View style={styles.studywaysProgressHeader}>
                <Text style={styles.studywaysProgressLabel}>Progress</Text>
                <Text style={styles.studywaysProgressValue}>67%</Text>
              </View>
              <View style={styles.studywaysProgressBarContainer}>
                <View style={styles.studywaysProgressBarTrack} />
                <LinearGradient
                  colors={['#16AD1B', '#FCBE38', '#FAA02A', '#F7AB0E', '#916408']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.studywaysProgressBarFill}
                />
              </View>
            </View>
            <View style={styles.studywaysCardFooter}>
              <View style={styles.studywaysLastActivityContainer}>
                <View style={styles.studywaysClockIcon}>
                  <Image source={imgGroup} style={styles.studywaysClockIconImage} />
                </View>
                <Text style={styles.studywaysLastActivityText}>Last : Today</Text>
              </View>
              <LinearGradient
                colors={['#FCBE38', '#FAA02A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.studywaysStreakBadge}
              >
                <View style={styles.studywaysStreakBadgeContent}>
                  <Image source={imgBiFire} style={styles.studywaysStreakIcon} />
                  <Text style={styles.studywaysStreakText}>7 days</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* Study Statistics Card */}
        <View style={styles.studywaysCard}>
          <View style={styles.studywaysCardContent}>
            <View style={styles.studywaysCardTitleContainer}>
              <Text style={styles.studywaysCardTitle} numberOfLines={1}>Study Statistics</Text>
              <Text style={styles.studywaysCardSubtitle}>Choose and Activity to continue learning</Text>
            </View>
            <View style={styles.studywaysStatsContainer}>
              <View style={styles.studywaysStatItem}>
                <Text style={styles.studywaysStatValue}>47.5h</Text>
                <Text style={styles.studywaysStatLabel}>Total Time</Text>
              </View>
              <View style={styles.studywaysStatItem}>
                <Text style={styles.studywaysStatValue}>32m</Text>
                <Text style={styles.studywaysStatLabel}>Avg Session</Text>
              </View>
              <View style={styles.studywaysStatItem}>
                <Text style={styles.studywaysStatValue}>89</Text>
                <Text style={styles.studywaysStatLabel}>Total Session</Text>
              </View>
              <View style={styles.studywaysStatItem}>
                <Text style={styles.studywaysStatValue}>8.5</Text>
                <Text style={styles.studywaysStatLabel}>This week</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Activity Cards Grid */}
        <View style={styles.studywaysActivityGrid}>
          {/* Study Card */}
          <View style={styles.studywaysActivityCard}>
            <View style={[styles.studywaysActivityCardHeader, styles.studywaysActivityCardHeaderBlue]}>
              <Image 
                source={imgOpenBookVectorSeamlessPatternWithBlackBackground1045893158} 
                style={styles.studywaysActivityCardPattern} 
              />
            </View>
            <View style={styles.studywaysActivityCardIconContainer}>
              <Image source={imgGroup6851} style={styles.studywaysActivityCardIcon} />
            </View>
            <View style={styles.studywaysActivityCardContent}>
              <Text style={styles.studywaysActivityCardTitle}>Study</Text>
              <Text style={styles.studywaysActivityCardDescription}>Interactive Pdf study with AI Assistance</Text>
            </View>
          </View>

          {/* Quiz Card */}
          <View style={styles.studywaysActivityCard}>
            <View style={[styles.studywaysActivityCardHeader, styles.studywaysActivityCardHeaderTeal]}>
              <Image 
                source={imgGeminiGeneratedImage85Qlow85Qlow85QlPhotoroom1} 
                style={styles.studywaysActivityCardPattern} 
              />
            </View>
            <View style={styles.studywaysActivityCardIconContainer}>
              <Image source={imgGroup6851Quiz} style={styles.studywaysActivityCardIcon} />
            </View>
            <View style={styles.studywaysActivityCardContent}>
              <Text style={styles.studywaysActivityCardTitle}>Quiz</Text>
              <Text style={styles.studywaysActivityCardDescription}>Test your Knowledge with quick Questions</Text>
            </View>
          </View>

          {/* Flash Cards Card */}
          <View style={styles.studywaysActivityCard}>
            <View style={[styles.studywaysActivityCardHeader, styles.studywaysActivityCardHeaderPurple]}>
              <Image 
                source={imgOpenBookVectorSeamlessPatternWithBlackBackground1045893159} 
                style={styles.studywaysActivityCardPattern} 
              />
            </View>
            <View style={styles.studywaysActivityCardIconContainer}>
              <Image source={imgGroup6852} style={styles.studywaysActivityCardIcon} />
              <Image source={imgIconoirFlashSolid} style={styles.studywaysActivityCardFlashIcon} />
            </View>
            <View style={styles.studywaysActivityCardContent}>
              <Text style={styles.studywaysActivityCardTitle}>Flash Cards</Text>
              <Text style={[styles.studywaysActivityCardDescription, styles.studywaysFlashCardsDescription]}>
                Review Key{'\n'}concepts and definitions
              </Text>
            </View>
          </View>

          {/* Practice Test Card */}
          <View style={styles.studywaysActivityCard}>
            <View style={[styles.studywaysActivityCardHeader, styles.studywaysActivityCardHeaderDarkPurple]}>
              <Image 
                source={imgOpenBookVectorSeamlessPatternWithBlackBackground1045893160} 
                style={styles.studywaysActivityCardPattern} 
              />
            </View>
            <View style={styles.studywaysActivityCardIconContainer}>
              <Image source={imgGroup6853} style={styles.studywaysActivityCardIcon} />
            </View>
            <View style={styles.studywaysActivityCardContent}>
              <Text style={styles.studywaysActivityCardTitle}>Practice Test</Text>
              <Text style={styles.studywaysActivityCardDescription}>Full exam simulation with scoring</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  studywaysContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  studywaysStatusBar: {
    height: 47,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingTop: 14,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  studywaysStatusBarLeft: {
    position: 'absolute',
    left: '50%',
    marginLeft: -158,
    top: 14,
  },
  studywaysStatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
  },
  studywaysStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
  },
  studywaysStatusBarRight: {
    position: 'absolute',
    left: '50%',
    marginLeft: 145.7,
    top: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  studywaysBatteryContainerStyle: {
    position: 'absolute',
    left: 170.7,
    top: 0,
    marginLeft: -13.7,
  },
  studywaysBatteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  studywaysBatteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    marginTop: -6.5,
    height: 13,
  },
  studywaysBatteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  studywaysBatteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -2.11,
    width: 1.401,
    height: 4.22,
  },
  studywaysBatteryEndImage: {
    width: '100%',
    height: '100%',
  },
  studywaysBatteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    marginTop: -4.5,
    height: 9,
  },
  studywaysBatteryFillImage: {
    width: '100%',
    height: '100%',
  },
  studywaysWifiIcon: {
    position: 'absolute',
    left: 141.5,
    top: 0,
    marginLeft: -8.5,
    width: 17,
    height: 11.834,
  },
  studywaysWifiIconImage: {
    width: '100%',
    height: '100%',
  },
  studywaysMobileSignalIcon: {
    position: 'absolute',
    left: 116,
    top: 0,
    marginLeft: -9,
    width: 18,
    height: 12,
  },
  studywaysMobileSignalIconImage: {
    width: '100%',
    height: '100%',
  },
  studywaysHeader: {
    height: 66.507,
    width: APP_WIDTH,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: '50%',
    marginLeft: -215,
    top: 63,
    justifyContent: 'center',
  },
  studywaysHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 21,
    paddingLeft: 19.93,
  },
  studywaysArrowContainer: {
    width: 27.52,
    height: 27.52,
  },
  studywaysArrowImage: {
    width: '100%',
    height: '100%',
  },
  studywaysHeaderTextContainer: {
    width: 206.4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  studywaysHeaderText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.933,
    color: '#000000',
  },
  studywaysScrollView: {
    flex: 1,
    marginTop: 139,
  },
  studywaysContentContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 24,
    gap: 24,
  },
  studywaysCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 14.648,
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: 380,
  },
  studywaysCardContent: {
    gap: 12,
  },
  studywaysCardTitleContainer: {
    gap: 1,
    width: 181,
  },
  studywaysCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 15.051,
    color: '#000000',
    flexShrink: 0,
  },
  studywaysCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 22.933,
    color: '#272727',
  },
  studywaysProgressContainer: {
    gap: 9.11,
    height: 34.618,
  },
  studywaysProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  studywaysProgressLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 10.932,
    lineHeight: 21.864,
    color: '#000000',
    height: 13,
  },
  studywaysProgressValue: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 10.932,
    lineHeight: 21.864,
    color: '#535353',
    textAlign: 'right',
    height: 13,
  },
  studywaysProgressBarContainer: {
    position: 'relative',
    width: 346.001,
    height: 9.11,
  },
  studywaysProgressBarTrack: {
    position: 'absolute',
    backgroundColor: '#E5E7EB',
    height: 9.11,
    width: 346.001,
    borderRadius: 91.099,
    top: 0,
    left: 0,
  },
  studywaysProgressBarFill: {
    position: 'absolute',
    height: 9.11,
    width: 192.021,
    borderRadius: 91.099,
    top: 0,
    left: -0.09,
  },
  studywaysCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  studywaysLastActivityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  studywaysClockIcon: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
  studywaysClockIconImage: {
    width: '100%',
    height: '100%',
  },
  studywaysLastActivityText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 9.11,
    lineHeight: 14,
    color: '#535353',
  },
  studywaysStreakBadge: {
    borderWidth: 0.526,
    borderColor: '#FEE349',
    height: 12.615,
    borderRadius: 6.308,
    width: 41,
    overflow: 'hidden',
  },
  studywaysStreakBadgeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 6.31,
    gap: 1.05,
  },
  studywaysStreakIcon: {
    width: 6,
    height: 6,
  },
  studywaysStreakText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 6.308,
    lineHeight: 6.422,
    color: '#FFFFFF',
  },
  studywaysStatsContainer: {
    flexDirection: 'row',
    gap: 31,
    marginTop: 10,
  },
  studywaysStatItem: {
    alignItems: 'center',
    gap: 4,
    width: 65,
    flexShrink: 0,
  },
  studywaysStatValue: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 14,
    color: '#168AAD',
    textAlign: 'center',
  },
  studywaysStatLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 14,
    color: '#272727',
    textAlign: 'center',
  },
  studywaysActivityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    width: 380,
  },
  studywaysActivityCard: {
    borderWidth: 2.136,
    borderColor: '#E1E1E1',
    borderRadius: 25.637,
    width: 181.593,
    height: 181.593,
    overflow: 'hidden',
    position: 'relative',
  },
  studywaysActivityCardHeader: {
    position: 'absolute',
    top: -2.14,
    left: '50%',
    marginLeft: -90,
    width: 180,
    height: 69,
    overflow: 'hidden',
  },
  studywaysActivityCardHeaderBlue: {
    backgroundColor: '#0284C7',
  },
  studywaysActivityCardHeaderTeal: {
    backgroundColor: '#0D9488',
    width: 181,
    marginLeft: -90.5,
  },
  studywaysActivityCardHeaderPurple: {
    backgroundColor: '#4F46E5',
    marginLeft: -90,
  },
  studywaysActivityCardHeaderDarkPurple: {
    backgroundColor: '#9333EA',
    width: 183,
    marginLeft: -91.5,
  },
  studywaysActivityCardPattern: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
    mixBlendMode: 'lighten',
  },
  studywaysActivityCardIconContainer: {
    position: 'absolute',
    left: 64.86,
    top: 43.86,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  studywaysActivityCardIcon: {
    position: 'absolute',
    top: -16,
    left: -20,
    width: 85,
    height: 85,
    zIndex: 1,
  },
  studywaysActivityCardIconBadge: {
    position: 'absolute',
    backgroundColor: '#F0FFFE',
    width: 24,
    height: 24,
    top: 12.73,
    left: 12.95,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    zIndex: 10,
  },
  studywaysActivityCardIconBadgeIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: 11,
  },
  studywaysActivityCardFlashIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    zIndex: 10,
  },
  studywaysActivityCardContent: {
    position: 'absolute',
    left: 33.86,
    top: 98.86,
    width: 109.25,
    alignItems: 'center',
    gap: 2,
  },
  studywaysActivityCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.333,
    lineHeight: 23.418,
    color: '#000000',
    textAlign: 'center',
  },
  studywaysActivityCardDescription: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 11.5,
    lineHeight: 16,
    color: '#535353',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  studywaysFlashCardsDescription: {
    width: 121,
    maxHeight: 32,
  },
});

