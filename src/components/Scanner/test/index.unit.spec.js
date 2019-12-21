import React from "react";
import { mount } from "enzyme";
import Scanner from "../../Scanner";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

let store = _bigMockStore_();

describe("<Scanner /> ", () => {
    test("<Scanner /> component should render on the /scanner route", () => {
        let wrapper = mount(
            <MemoryRouter initialEntries={["/scanner"]}>
            
              <Provider store={store}>
           
                <Scanner match={{ path: "/scanner" }} />
              </Provider>
            </MemoryRouter>
          );

        console.log(wrapper.debug());
        expect(wrapper.find("Scanner").exists()).toBe(true);
    })

})