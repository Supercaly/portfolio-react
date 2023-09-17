import React from "react";
import styles from "./MoreInfoSection.module.css";
import Curriculum from "../widgets/Curriculum";
import Contacts from "../widgets/Contacts";

function MoreInfoSection(props) {
    return (<section>
        <div className={styles.content}>
            <Curriculum />
            <Contacts />
        </div>
    </section>);
}

export default MoreInfoSection;