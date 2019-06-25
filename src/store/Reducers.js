import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loading from './loading/reducer';
import users from './users/reducer';

export default history =>
  combineReducers({
    loading,
    users,
    router: connectRouter(history),
  });
