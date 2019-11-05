import initialState from './initialState';
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/foodItemAction';

export const foodItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: '',
        getting: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        error: '',
        getting: false,
        got: true,
        items: action.payload
      }
    default:
      return state;
  }
}