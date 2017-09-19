import initialState from '../initialState.js';

export default function bucketlistReducer(state = initialState.bucketlists, action){
  switch(action.type){
    case 'CREATE_BUCKETLIST':
      return [...state, Object.assign({}, action.bucketlist)];
    default:
      return state;
  }
}
