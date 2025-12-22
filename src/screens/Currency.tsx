// DO NOT MODIFY OTHER FILES — Currency SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/e0681899-0c1e-4e63-8e30-66fe95574bdd';
const imgWifi = 'https://www.figma.com/api/mcp/asset/772d34d4-9b2c-400b-ab37-ca570f59f0e4';
const imgOutline = 'https://www.figma.com/api/mcp/asset/f97911df-0450-47c9-9c82-c45beb4e0482';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/940aa4a9-2c56-4287-94d3-2076992c7254';
const imgFill = 'https://www.figma.com/api/mcp/asset/9c312083-ae1d-4792-872c-df2d36baf343';
const imgArrowLeft = 'https://www.figma.com/api/mcp/asset/ed06d357-8351-420d-88a1-5fb5ae10696c';

// Local assets
const imgArrowLeftMd = Image.resolveAssetSource(require('../../Arrow_Left_MD.svg')).uri;

// Refresh icon as data URI (URL encoded)
const imgRefreshIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M13.5 8A5.5 5.5 0 0 0 2.5 8M2.5 8L5 5.5M2.5 8L5 10.5M2.5 8A5.5 5.5 0 0 1 13.5 8M13.5 8L11 5.5M13.5 8L11 10.5'/%3E%3C/svg%3E";

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
    <View style={styles.CurrencyBatteryContainer}>
      <View style={styles.CurrencyBatteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.CurrencyBatteryOutlineImage} />
      </View>
      <View style={styles.CurrencyBatteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.CurrencyBatteryEndImage} />
      </View>
      <View style={styles.CurrencyBatteryFill}>
        <Image source={{ uri: imgFill }} style={styles.CurrencyBatteryFillImage} />
      </View>
    </View>
  );
};

type CurrencyProps = {
  onBack?: () => void;
};

const Currency = ({ onBack }: CurrencyProps = {}) => {
  const currencyItems = [
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
    { number: '29', category: 'Takeoff & Landing', details: '3 in 90 days to carry Passengers', cutoff: 'Sep 13' },
  ];

  return (
    <View style={styles.CurrencyContainer}>
      {/* Status Bar */}
      <View style={styles.CurrencyStatusBar}>
        <View style={styles.CurrencyStatusBarLeft}>
          <View style={styles.CurrencyStatusBarTimeContainer}>
            <Text style={styles.CurrencyStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.CurrencyStatusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.CurrencyStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.CurrencyStatusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Navigation Bar */}
      <View style={styles.CurrencyNavBar}>
        <TouchableOpacity style={styles.CurrencyBackButton} onPress={onBack} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowLeftMd }} style={styles.CurrencyBackIcon} />
        </TouchableOpacity>
        <Text style={styles.CurrencyNavTitle}>Currency</Text>
        <View style={styles.CurrencyNavRight} />
      </View>

      {/* Content */}
      <ScrollView
        style={styles.CurrencyScrollView}
        contentContainerStyle={styles.CurrencyScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Current Currency Section */}
        <View style={styles.CurrencyCurrentSection}>
          <Text style={styles.CurrencyCurrentTitle}>Current Currency</Text>
          <View style={styles.CurrencyCurrentHeader}>
            <Text style={styles.CurrencyCurrentDescription}>
              Enter your details manually and get submitted to your log or
            </Text>
            <TouchableOpacity style={styles.CurrencyRefreshButton} activeOpacity={0.7}>
              <Image source={{ uri: imgRefreshIcon }} style={styles.CurrencyRefreshIcon} />
              <Text style={styles.CurrencyRefreshText}>Refresh Currency</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Currency Item Cards */}
        {currencyItems.map((item, index) => (
          <View key={index} style={styles.CurrencyItemCard}>
            <View style={styles.CurrencyItemLeft}>
              <Text style={styles.CurrencyItemNumber}>{item.number}</Text>
              <Text style={styles.CurrencyItemCategory}>{item.category}</Text>
              <Text style={styles.CurrencyItemDetails}>{item.details}</Text>
            </View>
            <View style={styles.CurrencyItemRight}>
              <Text style={styles.CurrencyItemCutoff}>Cutoff : {item.cutoff}</Text>
              <TouchableOpacity style={styles.CurrencyCurrentButton} activeOpacity={0.7}>
                <Text style={styles.CurrencyCurrentButtonText}>Current</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* PIC Currency Card */}
        <View style={styles.CurrencyItemCard}>
          <View style={styles.CurrencyItemLeft}>
            <Text style={styles.CurrencyItemCategory}>PIC Currency</Text>
            <Text style={styles.CurrencyItemDetails}>Requires valid medical . Medical : OK</Text>
          </View>
          <View style={[styles.CurrencyItemRight, styles.CurrencyItemRightPIC]}>
            <TouchableOpacity style={styles.CurrencyCurrentButton} activeOpacity={0.7}>
              <Text style={styles.CurrencyCurrentButtonText}>Current</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Medical Certificate Section */}
        <View style={styles.CurrencyAddSection}>
          <View style={styles.CurrencyAddLeft}>
            <Text style={styles.CurrencyAddTitle}>Medical Certificate</Text>
            <Text style={styles.CurrencyAddStatus}>Not Provided</Text>
          </View>
          <TouchableOpacity style={styles.CurrencyAddButton} activeOpacity={0.7}>
            <Text style={styles.CurrencyAddButtonPlus}>+</Text>
            <Text style={styles.CurrencyAddButtonText}>Add Medical Certficate</Text>
          </TouchableOpacity>
        </View>

        {/* Flight Review Section */}
        <View style={styles.CurrencyAddSection}>
          <View style={styles.CurrencyAddLeft}>
            <Text style={styles.CurrencyAddTitle}>Flight Review</Text>
            <Text style={styles.CurrencyAddStatus}>Not Provided</Text>
          </View>
          <TouchableOpacity style={styles.CurrencyAddButton} activeOpacity={0.7}>
            <Text style={styles.CurrencyAddButtonPlus}>+</Text>
            <Text style={styles.CurrencyAddButtonText}>Add Flight Review</Text>
          </TouchableOpacity>
        </View>

        {/* Endorsements & Ratings Section */}
        <View style={styles.CurrencyAddSection}>
          <View style={styles.CurrencyAddLeft}>
            <Text style={styles.CurrencyAddTitle}>Endorsements & Ratings</Text>
            <Text style={styles.CurrencyAddStatus}>Not endorsements on file</Text>
          </View>
          <TouchableOpacity style={styles.CurrencyAddButton} activeOpacity={0.7}>
            <Text style={styles.CurrencyAddButtonPlus}>+</Text>
            <Text style={styles.CurrencyAddButtonText}>Add Endorsement</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  CurrencyContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  CurrencyStatusBar: {
    height: 47,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: 'transparent',
  },
  CurrencyStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CurrencyStatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrencyStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
  },
  CurrencyStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  CurrencyStatusBarIcon: {
    width: 18,
    height: 12,
  },
  CurrencyBatteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  CurrencyBatteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
    height: 13,
  },
  CurrencyBatteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  CurrencyBatteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
    height: 4.22,
  },
  CurrencyBatteryEndImage: {
    width: '100%',
    height: '100%',
  },
  CurrencyBatteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
    height: 9,
  },
  CurrencyBatteryFillImage: {
    width: '100%',
    height: '100%',
  },
  CurrencyNavBar: {
    position: 'absolute',
    height: 66.507,
    width: 430,
    top: 47,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  CurrencyBackButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrencyBackIcon: {
    width: 27.52,
    height: 27.52,
  },
  CurrencyNavTitle: {
    position: 'absolute',
    left: 215,
    width: 100,
    marginLeft: -50,
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22.933,
  },
  CurrencyNavRight: {
    width: 27.52,
  },
  CurrencyScrollView: {
    position: 'absolute',
    top: 113.507,
    left: 0,
    right: 0,
    bottom: 0,
  },
  CurrencyScrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  CurrencyCurrentSection: {
    marginBottom: 24,
  },
  CurrencyCurrentTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 28,
  },
  CurrencyCurrentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  CurrencyCurrentDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    flex: 1,
    lineHeight: 20,
    marginRight: 12,
  },
  CurrencyRefreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 6,
  },
  CurrencyRefreshIcon: {
    width: 16,
    height: 16,
  },
  CurrencyRefreshText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
  CurrencyItemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    minHeight: 100,
  },
  CurrencyItemLeft: {
    flex: 1,
    paddingRight: 12,
  },
  CurrencyItemNumber: {
    fontFamily: 'Helvetica Neue',
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
    lineHeight: 40,
    letterSpacing: 0,
  },
  CurrencyItemCategory: {
    fontFamily: 'Helvetica Neue',
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
    lineHeight: 22,
    letterSpacing: 0,
  },
  CurrencyItemDetails: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
    letterSpacing: 0,
  },
  CurrencyItemRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    minWidth: 100,
  },
  CurrencyItemRightPIC: {
    justifyContent: 'center',
  },
  CurrencyItemCutoff: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 20,
    textAlign: 'right',
    letterSpacing: 0,
  },
  CurrencyCurrentButton: {
    backgroundColor: '#208BB2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  CurrencyCurrentButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  CurrencyAddSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
  },
  CurrencyAddLeft: {
    flex: 1,
    marginRight: 12,
  },
  CurrencyAddTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
    lineHeight: 22,
    letterSpacing: 0,
  },
  CurrencyAddStatus: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
    letterSpacing: 0,
  },
  CurrencyAddButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#208BB2',
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 6,
    flexShrink: 0,
  },
  CurrencyAddButtonPlus: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 1,
  },
  CurrencyAddButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default Currency;






