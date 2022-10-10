import React from "react";
import './PapersSection.css';

import ListItem from "../widgets/ListItem";
import TitleBar from "../widgets/TitleBar";

function PapersSection(props) {
    return (<section>
        <div>
            <TitleBar number='4' title="Publications" />
            <div className="papers-section-lists">
                <ListItem date={['27/09/2022', '12/2022']} title='Test title' />
                <ListItem date={['27/09/2022']} title='Test title' />
                <ListItem date={'27/09/2022'} title='Test title' />
                <ListItem />
            </div>
        </div>
    </section>);
}

export default PapersSection;