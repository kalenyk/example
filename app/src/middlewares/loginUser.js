import {auth} from "../config/firebase";
import {loginUser, loginUserFailure, loginUserSuccess} from "../actions/authenticateUser";
import {history} from "../config/history";

export const login = (email,password) => {
    return function action(dispatch) {
        dispatch(loginUser());
        if(email && password){
            return auth.signInWithEmailAndPassword(email,password)
                .then(res => {
                    console.log(res);
                    dispatch(loginUserSuccess(email,"http://www.stickpng.com/assets/images/5a4613d4d099a2ad03f9c993.png"));
                    localStorage.setItem("userName",email);
                    localStorage.setItem("avatar","http://www.stickpng.com/assets/images/5a4613d4d099a2ad03f9c993.png");

                    history.push({pathname:"/map"});
                })
                .catch(error => {
                    dispatch(loginUserFailure(error));
                });
        }
        return auth.signInWithGoogle()
            .then(res => {
                console.log(res);
                dispatch(loginUserSuccess(res.additionalUserInfo.profile.name,res.additionalUserInfo.profile.picture));
                localStorage.setItem("userName",res.additionalUserInfo.profile.name);
                localStorage.setItem("avatar",res.additionalUserInfo.profile.picture);
                history.push({pathname:"/map"});
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            });
    };
};