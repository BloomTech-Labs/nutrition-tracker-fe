/*
 ***************************
 *
 * <Register /> COMPONENT TESTS
 * ✓
 * ✓ Test <Register />
 *   ✓ When logged in
 *   ✓ When not logged in and no dob was received
 *   ✓ When not logged in and dob was received
 * ✓ Test <RegisterOptions />
 * x Test <RegisterWithEmail />
 *
 *
 *
 *
 */

import { Register, mapStateToProps } from "../index";
import RegisterOptionsConnected, {
  Register as RegisterOptions
} from "../RegisterOptions";
import RegisterWithEmailConnected, {
  RegisterWithEmail
} from "../RegisterWithEmail";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { initialState as onboardingInitialState } from "../../../../store/reducers/onboardingReducer";
import { mount } from "enzyme";
import sinon from "sinon";

describe("<Register />", () => {
  let initialState = {
    firebase: {
      auth: {
        isEmpty: true
      }
    },
    onboarding: {
      sex: onboardingInitialState.state,
      activity_level: onboardingInitialState.activityLevel,
      dob: onboardingInitialState.date_of_birth,
      weight_kg: onboardingInitialState.weight_kg,
      height_cm: onboardingInitialState.height_cm,
      weekly_goal_rate: onboardingInitialState.target_rate
    }
  };
  const fakeUserOnboarding = {
    sex: "Male",
    activity_level: 1,
    dob: "1990-01-28",
    weight_kg: 100,
    height_cm: 100,
    weekly_goal_rate: 1
  };
  let store = global._bigMockStore_(initialState);
  let storeAbandonedOnboarding = global._bigMockStore_({
    ...initialState,
    onboarding: { ...initialState.onboarding, dob: "1990-01-28" }
  });
  let storeRegistrationSuccess = global._bigMockStore_({
    firebase: { auth: { isEmpty: false } },
    onboarding: fakeUserOnboarding
  });

  test("<Register /> component renders with child components", () => {
    let expectedState = {
      isLoggedIn: false,
      sex: undefined,
      activity_level: undefined,
      dob: undefined,
      weight_kg: 0,
      height_cm: 0,
      weekly_goal_rate: undefined,
      loading: undefined
    };

    expect(mapStateToProps(initialState)).toStrictEqual(expectedState);

    // ------ user is logged in so redirect to /
    let wrapper = mount(
      <MemoryRouter initialEntries={["/register"]}>
        <Register
          isLoggedIn={true}
          store={store}
          match={{ path: "/register" }}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("#homeRedirect").exists()).toBe(true);
    // ------|

    // ------ User is not logged in and no dob provided, redirect /landing
    wrapper = mount(
      <MemoryRouter initialEntries={["/register"]}>
        <Register store={store} match={{ path: "/register" }} />
      </MemoryRouter>
    );
    expect(wrapper.find("#landingRedirect").exists()).toBe(true);
    // -------|

    // ----- User is not logged in and dob provided, on /register
    wrapper = mount(
      <MemoryRouter initialEntries={["/register"]}>
        <Provider store={store}>
          <Register
            isLoggedIn={false}
            match={{ path: "/register" }}
            dob={fakeUserOnboarding.dob}
            sex={fakeUserOnboarding.sex}
            activity_level={fakeUserOnboarding.activity_level}
            dob={fakeUserOnboarding.dob}
            weight_kg={fakeUserOnboarding.weight_kg}
            height_cm={fakeUserOnboarding.height_cm}
            weekly_goal_rate={fakeUserOnboarding.weekly_goal_rate}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find("Container").props().fluid).toBe(true);
    expect(
      wrapper
        .find("#registerOptions")
        .first()
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find("#registerOptions")
        .first()
        .props().onboardingInfo
    ).toStrictEqual(fakeUserOnboarding);
    // -------|

    // ------ User is not logged in and dob provided, on /register/email
    wrapper = mount(
      <MemoryRouter initialEntries={["/register/email"]}>
        <Provider store={store}>
          <Register
            isLoggedIn={false}
            match={{ path: "/register" }}
            dob={"1990-01-28"}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(
      wrapper
        .find("#registerWithEmail")
        .first()
        .exists()
    ).toBe(true);

    expect(wrapper.find("#emailRegisterRoute").props().path).toBe(
      "/register/email"
    );
    // -------|
  });

  test("<RegisterOptions />", () => {
    // ------ If registration was not successful, render the google and facebook registration buttons
    let wrapper = mount(
      <MemoryRouter initialEntries={["/register"]}>
        <RegisterOptionsConnected store={store} />
      </MemoryRouter>
    );

    expect(wrapper.find("#googleRegister").exists()).toBe(true);
    expect(wrapper.find("#facebookRegister").exists()).toBe(true);
    // console.log(wrapper.debug())
    expect(
      wrapper
        .find("Register")
        .first()
        .props().googleRegister
    ).toBeTruthy();
    expect(
      wrapper
        .find("Register")
        .first()
        .props().facebookRegister
    ).toBeTruthy();
    // ------|

    // ------ If registration was successful, render a Redirect component
    wrapper = mount(
      <MemoryRouter initialEntries={["/register"]}>
        <RegisterOptionsConnected store={storeRegistrationSuccess} />
      </MemoryRouter>
    );

    expect(wrapper.find("Redirect").exists()).toBe(true);
    // ------|

    // ------ If the user clicks google or facebook registration buttons
    const mockGoogleRegister = sinon.spy(),
      mockFacebookRegister = sinon.spy(),
      mockPush = sinon.spy(),
      mockHistory = { push: mockPush };
    wrapper = mount(
      <RegisterOptions
        googleRegister={mockGoogleRegister}
        facebookRegister={mockFacebookRegister}
        history={mockHistory}
        path={"register"}
        onboardingInfo={storeRegistrationSuccess.getState().onboarding}
      />
    );

    wrapper
      .find("#googleRegister")
      .first()
      .simulate("click", { preventDefault() {} });

    expect(mockGoogleRegister.args[0][0]).toStrictEqual(
      storeRegistrationSuccess.getState().onboarding
    );

    wrapper
      .find("#facebookRegister")
      .first()
      .simulate("click", { preventDefault() {} });

    expect(mockFacebookRegister.args[0][0]).toStrictEqual(
      storeRegistrationSuccess.getState().onboarding
    );

    wrapper
      .find("#emailRegister")
      .first()
      .simulate("click");
    expect(mockHistory.push.calledWith(`${wrapper.props().path}/email`)).toBe(
      true
    );
  });

  test("<RegisterWithEmail />", () => {
    const mockRegister = sinon.spy(),
      onboardingInfo = storeRegistrationSuccess.getState().onboarding,
      emptyState = { name: "", password: "", email: "" };
    let wrapper = mount(<RegisterWithEmailConnected store={store} />);
    expect(wrapper.find("#registrationForm").exists()).toBe(true);
    expect(wrapper.find("#passwordInput").exists()).toBe(true);
    expect(wrapper.find("#emailInput").exists()).toBe(true);
    expect(wrapper.find("#nameInput").exists()).toBe(true);
    expect(wrapper.find("RegisterWithEmail").props().register).toBeInstanceOf(
      Function
    );

    wrapper = mount(
      <Provider store={store}>
        <RegisterWithEmail
          onboardingInfo={onboardingInfo}
          register={mockRegister}
        />
      </Provider>
    );
    expect(wrapper.find("RegisterWithEmail").state()).toStrictEqual(emptyState);

    wrapper
      .find("#nameInput")
      .first()
      .simulate("change", { target: { name: "name", value: "humanUnit" } });
    wrapper
      .find("#emailInput")
      .first()
      .simulate("change", {
        target: { name: "email", value: "fake@email.com" }
      });
    wrapper
      .find("#passwordInput")
      .first()
      .simulate("change", {
        target: { name: "password", value: "fakePassword" }
      });
    wrapper
      .find("#registerSubmit")
      .first()
      .simulate("submit", { preventDefault() {} });

    expect(
      mockRegister.calledWith(
        "humanUnit",
        "fake@email.com",
        "fakePassword",
        onboardingInfo
      )
    ).toBe(true);
  });
});
