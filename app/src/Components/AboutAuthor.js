import React from "react";

import styles from "../styles/aboutAuthor.less";

const AboutAuthor = () => {
    return(
        <div>
            <div className={styles.wrap}>
                <h1>Used technologies</h1>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Firebase authentication and database</li>
                    <li>Google maps</li>
                    <li>Configurate webpack</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutAuthor;