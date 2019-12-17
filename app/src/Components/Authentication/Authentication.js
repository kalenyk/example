import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import styles from "../../styles/authentication.less";

import PropTypes from 'prop-types';

const Authentication = ({createUser,login,resetForm}) => {
    const userLogin = data => {
        login(data.email, data.password);
        resetForm("LoginForm");
    };
    const userSignup = data => {
        console.log(data);
        if (data.password !== data.password2) {
            return alert("Passwords doesn't match");
        }
        createUser(data.email, data.password);
        resetForm("SignupForm");
    };

    return (
        <div className={styles.authentication}>
            <LoginForm onSubmit={userLogin} login={login}/>
            <SignupForm onSubmit={userSignup}/>
        </div>
    );
};

Authentication.PropTypes = {
    createUser: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
};

export default Authentication;