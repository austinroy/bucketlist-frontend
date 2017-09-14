import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import bucketlists from './bucket/reducer';
import items from './items/reducer';
import auth from './auth/reducer';

export default combineReducers({
  routing,
  auth,
  bucketlists,
  items
});
