import React from "react";
import { Provider } from "react-redux";
import DietaryGoal from "../DietaryGoal";
import { mount } from "enzyme";
import sinon from "sinon";


describe("<DietaryGoal />", () => {
    test("<DietaryGoal />  pure component renders as expected", () => {
        let store = global._bigMockStore_();
        let mockHistory = {push: sinon.spy()};
        
        let wrapper = mount(
            <Provider store={store} >
                    <DietaryGoal path={"onboarding"} history={mockHistory}/>
                    </Provider>
        )

        _doesThisRender_(wrapper, ["#loseButton","#gainButton","#maintainButton"]);
    })
})