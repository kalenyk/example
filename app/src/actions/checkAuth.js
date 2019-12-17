import * as c from "../constants/user";
import {createAction} from 'redux-actions';

export const checkAuth = createAction(c.CHECK_AUTHENTICATION);
export const checkAuthAuthenticated = createAction(c.CHECK_AUTHENTICATION_AUTHENTICATED);
export const checkAuthNotAuthenticated = createAction(c.CHECK_AUTHENTICATION_NOT_AUTHENTICATED);