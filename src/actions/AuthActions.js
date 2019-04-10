import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from './types';

export const loginUser = credentials => {
  return {
    type: LOGIN_USER,
    payload: credentials
  }
};