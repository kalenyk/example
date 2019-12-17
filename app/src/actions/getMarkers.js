import {GET_MARKERS,GET_MARKERS_FAILURE,GET_MARKERS_SUCCESS} from "../constants/markers";

export const getMarkers = () => ({
    type:GET_MARKERS
});

export const getMarkersSuccess = markers => ({
    type:GET_MARKERS_SUCCESS,
    markers
});

export const getMarkersFailure = () => ({
    type:GET_MARKERS_FAILURE
});