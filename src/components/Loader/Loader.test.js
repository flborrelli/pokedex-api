import React from 'react';
import Loader from './Loader';
import { create } from 'react-test-renderer';

  test('should match with loader snapshot', () => {
    const loaderComponent = create(<Loader />);
    expect(loaderComponent.toJSON()).toMatchSnapshot();
  });