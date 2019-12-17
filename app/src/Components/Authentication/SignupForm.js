import React from "react";
import {reduxForm,Field} from "redux-form";
import {compose} from 'redux';

import {email, required,password} from "../../validation/user";
import {field} from "./formFields";

import styles from "../../styles/form.less";

import PropTypes from "prop-types";

const SignupForm = ({handleSubmit,}) => {
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

            <Field name="password2" type="password"
                component={field} label="Repeat password"
                validate={[required,password]}
            />

            <div className={styles.buttonWrap}>
                <button type="submit">Sign up</button>
            </div>
        </form>
    );
};

const enhance = compose(
    reduxForm({form:"SignupForm"}),
);

SignupForm.PropTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default enhance(SignupForm);