import React from "react";
import ActivityLevel from "../ActivityLevel";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import sinon from "sinon";


describe("<ActivityLevel />", () => {
    test("<ActivityLevel /> renders as expected", () => {
        let store = global._bigMockStore_({onboarding: {sex: true}});
        let wrapper = mount(
            <MemoryRouter initialEntries={["onboarding/activity-level"]}>
                <Provider store={store} >
                    <ActivityLevel path={"onboarding"}/>
                </Provider>
            </MemoryRouter>
        )

        _doesThisRender_(wrapper, ["#sedentaryButton","#lightButton","#moderateButton","#veryButton","#extraButton"])

        store = global._bigMockStore_({onboarding: {sex: false}});
        wrapper = mount(
            <MemoryRouter initialEntries={["onboarding/activity-level"]}>
                <Provider store={store} >
                    <ActivityLevel path={"onboarding"}/>
                </Provider>
            </MemoryRouter>
        )

        _doesThisRender_(wrapper, "Redirect");
    })
})