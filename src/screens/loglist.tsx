// DO NOT MODIFY OTHER FILES — loglist SCREEN ONLY
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgOutline = 'https://www.figma.com/api/mcp/asset/13d5e4cd-0c75-49bc-911e-6c91023fbf35';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/4099bdcd-0046-491a-a481-8d5b8ed37fa0';
const imgFill = 'https://www.figma.com/api/mcp/asset/e04faab5-0a04-44ab-8c09-c6a80ffdfadb';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/019c2e96-cc05-473f-b46f-e16bfc4b7efc';
const imgWifi = 'https://www.figma.com/api/mcp/asset/a62571fc-0542-4128-8a96-d09fb430066a';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/8db0de48-7703-42eb-8232-8f88849227fb';
const imgBasilEditOutline = 'https://www.figma.com/api/mcp/asset/fc7019c4-425f-4378-8f30-f1e99b1e3799';
const imgFluentDelete16Regular = 'https://www.figma.com/api/mcp/asset/dd1b5629-087a-4211-9a01-1f0e6d433491';
const imgProiconsAirplane = 'https://www.figma.com/api/mcp/asset/1d85b66f-90d5-4f32-89f2-c3991c819bbf';
const imgThin = 'https://www.figma.com/api/mcp/asset/69bfcd09-ab82-4254-b646-10747a9d9fa5';
const imgLine733 = 'https://www.figma.com/api/mcp/asset/8c7e7fde-742f-4439-a6a6-09ba79bfa560';
const imgSearch = 'https://www.figma.com/api/mcp/asset/25ec8e33-d5db-451f-afde-aa684c0f8b01';
const imgOcticonFilter16 = 'https://www.figma.com/api/mcp/asset/63abddbf-a31b-4e0d-8775-51f745560b7b';
const imgFrame1171275563 = 'https://www.figma.com/api/mcp/asset/3ca80c41-3f9f-49f8-a5d1-2af23e2b62d8';

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
    <View style={styles.llBatteryContainer}>
      <View style={styles.llBatteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.llBatteryOutlineImage} />
      </View>
      <View style={styles.llBatteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.llBatteryEndImage} />
      </View>
      <View style={styles.llBatteryFill}>
        <Image source={{ uri: imgFill }} style={styles.llBatteryFillImage} />
      </View>
    </View>
  );
};

type LogListProps = {
  onBack?: () => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onAdd?: () => void;
};

const LogList = ({ onBack, onEdit, onDelete, onAdd }: LogListProps = {}) => {
  // Sample log entries data
  const logEntries = [
    { id: 1, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 2, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 3, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 4, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 5, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
  ];

  return (
    <View style={styles.llContainer}>
      {/* Status Bar */}
      <View style={styles.llStatusBar}>
        <View style={styles.llStatusBarLeft}>
          <View style={styles.llStatusBarTimeContainer}>
            <Text style={styles.llStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.llStatusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.llStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.llStatusBarWifi} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.llHeader}>
        <View style={styles.llHeaderContent}>
          <TouchableOpacity style={styles.llBackButton} onPress={onBack}>
            <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.llBackButtonIcon} />
          </TouchableOpacity>
          <View style={styles.llHeaderTitleContainer}>
            <Text style={styles.llHeaderTitle}>Logbook list</Text>
          </View>
        </View>
      </View>

      {/* Search and Filter */}
      <View style={styles.llSearchFilterContainer}>
        <View style={styles.llSearchInputContainer}>
          <View style={styles.llSearchInput}>
            <View style={styles.llSearchInputContent}>
              <View style={styles.llSearchIconContainer}>
                <View style={styles.llSearchIcon}>
                  <Image source={{ uri: imgSearch }} style={styles.llSearchIconImage} />
                </View>
                <Text style={styles.llSearchPlaceholder}>Search Your Logs</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.llFilterButton}>
          <View style={styles.llFilterIcon}>
            <Image source={{ uri: imgOcticonFilter16 }} style={styles.llFilterIconImage} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Log Entries List */}
      <ScrollView style={styles.llListContainer} contentContainerStyle={styles.llListItems}>
        {logEntries.map((entry) => (
          <View key={entry.id} style={styles.llLogCard}>
            <View style={styles.llLogCardActions}>
              <TouchableOpacity
                style={styles.llEditButton}
                onPress={() => onEdit?.(entry.id)}
              >
                <View style={styles.llEditIcon}>
                  <Image source={{ uri: imgBasilEditOutline }} style={styles.llEditIconImage} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.llDeleteButton}
                onPress={() => onDelete?.(entry.id)}
              >
                <View style={styles.llDeleteIcon}>
                  <Image source={{ uri: imgFluentDelete16Regular }} style={styles.llDeleteIconImage} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.llLogCardContent}>
              <View style={styles.llLogHeader}>
                <Text style={styles.llLogHours}>{entry.hours}</Text>
                <View style={styles.llLogRegistration}>
                  <View style={styles.llAirplaneIcon}>
                    <Image source={{ uri: imgProiconsAirplane }} style={styles.llAirplaneIconImage} />
                  </View>
                  <Text style={styles.llRegistrationText}>{entry.registration}</Text>
                </View>
              </View>
              <View style={styles.llDivider}>
                <View style={styles.llDividerLine}>
                  <Image source={{ uri: imgThin }} style={styles.llDividerLineImage} />
                </View>
              </View>
              <View style={styles.llFlightDetails}>
                <View style={styles.llDeparture}>
                  <Text style={styles.llDepartureCode}>{entry.departure}</Text>
                  <Text style={styles.llDepartureDate}>{entry.date}</Text>
                </View>
                <View style={styles.llFlightInfo}>
                  <View style={styles.llTrainingBadge}>
                    <Text style={styles.llTrainingText}>Training</Text>
                  </View>
                  <View style={styles.llIfrBadge}>
                    <Text style={styles.llIfrText}>IFR</Text>
                  </View>
                </View>
                <View style={styles.llDestination}>
                  <Text style={styles.llDestinationCode}>{entry.destination}</Text>
                  <Text style={styles.llDestinationDate}>{entry.date}</Text>
                </View>
                <View style={styles.llArrowLine}>
                  <View style={styles.llArrowLineImage}>
                    <Image source={{ uri: imgLine733 }} style={styles.llArrowLineImageImg} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.llFab} onPress={onAdd}>
        <Image source={{ uri: imgFrame1171275563 }} style={styles.llFabImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  llContainer: {
    position: 'relative',
    width: APP_WIDTH,
    minHeight: '100%',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  llStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: APP_WIDTH,
    height: 47,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  llStatusBarLeft: {
    position: 'absolute',
    left: (APP_WIDTH / 2) - 158,
    top: 14,
  },
  llStatusBarTimeContainer: {
    position: 'absolute',
    height: 21,
    left: (APP_WIDTH / 2) - 158,
    borderRadius: 24,
    top: 14,
    width: 54,
  },
  llStatusBarTime: {
    position: 'absolute',
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
    left: 27,
    top: 1,
    width: 54,
  },
  llStatusBarRight: {
    position: 'absolute',
    left: (APP_WIDTH / 2) + 145.7,
    top: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  llStatusBarIcon: {
    position: 'absolute',
    height: 12,
    left: (APP_WIDTH / 2) + 116,
    top: 20,
    width: 18,
  },
  llStatusBarWifi: {
    position: 'absolute',
    height: 11.834,
    left: (APP_WIDTH / 2) + 141.5,
    top: 20,
    width: 17,
  },
  llBatteryContainer: {
    position: 'absolute',
    height: 13,
    left: (APP_WIDTH / 2) + 170.7,
    top: 19,
    width: 27.401,
  },
  llBatteryOutline: {
    position: 'absolute',
    height: 13,
    left: 0,
    right: 2.4,
    top: '50%',
  },
  llBatteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  llBatteryEnd: {
    position: 'absolute',
    height: 4.22,
    right: 0,
    top: '50%',
    width: 1.401,
  },
  llBatteryEndImage: {
    width: '100%',
    height: '100%',
  },
  llBatteryFill: {
    position: 'absolute',
    height: 9,
    left: 2,
    right: 4.4,
    top: '50%',
  },
  llBatteryFillImage: {
    width: '100%',
    height: '100%',
  },
  llHeader: {
    position: 'absolute',
    height: 66.507,
    left: APP_WIDTH / 2,
    top: 54,
    width: APP_WIDTH,
    transform: [{ translateX: -APP_WIDTH / 2 }],
  },
  llHeaderContent: {
    position: 'absolute',
    height: 27.52,
    left: 19.93,
    top: '50%',
    width: 385.52,
    transform: [{ translateY: -13.76 }],
  },
  llBackButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 27.52,
    height: 27.52,
    backgroundColor: 'transparent',
  },
  llBackButtonIcon: {
    width: '100%',
    height: '100%',
  },
  llHeaderTitleContainer: {
    position: 'absolute',
    left: 6.07,
    top: 2.26,
    width: 379,
    alignItems: 'center',
    justifyContent: 'center',
  },
  llHeaderTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.933,
    color: '#000000',
    textAlign: 'center',
  },
  llSearchFilterContainer: {
    position: 'absolute',
    left: 26,
    top: 137,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  llSearchInputContainer: {
    height: 44,
    width: 323,
    position: 'relative',
  },
  llSearchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  llSearchInputContent: {
    flex: 1,
    height: 24,
    position: 'relative',
  },
  llSearchIconContainer: {
    position: 'absolute',
    left: 0,
    top: '50%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  llSearchIcon: {
    width: 18,
    height: 18,
    position: 'relative',
  },
  llSearchIconImage: {
    width: '100%',
    height: '100%',
  },
  llSearchPlaceholder: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#667085',
    marginLeft: 28,
  },
  llFilterButton: {
    backgroundColor: '#4c4c4c',
    borderWidth: 1,
    borderColor: '#4c4c4c',
    borderRadius: 8,
    height: 44,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  llFilterIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  llFilterIconImage: {
    width: '100%',
    height: '100%',
  },
  llListContainer: {
    position: 'absolute',
    left: 25,
    top: 205,
    width: APP_WIDTH - 50,
  },
  llListItems: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    width: 380,
    paddingBottom: 100,
  },
  llLogCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 14.648,
    height: 145,
    width: 380,
    position: 'relative',
    overflow: 'hidden',
  },
  llLogCardActions: {
    position: 'absolute',
    left: 304,
    top: 16,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  llEditButton: {
    backgroundColor: 'transparent',
  },
  llEditIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  llEditIconImage: {
    width: '100%',
    height: '100%',
  },
  llDeleteButton: {
    backgroundColor: 'transparent',
  },
  llDeleteIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  llDeleteIconImage: {
    width: '100%',
    height: '100%',
  },
  llLogCardContent: {
    position: 'absolute',
    left: 17,
    top: 21,
    width: 343,
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  llLogHeader: {
    flexDirection: 'column',
    gap: 6,
    alignItems: 'flex-start',
    width: 141,
    position: 'relative',
  },
  llLogHours: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 15.051,
    color: '#000000',
  },
  llLogRegistration: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 140,
    position: 'relative',
  },
  llAirplaneIcon: {
    width: 16,
    height: 16,
    position: 'relative',
  },
  llAirplaneIconImage: {
    width: '100%',
    height: '100%',
  },
  llRegistrationText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.051,
    color: '#4e4e4e',
  },
  llDivider: {
    height: 0,
    width: '100%',
    position: 'relative',
  },
  llDividerLine: {
    position: 'absolute',
    top: -1,
    left: 0,
    right: 0,
  },
  llDividerLineImage: {
    width: '100%',
    height: '100%',
  },
  llFlightDetails: {
    height: 44,
    width: '100%',
    position: 'relative',
  },
  llDeparture: {
    position: 'absolute',
    height: 43,
    left: 0,
    top: 0,
    width: 109,
  },
  llDepartureCode: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.26,
    left: 0,
    top: -0.28,
    color: '#27272a',
  },
  llDepartureDate: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.08,
    left: (109 / 2) - 54.5,
    top: '53.49%',
    bottom: 0,
    color: '#27272a',
  },
  llFlightInfo: {
    position: 'absolute',
    height: 6,
    left: '50%',
    top: 27,
    width: 87,
    transform: [{ translateX: -43.5 }],
  },
  llTrainingBadge: {
    position: 'absolute',
    backgroundColor: '#ceecff',
    borderWidth: 0.679,
    borderColor: '#c4eeff',
    borderRadius: 12.217,
    height: 13.574,
    left: 20,
    paddingHorizontal: 8.144,
    paddingVertical: 4.072,
    top: -26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  llTrainingText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6.787,
    lineHeight: 9.502,
    color: '#272727',
  },
  llIfrBadge: {
    position: 'absolute',
    borderWidth: 0.68,
    borderColor: '#dbdbdb',
    borderRadius: 18,
    height: 13.574,
    left: 22,
    paddingHorizontal: 12,
    paddingVertical: 6,
    top: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  llIfrText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6.787,
    lineHeight: 9.502,
    color: '#272727',
  },
  llDestination: {
    position: 'absolute',
    height: 44,
    left: 234,
    top: 0,
    width: 109,
  },
  llDestinationCode: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.26,
    left: 0,
    top: -0.28,
    color: '#27272a',
  },
  llDestinationDate: {
    position: 'absolute',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.08,
    left: (109 / 2) - 54.5,
    top: '53.91%',
    bottom: 0.64,
    color: '#27272a',
  },
  llArrowLine: {
    position: 'absolute',
    height: 0,
    left: '50%',
    top: '50%',
    width: 85.02,
    transform: [{ translateX: -42.51 }, { translateY: -2 }],
  },
  llArrowLineImage: {
    position: 'absolute',
    top: -3.68,
    left: 0,
    right: -0.59,
    bottom: -3.68,
  },
  llArrowLineImageImg: {
    width: '100%',
    height: '100%',
  },
  llFab: {
    position: 'absolute',
    left: (APP_WIDTH * 0.8) + 6,
    top: 788,
    width: 56,
    height: 56,
  },
  llFabImage: {
    width: '100%',
    height: '100%',
  },
});

export default LogList;












