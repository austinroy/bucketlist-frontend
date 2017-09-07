import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import reducer from './reducer';

export default combineReducers({
  routing,
  reducer
});
