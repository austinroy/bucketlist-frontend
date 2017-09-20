import axios from 'axios';

export const createUserSuccess = () => ({
  type: 'CREATE_USER_SUCCESS',
  user
});

export const loginSuccess = () => ({
  type: 'LOGIN_USER_SUCCESS',
  user
});

export const loginUser = (dispatch, data) => {
  axios.post('http://localhost:5000/auth/login/', data).then(res =>
    (console.log(res.data))
  )
}

export const createUser = (dispatch, data) => {
  axios.post('http://localhost:5000/auth/register/', data);
}
