import React from "react";
import styles from './Socials.module.css';
import Icon from "./Icon";
import socials from "../../config/socials.json";

function Socials(props) {
    let links = socials.short;
    
    if (!props.short) {
        links = links.concat(socials.extra);
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