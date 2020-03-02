import React from 'react';
import SearchBar from './SearchBar';
import { create } from 'react-test-renderer';

describe('<SearchBar />', () => {

  //Jest Mock function
  const handleInputChange = jest.fn();

  it('should match with searchbar snapshot', () => {
    const searchComponent = create(<SearchBar handleInputChange={handleInputChange} />);
    expect(searchComponent.toJSON()).toMatchSnapshot();
  });

  it('should receive handleInputChange props', () => {
    const searchComponent = create(<SearchBar handleInputChange={handleInputChange} />);
    expect(searchComponent.toTree().props.handleInputChange).toBeTruthy();
  });
  
  it('should not use class', () => {
    const searchComponent = create(<SearchBar handleInputChange={handleInputChange} />);
    expect(searchComponent.toJSON().props.class).toBeFalsy();
  });
  
});