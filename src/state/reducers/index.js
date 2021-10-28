import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default reducers;
