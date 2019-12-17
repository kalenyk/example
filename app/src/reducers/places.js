import * as c from "../constants/places";
import { handleActions } from 'redux-actions';

const initialState = {
    loading:false,
    loaded:false,
    places:[]
};
const places = handleActions(
    new Map([
        [
            c.GET_PLACES,
            (state, {payload}) => ({
                ...state,
                loading: true,
            })
        ],
        [
            c.GET_PLACES_SUCCESS,
            (state, {payload}) => ({
                ...state,
                loading:false,
                loaded:true,
                places: [...payload]
            })
        ],
        [
            c.GET_PLACES_FAILURE,
            (state, {payload}) => ({
                ...state,
                loading:false,
                loaded:false,
            })
        ]
    ]),
    initialState
);

export default places;