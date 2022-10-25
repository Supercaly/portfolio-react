import React from "react";
import styles from './WorkSection.module.css';
import ListItem from "../widgets/ListItem";
import TitleBar from "../widgets/TitleBar";
import data from "../../data.json";

function WorkSection(props) {
    return (<section>
        <div className={styles.content}>
            <TitleBar number='2' title="Where I've worked" />
            <div className={styles.list}>
                {data.work.map(e => <ListItem date={e.date}
                    title={e.title}
                    subtitle={e.thing}
                    description={e.description}
                    location={e.location} />)}
            </div>
        </div>
    </section>);
}

export default WorkSection;