import * as c from "../constants/user";
import { handleActions } from 'redux-actions';

const initialState={
    loading:false,
    loaded:false,
    userName:"",
    isAuthenticated: false,
};

const users = handleActions (
    new Map([
        [
            c.LOGIN_USER,
            (state, {payload}) => ({
                ...state,
                loading:true,
            })
        ],
        [
            c.LOGIN_USER_SUCCESS,
            (state, {userName, avatar}) => ({
                ...state,
                loading:false,
                loaded:true,
                userName: userName,
                avatar: avatar,
                isAuthenticated: true,
            })
        ],
        [
            c.LOGIN_USER_FAILURE,
            (state, {payload}) => ({
                ...state,
                loading: false,
                loaded: false,
                isAuthenticated: false,
            })
        ]
    ]),
    initialState
);

export default users;