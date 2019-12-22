import {
  FETCH_FAILURE,
  FETCH_GET_ONE_FAILURE,
  FETCH_GET_ONE_START,
  FETCH_GET_ONE_SUCCESS,
  FETCH_START,
  FETCH_SUCCESS,
  POST_FOOD_FAILURE,
  POST_FOOD_START,
  POST_FOOD_SUCCESS,
  GET_FOOD_ITEM_FOR_EDIT_START,
  GET_FOOD_ITEM_FOR_EDIT_SUCCESS,
  GET_FOOD_ITEM_FOR_EDIT_FAILURE,
  UPDATE_FOOD_ITEM_FOR_EDIT_START,
  UPDATE_FOOD_ITEM_FOR_EDIT_SUCCESS,
  UPDATE_FOOD_ITEM_FOR_EDIT_FAILURE,
  DELETE_FOOD_ITEM_START,
  DELETE_FOOD_ITEM_SUCCESS,
  DELETE_FOOD_ITEM_FAILURE,
  RESET_STATE
} from "../actions/foodItemAction";

const initialState = {
  getting: false,
  got: false,
  updating:false,
  updated: false,
  error: "",
  items: [],
  item: []
};

export const foodItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return {
        ...state,
        getting: false
      };
    case FETCH_START:
      return {
        ...state,
        getting: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        getting: false,
        items: action.payload
      };
    case FETCH_GET_ONE_SUCCESS:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_GET_ONE_START:
      return {
        ...state,
        got: false,
        getting: true
      };
    case FETCH_GET_ONE_FAILURE:
      return {
        ...state,
        getting: false
      };
    case POST_FOOD_START:
      return {
        ...state,
        getting: false,
        got: false,
        food_log: action.payload
      };
    case POST_FOOD_SUCCESS:
      return {
        ...state,
        getting: false,
        got: true,
        food_log: action.payload
      };
    case POST_FOOD_FAILURE:
      return {
        ...state,
        got: false,
        error: "Error",
        getting: false
      };
    case GET_FOOD_ITEM_FOR_EDIT_START:
      return {
        ...state,
        got: false,
        error: "",
        getting: true,
      };
    case GET_FOOD_ITEM_FOR_EDIT_SUCCESS:
      return {
        ...state,
        item: action.payload,
        got: true,
        error: "",
        getting: false
      };
    case GET_FOOD_ITEM_FOR_EDIT_FAILURE:
      return {
        ...state,
        got: false,
        error: action.payload,
        getting: false
      };

    case UPDATE_FOOD_ITEM_FOR_EDIT_START:
      return {
        ...state,
        updated: false,
        updating: true,
        error: ""
      };

    case UPDATE_FOOD_ITEM_FOR_EDIT_SUCCESS:
      return {
        ...state,
        updated: true,
        updating: false,
        error: ""
      };

    case UPDATE_FOOD_ITEM_FOR_EDIT_FAILURE:
      return {
        ...state,
        updated: false,
        updating: false,
        error: action.payload
      };

    case DELETE_FOOD_ITEM_START:
      return {
        ...state,
        got: false,
        getting: true,
        error: ""
      };

    case DELETE_FOOD_ITEM_SUCCESS:
      return {
        ...state,
        got: true,
        getting: false,
        error: ""
      };

    case DELETE_FOOD_ITEM_FAILURE:
      return {
        ...state,
        got: false,
        getting: false,
        error: action.payload
      };

      case RESET_STATE:
        return {
          ...state,
          updated:false,
          error:""
        }

    default:
      return state;
  }
};


