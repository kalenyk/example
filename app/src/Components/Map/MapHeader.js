import React from 'react';
import styles from "../../styles/mapContainer.less";

import PropTypes from "prop-types";

export default function MapHeader ({markers,getPlaces,getMarkers,saveMarkers}) {
    return (
        <div className={styles.buttonsWrap}>
            <div className={styles.dropdown}>
                <button className={styles.dropdown__button}>Get places</button>
                <div className={styles.dropdown__content}>
                    <ul>
                        <li>
                            <button onClick={()=>getPlaces("lodging")}>Lodging</button>
                        </li>
                        <li>
                            <button onClick={()=>getPlaces("university")}>University</button>
                        </li>
                        <li>
                            <button onClick={()=>getPlaces("atm")}>ATM</button>
                        </li>
                        <li>
                            <button onClick={()=>getPlaces("gas_station")}>Gas station</button>
                        </li>
                        <li>
                            <button onClick={()=>getPlaces("liquor_store")}>Liquor store</button>
                        </li>
                        <li>
                            <button onClick={()=>getPlaces("restaurant")}>Restaurant</button>
                        </li>
                    </ul>
                </div>
            </div>

            {markers.length ? <button className={styles.markersBtns} onClick={saveMarkers}>Save markers</button>:<div/>}
            <button onClick={getMarkers} className={styles.markersBtns}>Get markers</button>
        </div>
    );
}

MapHeader.PropTypes = {
    markers: PropTypes.array,
    getPlaces: PropTypes.func.isRequired,
    getMarkers: PropTypes.func.isRequired,
    saveMarkers: PropTypes.func.isRequired,
};