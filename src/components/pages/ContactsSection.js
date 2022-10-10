import React from "react";
import styles from './ContactsSection.module.css';

import TitleBar from "../widgets/TitleBar";
import Title from "../widgets/Title";
import Socials from "../widgets/Socials";

function ContactsSection(props) {
    return (<section>
        <div>
            <TitleBar number='7' title="Contact Me" />
            <div className={styles.contentBox}>
                <p className={styles.description}>If you'd like to talk about a project you want help with or chat about anything, just drop me a message by email or in my DMs.</p>
                <div className={styles.contacts}>
                    <div className={styles.contactsItem}>
                        <Title text='Email' />
                        <div className={styles.padding}>
                            <h6 className={styles.text}>l.calisti96@gmail.com</h6>
                        </div>
                    </div>
                    <div className={styles.contactsItem}>
                        <Title text='Phone' />
                        <div className={styles.padding}>
                            <h6 className={styles.text}>(+39) 331 9018150</h6>
                        </div>
                    </div>
                    <div className={styles.contactsItem}>
                        <Title text='Socials' />
                        <div className={styles.padding}>
                            <Socials orientation='horizontal' short />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>);
}

export default ContactsSection;