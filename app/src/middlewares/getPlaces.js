/*global google*/

import {getPlaces,getPlacesFailure,getPlacesSuccess} from "../actions/getPlaces";

export const getPlacesCoordinates = (placeName,bounds,map) => {
    return function action(dispatch) {
        dispatch(getPlaces());

        const service = new google.maps.places.PlacesService(map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
        const request = {
            bounds: bounds,
            type: [placeName]
        };
        return service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(getPlacesSuccess(results));
            }
            else{
                dispatch(getPlacesFailure());
            }
        });
    };
};