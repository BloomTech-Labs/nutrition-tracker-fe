import React from "react";
import BasicInfoConnected, { BasicInfo } from "../BasicInfo";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import sinon from "sinon";


describe("<BasicInfo />", () => {
    test("<BasicInfo />  pure component renders as expected", () => {
        let store = global._bigMockStore_({onboarding: {sex: true}});
        let wrapper = mount(
            <MemoryRouter initialEntries={["onboarding/activity-level"]}>
                <Provider store={store} >
                    <BasicInfo path={"onboarding"} activityLevel={true}/>
                </Provider>
            </MemoryRouter>
        )

        _doesThisRender_(wrapper, ["#submitButton","#weightInput","#heightInchesInput","#heightFeetInput","#birthdatePicker"])

/*
        store = global._bigMockStore_({onboarding: {sex: false}});
        wrapper = mount(
            <MemoryRouter initialEntries={["onboarding/activity-level"]}>
                <Provider store={store} >
                    <ActivityLevel path={"onboarding"}/>
                </Provider>
            </MemoryRouter>
        )

        _doesThisRender_(wrapper, "Redirect");
    */
    })
})