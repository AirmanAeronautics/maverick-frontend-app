// DO NOT MODIFY OTHER FILES — flashcard2 SCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from local files
const imgOutline = require('../assets/flashcard2-assets/imgOutline.png');
const imgBatteryEnd = require('../assets/flashcard2-assets/imgBatteryEnd.png');
const imgFill = require('../assets/flashcard2-assets/imgFill.png');
const imgArrowArrowLeftMd = require('../assets/flashcard2-assets/imgArrowArrowLeftMd.svg');
const imgWifi = require('../assets/flashcard2-assets/imgWifi.svg');
const imgIconMobileSignal = require('../assets/flashcard2-assets/imgIconMobileSignal.svg');
const imgArrowDown = require('../assets/flashcard2-assets/imgArrowDown.svg');
const imgFluentCheckmarkCircleHint16Filled = require('../assets/flashcard2-assets/imgFluentCheckmarkCircleHint16Filled.svg');
const imgMaterialSymbolsRefreshRounded = require('../assets/flashcard2-assets/imgMaterialSymbolsRefreshRounded.svg');
const imgGroup = require('../assets/flashcard2-assets/imgGroup.svg');
const imgMdiTickCircleOutline = require('../assets/flashcard2-assets/imgMdiTickCircleOutline.svg');

type StatusBarBatteryProps = {
  style?: any;
};

function StatusBarBattery({ style }: StatusBarBatteryProps) {
  return (
    <View style={[styles.fc2BatteryContainer, style]}>
      <View style={styles.fc2BatteryOutline}>
        <Image source={imgOutline} style={styles.fc2BatteryOutlineImage} />
      </View>
      <View style={styles.fc2BatteryEnd}>
        <Image source={imgBatteryEnd} style={styles.fc2BatteryEndImage} />
      </View>
      <View style={styles.fc2BatteryFill}>
        <Image source={imgFill} style={styles.fc2BatteryFillImage} />
      </View>
    </View>
  );
}

export default function Flashcard2() {
  const [isStudyAidExpanded, setIsStudyAidExpanded] = useState(true);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const flipAnimation = useState(new Animated.Value(0))[0];

  const toggleStudyAid = () => {
    setIsStudyAidExpanded(!isStudyAidExpanded);
  };

  const toggleCardFlip = () => {
    if (isCardFlipped) {
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsCardFlipped(!isCardFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View style={styles.fc2Container}>
      {/* Status Bar */}
      <View style={styles.fc2StatusBar}>
        <View style={styles.fc2StatusBarLeft}>
          <View style={styles.fc2StatusBarTimeContainer}>
            <Text style={styles.fc2StatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.fc2StatusBarRight}>
          <StatusBarBattery style={styles.fc2BatteryContainerStyle} />
          <View style={styles.fc2WifiIcon}>
            <Image source={imgWifi} style={styles.fc2IconImage} />
          </View>
          <View style={styles.fc2MobileSignalIcon}>
            <Image source={imgIconMobileSignal} style={styles.fc2IconImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.fc2Header}>
        <View style={styles.fc2HeaderContent}>
          <View style={styles.fc2ArrowContainer}>
            <Image source={imgArrowArrowLeftMd} style={styles.fc2ArrowImage} />
          </View>
          <View style={styles.fc2HeaderTextContainer}>
            <Text style={styles.fc2HeaderText}>Back to Topics</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.fc2ScrollView} 
        contentContainerStyle={styles.fc2ScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.fc2TitleSection}>
          <View style={styles.fc2TitleContainer}>
            <Text style={styles.fc2Title}>Fundamentals & Basics</Text>
            <Text style={styles.fc2Description}>
              Master the essential concepts and foundatonal Knowledege and required for aviation excellence
            </Text>
          </View>
        </View>

        {/* Progress Card */}
        <View style={styles.fc2ProgressCard}>
          <View style={styles.fc2ProgressContent}>
            <View style={styles.fc2ProgressHeader}>
              <Text style={styles.fc2ProgressText}>Question 8 of 15</Text>
              <Text style={styles.fc2ProgressPercent}>67%</Text>
            </View>
            <View style={styles.fc2ProgressBarContainer}>
              <View style={styles.fc2ProgressBarBackground} />
              <View style={styles.fc2ProgressBarFill} />
            </View>
          </View>
        </View>

        {/* Study Aid Card */}
        <View style={styles.fc2StudyAidCard}>
          <View style={styles.fc2StudyAidContent}>
            <TouchableOpacity activeOpacity={0.7} onPress={toggleStudyAid}>
              <View style={styles.fc2StudyAidHeader}>
                <View style={styles.fc2StudyAidTitleFrame}>
                  <View style={styles.fc2StudyAidLeft}>
                    <View style={styles.fc2CheckmarkIcon}>
                      <Image source={imgFluentCheckmarkCircleHint16Filled} style={styles.fc2CheckmarkImage} />
                    </View>
                    <Text style={styles.fc2StudyAidTitle}>Study Aid</Text>
                  </View>
                  <Text style={styles.fc2StudyAidSubtitle}>Hints and Explanations</Text>
                </View>
                <View style={styles.fc2ArrowDownContainer}>
                  <View style={[styles.fc2ArrowDownRotated, isStudyAidExpanded && styles.fc2ArrowExpanded]}>
                    <Image source={imgArrowDown} style={styles.fc2ArrowDownImage} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {isStudyAidExpanded && (
              <Text style={styles.fc2StudyAidText}>
                Think about the key aviation concepts, regulations or procedures that relate to this question. Connect safety implications and practical applications
              </Text>
            )}
          </View>
        </View>

        {/* Question Card - Flip Card */}
        <View style={styles.fc2QuestionCardWrapper}>
          <TouchableOpacity activeOpacity={0.9} onPress={toggleCardFlip} style={styles.fc2QuestionCardTouchable}>
            {/* Front Side - Question */}
            <Animated.View style={[styles.fc2QuestionCard, styles.fc2QuestionCardFront, frontAnimatedStyle]}>
              <View style={styles.fc2QuestionHeader}>
                <View style={styles.fc2QuestionIconContainer}>
                  <View style={styles.fc2QuestionIconBg}>
                    <View style={styles.fc2QuestionIconInner}>
                      <Image source={imgGroup} style={styles.fc2QuestionIconImage} />
                    </View>
                  </View>
                </View>
                <View style={styles.fc2QuestionLabelContainer}>
                  <Text style={styles.fc2QuestionLabel}>Questions</Text>
                  <View style={styles.fc2QuestionTag}>
                    <Text style={styles.fc2QuestionTagText}>Weather</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.fc2QuestionText}>What does METAR stands for?</Text>
              <View style={styles.fc2RevealButton}>
                <Image source={imgMaterialSymbolsRefreshRounded} style={styles.fc2RevealIcon} />
                <Text style={styles.fc2RevealText}>Tap to Reveal the Answer</Text>
              </View>
            </Animated.View>

            {/* Back Side - Answer */}
            <Animated.View style={[styles.fc2QuestionCard, styles.fc2QuestionCardBack, backAnimatedStyle]}>
              <View style={styles.fc2AnswerHeader}>
                <View style={styles.fc2AnswerIconContainer}>
                  <View style={styles.fc2AnswerIconBg}>
                    <Image source={imgMdiTickCircleOutline} style={styles.fc2AnswerIconImage} />
                  </View>
                </View>
                <View style={styles.fc2AnswerLabelContainer}>
                  <Text style={styles.fc2AnswerLabel}>Answer</Text>
                  <View style={styles.fc2AnswerTag}>
                    <Text style={styles.fc2AnswerTagText}>Weather</Text>
                  </View>
                </View>
              </View>
              <View style={styles.fc2AnswerTextContainer}>
                <Text style={styles.fc2AnswerText}>METAR Stands for</Text>
                <Text style={styles.fc2AnswerTextBlue}>Meteorological Aerodrome Report</Text>
              </View>
              <View style={styles.fc2ShowQuestionButton}>
                <Image source={imgMaterialSymbolsRefreshRounded} style={styles.fc2RevealIcon} />
                <Text style={styles.fc2RevealText}>Show the Question</Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.fc2BottomNav}>
        <View style={styles.fc2PreviousButton}>
          <Image source={imgArrowArrowLeftMd} style={[styles.fc2NavArrow, styles.fc2PreviousArrow]} />
          <Text style={styles.fc2PreviousText}>Previous</Text>
        </View>
        <LinearGradient
          colors={['rgba(22, 138, 173, 1)', 'rgba(22, 138, 173, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.fc2NextButton}
        >
          <Text style={styles.fc2NextText}>Next</Text>
          <View style={styles.fc2NextArrowContainer}>
            <Image source={imgArrowArrowLeftMd} style={[styles.fc2NavArrow, styles.fc2NextArrow]} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fc2Container: {
    position: 'relative',
    width: APP_WIDTH,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fc2StatusBar: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 47,
    left: 0,
    overflow: 'hidden',
    top: 0,
    width: APP_WIDTH,
    zIndex: 10,
  },
  fc2StatusBarLeft: {
    position: 'absolute',
    left: APP_WIDTH / 2 - 158,
    top: 14,
  },
  fc2StatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    width: 54,
  },
  fc2StatusBarTime: {
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
  fc2StatusBarRight: {
    position: 'absolute',
    left: APP_WIDTH / 2 + 145.7,
    top: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  fc2BatteryContainerStyle: {
    position: 'absolute',
    left: APP_WIDTH / 2 + 170.7,
    top: 0,
  },
  fc2BatteryContainer: {
    height: 13,
    position: 'relative',
    width: 27.401,
  },
  fc2BatteryOutline: {
    position: 'absolute',
    height: 13,
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
  },
  fc2BatteryOutlineImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2BatteryEnd: {
    position: 'absolute',
    height: 4.22,
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
  },
  fc2BatteryEndImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2BatteryFill: {
    position: 'absolute',
    height: 9,
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
  },
  fc2BatteryFillImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2WifiIcon: {
    position: 'absolute',
    height: 11.834,
    left: APP_WIDTH / 2 + 141.5,
    top: 0,
    width: 17,
  },
  fc2MobileSignalIcon: {
    position: 'absolute',
    height: 12,
    left: APP_WIDTH / 2 + 116,
    top: 0,
    width: 18,
  },
  fc2IconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2Header: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 66.507,
    left: APP_WIDTH / 2,
    top: 63,
    transform: [{ translateX: -APP_WIDTH / 2 }],
    width: APP_WIDTH,
    zIndex: 10,
  },
  fc2HeaderContent: {
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
    left: 19.93,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -13.25 }],
  },
  fc2ArrowContainer: {
    position: 'relative',
    width: 27.52,
    height: 27.52,
    flexShrink: 0,
  },
  fc2ArrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2HeaderTextContainer: {
    flex: 1,
    minWidth: 0,
    width: 206.4,
  },
  fc2HeaderText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 18,
    color: '#000000',
  },
  fc2ScrollView: {
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    bottom: 100,
  },
  fc2ScrollContent: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },
  fc2TitleSection: {
    width: 382,
    marginBottom: 30,
  },
  fc2TitleContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 0,
    height: 68,
  },
  fc2Title: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 20,
    color: '#000000',
    marginBottom: 0,
  },
  fc2Description: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 17,
    fontSize: 14,
    color: '#272727',
    marginTop: 15,
    width: 373,
  },
  fc2ProgressCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'solid',
    borderRadius: 14.648,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    width: 380,
    marginBottom: 24,
  },
  fc2ProgressContent: {
    width: '100%',
  },
  fc2ProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9.11,
    height: 16,
  },
  fc2ProgressText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    lineHeight: 16,
  },
  fc2ProgressPercent: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    lineHeight: 16,
  },
  fc2ProgressBarContainer: {
    position: 'relative',
    height: 9.11,
    width: 346.001,
  },
  fc2ProgressBarBackground: {
    position: 'absolute',
    backgroundColor: '#e5e7eb',
    height: 9.11,
    borderRadius: 91.099,
    width: 346.001,
    top: 0,
    left: 0,
  },
  fc2ProgressBarFill: {
    position: 'absolute',
    height: 9.11,
    borderRadius: 91.099,
    width: 192.021,
    top: 0,
    left: -0.09,
    backgroundColor: '#16ad1b',
  },
  fc2StudyAidCard: {
    backgroundColor: '#edf7ff',
    borderWidth: 0.855,
    borderColor: '#daefff',
    borderStyle: 'solid',
    borderRadius: 6.839,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    width: 382,
    marginBottom: 24,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  fc2StudyAidContent: {
    width: 353,
    flexDirection: 'column',
    gap: 24,
  },
  fc2StudyAidHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  fc2StudyAidTitleFrame: {
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
  },
  fc2StudyAidLeft: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  fc2CheckmarkIcon: {
    width: 21,
    height: 21,
    position: 'relative',
  },
  fc2CheckmarkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2StudyAidTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 20.518,
    fontSize: 18,
    color: '#168aad',
  },
  fc2ArrowDownContainer: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fc2ArrowDownRotated: {
    transform: [{ rotate: '0deg' }],
  },
  fc2ArrowExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  fc2ArrowDownImage: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  fc2StudyAidSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 17.098,
    fontSize: 14,
    color: '#4b5563',
    marginTop: 0,
  },
  fc2StudyAidText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 14,
    color: '#272727',
    height: 48,
    width: 351,
  },
  fc2QuestionCardWrapper: {
    width: 382,
    height: 263,
  },
  fc2QuestionCardTouchable: {
    width: '100%',
    height: '100%',
  },
  fc2QuestionCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'solid',
    borderRadius: 6,
    width: 382,
    height: 263,
    position: 'absolute',
    top: 0,
    left: 0,
    shadowColor: 'rgba(48, 48, 48, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 18.9,
    elevation: 2,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },
  fc2QuestionCardFront: {
    backfaceVisibility: 'hidden',
  },
  fc2QuestionCardBack: {
    backfaceVisibility: 'hidden',
  },
  fc2QuestionHeader: {
    flexDirection: 'row',
    gap: 9.231,
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    top: 15.38,
  },
  fc2QuestionIconContainer: {
    position: 'relative',
  },
  fc2QuestionIconBg: {
    backgroundColor: '#2a94b4',
    borderRadius: 5.833,
    padding: 5,
    overflow: 'hidden',
  },
  fc2QuestionIconInner: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  fc2QuestionIconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fc2QuestionLabelContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 65.769,
  },
  fc2QuestionLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 16.154,
    fontSize: 11.538,
    color: '#4b5563',
  },
  fc2QuestionTag: {
    backgroundColor: '#ffffff',
    borderWidth: 0.511,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    borderRadius: 13.204,
    paddingLeft: 7.122,
    paddingRight: 7.122,
    paddingTop: 2.401,
    paddingBottom: 2.401,
    marginTop: 0,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 0.511 },
    shadowOpacity: 1,
    shadowRadius: 1.022,
    elevation: 1,
  },
  fc2QuestionTagText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 1.4,
    fontSize: 7.122,
    color: '#4b5563',
    letterSpacing: -0.0712,
  },
  fc2QuestionText: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 20,
    color: '#000000',
    left: 48.5,
    top: 85,
  },
  fc2RevealButton: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderWidth: 0.851,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    borderRadius: 8.513,
    flexDirection: 'row',
    gap: 8.513,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 11.867,
    paddingRight: 11.867,
    paddingTop: 22.984,
    paddingBottom: 22.984,
    height: 45,
    width: 203,
    left: 88.5,
    top: 131,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 0.851 },
    shadowOpacity: 1,
    shadowRadius: 1.703,
    elevation: 1,
  },
  fc2ShowQuestionButton: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderWidth: 0.851,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    borderRadius: 8.513,
    flexDirection: 'row',
    gap: 8.513,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 11.867,
    paddingRight: 11.867,
    paddingTop: 22.984,
    paddingBottom: 22.984,
    height: 45,
    width: 203,
    left: 88.5,
    top: 144,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 0.851 },
    shadowOpacity: 1,
    shadowRadius: 1.703,
    elevation: 1,
  },
  fc2RevealIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  fc2RevealText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 1.4,
    fontSize: 11.867,
    color: '#4b5563',
    letterSpacing: -0.1187,
  },
  fc2AnswerHeader: {
    flexDirection: 'row',
    gap: 9.231,
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    top: 15.38,
  },
  fc2AnswerIconContainer: {
    position: 'relative',
  },
  fc2AnswerIconBg: {
    backgroundColor: '#16ad1b',
    borderRadius: 5.833,
    padding: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fc2AnswerIconImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  fc2AnswerLabelContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 65.769,
  },
  fc2AnswerLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 16.154,
    fontSize: 11.538,
    color: '#4b5563',
  },
  fc2AnswerTag: {
    backgroundColor: '#ffffff',
    borderWidth: 0.511,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    borderRadius: 13.204,
    paddingLeft: 7.122,
    paddingRight: 7.122,
    paddingTop: 2.401,
    paddingBottom: 2.401,
    marginTop: 0,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 0.511 },
    shadowOpacity: 1,
    shadowRadius: 1.022,
    elevation: 1,
  },
  fc2AnswerTagText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 1.4,
    fontSize: 7.122,
    color: '#4b5563',
    letterSpacing: -0.0712,
  },
  fc2AnswerTextContainer: {
    position: 'absolute',
    left: '50%',
    top: 72,
    transform: [{ translateX: -95 }],
    alignItems: 'center',
  },
  fc2AnswerText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 20,
    color: '#000000',
    marginBottom: 16.053,
    textAlign: 'center',
  },
  fc2AnswerTextBlue: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 20,
    color: '#037293',
    textAlign: 'center',
  },
  fc2BottomNav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    left: APP_WIDTH / 2 + 0.5,
    top: 807.62,
    transform: [{ translateX: -186.5 }],
    width: 373,
  },
  fc2PreviousButton: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  fc2NavArrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  fc2PreviousArrow: {
    tintColor: '#168aad',
  },
  fc2PreviousText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 22.496,
    fontSize: 16.069,
    color: '#168aad',
    letterSpacing: -0.1607,
  },
  fc2NextButton: {
    borderWidth: 1.148,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: 11.478,
    flexDirection: 'row',
    gap: 4,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 27.547,
    paddingRight: 27.547,
    paddingTop: 11.478,
    paddingBottom: 11.478,
    width: 124,
    shadowColor: 'rgba(22, 138, 173, 0.48)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 2,
  },
  fc2NextText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 22.496,
    fontSize: 16.069,
    color: '#ffffff',
    letterSpacing: -0.1607,
  },
  fc2NextArrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fc2NextArrow: {
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
    tintColor: '#ffffff',
  },
});

