import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgEllipse191 = 'https://www.figma.com/api/mcp/asset/d41ae17a-e008-4673-9f28-4abd21ec3f7c';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/67ff1704-0ee8-4ed6-8015-a88f41d97701';
const imgWifi = 'https://www.figma.com/api/mcp/asset/884b2c55-422d-4b8c-b058-7bc6d34663e5';
const imgBattery = 'https://www.figma.com/api/mcp/asset/c063dd3e-10c2-4340-bb76-efca961ff75d';
const img = 'https://www.figma.com/api/mcp/asset/e67cd214-48ee-44a0-9b7c-c1ffb4350aa2';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/ed06d357-8351-420d-88a1-5fb5ae10696c';
const imgArrowArrowLeftMd1 = 'https://www.figma.com/api/mcp/asset/429d6cb5-de33-48d8-b5a2-4140cc8addc4';

const Step1 = () => {
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
        <Text style={styles.stepText}>Step 1 of 3</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressDotActive} />
          <View style={styles.progressDot} />
          <View style={[styles.progressDot, styles.progressDotLast]} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Tell us about Yourself</Text>
          <Text style={styles.subtitle}>Let's build your profile</Text>
        </View>

        {/* Profile Photo Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileLabelRow}>
            <Text style={styles.profileLabel}>Profile Photo</Text>
            <Text style={styles.optionalLabel}>Optional</Text>
          </View>
          <View style={styles.profileUploadContainer}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileInitials}>NK</Text>
            </View>
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileText1}>Tap to Upload your Photo</Text>
              <Text style={styles.profileText2}>JPG or PNG, max 5 mb</Text>
            </View>
            <TouchableOpacity style={styles.addPhotoButton}>
              <Text style={styles.addPhotoButtonText}>Add Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Name Input */}
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Name</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter your Full name"
              placeholderTextColor="#6a6a6a"
            />
          </View>
        </View>

        {/* Pilot Name Input */}
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Call Sign</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter your Call Sign"
              placeholderTextColor="#6a6a6a"
            />
          </View>
        </View>

        {/* Phone Number Input */}
        <View style={styles.phoneField}>
          <Text style={styles.phoneLabel}>Phone Number</Text>
          <View style={styles.phoneInputArea}>
            <View style={styles.countryCodeContainer}>
              <Image source={{ uri: imgEllipse191 }} style={styles.countryFlag} />
              <Image source={{ uri: img }} style={styles.arrowDown} />
            </View>
            <TextInput
              style={styles.phoneInputText}
              placeholder="021345678"
              placeholderTextColor="#1a1c1e"
            />
          </View>
        </View>

        {/* Bio Input */}
        <View style={styles.bioField}>
          <Text style={styles.bioLabel}>Bio</Text>
          <View style={styles.bioInputArea}>
            <TextInput
              style={styles.bioInputText}
              placeholder="Tell us about your Aviation Journey"
              placeholderTextColor="#6a6a6a"
              multiline
              numberOfLines={3}
            />
          </View>
        </View>
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
  progressDot: {
    width: 32,
    height: 10,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
  },
  progressDotLast: {
    width: 31,
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
  profileSection: {
    flexDirection: 'column',
    gap: 10,
    width: 383,
  },
  profileLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 23,
    width: '100%',
  },
  profileLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
  },
  optionalLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 19.2,
    letterSpacing: -0.24,
  },
  profileUploadContainer: {
    borderWidth: 1.15,
    borderColor: '#edf1f3',
    borderRadius: 8,
    height: 105,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14.85,
    position: 'relative',
  },
  profileAvatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: '#edf7ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontFamily: 'Helvetica Neue',
    fontSize: 24.762,
    fontWeight: '500',
    color: '#2591b2',
    lineHeight: 39.619,
    letterSpacing: -0.4952,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 11,
    flexDirection: 'column',
    gap: 2,
  },
  profileText1: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
  },
  profileText2: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  addPhotoButton: {
    width: 80,
    height: 25.731,
    backgroundColor: '#168aad',
    borderRadius: 20.585,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 9.357,
    paddingVertical: 10.292,
  },
  addPhotoButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 11.585,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 18.536,
    letterSpacing: -0.2317,
  },
  inputField: {
    flexDirection: 'column',
    gap: 2.296,
    width: '100%',
  },
  inputLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
  },
  inputArea: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#edf1f3',
    borderRadius: 11.478,
    height: 52.798,
    paddingHorizontal: 16.069,
    paddingVertical: 13.99,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 2,
  },
  inputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 19.6,
    letterSpacing: -0.14,
    flex: 1,
  },
  phoneField: {
    flexDirection: 'column',
    gap: 2,
    width: '100%',
  },
  phoneLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
    width: 95,
  },
  phoneInputArea: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#edf1f3',
    borderRadius: 10,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 14,
    paddingVertical: 13,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  countryCodeContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#edf1f3',
    height: 53,
    width: 62,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
    gap: 7,
  },
  countryFlag: {
    width: 18,
    height: 18,
  },
  arrowDown: {
    width: 12,
    height: 12,
  },
  phoneInputText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 19.6,
    letterSpacing: -0.14,
    flex: 1,
    marginLeft: 10,
  },
  bioField: {
    flexDirection: 'column',
    gap: 2.296,
    width: '100%',
  },
  bioLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
  },
  bioInputArea: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#edf1f3',
    borderRadius: 11.478,
    height: 75,
    paddingHorizontal: 14.92,
    paddingTop: 15.3,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 2,
  },
  bioInputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 19.6,
    letterSpacing: -0.14,
    textAlignVertical: 'top',
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

export default Step1;

