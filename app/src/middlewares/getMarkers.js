import * as a from "../actions/getMarkers";

import firebase from "firebase/app";

export const getMarkersCoordinates = () => {
    return function action(dispatch) {
        dispatch(a.getMarkers());

        console.log('process',process.env)
        //да, я понимаю что передавать id юзера это плохая идея
        let userId = firebase.auth().currentUser.uid;
        return fetch(`${process.env.API_ENDPOINT}/markers`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId})
        })
            .then(data => {
                return data.json();
            })
            .then(data => {
                dispatch(a.getMarkersSuccess(data.markers));
            })
            .catch((err) => {
                console.log(err);
                dispatch(a.getMarkersFailure());
            });
    };
};