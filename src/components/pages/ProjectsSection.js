import React from "react";
import styles from './ProjectsSection.module.css';
import TitleBar from "../widgets/TitleBar";
import Card from "../widgets/Card";

function ProjectsSection(props) {
    return (<section className={styles.projectsSection}>
        <div>
            <TitleBar number='5' title="My Projects" />
            <div className={styles.list}>
                <Card tags={['aa']} links={[]} description='ciao' date={['27/09/2022', '12/2022']} title='Test title' />
                <Card tags={[]} links={[{ link: '#', icon: 'play' }]} date={['27/09/2022']} title='Test title' />
                <Card tags={[]} links={[]} date={'27/09/2022'} title='Test title' />
                <Card tags={[]} links={[]} />
                <Card tags={[]} links={[]} />
            </div>
        </div>
    </section>);
}

export default ProjectsSection;