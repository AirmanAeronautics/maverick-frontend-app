import React from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgImage = "https://www.figma.com/api/mcp/asset/fef54a34-f074-4b6a-b39e-d06ad1e6d8d2";
const imgImage1 = "https://www.figma.com/api/mcp/asset/ff5e55d3-1b3f-4aff-bf35-f3e91b8c6374";
const imgOutline = "https://www.figma.com/api/mcp/asset/3b736ce2-af21-48a9-b326-0992a3bbd2b1";
const imgBatteryEnd = "https://www.figma.com/api/mcp/asset/92ac5572-b0d3-4d07-976e-09e416780e22";
const imgFill = "https://www.figma.com/api/mcp/asset/0568e182-439c-4d85-82a7-a75674fda338";
const imgWifi = "https://www.figma.com/api/mcp/asset/46af0c08-4be9-4858-9391-efdd3c25cb17";
const imgIconMobileSignal = "https://www.figma.com/api/mcp/asset/c0e73d38-0fcb-466e-938e-ff3c21f2d842";
const imgFluentPeople20Regular = "https://www.figma.com/api/mcp/asset/0a74f808-da9c-4250-9453-2485228a939c";
const imgArrowArrowLeftMd = "https://www.figma.com/api/mcp/asset/80ec8b56-948f-4271-9e53-aad5456b83dc";
const imgGroup = Image.resolveAssetSource(require('./bi_person-plus.svg')).uri;
const imgMynauiMessage = "https://www.figma.com/api/mcp/asset/e910d120-53c9-4ff7-a3a9-c73324fd1e5b";
const imgFluentLive24Regular = "https://www.figma.com/api/mcp/asset/b6666844-cd0c-46e5-87e1-6831543a9e69";
const imgFrame = "https://www.figma.com/api/mcp/asset/9bb0a10b-c9f6-4d06-83ac-d5906c288d7b";
const imgGroup1 = Image.resolveAssetSource(require('./bi_person-plus.svg')).uri;
const imgMynauiChatPlus = "https://www.figma.com/api/mcp/asset/e480d4e0-f4eb-48b3-9b87-a1b3d6fa4a15";

type StatusBarBatteryProps = {
  darkMode?: "False";
  charge?: "100%";
  charging?: "False";
  percentage?: "False";
};

const StatusBarBattery: React.FC<StatusBarBatteryProps> = ({ 
  darkMode = "False", 
  charge = "100%", 
  charging = "False", 
  percentage = "False" 
}) => {
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

const CommunityPage: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <View style={styles.statusBarTimeContainer}>
            <Text style={styles.statusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.statusBarRight}>
          <StatusBarBattery />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Community at a glance card */}
        <View style={styles.glanceCard}>
          <View style={styles.glanceCardContent}>
            <Text style={styles.glanceCardTitle}>Your community at a glance</Text>
            <Text style={styles.glanceCardSubtitle}>See what's happening and quickly reach your people.</Text>
          </View>
          <TouchableOpacity style={styles.glanceCardButton} activeOpacity={0.7}>
            <Text style={styles.glanceCardButtonText}>Explore</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <View style={styles.statsCardContent}>
              <Text style={styles.statsCardLabel}>Members</Text>
              <Text style={styles.statsCardValue}>1247</Text>
            </View>
            <View style={styles.statsCardIcon}>
              <Image source={{ uri: imgFluentPeople20Regular }} style={styles.statsCardIconImage} />
            </View>
          </View>
          <View style={[styles.statsCard, styles.statsCardLive]}>
            <View style={styles.statsCardContent}>
              <Text style={styles.statsCardLabel}>Live now</Text>
              <Text style={[styles.statsCardValue, styles.statsCardValueLive]}>312</Text>
            </View>
            <View style={styles.statsCardIcon}>
              <Image source={{ uri: imgFluentLive24Regular }} style={styles.statsCardIconImage} />
            </View>
          </View>
        </View>

        {/* Action Cards */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.actionCardTouchable}>
            <LinearGradient
              colors={['#38C7F9', '#3AACFB', '#3D8FFD']}
              locations={[0, 0.2916, 0.9544]}
              start={{ x: 0.4686, y: 0.0010 }}
              end={{ x: 0.5314, y: 0.9990 }}
              style={styles.actionCardConnections}
            >
              <View style={styles.actionCardSpacer} />
              <View style={styles.actionCardArrow}>
                <View style={styles.actionCardArrowWrapper}>
                  <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.actionCardArrowImage} />
                </View>
              </View>
              <View style={styles.actionCardContent}>
                <View style={styles.actionCardIconWrapper}>
                  <View style={styles.actionCardIcon}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.1)']}
                      style={styles.actionCardIconGradient}
                    >
                      <View style={styles.actionCardIconInner}>
                        {/* Top-left shiny highlight */}
                        <LinearGradient
                          colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.1)', 'transparent']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={styles.actionCardIconHighlight}
                        />
                        {/* Right side light texture */}
                        <LinearGradient
                          colors={['transparent', 'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.15)']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={styles.actionCardIconTexture}
                        />
                        <View style={styles.actionCardIconGroup}>
                          <Image source={{ uri: imgGroup }} style={styles.actionCardIconImage} />
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.actionCardText}>
                  <Text style={styles.actionCardTitle}>Connections</Text>
                  <Text style={styles.actionCardSubtitle}>Find and add new pilots</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.actionCardTouchable}>
            <LinearGradient
              colors={['#00A775', '#00AA77', '#1CBA8B']}
              locations={[0, 0.3428, 0.988]}
              start={{ x: 0.5, y: 0.022 }}
              end={{ x: 0.5, y: 0.978 }}
              style={styles.actionCardMessages}
            >
              <View style={styles.actionCardSpacer} />
              <View style={styles.actionCardArrow}>
                <View style={styles.actionCardArrowWrapper}>
                  <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.actionCardArrowImage} />
                </View>
              </View>
              <View style={styles.actionCardContent}>
                <View style={styles.actionCardIconWrapper}>
                  <View style={styles.actionCardIcon}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.1)']}
                      style={styles.actionCardIconGradient}
                    >
                      <View style={styles.actionCardIconInner}>
                        {/* Top-left shiny highlight */}
                        <LinearGradient
                          colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.1)', 'transparent']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={styles.actionCardIconHighlight}
                        />
                        {/* Right side light texture */}
                        <LinearGradient
                          colors={['transparent', 'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.15)']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={styles.actionCardIconTexture}
                        />
                        <View style={styles.actionCardIconMessage}>
                          <Image source={{ uri: imgMynauiMessage }} style={styles.actionCardIconImage} />
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.actionCardText, styles.actionCardTextLast]}>
                  <Text style={styles.actionCardTitle}>Channels and Messages</Text>
                  <Text style={styles.actionCardSubtitle}>3 New Messages</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.actionButtonPrimary} activeOpacity={0.7}>
            <View style={styles.actionButtonContent}>
              <View style={styles.actionButtonIcon}>
                <View style={styles.actionButtonIconGroup}>
                  <Image source={{ uri: imgGroup1 }} style={styles.actionButtonIconImage} />
                </View>
              </View>
              <Text style={styles.actionButtonText}>Invite Members</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonSecondary} activeOpacity={0.7}>
            <View style={styles.actionButtonContent}>
              <View style={styles.actionButtonIconSecondary}>
                <Image source={{ uri: imgMynauiChatPlus }} style={styles.actionButtonIconImage} />
              </View>
              <Text style={styles.actionButtonTextSecondary}>New Message</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Messages */}
        <View style={styles.recentMessages}>
          <View style={styles.recentMessagesHeader}>
            <View style={styles.recentMessagesTitleWrapper}>
              <Text style={styles.recentMessagesTitle}>Recent Messages</Text>
            </View>
          </View>
          <Text style={styles.recentMessagesSubtitle}>Stay current with what your community is doing.</Text>
          <TouchableOpacity style={styles.recentMessageItem} activeOpacity={0.7}>
            <View style={styles.recentMessageItemContent}>
              <View style={styles.recentMessageItemAvatar}>
                <Image source={{ uri: imgImage }} style={styles.recentMessageItemAvatarImage} />
              </View>
              <View style={styles.recentMessageItemText}>
                <Text style={styles.recentMessageItemName}>Alex has messaged you</Text>
                <Text style={styles.recentMessageItemTime}>2m ago</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.recentMessageItem}>
            <View style={styles.recentMessageItemContent}>
              <View style={styles.recentMessageItemAvatar}>
                <Image source={{ uri: imgImage1 }} style={styles.recentMessageItemAvatarImage} />
              </View>
              <View style={styles.recentMessageItemText}>
                <Text style={styles.recentMessageItemName}>Tom started group DM</Text>
                <Text style={styles.recentMessageItemTime}>2m ago</Text>
              </View>
            </View>
          </View>
          <View style={[styles.recentMessageItem, styles.recentMessageItemLast]}>
            <View style={styles.recentMessageItemFrame}>
              <Image source={{ uri: imgFrame }} style={styles.recentMessageItemFrameImage} />
            </View>
            <View style={[styles.recentMessageItemText, styles.recentMessageItemTextFrame]}>
              <Text style={[styles.recentMessageItemName, styles.recentMessageItemNameFrame]}>New message from Priya</Text>
              <Text style={[styles.recentMessageItemTime, styles.recentMessageItemTimeFrame]}>28m ago</Text>
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
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  statusBar: {
    height: 47,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
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
    width: 54,
  },
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
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
  glanceCard: {
    marginTop: 90,
    marginHorizontal: 24,
    borderWidth: 1.3,
    borderColor: '#e6e9f0',
    borderRadius: 11.235,
    padding: 14.7,
    minHeight: 102.99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  glanceCardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 10,
  },
  glanceCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16.853,
    fontWeight: '500',
    color: '#0a0f1f',
    lineHeight: 22.471,
    margin: 0,
    padding: 0,
  },
  glanceCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14.044,
    fontWeight: '400',
    color: '#585858',
    lineHeight: 20,
    margin: 0,
    padding: 0,
    marginTop: 4,
  },
  glanceCardButton: {
    backgroundColor: '#0a84ff',
    borderRadius: 11.235,
    height: 30,
    width: 74,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  glanceCardButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14.044,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 14.044,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20.51,
    marginHorizontal: 24,
    gap: 8,
    justifyContent: 'flex-start',
  },
  statsCard: {
    borderWidth: 1.3,
    borderColor: '#e6e9f0',
    borderRadius: 11.347,
    paddingHorizontal: 14.77,
    height: 79,
    width: 187,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsCardLive: {
    marginLeft: 0,
  },
  statsCardContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statsCardLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#585858',
    lineHeight: 22.471,
    margin: 0,
    padding: 0,
  },
  statsCardValue: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '700',
    color: '#0a0f1f',
    lineHeight: 22.693,
    margin: 0,
    padding: 0,
  },
  statsCardValueLive: {
    fontSize: 18.573,
  },
  statsCardIcon: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  statsCardIconImage: {
    width: '100%',
    height: '100%',
  },
  actionsContainer: {
    marginTop: 20,
    marginHorizontal: 23,
    gap: 16,
  },
  actionCardTouchable: {
    borderRadius: 11.3465,
    overflow: 'hidden',
  },
  actionCardConnections: {
    borderWidth: 0.945545,
    borderColor: '#E6E9F0',
    borderRadius: 11.3465,
    height: 101,
    width: 383,
    position: 'relative',
    overflow: 'hidden',
  },
  actionCardMessages: {
    borderWidth: 0.945545,
    borderColor: '#E6E9F0',
    borderRadius: 11.3465,
    height: 101,
    width: 383,
    position: 'relative',
    overflow: 'hidden',
  },
  actionCard: {
    borderWidth: 0.946,
    borderColor: '#e6e9f0',
    borderRadius: 11.347,
    height: 101,
    width: 383,
    position: 'relative',
    overflow: 'hidden',
  },
  actionCardSpacer: {
    position: 'absolute',
    height: 14,
    left: 16,
    top: 12,
    width: 68,
  },
  actionCardArrow: {
    position: 'absolute',
    right: 16,
    top: 41,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionCardArrowWrapper: {
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
  },
  actionCardArrowImage: {
    width: 24,
    height: 24,
  },
  actionCardContent: {
    position: 'absolute',
    left: 24,
    top: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  actionCardIconWrapper: {
    position: 'relative',
  },
  actionCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  actionCardIconGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  actionCardIconInner: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
    position: 'relative',
  },
  actionCardIconHighlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '50%',
    borderRadius: 10,
    opacity: 0.9,
  },
  actionCardIconTexture: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    opacity: 0.8,
  },
  actionCardIconGroup: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: -11.5 }, { translateY: -11.5 }],
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  actionCardIconMessage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: -11.5 }, { translateY: -11.5 }],
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  actionCardIconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  actionCardText: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionCardTextLast: {
    alignItems: 'flex-start',
    width: 226,
  },
  actionCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  actionCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 24,
    gap: 8,
    justifyContent: 'flex-start',
  },
  actionButtonPrimary: {
    backgroundColor: '#0a84ff',
    borderRadius: 7,
    height: 53,
    width: 185,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonSecondary: {
    borderWidth: 1.3,
    borderColor: '#e6e9f0',
    borderRadius: 7,
    height: 53,
    width: 185,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  actionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionButtonIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIconGroup: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIconSecondary: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  actionButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 15,
  },
  actionButtonTextSecondary: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 15,
  },
  recentMessages: {
    marginTop: 20,
    marginHorizontal: 24,
    borderWidth: 1.3,
    borderColor: '#e6e9f0',
    borderRadius: 11.235,
    padding: 14.62,
    minHeight: 321.142,
  },
  recentMessagesHeader: {
    marginBottom: 8,
  },
  recentMessagesTitleWrapper: {
    marginBottom: 4,
  },
  recentMessagesTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0a0f1f',
    lineHeight: 25.279,
  },
  recentMessagesSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#585858',
    lineHeight: 22.471,
    marginTop: 8,
    marginBottom: 16,
  },
  recentMessageItem: {
    borderWidth: 1.3,
    borderColor: '#e6e9f0',
    borderRadius: 11.235,
    padding: 10.78,
    height: 65.539,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentMessageItemLast: {
    borderWidth: 0.936,
  },
  recentMessageItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    flex: 1,
  },
  recentMessageItemAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  recentMessageItemAvatarImage: {
    width: '100%',
    height: '100%',
  },
  recentMessageItemText: {
    flex: 1,
    justifyContent: 'center',
  },
  recentMessageItemTextFrame: {
    marginLeft: 59.92 - 10.78 - 40 - 13,
  },
  recentMessageItemName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14.044,
    fontWeight: '500',
    color: '#0a0f1f',
    lineHeight: 22.471,
    marginBottom: 4,
  },
  recentMessageItemNameFrame: {
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  recentMessageItemTime: {
    fontFamily: 'Roboto',
    fontSize: 13.027,
    fontWeight: '400',
    color: '#585858',
    lineHeight: 18.725,
  },
  recentMessageItemTimeFrame: {
    color: '#8f9bb3',
    fontSize: 13.108,
  },
  recentMessageItemFrame: {
    position: 'absolute',
    left: 11.24,
    top: 13.11,
    width: 37.451,
    height: 37.451,
  },
  recentMessageItemFrameImage: {
    width: '100%',
    height: '100%',
  },
});

export default CommunityPage;

