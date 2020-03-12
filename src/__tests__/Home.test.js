import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('email input', () => {
  const app = mount(<Home />);
  expect(app.find('input[type="email"]').length).toBe(2);
  //expect(app.find('input[type="email"]').exists()).toBe(true)
  expect(app.find('input[type="password"]').length).toBe(2);
});