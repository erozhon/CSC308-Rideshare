// __tests__/RideOfferForm.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
//import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

// import React from 'react'
// import {render, fireEvent, screen} from '@testing-library/react'
// import {RideOfferForm} from '../Home'

// test('allows the user to submit a ride offer form successfully', async () => {
//   // mock out window.fetch for the test
//   const fakeUserResponse = {token: 'fake_user_token'}
//   jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
//     return Promise.resolve({
//       json: () => Promise.resolve(fakeUserResponse),
//     })
//   })

//   render(<RideOfferForm />)

//   // fill out the form
//   fireEvent.change(screen.getByLabelText(/username/i), {
//     target: {value: 'chuck'},
//   })
//   fireEvent.change(screen.getByLabelText(/password/i), {
//     target: {value: 'norris'},
//   })

//   fireEvent.click(screen.getByText(/submit/i))

//   // just like a manual tester, we'll instruct our test to wait for the alert
//   // to show up before continuing with our assertions.
//   //const alert = await screen.findByRole('alert')

//   // .toHaveTextContent() comes from jest-dom's assertions
//   // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
//   // but jest-dom will give you better error messages which is why it's recommended
//   //expect(alert).toHaveTextContent(/congrats/i)
//   expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
// })

import React from 'react';
import { shallow, mount } from 'enzyme';
import RideOfferForm from '../Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Ride offer form', () => {
  const app = mount(<RideOfferForm />);
  //expect(app.find('input[type="text"]').length).toBe(4);
  expect(app.find('input[type="checkbox"]').length).toBe(1);
  expect(app.find('datetime-local').length).toBe(1);
});







