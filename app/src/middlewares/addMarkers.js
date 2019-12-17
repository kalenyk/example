import * as a from "../actions/markers";

import firebase from "firebase/app";

export const pushMarkers = (markers) => {
    return function action(dispatch) {
        dispatch(a.addMarkers(markers));
        let userId = firebase.auth().currentUser.uid;

        return fetch(`${process.env.API_ENDPOINT}/add_markers`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({markers,userId})
        })
            .then(()=>{
                dispatch(a.addMarkersSuccess());
            })
            .catch((err)=> {
                dispatch(a.addMarkersFailure());
            });
    };
};