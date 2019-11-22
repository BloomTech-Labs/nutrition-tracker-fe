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

import React from 'react';
import Login from '../index';
import renderer from 'react-test-renderer';
import expectExport from 'expect';
import { Route } from "react-router-dom";
import { MemoryRouter } from 'react-router';
import App from "../../../../App";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe("<Login />", () => {
    test("Login component is rendered", () => {
        let wrapper = shallow(
            <Login />
        )

        expect(wrapper.children()).to.have.lengthOf(1);
    })
})