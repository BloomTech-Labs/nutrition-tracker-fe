import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import SearchResults from "../searchResults";
import SearchPageConnected, { SearchPage } from "../searchPage";
import sinon from "sinon";

/*
  [Error cleared]: !
    SearchPage error => <tbody> cannot appear as a child of <div>
*/

let store;
let wrapper;
const mockItems = [
  {
    food_name: "Pupusa",
    standard_amount: 1,
    calories: 2.99
  },
  {
    food_name: "Tacos",
    standard_amount: 4,
    calories: 14.2
  },
  {
    food_name: "Cheese Hamburguer",
    standard_amountt: 1,
    calories: 2093.1
  }
];
describe("<SearchForm />", () => {
  beforeEach(async () => {
    store = global._bigMockStore_();
    wrapper = await mount(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
  });

  test("simulate click event", () => {
    // TODO: need to mock searchFoodItems module and pass it to searchFoodItems prop

    // .simulate() gets given prop and calls it, for example onChange is being called here
    // the second arg to .simulate() is an event object that we want passed down!
    wrapper
      .find("input#search_term")
      .simulate("change", { target: { value: "bacon" } });

    // we'd be expecting the value prop to be "bacon" after we've simulated a change
    expect(wrapper.find("input#search_term").prop("value")).toBe("bacon");
  });

  test("test <SearchForm /> renders a search bar", () => {
    expect(wrapper.find("input#search_term")).toHaveLength(1);
  });
});