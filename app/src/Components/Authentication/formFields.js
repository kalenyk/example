import React from "react";

import styles from "../../styles/form.less";

export const field = ({input, label, type, meta: {touched, error}}) => (
    <div>

        <input {...input} placeholder={label} type={type}
            aria-describedby={"help-block_" + label}/>
        {touched && (error && <div className={styles.error} id={"help-block_" + label}>{error}</div>)}
    </div>
);