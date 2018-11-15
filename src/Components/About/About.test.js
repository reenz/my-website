import React from 'react';
import About from './About.js';
import { shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({ adapter: new Adapter()});

describe('About component',() => {
  it("renders without crashing", () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.length).toEqual(1);
  })
})
