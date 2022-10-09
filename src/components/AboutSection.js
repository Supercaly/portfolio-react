import React from "react";
import './AboutSection.css';
import about_img from '../asset/about_img.JPG';

import SectionTitle from "./SectionTitle";
import SubSectionTitle from "./SubSectionTitle";
import Pill from "./Pill";

function AboutSection(props) {
    return (<section>
        <div>
            <div className='about-section-div'>
                <div className='about-avatar-box'>
                    <div className='about-avatar-in'>
                        <div className='about-avatar'></div>
                    </div>
                </div>
                <div>
                    <SectionTitle number='1' title='About Me' />
                    <p className='about-text'>Hello, my name is Lorenzo and I’m a Developer and Computer Science student based in Monte Cerignone (PU), a little town in the center of Italy.

                        I’ve got a master's degree in Applied Computer Science from University of Urbino “Carlo Bo”.

                        When I’m not working on some project I’m probably watching a TV series, an anime or I’m riding my MTB bike.</p>
                    <div>
                        <SubSectionTitle text='Programming' />
                        <div className='pill-list'>
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                        </div>
                        <SubSectionTitle text='OS' />
                        <div className='pill-list'>
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                            <Pill text='ciao' />
                        </div>
                        <SubSectionTitle text='Art' />
                        <div className='pill-list'>
                            <Pill text='ciao' />
                            <Pill text='Embedded' />
                            <Pill text='ciao' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default AboutSection;