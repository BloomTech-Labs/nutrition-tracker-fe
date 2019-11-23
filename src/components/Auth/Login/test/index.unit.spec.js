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
import { LoginWithEmail } from "../LoginWithEmail";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mount, shallow, configure } from "enzyme";
// sinon is a spy library that will help us track if simulated events are calling the functions we want
// https://sinonjs.org/releases/v7.5.0/spies/
import sinon from 'sinon';

//configure({ adapter: new Adapter() });

describe("<Login />", () => {
  let store = global._bigMockStore_();
  test("Login component is rendered", () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <Login isLoggedIn match={{ path: "/login" }} />
        </Provider>
      </MemoryRouter>
    );
    //console.log(wrapper.debug());
    //wrapper.setProps({isLoggedIn: true});
    // console.log(wrapper.props());
    // console.log(wrapper.debug());
    expect(wrapper.find("Redirect")).toHaveLength(1);
    wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <Login isLoggedIn={false} match={{ path: "/login" }} />
        </Provider>
      </MemoryRouter>
    );
    
		expect(wrapper.find(LoginOptions)).toHaveLength(1);
		wrapper = mount(
      <MemoryRouter initialEntries={["/login/email"]}>
        <Provider store={store}>
          <Login isLoggedIn={false} match={{ path: "/login" }} />
        </Provider>
      </MemoryRouter>
    );
		expect(wrapper.find(LoginWithEmail)).toHaveLength(1);

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
		// init a fake googleLogin function
		const mockGoogleLogin = sinon.spy();
		// pass the fake googleLogin to our component
    let wrapper = shallow(<LoginOptions googleLogin={mockGoogleLogin}/>);
		
		// check to see that <LoginOptions /> was rendered
		expect(wrapper.exists()).toBe(true);
		// need to pass prevenDefault(){} on the synthetic event to avoid `e.preventDefault is undefined` error
		// https://github.com/airbnb/enzyme/issues/323
		wrapper.find("#googleAuth").simulate("click", { preventDefault() {} });
		// now we'll check that our mock googleLogin was called as expected
		console.log(mockGoogleLogin);
		expect(mockGoogleLogin.called).toBe(true);
  });
});
