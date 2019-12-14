import React from 'react';
import UpdateFoodItem from './components/UpdateFoodItem';
import {Route} from 'react-router-dom';
import {Container} from '../Global/styled';


const UpdateView = props => {
    
    return (
        <Container height={props.height}>
        <Route  
        path={`${props.match.path}/:foodID`}
        render={props => <UpdateFoodItem {...props} />}
      />
        </Container>
    )
}

export default UpdateView;