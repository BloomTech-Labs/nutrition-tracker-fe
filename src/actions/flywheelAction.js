//import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';

export const START_INSERT_WEIGHT = "START_INSERT_WEIGHT";
export const INSERT_WEIGHT_SUCCESS  = "INSERT_WEIGHT_SUCCESS";
export const INSERT_WEIGHT_FAILURE = "INSERT_WEIGHT_FAILURE";



export const recordUserWeight = (user_id, user_weight) => dispatch =>  {
    dispatch({ type: START_INSERT_WEIGHT });
        return axios
            .post(`http://localhost:4000/${user_id}/recordWeight`, user_weight)
            .then( res => dispatch({ type: INSERT_WEIGHT_SUCCESS, payload:res.data}))
            .catch( err => dispatch({ type:INSERT_WEIGHT_FAILURE, payload: err }));
            
};

 // Here I would like to add notifications from https://www.npmjs.com/package/react-notifications || https://jossmac.github.io/react-toast-notifications/