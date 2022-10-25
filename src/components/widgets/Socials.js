import React from "react";
import styles from './Socials.module.css';
import Icon from "./Icon";

function Socials(props) {
    let links = props.social.short;
    
    if (!props.short) {
        links = links.concat(props.social.extra);
    }
    
    const htmlLinks = links.map(link => {
        return (
            <Icon icon={link.icon} link={link.link} />
        );
    });

    return (
        <div className={[styles.content, props.orientation === 'horizontal'
            ? styles.horizontal
            : styles.vertical].join(' ')}>
            {htmlLinks}
        </div>
    );

}

export default Socials;