import React from 'react';
import { shallow} from 'enzyme';
import Experience from './Experience.js';

describe("About component",() => {

  const data =  [
    {
      "CompanyName": "CompanyOne",
      "title": "Developer",
      "duration": "2018",
      "description": ["Description"
      ]
    }
  ]
  it("renders without crashing", () => {
    const wrapper = shallow(<Experience experience={data} />);
    expect(wrapper.length).toEqual(1);
  })

  it("should render experience", () => {
    const wrapper = shallow(<Experience experience={data} />);
    expect(wrapper.text()).toContain("CompanyOne")
  })
})