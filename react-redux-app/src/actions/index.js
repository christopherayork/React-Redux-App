import axios from 'axios';
import * as types from '../actionTypes';

const api_url = 'https://api.spacexdata.com/v3/launches/latest';

export const getLaunchData = () => dispatch => {
  dispatch({ type: types.GET_LAUNCH });
  axios.get(api_url)
      .then(res => {
        dispatch({ type: types.GET_LAUNCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: types.GET_LAUNCH_FAIL, payload: err });
      });
};