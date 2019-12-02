/*
 ***************************
 *
 * <Register /> COMPONENT TESTS
 * ✓
 * ✓ Test <Register />
 *   ✓ When logged in
 *   ✓ When not logged in and no dob was received
 *   ✓ When not logged in and dob was received
 * x Test <RegisterOptions />
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
  let store = global._bigMockStore_(initialState);
  let storeAbandonedOnboarding = global._bigMockStore_({
    ...initialState,
    onboarding: { ...initialState.onboarding, dob: "1990-01-28" }
  });
  let storeRegistrationSuccess = global._bigMockStore_({
    firebase: { auth: { isEmpty: false } },
    onboarding: {
      sex: "male",
      activity_level: 1,
      dob: "1990-01-28",
      weight_kg: 100,
      height_cm: 100,
      weekly_goal_rate: 1
    }
  });

  test("<Register /> component renders with child components", () => {
    let expectedState = {
      isLoggedIn: false,
      sex: undefined,
      activity_level: undefined,
      dob: undefined,
      weight_kg: 0,
      height_cm: 0,
      weekly_goal_rate: undefined
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
            dob={"1990-01-28"}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(
      wrapper
        .find("#registerOptions")
        .first()
        .exists()
    ).toBe(true);
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

    wrapper.find("#emailRegister").first().simulate("click");
    expect(mockHistory.push.calledWith(`${wrapper.props().path}/email`)).toBe(true);

  });
});
