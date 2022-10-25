import React from "react";
import styles from './TitleBar.module.css';

function TitleBar(props) {
    return (
        <div className={styles.outerDiv}>
            <div className={[styles.line, styles.linePre].join(' ')}></div>
            <p className={styles.title}><span className={styles.number}>{format_number(props.number)}</span> {props.title}</p>
            <div className={[styles.line, styles.linePost].join(' ')}></div>
        </div>
    );
}

function format_number(number) {
    if (number === undefined)
        number = '0';
    return String(number).padStart(2, '0') + '.';
}

export default TitleBar;