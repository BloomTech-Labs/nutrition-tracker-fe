import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { useToasts } from "react-toast-notifications";
import { ToastProvider } from "react-toast-notifications";
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

const mockFoodItem = [
  {
        "id": 1,
        "fatsecret_food_id": 6847,
        "serving_id": 25124,
        "retrieved_at": "2019-12-15T06:14:38.021Z",
        "food_name": "Vegetable Soup (Dry Mix)",
        "serving_url": "https://www.fatsecret.com/calories-nutrition/generic/vegetable-soup-dry-mix-not-reconstituted?portionid=25124&portionamount=1.000",
        "serving_desc": "1 tbsp",
        "metric_serving_amt": "1.20",
        "metric_serving_unit": "g",
        "calories_kcal": "4.00",
        "fat_g": "0.06",
        "carbs_g": "0.72",
        "protein_g": "0.14",
        "saturated_fat_g": "0.03",
        "monounsaturated_fat_g": "0.02",
        "polyunsaturated_fat_g": "0.01",
        "trans_fat_g": null,
        "fiber_g": "0.00",
        "sugar_g": "0.05",
        "cholesterol_mg": "0.00",
        "sodium_mg": "81.00",
        "potassium_mg": "7.00",
        "vitamin_a_daily_pct": "0.00",
        "vitamin_c_daily_pct": "1.00",
        "calcium_daily_pct": "0.00",
        "iron_daily_pct": "0.00"
    },
    {
        "id": 2,
        "fatsecret_food_id": 6847,
        "serving_id": 25324,
        "retrieved_at": "2019-12-15T06:14:38.022Z",
        "food_name": "Vegetable Soup (Dry Mix)",
        "serving_url": "https://www.fatsecret.com/calories-nutrition/generic/vegetable-soup-dry-mix-not-reconstituted?portionid=25324&portionamount=1.000",
        "serving_desc": "1 packet",
        "metric_serving_amt": "38.50",
        "metric_serving_unit": "g",
        "calories_kcal": "125.00",
        "fat_g": "1.96",
        "carbs_g": "23.06",
        "protein_g": "4.52",
        "saturated_fat_g": "0.89",
        "monounsaturated_fat_g": "0.74",
        "polyunsaturated_fat_g": "0.19",
        "trans_fat_g": null,
        "fiber_g": "1.20",
        "sugar_g": "1.45",
        "cholesterol_mg": "1.00",
        "sodium_mg": "2588.00",
        "potassium_mg": "233.00",
        "vitamin_a_daily_pct": "12.00",
        "vitamin_c_daily_pct": "23.00",
        "calcium_daily_pct": "2.00",
        "iron_daily_pct": "8.00"
    },
    {
        "id": 3,
        "fatsecret_food_id": 6847,
        "serving_id": 23251,
        "retrieved_at": "2019-12-15T06:14:38.022Z",
        "food_name": "Vegetable Soup (Dry Mix)",
        "serving_url": "https://www.fatsecret.com/calories-nutrition/generic/vegetable-soup-dry-mix-not-reconstituted?portionid=23251&portionamount=1.000",
        "serving_desc": "1 Amount dry mix to make 8 fl oz prepared",
        "metric_serving_amt": "18.50",
        "metric_serving_unit": "g",
        "calories_kcal": "60.00",
        "fat_g": "0.94",
        "carbs_g": "11.08",
        "protein_g": "2.17",
        "saturated_fat_g": "0.43",
        "monounsaturated_fat_g": "0.35",
        "polyunsaturated_fat_g": "0.09",
        "trans_fat_g": null,
        "fiber_g": "0.60",
        "sugar_g": "0.70",
        "cholesterol_mg": "1.00",
        "sodium_mg": "1244.00",
        "potassium_mg": "112.00",
        "vitamin_a_daily_pct": "6.00",
        "vitamin_c_daily_pct": "11.00",
        "calcium_daily_pct": "1.00",
        "iron_daily_pct": "4.00"
    },
    {
        "id": 4,
        "fatsecret_food_id": 6847,
        "serving_id": 55527,
        "retrieved_at": "2019-12-15T06:14:38.022Z",
        "food_name": "Vegetable Soup (Dry Mix)",
        "serving_url": "https://www.fatsecret.com/calories-nutrition/generic/vegetable-soup-dry-mix-not-reconstituted?portionid=55527&portionamount=100.000",
        "serving_desc": "100 g",
        "metric_serving_amt": "100.00",
        "metric_serving_unit": "g",
        "calories_kcal": "325.00",
        "fat_g": "5.09",
        "carbs_g": "59.90",
        "protein_g": "11.73",
        "saturated_fat_g": "2.32",
        "monounsaturated_fat_g": "1.91",
        "polyunsaturated_fat_g": "0.50",
        "trans_fat_g": null,
        "fiber_g": "3.00",
        "sugar_g": "3.77",
        "cholesterol_mg": "3.00",
        "sodium_mg": "6722.00",
        "potassium_mg": "605.00",
        "vitamin_a_daily_pct": "31.00",
        "vitamin_c_daily_pct": "59.00",
        "calcium_daily_pct": "5.00",
        "iron_daily_pct": "21.00"
    }
];

describe("<FoodItem />", () => {
  test("FoodItem component", () => {
    const mockUseToasts = sinon.spy(useToasts);

    // the component file might not be using searchTerm from state
    // tests for that were not created yet
    store = _bigMockStore_({
      foodItemsReducer: {
        items: mockItems,
        item: mockFoodItem
      },
      dailyLog: {
        consumed: {
          caloriesConsumed: 0,
          fatsConsumed: 0,
          carbsConsumed: 0,
          proteinConsumed: 0
        },
        currentDate: "2019-12-15",
        currentTimeZone: "America/New_York"
      },
      firebase: {
        auth: {
          uid: "1234"
        },
        profile: {
          isLoaded: true
        }
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
          <ToastProvider number="5000">
            <FoodItem match={{
              path: "food_item"
            }}/>
          </ToastProvider>
        </Provider>
      </MemoryRouter>
    );
    
    
    expect(wrapper.find("#food-name").first().exists()).toBe(true);

    


    
    console.log(mockUseToasts.called);
    console.log(wrapper.debug());

  });
});
