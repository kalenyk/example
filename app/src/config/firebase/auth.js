import {auth} from "./firebase";
import {googleProvider} from "./firebase";

export const createUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const signInWithGoogle = () =>
    auth.signInWithPopup(googleProvider);


export const signOut = () =>
    auth.signOut();
