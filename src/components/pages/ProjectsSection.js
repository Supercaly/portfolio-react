import React from "react";
import './ProjectsSection.css';

import TitleBar from "../widgets/TitleBar";
import Card from "../widgets/Card";

function ProjectsSection(props) {
    return (<section className="projects-section">
        <div>
            <TitleBar number='5' title="My Projects" />
            <div className="projects-section-lists">
                <Card date={['27/09/2022', '12/2022']} title='Test title' />
                <Card date={['27/09/2022']} title='Test title' />
                <Card date={'27/09/2022'} title='Test title' />
                <Card />
                <Card />
            </div>
        </div>
    </section>);
}

export default ProjectsSection;