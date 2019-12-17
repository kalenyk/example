import React from 'react';

import {connect} from 'react-redux';
import {compose} from 'redux';

import {pushMarkers} from "../../middlewares/addMarkers";
import {getMarkersCoordinates} from "../../middlewares/getMarkers";
import {getPlacesCoordinates} from "../../middlewares/getPlaces";

import MapComponent from './MapComponent';

const mapStateToProps = state => ({
    savedMarkers:state.markers.markers,
    places:state.places.places
});
const mapDispatchToProps = dispatch => ({
    getMarkers(){dispatch(getMarkersCoordinates());},
    addMarkers(arr){dispatch(pushMarkers(arr));},
    getPlaces(placeName,bounds,map){dispatch(getPlacesCoordinates(placeName,bounds,map));}
});

const enhance = compose(
    connect(mapStateToProps,mapDispatchToProps),
);

export default enhance(MapComponent);