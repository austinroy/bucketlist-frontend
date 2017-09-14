export default function bucketReducer(state = [], action){
  switch(action.type){
    case 'CREATE_USER':
      return [...state, Object.assign({}, action.user)];
    default:
      return state;
  }
}
