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
import { mount, shallow } from "enzyme";
// sinon is a spy library that will help us track if simulated events are calling the functions we want
// https://sinonjs.org/releases/v7.5.0/spies/
import sinon from "sinon";

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
    // init fake googleLogin and facebookLogin functions
    const mockGoogleLogin = sinon.spy(),
			mockFacebookLogin = sinon.spy();
			
			// to test this emailAuth button we'll have to mock the history object
		// first we init a new sinon spy
		const mockPush = sinon.spy();
		// then init a history object, with a push key that invokes the spy
		const mockHistory = { push: mockPush };

    // pass the mock login functions and mock history object as props to our component
    let wrapper = shallow(
      <LoginOptions
        googleLogin={mockGoogleLogin}
				facebookLogin={mockFacebookLogin}
				history={mockHistory}
				path={"login"}
      />
    );

    // check to see that <LoginOptions /> was rendered
    expect(wrapper.exists()).toBe(true);

    // need to pass prevenDefault(){} on the synthetic events to avoid `e.preventDefault is undefined` error
    // https://github.com/airbnb/enzyme/issues/323
		wrapper.find("#googleAuth").simulate("click", { preventDefault() {} });
		
    // now we'll check that our mock googleLogin was called as expected
    expect(mockGoogleLogin.called).toBe(true);

		// same with the facebookLogin
    wrapper.find("#facebookAuth").simulate("click", { preventDefault() {} });
		expect(mockFacebookLogin.called).toBe(true);

		// for the email button we expect the spy's push method to be invoked with an argument
		wrapper.find("#emailAuth").simulate("click");
		
		// console.log(mockHistory.push.lastCall.args);
		// console.log(wrapper.instance().props.path);

		// on shallow rendered tests, we need to use instance().props to get props
		// https://airbnb.io/enzyme/docs/api/ShallowWrapper/instance.html
		expect(mockHistory.push.calledWith(`${wrapper.instance().props.path}/email`)).toBe(true);
  });
});
