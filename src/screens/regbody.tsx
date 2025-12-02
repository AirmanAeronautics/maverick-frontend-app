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

// Image assets from Figma
const imgUnnamed61 = 'https://www.figma.com/api/mcp/asset/e489c8bb-2867-4b22-8930-7300fed0479b';
const imgUnnamed62 = 'https://www.figma.com/api/mcp/asset/98e03a61-67d9-4fd1-8f6f-dc1283c185ec';
const imgUnnamed63 = 'https://www.figma.com/api/mcp/asset/148a8589-f797-48bf-9eab-5de10459508e';
const imgUnnamed64 = 'https://www.figma.com/api/mcp/asset/7c532bb3-7e83-42eb-b198-dfed592e7db9';
const imgUnnamed65 = 'https://www.figma.com/api/mcp/asset/aef7602a-3544-4090-a2b6-f96fd9c9e388';
const imgUnnamed66 = 'https://www.figma.com/api/mcp/asset/4c9794af-de3f-40f9-9c7a-e8eb353285ad';
const imgUnnamed67 = 'https://www.figma.com/api/mcp/asset/90cab735-d76e-44f3-9214-343fc92c154e';
const imgUnnamed68 = 'https://www.figma.com/api/mcp/asset/e1899a37-4708-49d6-b04f-cedc3ffd36f9';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/acc57651-8728-4bd6-9259-577a898812b3';
const imgWifi = 'https://www.figma.com/api/mcp/asset/fc19fdf1-c3a2-4186-bc53-8d4fc31f9e0c';
const imgBattery = 'https://www.figma.com/api/mcp/asset/9c2f21ac-f67a-4051-80da-b327eda524c2';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/2c16db95-08e4-40e2-ba93-5fb2bc9e106a';

const REGULATORY_BODIES = [
  {
    id: 1,
    flag: imgUnnamed61,
    name: 'Federal Aviation Administration',
  },
  {
    id: 2,
    flag: imgUnnamed62,
    name: 'Transport Canada Civil Aviation',
  },
  {
    id: 3,
    flag: imgUnnamed63,
    name: 'Civil Aviation Authority',
  },
  {
    id: 4,
    flag: imgUnnamed64,
    name: 'Europe Union Aviation Safety Agency',
  },
  {
    id: 5,
    flag: imgUnnamed65,
    name: 'South African Civil Aviation Authority',
  },
  {
    id: 6,
    flag: imgUnnamed66,
    name: 'Directorate General of Civil Aviation',
  },
  {
    id: 7,
    flag: imgUnnamed67,
    name: 'Civil Aviation Safety Authority',
  },
  {
    id: 8,
    flag: imgUnnamed68,
    name: 'Civil Aviation Authority of New Zealand',
  },
];

const StatusBarBattery = () => (
  <View style={styles.batteryContainer}>
    <Image source={{ uri: imgBattery }} style={styles.batteryImage} />
  </View>
);

const RegBody = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <Text style={styles.statusBarTime}>9:41</Text>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select your regulatory body</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllLink}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Regulatory Bodies Grid */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {REGULATORY_BODIES.map((body, index) => {
            const isLeft = index % 2 === 0;
            const row = Math.floor(index / 2);
            const top = row === 0 ? 0 : row === 1 ? 165 : row === 2 ? 331 : 496;
            const left = isLeft ? -0.28 : 191.72;
            return (
              <View
                key={body.id}
                style={[
                  styles.card,
                  isLeft ? styles.cardLeft : styles.cardRight,
                  { top, left },
                ]}
              >
                <View style={styles.cardContent}>
                  <Image source={{ uri: body.flag }} style={styles.flagImage} />
                  <Text style={styles.cardText}>{body.name}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} activeOpacity={0.8}>
          <Text style={styles.nextButtonText}>Next</Text>
          <View style={styles.arrowContainer}>
            <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>
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
    overflow: 'hidden',
  },
  statusBar: {
    height: 50.502,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 108,
    paddingBottom: 0,
    gap: 82,
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textTransform: 'capitalize',
    letterSpacing: -0.18,
    lineHeight: 25.2,
    flex: 1,
  },
  seeAllLink: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#168aad',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  scrollView: {
    position: 'absolute',
    top: 151,
    left: 0,
    right: 0,
    bottom: 100,
  },
  scrollContent: {
    paddingTop: 0,
    paddingBottom: 100,
    alignItems: 'center',
    minHeight: 642,
  },
  gridContainer: {
    width: 360,
    height: 642,
    position: 'relative',
  },
  card: {
    position: 'absolute',
    height: 146,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.377,
    borderColor: '#E5E5E5',
    borderRadius: 7.984,
    overflow: 'hidden',
  },
  cardLeft: {
    width: 169,
  },
  cardRight: {
    width: 168,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 5,
  },
  flagImage: {
    width: 70.668,
    height: 70.668,
    borderRadius: 35.334,
  },
  cardText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 9.582,
    fontWeight: '500',
    color: '#393939',
    textAlign: 'center',
    lineHeight: 14.373,
    paddingHorizontal: 5,
    maxWidth: 104.205,
  },
  buttonContainer: {
    position: 'absolute',
    top: 829,
    left: (APP_WIDTH - 373) / 2,
    height: 43,
    width: 373,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    width: 124,
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 27.547,
    paddingVertical: 11.478,
    borderRadius: 11.478,
    backgroundColor: '#168aad',
    borderWidth: 1.148,
    borderColor: '#FFFFFF',
    shadowColor: 'rgba(22, 138, 173, 0.48)',
    shadowOffset: { width: 0, height: 1.148 },
    shadowOpacity: 1,
    shadowRadius: 2.296,
    elevation: 4,
  },
  nextButtonText: {
    fontFamily: 'Inter',
    fontSize: 16.069,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: -0.1607,
    lineHeight: 22.497,
    marginRight: 4,
  },
  arrowContainer: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});

export default RegBody;

