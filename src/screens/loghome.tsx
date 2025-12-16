// DO NOT MODIFY OTHER FILES — loghome SCREEN ONLY.
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
const DESIGN_WIDTH = 430.419;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Image assets from Figma
const imgWhatsAppImage20251104At140830Ee24Dbf33 = 'https://www.figma.com/api/mcp/asset/ffeaeec6-54e4-40d7-8b86-4f6fbfccae4e';
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/a8766184-a2b7-4eea-aac0-bdcd3fe433d6';
const imgTablerLogs = 'https://www.figma.com/api/mcp/asset/e9bf08e6-fb17-45a8-a158-a767a19648d4';
const imgTablerLogs1 = 'https://www.figma.com/api/mcp/asset/96a5fdc5-5180-4dbc-9307-ce38e7c02b2f';
const imgPhArrowsClockwise = 'https://www.figma.com/api/mcp/asset/3b64184c-d2b3-49af-9bfa-d41a9af4c490';
const imgPhArrowsClockwise1 = 'https://www.figma.com/api/mcp/asset/c22df849-c075-4b82-b78b-05bbaed42c21';
const imgGroup = 'https://www.figma.com/api/mcp/asset/0c7393b2-5d9b-44cd-8eff-da7a335c2ac4';
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/6631da69-ab3c-442e-a9ba-d707b4de3c92';
const imgMajesticonsAnalyticsPlusLine = 'https://www.figma.com/api/mcp/asset/2ead85f7-00fc-49c3-bdd2-ce38eb307367';
const imgMajesticonsAnalyticsPlusLine1 = 'https://www.figma.com/api/mcp/asset/491a6748-159e-4f98-b3a8-a71b7f1e0dd6';
const imgPhCertificateLight = 'https://www.figma.com/api/mcp/asset/64618c3e-bcbe-4a7d-9e48-20e74ea2e239';
const imgPhCertificateLight1 = 'https://www.figma.com/api/mcp/asset/919a6d10-a53c-4ba9-8a1c-81f0811876f1';
const imgGroup2 = 'https://www.figma.com/api/mcp/asset/1f403974-4351-4597-b76a-44b9234d07b6';
const imgGroup3 = 'https://www.figma.com/api/mcp/asset/d615e170-f5ed-44e7-b4aa-16d69801595d';
const imgMobileSignal = 'https://www.figma.com/api/mcp/asset/9b842be9-a029-48b6-b584-6ec193ac368a';
const imgWifi = 'https://www.figma.com/api/mcp/asset/42febd90-d513-4b02-b98a-afa0ca5c3a72';
const imgBattery = 'https://www.figma.com/api/mcp/asset/40c50d6b-858c-4e69-99f4-020c87916565';

type LogHomeProps = {
  onAddLog?: () => void;
  onCardPress?: (cardType: string) => void;
};

const LogHome = ({ onAddLog, onCardPress }: LogHomeProps = {}) => {
  return (
    <View style={styles.loghomeContainer}>
      {/* Status Bar */}
      <View style={styles.loghomeStatusBar}>
        <Text style={styles.loghomeStatusBarTime}>9:41</Text>
        <View style={styles.loghomeStatusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.loghomeStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.loghomeStatusBarWifi} />
          <View style={styles.loghomeBatteryContainer}>
            <Image source={{ uri: imgBattery }} style={styles.loghomeBatteryImage} />
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.loghomeScrollView}
        contentContainerStyle={styles.loghomeScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content Container */}
        <View style={styles.loghomeMainContent}>
          {/* Add New Log Card */}
          <View style={styles.loghomeAddCard}>
            <View style={styles.loghomeAddCardContent}>
              <Text style={styles.loghomeAddCardTitle}>Add New Log</Text>
              <Text style={styles.loghomeAddCardSubtitle}>Digitalize your logs and make it organized</Text>
            </View>
            <TouchableOpacity 
              style={styles.loghomeAddButton}
              onPress={onAddLog}
              activeOpacity={0.8}
            >
              <Text style={styles.loghomeAddButtonText}>Add </Text>
              <View style={styles.loghomeAddButtonIcon}>
                <Image 
                  source={{ uri: imgArrowArrowLeftMd }} 
                  style={styles.loghomeAddButtonArrow}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Category Cards Container */}
          <View style={styles.loghomeCardsContainer}>
            {/* Logbook Card */}
            <TouchableOpacity 
              style={[styles.loghomeCard, styles.loghomeCardLogbook]}
              onPress={() => onCardPress?.('logbook')}
              activeOpacity={0.8}
            >
              <Image 
                source={{ uri: imgTablerLogs }} 
                style={styles.loghomeCardBgIcon}
              />
              <View style={styles.loghomeCardContent}>
                <Image 
                  source={{ uri: imgTablerLogs1 }} 
                  style={styles.loghomeCardIcon}
                />
                <View style={styles.loghomeCardText}>
                  <Text style={[styles.loghomeCardTitle, styles.loghomeCardTitleLogbook]}>Logbook</Text>
                  <Text style={styles.loghomeCardSubtitle}>Interactive Pdf study with AI Assistance</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Currency Card */}
            <TouchableOpacity 
              style={[styles.loghomeCard, styles.loghomeCardCurrency]}
              onPress={() => onCardPress?.('currency')}
              activeOpacity={0.8}
            >
              <Image 
                source={{ uri: imgPhArrowsClockwise }} 
                style={styles.loghomeCardBgIconCurrency}
              />
              <View style={styles.loghomeCardContent}>
                <Image 
                  source={{ uri: imgPhArrowsClockwise1 }} 
                  style={styles.loghomeCardIcon}
                />
                <View style={styles.loghomeCardText}>
                  <Text style={[styles.loghomeCardTitle, styles.loghomeCardTitleCurrency]}>Currency</Text>
                  <Text style={styles.loghomeCardSubtitle}>Interactive Pdf study with AI Assistance</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Documents Card */}
            <TouchableOpacity 
              style={[styles.loghomeCard, styles.loghomeCardDocuments]}
              onPress={() => onCardPress?.('documents')}
              activeOpacity={0.8}
            >
              <View style={styles.loghomeCardBgIconWrapper}>
                <Image 
                  source={{ uri: imgGroup }} 
                  style={styles.loghomeCardBgIconDocuments}
                />
              </View>
              <View style={styles.loghomeCardContent}>
                <View style={styles.loghomeCardIconWrapper}>
                  <Image 
                    source={{ uri: imgGroup1 }} 
                    style={styles.loghomeCardIconDocuments}
                  />
                </View>
                <View style={styles.loghomeCardText}>
                  <Text style={[styles.loghomeCardTitle, styles.loghomeCardTitleDocuments]}>Documents</Text>
                  <Text style={styles.loghomeCardSubtitle}>Interactive Pdf study with AI Assistance</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Analytics Card */}
            <TouchableOpacity 
              style={[styles.loghomeCard, styles.loghomeCardAnalytics]}
              onPress={() => onCardPress?.('analytics')}
              activeOpacity={0.8}
            >
              <Image 
                source={{ uri: imgMajesticonsAnalyticsPlusLine }} 
                style={styles.loghomeCardBgIconAnalytics}
              />
              <View style={styles.loghomeCardContent}>
                <Image 
                  source={{ uri: imgMajesticonsAnalyticsPlusLine1 }} 
                  style={styles.loghomeCardIcon}
                />
                <View style={styles.loghomeCardText}>
                  <Text style={[styles.loghomeCardTitle, styles.loghomeCardTitleAnalytics]}>Analytics</Text>
                  <Text style={styles.loghomeCardSubtitle}>Interactive Pdf study with AI Assistance</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Certificates Card */}
            <TouchableOpacity 
              style={[styles.loghomeCard, styles.loghomeCardCertificates]}
              onPress={() => onCardPress?.('certificates')}
              activeOpacity={0.8}
            >
              <Image 
                source={{ uri: imgPhCertificateLight }} 
                style={styles.loghomeCardBgIconCertificates}
              />
              <View style={styles.loghomeCardContent}>
                <Image 
                  source={{ uri: imgPhCertificateLight1 }} 
                  style={styles.loghomeCardIcon}
                />
                <View style={styles.loghomeCardText}>
                  <Text style={[styles.loghomeCardTitle, styles.loghomeCardTitleCertificates]}>Certificates</Text>
                  <Text style={styles.loghomeCardSubtitle}>Interactive Pdf study with AI Assistance</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Export Card */}
            <TouchableOpacity 
              style={[styles.loghomeCard, styles.loghomeCardExport]}
              onPress={() => onCardPress?.('export')}
              activeOpacity={0.8}
            >
              <View style={styles.loghomeCardBgIconWrapperExport}>
                <Image 
                  source={{ uri: imgGroup2 }} 
                  style={styles.loghomeCardBgIconExport}
                />
              </View>
              <View style={styles.loghomeCardContent}>
                <View style={styles.loghomeCardIconWrapperExport}>
                  <Image 
                    source={{ uri: imgGroup3 }} 
                    style={styles.loghomeCardIconExport}
                  />
                </View>
                <View style={styles.loghomeCardText}>
                  <Text style={[styles.loghomeCardTitle, styles.loghomeCardTitleExport]}>Export</Text>
                  <Text style={styles.loghomeCardSubtitle}>Interactive Pdf study with AI Assistance</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loghomeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
    position: 'relative',
  },
  loghomeStatusBar: {
    height: 50.502,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34.43,
    paddingTop: 17.22,
    backgroundColor: '#FFFFFF',
    zIndex: 100,
  },
  loghomeStatusBarTime: {
    fontFamily: 'Inter',
    fontSize: 18.365,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18.365,
  },
  loghomeStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.739,
    paddingVertical: 1.148,
  },
  loghomeStatusBarIcon: {
    width: 20.66,
    height: 11.479,
  },
  loghomeStatusBarWifi: {
    width: 17.529,
    height: 12.586,
  },
  loghomeBatteryContainer: {
    width: 30.965,
    height: 14.921,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loghomeBatteryImage: {
    width: 30.965,
    height: 14.921,
  },
  loghomeScrollView: {
    flex: 1,
  },
  loghomeScrollContent: {
    paddingBottom: 100,
  },
  loghomeMainContent: {
    marginTop: 92,
    marginLeft: 24,
    width: 382,
    gap: 24,
  },
  loghomeAddCard: {
    height: 102.99,
    borderWidth: 1.3,
    borderColor: '#e6e9f0',
    borderRadius: 11.235,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 14.7,
    paddingRight: 14.7,
    position: 'relative',
  },
  loghomeAddCardContent: {
    width: 318,
    gap: 0,
  },
  loghomeAddCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#0a0f1f',
    lineHeight: 22.471,
    marginBottom: 0,
  },
  loghomeAddCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14.044,
    fontWeight: '400',
    color: '#585858',
    lineHeight: 22.471,
    marginTop: 0,
    width: 210,
  },
  loghomeAddButton: {
    backgroundColor: '#168aad',
    borderRadius: 11.235,
    paddingHorizontal: 14,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  loghomeAddButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14.044,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 14.044,
  },
  loghomeAddButtonIcon: {
    width: 18,
    height: 18,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }],
  },
  loghomeAddButtonArrow: {
    width: 18,
    height: 18,
  },
  loghomeCardsContainer: {
    gap: 16,
    width: '100%',
  },
  loghomeCard: {
    height: 91,
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
    paddingLeft: 21,
    paddingTop: 23,
    paddingRight: 21,
    paddingBottom: 23,
  },
  loghomeCardLogbook: {
    backgroundColor: '#e9f3fc',
    borderWidth: 1,
    borderColor: '#c5e3ff',
  },
  loghomeCardCurrency: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#ffdbb8',
  },
  loghomeCardDocuments: {
    backgroundColor: '#eafaef',
    borderWidth: 1,
    borderColor: '#bbffd6',
  },
  loghomeCardAnalytics: {
    backgroundColor: '#f7faea',
    borderWidth: 1,
    borderColor: '#fff898',
  },
  loghomeCardCertificates: {
    backgroundColor: '#f9ecff',
    borderWidth: 1,
    borderColor: '#edc7ff',
  },
  loghomeCardExport: {
    backgroundColor: '#eaf6fa',
    borderWidth: 1,
    borderColor: '#c9f1ff',
  },
  loghomeCardBgIcon: {
    position: 'absolute',
    width: 58,
    height: 58,
    left: 324,
    top: 44,
  },
  loghomeCardBgIconCurrency: {
    position: 'absolute',
    width: 56,
    height: 56,
    left: 328,
    top: 46.01,
  },
  loghomeCardBgIconWrapper: {
    position: 'absolute',
    width: 56,
    height: 56,
    left: 325,
    top: 47,
    overflow: 'hidden',
  },
  loghomeCardBgIconDocuments: {
    width: '100%',
    height: '100%',
  },
  loghomeCardBgIconAnalytics: {
    position: 'absolute',
    width: 55,
    height: 55,
    left: 325,
    top: 50,
  },
  loghomeCardBgIconCertificates: {
    position: 'absolute',
    width: 54,
    height: 54,
    left: 327,
    top: 51.01,
  },
  loghomeCardBgIconWrapperExport: {
    position: 'absolute',
    width: 56,
    height: 56,
    left: 331,
    top: 47.01,
    overflow: 'hidden',
  },
  loghomeCardBgIconExport: {
    width: '100%',
    height: '100%',
  },
  loghomeCardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    width: 276,
  },
  loghomeCardIcon: {
    width: 40,
    height: 40,
  },
  loghomeCardIconWrapper: {
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  loghomeCardIconDocuments: {
    width: '100%',
    height: '100%',
  },
  loghomeCardIconWrapperExport: {
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  loghomeCardIconExport: {
    width: '100%',
    height: '100%',
  },
  loghomeCardText: {
    flex: 1,
    gap: 2,
  },
  loghomeCardTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15.333,
    fontWeight: '700',
    lineHeight: 23.418,
  },
  loghomeCardTitleLogbook: {
    color: '#3f51bf',
  },
  loghomeCardTitleCurrency: {
    color: '#b26d2c',
  },
  loghomeCardTitleDocuments: {
    color: '#2c9054',
  },
  loghomeCardTitleAnalytics: {
    color: '#717300',
  },
  loghomeCardTitleCertificates: {
    color: '#7335b2',
  },
  loghomeCardTitleExport: {
    color: '#007a99',
  },
  loghomeCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 11.5,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 16,
  },
});

export default LogHome;



