// DO NOT MODIFY OTHER FILES — addlogSCREEN ONLY
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Switch,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const APP_WIDTH = Math.min(screenWidth, DESIGN_WIDTH);

// Status bar icons - using Figma CDN or data URIs
const imgArrowArrowLeftMd = 'https://www.figma.com/api/mcp/asset/210acb78-c53a-424d-84fb-a4668cd15385';
const imgWifi = 'https://www.figma.com/api/mcp/asset/9a27aef4-7569-4ad7-a1d0-5c575f675496';
const imgIconMobileSignal = 'https://www.figma.com/api/mcp/asset/d037c77c-91be-4f2a-8c8b-ea8b89ca2a85';
const imgStatusBarBattery = 'https://www.figma.com/api/mcp/asset/battery-status-bar';

// Section icons - using data URIs or Figma CDN
const imgManualEntryIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%23168aad" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/%3E%3C/svg%3E';
// Flight Entry card images
const imgImage1 = Image.resolveAssetSource(require('../assets/Image1.png')).uri;
const imgImage2 = Image.resolveAssetSource(require('../assets/Image2.png')).uri;
const imgImage3 = Image.resolveAssetSource(require('../assets/Image3.png')).uri;
const imgImage4 = Image.resolveAssetSource(require('../assets/Image4.png')).uri;
const imgImage5 = Image.resolveAssetSource(require('../assets/Image5.png')).uri;
const imgImage6 = Image.resolveAssetSource(require('../assets/Image6.png')).uri;
const imgImage7 = Image.resolveAssetSource(require('../assets/Image7.png')).uri;
const imgImage8 = Image.resolveAssetSource(require('../assets/Image8.png')).uri;
const imgChevronDown = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"%3E%3Cpath d="M4 6l4 4 4-4" stroke="%23000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/%3E%3C/svg%3E';
const imgTablerUpload = 'data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 9L12 4M12 4L17 9M12 4V16" stroke="%23000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E';
const imgPlus = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"%3E%3Cpath d="M 8 3 L 8 13 M 3 8 L 8 3 L 13 8" stroke="%23fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E';
const imgAiIcon = Image.resolveAssetSource(require('../../Ai.svg')).uri;
const imgCalendar = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"%3E%3Crect x="3" y="4" width="14" height="12" rx="1" stroke="%23000" stroke-width="1.5" fill="none"/%3E%3Cpath d="M 3 8 L 17 8" stroke="%23000" stroke-width="1.5"/%3E%3Ccircle cx="7" cy="6" r="0.5" fill="%23000"/%3E%3Ccircle cx="13" cy="6" r="0.5" fill="%23000"/%3E%3C/svg%3E';
const imgDeleteIcon = Image.resolveAssetSource(require('../../fluent_delete-16-regular.svg')).uri;

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
    <View style={styles.batteryContainer}>
      <Image source={{ uri: imgStatusBarBattery }} style={styles.batteryImage} />
    </View>
  );
};

type AddLogProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const AddLog = ({ onBack, onSave }: AddLogProps) => {
  const [isFlightContentExpanded, setIsFlightContentExpanded] = useState(true);
  const [isPeopleRolesExpanded, setIsPeopleRolesExpanded] = useState(true);
  const [isAircraftExpanded, setIsAircraftExpanded] = useState(true);
  const [isTimesExpanded, setIsTimesExpanded] = useState(true);
  const [isCrossCountryExpanded, setIsCrossCountryExpanded] = useState(true);
  const [isIncidentsExpanded, setIsIncidentsExpanded] = useState(true);
  const [isAttachmentsExpanded, setIsAttachmentsExpanded] = useState(true);
  const [isReviewExpanded, setIsReviewExpanded] = useState(true);
  const [hasIncident, setHasIncident] = useState(true);

  // Form state
  const [dateOfFlight, setDateOfFlight] = useState('');
  const [departureAirport, setDepartureAirport] = useState('KSDF');
  const [arrivalAirport, setArrivalAirport] = useState('KCHA');
  const [route, setRoute] = useState('KPQC -> KSDL');
  const [flightDescription, setFlightDescription] = useState('');
  const [yourRole, setYourRole] = useState('PIC');
  const [instructorName, setInstructorName] = useState('John Doe');
  const [studentName, setStudentName] = useState('Jane Smith');
  const [picName, setPicName] = useState('Captain Name');
  const [coPilotName, setCoPilotName] = useState('First Officer Name');
  const [aircraft, setAircraft] = useState('');
  const [tailNumber, setTailNumber] = useState('N12345');
  const [aircraftType, setAircraftType] = useState('Cessna 172');
  const [aircraftManufacturer, setAircraftManufacturer] = useState('Cessna');
  const [aircraftModel, setAircraftModel] = useState('172 Skyhawk');
  const [totalTime, setTotalTime] = useState('');
  const [picTime, setPicTime] = useState('');
  const [dualTime, setDualTime] = useState('');
  const [soloTime, setSoloTime] = useState('');
  const [crossCountryTime, setCrossCountryTime] = useState('');
  const [nightTime, setNightTime] = useState('');
  const [instrumentTime, setInstrumentTime] = useState('');
  const [simulatorTime, setSimulatorTime] = useState('');
  const [dayLandings, setDayLandings] = useState('');
  const [nightLandings, setNightLandings] = useState('');
  const [crossCountryTimeIfr, setCrossCountryTimeIfr] = useState('');
  const [ifrCrossCountryTime, setIfrCrossCountryTime] = useState('');
  const [numberOfApproaches, setNumberOfApproaches] = useState('');
  const [dayLandingsIfr, setDayLandingsIfr] = useState('');
  const [nightLandingsIfr, setNightLandingsIfr] = useState('');
  const [remarks, setRemarks] = useState('');

  // Multi-leg flight state
  const [isMultiLegMode, setIsMultiLegMode] = useState(false);
  const [legs, setLegs] = useState<Array<{ id: number; from: string; to: string; time: string }>>([
    { id: 1, from: '', to: '', time: '' },
  ]);

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeft}>
          <Text style={styles.statusBarTime}>9:41</Text>
        </View>
        <View style={styles.statusBarRight}>
          <Image source={{ uri: imgIconMobileSignal }} style={styles.statusBarIcon} />
          <Image source={{ uri: imgWifi }} style={styles.statusBarIcon} />
          <StatusBarBattery />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Image source={{ uri: imgArrowArrowLeftMd }} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Flight</Text>
        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Flight Entry</Text>
          <Text style={styles.progressText}>50% Complete</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      {/* Scroll View */}
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Manual Entry Section */}
        <View style={styles.manualEntryCard}>
          <View style={styles.manualEntryContent}>
            <Text style={styles.manualEntryTitle}>Manual Entry</Text>
            <Text style={styles.manualEntryDescription}>Enter your details manually and get summaries for you flight</Text>
          </View>
          <TouchableOpacity style={styles.aiButton}>
            <Image source={{ uri: imgAiIcon }} style={styles.aiIcon} />
            <Text style={styles.aiButtonText}>Auto-Fill with AI</Text>
          </TouchableOpacity>
        </View>

        {/* Flight Content Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsFlightContentExpanded(!isFlightContentExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage1 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Flight Content</Text>
                <Text style={styles.sectionDescription}>Key flight details and content about the flight</Text>
              </View>
            </View>
            <Image
              source={{ uri: imgChevronDown }}
              style={[styles.chevronIcon, isFlightContentExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isFlightContentExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>
                  Date of Flight <Text style={styles.required}>*</Text>
                </Text>
                <View style={styles.inputContainer}>
                  <Image source={{ uri: imgCalendar }} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor="#A0A0A0"
                    value={dateOfFlight}
                    onChangeText={setDateOfFlight}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>
                  Departure Airport <Text style={styles.required}>*</Text>
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={departureAirport}
                    onChangeText={setDepartureAirport}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>
                  Arrival Airport <Text style={styles.required}>*</Text>
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={arrivalAirport}
                    onChangeText={setArrivalAirport}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Route (Optional)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={route}
                    onChangeText={setRoute}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Flight Description (Optional)</Text>
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textArea}
                    placeholder="Description of the flight..."
                    placeholderTextColor="#A0A0A0"
                    value={flightDescription}
                    onChangeText={setFlightDescription}
                    multiline
                    numberOfLines={4}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* People & Roles Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsPeopleRolesExpanded(!isPeopleRolesExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage2 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>People & Roles</Text>
                <Text style={styles.sectionDescription}>Operate only as PIC, student, instructional, or crew member</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isPeopleRolesExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isPeopleRolesExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>
                  Your Role <Text style={styles.required}>*</Text>
                </Text>
                <TouchableOpacity style={[styles.inputContainer, styles.dropdownContainer]}>
                  <TextInput
                    style={styles.input}
                    value={yourRole}
                    onChangeText={setYourRole}
                    editable={false}
                  />
                  <Image source={{ uri: imgChevronDown }} style={styles.dropdownIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Instructor Name (If applicable)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={instructorName}
                    onChangeText={setInstructorName}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Student Name (If applicable)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={studentName}
                    onChangeText={setStudentName}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>PIC Name (If applicable)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={picName}
                    onChangeText={setPicName}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Co-Pilot Name (If applicable)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={coPilotName}
                    onChangeText={setCoPilotName}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Aircraft Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsAircraftExpanded(!isAircraftExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage3 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Aircraft</Text>
                <Text style={styles.sectionDescription}>Aircraft registration, total time logged</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isAircraftExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isAircraftExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>
                  Aircraft <Text style={styles.required}>*</Text>
                </Text>
                <TouchableOpacity style={[styles.inputContainer, styles.dropdownContainer]}>
                  <TextInput
                    style={styles.input}
                    placeholder="Select Aircraft"
                    placeholderTextColor="#A0A0A0"
                    value={aircraft}
                    onChangeText={setAircraft}
                    editable={false}
                  />
                  <Image source={{ uri: imgChevronDown }} style={styles.dropdownIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Tail Number (Optional)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={tailNumber}
                    onChangeText={setTailNumber}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Aircraft Type (Optional)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={aircraftType}
                    onChangeText={setAircraftType}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Aircraft Manufacturer (Optional)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={aircraftManufacturer}
                    onChangeText={setAircraftManufacturer}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Aircraft Model (Optional)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={aircraftModel}
                    onChangeText={setAircraftModel}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Times Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsTimesExpanded(!isTimesExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage4 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Times</Text>
                <Text style={styles.sectionDescription}>Flight times and all related details.</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isTimesExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isTimesExpanded && (
            <View style={styles.sectionContent}>
              {!isMultiLegMode ? (
                <>
                  <View style={styles.subsectionHeader}>
                    <Text style={styles.subsectionTitle}>Flight Times</Text>
                    <Text style={styles.subsectionDescription}>Enter flight times. You can use multi-leg flights or a single total time.</Text>
                  </View>
                  <View style={styles.formField}>
                    <Text style={styles.formLabel}>
                      Total Time (Hours) <Text style={styles.required}>*</Text>
                    </Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        value={totalTime}
                        onChangeText={setTotalTime}
                      />
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={styles.autoFillButton}
                    onPress={() => setIsMultiLegMode(true)}
                  >
                    <Image source={{ uri: imgPlus }} style={styles.autoFillIcon} />
                    <Text style={styles.autoFillText}>Use Multi-leg Flight</Text>
                  </TouchableOpacity>
                  <View style={styles.formField}>
                    <Text style={styles.formLabel}>PIC Time (Hours)</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        value={picTime}
                        onChangeText={setPicTime}
                      />
                    </View>
                  </View>
                  <View style={styles.formField}>
                    <Text style={styles.formLabel}>SIC Time (hours)</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        value={dualTime}
                        onChangeText={setDualTime}
                      />
                    </View>
                  </View>
                  <View style={styles.formField}>
                    <Text style={styles.formLabel}>Day Time (hours)</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        value={soloTime}
                        onChangeText={setSoloTime}
                      />
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.multilegHeader}>
                    <Text style={styles.multilegTitle}>Multi-leg Flight</Text>
                    <TouchableOpacity onPress={() => setIsMultiLegMode(false)}>
                      <Text style={styles.switchSingleButton}>Switch to Single Time</Text>
                    </TouchableOpacity>
                  </View>
                  {legs.map((leg, index) => (
                    <View key={leg.id} style={styles.legCard}>
                      <View style={styles.legCardHeader}>
                        <Text style={styles.legTitle}>Leg {index + 1}</Text>
                        {legs.length > 1 && (
                          <TouchableOpacity
                            style={styles.legDeleteButton}
                            onPress={() => setLegs(legs.filter((l) => l.id !== leg.id))}
                          >
                            <Image source={{ uri: imgDeleteIcon }} style={styles.legDeleteIcon} />
                          </TouchableOpacity>
                        )}
                      </View>
                      <View style={styles.legFieldsRow}>
                        <View style={[styles.formField, styles.legFieldHalf]}>
                          <Text style={styles.formLabel}>From</Text>
                          <View style={styles.inputContainer}>
                            <TextInput
                              style={styles.input}
                              placeholder="Departure"
                              value={leg.from}
                              onChangeText={(text) => {
                                const updatedLegs = [...legs];
                                updatedLegs[index].from = text;
                                setLegs(updatedLegs);
                              }}
                            />
                          </View>
                        </View>
                        <View style={[styles.formField, styles.legFieldHalf]}>
                          <Text style={styles.formLabel}>To</Text>
                          <View style={styles.inputContainer}>
                            <TextInput
                              style={styles.input}
                              placeholder="Arrival"
                              value={leg.to}
                              onChangeText={(text) => {
                                const updatedLegs = [...legs];
                                updatedLegs[index].to = text;
                                setLegs(updatedLegs);
                              }}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={[styles.formField, styles.legTimeField]}>
                        <Text style={styles.formLabel}>Leg Time (Hours)</Text>
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter leg time"
                            value={leg.time}
                            onChangeText={(text) => {
                              const updatedLegs = [...legs];
                              updatedLegs[index].time = text;
                              setLegs(updatedLegs);
                            }}
                          />
                        </View>
                      </View>
                      <TouchableOpacity
                        style={styles.addLegButton}
                        onPress={() => {
                          const newLegId = Math.max(...legs.map((l) => l.id), 0) + 1;
                          setLegs([...legs, { id: newLegId, from: '', to: '', time: '' }]);
                        }}
                      >
                        <Image source={{ uri: imgPlus }} style={styles.addLegIcon} />
                        <Text style={styles.addLegText}>Add Leg</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </>
              )}
            </View>
          )}
        </View>

        {/* Cross-Country & IFR Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsCrossCountryExpanded(!isCrossCountryExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage5 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Cross-Country & IFR</Text>
                <Text style={styles.sectionDescription}>Record carrying this information (optional).</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isCrossCountryExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isCrossCountryExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Cross-Country Time (Hours)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={crossCountryTimeIfr}
                    onChangeText={setCrossCountryTimeIfr}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>IFR Cross-Country Time (Hours)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={ifrCrossCountryTime}
                    onChangeText={setIfrCrossCountryTime}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Number of Approaches</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={numberOfApproaches}
                    onChangeText={setNumberOfApproaches}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Day Landings</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={dayLandingsIfr}
                    onChangeText={setDayLandingsIfr}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Night Landings</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={nightLandingsIfr}
                    onChangeText={setNightLandingsIfr}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Incidents & Remarks Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsIncidentsExpanded(!isIncidentsExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage6 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Incidents & Remarks</Text>
                <Text style={styles.sectionDescription}>Incidents and Occurrences.</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isIncidentsExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isIncidentsExpanded && (
            <View style={styles.sectionContent}>
              <View style={[styles.formField, styles.incidentToggleField]}>
                <Text style={styles.formLabel}>This flight had an incident</Text>
                <View style={styles.toggleContainer}>
                  <Switch
                    value={hasIncident}
                    onValueChange={setHasIncident}
                    trackColor={{ false: '#E0E0E0', true: '#168aad' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Remarks (Optional)</Text>
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textArea}
                    placeholder="Enter any notes or remarks about the flight..."
                    placeholderTextColor="#A0A0A0"
                    value={remarks}
                    onChangeText={setRemarks}
                    multiline
                    numberOfLines={4}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Attachments Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsAttachmentsExpanded(!isAttachmentsExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage7 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Attachments</Text>
                <Text style={styles.sectionDescription}>Save documents and attach files.</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isAttachmentsExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isAttachmentsExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.subsectionHeader}>
                <Text style={styles.subsectionTitle}>Attachments</Text>
                <Text style={styles.subsectionDescription}>Upload photos or documents related to this flight. (Max 10 files, 5MB each)</Text>
              </View>
              <TouchableOpacity style={styles.uploadButton}>
                <Image source={{ uri: imgTablerUpload }} style={styles.uploadIcon} />
                <Text style={styles.uploadText}>Choose Files</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Review Section */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setIsReviewExpanded(!isReviewExpanded)}
          >
            <View style={styles.sectionHeaderLeft}>
              <Image source={{ uri: imgImage8 }} style={styles.sectionIcon} />
              <View style={styles.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Review</Text>
                <Text style={styles.sectionDescription}>Review all your added flight details.</Text>
              </View>
            </View>
            <Image
              source={imgChevronDown}
              style={[styles.chevronIcon, isReviewExpanded && styles.chevronExpanded]}
            />
          </TouchableOpacity>
          {isReviewExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.reviewItem}>
                <Text style={styles.reviewLabel}>Flight Content:</Text>
                <Text style={styles.reviewText}>Date: 12-12-2023</Text>
                <Text style={styles.reviewText}>Route: KSDF -&gt; KCHA</Text>
              </View>
              <View style={styles.reviewItem}>
                <Text style={styles.reviewLabel}>People & Roles:</Text>
                <Text style={styles.reviewText}>Your Role: PIC</Text>
              </View>
              <View style={styles.reviewItem}>
                <Text style={styles.reviewLabel}>Aircraft:</Text>
                <Text style={styles.reviewText}>Not selected</Text>
              </View>
              <View style={styles.reviewItem}>
                <Text style={styles.reviewLabel}>Times:</Text>
                <Text style={styles.reviewText}>Total Time: 0.0 Hours</Text>
                <Text style={styles.reviewText}>Starting flight: 1</Text>
                <Text style={styles.reviewText}>Leg 1 - 0.0 hrs</Text>
                <Text style={styles.reviewText}>Leg 2 - 0.0 hrs</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: APP_WIDTH,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  statusBar: {
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTime: {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.32,
    lineHeight: 21,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  backButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.18,
    lineHeight: 25.2,
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  saveText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#168aad',
    letterSpacing: -0.16,
    lineHeight: 22.4,
  },
  progressContainer: {
    flexDirection: 'column',
    gap: 8,
    paddingTop: 26,
    paddingBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    height: 95,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.18,
    lineHeight: 25.2,
  },
  progressBar: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#2497B4',
    borderRadius: 6,
  },
  progressText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#585858',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 68,
    paddingBottom: 100,
    gap: 16,
  },
  manualEntryCard: {
    borderWidth: 1,
    borderColor: '#E6E9F0',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  manualEntryContent: {
    flex: 1,
    gap: 4,
  },
  manualEntryTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0A0F1F',
    letterSpacing: -0.16,
    lineHeight: 22.4,
  },
  manualEntryDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#585858',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  aiButton: {
    backgroundColor: '#168aad',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  aiIcon: {
    width: 16,
    height: 16,
  },
  aiButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  sectionCard: {
    borderWidth: 1,
    borderColor: '#E6E9F0',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  sectionHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  sectionIcon: {
    width: 40,
    height: 40,
  },
  sectionTitleGroup: {
    gap: 4,
    flex: 1,
  },
  sectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0A0F1F',
    letterSpacing: -0.16,
    lineHeight: 22.4,
  },
  sectionDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#585858',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  chevronIcon: {
    width: 16,
    height: 16,
  },
  chevronExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 16,
  },
  subsectionHeader: {
    gap: 4,
    marginBottom: 8,
  },
  subsectionTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0A0F1F',
    letterSpacing: -0.16,
    lineHeight: 22.4,
  },
  subsectionDescription: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#585858',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  formField: {
    gap: 8,
  },
  formLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  required: {
    color: '#FF0000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: '#FFFFFF',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#000000',
    letterSpacing: -0.16,
    lineHeight: 22.4,
    padding: 0,
  },
  dropdownContainer: {
    cursor: 'pointer',
  },
  dropdownIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    minHeight: 100,
  },
  textArea: {
    width: '100%',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: '#000000',
    letterSpacing: -0.16,
    lineHeight: 22.4,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  autoFillButton: {
    backgroundColor: '#168aad',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    width: '100%',
    fontFamily: 'Helvetica Neue',
  },
  autoFillIcon: {
    width: 16,
    height: 16,
  },
  autoFillText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  multilegHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  multilegTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0A0F1F',
    letterSpacing: -0.16,
    lineHeight: 22.4,
  },
  switchSingleButton: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#168aad',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  legCard: {
    borderWidth: 1,
    borderColor: '#E6E9F0',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    gap: 16,
    width: '100%',
    overflow: 'hidden',
  },
  legCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  legTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0A0F1F',
    letterSpacing: -0.16,
    lineHeight: 22.4,
  },
  legDeleteButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legDeleteIcon: {
    width: 16,
    height: 16,
  },
  legFieldsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  legFieldHalf: {
    flex: 1,
    minWidth: 0,
  },
  addLegButton: {
    backgroundColor: '#168aad',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    width: '100%',
  },
  addLegIcon: {
    width: 16,
    height: 16,
  },
  addLegText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  legTimeField: {
    flexDirection: 'row',
    gap: 150,
    alignItems: 'center',
  },
  incidentToggleField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 0,
  },
  toggleContainer: {
    alignItems: 'center',
    flexShrink: 0,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  uploadIcon: {
    width: 20,
    height: 20,
  },
  uploadText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
  reviewItem: {
    gap: 4,
    marginBottom: 16,
  },
  reviewLabel: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '500',
    color: '#0A0F1F',
    letterSpacing: -0.16,
    lineHeight: 22.4,
    marginBottom: 4,
  },
  reviewText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: '#585858',
    letterSpacing: -0.14,
    lineHeight: 19.6,
  },
});

export default AddLog;

