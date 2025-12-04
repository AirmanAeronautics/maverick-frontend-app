// DO NOT MODIFY OTHER FILES — PERMISSION SCREEN ONLY

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
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgAvatar = "https://www.figma.com/api/mcp/asset/149dcca3-2687-4066-ac2b-9e663711cbbb";
const imgRectangle4257 = "https://www.figma.com/api/mcp/asset/9bc58d6f-311f-4853-99fa-76e29997ef29";
const imgImage = "https://www.figma.com/api/mcp/asset/249c2f51-ed4e-4f1f-a730-42ae02d14929";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/3212fe8e-fe2e-4c56-aa45-841d956a4e92";
const imgWifi = "https://www.figma.com/api/mcp/asset/4958fcad-6268-4891-aef7-53d6350f1dfc";
const imgBattery = "https://www.figma.com/api/mcp/asset/f0784d0d-769d-4225-9247-652250588126";
const imgIconamoonSendFill = "https://www.figma.com/api/mcp/asset/4d000d7a-4c3e-483c-bfb2-34bfc097ee1e";
const imgEllipse177 = "https://www.figma.com/api/mcp/asset/a20d394f-5673-4fee-abc2-6a1630aa62e7";

const GenAI = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>9:41</Text>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.mobileSignal} />
          <Image source={{ uri: imgWifi }} style={styles.wifi} />
          <View style={styles.batteryContainer}>
            <Image source={{ uri: imgBattery }} style={styles.battery} />
          </View>
        </View>
      </View>

      {/* Header Section with Sky Background */}
      <View style={styles.headerSection}>
        <View style={styles.headerBg}>
          <Image source={{ uri: imgRectangle4257 }} style={styles.headerBgImage} />
        </View>
        <View style={styles.headerDivider} />
        <View style={styles.chatHeader}>
          <View style={styles.chatHeaderContent}>
            <View style={styles.chatHeaderImage}>
              <Image source={{ uri: imgImage }} style={styles.chatHeaderImageContent} />
            </View>
            <View style={styles.chatHeaderText}>
              <Text style={styles.chatHeaderName}>Maverick</Text>
              <View style={styles.onlineStatus}>
                <View style={styles.onlineDot}>
                  <Image source={{ uri: imgEllipse177 }} style={styles.onlineDotImage} />
                </View>
                <Text style={styles.onlineText}>Online</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerBgOverlay} />
      </View>

      {/* Main Content Area */}
      <View style={styles.contentArea}>
        {/* Message from Maverick */}
        <View style={styles.messageContainer}>
          <View style={styles.messageAvatar}>
            <Image source={{ uri: imgAvatar }} style={styles.messageAvatarImage} />
          </View>
          <View style={styles.messageContent}>
            <View style={styles.messageNameTime}>
              <View style={styles.messageNameContainer}>
                <Text style={styles.messageName}>Maverick</Text>
              </View>
            </View>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>Welcome back, Captain. Ready to take off? How can I help you today?</Text>
            </View>
          </View>
        </View>

        {/* Try Asking Section */}
        <Text style={styles.tryAsking}>Try Asking :</Text>

        {/* Suggestion Buttons */}
        <TouchableOpacity style={[styles.suggestionButton, styles.suggestionButton1]} activeOpacity={0.7}>
          <Text style={styles.suggestionText}>Am I current to fly today?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.suggestionButton, styles.suggestionButton2]} activeOpacity={0.7}>
          <Text style={styles.suggestionText}>What Expires Soon?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.suggestionButton, styles.suggestionButton3]} activeOpacity={0.7}>
          <Text style={styles.suggestionText}>Can I carry my Passengers?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.suggestionButton, styles.suggestionButton4]} activeOpacity={0.7}>
          <Text style={styles.suggestionText}>Am I current for night IFR?</Text>
        </TouchableOpacity>

        {/* Content Divider */}
        <View style={styles.contentDivider} />

        {/* Input Container */}
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            placeholder="Type a Message"
            placeholderTextColor="dimgrey"
          />
          <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
            <LinearGradient
              colors={['#2fb7ff', '#caf0f8']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.sendButtonGradient}
            >
              <View style={styles.sendIcon}>
                <Image source={{ uri: imgIconamoonSendFill }} style={styles.sendIconImage} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: APP_WIDTH,
    height: 932,
    backgroundColor: '#333333',
    overflow: 'hidden',
    borderRadius: 10.33,
    alignSelf: 'center',
  },
  statusBar: {
    position: 'absolute',
    height: 50.502,
    left: 0,
    top: 0,
    width: APP_WIDTH,
    backgroundColor: '#333333',
    zIndex: 100,
  },
  statusBarTime: {
    position: 'absolute',
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    lineHeight: 18.365,
    color: '#ffffff',
    left: 34.43,
    top: '50%',
    transform: [{ translateY: -9.1825 }],
  },
  statusBarRight: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 5.739,
    alignItems: 'center',
    left: 324.82,
    paddingVertical: 1.148,
    top: 17.22,
  },
  mobileSignal: {
    height: 11.479,
    width: 20.66,
  },
  wifi: {
    height: 12.586,
    width: 17.529,
  },
  batteryContainer: {
    position: 'relative',
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  battery: {
    width: 30.965,
    height: 14.921,
  },
  headerSection: {
    position: 'absolute',
    backgroundColor: 'transparent',
    height: 98,
    left: 0,
    overflow: 'hidden',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    top: 148,
    width: APP_WIDTH,
    zIndex: 10,
  },
  headerBg: {
    position: 'absolute',
    height: 98,
    left: 0,
    top: 0,
    width: APP_WIDTH,
    zIndex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: 'hidden',
  },
  headerBgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerDivider: {
    position: 'absolute',
    bottom: 0,
    height: 1,
    left: '50%',
    transform: [{ translateX: -APP_WIDTH / 2 }],
    width: APP_WIDTH,
    borderTopWidth: 1,
    borderTopColor: '#e9f1f9',
    zIndex: 3,
  },
  chatHeader: {
    position: 'absolute',
    height: 48,
    left: 23,
    borderRadius: 6,
    top: 31,
    width: 382,
    zIndex: 2,
  },
  chatHeaderContent: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 12.769,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
    width: 352,
  },
  chatHeaderImage: {
    position: 'relative',
    width: 48,
    height: 48,
  },
  chatHeaderImageContent: {
    width: '100%',
    height: '100%',
  },
  chatHeaderText: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
  },
  chatHeaderName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.281,
    color: '#000000',
  },
  onlineStatus: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  onlineDot: {
    position: 'relative',
    width: 8,
    height: 8,
  },
  onlineDotImage: {
    width: '100%',
    height: '100%',
  },
  onlineText: {
    fontFamily: 'Helvetica Neue',
    height: 10,
    lineHeight: 10,
    color: '#5a5a5a',
    fontSize: 10,
    overflow: 'hidden',
  },
  headerBgOverlay: {
    position: 'absolute',
    height: 112,
    left: 0,
    opacity: 0.8,
    borderRadius: 5.966,
    top: 52,
    width: APP_WIDTH,
    zIndex: 0,
  },
  contentArea: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 784,
    left: 0,
    overflow: 'hidden',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    top: 148,
    width: APP_WIDTH,
    zIndex: 1,
  },
  messageContainer: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 12,
    height: 70,
    alignItems: 'flex-start',
    left: 25,
    top: 130,
    width: 293,
  },
  messageAvatar: {
    position: 'relative',
    borderRadius: 176.667,
    width: 35.333,
    height: 35.333,
  },
  messageAvatarImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 176.667,
    resizeMode: 'cover',
  },
  messageContent: {
    height: 70,
    position: 'relative',
    width: 247,
  },
  messageNameTime: {
    position: 'absolute',
    flexDirection: 'row',
    height: 18,
    alignItems: 'center',
    left: -0.2,
    top: 0,
    width: 272.067,
  },
  messageNameContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  messageName: {
    fontFamily: 'Helvetica Neue',
    lineHeight: 17.667,
    color: '#344054',
    fontSize: 12.367,
    fontWeight: '500',
  },
  messageBubble: {
    position: 'absolute',
    height: 55,
    left: -0.2,
    overflow: 'hidden',
    borderTopLeftRadius: 7.067,
    borderTopRightRadius: 7.067,
    borderBottomLeftRadius: 7.067,
    borderBottomRightRadius: 0,
    top: 28,
    width: 247,
    backgroundColor: 'transparent',
    padding: 0,
  },
  messageText: {
    fontFamily: 'Helvetica Neue',
    lineHeight: 21.2,
    color: '#101828',
    fontSize: 14.133,
    fontWeight: '400',
  },
  tryAsking: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    lineHeight: 17.667,
    left: 91,
    color: '#344054',
    fontSize: 14,
    fontWeight: '500',
    top: 270,
  },
  suggestionButton: {
    position: 'absolute',
    borderWidth: 1.063,
    borderColor: '#e6e6e6',
    flexDirection: 'row',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingVertical: 5.818,
    paddingHorizontal: 9.52,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    width: 249,
  },
  suggestionButton1: {
    left: 91,
    top: 303,
  },
  suggestionButton2: {
    left: 91,
    top: 355,
  },
  suggestionButton3: {
    left: 91,
    top: 407,
  },
  suggestionButton4: {
    left: 91,
    top: 459,
  },
  suggestionText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: '#525252',
    lineHeight: 12,
  },
  contentDivider: {
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: '#e9f1f9',
    bottom: 96,
    height: 1,
    left: '50%',
    transform: [{ translateX: -APP_WIDTH / 2 }],
    width: APP_WIDTH,
  },
  inputContainer: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    left: '50%',
    top: 712,
    transform: [{ translateX: -APP_WIDTH / 2 }],
    zIndex: 10,
  },
  inputField: {
    backgroundColor: '#f3f2ee',
    height: 49,
    overflow: 'hidden',
    borderRadius: 30,
    width: 328,
    borderWidth: 0,
    paddingHorizontal: 19.5,
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '500',
    color: 'dimgrey',
  },
  sendButton: {
    width: 49,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonGradient: {
    overflow: 'hidden',
    borderRadius: 100,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    position: 'absolute',
    left: 12.5,
    width: 24,
    height: 24,
    top: 12.5,
  },
  sendIconImage: {
    width: '100%',
    height: '100%',
  },
});

export default GenAI;

