import React from "react";
import styles from './PapersSection.module.css';
import PaperItem from "../widgets/PaperItem";
import TitleBar from "../widgets/TitleBar";

function PapersSection(props) {
    return (<section>
        <div>
            <TitleBar number='4' title="Publications" />
            <div className={styles.list}>
                <PaperItem title='Test title'
                    authors={['io', 'lui', 'l']}
                    journal='li'
                    doi='123'
                    tags={[1, 2, 3, 4]} />
                <PaperItem title='Test title' />
                <PaperItem title='Test title' />
                <PaperItem />
            </div>
        </div>
    </section>);
}

export default PapersSection;