import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginView from '../Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("LoginView", () => {
  it("should render Login", () => {
    const wrapper = shallow(<LoginView />);
  });
});

it('email input', () => {
  const app = mount(<LoginView />);
  expect(app.find('input[type="email"]').length).toBe(2); // shouldnt it be 1???
  expect(app.find('input[type="password"]').length).toBe(2); //shouldnt it be 1??
});

// it('should disable submit button on submit click', () => {
//     const wrapper = mount(<LoginView />);
//     const submitButton = wrapper.find(Button);
//     submitButton.simulate('click');

//     expect(submitButton.prop('disabled')).toBeTruthy();
//  });

// describe('<LoginView /> with no props', () => {
//   const container = shallow(<LoginView />);
//   // it('should match the snapshot', () => {
//   //   expect(container.html()).toMatchSnapshot();
//   // });

//   // it('should have an email field', () => {
//   //   expect(container.find('input[type="email"]').length).toEqual(1);
//   // });

//   it('should have proper props for email field', () => {
//     expect(container.find('input[type="email"]').props()).toEqual({
//       // className: 'mx-auto my-2',
//       // onBlur: expect.any(Function),
//       placeholder: 'email',
//       type: 'email',
//     });
//   });

//   // it('should have a password field', () => { /* Similar to above */ });
//   // it('should have proper props for password field', () => {  Trimmed for less lines to read  });
//   // it('should have a submit button', () => { /* */ });
//   // it('should have proper props for submit button', () => { /* */ });
// });