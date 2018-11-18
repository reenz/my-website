import React from 'react';
import { shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import About from '../About/About'
import { MemoryRouter } from 'react-router';
import Navigation from './Navigation';


describe("Navigation", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders its child component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Navigation/>
      </MemoryRouter>);
    expect(wrapper.find(About).length).toEqual(1);
    
  })

})