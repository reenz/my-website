import React from 'react';
import ReactDOM from 'react-dom';
import About from './Components/About/About'
import App from './App';
import { MemoryRouter } from 'react-router';
import { shallow, mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ({ adapter: new Adapter()});

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders its child component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>);
    expect(wrapper.find(About).length).toEqual(1);
    
  })

})



