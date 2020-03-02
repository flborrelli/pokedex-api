import React from 'react';
import NavBar from './NavBar';
import { create } from 'react-test-renderer';

describe('<NavBar />', () => {

  it('should match with navbar snapshot', () => {
    const component = create(<NavBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('should not use class', () => {
    const component = create(<NavBar />);
    expect(component.toJSON().props.class).toBeFalsy();
  });
});