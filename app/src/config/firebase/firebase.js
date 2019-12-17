import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCIgkFD_OzqTzX3LWRKOr9i79lZBLmVx6k",
    authDomain: "doit-84c97.firebaseapp.com",
    databaseURL: "https://doit-84c97.firebaseio.com",
    projectId: "doit-84c97",
    storageBucket: "doit-84c97.appspot.com",
    messagingSenderId: "89548167731"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();



export const auth = firebase.auth();


export const database=firebase.database();