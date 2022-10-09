import React from "react";
import ListItem from "./ListItem";
import SectionTitle from "./SectionTitle";
import './ProjectsSection.css';
import Card from "./Card";

function ProjectsSection(props) {
    return (<section>
        <div>
            <SectionTitle number='5' title="My Projects" />
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