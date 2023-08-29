import React from "react";
import styles from './Contacts.module.css';
import TitleBar from "./TitleBar";
import Title from "./Title";
import Socials from "./Socials";
import info from '../../config/info.json';

function ContactsSection(props) {
    return (<div>
        <div className={styles.content}>
            <TitleBar number='7' title="Contact Me" />
            <div className={styles.contentBox}>
                <p className={styles.description}>If you'd like to talk about a project you want help with or chat about anything, just drop me a message by email or in my DMs.</p>
                <div className={styles.contacts}>
                    <div className={styles.contactsItem}>
                        <Title text='Email' />
                        <div className={styles.padding}>
                            <h6 className={styles.text}>{info.mail}</h6>
                        </div>
                    </div>
                    <div className={styles.contactsItem}>
                        <Title text='Phone' />
                        <div className={styles.padding}>
                            <h6 className={styles.text}>{info.phone}</h6>
                        </div>
                    </div>
                    <div className={styles.contactsItem}>
                        <Title text='Socials' />
                        <div className={styles.padding}>
                            <Socials orientation='horizontal' short/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>);
}

export default ContactsSection;