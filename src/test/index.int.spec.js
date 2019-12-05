import App from "../App";
import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";

const store = global._bigMockStore_();

describe("<App />", () => {
    test("Main <App /> component renders", () => {
        const wrapper = shallow(
            <Provider store={store} >
        <App />
        </Provider>);
        console.log(wrapper.debug());
    })
})