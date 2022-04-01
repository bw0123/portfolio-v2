import React, { useState } from 'react'

/** import { Layout, Menu } from 'antd' **/
import About from './About'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Skills from './Skills'

/** const { Header } = Layout; **/

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
    const headerStyles = {
        position: 'fixed',
        zIndex: 1,
        width: '100%',
    }

    return(
        <div>
            <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
                <div class="flex-none px-2 mx-2">
                    <span class="text-lg font-bold">
                        Sample Title
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
    <div class="flex-none">
        <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">              
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
        </svg>
        </button>
    </div> 
        <div class="flex-none">
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
                </svg>
            </button>
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