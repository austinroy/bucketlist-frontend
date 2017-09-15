export const createUser = () => ({
  type: 'CREATE_USER',
})

export const createUserSuccess = () => ({
  type: 'CREATE_USER_SUCCESS',
  user
})

export const loginUser = () => ({
  type: 'LOGIN_USER',
})

export const loginSuccess = () => ({
  type: 'LOGIN_USER_SUCCESS',
  user
})
