import React from "react";
import styles from './CVSection.module.css';

import TitleBar from "../widgets/TitleBar";

function CVSection(props) {
    return (<section>
        <div>
            <TitleBar number='6' title="Curriculum" />
            <div className={styles.content}>
                <p className={styles.text}>Download a copy of my curriculum vitae in PDF format</p>
                <button className={styles.ripple}>Download</button>
            </div>
        </div>
    </section>);
}

export default CVSection;