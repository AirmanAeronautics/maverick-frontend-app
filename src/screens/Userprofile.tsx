// DO NOT MODIFY OTHER FILES — Userprofile SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgStatusBarTime = '9:41';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/e0681899-0c1e-4e63-8e30-66fe95574bdd';
const imgWifi = 'https://www.figma.com/api/mcp/asset/772d34d4-9b2c-400b-ab37-ca570f59f0e4';
const imgOutline = 'https://www.figma.com/api/mcp/asset/f97911df-0450-47c9-9c82-c45beb4e0482';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/940aa4a9-2c56-4287-94d3-2076992c7254';
const imgFill = 'https://www.figma.com/api/mcp/asset/9c312083-ae1d-4792-872c-df2d36baf343';
const imgBackgroundJet = 'https://www.figma.com/api/mcp/asset/c2097ca7-3958-4a28-a7de-2cab572d71b7';
const imgEditBackground = 'https://www.figma.com/api/mcp/asset/5dbbfcaf-276b-4b4a-8c09-6cd596b6edcb';
const imgProfilePicture = 'https://www.figma.com/api/mcp/asset/5dbbfcaf-276b-4b4a-8c09-6cd596b6edcb';
const imgCameraIcon = 'https://www.figma.com/api/mcp/asset/0c0c65ec-6de7-4b54-bb1a-bcce626e6383';
const imgInfoIcon = 'https://www.figma.com/api/mcp/asset/d4cead55-a938-4eed-9e45-a9f287c59ee9';
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/0c0c65ec-6de7-4b54-bb1a-bcce626e6383';

// SVG Icons - using Image.resolveAssetSource for React Native
const iconUserPlus = Image.resolveAssetSource(require('../../user-plus.svg')).uri;
const iconUser = Image.resolveAssetSource(require('../../user.svg')).uri;
const iconAirplane = Image.resolveAssetSource(require('../../airplane.svg')).uri;
const iconShield = Image.resolveAssetSource(require('../../shield.svg')).uri;
const iconPayments = Image.resolveAssetSource(require('../../payments.svg')).uri;
const iconSettings = Image.resolveAssetSource(require('../../settings.svg')).uri;
const iconLogOut = Image.resolveAssetSource(require('../../log-out.svg')).uri;

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
    <View style={styles.upBatteryContainer}>
      <View style={styles.upBatteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.upBatteryOutlineImage} />
      </View>
      <View style={styles.upBatteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.upBatteryEndImage} />
      </View>
      <View style={styles.upBatteryFill}>
        <Image source={{ uri: imgFill }} style={styles.upBatteryFillImage} />
      </View>
    </View>
  );
};

type UserprofileProps = {
  onBack?: () => void;
};

const Userprofile = ({ onBack }: UserprofileProps = {}) => {
  return (
    <View style={styles.upContainer}>
      {/* Header Background Image */}
      <View style={styles.upHeaderBackground}>
        <Image source={{ uri: imgBackgroundJet }} style={styles.upHeaderBackgroundImage} />
        {/* Edit Background Icon */}
        <TouchableOpacity style={styles.upEditBackgroundButton} activeOpacity={0.7}>
          <View style={styles.upEditBackgroundIcon}>
            <Image source={{ uri: imgEditBackground }} style={styles.upEditBackgroundImage} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Status Bar */}
      <View style={styles.upStatusBar}>
        <View style={styles.upStatusBarLeft}>
          <View style={styles.upStatusBarTimeContainer}>
            <Text style={styles.upStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.upStatusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.upStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.upStatusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Profile Picture with Progress Ring */}
      <View style={styles.upProfileImageContainer}>
        <View style={styles.upProgressRingContainer}>
          <View style={styles.upProgressRingBackground} />
          <View style={styles.upProgressRingFill} />
          <Text style={styles.upProgressText}>20%</Text>
        </View>
        <Image source={{ uri: imgProfilePicture }} style={styles.upProfileImage} />
        <TouchableOpacity style={styles.upCameraButton} activeOpacity={0.7}>
          <View style={styles.upCameraIcon}>
            <Image source={{ uri: imgCameraIcon }} style={styles.upCameraImage} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Name */}
      <Text style={styles.upName}>Sudershan</Text>

      {/* Email */}
      <Text style={styles.upEmail}>nathank18uiux@gmail.com</Text>

      {/* Badges */}
      <View style={styles.upBadgesContainer}>
        <View style={styles.upBadgeBlue}>
          <Text style={styles.upBadgeBlueText}>Seasoned Pilot</Text>
        </View>
        <View style={styles.upBadgeBlue}>
          <Text style={styles.upBadgeBlueText}>DGCA</Text>
        </View>
        <View style={styles.upBadgeLightBlue}>
          <Image source={{ uri: imgInfoIcon }} style={styles.upBadgeInfoIcon} />
          <Text style={styles.upBadgeLightBlueText}>Unverified</Text>
        </View>
      </View>

      {/* Navigation List Items */}
      <ScrollView
        style={styles.upScrollContent}
        contentContainerStyle={styles.upScrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.upNavItem} activeOpacity={0.7}>
          <View style={styles.upNavItemLeft}>
            <Image source={{ uri: iconUserPlus }} style={styles.upNavIcon} />
            <Text style={styles.upNavText}>Invite a Friend</Text>
          </View>
          <Image source={{ uri: imgChevronRight }} style={styles.upNavChevron} />
        </TouchableOpacity>

        <View style={styles.upDivider} />

        <TouchableOpacity style={styles.upNavItem} activeOpacity={0.7}>
          <View style={styles.upNavItemLeft}>
            <Image source={{ uri: iconUser }} style={styles.upNavIcon} />
            <Text style={styles.upNavText}>Edit Personal Info</Text>
          </View>
          <Image source={{ uri: imgChevronRight }} style={styles.upNavChevron} />
        </TouchableOpacity>

        <View style={styles.upDivider} />

        <TouchableOpacity style={styles.upNavItem} activeOpacity={0.7}>
          <View style={styles.upNavItemLeft}>
            <Image source={{ uri: iconAirplane }} style={styles.upNavIcon} />
            <Text style={styles.upNavText}>Edit Aviation Info</Text>
          </View>
          <Image source={{ uri: imgChevronRight }} style={styles.upNavChevron} />
        </TouchableOpacity>

        <View style={styles.upDivider} />

        <TouchableOpacity style={styles.upNavItem} activeOpacity={0.7}>
          <View style={styles.upNavItemLeft}>
            <Image source={{ uri: iconShield }} style={styles.upNavIcon} />
            <Text style={styles.upNavText}>Privacy and Discovery</Text>
          </View>
          <Image source={{ uri: imgChevronRight }} style={styles.upNavChevron} />
        </TouchableOpacity>

        <View style={styles.upDivider} />

        <TouchableOpacity style={styles.upNavItem} activeOpacity={0.7}>
          <View style={styles.upNavItemLeft}>
            <Image source={{ uri: iconPayments }} style={styles.upNavIcon} />
            <Text style={styles.upNavText}>Payments and Subscriptions</Text>
          </View>
          <Image source={{ uri: imgChevronRight }} style={styles.upNavChevron} />
        </TouchableOpacity>

        <View style={styles.upDivider} />

        <TouchableOpacity style={styles.upNavItem} activeOpacity={0.7}>
          <View style={styles.upNavItemLeft}>
            <Image source={{ uri: iconSettings }} style={styles.upNavIcon} />
            <Text style={styles.upNavText}>Settings</Text>
          </View>
          <Image source={{ uri: imgChevronRight }} style={styles.upNavChevron} />
        </TouchableOpacity>

        <View style={styles.upDividerThick} />

        {/* Log Out */}
        <TouchableOpacity style={styles.upLogOutItem} activeOpacity={0.7}>
          <Image source={{ uri: iconLogOut }} style={styles.upLogOutIcon} />
          <Text style={styles.upLogOutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  upContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  upHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 430,
    height: 223,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },
  upHeaderBackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  upEditBackgroundButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  upEditBackgroundIcon: {
    width: 20,
    height: 20,
  },
  upEditBackgroundImage: {
    width: 20,
    height: 20,
  },
  upStatusBar: {
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
  upStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upStatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
  },
  upStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  upStatusBarIcon: {
    width: 18,
    height: 12,
  },
  upBatteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  upBatteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
    height: 13,
  },
  upBatteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  upBatteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
    height: 4.22,
  },
  upBatteryEndImage: {
    width: '100%',
    height: '100%',
  },
  upBatteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
    height: 9,
  },
  upBatteryFillImage: {
    width: '100%',
    height: '100%',
  },
  upProfileImageContainer: {
    position: 'absolute',
    left: '50%',
    top: 164,
    transform: [{ translateX: -50 }],
    width: 100,
    height: 100,
    zIndex: 5,
  },
  upProgressRingContainer: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: -10,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upProgressRingBackground: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E5E5E5',
  },
  upProgressRingFill: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: '#4CAF50',
    borderRightColor: '#4CAF50',
    transform: [{ rotate: '-90deg' }],
  },
  upProgressText: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    top: 50,
    left: 50,
    transform: [{ translateX: -15 }, { translateY: -6 }],
  },
  upProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  upCameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  upCameraIcon: {
    width: 16,
    height: 16,
  },
  upCameraImage: {
    width: 16,
    height: 16,
  },
  upName: {
    position: 'absolute',
    left: '50%',
    top: 280,
    transform: [{ translateX: -50 }],
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 29,
    textAlign: 'center',
  },
  upEmail: {
    position: 'absolute',
    left: '50%',
    top: 315,
    transform: [{ translateX: -50 }],
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
    textAlign: 'center',
  },
  upBadgesContainer: {
    position: 'absolute',
    left: '50%',
    top: 350,
    transform: [{ translateX: -50 }],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  upBadgeBlue: {
    height: 28,
    borderRadius: 14,
    backgroundColor: '#168aad',
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upBadgeBlueText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 15,
  },
  upBadgeLightBlue: {
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'center',
  },
  upBadgeInfoIcon: {
    width: 14,
    height: 14,
  },
  upBadgeLightBlueText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#168aad',
    lineHeight: 15,
  },
  upScrollContent: {
    position: 'absolute',
    top: 420,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  upScrollContentContainer: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  upNavItem: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  upNavItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  upNavIcon: {
    width: 24,
    height: 24,
  },
  upNavText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
  },
  upNavChevron: {
    width: 8,
    height: 14,
  },
  upDivider: {
    width: 432,
    height: 1,
    backgroundColor: '#E5E5E5',
    marginLeft: 24,
  },
  upDividerThick: {
    width: '100%',
    height: 2,
    backgroundColor: '#E5E5E5',
    marginTop: 16,
    marginBottom: 16,
  },
  upLogOutItem: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    gap: 16,
  },
  upLogOutIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF3B30',
  },
  upLogOutText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#FF3B30',
    lineHeight: 20,
  },
});

export default Userprofile;








