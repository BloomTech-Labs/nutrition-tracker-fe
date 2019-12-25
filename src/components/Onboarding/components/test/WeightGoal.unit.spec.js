import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-redux";
import WeightGoalConnected, { WeightGoal } from "../WeightGoal";
import { mount } from "enzyme";
import sinon from "sinon";


describe("<WeightGoal />", () => {
    test("<WeightGoal />  pure component renders as expected", () => {
        let store = global._bigMockStore_();
        let mockHistory = {push: sinon.spy()};
        
        let wrapper = mount(
            <Provider store={store} >
                    <Sex path={"onboarding"} history={mockHistory}/>
                    </Provider>
        )

        _doesThisRender_(wrapper, ["#maleButton","#femaleButton"]);
    })
})