import React from "react";
import styles from './Card.module.css';
import Icon from "./Icon";

function Card(props) {
    const htmlLinks = props.links?.map(link => {
        return <Icon link={link.link} icon={link.icon} />
    });
    const htmlTags = props.tags.map(tag => {
        return (<h6 className={styles.tag}>{tag}</h6>)
    });

    let htmlDesc;
    if (props.description !== undefined) {
        htmlDesc = <p className={styles.description}>{props.description}</p>;
    }
    let htmlBottom;
    if (htmlLinks.length > 0 || htmlTags.length > 0) {
        htmlBottom = <div className={styles.bottom}>
            {htmlLinks}
            {htmlTags}
        </div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageDiv}>
                <img className={styles.image} src="https://source.unsplash.com/random/500x500h" alt='' />
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{props.title}</h4>
                {htmlDesc}
                {htmlBottom}
            </div>
        </div>);
}

export default Card;