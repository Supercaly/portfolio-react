import React from "react";
import './HomeSection.css';

import Socials from '../widgets/Socials';

function HomeSection(props) {
    return (<section>
        <div className='home-section-div'>
            <div className='home-section-content'>
                <div className="home-section-texts">
                    <h6 className='home-section-greet'>Ciao, I'm</h6>
                    <h1 className='home-section-name'>Lorenzo Calisti</h1>
                    <h2 className='home-section-subtitle'>Developer &amp; Computer Science student based in Italy.</h2>
                </div>
                <Socials />
                <div className="home-avatar-div">
                    <div className='home-avatar-box'>
                        <div className="home-avatar-in">
                            <div className='home-avatar' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default HomeSection;