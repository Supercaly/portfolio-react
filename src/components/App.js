import React from 'react';
import './App.css';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import SchoolSection from './SchoolSection';
import PapersSection from './PapersSection';
import ProjectsSection from './ProjectsSection';

class App extends React.Component {
    render() {
        return <main>
            <HomeSection />
            <AboutSection />
            <WorkSection />
            <SchoolSection />
            <PapersSection />
            <ProjectsSection />
        </main>;
    }
}

export default App;