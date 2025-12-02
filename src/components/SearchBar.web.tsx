import React from 'react';
import './SearchBar.css';
import searchIcon from '../../search.svg?url';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchBar = ({ placeholder = 'Search', value, onChangeText }: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-input">
        <div className="search-bar-icon-container">
          <img src={searchIcon} alt="Search" className="search-bar-icon" />
        </div>
        <input
          type="text"
          className="search-bar-text-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText?.(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;


