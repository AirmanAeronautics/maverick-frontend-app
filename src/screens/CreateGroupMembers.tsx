import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

const imgChannelBackground = Image.resolveAssetSource(require('../assets/channel Bg.png')).uri;
const imgArrowBack = Image.resolveAssetSource(require('../assets/arrow-back.png')).uri;
const imgSignal = Image.resolveAssetSource(require('../assets/icon-signal.png')).uri;
const imgWifi = Image.resolveAssetSource(require('../assets/icon-wifi.png')).uri;
const imgAvatar = Image.resolveAssetSource(require('../../profile.jpg')).uri;
const imgEditIcon = Image.resolveAssetSource(require('../../edit.svg')).uri;

type Contact = {
  id: string;
  name: string;
  subtitle: string;
  avatarUri: string;
};

const EditIcon = () => (
  <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <Path
      d="M7.62317 2.10527C8.02682 1.66794 8.22865 1.44928 8.44309 1.32174C8.96055 1.01398 9.59776 1.00441 10.1239 1.29649C10.3419 1.41754 10.5499 1.63005 10.966 2.05506C11.382 2.48008 11.5901 2.69258 11.7085 2.91532C11.9945 3.45276 11.9851 4.10366 11.6838 4.63228C11.559 4.85136 11.3449 5.05753 10.9168 5.46986L5.82316 10.3759C5.0119 11.1573 4.60625 11.548 4.09928 11.746C3.59232 11.944 3.03499 11.9295 1.92032 11.9003L1.76867 11.8964C1.42933 11.8875 1.25966 11.883 1.16103 11.7711C1.0624 11.6592 1.07586 11.4863 1.1028 11.1407L1.11742 10.953C1.19322 9.98005 1.23111 9.49363 1.4211 9.05634C1.61107 8.61906 1.93878 8.26405 2.59419 7.55392L7.62317 2.10527Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Path
      d="M7.04175 2.16602L10.8334 5.95768"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Path
      d="M7.58325 11.916H11.9166"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

type SelectedMemberChipProps = {
  contact: Contact;
};

const SelectedMemberChip = ({ contact }: SelectedMemberChipProps) => {
  return (
    <View style={styles.selectedMemberChip}>
      <View style={styles.selectedMemberImageContainer}>
        <Image source={{ uri: contact.avatarUri }} style={styles.selectedMemberAvatar} />
      </View>
      <Text style={styles.selectedMemberName} numberOfLines={1}>
        {contact.name}
      </Text>
    </View>
  );
};

type CreateGroupMembersProps = {
  selectedMembers?: Contact[];
  onBack?: () => void;
  onAddMembers?: () => void;
  onCreate?: (groupName: string) => void;
};

const CreateGroupMembers = ({
  selectedMembers = [],
  onBack,
  onAddMembers,
  onCreate,
}: CreateGroupMembersProps) => {
  const [groupName, setGroupName] = useState('');

  const handleCreate = () => {
    onCreate?.(groupName);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imgChannelBackground }} style={styles.background} blurRadius={5}>
        <View style={styles.backgroundOverlay} />
      </ImageBackground>
      <ScrollView
        style={StyleSheet.absoluteFill}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statusBar}>
          <Text style={styles.statusTime}>9:41</Text>
          <View style={styles.statusRight}>
            <Image source={{ uri: imgSignal }} style={styles.statusIcon} />
            <Image source={{ uri: imgWifi }} style={styles.statusIcon} />
            <View style={styles.batteryContainer}>
              <View style={styles.batteryOutline} />
              <View style={styles.batteryFill} />
              <View style={styles.batteryEnd} />
            </View>
          </View>
        </View>

        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.8} onPress={onBack}>
            <Image source={{ uri: imgArrowBack }} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Group</Text>
          <View style={styles.headerButtonPlaceholder} />
        </View>

        {/* Group Profile Image */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarImageContainer}>
              <Image source={{ uri: imgAvatar }} style={styles.avatarImage} />
            </View>
            <TouchableOpacity style={styles.avatarEditButton} activeOpacity={0.85}>
              <EditIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          {/* Name of the group */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Name of the group</Text>
            <View style={styles.inputShell}>
              <TextInput
                value={groupName}
                onChangeText={setGroupName}
                style={styles.inputText}
                placeholder="Enter your group name"
                placeholderTextColor="#454950"
              />
            </View>
          </View>

          {/* Selected Members Grid */}
          {selectedMembers.length > 0 ? (
            <View style={styles.selectedMembersGrid}>
              {selectedMembers.map(contact => (
                <SelectedMemberChip key={contact.id} contact={contact} />
              ))}
            </View>
          ) : (
            <View style={styles.addMembersButtonContainer}>
              <TouchableOpacity style={styles.addMembersButton} activeOpacity={0.8} onPress={onAddMembers}>
                <Text style={styles.addMembersText}>Add Members</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Footer Buttons */}
          <View style={styles.footerButtons}>
            <TouchableOpacity
              style={[styles.footerButton, styles.footerButtonSecondary]}
              activeOpacity={0.85}
              onPress={onBack}
            >
              <Text style={[styles.footerButtonText, styles.footerButtonTextSecondary]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.footerButton, styles.footerButtonPrimary]}
              activeOpacity={0.9}
              onPress={handleCreate}
            >
              <Text style={[styles.footerButtonText, styles.footerButtonTextPrimary]}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: APP_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: APP_WIDTH,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  scrollContent: {
    paddingBottom: 72,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusIcon: {
    width: 18,
    height: 12,
    resizeMode: 'contain',
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 27.4,
    height: 13,
    position: 'relative',
  },
  batteryOutline: {
    width: 25,
    height: 13,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  batteryFill: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 19,
    height: 9,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  batteryEnd: {
    position: 'absolute',
    right: 0,
    top: 4,
    width: 1.4,
    height: 4.22,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
    marginTop: 4,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonPlaceholder: {
    width: 40,
    height: 40,
  },
  backIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '600',
    color: '#0a0a0a',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 28,
  },
  avatarWrapper: {
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    overflow: 'visible',
  },
  avatarImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 62,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarEditButton: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#168aad',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#168aad',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  selectedMembersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  selectedMemberChip: {
    alignItems: 'center',
    width: (382 - 48) / 4,
    marginBottom: 16,
    gap: 8,
  },
  selectedMemberImageContainer: {
    position: 'relative',
  },
  selectedMemberAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  selectedMemberName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    maxWidth: 80,
  },
  addMembersButtonContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 16,
  },
  addMembersButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
    backgroundColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#168aad',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  addMembersText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  form: {
    gap: 24,
  },
  field: {
    gap: 12,
  },
  fieldLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '500',
    color: '#0a0a0a',
  },
  inputShell: {
    borderRadius: 18,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 20,
    minHeight: 56,
    justifyContent: 'center',
    backgroundColor: 'rgba(192, 250, 255, 0.18)',
    shadowColor: 'rgba(0, 82, 112, 0.35)',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  inputText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#454950',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 8,
  },
  footerButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonSecondary: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(22, 138, 173, 0.25)',
  },
  footerButtonPrimary: {
    backgroundColor: '#168aad',
    shadowColor: '#168aad',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  footerButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '600',
  },
  footerButtonTextSecondary: {
    color: '#0a516a',
  },
  footerButtonTextPrimary: {
    color: '#FFFFFF',
  },
});

export default CreateGroupMembers;

