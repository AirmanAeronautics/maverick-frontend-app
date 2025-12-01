import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
      stroke="#6B7280"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SearchBar = ({ placeholder = 'Search', value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <View style={styles.searchIconContainer}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#6B7280"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 382,
    height: 44,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 48,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 22, // Fully rounded for 44px height
    paddingHorizontal: 16,
    height: 44,
  },
  searchIconContainer: {
    width: 20,
    height: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    padding: 0,
    margin: 0,
  },
});

export default SearchBar;

