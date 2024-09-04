// Define action types
export const SetUser = 'SET_USER';
// export const LoginUser = 'LOGIN_USER';
export const LogoutUser = 'LOGOUT_USER';

// Action creators
export const setUser = (user) => ({
  type: SetUser,
  payload: user,
});

// export const loginUser = (user) => ({
//   type: LoginUser,
//   payload:user
// });

export const logoutUser = () => ({
  type: LogoutUser,
});
