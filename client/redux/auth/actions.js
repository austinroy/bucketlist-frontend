import axios from 'axios';

export const createUserSuccess = () => ({
  type: 'CREATE_USER_SUCCESS',
  user
});

export const loginSuccess = () => ({
  type: 'LOGIN_USER_SUCCESS',
  user
});

export const loginUser = (data) => {
  return () => {
    console.log(data);
    return axios.post('http://localhost:5000/auth/login/', data)
    .then(res => {
      console.log(res)
      dispatch(loginSuccess);
    })
    .catch(error =>
    console.log(error))
  }
}

export const registerUser = (data) => {
  return () => {
    console.log(data);
    return axios.post('http://localhost:5000/auth/register/', data)
    .then(res => {
      console.log(res);
      dispatch(createUserSuccess);
    })
    .catch(error =>
    console.log(error))
  }
}
