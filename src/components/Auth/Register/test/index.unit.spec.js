/*
 ***************************
 *
 * <Register /> COMPONENT TESTS
 * ✓
 * x Test <Register />
 *   x When logged in
 *   x When not logged in and no dob was received
 *   x When not logged in and dob was received
 * x Test <RegisterOptions />
 * x Test <RegisterWithEmail />
 *
 *
 *
 *
 */

import { Register, mapStateToProps } from "../index";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { initialState as onboardingInitialState } from "../../../../store/reducers/onboardingReducer";
import { mount } from "enzyme";

describe("<Register />", () => {
  let initialState = {
    firebase: {
      auth: {
        isEmpty: true
      }
    },
    onboarding: {
      sex: onboardingInitialState.state,
      activity_leve: onboardingInitialState.activityLevel,
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
            <Provider store={store} >
          <Register isLoggedIn={false} match={{ path: "/register" }} dob={"1990-01-28"}/>
          </Provider>
        </MemoryRouter>
      );
    expect(wrapper.find("#registerOptions").first().exists()).toBe(true);
    // -------|

    // ----- User is not logged in and dob provided, on /register/email
    wrapper = mount(
        <MemoryRouter initialEntries={["/register/email"]}>
            <Provider store={store} >
          <Register isLoggedIn={false} match={{ path: "/register" }} dob={"1990-01-28"}/>
          </Provider>
        </MemoryRouter>
      );
    expect(wrapper.find("#registerWithEmail").first().exists()).toBe(true);
    // -------|

    
  });
});
