import React from "react";
import Onboarding from "../index";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";
import sinon from "sinon";

describe("<Onboarding />", ()=>{
    test("<Onboarding /> index file renders as expected", () => {
    let wrapper = mount(
        <MemoryRouter initialEntries={["onboarding/sex"]}>
            <Onboarding match={"onboarding"} />
        </MemoryRouter>
    )

    _doesThisRender_(wrapper, "Container", true);
    });
});