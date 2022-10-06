import React from 'react';
import './App.css';
import Socials from './Socials'
import home_img from '../asset/home_img.jpeg';

class App extends React.Component {
    render() {
        return <main>
            <section >
                <div className='row'>
                    <Socials />
                    <div className='home-content'>
                        <h6 className='home-greet'>Ciao, I'm</h6>
                        <h1 className='home-name'>Lorenzo Calisti</h1>
                        <h2 className='home-subtitle'>Developer &amp; Computer Science student based in Italy.</h2>
                    </div>
                    <div className='home-avatar-box'>
                        <div className='home-avatar-in'>
                            <img className='home-avatar' src={home_img} alt="home avatar" />
                        </div>
                    </div>
                </div>
            </section>
        </main>;
    }
}

export default App;