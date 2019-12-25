import React from "react";
import BottomNav from "../BottomNav";
import { mount } from "enzyme";

describe("<BottomNav />", () => {
    test("<BottomNav /> renders as expected", () => {
        let wrapper = mount(
            <BottomNav />
        )
        expect(wrapper.find("NavLink").length).toBe(4);
    })
})