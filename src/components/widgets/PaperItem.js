import React from "react";
import styles from './PaperItem.module.css';
import FeatherIcon from 'feather-icons-react';

function PaperItem(props) {
    return (<div className={styles.container} onClick={props.onClick}>
        <Mark />
        <div className={styles.content}>
            <h4 className={styles.title}>{props.title}</h4>
            <h6 className={styles.description}>{formatList(props.authors, ', ')}</h6>
            <h6 className={styles.description2}>{props.date}</h6>
            <h6 className={styles.description2}>{props.journal}</h6>
            <h6 className={styles.description2}>{props.doi}</h6>
            <h6 className={styles.description2}>{formatList(props.tags, ', ')}</h6>
        </div>
    </div>);
}

function formatList(list, sep) {
    if (Array.isArray(list)) {
        return list.join(sep);
    }
    return list;
}

function Mark(props) {
    return (<div className={styles.mark}>
        <FeatherIcon icon='award' />
    </div>);
}

export default PaperItem;