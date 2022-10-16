import React from "react";
import styles from './Socials.module.css';
import Icon from "./Icon";

function Socials(props) {
    const links = [
        {
            link: '#',
            icon: 'facebook'
        },
        {
            link: '#',
            icon: 'instagram'
        },
        {
            link: '#',
            icon: 'twitter'
        }, {

            link: '#',
            icon: 'linkedin'
        },
        {
            link: '#',
            icon: 'github'
        },
    ]

    if (!props.short) {
        links.push({
            link: '#',
            icon: 'phone'
        });
        links.push({
            link: '#',
            icon: 'mail'
        });
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