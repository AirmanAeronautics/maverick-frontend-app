// DO NOT MODIFY OTHER FILES — Logging SCREEN ONLY
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

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

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
    <View style={styles.loggingBatteryContainer}>
      <View style={styles.loggingBatteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.loggingBatteryOutlineImage} />
      </View>
      <View style={styles.loggingBatteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.loggingBatteryEndImage} />
      </View>
      <View style={styles.loggingBatteryFill}>
        <Image source={{ uri: imgFill }} style={styles.loggingBatteryFillImage} />
      </View>
    </View>
  );
};

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
const imgLine733 = 'https://www.figma.com/api/mcp/asset/8c7e7fde-742f-4439-a6a6-09ba79bfa560';
const imgSearch = 'https://www.figma.com/api/mcp/asset/25ec8e33-d5db-451f-afde-aa684c0f8b01';
const imgOcticonFilter16 = 'https://www.figma.com/api/mcp/asset/63abddbf-a31b-4e0d-8775-51f745560b7b';
const imgFrame1171275563 = 'https://www.figma.com/api/mcp/asset/3ca80c41-3f9f-49f8-a5d1-2af23e2b62d8';

// Arrow line SVG as data URI - dark gray arrow with sharp arrowhead pointing right
const imgLine733 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMy41IEwgODIgMy41IiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0gODIgMCBMIDg1IDMuNSBMIDgyIDcgWiIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==';

type LoggingProps = {
  onBack?: () => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onAdd?: () => void;
  onFilter?: () => void;
};

const Logging = ({ onBack, onEdit, onDelete, onAdd, onFilter }: LoggingProps = {}) => {
  // Sample log entries data
  const logEntries = [
    { id: 1, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 2, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 3, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 4, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 5, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
  ];

  return (
    <View style={styles.loggingContainer}>
      {/* Status Bar */}
      <View style={styles.loggingStatusBar}>
        <Text style={styles.loggingStatusBarTime}>9:41</Text>
        <View style={styles.loggingStatusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.loggingStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.loggingStatusBarWifi} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.loggingHeader}>
        <View style={styles.loggingHeaderContent}>
          <TouchableOpacity style={styles.loggingBackButton} onPress={onBack}>
            <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.loggingBackButtonIcon} />
          </TouchableOpacity>
          <View style={styles.loggingHeaderTitleContainer}>
            <Text style={styles.loggingHeaderTitle}>Logbook list</Text>
          </View>
        </View>
      </View>

      {/* Search and Filter */}
      <View style={styles.loggingSearchFilterContainer}>
        <View style={styles.loggingSearchInputContainer}>
          <View style={styles.loggingSearchInput}>
            <View style={styles.loggingSearchInputContent}>
              <View style={styles.loggingSearchIconContainer}>
                <View style={styles.loggingSearchIcon}>
                  <Image source={{ uri: imgSearch }} style={styles.loggingSearchIconImage} />
                </View>
                <Text style={styles.loggingSearchPlaceholder}>Search Your Logs</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.loggingFilterButton} onPress={onFilter}>
          <View style={styles.loggingFilterIcon}>
            <Image source={{ uri: imgOcticonFilter16 }} style={styles.loggingFilterIconImage} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Log Entries List */}
      <ScrollView 
        style={styles.loggingListContainer}
        contentContainerStyle={styles.loggingListItems}
        showsVerticalScrollIndicator={false}
      >
        {logEntries.map((entry) => (
          <View key={entry.id} style={styles.loggingLogCard}>
            <View style={styles.loggingLogCardContent}>
              {/* Action Icons - Top Right */}
              <View style={styles.loggingLogCardActions}>
                <TouchableOpacity style={styles.loggingEditButton} onPress={() => onEdit?.(entry.id)}>
                  <Image source={{ uri: imgBasilEditOutline }} style={styles.loggingEditIconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loggingDeleteButton} onPress={() => onDelete?.(entry.id)}>
                  <Image source={{ uri: imgFluentDelete16Regular }} style={styles.loggingDeleteIconImage} />
                </TouchableOpacity>
              </View>
              
              {/* Left Side: Hours, Departure, Date */}
              <View style={styles.loggingLogLeft}>
                <Text style={styles.loggingLogHours}>{entry.hours}</Text>
                <Text style={styles.loggingDepartureCode}>{entry.departure}</Text>
                <Text style={styles.loggingDepartureDate}>{entry.date}</Text>
              </View>
              
              {/* Center: Arrow with badges above and below */}
              <View style={styles.loggingLogCenter}>
                <View style={styles.loggingTrainingBadge}>
                  <Text style={styles.loggingTrainingText}>Training</Text>
                </View>
                <View style={styles.loggingArrowLine}>
                  <Image source={{ uri: imgLine733 }} style={styles.loggingArrowLineImage} />
                </View>
                <View style={styles.loggingIfrBadge}>
                  <Text style={styles.loggingIfrText}>IFR</Text>
                </View>
              </View>
              
              {/* Right Side: Aircraft, Registration, Destination, Date */}
              <View style={styles.loggingLogRight}>
                <View style={styles.loggingLogRegistration}>
                  <View style={styles.loggingAirplaneIcon}>
                    <Image source={{ uri: imgProiconsAirplane }} style={styles.loggingAirplaneIconImage} />
                  </View>
                  <Text style={styles.loggingRegistrationText}>{entry.registration}</Text>
                </View>
                <Text style={styles.loggingDestinationCode}>{entry.destination}</Text>
                <Text style={styles.loggingDestinationDate}>{entry.date}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.loggingFab} onPress={onAdd}>
        <Image source={{ uri: imgFrame1171275563 }} style={styles.loggingFabImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loggingContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  loggingStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: APP_WIDTH,
    height: 47,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    zIndex: 100,
  },
  loggingStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    lineHeight: 21,
  },
  loggingStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  loggingStatusBarIcon: {
    width: 18,
    height: 12,
  },
  loggingStatusBarWifi: {
    width: 17,
    height: 11.834,
  },
  loggingBatteryContainer: {
    height: 13,
    width: 27.401,
    position: 'relative',
  },
  loggingBatteryOutline: {
    position: 'absolute',
    height: 13,
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
  },
  loggingBatteryOutlineImage: {
    width: '100%',
    height: 13,
  },
  loggingBatteryEnd: {
    position: 'absolute',
    height: 4.22,
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
  },
  loggingBatteryEndImage: {
    width: 1.401,
    height: 4.22,
  },
  loggingBatteryFill: {
    position: 'absolute',
    height: 9,
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
  },
  loggingBatteryFillImage: {
    width: '100%',
    height: 9,
  },
  loggingHeader: {
    position: 'absolute',
    height: 66.507,
    left: 0,
    top: 54,
    width: APP_WIDTH,
  },
  loggingHeaderContent: {
    position: 'absolute',
    height: 27.52,
    left: 19.93,
    top: '50%',
    transform: [{ translateY: -13.76 }],
    width: 385.52,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loggingBackButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggingBackButtonIcon: {
    width: 27.52,
    height: 27.52,
  },
  loggingHeaderTitleContainer: {
    position: 'absolute',
    left: 7,
    top: 2.26,
    width: 379,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loggingHeaderTitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.933,
    color: '#000000',
    textAlign: 'center',
  },
  loggingSearchFilterContainer: {
    position: 'absolute',
    left: 26,
    top: 137,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  loggingSearchInputContainer: {
    height: 44,
    width: 323,
  },
  loggingSearchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    height: '100%',
    justifyContent: 'center',
  },
  loggingSearchInputContent: {
    flex: 1,
    height: 24,
  },
  loggingSearchIconContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    width: '100%',
  },
  loggingSearchIcon: {
    width: 18,
    height: 18,
  },
  loggingSearchIconImage: {
    width: 18,
    height: 18,
  },
  loggingSearchPlaceholder: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#667085',
  },
  loggingFilterButton: {
    backgroundColor: '#4C4C4C',
    borderWidth: 1,
    borderColor: '#4C4C4C',
    borderRadius: 8,
    height: 44,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggingFilterIcon: {
    width: 24,
    height: 24,
  },
  loggingFilterIconImage: {
    width: 24,
    height: 24,
  },
  loggingListContainer: {
    position: 'absolute',
    left: 25,
    top: 205,
    right: 25,
    bottom: 80,
  },
  loggingListItems: {
    gap: 16,
    paddingBottom: 20,
  },
  loggingLogCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 14.648,
    height: 145,
    width: '100%',
    overflow: 'hidden',
  },
  loggingLogCardContent: {
    position: 'absolute',
    left: 17,
    top: 21,
    right: 17,
    height: 103,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  loggingLogCardActions: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    zIndex: 10,
  },
  loggingEditButton: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  loggingEditIconImage: {
    width: 20,
    height: 20,
    opacity: 0.7,
  },
  loggingDeleteButton: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  loggingDeleteIconImage: {
    width: 20,
    height: 20,
    opacity: 1,
  },
  loggingLogLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
    minWidth: 100,
  },
  loggingLogHours: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
  },
  loggingDepartureCode: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.26,
    lineHeight: 18,
    color: '#27272A',
  },
  loggingDepartureDate: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.08,
    lineHeight: 16,
    color: '#27272A',
  },
  loggingLogCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 100,
  },
  loggingTrainingBadge: {
    backgroundColor: '#CEECFF',
    borderWidth: 0.679,
    borderColor: '#C4EEFF',
    borderRadius: 12.217,
    paddingHorizontal: 8.144,
    paddingVertical: 4.072,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggingTrainingText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6.787,
    lineHeight: 9.502,
    color: '#272727',
  },
  loggingArrowLine: {
    width: 85.02,
    height: 7,
  },
  loggingArrowLineImage: {
    width: 85.02,
    height: 7,
  },
  loggingIfrBadge: {
    borderWidth: 0.68,
    borderColor: '#DBDBDB',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggingIfrText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 6.787,
    lineHeight: 9.502,
    color: '#272727',
  },
  loggingLogRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 6,
    minWidth: 140,
  },
  loggingLogRegistration: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loggingAirplaneIcon: {
    width: 16,
    height: 16,
  },
  loggingAirplaneIconImage: {
    width: 16,
    height: 16,
  },
  loggingRegistrationText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.051,
    color: '#4E4E4E',
  },
  loggingDestinationCode: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 15.26,
    lineHeight: 18,
    color: '#27272A',
  },
  loggingDestinationDate: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 13.08,
    lineHeight: 16,
    color: '#27272A',
  },
  loggingFab: {
    position: 'absolute',
    right: 28,
    bottom: 100,
    width: 56,
    height: 56,
    zIndex: 99,
  },
  loggingFabImage: {
    width: 56,
    height: 56,
  },
});

export default Logging;










