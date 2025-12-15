// DO NOT MODIFY OTHER FILES — settings SCREEN ONLY
import React, { useState, useEffect } from 'react';
import './settings.css';

// Local SVG icon imports
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import chevronUpIcon from '../../arrow-right.svg?url';
import arrIcon from '../../arr.svg?url';

const imgMobileSignal = signalIcon;
const imgWifi = wifiIcon;
const imgArrowArrowLeftMd = arrowLeftIcon;
const imgChevronUp = chevronUpIcon;
const imgArr = arrIcon;

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
    <div className="settings-screen-battery-container">
      <img src={batteryIcon} alt="Battery" className="settings-screen-battery-image" />
    </div>
  );
};

type SettingsProps = {
  onBack?: () => void;
};

const Settings = ({ onBack }: SettingsProps = {}) => {
  const [isDevicesExpanded, setIsDevicesExpanded] = useState(true);
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(true);
  const [isAIPersonalisationExpanded, setIsAIPersonalisationExpanded] = useState(true);
  const [isUnitsDisplayExpanded, setIsUnitsDisplayExpanded] = useState(true);
  
  const [flightReminders, setFlightReminders] = useState(true);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [notamsUpdates, setNotamsUpdates] = useState(true);
  const [studyReminders, setStudyReminders] = useState(true);
  const [communityMessages, setCommunityMessages] = useState(false);
  const [aiCommunityMessages, setAiCommunityMessages] = useState(true);

  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [aiPersona, setAiPersona] = useState('Instructor');
  const [reportStyle, setReportStyle] = useState('Detailed');
  const [distanceUnits, setDistanceUnits] = useState('Nautical');
  const [speedUnits, setSpeedUnits] = useState('Knots');
  const [fuelUnits, setFuelUnits] = useState('Gallons');
  const [theme, setTheme] = useState('System');

  // Dropdown options
  const aiPersonaOptions = ['Instructor', 'Pilot', 'Student', 'ATC'];
  const reportStyleOptions = ['Detailed', 'Summary', 'Brief'];
  const distanceUnitsOptions = ['Nautical', 'Statute', 'Kilometers'];
  const speedUnitsOptions = ['Knots', 'MPH', 'KPH'];
  const fuelUnitsOptions = ['Gallons', 'Liters', 'Pounds'];
  const themeOptions = ['System', 'Light', 'Dark'];

  const ToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <div 
        className={`settings-screen-toggle-switch ${value ? 'settings-screen-toggle-switch--active' : ''}`}
        onClick={() => onValueChange(!value)}
      >
        <div className="settings-screen-toggle-button" />
      </div>
    );
  };

  const Dropdown = ({ 
    id, 
    value, 
    options, 
    onSelect 
  }: { 
    id: string; 
    value: string; 
    options: string[]; 
    onSelect: (value: string) => void;
  }) => {
    const isOpen = openDropdown === id;

    const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpenDropdown(isOpen ? null : id);
    };

    const handleSelect = (option: string) => {
      onSelect(option);
      setOpenDropdown(null);
    };

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (isOpen && !(e.target as Element).closest(`.settings-screen-dropdown-wrapper-${id}`)) {
          setOpenDropdown(null);
        }
      };
      if (isOpen) {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
      }
    }, [isOpen, id]);

    return (
      <div className={`settings-screen-dropdown-wrapper settings-screen-dropdown-wrapper-${id}`} style={{ position: 'relative' }}>
        <div className="settings-screen-dropdown" onClick={handleToggle}>
          <span className="settings-screen-dropdown-text">{value}</span>
          <div className={`settings-screen-dropdown-chevron ${isOpen ? 'settings-screen-dropdown-chevron-open' : ''}`}>
            <img src={imgArr} alt="" className="settings-screen-dropdown-chevron-image" style={{ transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
          </div>
        </div>
        {isOpen && (
          <div className="settings-screen-dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`settings-screen-dropdown-option ${value === option ? 'settings-screen-dropdown-option-selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="settings-screen-container">
      {/* Status Bar */}
      <div className="settings-screen-status-bar">
        <div className="settings-screen-status-bar-left">
          <div className="settings-screen-status-bar-time-container">
            <span className="settings-screen-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="settings-screen-status-bar-right">
          <img src={imgMobileSignal} alt="Signal" className="settings-screen-status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="settings-screen-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="settings-screen-header">
        <button className="settings-screen-back-button" onClick={onBack} type="button">
          <img src={imgArrowArrowLeftMd} alt="Back" className="settings-screen-back-icon" />
        </button>
        <p className="settings-screen-title">Settings</p>
        <button className="settings-screen-save-button" type="button">
          <span className="settings-screen-save-text">Save</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="settings-screen-scroll-content">
        <div className="settings-screen-scroll-content-container">
          {/* Devices Section */}
          <div className="settings-screen-card">
            <button 
              className="settings-screen-card-header"
              onClick={() => setIsDevicesExpanded(!isDevicesExpanded)}
              type="button"
            >
              <div className="settings-screen-card-header-left">
                <span className="settings-screen-card-title">Devices</span>
                {isDevicesExpanded && <span className="settings-screen-card-subtitle">Connect Maverick with Devices</span>}
              </div>
              <div className="settings-screen-chevron-up">
                <img src={imgArr} alt="" className="settings-screen-chevron-image" style={{ transform: isDevicesExpanded ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
              </div>
            </button>
            {isDevicesExpanded && (
              <div className="settings-screen-card-content">
                <div className="settings-screen-device-item">
                  <div className="settings-screen-device-info">
                    <span className="settings-screen-device-name">XB70 Flight Computer</span>
                    <span className="settings-screen-device-status">Not connected</span>
                  </div>
                  <button className="settings-screen-pair-button" type="button">
                    <span className="settings-screen-pair-button-text">Pair Device</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Notifications Section */}
          <div className="settings-screen-card">
            <button 
              className="settings-screen-card-header"
              onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
              type="button"
            >
              <div className="settings-screen-card-header-left">
                <span className="settings-screen-card-title">Notifications</span>
                {isNotificationsExpanded && <span className="settings-screen-card-subtitle">Customize your notification and alerts</span>}
              </div>
              <div className="settings-screen-chevron-up">
                <img src={imgArr} alt="" className="settings-screen-chevron-image" style={{ transform: isNotificationsExpanded ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
              </div>
            </button>
            {isNotificationsExpanded && (
              <div className="settings-screen-card-content">
                <div className="settings-screen-notification-item">
                  <span className="settings-screen-notification-label">Flight Reminders</span>
                  <ToggleSwitch value={flightReminders} onValueChange={setFlightReminders} />
                </div>
                <div className="settings-screen-notification-item">
                  <span className="settings-screen-notification-label">Weather Alerts</span>
                  <ToggleSwitch value={weatherAlerts} onValueChange={setWeatherAlerts} />
                </div>
                <div className="settings-screen-notification-item">
                  <span className="settings-screen-notification-label">NOTAMS Updates</span>
                  <ToggleSwitch value={notamsUpdates} onValueChange={setNotamsUpdates} />
                </div>
                <div className="settings-screen-notification-item">
                  <span className="settings-screen-notification-label">Study Reminders</span>
                  <ToggleSwitch value={studyReminders} onValueChange={setStudyReminders} />
                </div>
                <div className="settings-screen-notification-item">
                  <span className="settings-screen-notification-label">Community Messages</span>
                  <ToggleSwitch value={communityMessages} onValueChange={setCommunityMessages} />
                </div>
              </div>
            )}
          </div>

          {/* AI Personalisation Section */}
          <div className="settings-screen-card">
            <button 
              className="settings-screen-card-header"
              onClick={() => setIsAIPersonalisationExpanded(!isAIPersonalisationExpanded)}
              type="button"
            >
              <div className="settings-screen-card-header-left">
                <span className="settings-screen-card-title">AI Personalisation</span>
                {isAIPersonalisationExpanded && <span className="settings-screen-card-subtitle">Customize your AI</span>}
              </div>
              <div className="settings-screen-chevron-up">
                <img src={imgArr} alt="" className="settings-screen-chevron-image" style={{ transform: isAIPersonalisationExpanded ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
              </div>
            </button>
            {isAIPersonalisationExpanded && (
              <div className="settings-screen-card-content">
                <div className="settings-screen-dropdown-item">
                  <span className="settings-screen-dropdown-label">AI Persona</span>
                  <Dropdown 
                    id="ai-persona"
                    value={aiPersona}
                    options={aiPersonaOptions}
                    onSelect={setAiPersona}
                  />
                </div>
                <div className="settings-screen-dropdown-item">
                  <span className="settings-screen-dropdown-label">Report Style</span>
                  <Dropdown 
                    id="report-style"
                    value={reportStyle}
                    options={reportStyleOptions}
                    onSelect={setReportStyle}
                  />
                </div>
                <div className="settings-screen-notification-item">
                  <span className="settings-screen-notification-label">Community Messages</span>
                  <ToggleSwitch value={aiCommunityMessages} onValueChange={setAiCommunityMessages} />
                </div>
              </div>
            )}
          </div>

          {/* Units and Display Section */}
          <div className="settings-screen-card">
            <button 
              className="settings-screen-card-header"
              onClick={() => setIsUnitsDisplayExpanded(!isUnitsDisplayExpanded)}
              type="button"
            >
              <div className="settings-screen-card-header-left">
                <span className="settings-screen-card-title">Units and Display</span>
                {isUnitsDisplayExpanded && <span className="settings-screen-card-subtitle">Customize the Units and Display</span>}
              </div>
              <div className="settings-screen-chevron-up">
                <img src={imgArr} alt="" className="settings-screen-chevron-image" style={{ transform: isUnitsDisplayExpanded ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
              </div>
            </button>
            {isUnitsDisplayExpanded && (
              <div className="settings-screen-card-content">
                <div className="settings-screen-dropdown-item">
                  <span className="settings-screen-dropdown-label">Distance Units</span>
                  <Dropdown 
                    id="distance-units"
                    value={distanceUnits}
                    options={distanceUnitsOptions}
                    onSelect={setDistanceUnits}
                  />
                </div>
                <div className="settings-screen-dropdown-item">
                  <span className="settings-screen-dropdown-label">Speed Units</span>
                  <Dropdown 
                    id="speed-units"
                    value={speedUnits}
                    options={speedUnitsOptions}
                    onSelect={setSpeedUnits}
                  />
                </div>
                <div className="settings-screen-dropdown-item">
                  <span className="settings-screen-dropdown-label">Fuel Units</span>
                  <Dropdown 
                    id="fuel-units"
                    value={fuelUnits}
                    options={fuelUnitsOptions}
                    onSelect={setFuelUnits}
                  />
                </div>
                <div className="settings-screen-dropdown-item">
                  <span className="settings-screen-dropdown-label">Theme</span>
                  <Dropdown 
                    id="theme"
                    value={theme}
                    options={themeOptions}
                    onSelect={setTheme}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="settings-screen-footer">
            <a href="#" className="settings-screen-footer-link">Help Center</a>
            <a href="#" className="settings-screen-footer-link">Privacy Policy</a>
            <a href="#" className="settings-screen-footer-link">User Agreement</a>
            <a href="#" className="settings-screen-footer-link">End User Agreement</a>
            <span className="settings-screen-footer-version">Version 1.01.1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;


