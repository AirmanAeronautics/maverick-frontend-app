// DO NOT MODIFY OTHER FILES — Pilotinfo SCREEN ONLY
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
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets
const imgArrowArrowLeftMd = require('./PilotinfoAssets/arrow-left-md.png');
const imgMobileSignal = require('./PilotinfoAssets/mobile-signal.png');
const imgWifi = require('./PilotinfoAssets/wifi.png');
const imgBattery = require('./PilotinfoAssets/battery.png');
const imgOcticonUnverified24 = require('./PilotinfoAssets/unverified-icon.png');
const imgTablerUpload = require('./PilotinfoAssets/upload-icon.png');
const imgIconParkOutlineLoadingOne = require('./PilotinfoAssets/loading-icon.png');
const imgGroup = require('./PilotinfoAssets/verified-icon.png');
const imgGroup1 = require('./PilotinfoAssets/verified-icon-large.png');

const Pilotinfo = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>9:41</Text>
        <View style={styles.statusBarRight}>
          <Image source={imgMobileSignal} style={styles.statusBarIcon} />
          <Image source={imgWifi} style={styles.statusBarWifi} />
          <View style={styles.batteryContainer}>
            <Image source={imgBattery} style={styles.batteryImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Image source={imgArrowArrowLeftMd} style={styles.backButtonIcon} />
        </View>
        <Text style={styles.headerTitle}>Aviation Info</Text>
        <Text style={styles.headerSave}>Save</Text>
      </View>

      {/* Verification Banner */}
      <View style={styles.verificationBanner}>
        <View style={styles.verificationBannerContent}>
          <View style={styles.verificationBannerRow}>
            <View style={styles.verificationIconContainer}>
              <View style={styles.verificationIconInner}>
                <Image source={imgGroup1} style={styles.verificationIcon} />
              </View>
            </View>
            <Text style={styles.verificationText}>Upload required documents to verify</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Fields Container */}
        <View style={styles.formContainer}>
          {/* License level */}
          <View style={styles.inputField}>
            <View style={styles.inputTitleRow}>
              <Text style={styles.inputTitle}>License level</Text>
              <View style={[styles.statusBadge, styles.statusBadgeNotVerified]}>
                <Image source={imgOcticonUnverified24} style={styles.statusBadgeIcon} />
                <Text style={[styles.statusBadgeText, styles.statusBadgeTextNotVerified]}>Not verified</Text>
              </View>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.inputArea}>
                <Text style={styles.inputText}>Commercial Pilot License</Text>
              </View>
              <View style={styles.uploadButton}>
                <Image source={imgTablerUpload} style={styles.uploadIcon} />
              </View>
            </View>
          </View>

          {/* Type Rating */}
          <View style={styles.inputField}>
            <View style={styles.inputTitleRow}>
              <Text style={styles.inputTitle}>Type Rating</Text>
              <View style={[styles.statusBadge, styles.statusBadgeInReview]}>
                <Image source={imgIconParkOutlineLoadingOne} style={styles.statusBadgeIcon} />
                <Text style={[styles.statusBadgeText, styles.statusBadgeTextInReview]}>In Review</Text>
              </View>
            </View>
            <View style={styles.inputRow}>
              <View style={[styles.inputArea, styles.inputAreaSmall]}>
                <Text style={styles.inputText}>Cessna 172</Text>
              </View>
              <View style={[styles.inputArea, styles.inputAreaSmall, styles.inputAreaSecond]}>
                <Text style={styles.inputText}>Airbus A320</Text>
              </View>
              <View style={styles.uploadButton}>
                <Image source={imgTablerUpload} style={styles.uploadIcon} />
              </View>
            </View>
          </View>

          {/* FTO / Airline Affiliation */}
          <View style={styles.inputField}>
            <View style={styles.inputTitleRow}>
              <Text style={styles.inputTitle}>FTO / Airline Affliation</Text>
              <View style={[styles.statusBadge, styles.statusBadgeVerified]}>
                <View style={styles.verificationIconContainerSmall}>
                  <View style={styles.verificationIconInnerSmall}>
                    <Image source={imgGroup} style={styles.statusBadgeIconVerified} />
                  </View>
                </View>
                <Text style={[styles.statusBadgeText, styles.statusBadgeTextVerified]}>Verified</Text>
              </View>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.inputArea}>
                <Text style={styles.inputText}>Blue ray Aviation</Text>
              </View>
              <View style={styles.uploadButton}>
                <Image source={imgTablerUpload} style={styles.uploadIcon} />
              </View>
            </View>
          </View>

          {/* Total Flight Hours */}
          <View style={styles.inputField}>
            <View style={styles.inputTitleRow}>
              <Text style={styles.inputTitle}>Total Flight Hours</Text>
              <View style={[styles.statusBadge, styles.statusBadgeNotVerified]}>
                <Text style={[styles.statusBadgeText, styles.statusBadgeTextNotVerified]}>Not verified</Text>
              </View>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.inputArea}>
                <Text style={styles.inputText}>60 Hours</Text>
              </View>
              <View style={styles.uploadButton}>
                <Image source={imgTablerUpload} style={styles.uploadIcon} />
              </View>
            </View>
          </View>

          {/* Medical and Rating Certificates */}
          <View style={styles.inputField}>
            <View style={styles.inputTitleRow}>
              <Text style={styles.inputTitle}>Medical and Rating Certificates</Text>
              <View style={[styles.statusBadge, styles.statusBadgeVerified]}>
                <View style={styles.verificationIconContainerSmall}>
                  <View style={styles.verificationIconInnerSmall}>
                    <Image source={imgGroup} style={styles.statusBadgeIconVerified} />
                  </View>
                </View>
                <Text style={[styles.statusBadgeText, styles.statusBadgeTextVerified]}>Verified</Text>
              </View>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.inputArea}>
                <Text style={styles.inputText}>Medical Certificates</Text>
              </View>
              <View style={styles.uploadButton}>
                <Image source={imgTablerUpload} style={styles.uploadIcon} />
              </View>
            </View>
          </View>
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
    position: 'relative',
  },
  statusBar: {
    height: 50.502,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
    backgroundColor: '#FFFFFF',
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
  header: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    height: 66.507,
    width: 430,
    top: 47,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  backButtonContainer: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonIcon: {
    width: 27.52,
    height: 27.52,
  },
  headerTitle: {
    position: 'absolute',
    left: 215,
    width: 100,
    marginLeft: -50,
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  headerSave: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#168aad',
    textAlign: 'center',
  },
  verificationBanner: {
    position: 'absolute',
    backgroundColor: '#edf7ff',
    borderRadius: 5,
    width: 385,
    alignSelf: 'center',
    top: 123,
  },
  verificationBannerContent: {
    paddingHorizontal: 18,
    paddingVertical: 17,
    width: '100%',
  },
  verificationBannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 260,
  },
  verificationIconContainer: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
  verificationIconInner: {
    position: 'absolute',
    top: 1.76,
    left: 1.75,
    right: 1.75,
    bottom: 1.75,
  },
  verificationIcon: {
    width: '100%',
    height: '100%',
  },
  verificationText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13.933,
    fontWeight: '500',
    color: '#00485a',
    lineHeight: 13.933,
  },
  scrollView: {
    flex: 1,
    marginTop: 195,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  formContainer: {
    width: 384,
    alignSelf: 'center',
    marginTop: 195,
    gap: 32,
  },
  inputField: {
    height: 82,
    width: '100%',
    position: 'relative',
  },
  inputTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11.478,
    height: 24.103,
    marginBottom: 12.097,
  },
  inputTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 23,
    paddingHorizontal: 9.52,
    paddingVertical: 5.818,
    borderRadius: 27,
    borderWidth: 1.063,
    gap: 5.289,
  },
  statusBadgeNotVerified: {
    borderColor: '#168aad',
    gap: 5.289,
  },
  statusBadgeInReview: {
    borderColor: '#1f64ee',
    gap: 5.289,
  },
  statusBadgeVerified: {
    borderColor: '#008f35',
    gap: 4,
  },
  statusBadgeIcon: {
    width: 10,
    height: 10,
  },
  statusBadgeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 10,
  },
  statusBadgeTextNotVerified: {
    color: '#168aad',
  },
  statusBadgeTextInReview: {
    color: '#1f64ee',
  },
  statusBadgeTextVerified: {
    color: '#008f35',
  },
  verificationIconContainerSmall: {
    width: 10,
    height: 10,
    overflow: 'hidden',
  },
  verificationIconInnerSmall: {
    position: 'absolute',
    top: 1.1,
    left: 1.09,
    right: 1.09,
    bottom: 1.09,
  },
  statusBadgeIconVerified: {
    width: '100%',
    height: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
    position: 'absolute',
    top: 36,
    left: 0,
  },
  inputArea: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#edf1f3',
    borderRadius: 11.478,
    height: 46,
    paddingHorizontal: 16.069,
    justifyContent: 'center',
    width: 328,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 1,
  },
  inputAreaSmall: {
    width: 125,
  },
  inputAreaSecond: {
    position: 'absolute',
    left: 125,
    borderColor: '#ebebeb',
    paddingHorizontal: 16,
  },
  inputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#282828',
    lineHeight: 22.4,
    letterSpacing: -0.16,
  },
  uploadButton: {
    position: 'absolute',
    left: 338,
    backgroundColor: '#168aad',
    borderWidth: 1.148,
    borderColor: '#edf1f3',
    borderRadius: 11.478,
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 1,
  },
  uploadIcon: {
    width: 24,
    height: 24,
  },
});

export default Pilotinfo;

