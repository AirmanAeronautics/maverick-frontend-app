// DO NOT MODIFY OTHER FILES — adddocuments SCREEN ONLY
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';
// Upload icon as data URI (white arrow pointing up with line)
const imgUploadIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M 10 3 L 10 13 M 3 10 L 10 3 L 17 10' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 3 17 L 17 17' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E";
// Retry icon as data URI (circular arrows)
const imgRetryIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='8' stroke='%23000' stroke-width='2' fill='none'/%3E%3Cpath d='M 6 6 L 10 2 L 14 6' stroke='%23000' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M 10 2 L 10 14' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M 14 14 L 10 18 L 6 14' stroke='%23000' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E";
// Bottom nav icons - using Figma assets (these would need to be replaced with actual asset URLs from Figma)
const imgHomeIcon = 'https://www.figma.com/api/mcp/asset/home-icon';
const imgPlanIcon = 'https://www.figma.com/api/mcp/asset/plan-icon';
const imgLearnIcon = 'https://www.figma.com/api/mcp/asset/learn-icon';
const imgLogsIcon = 'https://www.figma.com/api/mcp/asset/logs-icon';
const imgCommunityIcon = 'https://www.figma.com/api/mcp/asset/community-icon';
const imgAIIcon = 'https://www.figma.com/api/mcp/asset/ai-icon';
const imgSettingsIcon = 'https://www.figma.com/api/mcp/asset/settings-icon';

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

type AddDocumentsProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const AddDocuments = ({ onBack, onSave }: AddDocumentsProps) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [notes, setNotes] = useState('');
  const [showTitleDropdown, setShowTitleDropdown] = useState(false);
  const fileInputRef = useRef<any>(null);

  const titleOptions = ['License', 'Certificate', 'Rating', 'Endorsement'];

  const handleFileSelect = () => {
    // File selection would be handled here
    setFileName('Document.pdf');
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <Text style={styles.statusBarTime}>9:41</Text>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upload Documents</Text>
        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Form Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Title Field */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Title</Text>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => setShowTitleDropdown(!showTitleDropdown)}
          >
            <TextInput
              style={styles.input}
              placeholder="License"
              placeholderTextColor="#A0A0A0"
              value={title}
              editable={false}
            />
            <Image
              source={{ uri: 'https://www.figma.com/api/mcp/asset/chevron-down' }}
              style={styles.chevronIcon}
            />
          </TouchableOpacity>
          {showTitleDropdown && (
            <View style={styles.dropdown}>
              {titleOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setTitle(option);
                    setShowTitleDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Type Field */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Type</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="e.g Class 1 Medical"
              placeholderTextColor="#A0A0A0"
              value={type}
              onChangeText={setType}
            />
          </View>
        </View>

        {/* Upload Document Field */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Upload Document</Text>
          <View style={styles.uploadContainer}>
            <View style={styles.fileInputContainer}>
              <Text style={styles.fileInputText}>{fileName}</Text>
            </View>
            <TouchableOpacity style={styles.uploadButton} onPress={handleFileSelect}>
              <Image source={{ uri: imgUploadIcon }} style={styles.uploadIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Notes Field */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Notes</Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              placeholder="Additional notes or remark"
              placeholderTextColor="#A0A0A0"
              value={notes}
              onChangeText={setNotes}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

        {/* Retry Offline Documents Button */}
        <TouchableOpacity style={styles.retryButton}>
          <Image source={{ uri: imgRetryIcon }} style={styles.retryIcon} />
          <Text style={styles.retryText}>Retry Offline Documents</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Image source={{ uri: imgHomeIcon }} style={styles.navIcon} />
          <Text style={styles.navLabel}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: imgPlanIcon }} style={styles.navIcon} />
          <Text style={styles.navLabel}>Plan</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: imgLearnIcon }} style={styles.navIcon} />
          <Text style={styles.navLabel}>Learn</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: imgLogsIcon }} style={styles.navIcon} />
          <Text style={styles.navLabel}>Logs</Text>
        </View>
        <View style={[styles.navItem, styles.navItemActive]}>
          <Image source={{ uri: imgCommunityIcon }} style={styles.navIcon} />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Community</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: imgAIIcon }} style={styles.navIcon} />
          <Text style={styles.navLabel}>AI</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: imgSettingsIcon }} style={styles.navIcon} />
          <Text style={styles.navLabel}>Settings</Text>
        </View>
      </View>
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
  statusBar: {
    height: 47,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: 'transparent',
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    width: APP_WIDTH,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.18,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  saveText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#168aad',
    letterSpacing: -0.16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  formField: {
    marginBottom: 24,
  },
  formLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
    letterSpacing: -0.14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#000000',
    padding: 0,
  },
  chevronIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  dropdown: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginTop: 4,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dropdownText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#000000',
  },
  uploadContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  fileInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  fileInputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#A0A0A0',
  },
  uploadButton: {
    width: 48,
    height: 48,
    backgroundColor: '#168aad',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 100,
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#000000',
    textAlignVertical: 'top',
    minHeight: 76,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    gap: 8,
  },
  retryIcon: {
    width: 20,
    height: 20,
  },
  retryText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: APP_WIDTH,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  navItemActive: {
    // Active state styling
  },
  navIcon: {
    width: 24,
    height: 24,
    opacity: 0.6,
  },
  navLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 11,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 13,
  },
  navLabelActive: {
    color: '#168aad',
    fontWeight: '500',
  },
});

export default AddDocuments;





