import React from "react";
import styles from './ProjectsSection.module.css';
import TitleBar from "../widgets/TitleBar";
import Card from "../widgets/Card";
import projects from "../../config/projects.json";

function ProjectsSection(props) {
    return (<section className={styles.projectsSection}>
        <div className={styles.content}>
            <TitleBar number='5' title="My Projects" />
            <div className={styles.list}>
                {projects.map(e =>
                    <Card
                        title={e.title}
                        tags={e.tags}
                        links={e.links}
                        description={e.description}
                        image={e.image}
                    />)}
            </div>
        </div>
    </section>);
}

export default ProjectsSection;