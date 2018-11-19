import React from 'react';
import Hero from './Hero.js';
import { shallow} from 'enzyme';

describe("Hero component",() => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Hero/>);
    expect(wrapper.length).toEqual(1);
  })

  it("renders hero heading", () => {
    const wrapper = shallow(<Hero/>);
    expect(wrapper.text()).toContain("Hi! I am Reena Sharma")
  })
})
