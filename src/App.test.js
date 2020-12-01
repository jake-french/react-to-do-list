import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('on inital mount', () => {
  const wrapper = shallow(<App />); 

  test('renders without error', () => {
    expect(wrapper).toHaveLength(1);
  });
});