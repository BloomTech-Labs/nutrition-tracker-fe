/*
 *******************************************************
 *          <Login /> COMPONENT TESTS 
 * ✓ Add enzyme and react-test-renderer dependencies
 * ✓ Add sinon dependency
 * ✓ <Login /> 100% coverage
 * ✓ <LoginOptions /> 100% coverage
 * ✓ <LoginWithEmail /> 100% coverage
 * ✓ Clean up code
 *
 *******************************************************
 */

import React from "react";
import { Login, mapStateToProps } from "../index";
import { LoginOptions } from "../LoginOptions";
import { LoginWithEmail } from "../LoginWithEmail";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
// sinon is a spy library that will help us track if simulated events are calling the functions we want
// https://sinonjs.org/releases/v7.5.0/spies/
import sinon from "sinon";

describe("<Login />", () => {
	// init our mock store with a firebase.auth.isEmpty key because mapStateToProps is expecting it
	// when isEmpty is true, isLoggedIn is set to false
	let initialState = {firebase: {auth: {isEmpty: true }}};
	let store = global._bigMockStore_(initialState);
	
  test("Login component is rendered", () => {
		// We wrap our component in <MemoryRouter> because it is dependent on react router
    let wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
				{/* We then wrap it in <Provider> so that we can pass in our mock store : ) */}
        <Provider store={store}>
					{/* we override the isLoggedIn with true to test this condition */}
          <Login isLoggedIn={true} match={{ path: "/login" }} />
        </Provider>
      </MemoryRouter>
		);
		
		// to get 100% coverage on this component, we'll test mapStateToProps
		// that means we had to export it from Login/index.js which might be code smell...
		expect(mapStateToProps(initialState)).toStrictEqual({isLoggedIn: false});

		// when loggedIn is true, only this <Redirect /> component is rendered
		expect(wrapper.find("Redirect")).toHaveLength(1);
		
		// begin tests of condition when loggedIn is false
    wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <Login match={{ path: "/login" }} />
        </Provider>
      </MemoryRouter>
    );
		// when loggedIn is false, and we're on the /login route, <LoginOptions /> should be rendered
		expect(wrapper.find(LoginOptions).exists()).toBe(true);

		// when loggedIn is false and we're on the login/email route, <LoginWithEmail /> should be rendered
    wrapper = mount(
			<MemoryRouter initialEntries={["/login/email"]}>
        <Provider store={store}>
          <Login isLoggedIn={false} match={{ path: "/login" }} />
        </Provider>
      </MemoryRouter>
    );
		expect(wrapper.find(LoginWithEmail).exists()).toBe(true);
  });

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

		
		wrapper.find("#emailAuth").simulate("click");
		// for the email button we expect the spy's push method to be invoked with an argument
		// on shallow rendered tests, we need to use instance().props to get props
		// https://airbnb.io/enzyme/docs/api/ShallowWrapper/instance.html
		expect(mockHistory.push.calledWith(`${wrapper.instance().props.path}/email`)).toBe(true);
	});
	
	test("<LoginWithEmail />", () => {
		let mockLogin = sinon.spy();
		let wrapper = shallow(
			<LoginWithEmail login={mockLogin}/>
		)

		// emailInput tests
		expect(wrapper.find("#emailInput").exists()).toBe(true);
		wrapper.find("#emailInput").simulate("change", {target: {name: "email", value: "fake@email.com"}});
		expect(wrapper.state("email")).toBe("fake@email.com");
		
		// passwordInput tests
		expect(wrapper.find("#passwordInput").exists()).toBe(true);
		wrapper.find("#passwordInput").simulate("change", {target: {name: "password", value: "fakePassword"}});
		expect(wrapper.state("password")).toBe("fakePassword");

		// loginForm tests
		expect(wrapper.find("#loginForm").exists()).toBe(true);
		wrapper.find("#loginForm").simulate("submit", { preventDefault() {} });
		expect(mockLogin.calledWith("fake@email.com","fakePassword")).toBe(true);

	})
});
