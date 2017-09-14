export default function bucketReducer(state = [], action){
  switch(action.type){
    case 'CREATE_BUCKETLIST':
      return [...state, Object.assign({}, action.bucketlist)];
    default:
      return state;
  }
}
