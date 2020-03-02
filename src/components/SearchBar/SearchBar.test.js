import React from 'react';
import SearchBar from './SearchBar';
import { create } from 'react-test-renderer';

  //Jest Mock function
  const handleInputChange = jest.fn();

  test('should match with searchbar snapshot', () => {
    const searchComponent = create(<SearchBar handleInputChange={handleInputChange} />);
    expect(searchComponent.toJSON()).toMatchSnapshot();
  });

  test('should receive handleInputChange props', () => {
    const searchComponent = create(<SearchBar handleInputChange={handleInputChange} />);
    expect(searchComponent.toTree().props.handleInputChange).toBeTruthy();
  });

  