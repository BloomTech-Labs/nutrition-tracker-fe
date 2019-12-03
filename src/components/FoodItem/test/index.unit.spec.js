import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import SearchResults from "../searchResults";
import SearchPage from "../searchPage";

/*
  [TODO]: !
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

describe("<SearchResults/>", () => {
  beforeEach(async () => {
    store = global._bigMockStore_({
      foodItemsReducer: {
        items: []
      }
    });
  });

  test("Renders", async () => {
    const searchWrapper = await mount(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    expect(searchWrapper).toMatchSnapshot();
  });

  test("Renders Results when availables", async () => {
    store = global._bigMockStore_({
      foodItemsReducer: {
        items: mockItems
      }
    });

    const searchWrapper = await mount(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    expect(searchWrapper.find("tr")).not.toHaveLength(0);
  });

  test("Doesn't break without items", async () => {
    store = global._bigMockStore_({
      foodItemsReducer: {}
    });

    const searchWrapper = await mount(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    expect(searchWrapper.find("tr")).toHaveLength(0);
    expect(searchWrapper.find("tbody")).toHaveLength(1);
  });

  test("Click event calls store once when triggered", async () => {
    store = global._bigMockStore_({
      foodItemsReducer: {
        items: mockItems
      }
    });

    const handleGetFoodItem = jest.fn();

    const searchWrapper = await mount(
      <Provider store={store}>
        <SearchResults handleGetFoodItem={handleGetFoodItem} />
      </Provider>
    );

    searchWrapper
      .find("tr")
      .at(0)
      .simulate("click");

    // We have three objects on the mock store, find will find the 3 of them and simulate click
    // therefore store.dispatch will has been called once per child rendered
    expect(handleGetFoodItem.mock.calls.length).toBe(1);
  });
});

describe("<SearchPage/>", () => {
  beforeEach(() => {
    store = global._bigMockStore_();
  });

  test("Renders", async () => {
    // We don't want to full render this component because it renders other and we will have to mock EVERYTHING.
    const searchWrapper = await shallow(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );
    expect(searchWrapper).toMatchSnapshot();
  });

  test("Renders <SearchForm/> and <SearchResults/>", async () => {
    store = global._bigMockStore_({
      foodItemsReducer: {
        items: mockItems
      }
    });

    const getOneFoodItem = jest.fn();

    const searchWrapper = await mount(
      <Provider store={store}>
        <SearchPage getOneFoodItem={getOneFoodItem} />
      </Provider>
    );

    expect(
      searchWrapper
        .find(SearchResults)
        .first()
        .exists()
    ).toBe(true);

    expect(
      searchWrapper
        .find(SearchForm)
        .first()
        .exists()
    ).toBe(true);
  });
});
