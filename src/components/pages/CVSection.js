import React from "react";
import './CVSection.css';

import SectionTitle from "../widgets/SectionTitle";

function CVSection(props) {
    return (<section>
        <div>
            <SectionTitle number='6' title="Curriculum" />
            <div className="cv-section-content">
                <p className="cv-section-text">Download a copy of my curriculum vitae in PDF format</p>
                <button>Download</button>
            </div>
        </div>
    </section>);
}

export default CVSection;