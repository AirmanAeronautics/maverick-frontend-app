// DO NOT MODIFY OTHER FILES — Quiz1 SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from local files
const imgOutline = require('../assets/quiz1-assets/imgOutline.png');
const imgBatteryEnd = require('../assets/quiz1-assets/imgBatteryEnd.png');
const imgFill = require('../assets/quiz1-assets/imgFill.png');
const imgArrowArrowLeftMd = require('../assets/quiz1-assets/imgArrowArrowLeftMd.svg');
const imgWifi = require('../assets/quiz1-assets/imgWifi.svg');
const imgIconMobileSignal = require('../assets/quiz1-assets/imgIconMobileSignal.svg');
const imgEllipse177 = require('../assets/quiz1-assets/imgEllipse177.png');
const imgPrimeStar = require('../assets/quiz1-assets/imgPrimeStar.svg');
const imgArrowDown = require('../assets/quiz1-assets/imgArrowDown.svg');
const imgPrimeThumbsUp = require('../assets/quiz1-assets/imgPrimeThumbsUp.svg');
const imgMaterialSymbolsRefreshRounded = require('../assets/quiz1-assets/imgMaterialSymbolsRefreshRounded.svg');
const imgEvaLoaderOutline = require('../assets/quiz1-assets/imgEvaLoaderOutline.svg');
const imgGroup = require('../assets/quiz1-assets/imgGroup.svg');

type StatusBarBatteryProps = {
  style?: any;
};

function StatusBarBattery({ style }: StatusBarBatteryProps) {
  return (
    <View style={[styles.quiz1BatteryContainer, style]}>
      <View style={styles.quiz1BatteryOutline}>
        <Image source={imgOutline} style={styles.quiz1BatteryOutlineImage} />
      </View>
      <View style={styles.quiz1BatteryEnd}>
        <Image source={imgBatteryEnd} style={styles.quiz1BatteryEndImage} />
      </View>
      <View style={styles.quiz1BatteryFill}>
        <Image source={imgFill} style={styles.quiz1BatteryFillImage} />
      </View>
    </View>
  );
}

export default function Quiz1() {
  return (
    <View style={styles.quiz1Container}>
      {/* Status Bar */}
      <View style={styles.quiz1StatusBar}>
        <View style={styles.quiz1StatusBarLeft}>
          <View style={styles.quiz1StatusBarTimeContainer}>
            <Text style={styles.quiz1StatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.quiz1StatusBarRight}>
          <StatusBarBattery style={styles.quiz1BatteryContainerStyle} />
          <View style={styles.quiz1WifiIcon}>
            <Image source={imgWifi} style={styles.quiz1IconImage} />
          </View>
          <View style={styles.quiz1MobileSignalIcon}>
            <Image source={imgIconMobileSignal} style={styles.quiz1IconImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.quiz1Header}>
        <View style={styles.quiz1HeaderContent}>
          <View style={styles.quiz1ArrowContainer}>
            <Image source={imgArrowArrowLeftMd} style={styles.quiz1ArrowImage} />
          </View>
          <View style={styles.quiz1HeaderTextContainer}>
            <Text style={styles.quiz1HeaderText}>Back to Main Menu</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.quiz1ScrollView} contentContainerStyle={styles.quiz1ScrollContent}>
        {/* Title Section */}
        <View style={styles.quiz1TitleSection}>
          <View style={styles.quiz1QuizIconContainer}>
            <View style={styles.quiz1QuizIconInner}>
              <Image source={imgGroup} style={styles.quiz1QuizIconImage} />
            </View>
          </View>
          <View style={styles.quiz1TitleTextContainer}>
            <Text style={styles.quiz1Title}>Practice Quizzes</Text>
            <Text style={styles.quiz1Subtitle}>Pick a quiz to strengthen your aviation fundamentals</Text>
          </View>
        </View>

        {/* Quiz Cards */}
        <View style={styles.quiz1Card}>
          <View style={styles.quiz1CardContent}>
            <View style={styles.quiz1CardLeft}>
              <View style={styles.quiz1CardTextContainer}>
                <Text style={styles.quiz1CardNumber}>1. Fundamentals & Basics</Text>
                <Text style={styles.quiz1CardDescription} numberOfLines={2}>
                  Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                </Text>
              </View>
              <View style={styles.quiz1CardFooter}>
                <View style={styles.quiz1StatusContainer}>
                  <View style={styles.quiz1StatusDot} />
                  <Text style={styles.quiz1StatusText}>Completed</Text>
                </View>
                <View style={[styles.quiz1Badge, styles.quiz1BadgeExcellent]}>
                  <Image source={imgPrimeStar} style={styles.quiz1BadgeIcon} />
                  <Text style={[styles.quiz1BadgeText, styles.quiz1BadgeTextExcellent]}>Excellent</Text>
                </View>
              </View>
            </View>
            <View style={styles.quiz1CardArrow}>
              <View style={styles.quiz1CardArrowRotated}>
                <Image source={imgArrowDown} style={styles.quiz1CardArrowImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.quiz1Card}>
          <View style={styles.quiz1CardContent}>
            <View style={styles.quiz1CardLeft}>
              <View style={styles.quiz1CardTextContainer}>
                <Text style={styles.quiz1CardNumber}>2. Advanced Concepts</Text>
                <Text style={styles.quiz1CardDescription} numberOfLines={2}>
                  Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                </Text>
              </View>
              <View style={styles.quiz1CardFooter}>
                <View style={styles.quiz1StatusContainer}>
                  <View style={styles.quiz1StatusDot} />
                  <Text style={styles.quiz1StatusText}>Completed</Text>
                </View>
                <View style={[styles.quiz1Badge, styles.quiz1BadgeGood]}>
                  <Image source={imgPrimeThumbsUp} style={styles.quiz1BadgeIcon} />
                  <Text style={[styles.quiz1BadgeText, styles.quiz1BadgeTextGood]}>Good</Text>
                </View>
              </View>
            </View>
            <View style={styles.quiz1CardArrow}>
              <View style={styles.quiz1CardArrowRotated}>
                <Image source={imgArrowDown} style={styles.quiz1CardArrowImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.quiz1Card}>
          <View style={styles.quiz1CardContent}>
            <View style={styles.quiz1CardLeft}>
              <View style={styles.quiz1CardTextContainer}>
                <Text style={styles.quiz1CardNumber}>3. Specialized Knowledge</Text>
                <Text style={styles.quiz1CardDescription} numberOfLines={2}>
                  Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                </Text>
              </View>
              <View style={styles.quiz1CardFooter}>
                <View style={styles.quiz1StatusContainer}>
                  <View style={styles.quiz1StatusDot} />
                  <Text style={styles.quiz1StatusText}>Completed</Text>
                </View>
                <View style={[styles.quiz1Badge, styles.quiz1BadgeNeedsImprovement]}>
                  <Image source={imgMaterialSymbolsRefreshRounded} style={styles.quiz1BadgeIcon} />
                  <Text style={[styles.quiz1BadgeText, styles.quiz1BadgeTextNeedsImprovement]}>Needs Improvement</Text>
                </View>
              </View>
            </View>
            <View style={styles.quiz1CardArrow}>
              <View style={styles.quiz1CardArrowRotated}>
                <Image source={imgArrowDown} style={styles.quiz1CardArrowImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.quiz1Card}>
          <View style={styles.quiz1CardContent}>
            <View style={styles.quiz1CardLeft}>
              <View style={styles.quiz1CardTextContainer}>
                <Text style={styles.quiz1CardNumber}>4. Fundamentals & Basics</Text>
                <Text style={styles.quiz1CardDescription} numberOfLines={2}>
                  Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                </Text>
              </View>
                <View style={styles.quiz1CardFooter}>
                  <View style={styles.quiz1StatusContainer}>
                    <View style={[styles.quiz1StatusDot, styles.quiz1StatusDotInProgress]} />
                    <Text style={styles.quiz1StatusText}>In-progress</Text>
                  </View>
                <View style={[styles.quiz1Badge, styles.quiz1BadgeOngoing]}>
                  <Image source={imgEvaLoaderOutline} style={styles.quiz1BadgeIcon} />
                  <Text style={[styles.quiz1BadgeText, styles.quiz1BadgeTextOngoing]}>Ongoing</Text>
                </View>
              </View>
            </View>
            <View style={styles.quiz1CardArrow}>
              <View style={styles.quiz1CardArrowRotated}>
                <Image source={imgArrowDown} style={styles.quiz1CardArrowImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.quiz1Card}>
          <View style={styles.quiz1CardContent}>
            <View style={styles.quiz1CardLeft}>
              <View style={styles.quiz1CardTextContainer}>
                <Text style={styles.quiz1CardNumber}>5. Fundamentals & Basics</Text>
                <Text style={styles.quiz1CardDescription} numberOfLines={2}>
                  Master the essential concepts and foundatonal Knowledege and required for aviation excellence
                </Text>
              </View>
              <View style={styles.quiz1CardFooter}>
                <View style={styles.quiz1StatusContainer}>
                  <View style={[styles.quiz1StatusDot, styles.quiz1StatusDotNotStarted]} />
                  <Text style={styles.quiz1StatusText}>Not started</Text>
                </View>
              </View>
            </View>
            <View style={styles.quiz1CardArrow}>
              <View style={styles.quiz1CardArrowRotated}>
                <Image source={imgArrowDown} style={styles.quiz1CardArrowImage} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  quiz1Container: {
    position: 'relative',
    width: APP_WIDTH,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  quiz1StatusBar: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 47,
    left: 0,
    overflow: 'hidden',
    top: 0,
    width: APP_WIDTH,
    zIndex: 10,
  },
  quiz1StatusBarLeft: {
    position: 'absolute',
    left: APP_WIDTH / 2 - 158,
    top: 14,
  },
  quiz1StatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    width: 54,
  },
  quiz1StatusBarTime: {
    position: 'absolute',
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    height: 20,
    left: 27,
    lineHeight: 21,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    top: 1,
    width: 54,
    letterSpacing: -0.32,
  },
  quiz1StatusBarRight: {
    position: 'absolute',
    left: APP_WIDTH / 2 + 145.7,
    top: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  quiz1BatteryContainerStyle: {
    position: 'absolute',
    left: APP_WIDTH / 2 + 170.7,
    top: 0,
  },
  quiz1BatteryContainer: {
    height: 13,
    position: 'relative',
    width: 27.401,
  },
  quiz1BatteryOutline: {
    position: 'absolute',
    height: 13,
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
  },
  quiz1BatteryOutlineImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz1BatteryEnd: {
    position: 'absolute',
    height: 4.22,
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
  },
  quiz1BatteryEndImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz1BatteryFill: {
    position: 'absolute',
    height: 9,
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
  },
  quiz1BatteryFillImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz1WifiIcon: {
    position: 'absolute',
    height: 11.834,
    left: APP_WIDTH / 2 + 141.5,
    top: 0,
    width: 17,
  },
  quiz1MobileSignalIcon: {
    position: 'absolute',
    height: 12,
    left: APP_WIDTH / 2 + 116,
    top: 0,
    width: 18,
  },
  quiz1IconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz1Header: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 66.507,
    left: APP_WIDTH / 2,
    top: 63,
    transform: [{ translateX: -APP_WIDTH / 2 }],
    width: APP_WIDTH,
    zIndex: 10,
  },
  quiz1HeaderContent: {
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
    left: 19.93,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -13.25 }],
  },
  quiz1ArrowContainer: {
    position: 'relative',
    width: 27.52,
    height: 27.52,
    flexShrink: 0,
  },
  quiz1ArrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz1HeaderTextContainer: {
    flex: 1,
    minWidth: 0,
  },
  quiz1HeaderText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 18,
    color: '#000000',
  },
  quiz1ScrollView: {
    position: 'absolute',
    top: 136,
    left: 0,
    right: 0,
    bottom: 0,
  },
  quiz1ScrollContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 62,
  },
  quiz1TitleSection: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 16,
  },
  quiz1QuizIconContainer: {
    overflow: 'hidden',
    position: 'relative',
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  quiz1QuizIconInner: {
    position: 'absolute',
    inset: '8.33% 18.75%',
  },
  quiz1QuizIconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz1TitleTextContainer: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'column',
    gap: 6,
    justifyContent: 'center',
  },
  quiz1Title: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 20,
    color: '#000000',
  },
  quiz1Subtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 14,
    fontSize: 14,
    color: '#272727',
    overflow: 'hidden',
  },
  quiz1Card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'solid',
    borderRadius: 14.648,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 22,
    paddingBottom: 22,
    marginBottom: 16,
    overflow: 'hidden',
  },
  quiz1CardContent: {
    flexDirection: 'row',
    gap: 137,
    height: 79,
    alignItems: 'center',
  },
  quiz1CardLeft: {
    flexDirection: 'column',
    gap: 8,
    flex: 1,
    minWidth: 0,
  },
  quiz1CardTextContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  quiz1CardNumber: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    lineHeight: 15.051,
  },
  quiz1CardDescription: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    height: 31,
    lineHeight: 16,
    fontSize: 10,
    color: '#272727',
    overflow: 'hidden',
  },
  quiz1CardFooter: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  quiz1StatusContainer: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  quiz1StatusDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#087c00',
  },
  quiz1StatusDotInProgress: {
    backgroundColor: 'rgba(124, 91, 0, 1)',
  },
  quiz1StatusDotNotStarted: {
    backgroundColor: 'rgba(0, 128, 128, 1)',
  },
  quiz1StatusText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 14,
    fontSize: 10,
    color: '#424242',
    overflow: 'hidden',
  },
  quiz1Badge: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 14.555,
    borderWidth: 0.809,
    borderStyle: 'solid',
  },
  quiz1BadgeExcellent: {
    backgroundColor: '#cfffce',
    borderColor: '#b3ffb1',
  },
  quiz1BadgeGood: {
    backgroundColor: '#cef4ff',
    borderColor: '#b1fcff',
    gap: 4,
  },
  quiz1BadgeNeedsImprovement: {
    backgroundColor: '#ffe6ce',
    borderColor: '#ffe6b1',
    gap: 4,
  },
  quiz1BadgeOngoing: {
    backgroundColor: '#fcffce',
    borderColor: '#fbffb1',
    gap: 4,
  },
  quiz1BadgeIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  quiz1BadgeText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 9,
    fontSize: 10,
    overflow: 'hidden',
  },
  quiz1BadgeTextExcellent: {
    color: '#087c00',
    width: 43,
  },
  quiz1BadgeTextGood: {
    color: '#037293',
  },
  quiz1BadgeTextNeedsImprovement: {
    color: '#7c4400',
  },
  quiz1BadgeTextOngoing: {
    color: '#7c5b00',
  },
  quiz1CardArrow: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  quiz1CardArrowRotated: {
    transform: [{ rotate: '270deg' }],
  },
  quiz1CardArrowImage: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
});

