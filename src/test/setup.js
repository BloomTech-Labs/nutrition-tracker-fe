import { mount, configure } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

function bigMocker(initialState, middlewares = []) {
    initialState = {};
    const mockStore = configureStore(middlewares);
    let store;

    configure({ adapter: new Adapter() });

    return store = mockStore(initialState);

}

