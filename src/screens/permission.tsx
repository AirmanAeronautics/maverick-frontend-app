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

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);
const CONTINUE_BUTTON_LEFT = (DESIGN_WIDTH * 0.4) + 71;

// Image assets from Figma
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/1651ae52-0077-4ef6-9cd6-9d6890396c9a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/f8a0ee2e-0ff2-4918-a2a1-769a3c57c7ad';
const imgBattery = 'https://www.figma.com/api/mcp/asset/1bfca9be-42ad-4adb-b5ba-94228bb72f6a';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/597f51de-7c2b-491c-a8f4-c5ec727f58b6';

type PermissionProps = {
  onContinue?: () => void;
};

const Permission = ({ onContinue }: PermissionProps = {}) => {
  const [allowProfileDiscovery, setAllowProfileDiscovery] = useState(false);
  const [allowConnectionRequests, setAllowConnectionRequests] = useState(true);
  const [syncContacts, setSyncContacts] = useState(false);
  const [autoAcceptFromSchool, setAutoAcceptFromSchool] = useState(false);

  const ToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <TouchableOpacity
        style={[styles.toggleSwitch, value && styles.toggleSwitchActive]}
        onPress={() => onValueChange(!value)}
        activeOpacity={0.7}
      >
        <View style={[styles.toggleButton, value && styles.toggleButtonActive]} />
      </TouchableOpacity>
    );
  };

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

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Privacy & Discovery</Text>
          <Text style={styles.subtitle}>Control how others can find and connect with you</Text>
        </View>

        {/* Cards Container */}
        <View style={styles.cardsContainer}>
          {/* Profile Discovery Card */}
          <View style={[styles.card, styles.cardFirst]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Profile Discovery</Text>
              <Text style={styles.cardSubtitle}>Control who can find your profile</Text>
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Allow profile discovery</Text>
                <Text style={styles.settingDescription}>Let others find you through search and suggestions</Text>
              </View>
              <View style={styles.toggleContainer}>
                <ToggleSwitch value={allowProfileDiscovery} onValueChange={setAllowProfileDiscovery} />
              </View>
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Allow connection requests</Text>
                <Text style={styles.settingDescription}>Let others send you connection requests</Text>
              </View>
              <View style={styles.toggleContainer}>
                <ToggleSwitch value={allowConnectionRequests} onValueChange={setAllowConnectionRequests} />
              </View>
            </View>
          </View>

          {/* Contact Sync Card */}
          <View style={[styles.card, styles.cardSpacing]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Contact Sync</Text>
              <Text style={styles.cardSubtitle}>Find friends from your contacts</Text>
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Sync contacts</Text>
                <Text style={styles.settingDescription}>We'll match your contacts with Maverick users. Your contacts are never shared.</Text>
              </View>
              <View style={styles.toggleContainer}>
                <ToggleSwitch value={syncContacts} onValueChange={setSyncContacts} />
              </View>
            </View>
          </View>

          {/* Connection Preferences Card */}
          <View style={[styles.card, styles.cardSpacing]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Connection Preferences</Text>
              <Text style={styles.cardSubtitle}>Automatic connection settings</Text>
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Auto-accept from same school</Text>
                <Text style={styles.settingDescription}>Automatically accept connection requests from your flight school</Text>
              </View>
              <View style={styles.toggleContainer}>
                <ToggleSwitch value={autoAcceptFromSchool} onValueChange={setAutoAcceptFromSchool} />
              </View>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
        style={styles.continueButton}
        onPress={onContinue}
        activeOpacity={0.8}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
        <View style={styles.continueButtonIcon}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.continueButtonArrow} />
        </View>
        </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  titleSection: {
    marginTop: 87,
    marginLeft: 24,
    marginBottom: 0,
    width: 382,
    gap: 8,
  },
  cardsContainer: {
    marginTop: 25,
    marginLeft: 23,
    marginRight: 24,
    width: 383,
    gap: 0,
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 28,
    textAlign: 'left',
  },
  subtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
    textAlign: 'left',
    width: 382,
  },
  card: {
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
  cardFirst: {
    marginTop: 0,
  },
  cardSpacing: {
    marginTop: 25,
  },
  cardHeader: {
    gap: 6,
    width: 205,
  },
  cardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20.518,
  },
  cardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 17.098,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 56,
  },
  settingContent: {
    flex: 1,
    gap: 3,
    width: 287,
  },
  settingTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17.098,
  },
  settingDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 19,
  },
  toggleContainer: {
    paddingTop: 4,
    paddingBottom: 0,
    marginLeft: 'auto',
  },
  toggleSwitch: {
    width: 36,
    height: 20,
    borderRadius: 100,
    backgroundColor: '#D2D5DA',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleSwitchActive: {
    backgroundColor: '#168aad',
  },
  toggleButton: {
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
  toggleButtonActive: {
    marginLeft: 'auto',
  },
  continueButton: {
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 24,
    marginBottom: 40,
    width: 163,
    height: 43,
    borderRadius: 11.478,
    backgroundColor: '#168aad',
    borderWidth: 1.148,
    borderColor: '#168aad',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingHorizontal: 27.547,
    paddingVertical: 11.478,
    shadowColor: '#168aad',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 0.48,
    shadowRadius: 2.296,
    elevation: 2,
  },
  continueButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 22.497,
    letterSpacing: -0.1607,
    textAlign: 'center',
  },
  continueButtonIcon: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
  },
  continueButtonArrow: {
    width: 20,
    height: 20,
  },
});

export default Permission;

