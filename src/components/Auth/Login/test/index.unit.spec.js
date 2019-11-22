/*
 *********************
 *
 * ✓ Add enzyme and react-test-renderer dependencies
 * ? Do we need to mock BrowserRouter... it may affect our MemoryRouter
 *
 *
 *
 *********************
 */

import React from "react";
import { Login } from "../index";
import { LoginOptions } from "../LoginOptions";

import { MemoryRouter } from "react-router";

import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Login />", () => {
  test("Login component is rendered", () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Login isLoggedIn match={{path: "/login"}}/>
      </MemoryRouter>
		);
		//console.log(wrapper.debug());
		//wrapper.setProps({isLoggedIn: true});
		console.log(wrapper.props());
    console.log(wrapper.debug());
		expect(wrapper.find("Redirect")).toHaveLength(1);
		wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Login isLoggedIn={false} match={{path: "/login"}}/>
      </MemoryRouter>
		);
		console.log(wrapper.debug());
		expect(wrapper.find("Redirect")).toHaveLength(0);
	});


	/*
	Render the loginoptions component
	we can see the child nodes
	what can we test here?
	what do we expect this to do?
	the component takes props and path
	it also handles onclick events to do google, fb and email auth
	this component is rendered when user is not logged in and route is /login

	*/

  test("<LoginOptions />", () => {
      let wrapper = shallow(
          <LoginOptions />
			)
			console.log(wrapper.debug());
      expect(wrapper.exists()).toBe(true);
  })
});
