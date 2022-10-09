import React from "react";
import ListItem from "./ListItem";
import SectionTitle from "./SectionTitle";
import './WorkSection.css';

function WorkSection(props) {
    return (<section>
        <div>
            <SectionTitle number='2' title="Where I've worked" />
            <div className="work-section-lists">
                <ListItem date={['27/09/2022', '12/2022']} title='Test title'/>
                <ListItem date={['27/09/2022']} title='Test title'/>
                <ListItem date={'27/09/2022'} title='Test title'/>
                <ListItem />
            </div>
        </div>
    </section>);
}

export default WorkSection;