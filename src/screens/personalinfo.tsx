// DO NOT MODIFY OTHER FILES — personalinfo SCREEN ONLY
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  FlatList,
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
const imgArrowLeft = 'https://www.figma.com/api/mcp/asset/ed06d357-8351-420d-88a1-5fb5ae10696c';
const imgIndianFlag = 'https://flagcdn.com/w40/in.png';

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
    <View style={styles.piBatteryContainer}>
      <View style={styles.piBatteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.piBatteryOutlineImage} />
      </View>
      <View style={styles.piBatteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.piBatteryEndImage} />
      </View>
      <View style={styles.piBatteryFill}>
        <Image source={{ uri: imgFill }} style={styles.piBatteryFillImage} />
      </View>
    </View>
  );
};

type PersonalinfoProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const Personalinfo = ({ onBack, onSave }: PersonalinfoProps = {}) => {
  const [languages, setLanguages] = useState(['English', 'Tamil', 'Hindi']);
  const [languageInput, setLanguageInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const languageInputRef = useRef<TextInput>(null);

  const languageSuggestions = [
    'English', 'Tamil', 'Hindi', 'Spanish', 'French', 'German', 'Italian',
    'Portuguese', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Russian',
    'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish',
    'Turkish', 'Greek', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian',
    'Malay', 'Bengali', 'Urdu', 'Punjabi', 'Gujarati', 'Marathi',
    'Telugu', 'Kannada', 'Malayalam', 'Odia', 'Assamese'
  ];

  const filteredSuggestions = languageSuggestions.filter(lang =>
    lang.toLowerCase().includes(languageInput.toLowerCase()) &&
    !languages.includes(lang)
  );

  const handleRemoveLanguage = (lang: string) => {
    setLanguages(languages.filter(l => l !== lang));
  };

  const handleSelectLanguage = (lang: string) => {
    if (!languages.includes(lang)) {
      setLanguages([...languages, lang]);
    }
    setLanguageInput('');
    setShowSuggestions(false);
  };

  const handleLanguageInputChange = (text: string) => {
    setLanguageInput(text);
    setShowSuggestions(text.length > 0);
  };

  const handleLanguageInputFocus = () => {
    if (languageInput.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleLanguageInputBlur = () => {
    // Delay to allow selection to register
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <View style={styles.piContainer}>
      {/* Status Bar */}
      <View style={styles.piStatusBar}>
        <View style={styles.piStatusBarLeft}>
          <View style={styles.piStatusBarTimeContainer}>
            <Text style={styles.piStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.piStatusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.piStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.piStatusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.piHeader}>
        <TouchableOpacity style={styles.piBackButton} onPress={onBack} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowLeft }} style={styles.piBackButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.piHeaderTitle}>Personal Info</Text>
        <TouchableOpacity onPress={onSave} activeOpacity={0.7}>
          <Text style={styles.piHeaderSave}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Form Container */}
      <ScrollView
        style={styles.piFormContainer}
        contentContainerStyle={styles.piFormContainerContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Full Name */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>Full Name</Text>
          <TextInput
            style={styles.piInputField}
            defaultValue="Karpaganathan"
          />
        </View>

        {/* Call Sign */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>Call Sign</Text>
          <TextInput
            style={styles.piInputField}
            defaultValue="CheetaRoger"
          />
        </View>

        {/* Phone Number */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>Phone Number</Text>
          <View style={styles.piPhoneContainer}>
            <View style={styles.piPhoneCountry}>
              <Image source={{ uri: imgIndianFlag }} style={styles.piPhoneFlag} />
              <Image source={{ uri: imgArrowLeft }} style={[styles.piPhoneChevron, { transform: [{ rotate: '90deg' }] }]} />
            </View>
            <TextInput
              style={styles.piPhoneInput}
              defaultValue="8668256407"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* City */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>City</Text>
          <TextInput
            style={styles.piInputField}
            defaultValue="Chennai"
          />
        </View>

        {/* Date of Birth */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>Date of Birth</Text>
          <TextInput
            style={styles.piInputField}
            defaultValue="18/11/2004"
          />
        </View>

        {/* Language */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>Language</Text>
          <View style={styles.piLanguageInputContainer}>
            <View style={styles.piLanguageTagsWrapper}>
              {languages.map((lang) => (
                <View key={lang} style={styles.piLanguageTag}>
                  <Text style={styles.piLanguageTagText}>{lang}</Text>
                  <TouchableOpacity
                    style={styles.piLanguageTagClose}
                    onPress={() => handleRemoveLanguage(lang)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.piLanguageTagCloseText}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <TextInput
                ref={languageInputRef}
                style={styles.piLanguageInput}
                value={languageInput}
                onChangeText={handleLanguageInputChange}
                onFocus={handleLanguageInputFocus}
                onBlur={handleLanguageInputBlur}
                placeholder="Type a language..."
                placeholderTextColor="#999999"
              />
            </View>
            {showSuggestions && filteredSuggestions.length > 0 && (
              <View style={styles.piLanguageSuggestionsContainer}>
                <View style={styles.piLanguageSuggestionsHeader}>
                  <Text style={styles.piLanguageSuggestionsHeaderText}>Relevant languages</Text>
                </View>
                <ScrollView
                  style={styles.piLanguageSuggestionsList}
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator={true}
                >
                  <View style={styles.piLanguageSuggestionsChips}>
                    {filteredSuggestions.map((lang) => (
                      <TouchableOpacity
                        key={lang}
                        style={styles.piLanguageSuggestionChip}
                        onPress={() => handleSelectLanguage(lang)}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.piLanguageSuggestionChipText}>{lang}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        </View>

        {/* Bio */}
        <View style={styles.piFormField}>
          <Text style={styles.piFormLabel}>Bio</Text>
          <TextInput
            style={styles.piTextareaField}
            defaultValue="Aviation is not my job. Its my life"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  piContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  piStatusBar: {
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
  piStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  piStatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  piStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
  },
  piStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  piStatusBarIcon: {
    width: 18,
    height: 12,
  },
  piBatteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  piBatteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
    height: 13,
  },
  piBatteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  piBatteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
    height: 4.22,
  },
  piBatteryEndImage: {
    width: '100%',
    height: '100%',
  },
  piBatteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
    height: 9,
  },
  piBatteryFillImage: {
    width: '100%',
    height: '100%',
  },
  piHeader: {
    position: 'absolute',
    top: 47,
    left: 0,
    width: 430,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  piBackButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  piBackButtonIcon: {
    width: 24,
    height: 24,
  },
  piHeaderTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 22,
    textAlign: 'center',
    flex: 1,
  },
  piHeaderSave: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#007AFF',
    lineHeight: 20,
    textAlign: 'right',
  },
  piFormContainer: {
    position: 'absolute',
    top: 103,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  piFormContainerContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  piFormField: {
    marginBottom: 24,
  },
  piFormLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
    marginBottom: 8,
  },
  piInputField: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
  },
  piPhoneContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  piPhoneCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 4,
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  piPhoneFlag: {
    width: 20,
    height: 15,
  },
  piPhoneChevron: {
    width: 12,
    height: 12,
  },
  piPhoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
  },
  piLanguageInputContainer: {
    position: 'relative',
    width: '100%',
  },
  piLanguageTagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    minHeight: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  piLanguageTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#E8F4FD',
  },
  piLanguageTagDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
  },
  piLanguageTagText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
  },
  piLanguageTagClose: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  piLanguageTagCloseText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 16,
  },
  piLanguageInput: {
    flex: 1,
    minWidth: 120,
    height: 32,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
    padding: 0,
  },
  piLanguageSuggestionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    maxHeight: 200,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  piLanguageSuggestionsHeader: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  piLanguageSuggestionsHeaderText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    lineHeight: 17,
  },
  piLanguageSuggestionsList: {
    maxHeight: 150,
  },
  piLanguageSuggestionsChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 8,
  },
  piLanguageSuggestionChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  piLanguageSuggestionChipText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 17,
  },
  piTextareaField: {
    width: '100%',
    minHeight: 96,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
    textAlignVertical: 'top',
  },
});

export default Personalinfo;
