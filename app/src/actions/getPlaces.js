import * as c from "../constants/places";
import {createAction} from 'redux-actions';

export const getPlaces = createAction(c.GET_PLACES);
export const getPlacesSuccess = createAction(c.GET_PLACES_SUCCESS);
export const getPlacesFailure = createAction(c.GET_PLACES_FAILURE);