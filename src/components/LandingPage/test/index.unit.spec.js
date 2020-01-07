import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import LandingPageConnected, { LandingPage } from "../index";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";


describe("<LandingPage />", () => {
    let loggedOutState = {
        firebase: { auth: { isEmpty: true } }
      },
      loggedInState = {
        firebase: { auth: { isEmpty: false } }
      }
    let store;
  test("<LandingPageConnected />", () => {
      store = global._bigMockStore_(loggedOutState);
    let wrapper = mount(
      <MemoryRouter initialEntries={["/landing"]}>
        <Provider store={store}>
          <LandingPageConnected />
        </Provider>
      </MemoryRouter>
    );

    
    expect(wrapper.find("#loginButton").exists()).toBe(true);
    expect(wrapper.find("#createAccountButton").exists()).toBe(true);
    
    
    store = global._bigMockStore_(loggedInState);
    wrapper = mount(
      <MemoryRouter initialEntries={["/landing"]}>
        <Provider store={store}>
          <LandingPageConnected />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
});

  test("<LandingPage />", () => {
      let mockPush = sinon.spy(),
          mockHistory = {push: mockPush };
    let wrapper = mount(
        <MemoryRouter initialEntries={["/landing"]}>
        <Provider store={store}>
          <LandingPage history={mockHistory}/>
        </Provider>
      </MemoryRouter>
    )

    wrapper.find("#loginButton").first().simulate("click");
    expect(mockPush.args[0]).toStrictEqual(["/login"]);
    wrapper.find("#createAccountButton").first().simulate("click");
    expect(mockPush.args[1]).toStrictEqual(["/onboarding/sex"]);
    //console.log(wrapper.debug());
  })
});



