// DO NOT MODIFY OTHER FILES — documents SCREEN ONLY
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

// Local image assets
const imgArrowArrowLeftMd = Image.resolveAssetSource(require('../../Arrow_Left_MD.svg')).uri;
const imgMobileSignal = Image.resolveAssetSource(require('../../Mobile Signal.svg')).uri;
const imgWifi = Image.resolveAssetSource(require('../../Wifi.svg')).uri;
const imgBattery = Image.resolveAssetSource(require('../../_StatusBar-battery.svg')).uri;
const imgAdd = Image.resolveAssetSource(require('../../add.svg')).uri;
const imgDelete = Image.resolveAssetSource(require('../../fluent_delete-16-regular.svg')).uri;
const imgDownload = Image.resolveAssetSource(require('../../iconoir_download.svg')).uri;

// Document data
const documents = [
  { id: 1, name: 'Pilot license.pdf', uploaded: '18 days ago', hasDelete: true },
  { id: 2, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 3, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 4, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 5, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
  { id: 6, name: 'Pilot license.png', uploaded: '18 days ago', hasDelete: true },
];

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
    <View style={styles.docsBatteryContainer}>
      <Image source={{ uri: imgBattery }} style={styles.docsBatteryImage} />
    </View>
  );
};

type DocumentsProps = {
  onBack?: () => void;
};

const Documents = ({ onBack }: DocumentsProps = {}) => {
  return (
    <View style={styles.docsContainer}>
      {/* Status Bar */}
      <View style={styles.docsStatusBar}>
        <View style={styles.docsStatusBarLeft}>
          <View style={styles.docsStatusBarTimeContainer}>
            <Text style={styles.docsStatusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.docsStatusBarRight}>
          <Image source={{ uri: imgMobileSignal }} style={styles.docsStatusBarIcon} />
          <Image source={{ uri: imgWifi }} style={[styles.docsStatusBarWifi, { marginLeft: 5 }]} />
          <View style={{ marginLeft: 5 }}>
            <StatusBarBattery />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.docsHeader}>
        <TouchableOpacity style={styles.docsBackButton} onPress={onBack} activeOpacity={0.7}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.docsBackButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.docsTitle}>Documents</Text>
        <View style={styles.docsHeaderSpacer} />
      </View>

      {/* Content */}
      <ScrollView
        style={styles.docsScrollView}
        contentContainerStyle={styles.docsScrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.docsSectionTitle}>Aviation Documents</Text>

        {documents.map((doc) => (
          <View key={doc.id} style={styles.docsCard}>
            <View style={styles.docsCardContent}>
              <Text style={styles.docsCardFileName}>{doc.name}</Text>
              <Text style={styles.docsCardUploadDate}>Uploaded {doc.uploaded}</Text>
              <View style={styles.docsCardBadges}>
                <View style={styles.docsBadge}>
                  <Text style={styles.docsBadgeText}>Synced</Text>
                </View>
                <View style={[styles.docsBadge, { marginLeft: 8 }]}>
                  <Text style={styles.docsBadgeText}>License</Text>
                </View>
              </View>
            </View>
            <View style={styles.docsCardActions}>
              <TouchableOpacity style={styles.docsActionButton} activeOpacity={0.7}>
                <Image source={{ uri: imgDownload }} style={styles.docsDownloadIcon} />
              </TouchableOpacity>
              {doc.hasDelete && (
                <TouchableOpacity style={[styles.docsActionButton, { marginLeft: 12 }]} activeOpacity={0.7}>
                  <Image source={{ uri: imgDelete }} style={styles.docsDeleteIcon} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.docsFab} activeOpacity={0.8}>
        <Text style={styles.docsFabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  docsContainer: {
    flex: 1,
    width: APP_WIDTH,
    backgroundColor: '#FFFFFF',
  },
  docsStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: APP_WIDTH,
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    zIndex: 10,
    overflow: 'hidden',
  },
  docsStatusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docsStatusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  docsStatusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
    lineHeight: 21,
  },
  docsStatusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docsStatusBarIcon: {
    width: 18,
    height: 12,
  },
  docsStatusBarWifi: {
    width: 17,
    height: 11.834,
  },
  docsBatteryContainer: {
    width: 28,
    height: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  docsBatteryImage: {
    width: '100%',
    height: '100%',
  },
  docsHeader: {
    position: 'absolute',
    top: 63,
    left: 0,
    right: 0,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  docsBackButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  docsBackButtonIcon: {
    width: 24,
    height: 24,
  },
  docsTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    fontFamily: 'Helvetica Neue',
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  docsHeaderSpacer: {
    width: 27.52,
  },
  docsScrollView: {
    marginTop: 127,
    flex: 1,
  },
  docsScrollViewContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  docsSectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 25,
    letterSpacing: -0.41,
    marginBottom: 16,
  },
  docsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  docsCardContent: {
    flex: 1,
    marginRight: 12,
  },
  docsCardFileName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20,
    letterSpacing: -0.32,
    marginBottom: 4,
  },
  docsCardUploadDate: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    lineHeight: 18,
    letterSpacing: -0.15,
    marginBottom: 8,
  },
  docsCardBadges: {
    flexDirection: 'row',
    marginTop: 4,
  },
  docsBadge: {
    backgroundColor: '#CEECFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  docsBadgeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '300',
    color: '#272727',
    lineHeight: 16,
  },
  docsCardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docsActionButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  docsDownloadIcon: {
    width: 20,
    height: 20,
  },
  docsDeleteIcon: {
    width: 20,
    height: 20,
  },
  docsFab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#168AAD',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 100,
  },
  docsFabIcon: {
    fontSize: 32,
    fontWeight: '300',
    color: '#FFFFFF',
    lineHeight: 32,
  },
});

export default Documents;









