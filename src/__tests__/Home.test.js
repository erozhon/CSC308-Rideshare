import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

//describe("Home", () => {
//   it("should render Home", () => {
//     const wrapper = shallow(<Home />);
//   });

// 	let wrapper;
// 	const setState = jest.fn();
// 	const useStateSpy = jest.spyOn(React, "useState")
// 	useStateSpy.mockImplementation((init) => [init, setState]);

// 	beforeEach(() => {
// 	    wrapper = mount(shallow(<Home />).get(0))
// 	});

// 	describe("Email input", () => {
// 	    it("Should capture email correctly onChange", () => {
// 	        const email = wrapper.find("input").at(0);
// 	        email.instance().value = "Test@gmail.com";
// 	        email.simulate("change");
// 	        expect(setState).toHaveBeenCalledWith("Test@gmail.com");
// 	    });
// 	});

// 	afterEach(() => {
// 	    jest.clearAllMocks();
// 	});

// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

it('email input', () => {
  const app = mount(<Home />);
  expect(app.find('input[type="email"]').length).toBe(2);
  //expect(app.find('input[type="email"]').exists()).toBe(true)
  expect(app.find('input[type="password"]').length).toBe(2);
});


