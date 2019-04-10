import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/types';

const initialState = {
  user: null,
  error: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.payload
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};