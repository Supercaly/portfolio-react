import React from 'react';
import './App.css';

import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import WorkSection from './pages/WorkSection';
import SchoolSection from './pages/SchoolSection';
import PapersSection from './pages/PapersSection';
import ProjectsSection from './pages/ProjectsSection';
import FooterSection from './pages/FooterSection';
import MoreInfoSection from './pages/MoreInfoSection';

class App extends React.Component {
    render() {
        return <main>
            <HomeSection />
            <AboutSection />
            <SchoolSection />
            <WorkSection />
            <PapersSection />
            <ProjectsSection />
            <MoreInfoSection />
            <FooterSection />
        </main>;
    }
}

export default App;