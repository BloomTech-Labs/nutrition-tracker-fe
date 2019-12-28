import React from "react";
import InputGroupWithIcon from "../InputGroupWithIcon";
import { mount } from "enzyme";
import sinon from "sinon";


describe("<InputGroupWithIcon />", () => {
    test("<InputGroupWithIcon />  pure component renders as expected", () => {
        let mockChangeHandler = sinon.stub();
        mockChangeHandler.returns("Change handled!");
        let fakeIcon = () => <div id="fakeIcon"></div>
        
        let wrapper = mount(
                    <InputGroupWithIcon
                     placeholder={"fake placeholder"}
                     onChange={mockChangeHandler}
                     value={"fake value"}
                     name={"fake name"}
                     type={"fake type"}
                     icon={fakeIcon}
                     />

        )

        _doesThisRender_(wrapper, ["InputGroup","Input","InputGroupAddon","InputGroupText","#fakeIcon"]);
    })
})