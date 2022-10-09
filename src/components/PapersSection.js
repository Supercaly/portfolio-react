import React from "react";
import ListItem from "./ListItem";
import SectionTitle from "./SectionTitle";
import './PapersSection.css';

function PapersSection(props) {
    return (<section>
        <div>
            <SectionTitle number='4' title="Publications" />
            <div className="papers-section-lists">
                <ListItem date={['27/09/2022', '12/2022']} title='Test title'/>
                <ListItem date={['27/09/2022']} title='Test title'/>
                <ListItem date={'27/09/2022'} title='Test title'/>
                <ListItem />
            </div>
        </div>
    </section>);
}

export default PapersSection;