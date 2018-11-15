import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow} from 'enzyme';
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
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).toContain("<About />")
  })
  
})



