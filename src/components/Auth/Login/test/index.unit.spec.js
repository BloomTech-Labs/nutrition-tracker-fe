import React from 'react';
import Login from '../index';
import renderer from 'react-test-renderer';
import expectExport from 'expect';
import { Route } from "react-router-dom";

test('Render Login component', () => {
    const component = renderer.create(
        <Route path="/login" exact component={Login} />
    );

    let tree = component.toJSON();
    expectExport(tree).toMatchSnapshot();
});