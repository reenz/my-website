import React from 'react';
import { shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import About from './Components/About/About'
import App from './App';


describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders its child component", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.text()).toContain("<About />");
    
  })

})



