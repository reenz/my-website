import React from 'react';
import About from './About.js';
import { shallow} from 'enzyme';

describe("About component",() => {
  it("renders without crashing", () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.length).toEqual(1);
  })

  it("should render About text", () => {
    const wrapper = shallow(<About about="I am Reena Sharma"/>);
    expect(wrapper.text()).toContain("I am Reena Sharma")
  })
})
