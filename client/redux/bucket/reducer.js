export default function reducer(state = [], action){
  switch(action.type){
    case 'LOGIN_REQUEST':
      return Object.assign({}, state,
      {

      })
    default:
      return state;
  }
}
