import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgRectangle4250 = 'https://www.figma.com/api/mcp/asset/c2097ca7-3958-4a28-a7de-2cab572d71b7';
const imgEllipse3 = 'https://www.figma.com/api/mcp/asset/c3decf4d-f619-4fd7-8046-6af876d3b1c1';
const imgEllipse4 = 'https://www.figma.com/api/mcp/asset/c5e7549b-d505-4e32-9699-de01931cb761';
const imgEllipse5 = 'https://www.figma.com/api/mcp/asset/2d2075d8-3817-4fa0-8e7c-bf60061194e4';
const imgEllipse6 = 'https://www.figma.com/api/mcp/asset/139a7180-3380-424e-9611-362313b06a4f';
const imgImage = 'https://www.figma.com/api/mcp/asset/5dbbfcaf-276b-4b4a-8c09-6cd596b6edcb';
const imgImage1 = 'https://www.figma.com/api/mcp/asset/0c0c65ec-6de7-4b54-bb1a-bcce626e6383';
const imgGroup = 'https://www.figma.com/api/mcp/asset/d4cead55-a938-4eed-9e45-a9f287c59ee9';
const imgOutline = 'https://www.figma.com/api/mcp/asset/f97911df-0450-47c9-9c82-c45beb4e0482';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/940aa4a9-2c56-4287-94d3-2076992c7254';
const imgFill = 'https://www.figma.com/api/mcp/asset/9c312083-ae1d-4792-872c-df2d36baf343';
const imgWifi = 'https://www.figma.com/api/mcp/asset/772d34d4-9b2c-400b-ab37-ca570f59f0e4';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/e0681899-0c1e-4e63-8e30-66fe95574bdd';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/724af93c-eabe-48e2-870f-3ad6096fa32e';
const imgLucideShare = 'https://www.figma.com/api/mcp/asset/695e6b06-467e-4c09-bd54-3b374b9891d6';
const imgLine1Owj = 'https://www.figma.com/api/mcp/asset/9aec680b-c3a6-491e-bccf-bf568306da19';
const imgLine725 = 'https://www.figma.com/api/mcp/asset/8f8bf28d-189b-454f-9685-338a52385a0f';
const imgLine726 = 'https://www.figma.com/api/mcp/asset/729616ee-d12b-4048-ab12-4bf663585e5d';

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
    <View style={styles.batteryContainer}>
      <View style={styles.batteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.batteryOutlineImage} />
      </View>
      <View style={styles.batteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.batteryEndImage} />
      </View>
      <View style={styles.batteryFill}>
        <Image source={{ uri: imgFill }} style={styles.batteryFillImage} />
      </View>
    </View>
  );
};

type Profile1Props = {
  onBack?: () => void;
};

const Profile1 = ({ onBack }: Profile1Props = {}) => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(true);
  const [isLicensesExpanded, setIsLicensesExpanded] = useState(false);
  const [isInterestsExpanded, setIsInterestsExpanded] = useState(false);
  const [isConnectPending, setIsConnectPending] = useState(false);

  return (
    <View style={styles.container}>

      {/* Header Background Image */}
      <View style={styles.headerBackground}>
        <Image source={{ uri: imgRectangle4250 }} style={styles.headerBackgroundImage} />
      </View>

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <View style={styles.statusBarTimeContainer}>
            <Text style={styles.statusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
        <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: imgImage }} style={styles.profileImage} />
      </View>

      {/* Name */}
      <Text style={styles.name}>Sudershan</Text>

      {/* Title */}
      <Text style={styles.title}>Seasoned Pilot</Text>

      {/* Connections */}
      <View style={styles.connectionsContainer}>
        <View style={styles.joinedUsers}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: imgEllipse3 }} style={styles.avatar} />
          </View>
          <View style={[styles.avatarContainer, styles.avatarOverlap]}>
            <Image source={{ uri: imgEllipse4 }} style={styles.avatar} />
          </View>
          <View style={[styles.avatarContainer, styles.avatarOverlap]}>
            <Image source={{ uri: imgEllipse5 }} style={styles.avatar} />
          </View>
          <View style={[styles.avatarContainer, styles.avatarOverlap]}>
            <Image source={{ uri: imgEllipse6 }} style={styles.avatar} />
          </View>
        </View>
        <Text style={styles.connectionsCount}>328 </Text>
        <Text style={styles.connectionsLabel}>Connections</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Seasoned commercial pilot with over 4,500 flight hours across A320 and B737 fleets. Passionate about precision flying, safety culture, and mentoring young aviators. Dedicated to continuous learning, operational excellence, and delivering smooth skies for every passenger.
      </Text>

      {/* Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity 
          style={[styles.connectButton, isConnectPending && styles.connectButtonPending]} 
          activeOpacity={0.7}
          onPress={() => setIsConnectPending(true)}
        >
          <View style={styles.connectButtonContent}>
            {!isConnectPending && (
              <View style={styles.connectIconContainer}>
                <Image source={{ uri: imgGroup }} style={styles.connectIcon} />
              </View>
            )}
            <Text style={[styles.connectButtonText, isConnectPending && styles.connectButtonTextPending]}>
              {isConnectPending ? 'Pending' : 'Connect'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} activeOpacity={0.7}>
          <Image source={{ uri: imgLucideShare }} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>

      {/* Divider Line */}
      <View style={styles.dividerLine}>
        <Image source={{ uri: imgLine1Owj }} style={styles.dividerImage} />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Experience Section */}
        <View style={styles.experienceCard}>
          <TouchableOpacity 
            style={styles.experienceHeader}
            onPress={() => setIsExperienceExpanded(!isExperienceExpanded)}
            activeOpacity={0.7}
          >
            <Text style={styles.experienceTitle}>Experience</Text>
            <View style={[styles.chevronUp, !isExperienceExpanded && styles.chevronDown]}>
              <Image source={{ uri: imgImage1 }} style={styles.chevronImage} />
            </View>
          </TouchableOpacity>
          {isExperienceExpanded && (
            <View style={styles.experienceTagsContainer}>
              <View style={styles.experienceTag}>
                <Text style={styles.experienceTagText}>Multi Engine Piston</Text>
              </View>
              <View style={styles.experienceTag}>
                <Text style={styles.experienceTagText}>Turbo prop</Text>
              </View>
              <View style={styles.experienceTag}>
                <Text style={styles.experienceTagText}>Sea plane</Text>
              </View>
              <View style={styles.experienceTag}>
                <Text style={styles.experienceTagText}>Jet</Text>
              </View>
              <View style={styles.experienceTag}>
                <Text style={styles.experienceTagText}>Single Engine Piston</Text>
              </View>
            </View>
          )}
        </View>

        {/* Divider Line 725 */}
        <View style={styles.dividerLine725}>
          <Image source={{ uri: imgLine725 }} style={styles.dividerImage} />
        </View>

        {/* Licenses and Certificates */}
        <View style={styles.sectionItem}>
          <TouchableOpacity 
            style={styles.sectionItemHeader}
            onPress={() => setIsLicensesExpanded(!isLicensesExpanded)}
            activeOpacity={0.7}
          >
            <Text style={styles.sectionItemText}>Licenses and Certificates</Text>
            <View style={[styles.chevronUp, !isLicensesExpanded && styles.chevronDown]}>
              <Image source={{ uri: imgImage1 }} style={styles.chevronImage} />
            </View>
          </TouchableOpacity>
          {isLicensesExpanded && (
            <View style={styles.sectionItemContent}>
              <Text style={styles.sectionItemPlaceholder}>Content coming soon</Text>
            </View>
          )}
        </View>

        {/* Divider Line 726 */}
        <View style={styles.dividerLine726}>
          <Image source={{ uri: imgLine726 }} style={styles.dividerImage} />
        </View>

        {/* Home and Interests */}
        <View style={styles.sectionItem}>
          <TouchableOpacity 
            style={styles.sectionItemHeader}
            onPress={() => setIsInterestsExpanded(!isInterestsExpanded)}
            activeOpacity={0.7}
          >
            <Text style={styles.sectionItemText}>Home and Interests</Text>
            <View style={[styles.chevronUp, !isInterestsExpanded && styles.chevronDown]}>
              <Image source={{ uri: imgImage1 }} style={styles.chevronImage} />
            </View>
          </TouchableOpacity>
          {isInterestsExpanded && (
            <View style={styles.sectionItemContent}>
              <Text style={styles.sectionItemPlaceholder}>Content coming soon</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 430,
    height: 223,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },
  headerBackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  statusBar: {
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
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusBarIcon: {
    width: 18,
    height: 12,
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
  backButton: {
    position: 'absolute',
    left: 26,
    top: 63.76,
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 27.52,
    height: 27.52,
  },
  profileImageContainer: {
    position: 'absolute',
    left: 24,
    top: 164,
    width: 100,
    height: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    position: 'absolute',
    left: 24,
    top: 290,
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 24,
  },
  title: {
    position: 'absolute',
    left: 24,
    top: 320,
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#5a5a5a',
    lineHeight: 15,
  },
  connectionsContainer: {
    position: 'absolute',
    left: 26,
    top: 341,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  joinedUsers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 0,
  },
  avatarContainer: {
    width: 20,
    height: 20,
    marginRight: -4,
  },
  avatarOverlap: {
    marginLeft: -4,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  connectionsCount: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 17,
    marginLeft: 0,
  },
  connectionsLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#5a5a5a',
    lineHeight: 15,
    marginLeft: 0,
  },
  description: {
    position: 'absolute',
    left: 25,
    top: 377,
    width: 381,
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#5a5a5a',
    lineHeight: 20,
    textAlign: 'justify',
  },
  actionButtonsContainer: {
    position: 'absolute',
    left: 24,
    top: 510,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    zIndex: 10,
  },
  connectButton: {
    width: 324,
    height: 49,
    backgroundColor: '#168aad',
    borderRadius: 12,
    borderWidth: 0.832,
    borderColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  connectButtonPending: {
    backgroundColor: '#FFFFFF',
    borderColor: '#5A5A5A',
    borderWidth: 1,
  },
  connectButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  connectIconContainer: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  connectIcon: {
    width: 20,
    height: 20,
  },
  connectButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 20,
  },
  connectButtonTextPending: {
    color: '#5A5A5A',
  },
  shareButton: {
    width: 50,
    height: 49,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#5a5a5a',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  shareIcon: {
    width: 20,
    height: 20,
  },
  dividerLine: {
    position: 'absolute',
    left: '50%',
    top: 581.5,
    transform: [{ translateX: -214 }],
    width: 428,
    height: 0,
    zIndex: 5,
  },
  dividerImage: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    position: 'absolute',
    top: 595.89,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 24,
    paddingTop: 0,
    paddingBottom: 100,
    alignItems: 'center',
    gap: 0,
  },
  experienceCard: {
    width: 382,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e9f0',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 9.015,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  experienceTitle: {
    fontFamily: 'Manrope',
    fontSize: 13.698,
    fontWeight: '600',
    color: '#484848',
    lineHeight: 17.501,
  },
  chevronUp: {
    width: 10.77,
    height: 6.058,
    transform: [{ rotate: '270deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronDown: {
    transform: [{ rotate: '90deg' }],
  },
  chevronImage: {
    width: 6.058,
    height: 10.77,
    resizeMode: 'cover',
  },
  experienceTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginLeft: -4,
  },
  experienceTag: {
    height: 36,
    borderRadius: 6.347,
    borderWidth: 1.063,
    borderColor: '#168aad',
    paddingHorizontal: 9.52,
    paddingVertical: 5.818,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 4,
  },
  experienceTagText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 10,
    fontWeight: '500',
    color: '#374151',
    lineHeight: 12,
  },
  dividerLine725: {
    width: 382,
    height: 0,
    marginBottom: 0,
  },
  dividerLine726: {
    width: 382,
    height: 0,
    marginBottom: 0,
  },
  sectionItem: {
    width: 382,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e9f0',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 9.015,
  },
  sectionItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  sectionItemContent: {
    marginTop: 16,
  },
  sectionItemText: {
    fontFamily: 'Manrope',
    fontSize: 13.698,
    fontWeight: '600',
    color: '#484848',
    lineHeight: 17.501,
  },
  chevronRight: {
    width: 6.058,
    height: 10.77,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '0deg' }],
  },
  sectionItemPlaceholder: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#5a5a5a',
    marginTop: 8,
  },
});

export default Profile1;

