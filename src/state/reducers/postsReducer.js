import { FETCH_POSTS, CREATE_POST_ERROR } from '../types';

const userReducer = (state = { postsArr: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, postsArr: action.payload };
    case CREATE_POST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
