import React from "react";
import styles from './Title.module.css';

function Title(props) {
    return (
        <div className={styles.outer}>
            <div className={styles.line}></div>
            <h3 className={styles.text}>{props.text}</h3>
        </div>
    );
}


export default Title;