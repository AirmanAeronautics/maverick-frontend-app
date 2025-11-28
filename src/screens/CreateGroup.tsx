import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Local image assets
const imgChannelBg = Image.resolveAssetSource(require('../../channel Bg.png')).uri;
const imgAvatar1 = Image.resolveAssetSource(require('../assets/avatar-1.png')).uri;
const imgAvatar2 = Image.resolveAssetSource(require('../assets/avatar-2.png')).uri;
const imgAvatar3 = Image.resolveAssetSource(require('../assets/avatar-3.png')).uri;
const imgAvatar4 = Image.resolveAssetSource(require('../assets/avatar-4.png')).uri;
const imgAvatar5 = Image.resolveAssetSource(require('../assets/avatar-5.png')).uri;

// Image assets from Figma
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgSearch = 'https://www.figma.com/api/mcp/asset/2dd6b37b-3679-466e-8433-2267ff11d6ec';
const imgArrowRight = Image.resolveAssetSource(require('../../arrow_right.svg')).uri;
const imgOutline = 'https://www.figma.com/api/mcp/asset/2cbf81d5-af1e-406c-8ac1-18ab97158cee';
const imgBatteryEnd = 'https://www.figma.com/api/mcp/asset/ab5cdee7-0691-4f7c-947a-465723bf2f95';
const imgFill = 'https://www.figma.com/api/mcp/asset/41ac1d0d-c06f-42f0-9fbb-f69491130d19';

type StatusBarBatteryProps = {
  className?: string;
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
    <View style={styles.batteryContainer}>
      <View style={styles.batteryOutline}>
        <Image source={{ uri: imgOutline }} style={styles.batteryOutlineImage} />
      </View>
      <View style={styles.batteryEnd}>
        <Image source={{ uri: imgBatteryEnd }} style={styles.batteryEndImage} />
      </View>
      <View style={styles.batteryFill}>
        <Image source={{ uri: imgFill }} style={styles.batteryFillImage} />
      </View>
    </View>
  );
};

type Contact = {
  id: string;
  name: string;
  subtitle: string;
  avatarUri: string;
};

const ALL_CONTACTS: Contact[] = [
  {
    id: 'steve1',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: imgAvatar1,
  },
  {
    id: 'kavin',
    name: 'Kavin',
    subtitle: 'Flight Instructor',
    avatarUri: imgAvatar2,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    subtitle: 'ATC',
    avatarUri: imgAvatar3,
  },
  {
    id: 'steve2',
    name: 'Steve Harrington',
    subtitle: 'Pilot',
    avatarUri: imgAvatar1,
  },
  {
    id: 'contact5',
    name: 'John Doe',
    subtitle: 'Co-Pilot',
    avatarUri: imgAvatar4,
  },
  {
    id: 'contact6',
    name: 'Jane Smith',
    subtitle: 'Ground Crew',
    avatarUri: imgAvatar5,
  },
  {
    id: 'contact7',
    name: 'Mike Johnson',
    subtitle: 'Air Traffic Controller',
    avatarUri: imgAvatar2,
  },
  {
    id: 'contact8',
    name: 'Sarah Williams',
    subtitle: 'Flight Dispatcher',
    avatarUri: imgAvatar3,
  },
  {
    id: 'contact9',
    name: 'David Brown',
    subtitle: 'Aircraft Mechanic',
    avatarUri: imgAvatar4,
  },
  {
    id: 'contact10',
    name: 'Emily Davis',
    subtitle: 'Ground Operations',
    avatarUri: imgAvatar5,
  },
];

const FREQUENTLY_CONTACTED = ALL_CONTACTS.slice(0, 4);
const CONNECTION_LIST = ALL_CONTACTS.slice(4);

type SelectedMemberChipProps = {
  contact: Contact;
  onRemove: (contactId: string) => void;
};

const SelectedMemberChip = ({ contact, onRemove }: SelectedMemberChipProps) => {
  return (
    <View style={styles.selectedMemberChip}>
      <View style={styles.selectedMemberImageContainer}>
        <Image source={{ uri: contact.avatarUri }} style={styles.selectedMemberAvatar} />
        <TouchableOpacity
          style={styles.selectedMemberCloseButton}
          onPress={() => onRemove(contact.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.selectedMemberCloseText}>×</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.selectedMemberName} numberOfLines={1}>
        {contact.name}
      </Text>
    </View>
  );
};

type ContactCardProps = {
  contact: Contact;
  isSelected: boolean;
  onToggle: (contact: Contact) => void;
};

const ContactCard = ({ contact, isSelected, onToggle }: ContactCardProps) => {
  return (
    <TouchableOpacity
      style={styles.contactCardContainer}
      activeOpacity={0.7}
      onPress={() => onToggle(contact)}
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
        start={{ x: 0.929, y: 0.847 }}
        end={{ x: 0, y: 0 }}
        style={styles.contactCardGradient}
      >
        <View style={styles.contactCardInnerBorder}>
          <View style={styles.contactCardContent}>
            <Image source={{ uri: contact.avatarUri }} style={styles.contactCardAvatar} />
            <View style={styles.contactCardTextContainer}>
              <Text style={styles.contactCardName} numberOfLines={1}>
                {contact.name}
              </Text>
              <Text style={styles.contactCardSubtitle} numberOfLines={1}>
                {contact.subtitle}
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                {isSelected && <View style={styles.checkboxInner} />}
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

type CreateGroupProps = {
  onContinue?: (selectedContactIds: string[]) => void;
  onBack?: () => void;
};

const CreateGroup = ({ onContinue, onBack }: CreateGroupProps) => {
  const [selectedContactIds, setSelectedContactIds] = useState<Set<string>>(new Set());

  const handleToggleContact = useCallback((contact: Contact) => {
    setSelectedContactIds(prev => {
      const next = new Set(prev);
      if (next.has(contact.id)) {
        next.delete(contact.id);
      } else {
        next.add(contact.id);
      }
      return next;
    });
  }, []);

  const handleRemoveSelected = useCallback((contactId: string) => {
    setSelectedContactIds(prev => {
      const next = new Set(prev);
      next.delete(contactId);
      return next;
    });
  }, []);

  const handleContinue = useCallback(() => {
    if (selectedContactIds.size > 0) {
      onContinue?.(Array.from(selectedContactIds));
    }
  }, [selectedContactIds, onContinue]);

  const selectedContacts = ALL_CONTACTS.filter(contact => selectedContactIds.has(contact.id));

  return (
    <View style={styles.container}>
      {/* Background with blur effect */}
      <ImageBackground
        source={{ uri: imgChannelBg }}
        style={styles.backgroundImage}
        blurRadius={50}
      >
        <View style={styles.backgroundOverlay} />
      </ImageBackground>

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <View style={styles.statusBarTimeContainer}>
            <Text style={styles.statusBarTime}>9:41</Text>
          </View>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7} onPress={onBack}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>New Group</Text>
          </View>
        </View>
        <View style={styles.headerButtonPlaceholder} />
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <View style={styles.searchInput}>
            <View style={styles.searchContent}>
              <Image source={{ uri: imgSearch }} style={styles.searchIcon} />
              <TextInput
                style={styles.searchTextInput}
                placeholder="Search contacts"
                placeholderTextColor="#454950"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Selected Members Row */}
      {selectedContacts.length > 0 && (
        <>
          <View style={styles.selectedMembersContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.selectedMembersScrollContent}
            >
              {selectedContacts.map(contact => (
                <SelectedMemberChip
                  key={contact.id}
                  contact={contact}
                  onRemove={handleRemoveSelected}
                />
              ))}
            </ScrollView>
          </View>
          {/* Separator */}
          <View style={styles.separator} />
        </>
      )}

      {/* Content */}
      <ScrollView
        style={[styles.scrollView, { marginTop: selectedContacts.length > 0 ? 302.007 : 189.507, paddingTop: 0 }]}
        contentContainerStyle={[styles.scrollContent, { paddingTop: 0, marginTop: 0, paddingVertical: 0 }]}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        contentInset={{ top: 0, bottom: 0 }}
        contentOffset={{ x: 0, y: 0 }}
      >
        {/* Frequently Contacted Section */}
        <View style={[styles.sectionContainer, { marginTop: 0, paddingTop: 0 }]}>
          <Text style={[styles.sectionTitle, { marginTop: 0, paddingTop: 0, lineHeight: 18, includeFontPadding: false }]}>Frequently contacted</Text>
          {FREQUENTLY_CONTACTED.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              isSelected={selectedContactIds.has(contact.id)}
              onToggle={handleToggleContact}
            />
          ))}
        </View>

        {/* Connection List Section */}
        {CONNECTION_LIST.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Connection list</Text>
            {CONNECTION_LIST.map(contact => (
              <ContactCard
                key={contact.id}
                contact={contact}
                isSelected={selectedContactIds.has(contact.id)}
                onToggle={handleToggleContact}
              />
            ))}
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Image source={{ uri: imgArrowRight }} style={styles.fabIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: APP_WIDTH,
    alignSelf: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: DESIGN_WIDTH,
    height: screenHeight,
    top: screenHeight / 2 - screenHeight / 2,
    left: (screenWidth > DESIGN_WIDTH ? DESIGN_WIDTH : screenWidth) / 2 - DESIGN_WIDTH / 2,
  },
  backgroundOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  statusBar: {
    height: 47,
    width: APP_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: 'transparent',
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTimeContainer: {
    height: 21,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    textAlign: 'center',
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusBarIcon: {
    width: 18,
    height: 12,
  },
  batteryContainer: {
    width: 27.401,
    height: 13,
    position: 'relative',
  },
  batteryOutline: {
    position: 'absolute',
    left: 0,
    right: 2.4,
    top: '50%',
    transform: [{ translateY: -6.5 }],
    height: 13,
  },
  batteryOutlineImage: {
    width: '100%',
    height: '100%',
  },
  batteryEnd: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -2.11 }],
    width: 1.401,
    height: 4.22,
  },
  batteryEndImage: {
    width: '100%',
    height: '100%',
  },
  batteryFill: {
    position: 'absolute',
    left: 2,
    right: 4.4,
    top: '50%',
    transform: [{ translateY: -4.5 }],
    height: 9,
  },
  batteryFillImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 55,
    left: 0,
    width: APP_WIDTH,
    height: 66.507,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19.93,
    zIndex: 10,
  },
  backButton: {
    width: 27.52,
    height: 27.52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 27.52,
    height: 27.52,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 21,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22.933,
  },
  headerButtonPlaceholder: {
    width: 27.52,
    height: 27.52,
  },
  searchContainer: {
    position: 'absolute',
    top: 121.507,
    left: '50%',
    transform: [{ translateX: -191 }],
    width: 382,
    height: 44,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInput: {
    height: 44,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 25,
    paddingRight: 94,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  searchContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchTextInput: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#454950',
    height: 20,
  },
  selectedMembersContainer: {
    position: 'absolute',
    top: 189.507,
    left: 0,
    right: 0,
    height: 100,
    paddingHorizontal: 24,
    zIndex: 9,
    backgroundColor: 'transparent',
  },
  separator: {
    position: 'absolute',
    top: 289.507,
    left: 24,
    right: 24,
    height: 0.5,
    backgroundColor: '#C2EEFF',
    zIndex: 9,
  },
  selectedMembersScrollContent: {
    paddingVertical: 8,
    gap: 12,
    flexDirection: 'row',
  },
  selectedMemberChip: {
    alignItems: 'center',
    marginRight: 12,
    width: 70,
  },
  selectedMemberImageContainer: {
    position: 'relative',
    marginBottom: 4,
  },
  selectedMemberAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  selectedMemberCloseButton: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  selectedMemberCloseText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 16,
  },
  selectedMemberName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    maxWidth: 70,
  },
  scrollView: {
    flex: 1,
    marginTop: 121.507,
    paddingTop: 0,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
    paddingTop: 0,
    marginTop: 0,
    alignItems: 'center',
  },
  sectionContainer: {
    width: 382,
    gap: 8,
    marginBottom: 16,
    marginTop: 0,
    paddingTop: 0,
  },
  sectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    marginTop: 0,
    paddingTop: 0,
    paddingLeft: 4,
  },
  contactCardContainer: {
    marginBottom: 8,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: 382,
    height: 82,
  },
  contactCardGradient: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    borderRadius: 14,
    justifyContent: 'center',
  },
  contactCardInnerBorder: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  contactCardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 58,
  },
  contactCardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  contactCardTextContainer: {
    flex: 1,
    gap: 4,
  },
  contactCardName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 21.281,
  },
  contactCardSubtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: '400',
    color: '#373737',
    lineHeight: 16,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#168aad',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  fab: {
    position: 'absolute',
    left: APP_WIDTH * 0.8 + 4,
    top: 788,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#168aad',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#168aad',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    padding: 0,
  },
  fabIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
});

export default CreateGroup;

