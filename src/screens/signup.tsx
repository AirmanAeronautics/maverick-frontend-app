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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgSignUpVersion9 = 'https://www.figma.com/api/mcp/asset/bc616f1c-a467-4982-8fdb-3f947fefecc2';
const imgEyeOff = 'https://www.figma.com/api/mcp/asset/5233f8ea-cea0-403f-b591-52669008f8d3';
const imgPlayerStop = 'https://www.figma.com/api/mcp/asset/2ec45ac7-b1f9-4646-9f79-46285c97157a';
const imgLine = 'https://www.figma.com/api/mcp/asset/fabaa707-9209-4056-b2b8-c1fae2def605';
const imgGoogle1 = 'https://www.figma.com/api/mcp/asset/55da9c0a-6f53-4119-b44e-e6c6e064352e';
const imgGoogle2 = 'https://www.figma.com/api/mcp/asset/aa0e6526-9a09-4093-9990-5c5fae704bf8';
const imgGoogle3 = 'https://www.figma.com/api/mcp/asset/3eaacb99-f43f-4e39-a867-62d993b11c81';
const imgGoogle4 = 'https://www.figma.com/api/mcp/asset/de82bc3b-3eaa-4f8e-ae65-e6d1e2928fc4';
const imgGroup = 'https://www.figma.com/api/mcp/asset/ba231f30-e14b-4473-ae51-61afcf305c62';
const imgFrame1341 = 'https://www.figma.com/api/mcp/asset/b16a598f-2a41-4d32-aab5-aaf79b4a40fd';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/da65b702-2478-4f47-a89f-0659fffd4f5e';
const imgWifi = 'https://www.figma.com/api/mcp/asset/90578645-59ab-4d77-b28c-eb0f7f440eb0';
const imgBattery = 'https://www.figma.com/api/mcp/asset/5a4b0b09-ff18-48eb-9c72-5fa4682ada07';

// Local image assets - For React Native, we'll use the Figma closed eye icon and need to add open eye icon
// Note: In production, these should be local assets
const eyeOpenIconUri = 'https://www.figma.com/api/mcp/asset/5233f8ea-cea0-403f-b591-52669008f8d3'; // Placeholder - should be local asset

type LoginProps = {
  onLogin?: () => void;
  onSignUp?: () => void;
  onNavigateToLogin?: () => void;
};

const Login = ({ onLogin, onSignUp, onNavigateToLogin }: LoginProps = {}) => {
  const [email, setEmail] = useState('nathank18uiux@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');

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
            <Image source={{ uri: imgMobileSignal }} style={styles.statusBarIcon} />
            <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
            <Image source={{ uri: imgBattery }} style={styles.statusBarBattery} />
          </View>
        </View>

        {/* Headline Section */}
        <View style={styles.headlineSection}>
          <View style={styles.logoContainer}>
            <Image source={{ uri: imgFrame1341 }} style={styles.logoIcon} />
            <Text style={styles.logoText}>MAVERICK</Text>
          </View>
          <View style={styles.headlineTextContainer}>
            <Text style={styles.headlineTitle}>Get Started now</Text>
            <Text style={styles.headlineSubtitle}>Create an account to explore about our app</Text>
          </View>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* Tabbing */}
          <View style={styles.tabbingContainer}>
            <View style={styles.tabbingInner}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'login' && styles.tabActive]}
                onPress={() => {
                  if (onNavigateToLogin) {
                    onNavigateToLogin();
                  } else {
                    setActiveTab('login');
                  }
                }}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === 'login' && styles.tabTextActive]}>
                  Log In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'signup' && styles.tabActive]}
                onPress={() => setActiveTab('signup')}
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
              <Text style={styles.inputLabel}>Set Password</Text>
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

            {/* Remember Me */}
            <View style={styles.linkContainer}>
              <View style={{ width: '100%', alignItems: 'flex-end' }}>
                <TouchableOpacity
                  style={styles.rememberContainer}
                  onPress={() => setRememberMe(!rememberMe)}
                  activeOpacity={0.7}
                >
                  <Image source={{ uri: imgPlayerStop }} style={styles.checkboxIcon} />
                  <Text style={styles.rememberText}>Remember me</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Buttons Section */}
          <View style={styles.buttonsSection}>
            {/* Sign Up Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={onLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.loginButtonText}>Sign Up</Text>
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
                    <Image source={{ uri: imgGoogle1 }} style={styles.googleIconImage} />
                  </View>
                  <View style={styles.googleIconPart2}>
                    <Image source={{ uri: imgGoogle2 }} style={styles.googleIconImage} />
                  </View>
                  <View style={styles.googleIconPart3}>
                    <Image source={{ uri: imgGoogle3 }} style={styles.googleIconImage} />
                  </View>
                  <View style={styles.googleIconPart4}>
                    <Image source={{ uri: imgGoogle4 }} style={styles.googleIconImage} />
                  </View>
                </View>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Apple Button */}
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
                <View style={styles.appleIconContainer}>
                  <Image source={{ uri: imgGroup }} style={styles.appleIcon} />
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

