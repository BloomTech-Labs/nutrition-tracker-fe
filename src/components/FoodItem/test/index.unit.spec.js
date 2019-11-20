import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
<<<<<<< HEAD
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// import your action
import FETCH_SUCCESS from "../../../store/actions/foodItemAction";
// function that emulates a successful response from the api
function fetchData() {
  return dispatch => {
    return { type: FETCH_SUCCESS };
  };
}

// TODO: DRY store so that we don't have to recreate this
//mock store stuff on every tested component
/*const initialState = {};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

configure({ adapter: new Adapter() });*/
=======
>>>>>>> 2c567aef60383501b31aa8ed2f9611a5758705d0



function bigMocker(initialState, middlewares = []) {
    initialState = {};
    const mockStore = configureStore(middlewares);
    let store;

    configure({ adapter: new Adapter() });

    return store = mockStore(initialState);

}

let store;
describe("<SearchForm />", () => {
<<<<<<< HEAD
  beforeEach(() => {
      store = bigMocker({},[thunk]);
    // store = mockStore(initialState);
    // store.dispatch(fetchData());
  });

  test("simulate click event", async () => {
    // TODO: need to mock searchFoodItems module and pass it to searchFoodItems prop
    const wrapper = await mount(
      <Provider store={store}>
        <SearchForm  />
=======
  test("simulate click event", async () => {
    // TODO: need to mock searchFoodItems module and pass it to searchFoodItems prop
    const wrapper = await mount(
      <Provider store={_bigMockStore_()}>
        <SearchForm />
>>>>>>> 2c567aef60383501b31aa8ed2f9611a5758705d0
      </Provider>
    );

    // .simulate() gets given prop and calls it, for example onChange is being called here
    // the second arg to .simulate() is an event object that we want passed down!
    await wrapper
      .find("input#search_term")
      .simulate("change", { target: { value: "bacon" } });

    // we'd be expecting the value prop to be "bacon" after we've simulated a change
    expect(wrapper.find("input#search_term").prop("value")).toBe("bacon");
  });
});
