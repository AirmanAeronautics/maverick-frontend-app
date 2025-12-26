// DO NOT MODIFY OTHER FILES — export SCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

const EXPORT_TYPE_OPTIONS = ['PDF', 'Excel sheet', 'CSV'];

const Export = () => {
  const [exportType, setExportType] = useState('PDF');
  const [isExportTypeOpen, setIsExportTypeOpen] = useState(false);
  const [preferredFormat, setPreferredFormat] = useState('DGCA Pdf');
  const [notificationEmail, setNotificationEmail] = useState('ops@example.com');

  return (
    <View style={[styles.exportScreenContainer, { width: APP_WIDTH }]}>
      {/* Status Bar */}
      <View style={styles.exportScreenStatusBar}>
        <View style={styles.exportScreenStatusBarLeft}>
          <Text style={styles.exportScreenStatusBarTime}>9:41</Text>
        </View>
        <View style={styles.exportScreenStatusBarRight}>
          <View style={styles.exportScreenStatusBarIcon} />
          <View style={styles.exportScreenStatusBarIcon} />
          <View style={styles.exportScreenStatusBarBattery} />
        </View>
      </View>

      {/* Navigation Header */}
      <View style={styles.exportScreenHeader}>
        <TouchableOpacity style={styles.exportScreenBackButton}>
          <View style={styles.exportScreenBackArrow} />
        </TouchableOpacity>
        <Text style={styles.exportScreenHeaderTitle}>Export</Text>
        <View style={styles.exportScreenHeaderSpacer} />
      </View>

      <ScrollView 
        style={styles.exportScreenScrollView}
        contentContainerStyle={styles.exportScreenScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Information Box */}
        <View style={styles.exportScreenInfoBox}>
          <Text style={styles.exportScreenInfoBoxBold}>
            Exports will include all of your logged flights.
          </Text>
          <Text style={styles.exportScreenInfoBoxText}>
            DGCA Csv/XLSX: Column order mirrors the DGCA paper logbook layout.
          </Text>
          <Text style={styles.exportScreenInfoBoxText}>
            Standard CSV/PDF: Quick snapshots for personal analysis of logbook layout.
          </Text>
        </View>

        {/* DGCA / eGCA Exports Section */}
        <View style={styles.exportScreenSection}>
          <View style={styles.exportScreenTitleDescriptionFrame}>
            <Text style={styles.exportScreenSectionTitle}>DGCA / eGCA Exports</Text>
            <Text style={styles.exportScreenSectionDescription}>
              Generate DGCA-ready logbook files with official column ordering. Use them for manual eGCA uploads, printing, or sharing with operators.
            </Text>
          </View>

          {/* Export Type Field and Download Button */}
          <View style={styles.exportScreenExportTypeFrame}>
            <Text style={styles.exportScreenFieldLabel}>Export type</Text>
            <View style={styles.exportScreenDropdownWrapper}>
              <TouchableOpacity 
                style={styles.exportScreenDropdown}
                onPress={() => setIsExportTypeOpen(true)}
              >
                <Text style={styles.exportScreenDropdownText}>{exportType}</Text>
                <View style={styles.exportScreenDropdownChevron} />
              </TouchableOpacity>
              <Modal
                visible={isExportTypeOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsExportTypeOpen(false)}
              >
                <TouchableWithoutFeedback onPress={() => setIsExportTypeOpen(false)}>
                  <View style={styles.exportScreenModalOverlay}>
                    <TouchableWithoutFeedback>
                      <View style={styles.exportScreenDropdownMenu}>
                        {EXPORT_TYPE_OPTIONS.map((option) => (
                          <TouchableOpacity
                            key={option}
                            style={[
                              styles.exportScreenDropdownOption,
                              exportType === option && styles.exportScreenDropdownOptionActive
                            ]}
                            onPress={() => {
                              setExportType(option);
                              setIsExportTypeOpen(false);
                            }}
                          >
                            <Text style={[
                              styles.exportScreenDropdownOptionText,
                              exportType === option && styles.exportScreenDropdownOptionTextActive
                            ]}>
                              {option}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
            <TouchableOpacity style={styles.exportScreenButtonPrimary}>
              <View style={styles.exportScreenButtonIcon} />
              <Text style={styles.exportScreenButtonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Send to eGCA Section */}
        <View style={styles.exportScreenSection}>
          <View style={styles.exportScreenTitleDescriptionFrame}>
            <Text style={styles.exportScreenSectionTitle}>
              Send to eGCA <Text style={styles.exportScreenBetaText}>(beta)</Text>
            </Text>
            <Text style={styles.exportScreenSectionDescription}>
              Queue a DGCA export for direct eGCA upload. We'll email you a confirmation as soon as the file is processed.
            </Text>
          </View>

          {/* Preferred Format, Notification Email, and Send to eGCA Button */}
          <View style={styles.exportScreenEgcaFrame}>
            {/* Preferred Format Field */}
            <View style={styles.exportScreenFieldContainer}>
              <Text style={styles.exportScreenFieldLabel}>Preferred format</Text>
              <TouchableOpacity style={styles.exportScreenDropdown}>
                <Text style={styles.exportScreenDropdownText}>{preferredFormat}</Text>
                <View style={styles.exportScreenDropdownChevron} />
              </TouchableOpacity>
            </View>

            {/* Notification Email Field */}
            <View style={styles.exportScreenFieldContainer}>
              <Text style={styles.exportScreenFieldLabel}>Notification email</Text>
              <TextInput
                style={styles.exportScreenInput}
                value={notificationEmail}
                onChangeText={setNotificationEmail}
                placeholder="ops@example.com"
                placeholderTextColor="#6a6a6a"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Send to eGCA Button */}
            <TouchableOpacity style={styles.exportScreenButtonPrimary}>
              <Text style={styles.exportScreenButtonText}>Send to eGCA</Text>
              <View style={styles.exportScreenButtonArrow} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  exportScreenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  exportScreenStatusBar: {
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: 'transparent',
  },
  exportScreenStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exportScreenStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
  },
  exportScreenStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  exportScreenStatusBarIcon: {
    width: 18,
    height: 12,
    backgroundColor: '#000000',
  },
  exportScreenStatusBarBattery: {
    width: 27.401,
    height: 13,
    backgroundColor: '#000000',
  },
  exportScreenHeader: {
    height: 66.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  exportScreenBackButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportScreenBackArrow: {
    width: 24,
    height: 24,
    backgroundColor: '#000000',
  },
  exportScreenHeaderTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    flex: 1,
  },
  exportScreenHeaderSpacer: {
    width: 40,
  },
  exportScreenScrollView: {
    flex: 1,
  },
  exportScreenScrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  exportScreenInfoBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
    gap: 8,
  },
  exportScreenInfoBoxBold: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 20,
  },
  exportScreenInfoBoxText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
  },
  exportScreenSection: {
    marginBottom: 32,
    gap: 16,
  },
  exportScreenTitleDescriptionFrame: {
    gap: 8,
  },
  exportScreenSectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 25,
    marginBottom: 0,
  },
  exportScreenBetaText: {
    fontWeight: '400',
  },
  exportScreenSectionDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(78, 78, 78, 1)',
    lineHeight: 20,
    marginBottom: 0,
  },
  exportScreenExportTypeFrame: {
    gap: 8,
  },
  exportScreenEgcaFrame: {
    gap: 8,
  },
  exportScreenFieldContainer: {
    gap: 8,
    marginBottom: 0,
  },
  exportScreenFieldLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
  },
  exportScreenDropdownWrapper: {
    position: 'relative',
  },
  exportScreenDropdown: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exportScreenDropdownText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    flex: 1,
    textAlign: 'left',
  },
  exportScreenDropdownChevron: {
    width: 8,
    height: 8,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#000000',
    transform: [{ rotate: '45deg' }],
  },
  exportScreenModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportScreenDropdownMenu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minWidth: 200,
    maxWidth: 366,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    overflow: 'hidden',
  },
  exportScreenDropdownOption: {
    height: 44,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  exportScreenDropdownOptionActive: {
    backgroundColor: '#F5F5F5',
  },
  exportScreenDropdownOptionText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
  exportScreenDropdownOptionTextActive: {
    fontWeight: '500',
  },
  exportScreenInput: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
  exportScreenButtonPrimary: {
    height: 56,
    backgroundColor: 'rgba(22, 138, 173, 1)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  exportScreenButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  exportScreenButtonIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  exportScreenButtonArrow: {
    width: 20,
    height: 20,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
  },
});

export default Export;









