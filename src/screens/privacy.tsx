import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: privacyScreenWidth } = Dimensions.get('window');
const privacyDESIGN_WIDTH = 430.419;
const privacyAPP_WIDTH = Math.min(privacyScreenWidth, privacyDESIGN_WIDTH);
const privacyCONTINUE_BUTTON_LEFT = (privacyDESIGN_WIDTH * 0.4) + 71;

// Image assets from Figma (same as adddocuments screen)
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';

type StatusBarBatteryProps = {
  darkMode?: 'False';
  charge?: '100%';
  charging?: 'False';
  percentage?: 'False';
};

const StatusBarBattery = ({
  darkMode = 'False',
  charge = '100%',
  charging = 'False',
  percentage = 'False',
}: StatusBarBatteryProps) => {
  return (
    <View style={privacyStyles.batteryContainer}>
      <View style={privacyStyles.batteryOutline}>
        <Image source={{ uri: imgOutline }} style={privacyStyles.batteryOutlineImage} />
      </View>
      <View style={privacyStyles.batteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={privacyStyles.batteryEndImage} />
      </View>
      <View style={privacyStyles.batteryFill}>
        <Image source={{ uri: imgFill }} style={privacyStyles.batteryFillImage} />
      </View>
    </View>
  );
};

type PrivacyProps = {
  onContinue?: () => void;
};

const Privacy = ({ onContinue: _onContinue }: PrivacyProps = {}) => {
  const [privacyAllowProfileDiscovery, setPrivacyAllowProfileDiscovery] = useState(false);
  const [privacyAllowConnectionRequests, setPrivacyAllowConnectionRequests] = useState(true);
  const [privacySyncContacts, setPrivacySyncContacts] = useState(false);
  const [privacyAutoAcceptFromSchool, setPrivacyAutoAcceptFromSchool] = useState(false);

  const PrivacyToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <TouchableOpacity
        style={[privacyStyles.privacyToggleSwitch, value && privacyStyles.privacyToggleSwitchActive]}
        onPress={() => onValueChange(!value)}
        activeOpacity={0.7}
      >
        <View style={[privacyStyles.privacyToggleButton, value && privacyStyles.privacyToggleButtonActive]} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={privacyStyles.privacyContainer}>
      {/* Status Bar */}
      <View style={privacyStyles.privacyStatusBar}>
        <Text style={privacyStyles.privacyStatusBarTime}>9:41</Text>
        <View style={privacyStyles.privacyStatusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={privacyStyles.privacyStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={privacyStyles.privacyStatusBarWifi} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={privacyStyles.privacyHeader}>
        <View style={privacyStyles.privacyBackButtonContainer}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={privacyStyles.privacyBackButtonIcon} />
        </View>
        <Text style={privacyStyles.privacyHeaderTitle}>Privacy & Discovery</Text>
        <Text style={privacyStyles.privacyHeaderSave}>Save</Text>
      </View>

      <ScrollView 
        style={privacyStyles.privacyScrollView}
        contentContainerStyle={privacyStyles.privacyScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={privacyStyles.privacyTitleSection}>
          <Text style={privacyStyles.privacySubtitle}>Control how others can find and connect with you</Text>
        </View>

        {/* Cards Container */}
        <View style={privacyStyles.privacyCardsContainer}>
          {/* Profile Discovery Card */}
          <View style={[privacyStyles.privacyCard, privacyStyles.privacyCardFirst]}>
            <View style={privacyStyles.privacyCardHeader}>
              <Text style={privacyStyles.privacyCardTitle}>Profile Discovery</Text>
              <Text style={privacyStyles.privacyCardSubtitle}>Control who can find your profile</Text>
            </View>
            
            <View style={privacyStyles.privacySettingItem}>
              <View style={privacyStyles.privacySettingContent}>
                <Text style={privacyStyles.privacySettingTitle}>Allow profile discovery</Text>
                <Text style={privacyStyles.privacySettingDescription}>Let others find you through search and suggestions</Text>
              </View>
              <View style={privacyStyles.privacyToggleContainer}>
                <PrivacyToggleSwitch value={privacyAllowProfileDiscovery} onValueChange={setPrivacyAllowProfileDiscovery} />
              </View>
            </View>

            <View style={privacyStyles.privacySettingItem}>
              <View style={privacyStyles.privacySettingContent}>
                <Text style={privacyStyles.privacySettingTitle}>Allow connection requests</Text>
                <Text style={privacyStyles.privacySettingDescription}>Let others send you connection requests</Text>
              </View>
              <View style={privacyStyles.privacyToggleContainer}>
                <PrivacyToggleSwitch value={privacyAllowConnectionRequests} onValueChange={setPrivacyAllowConnectionRequests} />
              </View>
            </View>
          </View>

          {/* Contact Sync Card */}
          <View style={[privacyStyles.privacyCard, privacyStyles.privacyCardSpacing]}>
            <View style={privacyStyles.privacyCardHeader}>
              <Text style={privacyStyles.privacyCardTitle}>Contact Sync</Text>
              <Text style={privacyStyles.privacyCardSubtitle}>Find friends from your contacts</Text>
            </View>
            
            <View style={privacyStyles.privacySettingItem}>
              <View style={privacyStyles.privacySettingContent}>
                <Text style={privacyStyles.privacySettingTitle}>Sync contacts</Text>
                <Text style={privacyStyles.privacySettingDescription}>We'll match your contacts with Maverick users. Your contacts are never shared.</Text>
              </View>
              <View style={privacyStyles.privacyToggleContainer}>
                <PrivacyToggleSwitch value={privacySyncContacts} onValueChange={setPrivacySyncContacts} />
              </View>
            </View>
          </View>

          {/* Connection Preferences Card */}
          <View style={[privacyStyles.privacyCard, privacyStyles.privacyCardSpacing]}>
            <View style={privacyStyles.privacyCardHeader}>
              <Text style={privacyStyles.privacyCardTitle}>Connection Preferences</Text>
              <Text style={privacyStyles.privacyCardSubtitle}>Automatic connection settings</Text>
            </View>
            
            <View style={privacyStyles.privacySettingItem}>
              <View style={privacyStyles.privacySettingContent}>
                <Text style={privacyStyles.privacySettingTitle}>Auto-accept from same school</Text>
                <Text style={privacyStyles.privacySettingDescription}>Automatically accept connection requests from your flight school</Text>
              </View>
              <View style={privacyStyles.privacyToggleContainer}>
                <PrivacyToggleSwitch value={privacyAutoAcceptFromSchool} onValueChange={setPrivacyAutoAcceptFromSchool} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const privacyStyles = StyleSheet.create({
  privacyContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: privacyAPP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  privacyStatusBar: {
    height: 50.502,
    width: privacyAPP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
    backgroundColor: '#FFFFFF',
  },
  privacyStatusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18.365,
  },
  privacyStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    paddingVertical: 1.148,
  },
  privacyStatusBarIcon: {
    width: 20.66,
    height: 11.479,
  },
  privacyStatusBarWifi: {
    width: 17.529,
    height: 12.586,
  },
  privacyBatteryContainer: {
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyBatteryImage: {
    width: 30.965,
    height: 14.921,
  },
  batteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  batteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
    height: 13,
  },
  batteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  batteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
    height: 4.22,
  },
  batteryEndImage: {
    width: '100%',
    height: '100%',
  },
  batteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
    height: 9,
  },
  batteryFillImage: {
    width: '100%',
    height: '100%',
  },
  privacyHeader: {
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
  privacyBackButtonContainer: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyBackButtonIcon: {
    width: 27.52,
    height: 27.52,
  },
  privacyHeaderTitle: {
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
  privacyHeaderSave: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#168aad',
    textAlign: 'center',
  },
  privacyScrollView: {
    flex: 1,
  },
  privacyScrollContent: {
    paddingBottom: 100,
  },
  privacyTitleSection: {
    marginTop: 123,
    marginLeft: 24,
    marginBottom: 0,
    width: 382,
    gap: 8,
  },
  privacyCardsContainer: {
    marginTop: 25,
    marginLeft: 23,
    marginRight: 24,
    width: 383,
    gap: 0,
  },
  privacySubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
    textAlign: 'left',
    width: 382,
  },
  privacyCard: {
    width: '100%',
    borderWidth: 0.855,
    borderColor: '#E5E5E5',
    borderRadius: 6.839,
    paddingHorizontal: 14,
    paddingVertical: 28,
    backgroundColor: '#FFFFFF',
    gap: 25,
    marginBottom: 0,
  },
  privacyCardFirst: {
    marginTop: 0,
  },
  privacyCardSpacing: {
    marginTop: 25,
  },
  privacyCardHeader: {
    gap: 6,
    width: 205,
  },
  privacyCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20.518,
  },
  privacyCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 17.098,
  },
  privacySettingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 56,
  },
  privacySettingContent: {
    flex: 1,
    gap: 3,
    width: 287,
  },
  privacySettingTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17.098,
  },
  privacySettingDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 19,
  },
  privacyToggleContainer: {
    paddingTop: 4,
    paddingBottom: 0,
    marginLeft: 'auto',
  },
  privacyToggleSwitch: {
    width: 36,
    height: 20,
    borderRadius: 100,
    backgroundColor: '#D2D5DA',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  privacyToggleSwitchActive: {
    backgroundColor: '#168aad',
  },
  privacyToggleButton: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    shadowColor: '#272727',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  privacyToggleButtonActive: {
    marginLeft: 'auto',
  },
});

export default Privacy;

