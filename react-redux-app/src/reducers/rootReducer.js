import * as types from '../actionTypes';

const initialState = {
  launchData: {},
  isRequesting: false,
  error: '',
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_LAUNCH:
      return {
        ...state,
        isRequesting: true,
        error: ''
      };
    case types.GET_LAUNCH_SUCCESS:
      return {
        ...state,
        launchData: action.payload,
        isRequesting: false,
        error: ''
      };
    case types.GET_LAUNCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isRequesting: false
      };
    default:
      return state;
  }
}