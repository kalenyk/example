import * as c from "../constants/markers";
import { handleActions } from 'redux-actions';

const initialState = {
    loading:false,
    loaded:false,
    markers:[]
};

const getMarkers = handleActions(
    new Map([
        [
            c.GET_MARKERS,
            (state, {payload}) => ({
                ...state,
                loading:true,
            })
        ],
        [
            c.GET_MARKERS_SUCCESS,
            (state, {markers}) => ({
                ...state,
                loading:false,
                loaded:true,
                markers: [...markers],
            })
        ],
        [
            c.GET_MARKERS_FAILURE,
            (state, {payload}) => ({
                ...state,
                loading:false,
                loaded:false,
            })
        ]
    ]),
    initialState
);

export default getMarkers;