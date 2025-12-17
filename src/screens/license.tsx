// DO NOT MODIFY OTHER FILES — license SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { width: licenseScreenWidth } = Dimensions.get('window');
const licenseDESIGN_WIDTH = 430;
const licenseAPP_WIDTH = Math.min(licenseScreenWidth, licenseDESIGN_WIDTH);

// Image assets from Figma MCP
const licenseImgMobileSignal = 'https://www.figma.com/api/mcp/asset/1651ae52-0077-4ef6-9cd6-9d6890396c9a';
const licenseImgWifi = 'https://www.figma.com/api/mcp/asset/f8a0ee2e-0ff2-4918-a2a1-769a3c57c7ad';
const licenseImgBattery = 'https://www.figma.com/api/mcp/asset/1bfca9be-42ad-4adb-b5ba-94228bb72f6a';
const licenseImgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/e518b10a-4f88-4657-90dc-6ca2030cb0df';
const licenseImgAdd = 'https://www.figma.com/api/mcp/asset/7a66548f-9537-4f30-b835-e195d306df29';

type License = {
  id: string;
  title: string;
  licenseNumber: string;
  issuingAuthority: string;
  flagEmoji: string;
  validityStart: string;
  validityEnd: string;
};

const LICENSES: License[] = [
  {
    id: '1',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '2',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '3',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '4',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '5',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '6',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
  {
    id: '7',
    title: 'Commercial Pilot License',
    licenseNumber: '24072',
    issuingAuthority: 'DGCA',
    flagEmoji: '🇮🇳',
    validityStart: '10-12-2025',
    validityEnd: '10-12-2025',
  },
];

type LicenseProps = {
  onBack?: () => void;
  onAddLicense?: () => void;
};

const License = ({ onBack, onAddLicense }: LicenseProps) => {
  return (
    <View style={licenseStyles.licenseContainer}>
      {/* Status Bar */}
      <View style={licenseStyles.licenseStatusBar}>
        <View style={licenseStyles.licenseStatusBarLeft}>
          <Text style={licenseStyles.licenseStatusBarTime}>9:41</Text>
        </View>
        <View style={licenseStyles.licenseStatusBarRight}>
          <Image source={{ uri: licenseImgMobileSignal }} style={licenseStyles.licenseStatusBarIcon} />
          <Image source={{ uri: licenseImgWifi }} style={licenseStyles.licenseStatusBarIcon} />
          <View style={licenseStyles.licenseBatteryContainer}>
            <Image source={{ uri: licenseImgBattery }} style={licenseStyles.licenseBatteryImage} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={licenseStyles.licenseHeader}>
        <TouchableOpacity style={licenseStyles.licenseBackButton} onPress={onBack}>
          <Image source={{ uri: licenseImgArrowArrowLeftMd }} style={licenseStyles.licenseBackIcon} />
        </TouchableOpacity>
        <Text style={licenseStyles.licenseHeaderTitle}>Certificates</Text>
      </View>

      {/* Page Title */}
      <View style={licenseStyles.licensePageTitleContainer}>
        <Text style={licenseStyles.licensePageTitle}>Certificates</Text>
      </View>

      {/* License List */}
      <ScrollView 
        style={licenseStyles.licenseList}
        contentContainerStyle={licenseStyles.licenseListContent}
        showsVerticalScrollIndicator={false}
      >
        {LICENSES.map((license) => (
          <View key={license.id} style={licenseStyles.licenseCard}>
            <View style={licenseStyles.licenseCardContent}>
              <View style={licenseStyles.licenseCardTopRow}>
                <Text style={licenseStyles.licenseCardTitle}>{license.title}</Text>
                <Text style={licenseStyles.licenseCardLicenseNumber}>LN: {license.licenseNumber}</Text>
              </View>
              <View style={licenseStyles.licenseCardBottomRow}>
                <View style={licenseStyles.licenseCardAuthority}>
                  <Text style={licenseStyles.licenseCardAuthorityText}>{license.issuingAuthority}</Text>
                </View>
                <Text style={licenseStyles.licenseCardValidity}>
                  {license.validityStart} to {license.validityEnd}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={licenseStyles.licenseFab} onPress={onAddLicense}>
        <View style={licenseStyles.licenseFabPlus}>
          <View style={licenseStyles.licenseFabPlusHorizontal} />
          <View style={licenseStyles.licenseFabPlusVertical} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const licenseStyles = StyleSheet.create({
  licenseContainer: {
    width: licenseAPP_WIDTH,
    height: '100%',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    alignSelf: 'center',
  },
  licenseStatusBar: {
    height: 50.502,
    width: licenseAPP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  licenseStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  licenseStatusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18.365,
  },
  licenseStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    paddingVertical: 1.148,
  },
  licenseStatusBarIcon: {
    width: 20.66,
    height: 11.479,
  },
  licenseBatteryContainer: {
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  licenseBatteryImage: {
    width: 30.965,
    height: 14.921,
  },
  licenseHeader: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    height: 66.507,
    width: 430,
    top: 47,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    zIndex: 10,
  },
  licenseBackButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  licenseBackIcon: {
    width: 27.52,
    height: 27.52,
  },
  licenseHeaderTitle: {
    position: 'absolute',
    left: 215,
    width: 100,
    marginLeft: -50,
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  licensePageTitleContainer: {
    position: 'absolute',
    top: 130,
    left: 24,
    right: 24,
    zIndex: 5,
  },
  licensePageTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 22,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 28,
  },
  licenseList: {
    position: 'absolute',
    top: 165,
    left: 0,
    right: 0,
    bottom: 0,
  },
  licenseListContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  licenseCard: {
    width: '100%',
    maxWidth: 382,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  licenseCardContent: {
    padding: 16,
  },
  licenseCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  licenseCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22,
    flex: 1,
  },
  licenseCardLicenseNumber: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
    marginLeft: 8,
  },
  licenseCardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  licenseCardAuthority: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  licenseCardFlag: {
    fontSize: 20,
    lineHeight: 20,
  },
  licenseCardAuthorityText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
  },
  licenseCardValidity: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
    textAlign: 'right',
  },
  licenseFab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  licenseFabPlus: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  licenseFabPlusHorizontal: {
    position: 'absolute',
    width: 20,
    height: 3,
    backgroundColor: '#FFFFFF',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -10 }, { translateY: -1.5 }],
  },
  licenseFabPlusVertical: {
    position: 'absolute',
    width: 3,
    height: 20,
    backgroundColor: '#FFFFFF',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -1.5 }, { translateY: -10 }],
  },
  licenseFabIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
});

export default License;
