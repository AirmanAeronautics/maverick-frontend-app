import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

const imgChannelBackground = Image.resolveAssetSource(require('../assets/channel Bg.png')).uri;
const imgArrowBack = Image.resolveAssetSource(require('../assets/arrow-back.png')).uri;
const imgAvatar = Image.resolveAssetSource(require('../assets/avatar-4.png')).uri;
const imgEditBadge = Image.resolveAssetSource(require('../assets/icon-fab.png')).uri;
const imgSignal = Image.resolveAssetSource(require('../assets/icon-signal.png')).uri;
const imgWifi = Image.resolveAssetSource(require('../assets/icon-wifi.png')).uri;

const CreateChannel = () => {
  const CATEGORY_OPTIONS = useMemo(() => ['General', 'Flight School', 'Private'], []);
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [visibility, setVisibility] = useState<'Public' | 'Private'>('Public');

  const handleSelectCategory = (value: string) => {
    setCategory(value);
    setCategoryMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imgChannelBackground }} style={styles.background} blurRadius={5}>
        <View style={styles.backgroundOverlay} />
      </ImageBackground>
      <ScrollView
        style={StyleSheet.absoluteFill}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statusBar}>
          <Text style={styles.statusTime}>9:41</Text>
          <View style={styles.statusRight}>
            <Image source={{ uri: imgSignal }} style={styles.statusIcon} />
            <Image source={{ uri: imgWifi }} style={styles.statusIcon} />
            <View style={styles.batteryContainer}>
              <View style={styles.batteryOutline} />
              <View style={styles.batteryFill} />
              <View style={styles.batteryEnd} />
            </View>
          </View>
        </View>

        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.8}>
            <Image source={{ uri: imgArrowBack }} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Channel</Text>
          <View style={styles.headerButtonPlaceholder} />
        </View>

        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: imgAvatar }} style={styles.avatarImage} />
            <TouchableOpacity style={styles.avatarEditButton} activeOpacity={0.85}>
              <Image source={{ uri: imgEditBadge }} style={styles.avatarEditIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Name of the channel</Text>
            <View style={styles.inputShell}>
              <TextInput
                value={channelName}
                onChangeText={setChannelName}
                style={styles.inputText}
                placeholder="Enter your channel name"
                placeholderTextColor="#454950"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Description of the channel</Text>
            <View style={[styles.inputShell, styles.textAreaShell]}>
              <TextInput
                value={channelDescription}
                onChangeText={setChannelDescription}
                style={[styles.inputText, styles.textAreaInput]}
                placeholder="Description of your channel name"
                placeholderTextColor="#454950"
                multiline
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Select Category</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.inputShell, styles.dropdownTrigger]}
              onPress={() => setCategoryMenuOpen(prev => !prev)}
            >
              <Text style={styles.inputText}>{category}</Text>
              <Ionicons name={categoryMenuOpen ? 'chevron-up' : 'chevron-down'} size={18} color="#0a516a" />
            </TouchableOpacity>
            {categoryMenuOpen ? (
              <View style={styles.dropdownMenu}>
                {CATEGORY_OPTIONS.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownOption}
                    activeOpacity={0.85}
                    onPress={() => handleSelectCategory(option)}
                  >
                    <Text
                      style={[
                        styles.dropdownOptionLabel,
                        option === category && styles.dropdownOptionLabelActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Visibility</Text>
            <View style={styles.radioGroup}>
              {(['Public', 'Private'] as const).map(option => (
                <Pressable
                  key={option}
                  style={styles.radioOption}
                  onPress={() => setVisibility(option)}
                  android_ripple={{ color: 'rgba(22,138,173,0.15)', borderless: false }}
                >
                  <View style={[styles.radioOuter, visibility === option && styles.radioOuterActive]}>
                    {visibility === option ? <View style={styles.radioInner} /> : null}
                  </View>
                  <Text style={styles.radioLabel}>{option}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.footerButtons}>
            <TouchableOpacity style={[styles.footerButton, styles.footerButtonSecondary]} activeOpacity={0.85}>
              <Text style={[styles.footerButtonText, styles.footerButtonTextSecondary]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.footerButton, styles.footerButtonPrimary]} activeOpacity={0.9}>
              <Text style={[styles.footerButtonText, styles.footerButtonTextPrimary]}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: APP_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: APP_WIDTH,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  scrollContent: {
    paddingBottom: 72,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusIcon: {
    width: 18,
    height: 12,
    resizeMode: 'contain',
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 27.4,
    height: 13,
    position: 'relative',
  },
  batteryOutline: {
    width: 25,
    height: 13,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  batteryFill: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 19,
    height: 9,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  batteryEnd: {
    position: 'absolute',
    right: 0,
    top: 4,
    width: 1.4,
    height: 4.22,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
    marginTop: 4,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonPlaceholder: {
    width: 40,
    height: 40,
  },
  backIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '600',
    color: '#0a0a0a',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 28,
  },
  avatarWrapper: {
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarEditButton: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#168aad',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#168aad',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  avatarEditIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
  form: {
    gap: 24,
  },
  field: {
    gap: 12,
  },
  fieldLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#0a0a0a',
  },
  inputShell: {
    borderRadius: 18,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 20,
    minHeight: 56,
    justifyContent: 'center',
    backgroundColor: 'rgba(192, 250, 255, 0.18)',
    shadowColor: 'rgba(0, 82, 112, 0.35)',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  inputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#454950',
  },
  textAreaShell: {
    minHeight: 108,
    paddingVertical: 16,
  },
  textAreaInput: {
    textAlignVertical: 'top',
    height: 76,
  },
  dropdownTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownMenu: {
    marginTop: 8,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    overflow: 'hidden',
  },
  dropdownOption: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  dropdownOptionLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: '#0a516a',
  },
  dropdownOptionLabelActive: {
    color: '#168aad',
    fontWeight: '600',
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(192, 250, 255, 0.35)',
  },
  radioOuterActive: {
    borderColor: '#0a516a',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#168aad',
  },
  radioLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 8,
  },
  footerButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonSecondary: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(22, 138, 173, 0.25)',
  },
  footerButtonPrimary: {
    backgroundColor: '#168aad',
    shadowColor: '#168aad',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  footerButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '600',
  },
  footerButtonTextSecondary: {
    color: '#0a516a',
  },
  footerButtonTextPrimary: {
    color: '#FFFFFF',
  },
});

export default CreateChannel;


