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

global._bigMockStore_ = _bigMockStore_;