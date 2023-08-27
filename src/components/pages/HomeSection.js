import React from "react";
import styles from './HomeSection.module.css';
import Socials from '../widgets/Socials';
import image from '../../asset/home_img.jpg'

function HomeSection(props) {
    return (<section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.first}><Socials/></div>
            <div className={styles.text}>
                <h6 className={styles.greet}>Ciao, I'm</h6>
                <h1 className={styles.name}>Lorenzo Calisti</h1>
                <h2 className={styles.subtitle}>
                    <span className={styles.boldText}>Developer</span> &amp;
                    <span className={styles.boldText}> PhD. Student </span>
                    based in Italy.</h2>
            </div>
            <div className={styles.second}><Socials orientation='horizontal'/></div>
            <div className={styles.avatarOut}>
                <div className={styles.avatarIn}>
                    <img className={styles.avatar} src={image} alt="avatar"/>
                </div>
            </div>
        </div>
    </section>);
}

export default HomeSection;