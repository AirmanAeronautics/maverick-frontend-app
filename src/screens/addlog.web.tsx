// DO NOT MODIFY OTHER FILES — addlogSCREEN ONLY
import React, { useState, useEffect } from 'react';
import './addlog.css';

// Status bar icons
import mobileSignalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import statusBarBatteryIcon from '../../_StatusBar-battery.svg?url';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';

// Section icons
import manualEntryIcon from '../assets/addflight-icons/manual-entry-icon.svg?url';
// Flight Entry card images
import image1 from '../assets/Image1.png?url';
import image2 from '../assets/Image2.png?url';
import image3 from '../assets/Image3.png?url';
import image4 from '../assets/Image4.png?url';
import image5 from '../assets/Image5.png?url';
import image6 from '../assets/Image6.png?url';
import image7 from '../assets/Image7.png?url';
import image8 from '../assets/Image8.png?url';
import chevronDownIcon from '../assets/addflight-icons/chevron-down.svg?url';
import tablerUploadIcon from '../../tabler_upload.svg?url';
import plusIcon from '../assets/addflight-icons/plus.svg?url';
import aiIcon from '../../Ai.svg?url';
import calendarIcon from '../assets/calendar-icon.svg?url';
import deleteIcon from '../../fluent_delete-16-regular.svg?url';
import closeIcon from '../assets/close-icon.svg?url';
import paperAirplaneIcon from '../assets/clarity_plane-line.svg?url';
import documentEditIcon from '../assets/hugeicons_license-draft.svg?url';
import autofillTextIcon from '../assets/fluent_textbox-16-regular.svg?url';
import bulkImportsIcon from '../assets/fluent-mdl2_bulk-upload.svg?url';

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
    <div className="addlog-battery-container">
      <img src={statusBarBatteryIcon} alt="Battery level" className="addlog-status-bar-battery" />
    </div>
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
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [route, setRoute] = useState('');
  const [flightDescription, setFlightDescription] = useState('');
  const [yourRole, setYourRole] = useState('PIC');
  const [instructorName, setInstructorName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [picName, setPicName] = useState('');
  const [coPilotName, setCoPilotName] = useState('');
  const [aircraft, setAircraft] = useState('');
  const [tailNumber, setTailNumber] = useState('');
  const [aircraftType, setAircraftType] = useState('');
  const [aircraftManufacturer, setAircraftManufacturer] = useState('');
  const [aircraftModel, setAircraftModel] = useState('');
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

  // Popup state
  const [showLogPopup, setShowLogPopup] = useState(false);
  const [showAutofillPopup, setShowAutofillPopup] = useState(false);

  // Dropdown state
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isAircraftDropdownOpen, setIsAircraftDropdownOpen] = useState(false);

  // Dropdown options
  const roleOptions = ['PIC', 'Student', 'Instructor', 'Co-Pilot', 'SIC'];
  const aircraftOptions = ['Cessna 172', 'Cessna 152', 'Piper PA-28', 'Beechcraft Bonanza', 'Cirrus SR20', 'Cirrus SR22', 'Other'];

  const handleSaveClick = () => {
    setShowLogPopup(true);
  };

  const handleClosePopup = () => {
    setShowLogPopup(false);
  };

  const handlePublishFlight = () => {
    setShowLogPopup(false);
    if (onSave) {
      onSave();
    }
  };

  const handleSaveAsDraft = () => {
    setShowLogPopup(false);
    if (onSave) {
      onSave();
    }
  };

  const handleAutofillClick = () => {
    setShowAutofillPopup(true);
  };

  const handleCloseAutofillPopup = () => {
    setShowAutofillPopup(false);
  };

  const handleAutofillWithText = () => {
    setShowAutofillPopup(false);
    // Handle autofill with text action
  };

  const handleBulkImports = () => {
    setShowAutofillPopup(false);
    // Handle bulk imports action
  };

  // Dropdown handlers
  const handleRoleSelect = (role: string) => {
    setYourRole(role);
    setIsRoleDropdownOpen(false);
  };

  const handleAircraftSelect = (selectedAircraft: string) => {
    setAircraft(selectedAircraft);
    setIsAircraftDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.addlog-role-dropdown-wrapper') && !target.closest('.addlog-aircraft-dropdown-wrapper')) {
        setIsRoleDropdownOpen(false);
        setIsAircraftDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`addlog-container ${showLogPopup || showAutofillPopup ? 'addlog-popup-open' : ''}`}>
      {/* Status Bar */}
      <div className="addlog-status-bar">
        <div className="addlog-status-bar-left">
          <span className="addlog-status-bar-time">9:41</span>
        </div>
        <div className="addlog-status-bar-right">
          <img src={mobileSignalIcon} alt="Signal" className="addlog-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="addlog-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="addlog-header">
        <button className="addlog-back-button" onClick={onBack} type="button">
          <img src={arrowLeftIcon} alt="Back" className="addlog-back-icon" />
        </button>
        <h2 className="addlog-header-title">Add Flight</h2>
        <button className="addlog-save-button" type="button" onClick={handleSaveClick}>
          <span className="addlog-save-text">Save</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="addlog-progress-container">
        <div className="addlog-progress-header">
          <span className="addlog-progress-label">Flight Entry</span>
          <span className="addlog-progress-text">50% Complete</span>
        </div>
        <div className="addlog-progress-bar">
          <div className="addlog-progress-fill"></div>
        </div>
      </div>

      {/* Scroll View */}
      <div className="addlog-scroll-view">
        <div className="addlog-scroll-content">
          {/* Manual Entry Section */}
          <div className="addlog-manual-entry-card">
            <div className="addlog-manual-entry-content">
              <h3 className="addlog-manual-entry-title">Manual Entry</h3>
              <p className="addlog-manual-entry-description">Enter your details manually and get summaries for you flight</p>
            </div>
            <button className="addlog-ai-button" type="button" onClick={handleAutofillClick}>
              <img src={aiIcon} alt="AI" className="addlog-ai-icon" />
              <span className="addlog-ai-button-text">Auto-Fill with AI</span>
            </button>
          </div>

          {/* Flight Content Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsFlightContentExpanded(!isFlightContentExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image1} alt="Flight Content" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Flight Content</h3>
                  <p className="addlog-section-description">Key flight details and content about the flight</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isFlightContentExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isFlightContentExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-form-field">
                  <label className="addlog-form-label">
                    Date of Flight <span className="addlog-required">*</span>
                  </label>
                  <div className="addlog-input-container">
                    <img src={calendarIcon} alt="Calendar" className="addlog-input-icon" />
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="DD/MM/YYYY"
                      value={dateOfFlight}
                      onChange={(e) => setDateOfFlight(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">
                    Departure Airport <span className="addlog-required">*</span>
                  </label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter departure airport code"
                      value={departureAirport}
                      onChange={(e) => setDepartureAirport(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">
                    Arrival Airport <span className="addlog-required">*</span>
                  </label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter arrival airport code"
                      value={arrivalAirport}
                      onChange={(e) => setArrivalAirport(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Route (Optional)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter route"
                      value={route}
                      onChange={(e) => setRoute(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Flight Description (Optional)</label>
                  <div className="addlog-text-area-container">
                    <textarea
                      className="addlog-text-area"
                      placeholder="Description of the flight..."
                      value={flightDescription}
                      onChange={(e) => setFlightDescription(e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* People & Roles Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsPeopleRolesExpanded(!isPeopleRolesExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image2} alt="People & Roles" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">People & Roles</h3>
                  <p className="addlog-section-description">Pilot function, instructor and student detials</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isPeopleRolesExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isPeopleRolesExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-form-field">
                  <label className="addlog-form-label">
                    Your Role <span className="addlog-required">*</span>
                  </label>
                  <div className="addlog-role-dropdown-wrapper">
                    <div 
                      className="addlog-input-container addlog-dropdown-container"
                      onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                    >
                      <input
                        type="text"
                        className="addlog-input"
                        value={yourRole}
                        readOnly
                      />
                      <img 
                        src={chevronDownIcon} 
                        alt="Dropdown" 
                        className={`addlog-dropdown-icon ${isRoleDropdownOpen ? 'addlog-dropdown-icon-open' : ''}`}
                      />
                    </div>
                    {isRoleDropdownOpen && (
                      <div className="addlog-dropdown-menu">
                        {roleOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`addlog-dropdown-option ${yourRole === option ? 'addlog-dropdown-option-selected' : ''}`}
                            onClick={() => handleRoleSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Instructor Name (If applicable)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter instructor name"
                      value={instructorName}
                      onChange={(e) => setInstructorName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Student Name (If applicable)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter student name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">PIC Name (If applicable)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter PIC name"
                      value={picName}
                      onChange={(e) => setPicName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Co-Pilot Name (If applicable)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter co-pilot name"
                      value={coPilotName}
                      onChange={(e) => setCoPilotName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Aircraft Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsAircraftExpanded(!isAircraftExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image3} alt="Aircraft" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Aircraft</h3>
                  <p className="addlog-section-description">Aircraft registration, total time logged</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isAircraftExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isAircraftExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-form-field">
                  <label className="addlog-form-label">
                    Aircraft <span className="addlog-required">*</span>
                  </label>
                  <div className="addlog-aircraft-dropdown-wrapper">
                    <div 
                      className="addlog-input-container addlog-dropdown-container"
                      onClick={() => setIsAircraftDropdownOpen(!isAircraftDropdownOpen)}
                    >
                      <input
                        type="text"
                        className="addlog-input"
                        placeholder="Select Aircraft"
                        value={aircraft}
                        readOnly
                      />
                      <img 
                        src={chevronDownIcon} 
                        alt="Dropdown" 
                        className={`addlog-dropdown-icon ${isAircraftDropdownOpen ? 'addlog-dropdown-icon-open' : ''}`}
                      />
                    </div>
                    {isAircraftDropdownOpen && (
                      <div className="addlog-dropdown-menu">
                        {aircraftOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`addlog-dropdown-option ${aircraft === option ? 'addlog-dropdown-option-selected' : ''}`}
                            onClick={() => handleAircraftSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Tail Number (Optional)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter tail number"
                      value={tailNumber}
                      onChange={(e) => setTailNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Aircraft Type (Optional)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter aircraft type"
                      value={aircraftType}
                      onChange={(e) => setAircraftType(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Aircraft Manufacturer (Optional)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter manufacturer"
                      value={aircraftManufacturer}
                      onChange={(e) => setAircraftManufacturer(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Aircraft Model (Optional)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter aircraft model"
                      value={aircraftModel}
                      onChange={(e) => setAircraftModel(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Times Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsTimesExpanded(!isTimesExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image4} alt="Times" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Times</h3>
                  <p className="addlog-section-description">Flight times and all related details.</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isTimesExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isTimesExpanded && (
              <div className="addlog-section-content">
                {!isMultiLegMode ? (
                  <>
                    <div className="addlog-subsection-header">
                      <h4 className="addlog-subsection-title">Flight Times</h4>
                      <p className="addlog-subsection-description">Enter flight times. You can use multi-leg flights or a single total time.</p>
                    </div>
                    <div className="addlog-form-field">
                      <label className="addlog-form-label">
                        Total Time (Hours) <span className="addlog-required">*</span>
                      </label>
                      <div className="addlog-input-container">
                        <input
                          type="text"
                          className="addlog-input"
                          placeholder="Enter total time"
                          value={totalTime}
                          onChange={(e) => setTotalTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <button 
                      className="addlog-auto-fill-button" 
                      type="button"
                      onClick={() => setIsMultiLegMode(true)}
                    >
                      <img src={plusIcon} alt="Plus" className="addlog-auto-fill-icon" />
                      <span className="addlog-auto-fill-text">Use Multi-leg Flight</span>
                    </button>
                    <div className="addlog-form-field">
                      <label className="addlog-form-label">PIC Time (Hours)</label>
                      <div className="addlog-input-container">
                        <input
                          type="text"
                          className="addlog-input"
                          placeholder="Enter PIC time"
                          value={picTime}
                          onChange={(e) => setPicTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="addlog-form-field">
                      <label className="addlog-form-label">SIC Time (hours)</label>
                      <div className="addlog-input-container">
                        <input
                          type="text"
                          className="addlog-input"
                          placeholder="Enter dual time"
                          value={dualTime}
                          onChange={(e) => setDualTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="addlog-form-field">
                      <label className="addlog-form-label">Day Time (hours)</label>
                      <div className="addlog-input-container">
                        <input
                          type="text"
                          className="addlog-input"
                          placeholder="Enter solo time"
                          value={soloTime}
                          onChange={(e) => setSoloTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="addlog-multileg-header">
                      <h4 className="addlog-multileg-title">Multi-leg Flight</h4>
                      <button 
                        className="addlog-switch-single-button" 
                        type="button"
                        onClick={() => setIsMultiLegMode(false)}
                      >
                        Switch to Single Time
                      </button>
                    </div>
                    {legs.map((leg, index) => (
                      <div key={leg.id} className="addlog-leg-card">
                        <div className="addlog-leg-card-header">
                          <h5 className="addlog-leg-title">Leg {index + 1}</h5>
                          {legs.length > 1 && (
                            <button
                              className="addlog-leg-delete-button"
                              type="button"
                              onClick={() => setLegs(legs.filter((l) => l.id !== leg.id))}
                            >
                              <img src={deleteIcon} alt="Delete" className="addlog-leg-delete-icon" />
                            </button>
                          )}
                        </div>
                        <div className="addlog-leg-fields-row">
                          <div className="addlog-form-field addlog-leg-field-half">
                            <label className="addlog-form-label">From</label>
                            <div className="addlog-input-container">
                              <input
                                type="text"
                                className="addlog-input"
                                placeholder="Departure"
                                value={leg.from}
                                onChange={(e) => {
                                  const updatedLegs = [...legs];
                                  updatedLegs[index].from = e.target.value;
                                  setLegs(updatedLegs);
                                }}
                              />
                            </div>
                          </div>
                          <div className="addlog-form-field addlog-leg-field-half">
                            <label className="addlog-form-label">To</label>
                            <div className="addlog-input-container">
                              <input
                                type="text"
                                className="addlog-input"
                                placeholder="Arrival"
                                value={leg.to}
                                onChange={(e) => {
                                  const updatedLegs = [...legs];
                                  updatedLegs[index].to = e.target.value;
                                  setLegs(updatedLegs);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="addlog-form-field addlog-leg-time-field">
                          <label className="addlog-form-label">Leg Time (Hours)</label>
                          <div className="addlog-input-container">
                            <input
                              type="text"
                              className="addlog-input"
                              placeholder="Enter leg time"
                              value={leg.time}
                              onChange={(e) => {
                                const updatedLegs = [...legs];
                                updatedLegs[index].time = e.target.value;
                                setLegs(updatedLegs);
                              }}
                            />
                          </div>
                        </div>
                        <button
                          className="addlog-add-leg-button"
                          type="button"
                          onClick={() => {
                            const newLegId = Math.max(...legs.map((l) => l.id), 0) + 1;
                            setLegs([...legs, { id: newLegId, from: '', to: '', time: '' }]);
                          }}
                        >
                          <img src={plusIcon} alt="Plus" className="addlog-add-leg-icon" />
                          <span className="addlog-add-leg-text">Add Leg</span>
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Cross-Country & IFR Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsCrossCountryExpanded(!isCrossCountryExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image5} alt="Cross-Country & IFR" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Cross-Country & IFR</h3>
                  <p className="addlog-section-description">Record carrying this information (optional).</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isCrossCountryExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isCrossCountryExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Cross-Country Time (Hours)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter cross-country time"
                      value={crossCountryTimeIfr}
                      onChange={(e) => setCrossCountryTimeIfr(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">IFR Cross-Country Time (Hours)</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter IFR cross-country time"
                      value={ifrCrossCountryTime}
                      onChange={(e) => setIfrCrossCountryTime(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Number of Approaches</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter number of approaches"
                      value={numberOfApproaches}
                      onChange={(e) => setNumberOfApproaches(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Day Landings</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter day landings"
                      value={dayLandingsIfr}
                      onChange={(e) => setDayLandingsIfr(e.target.value)}
                    />
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Night Landings</label>
                  <div className="addlog-input-container">
                    <input
                      type="text"
                      className="addlog-input"
                      placeholder="Enter night landings"
                      value={nightLandingsIfr}
                      onChange={(e) => setNightLandingsIfr(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Incidents & Remarks Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsIncidentsExpanded(!isIncidentsExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image6} alt="Incidents & Remarks" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Incidents & Remarks</h3>
                  <p className="addlog-section-description">Incidents and Occurrences.</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isIncidentsExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isIncidentsExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-form-field addlog-incident-toggle-field">
                  <label className="addlog-form-label">This flight had an incident</label>
                  <div className="addlog-toggle-container">
                    <button
                      className={`addlog-toggle ${hasIncident ? 'addlog-toggle-active' : ''}`}
                      onClick={() => setHasIncident(!hasIncident)}
                      type="button"
                    >
                      <div className={`addlog-toggle-thumb ${hasIncident ? 'addlog-toggle-thumb-active' : ''}`}></div>
                    </button>
                  </div>
                </div>
                <div className="addlog-form-field">
                  <label className="addlog-form-label">Remarks (Optional)</label>
                  <div className="addlog-text-area-container">
                    <textarea
                      className="addlog-text-area"
                      placeholder="Enter any notes or remarks about the flight..."
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Attachments Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsAttachmentsExpanded(!isAttachmentsExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image7} alt="Attachments" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Attachments</h3>
                  <p className="addlog-section-description">Save documents and attach files.</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isAttachmentsExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isAttachmentsExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-subsection-header">
                  <h4 className="addlog-subsection-title">Attachments</h4>
                  <p className="addlog-subsection-description">Upload photos or documents related to this flight. (Max 10 files, 5MB each)</p>
                </div>
                <button className="addlog-upload-button" type="button">
                  <img src={tablerUploadIcon} alt="Upload" className="addlog-upload-icon" />
                  <span className="addlog-upload-text">Choose Files</span>
                </button>
              </div>
            )}
          </div>

          {/* Review Section */}
          <div className="addlog-section-card">
            <button
              className="addlog-section-header"
              onClick={() => setIsReviewExpanded(!isReviewExpanded)}
              type="button"
            >
              <div className="addlog-section-header-left">
                <img src={image8} alt="Review" className="addlog-section-icon" />
                <div className="addlog-section-title-group">
                  <h3 className="addlog-section-title">Review</h3>
                  <p className="addlog-section-description">Review all your added flight details.</p>
                </div>
              </div>
              <img
                src={chevronDownIcon}
                alt="Expand"
                className={`addlog-chevron-icon ${isReviewExpanded ? 'addlog-chevron-expanded' : ''}`}
              />
            </button>
            {isReviewExpanded && (
              <div className="addlog-section-content">
                <div className="addlog-review-item">
                  <h4 className="addlog-review-label">Flight Content:</h4>
                  <p className="addlog-review-text">Date: 12-12-2023</p>
                  <p className="addlog-review-text">Route: KSDF -&gt; KCHA</p>
                </div>
                <div className="addlog-review-item">
                  <h4 className="addlog-review-label">People & Roles:</h4>
                  <p className="addlog-review-text">Your Role: PIC</p>
                </div>
                <div className="addlog-review-item">
                  <h4 className="addlog-review-label">Aircraft:</h4>
                  <p className="addlog-review-text">Not selected</p>
                </div>
                <div className="addlog-review-item">
                  <h4 className="addlog-review-label">Times:</h4>
                  <p className="addlog-review-text">Total Time: 0.0 Hours</p>
                  <p className="addlog-review-text">Starting flight: 1</p>
                  <p className="addlog-review-text">Leg 1 - 0.0 hrs</p>
                  <p className="addlog-review-text">Leg 2 - 0.0 hrs</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Log Popup Modal */}
      {showLogPopup && (
        <>
          {/* Backdrop */}
          <div className="addlog-popup-backdrop" onClick={handleClosePopup}></div>
          
          {/* Popup */}
          <div className="addlog-popup-container">
            <button className="addlog-popup-close" onClick={handleClosePopup} type="button">
              <img src={closeIcon} alt="Close" className="addlog-popup-close-icon" />
            </button>
            
            <h3 className="addlog-popup-title">Log your Flights</h3>
            <p className="addlog-popup-description">Organize and track your flying experience</p>
            
            <div className="addlog-popup-buttons">
              <button 
                className="addlog-popup-button addlog-popup-button-primary" 
                onClick={handlePublishFlight}
                type="button"
              >
                <img src={paperAirplaneIcon} alt="Publish" className="addlog-popup-button-icon" />
                <span className="addlog-popup-button-text">Publish your Flight</span>
              </button>
              
              <button 
                className="addlog-popup-button addlog-popup-button-secondary" 
                onClick={handleSaveAsDraft}
                type="button"
              >
                <img src={documentEditIcon} alt="Save Draft" className="addlog-popup-button-icon" />
                <span className="addlog-popup-button-text">Save as Draft</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Autofill Popup Modal */}
      {showAutofillPopup && (
        <>
          {/* Backdrop */}
          <div className="addlog-autofill-popup-backdrop" onClick={handleCloseAutofillPopup}></div>
          
          {/* Popup */}
          <div className="addlog-autofill-popup-container">
            <button className="addlog-autofill-popup-close" onClick={handleCloseAutofillPopup} type="button">
              <img src={closeIcon} alt="Close" className="addlog-autofill-popup-close-icon" />
            </button>
            
            <h3 className="addlog-autofill-popup-title">Autofill with AI</h3>
            <p className="addlog-autofill-popup-description">Let AI capture your flight data accurately</p>
            
            <div className="addlog-autofill-popup-cards">
              <button 
                className="addlog-autofill-popup-card" 
                onClick={handleAutofillWithText}
                type="button"
              >
                <img src={autofillTextIcon} alt="Autofill with Text" className="addlog-autofill-popup-card-icon" />
                <span className="addlog-autofill-popup-card-text">Autofill with Text</span>
              </button>
              
              <button 
                className="addlog-autofill-popup-card" 
                onClick={handleBulkImports}
                type="button"
              >
                <img src={bulkImportsIcon} alt="Bulk Imports" className="addlog-autofill-popup-card-icon" />
                <span className="addlog-autofill-popup-card-text">Bulk Imports</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddLog;





