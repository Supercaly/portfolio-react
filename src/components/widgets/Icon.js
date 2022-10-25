import React from "react";
import styles from './Icon.module.css';
import FeatherIcon from 'feather-icons-react';

function Icon(props) {
    return (
        <div className={styles.icon}>
            <a className={styles.ripple} href={props.link} target="_blank" rel="noreferrer">
                <FeatherIcon icon={props.icon} />
            </a>
        </div>);
}

export default Icon;