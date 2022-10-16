import React from "react";
import styles from './Badge.module.css';

function Badge(props) {
    return (<div className={styles.box}>
        <h6 className={styles.text}>{formatDate(props.text)}</h6>
    </div>);
}

function formatDate(dates) {
    if (Array.isArray(dates)) {
        return dates.join(' - ');
    }
    return dates;
}

export default Badge;