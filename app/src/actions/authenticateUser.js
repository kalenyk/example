import {createAction} from 'redux-actions';

import * as c from "../constants/user";

export const loginUser = createAction(c.LOGIN_USER);
export const loginUserSuccess = createAction(c.LOGIN_USER_SUCCESS);
export const loginUserFailure = createAction(c.LOGIN_USER_FAILURE);