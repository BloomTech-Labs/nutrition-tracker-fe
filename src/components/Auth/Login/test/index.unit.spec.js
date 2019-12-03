/*
 *******************************************************
 *          <Login /> COMPONENT TESTS
 * ✓ Add enzyme and react-test-renderer dependencies
 * ✓ Add sinon dependency
 * ✓ <Login /> 100% coverage
 * ✓ <LoginOptions /> 100% coverage
 * ✓ <LoginWithEmail /> 100% coverage
 * ✓ Clean up code
 * ✓ Added mutation tests with stryker
 * ✓ Refactor to test connected components, per best practices
 * ✓ Clean up code... again lol
 *
 *******************************************************
 */

import React from "react";
import { Login, mapStateToProps } from "../index";
import LoginOptionsConnected, { LoginOptions } from "../LoginOptions";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import LoginWithEmailConnected, { LoginWithEmail } from "../LoginWithEmail"; // Need to test the connected version for these tests to be legit...
// sinon is a spy library that will help us track if simulated events are calling the functions we want
// https://sinonjs.org/releases/v7.5.0/spies/
import sinon from "sinon";


describe("<Login />", () => {
  // init our mock store with a firebase.auth.isEmpty key because mapStateToProps is expecting it
  // when isEmpty is true, isLoggedIn is set to false
  let initialState = { firebase: { auth: { isEmpty: true } } };
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
    expect(mapStateToProps(initialState)).toStrictEqual({ isLoggedIn: false });

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
		expect(wrapper.find("Container").props().fluid).toBe(true);
		expect(wrapper.find("#emailRoute").props().path).toBe("/login/email");
	});


  test("<LoginOptions />", () => {
    // init fake googleLogin and facebookLogin functions
    const mockGoogleLogin = sinon.stub(),
      mockFacebookLogin = sinon.spy();
    mockGoogleLogin.returns("GOOOOOOOGLE");

    // to test the emailAuth button we'll have to mock the history object
    // first we init a new sinon spy
    const mockPush = sinon.spy();
    // then init a history object, with a push key that invokes the spy
    const mockHistory = { push: mockPush };

    // first we'll mount the redux connected version of our component and test it
		let wrapper = mount(<LoginOptionsConnected store={store} />);
		
		// check that our connected component gets the firebase auth modules passed to it
	expect(wrapper.find("LoginOptions").first().props().googleLogin).toBeTruthy();
	expect(wrapper.find("LoginOptions").first().props().facebookLogin).toBeTruthy();

    //	console.log(wrapper.debug());
    // check to see that <LoginOptionsConnected /> was rendered
    expect(wrapper.exists()).toBe(true);
		
    // now we'll mount our pure unwrapped component... code smell according to some, the only way to do it according to others
    // pass the mock login functions, mock history object and path as props to our component
    wrapper = mount(
			<LoginOptions
			googleLogin={mockGoogleLogin}
			facebookLogin={mockFacebookLogin}
			history={mockHistory}
			path={"login"}
      />
			);
			
			// we'll simulate a click on our googleAuth button
			// need to pass prevenDefault(){} on the synthetic events to avoid `e.preventDefault is undefined` error
			// https://github.com/airbnb/enzyme/issues/323
    wrapper
      .find("#googleAuth")
      .first()
      .simulate("click", { preventDefault() {} });

    // now we'll check that our mock googleLogin was called as expected
    expect(mockGoogleLogin.called).toBe(true);

    // same as above with the facebookLogin
    wrapper
      .find("#facebookAuth")
      .first()
      .simulate("click", { preventDefault() {} });
    expect(mockFacebookLogin.called).toBe(true);

    // for the email button we expect the spy's push method to be invoked with an argument
    wrapper.find("#emailAuth").first().simulate("click");
    expect(
      mockHistory.push.calledWith(
        `${wrapper.props().path}/email`
      )
    ).toBe(true);
  });

  test("<LoginWithEmail />", () => {
    // !! Refactored this to test the connected component, which is best practice
    // https://github.com/airbnb/enzyme/issues/1002
    // https://www.robinwieruch.de/react-connected-component-test

    // the component is initially rendered with an object like the one below
    const emptyState = { name: "", email: "", password: "" };
    let wrapper = mount(<LoginWithEmailConnected store={store} />);

    // the component received a login function
    expect(wrapper.find("LoginWithEmail").props().login).toBeInstanceOf(
      Function
    );

    // just checking that the component was initialized with our empty object from above
    expect(wrapper.find("LoginWithEmail").state()).toStrictEqual(emptyState);

		let mockLogin = sinon.stub();
		mockLogin.returns("Email login function invoked");
		wrapper = mount(<LoginWithEmail store={store} login={mockLogin} />);
    // emailInput tests
    expect(wrapper.find("#emailInput").exists()).toBe(true);
    wrapper
      .find("#emailInput")
      .first()
      .simulate("change", {
        target: { name: "email", value: "fake@email.com" }
      });

    // passwordInput tests
    expect(
      wrapper
        .find("#passwordInput")
        .first()
        .exists()
    ).toBe(true);
    wrapper
      .find("#passwordInput")
      .first()
      .simulate("change", {
        target: { name: "password", value: "fakePassword" }
      });

    expect(wrapper.find("LoginWithEmail").state()).toStrictEqual({
      name: "",
      email: "fake@email.com",
      password: "fakePassword"
    });

    // loginForm tests
    expect(
      wrapper
        .find("#loginForm")
        .first()
        .exists()
    ).toBe(true);

    
		wrapper
			.find("#loginForm")
			.first()
			.simulate("submit", ["fake@email.com", "fakePassword"])

    expect(
      wrapper
        .find("#loginForm")
        .first()
        .prop("onSubmit")
		).toBeInstanceOf(Function);
		
		expect(mockLogin.calledWith("fake@email.com", "fakePassword")).toBe(true);
  });
});
