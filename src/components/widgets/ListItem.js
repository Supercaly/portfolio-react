import React from "react";
import Badge from "./Badge";
import styles from './ListItem.module.css';

function ListItem(props) {
    let listLocation;
    if (props.location) {
        listLocation = <ul className={styles.location}>
            <li>{props.location}</li>
        </ul>;
    }

    return (<div className={styles.container}>
        <Badge text={props.date} />
        <div className={styles.content}>
            <h4 className={styles.title}>{props.title}</h4>
            <h4 className={styles.subtitle}>{props.subtitle}</h4>
            <h6 className={styles.description}>{props.description}</h6>
            {listLocation}
        </div>
    </div>);
}

export default ListItem;