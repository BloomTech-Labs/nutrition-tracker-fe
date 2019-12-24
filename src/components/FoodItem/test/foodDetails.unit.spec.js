import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import sinon from "sinon";
import FoodDetailsConnected, { FoodDetails } from "../foodDetails";

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

describe("<FoodDetails />", () => {
    let store = global._bigMockStore_({foodItemsReducer: { item: mockItems}});

    test("<FoodDetailsConnected />", () =>{
        const mockGetFoodItem = sinon.spy();
        let wrapper = mount(
            <Provider store={store}>
                <FoodDetailsConnected match={{params: { food_id: 777 }}} getOneFoodItem={mockGetFoodItem}/>
            </Provider>
        )
        expect(wrapper.find("Dropdown").exists()).toBe(true);
        expect(wrapper.find("DropdownToggle").exists()).toBe(true);
        expect(wrapper.find("DropdownMenu").exists()).toBe(true);

        // TODO: hit handleToggle()
        // TODO: hit handleSelect()
        // TODO: hit onChange param of quantity Input component
        // TODO: fix componentWillMount warning
        // TODO: mock chartjs library to remove `HTMLCanvasElement.prototype.getContext` error
        // TODO: Remove all snapshot tests and folders
    })
})