import {
    START_INSERT_WEIGHT,
    INSERT_WEIGHT_SUCCESS,
    INSERT_WEIGHT_FAILURE
} from '../actions/flywheelAction';

import initialState from './initialState';


const flyWheelReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case START_INSERT_WEIGHT:
                return {
                        ...state,
                        adding: true,
                        error: "",
                }

        case INSERT_WEIGHT_SUCCESS:
                return {
                        ...state,
                        adding: false,
                        error: ""
                }
              
        case INSERT_WEIGHT_FAILURE:
                return {
                        ...state,
                        adding: false,  
                        error: action.payload
                }       

        default:
                return state;
    };

} ;

export default flyWheelReducer;