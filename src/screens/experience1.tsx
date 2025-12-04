// DO NOT MODIFY OTHER FILES — PERMISSION SCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/1651ae52-0077-4ef6-9cd6-9d6890396c9a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/f8a0ee2e-0ff2-4918-a2a1-769a3c57c7ad';
const imgBattery = 'https://www.figma.com/api/mcp/asset/1bfca9be-42ad-4adb-b5ba-94228bb72f6a';
const imgCamera = 'https://www.figma.com/api/mcp/asset/09a6bdb3-a23a-4a4d-9157-94bf19890b5c';
const imgArrowRight = 'https://www.figma.com/api/mcp/asset/a0a150ed-628b-4591-aa35-658b2f924007';

type Experience1Props = {
  onContinue?: () => void;
};

const Experience1 = ({ onContinue }: Experience1Props = {}) => {
  const [selectedRole, setSelectedRole] = useState<'pilot' | 'instructor'>('pilot');
  const [licenseLevel, setLicenseLevel] = useState('');
  const [typeRating, setTypeRating] = useState('');
  const [ftoAffiliation, setFtoAffiliation] = useState('');
  const [pilotNumber, setPilotNumber] = useState('');
  const [licenseLevelMenuOpen, setLicenseLevelMenuOpen] = useState(false);
  const [typeRatingMenuOpen, setTypeRatingMenuOpen] = useState(false);
  const [ftoAffiliationMenuOpen, setFtoAffiliationMenuOpen] = useState(false);

  const LICENSE_LEVEL_OPTIONS = selectedRole === 'pilot' 
    ? [
        'Student Pilot License (SPL)',
        'Private Pilot License (PPL)',
        'Commercial Pilot License (CPL)',
        'Airline Transport Pilot License (ATPL)',
      ]
    : [
        'Class 4 Flight Instructor Rating',
        'Class 3 Flight Instructor Rating',
        'Class 2 Flight Instructor Rating',
        'Class 1 Flight Instructor Rating',
      ];

  const TYPE_RATING_OPTIONS = [
    'Single Engine',
    'Multi Engine',
    'Jet',
    'Turboprop',
  ];

  const FTO_AFFILIATION_OPTIONS = [
    'Airline A',
    'Airline B',
    'Flight Training Organization A',
    'Flight Training Organization B',
  ];

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
        <Text style={styles.stepText}>Step 2 of 2</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressDotActive} />
          <View style={[styles.progressDotActive, styles.progressDotActiveSecond]} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Your Flight Experience</Text>
          <Text style={styles.subtitle}>Let's build your profile</Text>
        </View>

        {/* Segmented Control */}
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              selectedRole === 'pilot' && styles.segmentButtonActive,
            ]}
            onPress={() => {
              setSelectedRole('pilot');
              setLicenseLevel('');
            }}
          >
            <Text
              style={[
                styles.segmentButtonText,
                selectedRole === 'pilot' && styles.segmentButtonTextActive,
              ]}
            >
              Pilot
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              selectedRole === 'instructor' && styles.segmentButtonActive,
            ]}
            onPress={() => {
              setSelectedRole('instructor');
              setLicenseLevel('');
            }}
          >
            <Text
              style={[
                styles.segmentButtonText,
                selectedRole === 'instructor' && styles.segmentButtonTextActive,
              ]}
            >
              Flight Instructor
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.inputFields}>
          {/* License Level */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>License Level</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.inputArea}
              onPress={() => setLicenseLevelMenuOpen(!licenseLevelMenuOpen)}
            >
              <Text style={[styles.inputText, !licenseLevel && styles.inputTextPlaceholder]}>
                {licenseLevel || 'Select your License Level'}
              </Text>
              <Ionicons 
                name={licenseLevelMenuOpen ? 'chevron-up' : 'chevron-down'} 
                size={18} 
                color="#6a6a6a" 
              />
            </TouchableOpacity>
            {licenseLevelMenuOpen && (
              <View style={styles.dropdownMenu}>
                {LICENSE_LEVEL_OPTIONS.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownOption}
                    activeOpacity={0.85}
                    onPress={() => {
                      setLicenseLevel(option);
                      setLicenseLevelMenuOpen(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.dropdownOptionLabel,
                        option === licenseLevel && styles.dropdownOptionLabelActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Type Rating */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Type Rating</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.inputArea}
              onPress={() => setTypeRatingMenuOpen(!typeRatingMenuOpen)}
            >
              <Text style={[styles.inputText, !typeRating && styles.inputTextPlaceholder]}>
                {typeRating || 'Enter your Type Rating'}
              </Text>
              <Ionicons 
                name={typeRatingMenuOpen ? 'chevron-up' : 'chevron-down'} 
                size={18} 
                color="#6a6a6a" 
              />
            </TouchableOpacity>
            {typeRatingMenuOpen && (
              <View style={styles.dropdownMenu}>
                {TYPE_RATING_OPTIONS.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownOption}
                    activeOpacity={0.85}
                    onPress={() => {
                      setTypeRating(option);
                      setTypeRatingMenuOpen(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.dropdownOptionLabel,
                        option === typeRating && styles.dropdownOptionLabelActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* FTO / Airline Affiliation */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>FTO / Airline Affiliation</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.inputArea}
              onPress={() => setFtoAffiliationMenuOpen(!ftoAffiliationMenuOpen)}
            >
              <Text style={[styles.inputText, !ftoAffiliation && styles.inputTextPlaceholder]}>
                {ftoAffiliation || 'Enter your FTOs / Airline Affiliation'}
              </Text>
              <Ionicons 
                name={ftoAffiliationMenuOpen ? 'chevron-up' : 'chevron-down'} 
                size={18} 
                color="#6a6a6a" 
              />
            </TouchableOpacity>
            {ftoAffiliationMenuOpen && (
              <View style={styles.dropdownMenu}>
                {FTO_AFFILIATION_OPTIONS.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownOption}
                    activeOpacity={0.85}
                    onPress={() => {
                      setFtoAffiliation(option);
                      setFtoAffiliationMenuOpen(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.dropdownOptionLabel,
                        option === ftoAffiliation && styles.dropdownOptionLabelActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Applicant Pilot Number */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Applicant Pilot Number</Text>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter your Pilot Number"
                placeholderTextColor="#6a6a6a"
                value={pilotNumber}
                onChangeText={setPilotNumber}
              />
            </View>
          </View>
        </View>

        {/* Upload License Button */}
        <TouchableOpacity style={styles.uploadLicenseButton}>
          <View style={styles.uploadLicenseContent}>
            <View style={styles.uploadLicenseIconContainer}>
              <Image source={{ uri: imgArrowRight }} style={styles.uploadLicenseIcon} />
            </View>
            <View style={styles.uploadLicenseTextContainer}>
              <Text style={styles.uploadLicenseText}>Upload License</Text>
              <Text style={styles.uploadLicenseSubtext}>Verify your credentials.</Text>
            </View>
          </View>
          <Image source={{ uri: imgCamera }} style={styles.uploadLicenseArrow} />
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
    width: 63,
  },
  progressDotActive: {
    width: 31,
    height: 10,
    borderRadius: 30,
    backgroundColor: '#168aad',
  },
  progressDotActiveSecond: {
    width: 32,
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
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 32,
    textAlign: 'left',
  },
  subtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 25.2,
    letterSpacing: -0.18,
  },
  segmentedControl: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
  },
  segmentButton: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentButtonActive: {
    backgroundColor: '#168aad',
  },
  segmentButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#6c7278',
    lineHeight: 20,
    textAlign: 'center',
  },
  segmentButtonTextActive: {
    color: '#ffffff',
  },
  inputFields: {
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
  inputField: {
    flexDirection: 'column',
    gap: 8,
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
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
  inputTextPlaceholder: {
    color: '#6a6a6a',
  },
  dropdownMenu: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#edf1f3',
    borderRadius: 11.478,
    marginTop: 4,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    maxHeight: 200,
    zIndex: 1000,
  },
  dropdownOption: {
    paddingHorizontal: 16.069,
    paddingVertical: 13.99,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f3',
  },
  dropdownOptionLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 19.6,
    letterSpacing: -0.14,
  },
  dropdownOptionLabelActive: {
    color: '#168aad',
  },
  uploadLicenseButton: {
    width: '100%',
    height: 76,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  uploadLicenseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  uploadLicenseIconContainer: {
    width: 41,
    height: 41,
    borderRadius: 20.5,
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
    gap: 0,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  uploadLicenseText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20,
    textAlign: 'left',
  },
  uploadLicenseSubtext: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#6c7278',
    lineHeight: 16,
    textAlign: 'left',
  },
  uploadLicenseArrow: {
    width: 10,
    height: 16,
    marginLeft: 'auto',
  },
});

export default Experience1;


