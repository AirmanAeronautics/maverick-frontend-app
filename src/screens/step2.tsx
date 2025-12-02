import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgRectangle4252 = 'https://www.figma.com/api/mcp/asset/26b1828c-d647-46a2-91f9-4439b9fe647a';
const imgRectangle4253 = 'https://www.figma.com/api/mcp/asset/18fb08e2-128b-4f6e-8a35-d97671ff12c7';
const imgRectangle4254 = 'https://www.figma.com/api/mcp/asset/9f16ae60-d679-4e15-83fe-5f6a8e31d39a';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/eb6bfd76-1ca2-41ad-9ed6-47b040cf370a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/23c96b17-d74a-4880-a854-1634e9f83611';
const imgBattery = 'https://www.figma.com/api/mcp/asset/0df8df47-306d-4f70-ba45-5e52be4d0faa';
const imgFrame = 'https://www.figma.com/api/mcp/asset/09a6bdb3-a23a-4a4d-9157-94bf19890b5c';
const imgFrame1 = 'https://www.figma.com/api/mcp/asset/a0a150ed-628b-4591-aa35-658b2f924007';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/6969daf3-58b8-4ebb-af5f-f1a6ae9e6066';
const imgArrowArrowLeftMd1 = 'https://www.figma.com/api/mcp/asset/18c22802-7e78-421e-b2c4-efd0fd0eff2d';

const Step2 = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>9:41</Text>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarWifi} />
          <View style={styles.batteryContainer}>
            <Image source={{ uri: imgBattery }} style={styles.batteryImage} />
          </View>
        </View>
      </View>

      {/* Step Header */}
      <View style={styles.stepHeader}>
        <Text style={styles.stepText}>Step 2 of 3</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressDotActive} />
          <View style={styles.progressDotActive2} />
          <View style={styles.progressDot} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>What's Your Role</Text>
          <Text style={styles.subtitle}>Help us to customize your Experience</Text>
        </View>

        {/* Role Cards */}
        <View style={styles.roleCardsContainer}>
          {/* Student Pilot Card */}
          <View style={styles.roleCard}>
            <View style={styles.roleCardImageContainer}>
              <Image source={{ uri: imgRectangle4252 }} style={styles.roleCardImage} />
            </View>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.95)', 'rgba(0, 0, 0, 0)']}
              locations={[0.2736, 0.9954]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={[styles.roleCardOverlay, styles.roleCardOverlay1]}
            />
            <Text style={[styles.roleCardText, styles.roleCardText1]}>Student Pilot</Text>
          </View>

          {/* Seasoned Pilot Card */}
          <View style={[styles.roleCard, styles.roleCard2]}>
            <View style={styles.roleCardImageContainer}>
              <Image source={{ uri: imgRectangle4253 }} style={styles.roleCardImage} />
            </View>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.95)', 'rgba(0, 0, 0, 0)']}
              locations={[0.2736, 0.9954]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={[styles.roleCardOverlay, styles.roleCardOverlay2]}
            />
            <Text style={[styles.roleCardText, styles.roleCardText2]}>Seasoned Pilot</Text>
          </View>

          {/* Flight Instructor Card */}
          <View style={styles.roleCard}>
            <View style={styles.roleCardImageContainer}>
              <Image source={{ uri: imgRectangle4254 }} style={styles.roleCardImage} />
            </View>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.95)', 'rgba(0, 0, 0, 0)']}
              locations={[0.2736, 0.9954]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={[styles.roleCardOverlay, styles.roleCardOverlay3]}
            />
            <Text style={[styles.roleCardText, styles.roleCardText3]}>Flight Instructor</Text>
            <Text style={styles.roleCardPremiumText}>Instructors get premium features</Text>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Upload License Section */}
      <View style={styles.uploadLicenseContainer}>
        <View style={styles.uploadLicenseContent}>
          <View style={styles.uploadLicenseIconContainer}>
            <View style={styles.uploadLicenseIconBg}>
              <Image source={{ uri: imgFrame1 }} style={styles.uploadLicenseIcon} />
            </View>
          </View>
          <View style={styles.uploadLicenseTextContainer}>
            <Text style={styles.uploadLicenseTitle}>Upload License</Text>
            <Text style={styles.uploadLicenseSubtitle}>Verify your credentials.</Text>
          </View>
        </View>
        <Image source={{ uri: imgFrame }} style={styles.uploadLicenseArrow} />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.previousButton}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.previousArrow} />
          <Text style={styles.previousText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
          <View style={styles.nextArrowContainer}>
            <Image source={{ uri: imgArrowArrowLeftMd1 }} style={styles.nextArrow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10.33,
  },
  statusBar: {
    height: 50.502,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
  },
  statusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18.365,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    paddingVertical: 1.148,
  },
  statusBarIcon: {
    width: 20.66,
    height: 11.479,
  },
  statusBarWifi: {
    width: 17.529,
    height: 12.586,
  },
  batteryContainer: {
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    width: 30.965,
    height: 14.921,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 76,
    width: APP_WIDTH,
  },
  stepText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 32,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 110,
  },
  progressDotActive: {
    width: 31,
    height: 10,
    borderRadius: 30,
    backgroundColor: '#168aad',
  },
  progressDotActive2: {
    width: 32,
    height: 10,
    borderRadius: 30,
    backgroundColor: '#168aad',
  },
  progressDot: {
    width: 31,
    height: 10,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
  },
  contentContainer: {
    position: 'absolute',
    top: 140,
    left: (APP_WIDTH - 382) / 2,
    width: 382,
    flexDirection: 'column',
    gap: 24,
  },
  titleSection: {
    flexDirection: 'column',
    gap: 2,
    width: 299,
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 25.2,
    letterSpacing: -0.18,
  },
  roleCardsContainer: {
    flexDirection: 'column',
    gap: 12,
    width: '100%',
  },
  roleCard: {
    position: 'relative',
    height: 139,
    width: '100%',
    borderRadius: 5.966,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 1.491, height: 1.491 },
    shadowOpacity: 0.2,
    shadowRadius: 7.457,
    elevation: 4,
  },
  roleCard2: {
    height: 140,
  },
  roleCardImageContainer: {
    position: 'absolute',
    top: 0.12,
    left: 0,
    width: 382,
    height: 149,
  },
  roleCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  roleCardOverlay: {
    position: 'absolute',
    left: 0,
    width: 382,
    borderRadius: 5.966,
    opacity: 0.8,
  },
  roleCardOverlay1: {
    top: 41,
    height: 98,
  },
  roleCardOverlay2: {
    top: 28,
    height: 112,
  },
  roleCardOverlay3: {
    top: 50,
    height: 89,
  },
  roleCardText: {
    position: 'absolute',
    left: 16,
    fontFamily: 'Helvetica Neue',
    fontSize: 14.319,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 10.739,
  },
  roleCardText1: {
    top: 121.5,
    transform: [{ translateY: -5.37 }],
  },
  roleCardText2: {
    top: 122.5,
    transform: [{ translateY: -5.37 }],
  },
  roleCardText3: {
    top: 122.5,
    transform: [{ translateY: -5.37 }],
  },
  roleCardPremiumText: {
    position: 'absolute',
    left: (382 / 2) + 32,
    top: 113,
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '400',
    color: '#edf7ff',
    lineHeight: 20,
  },
  divider: {
    position: 'absolute',
    top: 689,
    left: 0,
    width: APP_WIDTH,
    height: 1,
    backgroundColor: '#e9f1f9',
    borderTopWidth: 1,
    borderTopColor: '#e9f1f9',
  },
  uploadLicenseContainer: {
    position: 'absolute',
    top: 714,
    left: 24,
    width: 382,
    height: 76,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  uploadLicenseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  uploadLicenseIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadLicenseIconBg: {
    width: 41,
    height: 41,
    borderRadius: 6405.609,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadLicenseIcon: {
    width: 15.375,
    height: 15.375,
  },
  uploadLicenseTextContainer: {
    flexDirection: 'column',
    gap: 4,
    width: 142,
  },
  uploadLicenseTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20,
  },
  uploadLicenseSubtitle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    color: '#757575',
    lineHeight: 20,
  },
  uploadLicenseArrow: {
    width: 10,
    height: 16,
  },
  bottomNav: {
    position: 'absolute',
    top: 829,
    left: (APP_WIDTH - 373) / 2,
    width: 373,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previousButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  previousArrow: {
    width: 20,
    height: 20,
  },
  previousText: {
    fontFamily: 'Inter',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#168aad',
    lineHeight: 22.497,
    letterSpacing: -0.1607,
  },
  nextButton: {
    width: 124,
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 27.547,
    paddingVertical: 11.478,
    borderRadius: 11.478,
    backgroundColor: '#168aad',
    borderWidth: 1.148,
    borderColor: '#FFFFFF',
    shadowColor: 'rgba(22, 138, 173, 0.48)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 4,
    gap: 4,
  },
  nextButtonText: {
    fontFamily: 'Inter',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 22.497,
    letterSpacing: -0.1607,
  },
  nextArrowContainer: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
  },
  nextArrow: {
    width: 20,
    height: 20,
  },
});

export default Step2;

