// DO NOT MODIFY OTHER FILES — Logging SCREEN ONLY
import React, { useState, useEffect } from 'react';
import './Logging.css';

// Local icons for Sort and Filter popup
import filterIcon from '../assets/filter-icon.svg?url';
import closeIcon from '../assets/close-icon.svg?url';
import calendarIcon from '../assets/calendar-icon.svg?url';
import chevronDown from '../assets/chevron-down.svg?url';

// Local asset imports
import imgBatteryOutline from '../assets/battery-outline.png?url';
import imgBatteryEnd from '../assets/battery-end.png?url';
import imgBatteryFill from '../assets/battery-fill.png?url';
import imgArrowArrowLeftMd from '../../Arrow_Left_MD.svg?url';
import imgWifi from '../assets/loghome-icons/imgWifi.svg?url';
import imgIconMobileSignal from '../assets/loghome-icons/imgMobileSignal.svg?url';
import imgProiconsAirplane from '../../airplane.svg?url';
import imgSearch from '../../search.svg?url';
import imgOcticonFilter16 from '../assets/filter-icon.svg?url';
// FAB icon - teal square with rounded corners and white plus sign
const imgFabIcon = 'data:image/svg+xml;base64,' + btoa(`<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="12" fill="#168AAD"/>
<rect x="26" y="16" width="4" height="24" fill="white"/>
<rect x="16" y="26" width="24" height="4" fill="white"/>
</svg>`);
import imgBasilEditOutline from '../../basil_edit-outline.svg?url';
import imgFluentDelete16Regular from '../../fluent_delete-16-regular.svg?url';

// Arrow line SVG as data URI - dark gray arrow with sharp arrowhead pointing right
const imgLine733 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMy41IEwgODIgMy41IiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0gODIgMCBMIDg1IDMuNSBMIDgyIDcgWiIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==';

type StatusBarBatteryProps = {
  className?: string;
};

const StatusBarBattery = ({ className }: StatusBarBatteryProps) => {
  return (
    <div className={className}>
      <div className="logging-battery-outline">
        <img className="logging-battery-outline-image" alt="" src={imgBatteryOutline} />
      </div>
      <div className="logging-battery-end">
        <img className="logging-battery-end-image" alt="" src={imgBatteryEnd} />
      </div>
      <div className="logging-battery-fill">
        <img className="logging-battery-fill-image" alt="" src={imgBatteryFill} />
      </div>
    </div>
  );
};

type LoggingProps = {
  onBack?: () => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onAdd?: () => void;
  onFilter?: () => void;
};

const Logging = ({ onBack, onEdit, onDelete, onAdd, onFilter }: LoggingProps = {}) => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(true);
  
  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sortFlights, setSortFlights] = useState('Newest first');
  const [routeDateRange, setRouteDateRange] = useState('Route');
  const [allAircraftDateRange, setAllAircraftDateRange] = useState('All aircraft');
  const [routeAdvanced, setRouteAdvanced] = useState('Route');
  const [allAircraftAdvanced, setAllAircraftAdvanced] = useState('All aircraft');
  
  // Toggle states
  const [training, setTraining] = useState(true);
  const [night, setNight] = useState(true);
  const [ifr, setIfr] = useState(true);
  const [sim, setSim] = useState(true);
  const [checkride, setCheckride] = useState(true);
  const [draftsOnly, setDraftsOnly] = useState(true);

  // Sample log entries data
  const logEntries = [
    { id: 1, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 2, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 3, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 4, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
    { id: 5, hours: '6 Hours', registration: 'Registration of Aircraft', departure: 'MGM', destination: 'VGP', date: 'Wed, 02/02/2025' },
  ];

  const ToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <div 
        className={`sf-toggle-switch ${value ? 'sf-toggle-switch--active' : ''}`}
        onClick={() => onValueChange(!value)}
      >
        <div className="sf-toggle-button" />
      </div>
    );
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest('.sf-dropdown-wrapper')) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  // Dropdown component
  const Dropdown = ({ 
    id, 
    value, 
    options, 
    onSelect,
    className = ''
  }: { 
    id: string; 
    value: string; 
    options: string[]; 
    onSelect: (value: string) => void;
    className?: string;
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

    return (
      <div className={`sf-dropdown-wrapper ${className}`} style={{ position: 'relative' }}>
        <div className={`sf-dropdown ${className.includes('sf-dropdown-half') ? 'sf-dropdown-half' : ''}`} onClick={handleToggle}>
          <span className="sf-dropdown-text">{value}</span>
          <img 
            src={chevronDown} 
            alt="" 
            className={`sf-chevron ${isOpen ? 'sf-chevron-up' : ''}`} 
          />
        </div>
        {isOpen && (
          <div className="sf-dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`sf-dropdown-option ${value === option ? 'sf-dropdown-option-selected' : ''}`}
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
    <div className="logging-container">
      {/* Status Bar */}
      <div className="logging-status-bar">
        <div className="logging-status-bar-left">
          <div className="logging-status-bar-time-container">
            <span className="logging-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="logging-status-bar-right">
          <img src={imgIconMobileSignal} alt="Signal" className="logging-status-bar-icon" />
          <img src={imgWifi} alt="WiFi" className="logging-status-bar-wifi" />
          <StatusBarBattery className="logging-battery-container" />
        </div>
      </div>

      {/* Header */}
      <div className="logging-header">
        <div className="logging-header-content">
          <button className="logging-back-button" type="button" onClick={onBack}>
            <img alt="" className="logging-back-button-icon" src={imgArrowArrowLeftMd} />
          </button>
          <div className="logging-header-title-container">
            <p className="logging-header-title">Logbook list</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="logging-search-filter-container">
        <div className="logging-search-input-container">
          <div className="logging-search-input">
            <div className="logging-search-input-content">
              <div className="logging-search-icon-container">
                <div className="logging-search-icon">
                  <img alt="" className="logging-search-icon-image" src={imgSearch} />
                </div>
                <span className="logging-search-placeholder">Search Your Logs</span>
              </div>
            </div>
          </div>
        </div>
        <button className="logging-filter-button" type="button" onClick={() => setIsFilterPopupOpen(true)}>
          <div className="logging-filter-icon">
            <img alt="" className="logging-filter-icon-image" src={imgOcticonFilter16} />
          </div>
        </button>
      </div>

      {/* Log Entries List */}
      <div className="logging-list-container">
        <div className="logging-list-items">
          {logEntries.map((entry) => (
            <div key={entry.id} className="logging-log-card">
              <div className="logging-log-card-content">
                {/* Top Row: Hours (left) and Action Icons (right) */}
                <div className="logging-log-card-top">
                  <p className="logging-log-hours">{entry.hours}</p>
                  <div className="logging-log-card-actions">
                    <button className="logging-edit-button" type="button" onClick={() => onEdit?.(entry.id)}>
                      <img alt="" className="logging-edit-icon-image" src={imgBasilEditOutline} />
                    </button>
                    <button className="logging-delete-button" type="button" onClick={() => onDelete?.(entry.id)}>
                      <img alt="" className="logging-delete-icon-image" src={imgFluentDelete16Regular} />
                    </button>
                  </div>
                </div>
                
                {/* Registration Row */}
                <div className="logging-log-registration-row">
                  <div className="logging-airplane-icon">
                    <img alt="" className="logging-airplane-icon-image" src={imgProiconsAirplane} />
                  </div>
                  <p className="logging-registration-text">{entry.registration}</p>
                </div>
                
                {/* Route Section */}
                <div className="logging-log-route-section">
                  {/* Left Side: Departure */}
                  <div className="logging-log-departure">
                    <p className="logging-departure-code">{entry.departure}</p>
                    <p className="logging-departure-date">{entry.date}</p>
                  </div>
                  
                  {/* Center: Arrow with badges */}
                  <div className="logging-log-center">
                    <div className="logging-training-badge">
                      <p className="logging-training-text">Training</p>
                    </div>
                    <div className="logging-arrow-line">
                      <img alt="" className="logging-arrow-line-image-img" src={imgLine733} />
                    </div>
                    <div className="logging-ifr-badge">
                      <p className="logging-ifr-text">IFR</p>
                    </div>
                  </div>
                  
                  {/* Right Side: Destination */}
                  <div className="logging-log-destination">
                    <p className="logging-destination-code">{entry.destination}</p>
                    <p className="logging-destination-date">{entry.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="logging-fab" type="button" onClick={onAdd}>
        <img alt="" className="logging-fab-image" src={imgFabIcon} />
      </button>

      {/* Sort and Filter Popup */}
      {isFilterPopupOpen && (
        <>
          <div className="sf-backdrop" onClick={() => setIsFilterPopupOpen(false)} />
          <div className="sf-popup">
            {/* Header */}
            <div className="sf-header">
              <div className="sf-header-left">
                <img src={filterIcon} alt="Filter" className="sf-filter-icon" />
                <h2 className="sf-title">Sort and Filter</h2>
              </div>
              <button className="sf-close-button" type="button" onClick={() => setIsFilterPopupOpen(false)}>
                <img src={closeIcon} alt="Close" className="sf-close-icon" />
              </button>
            </div>

            {/* Content */}
            <div className="sf-content">
              {/* Sort flights */}
              <div className="sf-section">
                <label className="sf-label">Sort flights</label>
                <Dropdown
                  id="sort-flights"
                  value={sortFlights}
                  options={['Newest first', 'Oldest first', 'Most hours', 'Least hours']}
                  onSelect={setSortFlights}
                />
                <div className="sf-tags">
                  <button className="sf-tag">Recent IFR</button>
                  <button className="sf-tag">Night Currency</button>
                  <button className="sf-tag">CPL Progress</button>
                </div>
              </div>

              {/* Date Range */}
              <div className="sf-section">
                <label className="sf-label">Date Range</label>
                <div className="sf-date-input">
                  <img src={calendarIcon} alt="" className="sf-calendar-icon" />
                  <span className="sf-date-placeholder">Select date range</span>
                </div>
              </div>

              {/* Route & Aircraft */}
              <div className="sf-row">
                <Dropdown
                  id="route-date-range"
                  value={routeDateRange}
                  options={['Route', 'All routes', 'Specific route']}
                  onSelect={setRouteDateRange}
                  className="sf-dropdown-half"
                />
                <Dropdown
                  id="aircraft-date-range"
                  value={allAircraftDateRange}
                  options={['All aircraft', 'Specific aircraft']}
                  onSelect={setAllAircraftDateRange}
                  className="sf-dropdown-half"
                />
              </div>

              {/* Search */}
              <div className="sf-section">
                <input 
                  type="text" 
                  className="sf-search-input" 
                  placeholder="Search remarks, Callsigns, airports"
                />
              </div>

              {/* Advanced filters */}
              <div className="sf-section">
                <button 
                  className="sf-advanced-header" 
                  type="button"
                  onClick={() => setIsAdvancedFiltersOpen(!isAdvancedFiltersOpen)}
                >
                  <label className="sf-label">Advanced filters</label>
                  <img src={chevronDown} alt="" className={`sf-chevron ${isAdvancedFiltersOpen ? 'sf-chevron-up' : ''}`} />
                </button>

                {isAdvancedFiltersOpen && (
                  <>
                    {/* Engine type & Time of day */}
                    <div className="sf-row">
                      <Dropdown
                        id="route-advanced"
                        value={routeAdvanced}
                        options={['Route', 'All routes', 'Specific route']}
                        onSelect={setRouteAdvanced}
                        className="sf-dropdown-half"
                      />
                      <Dropdown
                        id="aircraft-advanced"
                        value={allAircraftAdvanced}
                        options={['All aircraft', 'Specific aircraft']}
                        onSelect={setAllAircraftAdvanced}
                        className="sf-dropdown-half"
                      />
                    </div>

                    {/* Duration hours */}
                    <div className="sf-section">
                      <label className="sf-label">Duration hours</label>
                      <div className="sf-row">
                        <input type="text" className="sf-input-half" placeholder="Min" />
                        <input type="text" className="sf-input-half" placeholder="Max" />
                      </div>
                    </div>

                    {/* From & To */}
                    <div className="sf-row">
                      <div className="sf-input-group">
                        <label className="sf-label">From</label>
                        <input type="text" className="sf-input" placeholder="Departure" />
                      </div>
                      <div className="sf-input-group">
                        <label className="sf-label">To</label>
                        <input type="text" className="sf-input" placeholder="Arrival" />
                      </div>
                    </div>

                    {/* Registration & Instructor */}
                    <div className="sf-row">
                      <div className="sf-input-group">
                        <label className="sf-label">Registration</label>
                        <input type="text" className="sf-input" placeholder="AIRCRAFT REG" />
                      </div>
                      <div className="sf-input-group">
                        <label className="sf-label">Instructor</label>
                        <input type="text" className="sf-input" placeholder="Instructor name" />
                      </div>
                    </div>

                    {/* Toggle Switches */}
                    <div className="sf-toggles-container">
                      <div className="sf-toggle-row">
                        <div className="sf-toggle-item">
                          <span className="sf-toggle-label">Training</span>
                          <ToggleSwitch value={training} onValueChange={setTraining} />
                        </div>
                        <div className="sf-toggle-item">
                          <span className="sf-toggle-label">Night</span>
                          <ToggleSwitch value={night} onValueChange={setNight} />
                        </div>
                      </div>
                      <div className="sf-toggle-row">
                        <div className="sf-toggle-item">
                          <span className="sf-toggle-label">IFR</span>
                          <ToggleSwitch value={ifr} onValueChange={setIfr} />
                        </div>
                        <div className="sf-toggle-item">
                          <span className="sf-toggle-label">Sim</span>
                          <ToggleSwitch value={sim} onValueChange={setSim} />
                        </div>
                      </div>
                      <div className="sf-toggle-row">
                        <div className="sf-toggle-item">
                          <span className="sf-toggle-label">Checkride</span>
                          <ToggleSwitch value={checkride} onValueChange={setCheckride} />
                        </div>
                        <div className="sf-toggle-item">
                          <span className="sf-toggle-label">Drafts only</span>
                          <ToggleSwitch value={draftsOnly} onValueChange={setDraftsOnly} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Logging;






