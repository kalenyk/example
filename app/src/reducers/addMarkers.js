import { handleActions } from 'redux-actions';

import * as c from "../constants/markers";

const initialState={
    addition:false,
    added:false,
};

const addMarkers = handleActions (
    new Map([
        [
            c.ADD_MARKERS,
            (state, {payload}) => ({
                ...state,
                addition: true,
            })
        ],
        [
            c.ADD_MARKERS_SUCCESS,
            (state, {payload}) => ({
                ...state,
                addition:false,
                added:true
            })
        ],
        [
            c.ADD_MARKERS_FAILURE,
            (state, {payload}) => ({
                ...state,
                addition: false,
                added: false
            })
        ]
    ]),
    initialState
);

export default addMarkers;