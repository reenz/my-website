import React from 'react';
import { shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';


describe("App", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App/>);
  })
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders its child About component", () => {
    expect(wrapper.text()).toContain("<About />");
  })

  it("renders its child Experience component", () => {
    expect(wrapper.text()).toContain("<Experience />");
  })

  it("renders its child Navigation component", () => {
    expect(wrapper.text()).toContain("<Navigation />");
  })

})



