import React from "react";
import styles from './PapersSection.module.css';
import PaperItem from "../widgets/PaperItem";
import TitleBar from "../widgets/TitleBar";
import papers from "../../config/papers.json";

function PapersSection(props) {
    return (<section>
        <div className={styles.content}>
            <TitleBar number='4' title="Publications" />
            <div className={styles.list}>
                {papers.map(e => <PaperItem
                    authors={e.author}
                    title={e.title}
                    journal={e.journal}
                    doi={e.doi}
                    date={e.date}
                    tags={e.tags} 
                    onClick={() => window.open(e.link)}/>)}
            </div>
        </div>
    </section>);
}

export default PapersSection;