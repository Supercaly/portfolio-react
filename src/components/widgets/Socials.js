import React from "react";
import styles from './Socials.module.css';
import FeatherIcon from 'feather-icons-react';

function Socials(props) {
    let phone;
    let mail;
    if (!props.short) {
        phone = <a href="." className={styles.link}>
            <FeatherIcon icon='phone' />
        </a>;
        mail = <a href="." className={styles.link}>
            <FeatherIcon icon='mail' />
        </a>;
    }

    return (
        <div className={props.orientation === 'horizontal' ? styles.contentHorizontal : styles.content}>
            <a href="." className={styles.link}>
                <FeatherIcon icon='facebook' />
            </a>
            <a href="." className={styles.link}>
                <FeatherIcon icon='instagram' />
            </a>
            <a href="." className={styles.link}>
                <FeatherIcon icon='twitter' />
            </a>
            <a href="." className={styles.link}>
                <FeatherIcon icon='linkedin' />
            </a>
            <a href="." className={styles.link}>
                <FeatherIcon icon='github' />
            </a>
            {phone}
            {mail}
        </div>
    );

}

export default Socials;