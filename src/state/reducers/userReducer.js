import {
  LOADING,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_ERROR,
  REGISTER_ERROR,
} from '../types';

const userReducer = (
  state = { currentUser: {}, error: null, loggedIn: false, loading: false },
  action
) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOGIN_USER:
      return {
        currentUser: action.payload,
        error: null,
        loggedIn: true,
        loading: false,
      };
    case LOGOUT_USER:
      return { currentUser: {}, error: null, loggedIn: false, loading: false };
    case LOGIN_USER_ERROR:
      return {
        currentUser: {},
        error: action.payload,
        loggedIn: false,
        loading: false,
      };
    case REGISTER_ERROR:
      return {
        currentUser: {},
        error: action.payload,
        loggedIn: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
