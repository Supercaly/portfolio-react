import React from "react";
import styles from './Pill.module.css';

function Pill(props) {
    return <div className={styles.box}>
        <h6 className={styles.text}>{props.text}</h6>
    </div>;
}

export default Pill;
