import React from "react";
import {reduxForm,Field} from "redux-form";
import {compose} from 'redux';

import {required,password,email} from "../../validation/user";
import {field} from "./formFields";

import styles from "../../styles/form.less";

import PropTypes from "prop-types";

const LoginForm = ({login,handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <Field name="email" type="text"
                component={field} label="Email"
                validate={[ required, email ]}
            />
            <Field name="password" type="password"
                component={field} label="Password"
                validate={[required,password]}
            />

            <div className={styles.buttonWrap}>
                <button type="submit">Login</button>
                <button onClick={login} className={styles.google}>Login with google</button>
            </div>
        </form>
    );
};

const enhance = compose(
    reduxForm({form:"LoginUser"}),
);

LoginForm.PropTypes = {
    login: PropTypes.func.isRequired,
    handle: PropTypes.func.isRequired,
};

export default enhance(LoginForm);