import React from "react";
import styles from './WorkSection.module.css';
import ListItem from "../widgets/ListItem";
import TitleBar from "../widgets/TitleBar";
import works from "../../config/works.json";

function WorkSection(props) {
    return (<section>
        <div className={styles.content}>
            <TitleBar number='3' title="Where I've worked" />
            <div className={styles.list}>
                {works.map(e => <ListItem date={e.date}
                    title={e.title}
                    subtitle={e.thing}
                    description={e.description}
                    location={e.location} />)}
            </div>
        </div>
    </section>);
}

export default WorkSection;