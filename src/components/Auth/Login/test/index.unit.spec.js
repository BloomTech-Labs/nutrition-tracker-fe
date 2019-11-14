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

test('Render Login component', () => {
    const component = renderer.create(
        <MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>
    );

    let tree = component.toJSON();
    expectExport(tree).toMatchSnapshot();
});

/*
test('Break the router', () => {
    const component = renderer.create(
        <MemoryRouter initialEntries={['/fakeRoute']}>
            <App />
        </MemoryRouter>
    );

    let tree = component.toJSON();
    expectExport(tree).toMatchSnapshot();
});*/