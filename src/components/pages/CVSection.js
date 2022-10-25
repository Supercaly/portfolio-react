import React from "react";
import styles from './CVSection.module.css';
import TitleBar from "../widgets/TitleBar";
import {storage} from "../../firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

function CVSection(props) {
    return (<section>
        <div className={styles.outer}>
            <TitleBar number='6' title="Curriculum" />
            <div className={styles.content}>
                <p className={styles.text}>Download a copy of my curriculum vitae in PDF format</p>
                <button className={styles.ripple} onClick={downloadCV}>Download</button>
            </div>
        </div>
    </section>);
}

async function downloadCV() {
    const cvRef = ref(storage, "gs://lcalisti.appspot.com/curriculum.pdf");
    const cvLink = await getDownloadURL(cvRef);
    window.open(cvLink);
}

export default CVSection;