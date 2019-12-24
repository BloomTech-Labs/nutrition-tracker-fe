import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import withNavigation from "../withNavigation";

describe("<withNavigation /", () => {
  test("<withNavigation /> renders as expected", () => {
    let mockComponent = () => <div id="mockComponent"></div>;
    let wrapper = mount(
      <MemoryRouter>{withNavigation({})(mockComponent)()}</MemoryRouter>
    );
    

    expect(wrapper.find("mockComponent").exists()).toBe(true);
    // default if two nav bars are being displayed
    expect(wrapper.find("mockComponent").prop("height")).toBe(
      "calc(100vh - (100px))"
    );

    wrapper = mount(
      <MemoryRouter>
        {withNavigation({ displayTop: false })(mockComponent)()}
      </MemoryRouter>
    );
    // only bottom bar is displayed (!displayTop && displayBottom) || (displayTop && !displayBottom)
    expect(wrapper.find("mockComponent").prop("height")).toBe(
      "calc(100vh - (50px))"
    );

    wrapper = mount(
      <MemoryRouter>
        {withNavigation({ displayBottom: false })(mockComponent)()}
      </MemoryRouter>
    );
    // only top bar is displayed (!displayTop && displayBottom) || (displayTop && !displayBottom)
    expect(wrapper.find("mockComponent").prop("height")).toBe(
      "calc(100vh - (50px))"
    );

    wrapper = mount(
      <MemoryRouter>
        {withNavigation({ displayTop: false, displayBottom: false })(
          mockComponent
        )()}
      </MemoryRouter>
    );
    // neither nav bar is displayed
    expect(wrapper.find("mockComponent").prop("height")).toBe("100vh");
  });
});
