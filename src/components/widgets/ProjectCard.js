import React from "react";
import styles from './ProjectCard.module.css';
import Icon from "./Icon";
import Pill from "./Pill";

function ProjectCard(props) {
    const htmlLinks = props.links?.map(link => {
        return <Icon link={link.link} icon={link.icon} />
    });
    const htmlTags = props.tags?.map(tag => {
        return (<Pill text={tag} />)
    });

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.title}>{props.title}</h4>
                <p className={styles.description}>{(props.description !== undefined) 
                    ? props.description 
                    : ""}</p>
                <div className={styles.linksDiv}>
                    {htmlLinks}
                </div>
                <div className={styles.tagsDiv}>
                    {htmlTags}
                </div>
            </div>
        </div>);
}

export default ProjectCard;