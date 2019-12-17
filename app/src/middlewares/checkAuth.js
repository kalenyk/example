import {checkAuth,checkAuthAuthenticated,checkAuthNotAuthenticated} from "../actions/checkAuth";

import {auth} from "../config/firebase/firebase";
import {history} from "../config/history";

export const checkAuthentication = () => {
    return function action(dispatch) {
        dispatch(checkAuth());
        return auth.onAuthStateChanged(user=>{
            if(user){
                dispatch(checkAuthAuthenticated());
            }
            else{
                dispatch(checkAuthNotAuthenticated());
                history.push({pathname:"/"});
            }

        });
    };
};
