import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './index.js';


const enhancer = compose(applyMiddleware(thunk));

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  return store;
}

