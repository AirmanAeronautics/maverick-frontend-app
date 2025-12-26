// DO NOT MODIFY OTHER FILES — studyhome SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from local files
const imgRectangle4258 = require('../assets/studyhome-icons/imgRectangle4258.png');
const imgRectangle4259 = require('../assets/studyhome-icons/imgRectangle4259.png');
const imgRectangle4260 = require('../assets/studyhome-icons/imgRectangle4260.png');
const imgRectangle4261 = require('../assets/studyhome-icons/imgRectangle4261.png');
const imgCircle = require('../assets/studyhome-icons/imgCircle.svg');
const imgArrowArrowLeftMd = require('../assets/studyhome-icons/imgArrowArrowLeftMd.svg');
const imgFrame = require('../assets/studyhome-icons/imgFrame.svg');
const imgBiFire = require('../assets/studyhome-icons/imgBiFire.svg');
const imgBiFire1 = require('../assets/studyhome-icons/imgBiFire1.svg');
const imgFa6SolidMedal = require('../assets/studyhome-icons/imgFa6SolidMedal.svg');
const imgFa6SolidMedal1 = require('../assets/studyhome-icons/imgFa6SolidMedal1.svg');
const imgSolarMedalStarCircleBoldDuotone = require('../assets/studyhome-icons/imgSolarMedalStarCircleBoldDuotone.svg');
const imgSolarMedalStarCircleBoldDuotone1 = require('../assets/studyhome-icons/imgSolarMedalStarCircleBoldDuotone1.svg');
const imgMakiRocket = require('../assets/studyhome-icons/imgMakiRocket.svg');
const imgMaterialSymbolsLock = require('../assets/studyhome-icons/imgMaterialSymbolsLock.svg');
const imgSearch = require('../assets/studyhome-icons/imgSearch.svg');

export default function StudyHome() {
  return (
    <View style={styles.studyhomeContainer}>
      {/* Bottom spacer */}
      <View style={styles.studyhomeBottomSpacer} />

      {/* Title and Search Frame */}
      <View style={styles.studyhomeTitleSearchFrame}>
        <View style={styles.studyhomeTitleContainer}>
          <Text style={styles.studyhomeTitle}>Master aviation Knowledge and advance your career</Text>
        </View>
        <View style={styles.studyhomeSearchContainer}>
          <View style={styles.studyhomeSearchInput}>
            <View style={styles.studyhomeSearchContent}>
              <Image source={imgSearch} style={styles.studyhomeSearchIcon} />
              <TextInput
                style={styles.studyhomeSearchText}
                placeholder="Search Subjects, topics or chapters"
                placeholderTextColor="#667085"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.studyhomeScrollView}
        contentContainerStyle={styles.studyhomeMainContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Continue Learning Card */}
        <View style={styles.studyhomeContinueLearningCard}>
          <View style={styles.studyhomeContinueLearningContent}>
            <View style={styles.studyhomeProgressCircleWrapper}>
              <Text style={styles.studyhomeProgressPercentage}>67%</Text>
              <Image source={imgCircle} style={styles.studyhomeProgressCircle} />
            </View>
            <View style={styles.studyhomeContinueLearningText}>
              <Text style={styles.studyhomeContinueLearningTitle}>Air Meteorology</Text>
              <Text style={styles.studyhomeContinueLearningSubtitle}>Continue learning at where you left</Text>
              <Text style={styles.studyhomeContinueLearningChapters}>4 / 12 Chapters </Text>
            </View>
          </View>
          <View style={styles.studyhomeContinueLearningArrow}>
            <Image 
              source={imgArrowArrowLeftMd} 
              style={[styles.studyhomeArrowImage, { transform: [{ rotate: '180deg' }, { scaleY: -1 }] }]} 
            />
          </View>
        </View>

        {/* Achievements and Next Goal Frame */}
        <View style={styles.studyhomeAchievementsNextGoalFrame}>
          {/* Achievements Section */}
          <View style={styles.studyhomeAchievementsSection}>
            <View style={styles.studyhomeAchievementsHeader}>
              <Image source={imgFrame} style={styles.studyhomeAchievementsIcon} />
              <Text style={styles.studyhomeAchievementsTitle}>Achievements</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.studyhomeAchievementsCards}
              contentContainerStyle={styles.studyhomeAchievementsCardsContent}
            >
              {/* Streak Monster Card */}
              <LinearGradient
                colors={['#fcbe38', '#faa02a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.studyhomeAchievementCard, styles.studyhomeAchievementCardYellow]}
              >
                <Image source={imgBiFire1} style={styles.studyhomeAchievementCardIcon} />
                <View style={styles.studyhomeAchievementCardText}>
                  <Text style={styles.studyhomeAchievementCardTitle}>Streak Monster</Text>
                  <Text style={styles.studyhomeAchievementCardSubtitle} numberOfLines={1}>7 days in a Row</Text>
                </View>
                <Image source={imgBiFire} style={styles.studyhomeAchievementCardBgIcon} />
              </LinearGradient>

              {/* Quiz Master Card */}
              <LinearGradient
                colors={['#5d93f6', '#5359e9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[styles.studyhomeAchievementCard, styles.studyhomeAchievementCardBlue]}
              >
                <Image source={imgFa6SolidMedal1} style={styles.studyhomeAchievementCardIcon} />
                <View style={styles.studyhomeAchievementCardText}>
                  <Text style={styles.studyhomeAchievementCardTitle}>Quiz Master</Text>
                  <Text style={styles.studyhomeAchievementCardSubtitle} numberOfLines={1}>10 Quizzes Completed</Text>
                </View>
                <Image source={imgFa6SolidMedal} style={styles.studyhomeAchievementCardBgIcon} />
              </LinearGradient>

              {/* Streak Monster Card 2 */}
              <LinearGradient
                colors={['#40d37d', '#10a16d']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[styles.studyhomeAchievementCard, styles.studyhomeAchievementCardGreen]}
              >
                <Image source={imgSolarMedalStarCircleBoldDuotone1} style={styles.studyhomeAchievementCardIconLarge} />
                <View style={styles.studyhomeAchievementCardText}>
                  <Text style={styles.studyhomeAchievementCardTitle}>Streak Monster</Text>
                  <Text style={styles.studyhomeAchievementCardSubtitle} numberOfLines={1}>7 days in a Row</Text>
                </View>
                <Image source={imgSolarMedalStarCircleBoldDuotone} style={styles.studyhomeAchievementCardBgIconLarge} />
              </LinearGradient>

              {/* Expert Aviator Card (Locked) */}
              <LinearGradient
                colors={['#5c5c5c', '#2c2c2c']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.studyhomeAchievementCard, styles.studyhomeAchievementCardGray]}
              >
                <Image source={imgMaterialSymbolsLock} style={styles.studyhomeAchievementCardIcon} />
                <View style={styles.studyhomeAchievementCardText}>
                  <Text style={styles.studyhomeAchievementCardTitle}>Expert Aviator</Text>
                  <Text style={styles.studyhomeAchievementCardSubtitle} numberOfLines={1}>7 days in a Row</Text>
                </View>
                <Image source={imgMakiRocket} style={styles.studyhomeAchievementCardBgIcon} />
              </LinearGradient>

              {/* Locked Card 2 */}
              <LinearGradient
                colors={['#5c5c5c', '#2c2c2c']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.studyhomeAchievementCard, styles.studyhomeAchievementCardGray]}
              >
                <Image source={imgMaterialSymbolsLock} style={styles.studyhomeAchievementCardIcon} />
                <View style={styles.studyhomeAchievementCardText}>
                  <Text style={styles.studyhomeAchievementCardTitle}>Streak Monster</Text>
                  <Text style={styles.studyhomeAchievementCardSubtitle} numberOfLines={1}>7 days in a Row</Text>
                </View>
                <Image source={imgMakiRocket} style={styles.studyhomeAchievementCardBgIcon} />
              </LinearGradient>
            </ScrollView>
          </View>

          {/* Next Goal Section */}
          <View style={styles.studyhomeNextGoalSection}>
            <View style={styles.studyhomeNextGoalTitleRow}>
              <Text style={styles.studyhomeNextGoalTitle}>Next Goal : "Expert Aviator" (Level 10)</Text>
              <Text style={styles.studyhomeNextGoalProgress}>45% to level 10</Text>
            </View>
            <View style={styles.studyhomeNextGoalBarContainer}>
              <View style={styles.studyhomeNextGoalBarTrack} />
              <LinearGradient
                colors={['#f35b77', '#cc3352', '#f3be38', '#faa02a', '#f7ab0e', '#916408']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.studyhomeNextGoalBarFill}
              />
            </View>
          </View>
        </View>

        {/* Subjects Section */}
        <View style={styles.studyhomeSubjectsSection}>
          <Text style={styles.studyhomeSubjectsTitle}>Subjects</Text>
          <View style={styles.studyhomeSubjectsGrid}>
            {/* Air Meteorology */}
            <View style={styles.studyhomeSubjectCard}>
              <Image source={imgRectangle4258} style={styles.studyhomeSubjectCardImage} />
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.studyhomeSubjectCardOverlay}
              />
              <View style={styles.studyhomeSubjectCardContent}>
                <Text style={styles.studyhomeSubjectCardTitle} numberOfLines={1}>Air Meteorolgy</Text>
                <View style={styles.studyhomeSubjectCardProgressRow}>
                  <View style={styles.studyhomeSubjectCardProgress}>
                    <View style={styles.studyhomeSubjectCardProgressTrack} />
                    <LinearGradient
                      colors={['#16ad1b', '#fcbe38', '#faa02a', '#f7ab0e', '#916408']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.studyhomeSubjectCardProgressFill}
                    />
                  </View>
                  <Text style={styles.studyhomeSubjectCardChapters}>3/12 Chapters</Text>
                </View>
              </View>
            </View>

            {/* Air Navigation */}
            <View style={styles.studyhomeSubjectCard}>
              <Image source={imgRectangle4259} style={styles.studyhomeSubjectCardImage} />
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.studyhomeSubjectCardOverlay}
              />
              <View style={styles.studyhomeSubjectCardContent}>
                <Text style={styles.studyhomeSubjectCardTitle} numberOfLines={1}>Air Navigation</Text>
                <View style={styles.studyhomeSubjectCardProgressRow}>
                  <View style={styles.studyhomeSubjectCardProgress}>
                    <View style={styles.studyhomeSubjectCardProgressTrack} />
                    <LinearGradient
                      colors={['#16ad1b', '#fcbe38', '#faa02a', '#f7ab0e', '#916408']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.studyhomeSubjectCardProgressFill}
                    />
                  </View>
                  <Text style={styles.studyhomeSubjectCardChapters}>3/12 Chapters</Text>
                </View>
              </View>
            </View>

            {/* Air Regulation */}
            <View style={styles.studyhomeSubjectCard}>
              <Image source={imgRectangle4260} style={styles.studyhomeSubjectCardImage} />
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.studyhomeSubjectCardOverlay}
              />
              <View style={styles.studyhomeSubjectCardContent}>
                <Text style={styles.studyhomeSubjectCardTitle} numberOfLines={1}>Air Regulation</Text>
                <View style={styles.studyhomeSubjectCardProgressRow}>
                  <View style={styles.studyhomeSubjectCardProgress}>
                    <View style={styles.studyhomeSubjectCardProgressTrack} />
                    <LinearGradient
                      colors={['#16ad1b', '#fcbe38', '#faa02a', '#f7ab0e', '#916408']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.studyhomeSubjectCardProgressFill}
                    />
                  </View>
                  <Text style={styles.studyhomeSubjectCardChapters}>3/12 Chapters</Text>
                </View>
              </View>
            </View>

            {/* Technical General */}
            <View style={styles.studyhomeSubjectCard}>
              <Image source={imgRectangle4261} style={styles.studyhomeSubjectCardImage} />
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.studyhomeSubjectCardOverlay}
              />
              <View style={styles.studyhomeSubjectCardContent}>
                <Text style={styles.studyhomeSubjectCardTitle} numberOfLines={1}>Technical General</Text>
                <View style={styles.studyhomeSubjectCardProgressRow}>
                  <View style={styles.studyhomeSubjectCardProgress}>
                    <View style={styles.studyhomeSubjectCardProgressTrack} />
                    <LinearGradient
                      colors={['#16ad1b', '#fcbe38', '#faa02a', '#f7ab0e', '#916408']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.studyhomeSubjectCardProgressFill}
                    />
                  </View>
                  <Text style={styles.studyhomeSubjectCardChapters}>3/12 Chapters</Text>
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
  studyhomeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: APP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  studyhomeBottomSpacer: {
    position: 'absolute',
    bottom: 0,
    height: 62,
    left: 0,
    width: 430,
  },
  studyhomeTitleSearchFrame: {
    position: 'absolute',
    left: 24,
    top: 83,
    width: 382,
    flexDirection: 'column',
    gap: 12,
  },
  studyhomeTitleContainer: {
    width: 376,
  },
  studyhomeTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
  studyhomeSearchContainer: {
    width: 382,
    height: 44,
  },
  studyhomeSearchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  studyhomeSearchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
  },
  studyhomeSearchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  studyhomeSearchText: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#667085',
  },
  studyhomeScrollView: {
    flex: 1,
    marginTop: 187,
  },
  studyhomeMainContent: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 50,
    flexDirection: 'column',
    gap: 24,
  },
  studyhomeContinueLearningCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: 382,
  },
  studyhomeContinueLearningContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
    flex: 1,
  },
  studyhomeProgressCircleWrapper: {
    position: 'relative',
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
  },
  studyhomeProgressPercentage: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.011,
    color: '#168aad',
    zIndex: 1,
  },
  studyhomeProgressCircle: {
    width: 74,
    height: 74,
  },
  studyhomeContinueLearningText: {
    flex: 1,
    width: 218,
  },
  studyhomeContinueLearningTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 0,
  },
  studyhomeContinueLearningSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    color: '#525252',
    marginBottom: 0,
  },
  studyhomeContinueLearningChapters: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    color: '#525252',
  },
  studyhomeContinueLearningArrow: {
    width: 27.52,
    height: 27.52,
  },
  studyhomeArrowImage: {
    width: '100%',
    height: '100%',
  },
  studyhomeAchievementsNextGoalFrame: {
    width: 382,
    flexDirection: 'column',
    gap: 8,
    paddingTop: 0,
    paddingBottom: 12,
  },
  studyhomeAchievementsSection: {
    width: 382,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'column',
    gap: 8,
  },
  studyhomeAchievementsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  studyhomeAchievementsIcon: {
    width: 22,
    height: 22,
  },
  studyhomeAchievementsTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
  studyhomeAchievementsCards: {
    width: '100%',
  },
  studyhomeAchievementsCardsContent: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 12,
  },
  studyhomeAchievementCard: {
    width: 85,
    height: 85,
    borderRadius: 12,
    borderWidth: 1,
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  studyhomeAchievementCardYellow: {
    borderColor: '#fee349',
  },
  studyhomeAchievementCardBlue: {
    borderColor: '#c3ceff',
  },
  studyhomeAchievementCardGreen: {
    borderColor: '#b2ffd3',
  },
  studyhomeAchievementCardGray: {
    borderColor: '#dbdbdb',
  },
  studyhomeAchievementCardIcon: {
    width: 24,
    height: 24,
    marginBottom: 6,
  },
  studyhomeAchievementCardIconLarge: {
    width: 28,
    height: 28,
    marginBottom: 2,
  },
  studyhomeAchievementCardText: {
    alignItems: 'center',
    gap: 2,
  },
  studyhomeAchievementCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 12.218,
    color: '#ffffff',
    textAlign: 'center',
  },
  studyhomeAchievementCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6,
    lineHeight: 12.218,
    color: '#ffffff',
    textAlign: 'center',
  },
  studyhomeAchievementCardBgIcon: {
    position: 'absolute',
    width: 32,
    height: 32,
    right: 0,
    bottom: 0,
  },
  studyhomeAchievementCardBgIconLarge: {
    position: 'absolute',
    width: 38,
    height: 38,
    right: 0,
    bottom: 0,
  },
  studyhomeNextGoalSection: {
    width: 382,
    position: 'relative',
    flexDirection: 'column',
    gap: 8,
    paddingTop: 6,
    paddingBottom: 6,
  },
  studyhomeNextGoalTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  studyhomeNextGoalTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#000000',
  },
  studyhomeNextGoalProgress: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 24,
    color: '#535353',
  },
  studyhomeNextGoalBarContainer: {
    position: 'relative',
    width: 382,
    height: 10,
  },
  studyhomeNextGoalBarTrack: {
    position: 'absolute',
    backgroundColor: '#e5e7eb',
    height: 10,
    width: 382,
    borderRadius: 100,
    top: 0,
    left: 0,
  },
  studyhomeNextGoalBarFill: {
    position: 'absolute',
    height: 10,
    width: 212,
    borderRadius: 100,
    top: 0,
    left: 1,
  },
  studyhomeSubjectsSection: {
    width: 380,
  },
  studyhomeSubjectsTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 16,
  },
  studyhomeSubjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  studyhomeSubjectCard: {
    width: 182,
    height: 179,
    borderRadius: 14.648,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },
  studyhomeSubjectCardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  studyhomeSubjectCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 71,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    opacity: 0.8,
  },
  studyhomeSubjectCardContent: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: 79,
    flexDirection: 'column',
    gap: 6,
  },
  studyhomeSubjectCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 15.051,
    color: '#ffffff',
  },
  studyhomeSubjectCardProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4.48,
  },
  studyhomeSubjectCardProgress: {
    position: 'relative',
    width: 27,
    height: 3.509,
  },
  studyhomeSubjectCardProgressTrack: {
    position: 'absolute',
    width: 27,
    height: 3.509,
    backgroundColor: '#e5e7eb',
    borderRadius: 100,
    top: 0,
    left: 0,
  },
  studyhomeSubjectCardProgressFill: {
    position: 'absolute',
    width: 7,
    height: 3.51,
    borderRadius: 100,
    top: 0,
    left: 0,
  },
  studyhomeSubjectCardChapters: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 7,
    lineHeight: 10.714,
    color: '#ffffff',
  },
});

