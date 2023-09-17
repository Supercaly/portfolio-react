import React from "react";
import styles from './AboutSection.module.css';
import TitleBar from "../widgets/TitleBar";
import Title from "../widgets/Title";
import Pill from "../widgets/Pill";
import image from "../../asset/about_img.JPG"
import info from "../../config/info.json";
import skills from "../../config/skills.json";

function AboutSection(props) {
    return (<section className={styles.section}>
        <div className={styles.outer}>
            <div className={[styles.avatarOut, styles.leftAvatar].join(' ')}>
                <div className={styles.avatarIn}>
                    <img className={styles.avatar} src={image} alt="avatar"/>
                </div>
            </div>
            <div className={styles.content}>
                <TitleBar number='1' title='About Me' />
                <div className={[styles.avatarOut, styles.topAvatar].join(' ')}>
                    <div className={styles.avatarIn}>
                        <img className={styles.avatar} src={image} alt="avatar" />
                    </div>
                </div>
                <p className={styles.description}>{info.about_me}</p>
                <div className={styles.skills}>
                    <Title text='Programming' />
                    <div className={styles.pills}>
                        {skills.programming.map(e => <Pill text={e} />)}
                    </div>
                    <Title text='OS' />
                    <div className={styles.pills}>
                        {skills.os.map(e => <Pill text={e} />)}
                    </div>
                    <Title text='Art' />
                    <div className={styles.pills}>
                        {skills.art.map(e => <Pill text={e} />)}
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default AboutSection;