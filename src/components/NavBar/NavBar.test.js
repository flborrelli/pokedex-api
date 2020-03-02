import React from 'react';
import NavBar from './NavBar';
import { create } from 'react-test-renderer';

  test('should match with navbar snapshot', () => {
    const navComponent = create(<NavBar />);
    expect(navComponent.toJSON()).toMatchSnapshot();
  });