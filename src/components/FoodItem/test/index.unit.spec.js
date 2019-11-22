// 1. import mount, provider, your component to test and your middlewares
// make sure that you've exported your component, for example: export { SearchForm };
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import thunk from "redux-thunk";

// 2. define a store variable in the global scope
let store;
describe("<SearchForm />", () => {
  beforeEach(() => {
      // 3. _bigMockStore_(initialState,middlewares) creates a mock store
      store = global._bigMockStore_({},[thunk]);
  });

  test("simulate text input on search bar", async () => {
    // TODO: need to mock searchFoodItems module and pass it to searchFoodItems prop
    // 4. mount your component, making sure you wrap it in a <Provider> to pass the mock store in
    const wrapper = await mount(
      <Provider store={store}>
        <SearchForm  />
      </Provider>
    );

    // .simulate() gets given prop and calls it, for example onChange is being called here
    // the second arg to .simulate() is an event object that we want passed down!
    // 5. Use .find() to select a specific child component within your component that you want to test
    // In this case, we're selecting input with an id of 'search_term'
    await wrapper
      .find("input#search_term")
      // 6. Simulate a click, change etc, and then pass an event object if necessary
      .simulate("change", { target: { value: "bacon" } });

    // 7. Use expect() on the component you want to view props for
    expect(wrapper.find("input#search_term").prop("value")).toBe("bacon");
  });
});
