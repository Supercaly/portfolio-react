import React from "react";
import styles from './Badge.module.css';

function Badge(props) {
    if (!Array.isArray(props.text)) {
        throw Error('badge dates must be an array of dates')
    }
    if (props.text.length == 0 || props.text.length > 2) {
        throw Error('badge dates array must have one or two elements')
    }
    let dates_txt = props.text.join(' - ')
    let margin = props.text.length == 1 ? 60: 0
    return (<div className={styles.box} style={{marginRight: margin+'px'}}>
        <h6 className={styles.text}>{dates_txt}</h6>
    </div>);
}

export default Badge;