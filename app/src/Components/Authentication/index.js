import React from 'react';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {reset} from "redux-form";

import Authentication from './Authentication';

import {login} from "../../middlewares/loginUser";
import {addUser} from "../../middlewares/createUser";

const mapStateToProps = (state) => ({
    erg:'wfe'
});

const mapDispatchToProps = dispatch => ({
    resetForm(formName) {
        dispatch(reset(formName));
    },
    login(email, password) {
        dispatch(login(email, password));
    },
    createUser(email, password) {
        dispatch(addUser(email, password));
    }
});

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
);

export default enhance(Authentication);