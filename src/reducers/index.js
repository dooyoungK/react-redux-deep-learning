import { combineReducers } from 'redux';
import commentsReducer from './comments';
import usersReducer from './users';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  comments: commentsReducer,
  authenticated: authenticationReducer,
  users: usersReducer
});

export default rootReducer;
