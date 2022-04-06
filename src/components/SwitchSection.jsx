import React, { useState } from 'react'
import About from './About'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

function SwitchSection() {
    const [current, setCurrent] = useState(0);

    const aboutSelected = () => {
        setCurrent(0);
    }

    const experienceSelected = () => {
        setCurrent(1);
    }

    const educationSelected = () => {
        setCurrent(2);
    }

    const projectsSelected = () => {
        setCurrent(3);
    }

    const skillsSelected = () => {
        setCurrent(4);
    }

    return(
        <div>
            <div class="navbar shadow-lg bg-neutral text-neutral-content text-xl">
                <div class="flex-none px-2 mx-2">
                    <span class="font-bold">
                        Britney Wu
                    </span>
                </div> 
                <div class="flex-1 px-2 mx-2">
                    <div class="items-stretch hidden lg:flex">
                        <a class="btn btn-ghost btn-sm rounded-btn" onClick={() => aboutSelected()}>
                            About
                        </a> 
                        <a class="btn btn-ghost btn-sm rounded-btn" onClick={() => experienceSelected()}>
                            Experience
                        </a> 
                        <a class="btn btn-ghost btn-sm rounded-btn" onClick={() => educationSelected()}>
                            Education
                        </a> 
                        <a class="btn btn-ghost btn-sm rounded-btn" onClick={() => projectsSelected()}>
                            Projects
                        </a> 
                        <a class="btn btn-ghost btn-sm rounded-btn" onClick={() => skillsSelected()}>
                            Skills
                        </a>
                    </div>
                </div> 
            </div>
            {current === 0 && <About />}
            {current === 1 && <WorkExperience />}
            {current === 2 && <Education />}
            {current === 3 && <Projects />}
            {current === 4 && <Skills />}
        </div>
    )
}

export default SwitchSection