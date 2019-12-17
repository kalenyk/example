import React from "react";
import {Link} from "react-router-dom";

import {signOut} from "../../config/firebase/auth";

import styles from "../../styles/header.less";

import PropTypes from "prop-types";

const Header = ({isAuthenticated,hideLink,userAvatar,userName}) => {
    const signOutUser = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("avatar");
        return signOut();
    };

    const isUserLoggedIn = isAuthenticated || !!localStorage.getItem('userName');
    const name = userName || localStorage.getItem('userName');
    const avatar = userAvatar || localStorage.getItem('avatar');

    return (
        <header className={styles.header}>

            {isUserLoggedIn ? (
                <React.Fragment>
                    <div className={styles.avatarWrap}>
                        <h3 className={styles.title}>Welcome, {name}</h3>
                        <img src={avatar}/>
                    </div>
                    <div className={styles.buttonsWrap}>


                        {hideLink ? <div/> : <Link
                            className={styles.aboutAuthor}
                            to={"/about"}>About author
                        </Link>}

                        <button onClick={signOutUser}>Sign out</button>
                    </div>
                </React.Fragment>
            ) : (
                <div>Logo</div>
            )}
            
        </header>
    );
};

Header.PropTypes = {
    isAuthenticated: PropTypes.bool,
    hideLink: PropTypes.bool,
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
};

export default Header;