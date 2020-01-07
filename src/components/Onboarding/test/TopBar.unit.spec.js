import React from "react";
import TopBar from "../TopBar";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";
import sinon from "sinon";

describe("<Onboarding />", ()=>{
    test("<Onboarding /> index file renders as expected", () => {
        const mockHistory = {goBack: sinon.spy()};
    let wrapper = mount(
        <TopBar history={mockHistory} title={"Fake Page"}/>
    )

    
    expect(wrapper.find("#pageTitle").first().text()).toBe("Fake Page");
    wrapper.find("#goBack").first().simulate("click");
    expect(mockHistory.goBack.called).toBe(true);
    });
});