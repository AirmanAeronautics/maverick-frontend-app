// DO NOT MODIFY OTHER FILES — Quiz2 SCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from local files - reusing existing assets where possible
const imgOutline = require('../assets/quiz1-assets/imgOutline.png');
const imgBatteryEnd = require('../assets/quiz1-assets/imgBatteryEnd.png');
const imgFill = require('../assets/quiz1-assets/imgFill.png');
const imgArrowArrowLeftMd = require('../assets/quiz1-assets/imgArrowArrowLeftMd.svg');
const imgWifi = require('../assets/quiz1-assets/imgWifi.svg');
const imgIconMobileSignal = require('../assets/quiz1-assets/imgIconMobileSignal.svg');

// Icons from Figma for correct/wrong answers
const imgCheckTick = { uri: 'https://www.figma.com/api/mcp/asset/004b793e-5dcf-4f31-8e0c-8346d577741c' };
const imgCrossSolid = { uri: 'https://www.figma.com/api/mcp/asset/49278544-ad67-4806-bbed-1c73848d1cbd' };

type StatusBarBatteryProps = {
  style?: any;
};

function StatusBarBattery({ style }: StatusBarBatteryProps) {
  return (
    <View style={[styles.quiz2BatteryContainer, style]}>
      <View style={styles.quiz2BatteryOutline}>
        <Image source={imgOutline} style={styles.quiz2BatteryOutlineImage} />
      </View>
      <View style={styles.quiz2BatteryEnd}>
        <Image source={imgBatteryEnd} style={styles.quiz2BatteryEndImage} />
      </View>
      <View style={styles.quiz2BatteryFill}>
        <Image source={imgFill} style={styles.quiz2BatteryFillImage} />
      </View>
    </View>
  );
}

export default function Quiz2() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const CORRECT_ANSWER = 'B';

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  const getAnswerStyle = (answer: string) => {
    if (selectedAnswer === answer) {
      return answer === CORRECT_ANSWER 
        ? [styles.quiz2AnswerOption, styles.quiz2AnswerCorrect] 
        : [styles.quiz2AnswerOption, styles.quiz2AnswerIncorrect];
    }
    // Show correct answer when wrong answer is selected
    if (selectedAnswer && selectedAnswer !== CORRECT_ANSWER && answer === CORRECT_ANSWER) {
      return [styles.quiz2AnswerOption, styles.quiz2AnswerCorrect];
    }
    return styles.quiz2AnswerOption;
  };

  const getLetterStyle = (answer: string) => {
    if (selectedAnswer === answer) {
      return answer === CORRECT_ANSWER
        ? [styles.quiz2AnswerLetter, styles.quiz2AnswerLetterCorrect]
        : [styles.quiz2AnswerLetter, styles.quiz2AnswerLetterIncorrect];
    }
    // Show correct answer badge when wrong answer is selected
    if (selectedAnswer && selectedAnswer !== CORRECT_ANSWER && answer === CORRECT_ANSWER) {
      return [styles.quiz2AnswerLetter, styles.quiz2AnswerLetterCorrect];
    }
    return styles.quiz2AnswerLetter;
  };

  return (
    <View style={styles.quiz2Container}>
      {/* Status Bar */}
      <View style={styles.quiz2StatusBar}>
        <View style={styles.quiz2StatusBarLeft}>
          <View style={styles.quiz2StatusBarTimeContainer}>
            <Text style={styles.quiz2StatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.quiz2StatusBarRight}>
          <StatusBarBattery style={styles.quiz2BatteryContainerStyle} />
          <View style={styles.quiz2WifiIcon}>
            <Image source={imgWifi} style={styles.quiz2IconImage} />
          </View>
          <View style={styles.quiz2MobileSignalIcon}>
            <Image source={imgIconMobileSignal} style={styles.quiz2IconImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.quiz2Header}>
        <View style={styles.quiz2HeaderContent}>
          <View style={styles.quiz2ArrowContainer}>
            <Image source={imgArrowArrowLeftMd} style={styles.quiz2ArrowImage} />
          </View>
          <View style={styles.quiz2HeaderTextContainer}>
            <Text style={styles.quiz2HeaderText}>Back to Main Menu</Text>
          </View>
        </View>
      </View>

      {/* Title Section */}
      <View style={styles.quiz2TitleSection}>
        <View style={styles.quiz2TitleTextContainer}>
          <Text style={styles.quiz2Title}>Fundamentals & Basics</Text>
          <Text style={styles.quiz2Subtitle}>
            Master the essential concepts and foundatonal Knowledege and required for aviation excellence
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.quiz2ContentContainer}>
        {/* Progress Card */}
        <View style={styles.quiz2ProgressCard}>
          <View style={styles.quiz2ProgressContent}>
            <View style={styles.quiz2ProgressHeader}>
              <Text style={styles.quiz2ProgressText}>Question 8 of 15</Text>
              <Text style={styles.quiz2ProgressPercent}>67%</Text>
            </View>
            <View style={styles.quiz2ProgressBarContainer}>
              <View style={styles.quiz2ProgressBarBackground} />
              <LinearGradient
                colors={['rgba(22, 173, 27, 1)', 'rgba(22, 173, 27, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.quiz2ProgressBarFill}
              />
            </View>
          </View>
        </View>

        {/* Question */}
        <View style={styles.quiz2QuestionContainer}>
          <Text style={styles.quiz2QuestionText}>
            7. What is the standard atmospheric pressure at sea level?
          </Text>

          {/* Answer Options */}
          <View style={styles.quiz2AnswersContainer}>
            <TouchableOpacity 
              style={getAnswerStyle('A')}
              onPress={() => handleAnswerClick('A')}
              activeOpacity={selectedAnswer === null ? 0.7 : 1}
              disabled={selectedAnswer !== null}
            >
              <View style={getLetterStyle('A')}>
                {selectedAnswer === 'A' && selectedAnswer !== CORRECT_ANSWER ? (
                  <Image source={imgCrossSolid} style={styles.quiz2IconCross} resizeMode="contain" />
                ) : selectedAnswer === 'A' && selectedAnswer === CORRECT_ANSWER ? (
                  <Image source={imgCheckTick} style={styles.quiz2IconCheck} resizeMode="contain" />
                ) : (
                  <Text style={styles.quiz2AnswerLetterText}>A</Text>
                )}
              </View>
              <Text style={styles.quiz2AnswerText}>29.92 inches Hg</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={getAnswerStyle('B')}
              onPress={() => handleAnswerClick('B')}
              activeOpacity={selectedAnswer === null ? 0.7 : 1}
              disabled={selectedAnswer !== null}
            >
              <View style={getLetterStyle('B')}>
                {(selectedAnswer === 'B' || (selectedAnswer && selectedAnswer !== CORRECT_ANSWER)) ? (
                  <Image source={imgCheckTick} style={styles.quiz2IconCheck} resizeMode="contain" />
                ) : (
                  <Text style={styles.quiz2AnswerLetterText}>B</Text>
                )}
              </View>
              <Text style={styles.quiz2AnswerText}>30.00 inches Hg</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={getAnswerStyle('C')}
              onPress={() => handleAnswerClick('C')}
              activeOpacity={selectedAnswer === null ? 0.7 : 1}
              disabled={selectedAnswer !== null}
            >
              <View style={getLetterStyle('C')}>
                {selectedAnswer === 'C' && selectedAnswer !== CORRECT_ANSWER ? (
                  <Image source={imgCrossSolid} style={styles.quiz2IconCross} resizeMode="contain" />
                ) : selectedAnswer === 'C' && selectedAnswer === CORRECT_ANSWER ? (
                  <Image source={imgCheckTick} style={styles.quiz2IconCheck} resizeMode="contain" />
                ) : (
                  <Text style={styles.quiz2AnswerLetterText}>C</Text>
                )}
              </View>
              <Text style={styles.quiz2AnswerText}>28.92 inches Hg</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={getAnswerStyle('D')}
              onPress={() => handleAnswerClick('D')}
              activeOpacity={selectedAnswer === null ? 0.7 : 1}
              disabled={selectedAnswer !== null}
            >
              <View style={getLetterStyle('D')}>
                {selectedAnswer === 'D' && selectedAnswer !== CORRECT_ANSWER ? (
                  <Image source={imgCrossSolid} style={styles.quiz2IconCross} resizeMode="contain" />
                ) : selectedAnswer === 'D' && selectedAnswer === CORRECT_ANSWER ? (
                  <Image source={imgCheckTick} style={styles.quiz2IconCheck} resizeMode="contain" />
                ) : (
                  <Text style={styles.quiz2AnswerLetterText}>D</Text>
                )}
              </View>
              <Text style={styles.quiz2AnswerText}>31.92 inches Hg</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.quiz2BottomNav}>
        <View style={styles.quiz2PreviousButton}>
          <Image source={imgArrowArrowLeftMd} style={[styles.quiz2NavArrow, styles.quiz2PreviousArrow]} />
          <Text style={styles.quiz2PreviousText}>Previous</Text>
        </View>
        <LinearGradient
          colors={['rgba(22, 138, 173, 1)', 'rgba(22, 138, 173, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.quiz2NextButton}
        >
          <Text style={styles.quiz2NextText}>Next</Text>
          <View style={styles.quiz2NextArrowContainer}>
            <Image source={imgArrowArrowLeftMd} style={[styles.quiz2NavArrow, styles.quiz2NextArrow]} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quiz2Container: {
    position: 'relative',
    width: APP_WIDTH,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  quiz2StatusBar: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 47,
    left: 0,
    overflow: 'hidden',
    top: 0,
    width: APP_WIDTH,
    zIndex: 10,
  },
  quiz2StatusBarLeft: {
    position: 'absolute',
    left: APP_WIDTH / 2 - 158,
    top: 14,
  },
  quiz2StatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    width: 54,
  },
  quiz2StatusBarTime: {
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
  quiz2StatusBarRight: {
    position: 'absolute',
    left: APP_WIDTH / 2 + 145.7,
    top: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  quiz2BatteryContainerStyle: {
    position: 'absolute',
    left: APP_WIDTH / 2 + 170.7,
    top: 0,
  },
  quiz2BatteryContainer: {
    height: 13,
    position: 'relative',
    width: 27.401,
  },
  quiz2BatteryOutline: {
    position: 'absolute',
    height: 13,
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
  },
  quiz2BatteryOutlineImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz2BatteryEnd: {
    position: 'absolute',
    height: 4.22,
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
  },
  quiz2BatteryEndImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz2BatteryFill: {
    position: 'absolute',
    height: 9,
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
  },
  quiz2BatteryFillImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz2WifiIcon: {
    position: 'absolute',
    height: 11.834,
    left: APP_WIDTH / 2 + 141.5,
    top: 0,
    width: 17,
  },
  quiz2MobileSignalIcon: {
    position: 'absolute',
    height: 12,
    left: APP_WIDTH / 2 + 116,
    top: 0,
    width: 18,
  },
  quiz2IconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz2Header: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 66.507,
    left: APP_WIDTH / 2,
    top: 63,
    transform: [{ translateX: -APP_WIDTH / 2 }],
    width: APP_WIDTH,
    zIndex: 10,
  },
  quiz2HeaderContent: {
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
    left: 19.93,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -13.25 }],
  },
  quiz2ArrowContainer: {
    position: 'relative',
    width: 27.52,
    height: 27.52,
    flexShrink: 0,
  },
  quiz2ArrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quiz2HeaderTextContainer: {
    flex: 1,
    minWidth: 0,
  },
  quiz2HeaderText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 18,
    color: '#000000',
  },
  quiz2TitleSection: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    left: 16,
    top: 136,
    width: 383,
  },
  quiz2ContentContainer: {
    position: 'absolute',
    flexDirection: 'column',
    gap: 24,
    alignItems: 'flex-start',
    left: APP_WIDTH / 2,
    top: 230,
    transform: [{ translateX: -190 }],
    width: 380,
  },
  quiz2TitleTextContainer: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'column',
    gap: 6,
    justifyContent: 'center',
  },
  quiz2Title: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 20,
    color: '#000000',
  },
  quiz2Subtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 17,
    fontSize: 14,
    color: '#272727',
  },
  quiz2ProgressCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'solid',
    borderRadius: 14.648,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    marginBottom: 24,
    overflow: 'hidden',
    width: 380,
    alignSelf: 'center',
  },
  quiz2ProgressContent: {
    flexDirection: 'column',
    gap: 9.11,
    height: 34.618,
    position: 'relative',
  },
  quiz2ProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  quiz2ProgressText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#000000',
  },
  quiz2ProgressPercent: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#000000',
  },
  quiz2ProgressBarContainer: {
    position: 'absolute',
    left: -0.09,
    top: 21.86,
    height: 9.11,
    width: 346.001,
  },
  quiz2ProgressBarBackground: {
    position: 'absolute',
    backgroundColor: '#e5e7eb',
    height: 9.11,
    left: 0,
    borderRadius: 91.099,
    top: 0,
    width: 346.001,
  },
  quiz2ProgressBarFill: {
    position: 'absolute',
    height: 9.11,
    left: -0.09,
    borderRadius: 91.099,
    top: 0,
    width: 192.021,
  },
  quiz2QuestionContainer: {
    flexDirection: 'column',
    gap: 24,
    alignItems: 'flex-start',
    width: 380,
  },
  quiz2QuestionText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    lineHeight: 22.933,
    fontSize: 20,
    color: '#000000',
    width: 324,
  },
  quiz2AnswersContainer: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    width: 380,
  },
  quiz2AnswerOption: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'solid',
    borderRadius: 14.648,
    flexDirection: 'row',
    gap: 80,
    height: 77,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 22,
    paddingBottom: 22,
    overflow: 'hidden',
  },
  quiz2AnswerCorrect: {
    backgroundColor: '#c4ffb7',
    borderColor: '#b1ffa0',
  },
  quiz2AnswerIncorrect: {
    backgroundColor: '#ffb7b7',
    borderColor: '#ff9999',
  },
  quiz2AnswerLetter: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'solid',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 7,
    paddingBottom: 7,
    flexShrink: 0,
  },
  quiz2AnswerLetterCorrect: {
    backgroundColor: '#16ad1b',
    borderColor: '#16ad1b',
    width: 31,
    height: 30,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quiz2AnswerLetterIncorrect: {
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    width: 31,
    height: 30,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quiz2IconCheck: {
    width: 16,
    height: 16,
  },
  quiz2IconCross: {
    width: 25,
    height: 25,
  },
  quiz2AnswerLetterText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    height: 16,
    lineHeight: 16,
    fontSize: 12,
    color: '#000000',
    width: 9,
    textAlign: 'center',
  },
  quiz2AnswerText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    lineHeight: 22.933,
    fontSize: 18,
    color: '#000000',
  },
  quiz2BottomNav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    left: APP_WIDTH / 2 + 0.5,
    top: 794.62,
    transform: [{ translateX: -186.5 }],
    width: 373,
  },
  quiz2PreviousButton: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  quiz2NavArrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  quiz2PreviousArrow: {
    tintColor: '#168aad',
  },
  quiz2PreviousText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 22.496,
    fontSize: 16.069,
    color: '#168aad',
    letterSpacing: -0.1607,
  },
  quiz2NextButton: {
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
  quiz2NextText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 22.496,
    fontSize: 16.069,
    color: '#ffffff',
    letterSpacing: -0.1607,
  },
  quiz2NextArrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quiz2NextArrow: {
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
    tintColor: '#ffffff',
  },
});

