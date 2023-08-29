import React from "react";
import styles from './Curriculum.module.css';
import TitleBar from "./TitleBar";
import info from "../../config/info.json";

function Curriculum(props) {
    return (
        <div className={styles.outer}>
            <TitleBar number='6' title="Curriculum" />
            <div className={styles.content}>
                <p className={styles.text}>Download a copy of my curriculum vitae in PDF format</p>
                <button className={styles.ripple} onClick={openCV}>Download</button>
            </div>
        </div>
    );
}

function openCV() {
    window.open(info.cv_path);
}

export default Curriculum;