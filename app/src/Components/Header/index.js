import React from 'react';

import Header from './Header';

import {connect} from 'react-redux';
import {compose} from 'redux';

const mapStateToProps = (state) => ({
    userName: state.user.userName,
    userAvatar: state.user.avatar,
    isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({});

const enhance = compose(connect(
    mapStateToProps,
    mapDispatchToProps,
));

export default enhance(Header);