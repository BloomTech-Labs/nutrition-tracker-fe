import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import SearchResults from "../searchResults";
import SearchPageConnected, { SearchPage } from "../searchPage";
import sinon from "sinon";


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
      // expect(searchWrapper.find("tbody")).toHaveLength(1);
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