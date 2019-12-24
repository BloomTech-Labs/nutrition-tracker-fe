import DailyLogConnected, { DailyLog } from "../index";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";
import { MemoryRouter } from "react-router";
import sinon from "sinon";


describe("<DailyLog /> ", () => {
    let initialState = { firebase: { auth: { isEmpty: true } } };

    test("<DailyLog /> renders", () => {
    let store = global._bigMockStore_(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <DailyLogConnected />
      </Provider>
    );

    // No token on the firebase object so should redirect to /landing
    expect(wrapper.find("Loading").exists()).toBe(true);


    // Pass a fake name to render a greeting
    wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
            <DailyLog token={"fakeToken"} user={"FakeUser"}/>
        </Provider>
        </MemoryRouter>
    )

    expect(wrapper.find("DailyLog").find("h2").text()).toBe("Hello, FakeUser!");

    // Fake token and mock logout function passed in to DailyLog component
    const mockLogoutButton = sinon.spy();
    wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
            <DailyLog token={"fakeToken"} logout={mockLogoutButton}/>
        </Provider>
        </MemoryRouter>
    )

    expect(wrapper.find("DailyLog").find("h2").text()).toBe("Welcome to NutriJournal");
    expect(wrapper.find("#profilePic").exists()).toBe(true);
    expect(wrapper.find("#logoutButton").exists()).toBe(true);
    expect(wrapper.find("#settingsLink").exists()).toBe(true);

    wrapper.find("#logoutButton").first().simulate("click", { preventDefault() {} });

    expect(mockLogoutButton.called).toBe(true);


    // setting loading and token props to false  should redirect us to /landing
    wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
            <DailyLog token={false} loading={false}/>
        </Provider>
        </MemoryRouter>
    )

    expect(wrapper.find("Redirect").prop("to")).toBe("/landing");

  });
});
