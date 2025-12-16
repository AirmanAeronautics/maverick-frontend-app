import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Background image - using Onboarding Bg.png
const imgSignUpVersion9 = Image.resolveAssetSource(require('../../Onboarding Bg.png')).uri;
// Eye icons - using eye-off.svg for hidden, eye-open.svg for visible
const imgEyeOff = Image.resolveAssetSource(require('../../eye-off.svg')).uri;
const eyeOpenIconUri = Image.resolveAssetSource(require('../../eye open.svg')).uri;
// Checkbox icon
const imgPlayerStop = { uri: 'https://www.figma.com/api/mcp/asset/2ec45ac7-b1f9-4646-9f79-46285c97157a' };
// Line separator
const imgLine = { uri: 'https://www.figma.com/api/mcp/asset/fabaa707-9209-4056-b2b8-c1fae2def605' };
// Google icon parts
const imgGoogle1 = { uri: 'https://www.figma.com/api/mcp/asset/55da9c0a-6f53-4119-b44e-e6c6e064352e' };
const imgGoogle2 = { uri: 'https://www.figma.com/api/mcp/asset/aa0e6526-9a09-4093-9990-5c5fae704bf8' };
const imgGoogle3 = { uri: 'https://www.figma.com/api/mcp/asset/3eaacb99-f43f-4e39-a867-62d993b11c81' };
const imgGoogle4 = { uri: 'https://www.figma.com/api/mcp/asset/de82bc3b-3eaa-4f8e-ae65-e6d1e2928fc4' };
// Apple icon
const imgGroup = { uri: 'https://www.figma.com/api/mcp/asset/ba231f30-e14b-4473-ae51-61afcf305c62' };
// Logo
const imgFrame1341 = { uri: 'https://www.figma.com/api/mcp/asset/b16a598f-2a41-4d32-aab5-aaf79b4a40fd' };

type LoginProps = {
  onLogin?: () => void;
  onSignUp?: () => void;
  onNavigateToSignup?: () => void;
};

const Login = ({ onLogin, onSignUp, onNavigateToSignup }: LoginProps = {}) => {
  const [email, setEmail] = useState('nathank18uiux@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{ uri: imgSignUpVersion9 }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusBarTime}>9:41</Text>
          <View style={styles.statusBarRight}>
            <Svg width="18" height="12" viewBox="0 0 18 12" style={styles.statusBarIcon}>
              <Path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
              <Path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
              <Path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
              <Path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
            </Svg>
            <Svg width="17" height="12" viewBox="0 0 17 12" style={styles.statusBarIcon}>
              <Path d="M6.11523 8.91895C7.53499 7.69327 9.61435 7.69341 11.0342 8.91895C11.1056 8.98488 11.1474 9.07847 11.1494 9.17676C11.1513 9.27496 11.1136 9.36967 11.0449 9.43848L8.82129 11.7285C8.75619 11.7957 8.66776 11.8339 8.5752 11.834C8.48248 11.834 8.3933 11.7958 8.32812 11.7285L6.10449 9.43848C6.03588 9.36964 5.99805 9.27493 6 9.17676C6.00204 9.07847 6.04375 8.98483 6.11523 8.91895ZM3.10938 6.17871C6.16845 3.27412 10.9058 3.27412 13.9648 6.17871C14.0337 6.24672 14.0731 6.33971 14.0742 6.4375C14.0752 6.53552 14.0374 6.63066 13.9697 6.7002L12.6846 8.02539C12.5521 8.16057 12.338 8.16393 12.2021 8.03223C11.1976 7.10375 9.89127 6.58884 8.53613 6.58887C7.18182 6.58944 5.87596 7.10432 4.87207 8.03223C4.73622 8.16385 4.52206 8.16063 4.38965 8.02539L3.10449 6.7002C3.03666 6.63077 2.99909 6.53555 3 6.4375C3.00103 6.33975 3.04056 6.24669 3.10938 6.17871ZM0.107422 3.44238C4.7993 -1.14736 12.2007 -1.14729 16.8926 3.44238C16.9604 3.51048 16.9993 3.60309 17 3.7002C17.0006 3.79725 16.9634 3.89101 16.8965 3.95996L15.6094 5.28613C15.4769 5.422 15.2616 5.42369 15.127 5.29004C13.3393 3.55527 10.9666 2.58702 8.5 2.58691C6.03337 2.58703 3.66077 3.55527 1.87305 5.29004C1.73849 5.42383 1.523 5.42225 1.39062 5.28613L0.103516 3.95996C0.0366205 3.89095 -0.000625796 3.79729 0 3.7002C0.000701458 3.60306 0.0395239 3.51045 0.107422 3.44238Z" fill="white"/>
            </Svg>
            <Svg width="28" height="13" viewBox="0 0 28 13" style={styles.statusBarBattery}>
              <Path opacity="0.35" d="M4 0.5H21C22.933 0.5 24.5 2.067 24.5 4V9C24.5 10.933 22.933 12.5 21 12.5H4C2.067 12.5 0.5 10.933 0.5 9V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="white"/>
              <Path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="white"/>
              <Path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white"/>
            </Svg>
          </View>
        </View>

        {/* Headline Section */}
        <View style={styles.headlineSection}>
          <View style={styles.logoContainer}>
            <Image source={imgFrame1341} style={styles.logoIcon} />
            <Text style={styles.logoText}>MAVERICK</Text>
          </View>
          <View style={styles.headlineTextContainer}>
            <Text style={styles.headlineTitle}>Sign in to Airman</Text>
            <Text style={styles.headlineSubtitle}>Enter your email and password to log in </Text>
          </View>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* Tabbing */}
          <View style={styles.tabbingContainer}>
            <View style={styles.tabbingInner}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'login' && styles.tabActive]}
                onPress={() => setActiveTab('login')}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === 'login' && styles.tabTextActive]}>
                  Log In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'signup' && styles.tabActive]}
                onPress={() => {
                  if (onNavigateToSignup) {
                    onNavigateToSignup();
                  } else {
                    setActiveTab('signup');
                  }
                }}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === 'signup' && styles.tabTextActive]}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Field Section */}
          <View style={styles.fieldSection}>
            {/* Email Input */}
            <View style={styles.inputFieldContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputArea}>
                <TextInput
                  style={styles.inputText}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your Email Id"
                  placeholderTextColor="#6C7278"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputFieldContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputArea}>
                <TextInput
                  style={styles.inputText}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#6C7278"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIconContainer}
                  activeOpacity={0.7}
                >
                  <Image 
                    source={{ uri: showPassword ? eyeOpenIconUri : imgEyeOff }} 
                    style={styles.eyeIcon} 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember Me & Forgot Password */}
            <View style={styles.linkContainer}>
              <TouchableOpacity
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
                activeOpacity={0.7}
              >
                <Image source={imgPlayerStop} style={styles.checkboxIcon} />
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Buttons Section */}
          <View style={styles.buttonsSection}>
            {/* Log In Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={onLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Or Divider */}
            <View style={styles.orContainer}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.orLine} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
              {/* Google Button */}
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
                <View style={styles.googleIconContainer}>
                  <View style={styles.googleIconPart1}>
                    <Image source={imgGoogle1} style={styles.googleIconImage} />
                  </View>
                  <View style={styles.googleIconPart2}>
                    <Image source={imgGoogle2} style={styles.googleIconImage} />
                  </View>
                  <View style={styles.googleIconPart3}>
                    <Image source={imgGoogle3} style={styles.googleIconImage} />
                  </View>
                  <View style={styles.googleIconPart4}>
                    <Image source={imgGoogle4} style={styles.googleIconImage} />
                  </View>
                </View>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Apple Button */}
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
                <View style={styles.appleIconContainer}>
                  <Image source={imgGroup} style={styles.appleIcon} />
                </View>
                <Text style={styles.socialButtonText}>Continue with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  statusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DESIGN_WIDTH,
    height: 50.502,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
    zIndex: 10,
  },
  statusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.36,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 18.365,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
  },
  statusBarIcon: {
    width: 20.66,
    height: 11.478,
  },
  statusBarBattery: {
    width: 30.965,
    height: 14.921,
  },
  headlineSection: {
    position: 'absolute',
    top: 78.05,
    left: '50%',
    transform: [{ translateX: -APP_WIDTH / 2 }],
    alignItems: 'flex-start',
    gap: 36.729,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.435,
  },
  logoIcon: {
    width: 24.349,
    height: 22.26,
  },
  logoText: {
    fontFamily: 'Rany',
    fontSize: 19.283,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#FFFFFF',
    lineHeight: 21.694,
    letterSpacing: -0.1928,
  },
  headlineTextContainer: {
    gap: 13.773,
  },
  headlineTitle: {
    fontFamily: 'Inter',
    fontSize: 36.729,
    fontWeight: '700',
    color: '#EEEEEE',
    lineHeight: 47.748,
    letterSpacing: -0.7346,
    width: 375.325,
  },
  headlineSubtitle: {
    fontFamily: 'Inter',
    fontSize: 13.773,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 19.282,
    letterSpacing: -0.1377,
  },
  contentCard: {
    position: 'absolute',
    top: 253.66,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 18.365,
    borderTopRightRadius: 18.365,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 27.547,
    paddingHorizontal: 27.547,
    paddingBottom: 27.547,
    gap: 27.547,
  },
  tabbingContainer: {
    backgroundColor: '#F5F6F9',
    borderWidth: 1.148,
    borderColor: '#F5F6F9',
    height: 41.32,
    borderRadius: 8.034,
    overflow: 'hidden',
  },
  tabbingInner: {
    flexDirection: 'row',
    gap: 1.148,
    padding: 2.296,
    height: '100%',
  },
  tab: {
    flex: 1,
    height: '100%',
    borderRadius: 6.887,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16.069,
    paddingVertical: 13.773,
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: 'rgba(239, 240, 246, 0.5)',
  },
  tabText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#7D7D91',
    lineHeight: 24.104,
    letterSpacing: -0.3214,
  },
  tabTextActive: {
    color: '#232447',
  },
  fieldSection: {
    gap: 18.365,
  },
  inputFieldContainer: {
    gap: 2.296,
  },
  inputLabel: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13.773,
    fontWeight: '500',
    color: '#6C7278',
    lineHeight: 22.037,
    letterSpacing: -0.2755,
  },
  inputArea: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#EDF1F3',
    height: 52.798,
    borderRadius: 11.478,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16.069,
    paddingVertical: 13.773,
  },
  inputText: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22.497,
    letterSpacing: -0.1607,
  },
  eyeIconContainer: {
    width: 18.365,
    height: 18.365,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  eyeIcon: {
    width: 18.365,
    height: 18.365,
    resizeMode: 'contain',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  checkboxIcon: {
    width: 21.808,
    height: 21.808,
  },
  rememberText: {
    fontFamily: 'Inter',
    fontSize: 13.773,
    fontWeight: '500',
    color: '#6C7278',
    lineHeight: 20.66,
    letterSpacing: -0.1377,
  },
  forgotPasswordText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13.773,
    fontWeight: '500',
    color: '#168AAD',
    lineHeight: 19.282,
    letterSpacing: -0.1377,
    textAlign: 'right',
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  buttonsSection: {
    gap: 18.365,
  },
  loginButton: {
    height: 55.094,
    borderRadius: 11.478,
    backgroundColor: '#168AAD',
    borderWidth: 1.148,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 27.547,
    paddingVertical: 11.478,
  },
  loginButtonText: {
    fontFamily: 'Inter',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 22.497,
    letterSpacing: -0.1607,
    textAlign: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18.365,
  },
  orLine: {
    flex: 1,
    height: 1.148,
    backgroundColor: '#EDF1F3',
  },
  orText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13.773,
    fontWeight: '400',
    color: '#6C7278',
    lineHeight: 20.66,
    letterSpacing: -0.1377,
    textAlign: 'center',
  },
  socialButtonsContainer: {
    gap: 17.217,
  },
  socialButton: {
    height: 55.094,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#EFF0F6',
    borderRadius: 11.478,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 27.547,
    paddingVertical: 11.478,
    gap: 11.478,
  },
  googleIconContainer: {
    width: 20.66,
    height: 20.66,
    position: 'relative',
  },
  googleIconPart1: {
    position: 'absolute',
    top: '42.03%',
    left: '6.25%',
    right: '50.9%',
    bottom: '16.85%',
  },
  googleIconPart2: {
    position: 'absolute',
    top: '58.65%',
    left: '19.54%',
    right: '11.01%',
    bottom: '6.25%',
  },
  googleIconPart3: {
    position: 'absolute',
    top: '30.15%',
    left: '74.5%',
    right: '6.25%',
    bottom: '30.36%',
  },
  googleIconPart4: {
    position: 'absolute',
    top: '6.25%',
    left: '19.24%',
    right: '11.01%',
    bottom: '58.65%',
  },
  googleIconImage: {
    width: '100%',
    height: '100%',
  },
  appleIconContainer: {
    width: 20.66,
    height: 20.66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleIcon: {
    width: 20.66,
    height: 20.66,
  },
  socialButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1C1E',
    lineHeight: 22.4,
    letterSpacing: -0.16,
    textAlign: 'center',
  },
});

export default Login;

