// DO NOT MODIFY OTHER FILES — settings SCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Switch,
  Modal,
  Pressable,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Local image assets
const imgArrowArrowLeftMd = Image.resolveAssetSource(require('../../Arrow_Left_MD.svg')).uri;
const imgMobileSignal = Image.resolveAssetSource(require('../../Mobile Signal.svg')).uri;
const imgWifi = Image.resolveAssetSource(require('../../Wifi.svg')).uri;
const imgBattery = Image.resolveAssetSource(require('../../_StatusBar-battery.svg')).uri;
const imgChevronUp = Image.resolveAssetSource(require('../../arrow-right.svg')).uri;
const imgArr = Image.resolveAssetSource(require('../../arr.svg')).uri;

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
    <View style={styles.settingsScreenBatteryContainer}>
      <Image source={{ uri: imgBattery }} style={styles.settingsScreenBatteryImage} />
    </View>
  );
};

type SettingsProps = {
  onBack?: () => void;
};

const Settings = ({ onBack }: SettingsProps = {}) => {
  const [isDevicesExpanded, setIsDevicesExpanded] = useState(true);
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(true);
  const [isAIPersonalisationExpanded, setIsAIPersonalisationExpanded] = useState(true);
  const [isUnitsDisplayExpanded, setIsUnitsDisplayExpanded] = useState(true);
  
  const [flightReminders, setFlightReminders] = useState(true);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [notamsUpdates, setNotamsUpdates] = useState(true);
  const [studyReminders, setStudyReminders] = useState(true);
  const [communityMessages, setCommunityMessages] = useState(false);
  const [aiCommunityMessages, setAiCommunityMessages] = useState(true);

  // Dropdown component for React Native
  const Dropdown = ({ 
    id, 
    value, 
    options, 
    onSelect 
  }: { 
    id: string; 
    value: string; 
    options: string[]; 
    onSelect: (value: string) => void;
  }) => {
    const isOpen = openDropdown === id;

    return (
      <View style={{ position: 'relative' }}>
        <TouchableOpacity 
          style={styles.settingsScreenDropdown}
          onPress={() => setOpenDropdown(isOpen ? null : id)}
          activeOpacity={0.7}
        >
          <Text style={styles.settingsScreenDropdownText}>{value}</Text>
          <View style={styles.settingsScreenDropdownChevron}>
            <Image 
              source={{ uri: imgArr }} 
              style={[styles.settingsScreenDropdownChevronImage, { transform: [{ rotate: isOpen ? '-90deg' : '90deg' }] }]} 
            />
          </View>
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.settingsScreenDropdownMenu}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.settingsScreenDropdownOption,
                  value === option && styles.settingsScreenDropdownOptionSelected,
                  index === options.length - 1 && styles.settingsScreenDropdownOptionLast
                ]}
                onPress={() => {
                  onSelect(option);
                  setOpenDropdown(null);
                }}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.settingsScreenDropdownOptionText,
                  value === option && styles.settingsScreenDropdownOptionTextSelected
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [aiPersona, setAiPersona] = useState('Instructor');
  const [reportStyle, setReportStyle] = useState('Detailed');
  const [distanceUnits, setDistanceUnits] = useState('Nautical');
  const [speedUnits, setSpeedUnits] = useState('Knots');
  const [fuelUnits, setFuelUnits] = useState('Gallons');
  const [theme, setTheme] = useState('System');

  // Dropdown options
  const aiPersonaOptions = ['Instructor', 'Pilot', 'Student', 'ATC'];
  const reportStyleOptions = ['Detailed', 'Summary', 'Brief'];
  const distanceUnitsOptions = ['Nautical', 'Statute', 'Kilometers'];
  const speedUnitsOptions = ['Knots', 'MPH', 'KPH'];
  const fuelUnitsOptions = ['Gallons', 'Liters', 'Pounds'];
  const themeOptions = ['System', 'Light', 'Dark'];

  return (
    <View style={styles.settingsScreenContainer}>
      {/* Status Bar */}
      <View style={styles.settingsScreenStatusBar}>
        <View style={styles.settingsScreenStatusBarLeft}>
          <View style={styles.settingsScreenStatusBarTimeContainer}>
            <Text style={styles.settingsScreenStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.settingsScreenStatusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.settingsScreenStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.settingsScreenStatusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.settingsScreenHeader}>
        <TouchableOpacity style={styles.settingsScreenBackButton} onPress={onBack} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.settingsScreenBackIcon} />
        </TouchableOpacity>
        <Text style={styles.settingsScreenTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingsScreenSaveButton} activeOpacity={0.7}>
          <Text style={styles.settingsScreenSaveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.settingsScreenScrollContent}
        contentContainerStyle={styles.settingsScreenScrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Devices Section */}
        <View style={styles.settingsScreenCard}>
          <TouchableOpacity 
            style={styles.settingsScreenCardHeader}
            onPress={() => setIsDevicesExpanded(!isDevicesExpanded)}
            activeOpacity={0.7}
          >
            <View style={styles.settingsScreenCardHeaderLeft}>
              <Text style={styles.settingsScreenCardTitle}>Devices</Text>
              {isDevicesExpanded && <Text style={styles.settingsScreenCardSubtitle}>Connect Maverick with Devices</Text>}
            </View>
            <View style={styles.settingsScreenChevronUp}>
              <Image source={{ uri: imgArr }} style={[styles.settingsScreenChevronImage, { transform: [{ rotate: isDevicesExpanded ? '-90deg' : '90deg' }] }]} />
            </View>
          </TouchableOpacity>
          {isDevicesExpanded && (
            <View style={styles.settingsScreenCardContent}>
              <View style={styles.settingsScreenDeviceItem}>
                <View style={styles.settingsScreenDeviceInfo}>
                  <Text style={styles.settingsScreenDeviceName}>XB70 Flight Computer</Text>
                  <Text style={styles.settingsScreenDeviceStatus}>Not connected</Text>
                </View>
                <TouchableOpacity style={styles.settingsScreenPairButton} activeOpacity={0.7}>
                  <Text style={styles.settingsScreenPairButtonText}>Pair Device</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Notifications Section */}
        <View style={styles.settingsScreenCard}>
          <TouchableOpacity 
            style={styles.settingsScreenCardHeader}
            onPress={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
            activeOpacity={0.7}
          >
            <View style={styles.settingsScreenCardHeaderLeft}>
              <Text style={styles.settingsScreenCardTitle}>Notifications</Text>
              {isNotificationsExpanded && <Text style={styles.settingsScreenCardSubtitle}>Customize your notification and alerts</Text>}
            </View>
            <View style={styles.settingsScreenChevronUp}>
              <Image source={{ uri: imgArr }} style={[styles.settingsScreenChevronImage, { transform: [{ rotate: isNotificationsExpanded ? '-90deg' : '90deg' }] }]} />
            </View>
          </TouchableOpacity>
          {isNotificationsExpanded && (
            <View style={styles.settingsScreenCardContent}>
              <View style={styles.settingsScreenNotificationItem}>
                <Text style={styles.settingsScreenNotificationLabel}>Flight Reminders</Text>
                <Switch
                  value={flightReminders}
                  onValueChange={setFlightReminders}
                  trackColor={{ false: '#D2D5DA', true: '#168aad' }}
                  thumbColor="#FFFFFF"
                />
              </View>
              <View style={styles.settingsScreenNotificationItem}>
                <Text style={styles.settingsScreenNotificationLabel}>Weather Alerts</Text>
                <Switch
                  value={weatherAlerts}
                  onValueChange={setWeatherAlerts}
                  trackColor={{ false: '#D2D5DA', true: '#168aad' }}
                  thumbColor="#FFFFFF"
                />
              </View>
              <View style={styles.settingsScreenNotificationItem}>
                <Text style={styles.settingsScreenNotificationLabel}>NOTAMS Updates</Text>
                <Switch
                  value={notamsUpdates}
                  onValueChange={setNotamsUpdates}
                  trackColor={{ false: '#D2D5DA', true: '#168aad' }}
                  thumbColor="#FFFFFF"
                />
              </View>
              <View style={styles.settingsScreenNotificationItem}>
                <Text style={styles.settingsScreenNotificationLabel}>Study Reminders</Text>
                <Switch
                  value={studyReminders}
                  onValueChange={setStudyReminders}
                  trackColor={{ false: '#D2D5DA', true: '#168aad' }}
                  thumbColor="#FFFFFF"
                />
              </View>
              <View style={styles.settingsScreenNotificationItem}>
                <Text style={styles.settingsScreenNotificationLabel}>Community Messages</Text>
                <Switch
                  value={communityMessages}
                  onValueChange={setCommunityMessages}
                  trackColor={{ false: '#D2D5DA', true: '#168aad' }}
                  thumbColor="#FFFFFF"
                />
              </View>
            </View>
          )}
        </View>

        {/* AI Personalisation Section */}
        <View style={styles.settingsScreenCard}>
          <TouchableOpacity 
            style={styles.settingsScreenCardHeader}
            onPress={() => setIsAIPersonalisationExpanded(!isAIPersonalisationExpanded)}
            activeOpacity={0.7}
          >
            <View style={styles.settingsScreenCardHeaderLeft}>
              <Text style={styles.settingsScreenCardTitle}>AI Personalisation</Text>
              {isAIPersonalisationExpanded && <Text style={styles.settingsScreenCardSubtitle}>Customize your AI</Text>}
            </View>
            <View style={styles.settingsScreenChevronUp}>
              <Image source={{ uri: imgArr }} style={[styles.settingsScreenChevronImage, { transform: [{ rotate: isAIPersonalisationExpanded ? '-90deg' : '90deg' }] }]} />
            </View>
          </TouchableOpacity>
          {isAIPersonalisationExpanded && (
              <View style={styles.settingsScreenCardContent}>
                <View style={styles.settingsScreenDropdownItem}>
                  <Text style={styles.settingsScreenDropdownLabel}>AI Persona</Text>
                  <Dropdown 
                    id="ai-persona"
                    value={aiPersona}
                    options={aiPersonaOptions}
                    onSelect={setAiPersona}
                  />
                </View>
                <View style={styles.settingsScreenDropdownItem}>
                  <Text style={styles.settingsScreenDropdownLabel}>Report Style</Text>
                  <Dropdown 
                    id="report-style"
                    value={reportStyle}
                    options={reportStyleOptions}
                    onSelect={setReportStyle}
                  />
                </View>
              <View style={styles.settingsScreenNotificationItem}>
                <Text style={styles.settingsScreenNotificationLabel}>Community Messages</Text>
                <Switch
                  value={aiCommunityMessages}
                  onValueChange={setAiCommunityMessages}
                  trackColor={{ false: '#D2D5DA', true: '#168aad' }}
                  thumbColor="#FFFFFF"
                />
              </View>
            </View>
          )}
        </View>

        {/* Units and Display Section */}
        <View style={styles.settingsScreenCard}>
          <TouchableOpacity 
            style={styles.settingsScreenCardHeader}
            onPress={() => setIsUnitsDisplayExpanded(!isUnitsDisplayExpanded)}
            activeOpacity={0.7}
          >
            <View style={styles.settingsScreenCardHeaderLeft}>
              <Text style={styles.settingsScreenCardTitle}>Units and Display</Text>
              {isUnitsDisplayExpanded && <Text style={styles.settingsScreenCardSubtitle}>Customize the Units and Display</Text>}
            </View>
            <View style={styles.settingsScreenChevronUp}>
              <Image source={{ uri: imgArr }} style={[styles.settingsScreenChevronImage, { transform: [{ rotate: isUnitsDisplayExpanded ? '-90deg' : '90deg' }] }]} />
            </View>
          </TouchableOpacity>
          {isUnitsDisplayExpanded && (
              <View style={styles.settingsScreenCardContent}>
                <View style={styles.settingsScreenDropdownItem}>
                  <Text style={styles.settingsScreenDropdownLabel}>Distance Units</Text>
                  <Dropdown 
                    id="distance-units"
                    value={distanceUnits}
                    options={distanceUnitsOptions}
                    onSelect={setDistanceUnits}
                  />
                </View>
                <View style={styles.settingsScreenDropdownItem}>
                  <Text style={styles.settingsScreenDropdownLabel}>Speed Units</Text>
                  <Dropdown 
                    id="speed-units"
                    value={speedUnits}
                    options={speedUnitsOptions}
                    onSelect={setSpeedUnits}
                  />
                </View>
                <View style={styles.settingsScreenDropdownItem}>
                  <Text style={styles.settingsScreenDropdownLabel}>Fuel Units</Text>
                  <Dropdown 
                    id="fuel-units"
                    value={fuelUnits}
                    options={fuelUnitsOptions}
                    onSelect={setFuelUnits}
                  />
                </View>
                <View style={styles.settingsScreenDropdownItem}>
                  <Text style={styles.settingsScreenDropdownLabel}>Theme</Text>
                  <Dropdown 
                    id="theme"
                    value={theme}
                    options={themeOptions}
                    onSelect={setTheme}
                  />
                </View>
              </View>
          )}
        </View>

        {/* Footer */}
        <View style={styles.settingsScreenFooter}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.settingsScreenFooterLink}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.settingsScreenFooterLink}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.settingsScreenFooterLink}>User Agreement</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.settingsScreenFooterLink}>End User Agreement</Text>
          </TouchableOpacity>
          <Text style={styles.settingsScreenFooterVersion}>Version 1.01.1</Text>
        </View>
      </ScrollView>
      {openDropdown && (
        <Pressable
          style={styles.settingsScreenDropdownOverlay}
          onPress={() => setOpenDropdown(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsScreenScreenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  settingsScreenStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 430,
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    overflow: 'hidden',
    zIndex: 10,
  },
  settingsScreenStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsScreenStatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsScreenStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
  },
  settingsScreenStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  settingsScreenStatusBarIcon: {
    width: 18,
    height: 12,
  },
  settingsScreenBatteryContainer: {
    width: 28,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsScreenBatteryImage: {
    width: 28,
    height: 13,
    resizeMode: 'contain',
  },
  settingsScreenHeader: {
    position: 'absolute',
    top: 63,
    left: 0,
    right: 0,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  settingsScreenBackButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsScreenBackIcon: {
    width: 27.52,
    height: 27.52,
  },
  settingsScreenTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 24,
    textAlign: 'center',
  },
  settingsScreenSaveButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  settingsScreenSaveText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#168aad',
    lineHeight: 20,
  },
  settingsScreenScrollContent: {
    marginTop: 127,
    flex: 1,
  },
  settingsScreenScrollContentContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  settingsScreenCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e9f0',
    marginBottom: 16,
    overflow: 'hidden',
  },
  settingsScreenCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 19,
    paddingRight: 19,
  },
  settingsScreenCardHeaderLeft: {
    flex: 1,
    gap: 6,
  },
  settingsScreenCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17.501,
    textAlign: 'left',
  },
  settingsScreenCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#5a5a5a',
    lineHeight: 15,
    textAlign: 'left',
  },
  settingsScreenChevronUp: {
    width: 10,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsScreenChevronImage: {
    width: 10,
    height: 16,
    resizeMode: 'contain',
  },
  settingsScreenCardContent: {
    paddingLeft: 19,
    paddingRight: 19,
    paddingBottom: 16,
    gap: 16,
  },
  settingsScreenDeviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsScreenDeviceInfo: {
    flex: 1,
    gap: 4,
  },
  settingsScreenDeviceName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17,
  },
  settingsScreenDeviceStatus: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#5a5a5a',
    lineHeight: 15,
  },
  settingsScreenPairButton: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#5a5a5a',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsScreenPairButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#5a5a5a',
    lineHeight: 17,
  },
  settingsScreenNotificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsScreenNotificationLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17,
  },
  settingsScreenDropdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsScreenDropdownLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17,
  },
  settingsScreenDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e9f0',
    backgroundColor: '#f5f5f5',
    gap: 8,
  },
  settingsScreenDropdownText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
  },
  settingsScreenDropdownChevron: {
    width: 10,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsScreenDropdownChevronImage: {
    width: 10,
    height: 16,
    resizeMode: 'contain',
  },
  settingsScreenDropdownMenu: {
    position: 'absolute',
    top: 40,
    right: 0,
    minWidth: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e9f0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 1000,
    marginTop: 4,
  },
  settingsScreenDropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  settingsScreenDropdownOptionLast: {
    borderBottomWidth: 0,
  },
  settingsScreenDropdownOptionSelected: {
    backgroundColor: '#f0f7f9',
  },
  settingsScreenDropdownOptionText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
  },
  settingsScreenDropdownOptionTextSelected: {
    fontWeight: '500',
  },
  settingsScreenFooter: {
    marginTop: 24,
    marginBottom: 40,
    gap: 16,
  },
  settingsScreenFooterLink: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
  },
  settingsScreenFooterVersion: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
    marginTop: 8,
  },
  settingsScreenDropdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
});

export default Settings;


