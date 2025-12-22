// DO NOT MODIFY OTHER FILES — Instructorinfo SCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');
const instDESIGN_WIDTH = 430.419;
const instAPP_WIDTH = Math.min(screenWidth, instDESIGN_WIDTH);

// Image assets - using same icons as Pilotinfo
const instImgArrowArrowLeftMd = Image.resolveAssetSource(require('../../Arrow_Left_MD.svg')).uri;
const instImgMobileSignal = Image.resolveAssetSource(require('../../Mobile Signal.svg')).uri;
const instImgWifi = Image.resolveAssetSource(require('../../Wifi.svg')).uri;
const instImgBattery = Image.resolveAssetSource(require('../../_StatusBar-battery.svg')).uri;
const instImgOcticonUnverified24 = Image.resolveAssetSource(require('../../unverified.svg')).uri;
const instImgTablerUpload = Image.resolveAssetSource(require('../../tabler_upload.svg')).uri;
const instImgIconParkOutlineLoadingOne = Image.resolveAssetSource(require('../../loading.svg')).uri;
const instImgGroup = Image.resolveAssetSource(require('../../circle-tick.svg')).uri;
const instImgGroup1 = Image.resolveAssetSource(require('../../circle-tick.svg')).uri;

const Instructorinfo = () => {
  const [instructorRole, setInstructorRole] = useState('Ground Instructor');
  const [instructorRoleMenuOpen, setInstructorRoleMenuOpen] = useState(false);
  
  const INSTRUCTOR_ROLE_OPTIONS = ['Ground Instructor', 'Flight Instructor', 'Simulator Instructor'];

  return (
    <View style={instStyles.instContainer}>
      {/* Status Bar */}
      <View style={instStyles.instStatusBar}>
        <Text style={instStyles.instStatusBarTime}>9:41</Text>
        <View style={instStyles.instStatusBarRight}>
          <Image source={{ uri: instImgMobileSignal }} style={instStyles.instStatusBarIcon} />
          <Image source={{ uri: instImgWifi }} style={instStyles.instStatusBarWifi} />
          <View style={instStyles.instBatteryContainer}>
            <Image source={{ uri: instImgBattery }} style={instStyles.instBatteryImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={instStyles.instHeader}>
        <View style={instStyles.instBackButtonContainer}>
          <Image source={{ uri: instImgArrowArrowLeftMd }} style={instStyles.instBackButtonIcon} />
        </View>
        <Text style={instStyles.instHeaderTitle}>Aviation Info</Text>
        <Text style={instStyles.instHeaderSave}>Save</Text>
      </View>

      {/* Verification Banner */}
      <View style={instStyles.instVerificationBanner}>
        <View style={instStyles.instVerificationBannerContent}>
          <View style={instStyles.instVerificationBannerRow}>
            <View style={instStyles.instVerificationIconContainer}>
              <View style={instStyles.instVerificationIconInner}>
                <Image source={{ uri: instImgGroup1 }} style={instStyles.instVerificationIcon} />
              </View>
            </View>
            <Text style={instStyles.instVerificationText}>Upload required documents to verify</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        style={instStyles.instScrollView}
        contentContainerStyle={instStyles.instScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Fields Container */}
        <View style={instStyles.instFormContainer}>
          {/* License level */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>License level</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeNotVerified]}>
                <Image source={{ uri: instImgOcticonUnverified24 }} style={instStyles.instStatusBadgeIcon} />
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextNotVerified]}>Not verified</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={instStyles.instInputArea}>
                <Text style={instStyles.instInputText}>Class 4</Text>
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>

          {/* Type Rating */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>Type Rating</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeInReview]}>
                <Image source={{ uri: instImgIconParkOutlineLoadingOne }} style={instStyles.instStatusBadgeIcon} />
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextInReview]}>In Review</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={[instStyles.instInputArea, instStyles.instInputAreaSmall]}>
                <Text style={instStyles.instInputText}>Cessna 172</Text>
              </View>
              <View style={[instStyles.instInputArea, instStyles.instInputAreaSmall, instStyles.instInputAreaSecond]}>
                <Text style={instStyles.instInputText}>Airbus A320</Text>
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>

          {/* FTO / Airline Affiliation */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>FTO / Airline Affliation</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeVerified]}>
                <View style={instStyles.instVerificationIconContainerSmall}>
                  <View style={instStyles.instVerificationIconInnerSmall}>
                    <Image source={{ uri: instImgGroup }} style={instStyles.instStatusBadgeIconVerified} />
                  </View>
                </View>
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextVerified]}>Verified</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={instStyles.instInputArea}>
                <Text style={instStyles.instInputText}>Blue ray Aviation</Text>
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>

          {/* Total Flight Hours */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>Total Flight Hours</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeNotVerified]}>
                <Image source={{ uri: instImgOcticonUnverified24 }} style={instStyles.instStatusBadgeIcon} />
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextNotVerified]}>Not verified</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={instStyles.instInputArea}>
                <Text style={instStyles.instInputText}>60 Hours</Text>
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>

          {/* Instructor Role */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>Instructor Role</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeNotVerified]}>
                <Image source={{ uri: instImgOcticonUnverified24 }} style={instStyles.instStatusBadgeIcon} />
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextNotVerified]}>Not verified</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={instStyles.instInputArea}
                  onPress={() => setInstructorRoleMenuOpen(!instructorRoleMenuOpen)}
                >
                  <Text style={instStyles.instInputText}>{instructorRole}</Text>
                  <Ionicons 
                    name={instructorRoleMenuOpen ? 'chevron-up' : 'chevron-down'} 
                    size={18} 
                    color="#6a6a6a" 
                    style={instStyles.instDropdownIcon}
                  />
                </TouchableOpacity>
                {instructorRoleMenuOpen && (
                  <View style={instStyles.instDropdownMenu}>
                    {INSTRUCTOR_ROLE_OPTIONS.map(option => (
                      <TouchableOpacity
                        key={option}
                        style={instStyles.instDropdownOption}
                        activeOpacity={0.85}
                        onPress={() => {
                          setInstructorRole(option);
                          setInstructorRoleMenuOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            instStyles.instDropdownOptionLabel,
                            option === instructorRole && instStyles.instDropdownOptionLabelActive,
                          ]}
                        >
                          {option}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>

          {/* Total Instruction Hours */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>Total Instruction Hours</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeNotVerified]}>
                <Image source={{ uri: instImgOcticonUnverified24 }} style={instStyles.instStatusBadgeIcon} />
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextNotVerified]}>Not verified</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={instStyles.instInputArea}>
                <Text style={instStyles.instInputText}>60 Hours</Text>
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>

          {/* Medical and Rating Certificates */}
          <View style={instStyles.instInputField}>
            <View style={instStyles.instInputTitleRow}>
              <Text style={instStyles.instInputTitle}>Medical and Rating Certificates</Text>
              <View style={[instStyles.instStatusBadge, instStyles.instStatusBadgeVerified]}>
                <View style={instStyles.instVerificationIconContainerSmall}>
                  <View style={instStyles.instVerificationIconInnerSmall}>
                    <Image source={{ uri: instImgGroup }} style={instStyles.instStatusBadgeIconVerified} />
                  </View>
                </View>
                <Text style={[instStyles.instStatusBadgeText, instStyles.instStatusBadgeTextVerified]}>Verified</Text>
              </View>
            </View>
            <View style={instStyles.instInputRow}>
              <View style={instStyles.instInputArea}>
                <Text style={instStyles.instInputText}>Medical Certificates</Text>
              </View>
              <View style={instStyles.instUploadButton}>
                <Image source={{ uri: instImgTablerUpload }} style={instStyles.instUploadIcon} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const instStyles = StyleSheet.create({
  instContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: instAPP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  instStatusBar: {
    height: 50.502,
    width: instAPP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
    backgroundColor: '#FFFFFF',
  },
  instStatusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18.365,
  },
  instStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    paddingVertical: 1.148,
  },
  instStatusBarIcon: {
    width: 20.66,
    height: 11.479,
  },
  instStatusBarWifi: {
    width: 17.529,
    height: 12.586,
  },
  instBatteryContainer: {
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instBatteryImage: {
    width: 30.965,
    height: 14.921,
  },
  instHeader: {
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
  instBackButtonContainer: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instBackButtonIcon: {
    width: 27.52,
    height: 27.52,
  },
  instHeaderTitle: {
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
  instHeaderSave: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#168aad',
    textAlign: 'center',
  },
  instVerificationBanner: {
    position: 'absolute',
    backgroundColor: '#edf7ff',
    borderRadius: 5,
    width: 385,
    alignSelf: 'center',
    top: 123,
  },
  instVerificationBannerContent: {
    paddingHorizontal: 18,
    paddingVertical: 17,
    width: '100%',
  },
  instVerificationBannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 260,
  },
  instVerificationIconContainer: {
    width: 16,
    height: 16,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instVerificationIconInner: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instVerificationIcon: {
    width: 16,
    height: 16,
    tintColor: '#00485A',
  },
  instVerificationText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13.933,
    fontWeight: '500',
    color: '#00485a',
    lineHeight: 13.933,
  },
  instScrollView: {
    flex: 1,
    marginTop: 195,
  },
  instScrollContent: {
    paddingBottom: 100,
  },
  instFormContainer: {
    width: 384,
    alignSelf: 'center',
    marginTop: 195,
    gap: 32,
  },
  instInputField: {
    height: 82,
    width: '100%',
    position: 'relative',
  },
  instInputTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11.478,
    height: 24.103,
    marginBottom: 12.097,
  },
  instInputTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20.8,
    letterSpacing: -0.26,
  },
  instStatusBadge: {
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
  instStatusBadgeNotVerified: {
    borderColor: '#168aad',
    gap: 5.289,
  },
  instStatusBadgeInReview: {
    borderColor: '#1f64ee',
    gap: 5.289,
  },
  instStatusBadgeVerified: {
    borderColor: '#008f35',
    gap: 4,
  },
  instStatusBadgeIcon: {
    width: 10,
    height: 10,
  },
  instStatusBadgeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 10,
  },
  instStatusBadgeTextNotVerified: {
    color: '#168aad',
  },
  instStatusBadgeTextInReview: {
    color: '#1f64ee',
  },
  instStatusBadgeTextVerified: {
    color: '#008f35',
  },
  instVerificationIconContainerSmall: {
    width: 8,
    height: 8,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instVerificationIconInnerSmall: {
    width: 8,
    height: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instStatusBadgeIconVerified: {
    width: 8,
    height: 8,
  },
  instInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
    position: 'absolute',
    top: 36,
    left: 0,
  },
  instInputArea: {
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  instInputAreaSmall: {
    width: 125,
  },
  instInputAreaSecond: {
    position: 'absolute',
    left: 125,
    borderColor: '#ebebeb',
    paddingHorizontal: 16,
  },
  instInputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#282828',
    lineHeight: 22.4,
    letterSpacing: -0.16,
  },
  instUploadButton: {
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
  instUploadIcon: {
    width: 24,
    height: 24,
  },
  instDropdownIcon: {
    marginLeft: 'auto',
  },
  instDropdownMenu: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 328,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#edf1f3',
    borderRadius: 11.478,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 2.296 },
    shadowOpacity: 1,
    shadowRadius: 4.592,
    elevation: 3,
    zIndex: 1000,
    overflow: 'hidden',
  },
  instDropdownOption: {
    paddingHorizontal: 16.069,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f3',
  },
  instDropdownOptionLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#282828',
    lineHeight: 22.4,
    letterSpacing: -0.16,
  },
  instDropdownOptionLabelActive: {
    color: '#168aad',
  },
});

export default Instructorinfo;

