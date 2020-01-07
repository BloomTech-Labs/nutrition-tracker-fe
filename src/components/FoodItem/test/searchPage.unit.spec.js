import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import SearchResults from "../searchResults";
import SearchPageConnected, { SearchPage } from "../searchPage";
import sinon from "sinon";

let store;
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

describe("<SearchPage/>", () => {
    beforeEach(() => {
      store = global._bigMockStore_();
    });
  
    test("Renders", () => {
      store = global._bigMockStore_({foodItemsReducer: {items: mockItems}})
      let wrapper = mount(
        <Provider store={store}>
          <SearchPageConnected />
        </Provider>
      );
      expect(wrapper.find("SearchForm").exists()).toBe(true);
      expect(wrapper.find("SearchResults").exists()).toBe(true);
  
      const mockGetFoodItem = sinon.spy();
      console.log(store.getState());
      wrapper = mount(
        <Provider store={store}>
          <SearchPage getOneFoodItem={mockGetFoodItem} />
        </Provider>
      )
  
      console.log(mockGetFoodItem.getCalls());
  
      // TODO: hit handleFoodItem method on <SearchPage /> component
  
  
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