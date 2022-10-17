import React from "react";
import styles from './SchoolSection.module.css';
import ListItem from "../widgets/ListItem";
import TitleBar from "../widgets/TitleBar";

function SchoolSection(props) {
    return (<section>
        <div>
            <TitleBar number='3' title="Where I've studied" />
            <div className={styles.list}>
                <ListItem date={['27/09/2022', '12/2022']} title='Test title' />
                <ListItem date={['27/09/2022']} title='Test title' />
                <ListItem date={'27/09/2022'} title='Test title' />
                <ListItem />
            </div>
        </div>
    </section>);
}

export default SchoolSection;