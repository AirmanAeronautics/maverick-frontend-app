import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/bebd6a53-d1a9-4f8c-bdf3-b6ca136fe6a6';
const imgWifi = 'https://www.figma.com/api/mcp/asset/d0a0c95d-2302-4371-ba54-4ffcb65eb9b5';
const imgBattery = 'https://www.figma.com/api/mcp/asset/b7c67c85-509d-4faf-9ec1-90577d8776ce';
const imgSearch = 'https://www.figma.com/api/mcp/asset/751eebd5-c8d2-4fd7-9653-9e30a3b1fab9';

const REGULATORY_BODIES = [
  {
    id: 1,
    flag: '🇦🇪',
    name: 'United Arab Emirates – GCAA (General Civil Aviation Authority)',
  },
  {
    id: 2,
    flag: '🇦🇷',
    name: 'Argentina – ANAC (Administración Nacional de Aviación Civil)',
  },
  {
    id: 3,
    flag: '🇧🇷',
    name: 'Brazil – ANAC Brazil (Agência Nacional de Aviação Civil)',
  },
  {
    id: 4,
    flag: '🇨🇱',
    name: 'Chile – DGAC (Dirección General de Aeronáutica Civil)',
  },
  {
    id: 5,
    flag: '🇨🇳',
    name: 'China – CAAC (Civil Aviation Administration of China)',
  },
  {
    id: 6,
    flag: '🇪🇬',
    name: 'Egypt – ECAA (Egyptian Civil Aviation Authority)',
  },
  {
    id: 7,
    flag: '🇭🇰',
    name: 'Hong Kong – HKCAD (Civil Aviation Department Hong Kong)',
  },
  {
    id: 8,
    flag: '🇮🇩',
    name: 'Indonesia – DGCA Indonesia (Directorate General of Civil Aviation)',
  },
  {
    id: 9,
    flag: '🇮🇪',
    name: 'Ireland – IAA (Irish Aviation Authority)',
  },
  {
    id: 10,
    flag: '🇮🇱',
    name: 'Israel – CAA Israel (Civil Aviation Authority of Israel)',
  },
  {
    id: 11,
    flag: '🇯🇵',
    name: 'Japan – JCAB (Japan Civil Aviation Bureau)',
  },
  {
    id: 12,
    flag: '🇱🇰',
    name: 'Sri Lanka – CAASL (Civil Aviation Authority of Sri Lanka)',
  },
  {
    id: 13,
    flag: '🇲🇾',
    name: 'Malaysia – CAAM (Civil Aviation Authority of Malaysia)',
  },
  {
    id: 14,
    flag: '🇲🇽',
    name: 'Mexico – AFAC (Agencia Federal de Aviación Civil)',
  },
];

const StatusBarBattery = () => (
  <View style={styles.batteryContainer}>
    <Image source={{ uri: imgBattery }} style={styles.batteryImage} />
  </View>
);

const RegBodyAll = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <Text style={styles.statusBarTime}>9:41</Text>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.wifiIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Select Your Regulatory Body</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={{ uri: imgSearch }} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your Regulatory body"
            placeholderTextColor="#929292"
          />
        </View>
      </View>

      {/* Regulatory Bodies List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {REGULATORY_BODIES.map((body) => (
          <TouchableOpacity key={body.id} style={styles.listItem} activeOpacity={0.7}>
            <Text 
              style={body.id === 8 ? styles.listItemTextSmall : styles.listItemText}
            >
              {body.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10.33,
  },
  statusBar: {
    height: 50.502,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 34.43,
    paddingRight: 34.43,
    paddingTop: 17.22,
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18.365,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    paddingVertical: 1.148,
  },
  statusBarIcon: {
    width: 20.66,
    height: 11.479,
  },
  wifiIcon: {
    width: 17.529,
    height: 12.586,
  },
  batteryContainer: {
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    width: 30.965,
    height: 14.921,
  },
  titleContainer: {
    position: 'absolute',
    left: 24,
    top: 111.5,
    transform: [{ translateY: -12.6 }],
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textTransform: 'none',
    letterSpacing: -0.18,
    lineHeight: 25.2,
    margin: 0,
    padding: 0,
  },
  searchContainer: {
    position: 'absolute',
    left: (APP_WIDTH - 375.325) / 2,
    top: 124,
    width: 375.325,
    height: 52.798,
  },
  searchInputContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.148,
    borderColor: '#EDF1F3',
    borderRadius: 11.478,
    paddingLeft: 16.069,
    paddingRight: 16.069,
    paddingTop: 30.99,
    paddingBottom: 30.99,
    gap: 8,
    shadowColor: 'rgba(228, 229, 231, 0.24)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 2,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#929292',
    letterSpacing: -0.14,
    lineHeight: 19.6,
    height: 17,
    padding: 0,
  },
  scrollView: {
    position: 'absolute',
    top: 177,
    left: (APP_WIDTH - 382) / 2,
    width: 382,
    bottom: 0,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  listItem: {
    width: '100%',
    height: 47,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    gap: 0,
  },
  listItemText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#343434',
    lineHeight: 16.8,
    flex: 1,
  },
  listItemTextSmall: {
    fontFamily: 'Helvetica Neue',
    fontSize: 11.75,
    fontWeight: '400',
    color: '#343434',
    lineHeight: 16.8,
    flex: 1,
  },
});

export default RegBodyAll;

