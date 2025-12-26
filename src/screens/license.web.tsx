// DO NOT MODIFY OTHER FILES — license SCREEN ONLY
import React from 'react';
import './license.css';

type LicenseProps = {
  onBack?: () => void;
  onAddLicense?: () => void;
};

const License = ({ onBack, onAddLicense }: LicenseProps) => {
  return (
    <div className="license-container">
      <div>License Screen - Placeholder</div>
    </div>
  );
};

export default License;








