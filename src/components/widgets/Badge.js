import React from "react";
import styles from './Badge.module.css';

function Badge(props) {
    return (<div className={styles.box}>
        <h6 className={styles.text}>{props.text}</h6>
    </div>);
}

export default Badge;