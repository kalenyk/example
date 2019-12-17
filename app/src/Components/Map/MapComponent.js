import React, {useState} from "react";

import Map from "./Map";
import MapHeader from "./MapHeader";

import PropTypes from 'prop-types';

import {usePosition} from '../hooks/';

import styles from "../../styles/mapContainer.less";

const MapComponent = ({addMarkers,getMarkers, places,savedMarkers}) => {
    const [markers, setMarkers] = useState([]);
    const [bounds, setBounds] = useState({});
    const [mapRef, setMapRef] = useState({});

    const {latitude,longitude,error} = usePosition();

    const saveMarkers = () => {
        addMarkers(markers);
        setMarkers([]);
    };

    const getPlaces = placeName =>{
        return getPlaces(placeName,bounds,mapRef);
    };

    if(!latitude || !longitude) {
        return <div className={styles.geoWarning}>Get some problems with geo</div>;
    }
    return (
        <div>
            <MapHeader
                getPlaces={getPlaces}
                saveMarkers={saveMarkers}
                markers={markers}
                getMarkers={getMarkers}
            />
        
            <Map
                markers={markers}
                places={places}
                currentPosition={{lat: latitude, lng: longitude}}
                savedMarkers={savedMarkers}

                removeMarker={index => {
                    let markersArr = markers;
                    markersArr.splice(index, 1);
                    setMarkers([...markersArr]);
                }
                }
                addMarker={data => setMarkers([...markers, {lat: data.latLng.lat(), lng: data.latLng.lng()}])}


                onBoundsChanged={(bounds,mapRef)=>{
                    setBounds({...bounds});
                    setMapRef({...mapRef});
                }}
            />


        </div>
    );
};

MapComponent.PropTypes = {
    addMarkers: PropTypes.func.isRequired,
    getMarkers: PropTypes.func.isRequired,
    places: PropTypes.array,
    savedMarkers: PropTypes.array,
};

export default MapComponent;