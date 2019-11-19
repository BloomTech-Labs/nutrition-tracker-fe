import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";

describe("<SearchForm />", () => {
  test("simulate click event", async () => {
    // TODO: need to mock searchFoodItems module and pass it to searchFoodItems prop
    const wrapper = await mount(
      <Provider store={_bigMockStore_()}>
        <SearchForm />
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
