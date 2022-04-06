import React, { useState } from 'react'
import About from './About'
import WorkExperience from './WorkExperience'
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

    const projectsSelected = () => {
        setCurrent(2);
    }

    const skillsSelected = () => {
        setCurrent(3);
    }
    
    return(
        <div>
            <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content text-xl">
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
            {current === 2 && <Projects />}
            {current === 3 && <Skills />}
        </div>
    )
}

export default SwitchSection

 {/*
            <Header style={headerStyles}>
                <Layout>
                    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1' onClick={() => aboutSelected()}>
                            About
                        </Menu.Item>
                        <Menu.Item onClick={() => experienceSelected()}>
                            Work Experience
                        </Menu.Item>
                        <Menu.Item onClick={() => projectsSelected()}>
                            Projects
                        </Menu.Item>
                        <Menu.Item onClick={() => skillsSelected()}>Skills</Menu.Item>
                    </Menu>
                </Layout>
            </Header>      
    */}