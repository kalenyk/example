import {createUser,createUserFailure,createUserSuccess} from "../actions/createUser";
import {auth} from "../config/firebase/firebase";

export const addUser = (email,password) => {
    return function action(dispatch) {
        dispatch(createUser());
        return auth.createUserWithEmailAndPassword(email,password)
            .then(res=>{
                console.log(res);
                dispatch(createUserSuccess());
            })
            .catch(err=>{
                console.log(err);
                dispatch(createUserFailure());
            });

    };
};