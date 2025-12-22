// DO NOT MODIFY OTHER FILES — addlicense SCREEN ONLY
import React, { useState } from 'react';
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
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Status bar icons
const imgMobileSignal = require('../../Mobile Signal.svg');
const imgWifi = require('../../Wifi.svg');
const imgBattery = require('../../_StatusBar-battery.svg');
const imgArrowLeft = require('../../Arrow_Left_MD.svg');
const imgCalendar = Image.resolveAssetSource(require('../assets/calendar-icon.svg')).uri;
const imgChevronDown = Image.resolveAssetSource(require('../assets/chevron-down.svg')).uri;

type AddLicenseProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const AddLicense = ({ onBack, onSave }: AddLicenseProps) => {
  const [type, setType] = useState('License');
  const [name, setName] = useState('');
  const [issuingAuthority, setIssuingAuthority] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const typeOptions = ['License', 'Certificate', 'Rating', 'Endorsement'];

  return (
    <View style={styles.addlicenseContainer}>
      {/* Status Bar */}
      <View style={styles.addlicenseStatusBar}>
        <View style={styles.addlicenseStatusBarLeft}>
          <Text style={styles.addlicenseStatusBarTime}>9:41</Text>
        </View>
        <View style={styles.addlicenseStatusBarRight}>
          <Image source={imgMobileSignal} style={styles.addlicenseStatusBarIcon} />
          <Image source={imgWifi} style={styles.addlicenseStatusBarIcon} />
          <Image source={imgBattery} style={styles.addlicenseStatusBarBattery} />
        </View>
      </View>

      {/* Header */}
      <View style={styles.addlicenseHeader}>
        <TouchableOpacity style={styles.addlicenseBackButton} onPress={onBack}>
          <Image source={imgArrowLeft} style={styles.addlicenseBackIcon} />
        </TouchableOpacity>
        <Text style={styles.addlicenseHeaderTitle}>Add Certificate</Text>
        <TouchableOpacity style={styles.addlicenseSaveButton} onPress={onSave}>
          <Text style={styles.addlicenseSaveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Form Content */}
      <ScrollView
        style={styles.addlicenseScrollView}
        contentContainerStyle={styles.addlicenseScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Type Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Type</Text>
          <TouchableOpacity
            style={styles.addlicenseInputContainer}
            onPress={() => setShowTypeDropdown(!showTypeDropdown)}
          >
            <Text style={[styles.addlicenseInputText, type ? styles.addlicenseInputTextFilled : styles.addlicenseInputTextPlaceholder]}>
              {type || 'Select type'}
            </Text>
            <Image source={{ uri: imgChevronDown }} style={styles.addlicenseChevronIcon} />
          </TouchableOpacity>
          <Modal
            visible={showTypeDropdown}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowTypeDropdown(false)}
          >
            <TouchableOpacity
              style={styles.addlicenseModalOverlay}
              activeOpacity={1}
              onPress={() => setShowTypeDropdown(false)}
            >
              <View style={styles.addlicenseDropdownMenu}>
                {typeOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.addlicenseDropdownOption}
                    onPress={() => {
                      setType(option);
                      setShowTypeDropdown(false);
                    }}
                  >
                    <Text style={[styles.addlicenseDropdownOptionText, type === option && styles.addlicenseDropdownOptionTextActive]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableOpacity>
          </Modal>
        </View>

        {/* Name Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Name</Text>
          <View style={styles.addlicenseInputContainer}>
            <TextInput
              style={styles.addlicenseInput}
              value={name}
              onChangeText={setName}
              placeholder="e.g Private Pilot License"
              placeholderTextColor="#999999"
            />
          </View>
        </View>

        {/* Issuing Authority Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Issuing Authority</Text>
          <View style={styles.addlicenseInputContainer}>
            <TextInput
              style={styles.addlicenseInput}
              value={issuingAuthority}
              onChangeText={setIssuingAuthority}
              placeholder="e.g FAA, DGCA"
              placeholderTextColor="#999999"
            />
          </View>
        </View>

        {/* Issue Date Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Issue Date</Text>
          <View style={styles.addlicenseInputContainer}>
            <Image source={{ uri: imgCalendar }} style={styles.addlicenseCalendarIcon} />
            <TextInput
              style={[styles.addlicenseInput, styles.addlicenseInputWithIcon]}
              value={issueDate}
              onChangeText={setIssueDate}
              placeholder="Mention the Issue Date"
              placeholderTextColor="#999999"
            />
          </View>
        </View>

        {/* Expiry Date Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Expiry Date</Text>
          <View style={styles.addlicenseInputContainer}>
            <Image source={{ uri: imgCalendar }} style={styles.addlicenseCalendarIcon} />
            <TextInput
              style={[styles.addlicenseInput, styles.addlicenseInputWithIcon]}
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholder="Mention the Expiry Date"
              placeholderTextColor="#999999"
            />
          </View>
        </View>

        {/* Certificate Number Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Certificate Number</Text>
          <View style={styles.addlicenseInputContainer}>
            <TextInput
              style={styles.addlicenseInput}
              value={certificateNumber}
              onChangeText={setCertificateNumber}
              placeholder="Optional"
              placeholderTextColor="#999999"
            />
          </View>
        </View>

        {/* Notes Field */}
        <View style={styles.addlicenseFormField}>
          <Text style={styles.addlicenseFormLabel}>Notes</Text>
          <View style={[styles.addlicenseInputContainer, styles.addlicenseTextAreaContainer]}>
            <TextInput
              style={[styles.addlicenseInput, styles.addlicenseTextArea]}
              value={notes}
              onChangeText={setNotes}
              placeholder="Additional notes or remark"
              placeholderTextColor="#999999"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  addlicenseContainer: {
    width: APP_WIDTH,
    height: '100%',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  addlicenseStatusBar: {
    height: 47,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  addlicenseStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addlicenseStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
  },
  addlicenseStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addlicenseStatusBarIcon: {
    width: 18,
    height: 12,
  },
  addlicenseStatusBarBattery: {
    width: 27.401,
    height: 13,
  },
  addlicenseHeader: {
    height: 66.507,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 19.93,
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  addlicenseBackButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addlicenseBackIcon: {
    width: 27.52,
    height: 27.52,
  },
  addlicenseHeaderTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    width: 463,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -231.5 }],
  },
  addlicenseSaveButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addlicenseSaveText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(22, 138, 173, 1)',
  },
  addlicenseScrollView: {
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
  },
  addlicenseScrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  addlicenseFormField: {
    marginBottom: 20,
  },
  addlicenseFormLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 12,
    lineHeight: 20,
  },
  addlicenseInputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 48,
    marginTop: 2,
    marginBottom: 2,
  },
  addlicenseInput: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    padding: 0,
  },
  addlicenseInputText: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
  },
  addlicenseInputTextFilled: {
    color: '#000000',
  },
  addlicenseInputTextPlaceholder: {
    color: '#999999',
  },
  addlicenseInputWithIcon: {
    marginLeft: 12,
  },
  addlicenseCalendarIcon: {
    width: 20,
    height: 20,
  },
  addlicenseChevronIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  addlicenseTextAreaContainer: {
    minHeight: 100,
    alignItems: 'flex-start',
    paddingVertical: 14,
  },
  addlicenseTextArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  addlicenseModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addlicenseDropdownMenu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  addlicenseDropdownOption: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  addlicenseDropdownOptionText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  addlicenseDropdownOptionTextActive: {
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default AddLicense;





