import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import sinon from "sinon";
import FoodItem from "../index.js";

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

describe("<FoodItem />", () => {
  test("FoodItem component", () => {
  
    // the component file might not be using searchTerm from state
    // tests for that were not created yet
    store = _bigMockStore_({
      foodItemsReducer: {
        items: mockItems
      }
    });

    wrapper = mount(
      <MemoryRouter initialEntries={["food_item/search"]}>
        <Provider store={store}>
          <FoodItem match={{
            path: "food_item"
          }}/>
        </Provider>
      </MemoryRouter>
    );

    wrapper = mount(
      <MemoryRouter initialEntries={["food_item/view/6847"]}>
        <Provider store={store}>
          <FoodItem match={{
            path: "food_item"
          }}/>
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.debug());

  });
});
