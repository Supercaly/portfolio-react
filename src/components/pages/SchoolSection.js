import React from "react";
import styles from './SchoolSection.module.css';
import ListItem from "../widgets/ListItem";
import TitleBar from "../widgets/TitleBar";
import data from "../../data.json";

function SchoolSection(props) {
    return (<section>
        <div className={styles.content}>
            <TitleBar number='3' title="Where I've studied" />
            <div className={styles.list}>
                {data.study.map(e => <ListItem date={e.date}
                    title={e.title}
                    subtitle={e.subtitle}
                    description={e.description}
                    location={e.location} />)}
            </div>
        </div>
    </section>);
}

export default SchoolSection;