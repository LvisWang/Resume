// App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Career from './components/CaseStudy';
import Now from './components/Now';
import Others from './components/Others'


const App = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Experience />
            <Education />
            <Career />
            <Others/>
            <Now />
        </div>
    );
};

export default App;