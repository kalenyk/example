import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {checkAuthentication} from "../../middlewares/checkAuth";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
    checkAuth() {dispatch(checkAuthentication());},
});

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
);

export default function (WrappedComponent) {

    function checkAuthorization(props) {
        useEffect(() => {
            props.checkAuth();
        },[]);
        return (
            <WrappedComponent {...props}/>
        );
    }

    return enhance(checkAuthorization);
}