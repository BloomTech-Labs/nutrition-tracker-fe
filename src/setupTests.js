import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

// To find out
configure({ adapter: new Adapter() });

function _bigMockStore_(initialState = {}, middlewares = []) {
  // Global variables should have a _ at the beginning and at the end
  const mockStore = configureStore([...middlewares, thunk]);
  return mockStore(initialState);
}

// Takes your mounted wrapper, an array of components to look for, and whether you want to console log some details
function _doesThisRender_(wrapper, components, logger = false) {
  logger ? console.log("Global render checker\n ", `Wrapper: \n${wrapper.debug()}\n`, `Components: ${components}`) : null;
  if (Array.isArray(components)) {
  for(const component of components) {
    expect(wrapper.find(component).first().exists()).toBe(true);
  } } else {
  expect(wrapper.find(components).first().exists()).toBe(true);
  }
}

global._bigMockStore_ = _bigMockStore_;
global._doesThisRender_ = _doesThisRender_;


