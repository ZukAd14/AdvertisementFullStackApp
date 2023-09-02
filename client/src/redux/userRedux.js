import axios from "axios";
import { API_AUTH_URL } from "../config";

//selectors
export const isLogged = ({ user }) => user ? user.login : null;
export const selectUserData = (state) => state.user;

//actions
const createActionName = (actionName) => `app/users/${actionName}`;
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

//action creators
export const logIn = payload => ({
    type: LOG_IN,
    payload
});

export const logOut = () => ({
    type: LOG_OUT
});

export const getUser = () => async (dispatch) => {
    try {
      const response = await axios.get(`${API_AUTH_URL}/auth/user`); 
      const userData = response.data; 
  
      dispatch({ type: LOG_IN, payload: userData });
    } catch (error) {
      dispatch(error(error.message));
    }
  };

const userReducer = (statePart = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload;
            case LOG_OUT:
                return null;
        default:
            return statePart;
    }
};

export default userReducer;