import * as c from "../constants/markers";
import {createAction} from 'redux-actions';

export const addMarkers = createAction(c.ADD_MARKERS);
export const addMarkersFailure = createAction(c.ADD_MARKERS_FAILURE);
export const addMarkersSuccess = createAction(c.ADD_MARKERS_SUCCESS);