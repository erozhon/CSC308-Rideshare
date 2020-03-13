import React from 'react';
import { shallow, mount } from 'enzyme';
import RideOfferPage from '../Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("RideOfferPage", () => {
  it("should render RideOfferPage", () => {
    const wrapper = shallow(<RideOfferPage />);
  });
});