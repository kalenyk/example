/*global google*/
import React, {useRef} from "react";
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from "react-google-maps";

import {compose} from "redux";
import {withProps} from "recompose";

import PropTypes from 'prop-types';

const API_KEY = "AIzaSyC7dPJBcyniRqgx9g3STgNdBK3xLav6Xsk";

const mapEnvironment = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{height: "100%"}}/>,
        containerElement: <div style={{height: "400px"}}/>,
        mapElement: <div style={{height: "100%"}}/>
    }),
    withScriptjs,
    withGoogleMap
);


const Map = ({places,markers,savedMarkers,currentPosition,addMarker,onBoundsChanged,removeMarker}) => {

    const map = useRef();

    return (
        <GoogleMap
            ref={map}
            onBoundsChanged={()=>onBoundsChanged(map.current.getBounds(),map.current)}
            defaultZoom={15}
            defaultCenter={currentPosition}
            onClick={addMarker}
        >

            <Marker
                icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                position={currentPosition}
                animation={google.maps.Animation.DROP}
            />

            {savedMarkers.map((marker,index)=>
                <Marker
                    key={index}
                    position={marker}
                    icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}

                />)}


            {markers.map((marker, index) =>
                <Marker
                    key={index}
                    onClick={() => removeMarker(index)}
                    position={marker}
                />)}

            {places.map((marker,index)=>
                <Marker
                    key={index}
                    icon={marker.icon}
                    position={{lat:marker.geometry.location.lat(),lng:marker.geometry.location.lng()}}
                />
            )}
        </GoogleMap>
    );
};

Map.PropTypes = {
    places: PropTypes.array,
    markers: PropTypes.array,
    saveMarkers: PropTypes.array,
    currentPosition: PropTypes.object,
    addMarker: PropTypes.func,
    onBoundsChanged: PropTypes.func,
    removeMarker: PropTypes.func,
};

export default mapEnvironment(Map);