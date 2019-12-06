/*
import App from "../App";
import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

const store = global._bigMockStore_();

describe("<App />", () => {
    test("Main <App /> component renders", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]} >
            <Provider store={store} >
        <App />
        </Provider>
        </ MemoryRouter>);
        expect(wrapper.find("AppWrapper").exists()).toBe(true);
    })
})
*/