import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from 'react-test-renderer';

test('it should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should match with app snapshot', () => {
  const appComponent = create(<App />);
  expect(appComponent.toJSON()).toMatchSnapshot();
})
