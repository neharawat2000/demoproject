// import { SetUser, LoginUser, LogoutUser } from './action';
import { SetUser, LogoutUser } from './action';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SetUser:
      return {
        ...state,
        user: action.payload,
      };
    // case LoginUser:
    //   return {
    //     ...state,
    //     user: action.payload,
    //     isAuthenticated: true,
    //   };
    case LogoutUser:
      return {
        ...state,
        user:null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
