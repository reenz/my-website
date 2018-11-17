import React from 'react';
import About from './About.js';
import { shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({ adapter: new Adapter()});

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
