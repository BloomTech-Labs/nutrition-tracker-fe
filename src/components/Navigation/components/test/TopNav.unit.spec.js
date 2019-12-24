import React from "react";
import TopNavHOC, { TopNav } from "../TopNav";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import sinon from "sinon";

describe("<TopNav />", () => {
  test("<TopNav /> renders as expected", () => {
    let wrapper = mount(
      <MemoryRouter>
        <TopNavHOC />
      </MemoryRouter>
    );
    expect(wrapper.find("NavbarBrand").exists()).toBe(true);

    // testing back button without router HOC
    let mockHistory = { goBack: sinon.spy() };
    wrapper = mount(<TopNav history={mockHistory} />);

    wrapper
      .find("#backButton")
      .first()
      .simulate("click");
    expect(mockHistory.goBack.called).toBe(true);
  });
});
