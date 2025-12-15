// DO NOT MODIFY OTHER FILES — personalinfo SCREEN ONLY
import React from 'react';
import './personalinfo.css';

// Local SVG icon imports
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';
import arrowLeftIcon from '../../Arrow_Left_MD.svg?url';

// Indian flag icon - using a placeholder URL, replace with actual flag asset if available
const indianFlagIcon = 'https://flagcdn.com/w40/in.png';

// Close icon for language tags - using a simple X SVG
const closeIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"%3E%3Cpath d="M1 1l10 10M11 1L1 11" stroke="white" stroke-width="1.5" stroke-linecap="round"/%3E%3C/svg%3E';

// Chevron down icon for phone dropdown
const chevronDownIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"%3E%3Cpath d="M3 4.5L6 7.5L9 4.5" stroke="%23000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/%3E%3C/svg%3E';

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
    <div className="pi-battery-container">
      <img src={batteryIcon} alt="Battery" className="pi-battery-image" />
    </div>
  );
};

type PersonalinfoProps = {
  onBack?: () => void;
  onSave?: () => void;
};

const Personalinfo = ({ onBack, onSave }: PersonalinfoProps = {}) => {
  const [languages, setLanguages] = React.useState(['English', 'Tamil', 'Hindi']);
  const [languageInput, setLanguageInput] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const languageInputRef = React.useRef<HTMLInputElement>(null);
  const suggestionsRef = React.useRef<HTMLDivElement>(null);

  const languageSuggestions = [
    'English', 'Tamil', 'Hindi', 'Spanish', 'French', 'German', 'Italian',
    'Portuguese', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Russian',
    'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish',
    'Turkish', 'Greek', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian',
    'Malay', 'Bengali', 'Urdu', 'Punjabi', 'Gujarati', 'Marathi',
    'Telugu', 'Kannada', 'Malayalam', 'Odia', 'Assamese'
  ];

  const filteredSuggestions = languageSuggestions.filter(lang =>
    lang.toLowerCase().includes(languageInput.toLowerCase()) &&
    !languages.includes(lang)
  );

  const handleRemoveLanguage = (lang: string) => {
    setLanguages(languages.filter(l => l !== lang));
  };

  const handleSelectLanguage = (lang: string) => {
    if (!languages.includes(lang)) {
      setLanguages([...languages, lang]);
    }
    setLanguageInput('');
    setShowSuggestions(false);
    if (languageInputRef.current) {
      languageInputRef.current.focus();
    }
  };

  const handleLanguageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setLanguageInput(text);
    setShowSuggestions(text.length > 0);
  };

  const handleLanguageInputFocus = () => {
    if (languageInput.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleLanguageInputBlur = (e: React.FocusEvent) => {
    // Delay to allow selection to register
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(e.relatedTarget as Node)) {
        setShowSuggestions(false);
      }
    }, 200);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        languageInputRef.current &&
        !languageInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    if (showSuggestions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSuggestions]);

  return (
    <div className="pi-container">
      {/* Status Bar */}
      <div className="pi-status-bar">
        <div className="pi-status-bar-left">
          <div className="pi-status-bar-time-container">
            <span className="pi-status-bar-time">9:41</span>
          </div>
        </div>
        <div className="pi-status-bar-right">
          <img src={signalIcon} alt="Signal" className="pi-status-bar-icon" />
          <img src={wifiIcon} alt="WiFi" className="pi-status-bar-icon" />
          <StatusBarBattery />
        </div>
      </div>

      {/* Header */}
      <div className="pi-header">
        <button className="pi-back-button" type="button" onClick={onBack}>
          <img src={arrowLeftIcon} alt="Back" className="pi-back-button-icon" />
        </button>
        <p className="pi-header-title">Personal Info</p>
        <button className="pi-header-save" type="button" onClick={onSave}>
          Save
        </button>
      </div>

      {/* Form Container */}
      <div className="pi-form-container">
        {/* Full Name */}
        <div className="pi-form-field">
          <label className="pi-form-label">Full Name</label>
          <input
            type="text"
            className="pi-input-field"
            defaultValue="Karpaganathan"
          />
        </div>

        {/* Call Sign */}
        <div className="pi-form-field">
          <label className="pi-form-label">Call Sign</label>
          <input
            type="text"
            className="pi-input-field"
            defaultValue="CheetaRoger"
          />
        </div>

        {/* Phone Number */}
        <div className="pi-form-field">
          <label className="pi-form-label">Phone Number</label>
          <div className="pi-phone-container">
            <div className="pi-phone-country">
              <img src={indianFlagIcon} alt="India" className="pi-phone-flag" />
              <img src={chevronDownIcon} alt="Dropdown" className="pi-phone-chevron" />
            </div>
            <input
              type="tel"
              className="pi-phone-input"
              defaultValue="8668256407"
            />
          </div>
        </div>

        {/* City */}
        <div className="pi-form-field">
          <label className="pi-form-label">City</label>
          <input
            type="text"
            className="pi-input-field"
            defaultValue="Chennai"
          />
        </div>

        {/* Date of Birth */}
        <div className="pi-form-field">
          <label className="pi-form-label">Date of Birth</label>
          <input
            type="text"
            className="pi-input-field"
            defaultValue="18/11/2004"
          />
        </div>

        {/* Language */}
        <div className="pi-form-field">
          <label className="pi-form-label">Language</label>
          <div className="pi-language-input-container">
            <div className="pi-language-tags-wrapper">
              {languages.map((lang) => (
                <div key={lang} className="pi-language-tag">
                  <span className="pi-language-tag-text">{lang}</span>
                  <button
                    className="pi-language-tag-close"
                    type="button"
                    onClick={() => handleRemoveLanguage(lang)}
                  >
                    <span className="pi-language-tag-close-text">×</span>
                  </button>
                </div>
              ))}
              <input
                ref={languageInputRef}
                type="text"
                className="pi-language-input"
                value={languageInput}
                onChange={handleLanguageInputChange}
                onFocus={handleLanguageInputFocus}
                onBlur={handleLanguageInputBlur}
                placeholder="Type a language..."
              />
            </div>
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="pi-language-suggestions-container" ref={suggestionsRef}>
                <div className="pi-language-suggestions-header">
                  <span className="pi-language-suggestions-header-text">Relevant languages</span>
                </div>
                <div className="pi-language-suggestions-list">
                  <div className="pi-language-suggestions-chips">
                    {filteredSuggestions.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        className="pi-language-suggestion-chip"
                        onClick={() => handleSelectLanguage(lang)}
                      >
                        <span className="pi-language-suggestion-chip-text">{lang}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <div className="pi-form-field">
          <label className="pi-form-label">Bio</label>
          <textarea
            className="pi-textarea-field"
            defaultValue="Aviation is not my job. Its my life"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
