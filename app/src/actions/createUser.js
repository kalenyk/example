import * as c from "../constants/user";
import {createAction} from 'redux-actions';

export const createUser = createAction(c.CREATE_USER);
export const createUserFailure = createAction(c.CREATE_USER_FAILURE);
export const createUserSuccess = createAction(c.CREATE_USER_SUCCESS);