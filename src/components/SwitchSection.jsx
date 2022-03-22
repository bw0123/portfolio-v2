import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import About from './About'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Skills from './Skills'

const { SubMenu } = Menu;
const { Header } = Layout;

function SwitchSection() {
    const [current, setCurrent] = useState(0);

    const aboutSelected = () => {
        setCurrent(0);
    }

    const workExperienceSelected = () => {
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
            <Header style={headerStyles}>
                <Layout>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={() => aboutSelected()}>
                            About
                        </Menu.Item>
                        <Menu.Item onClick={() => workExperienceSelected()}>
                            Work Experience
                        </Menu.Item>
                        <SubMenu onClick={() => projectsSelected()} title="Projects">
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:1">Venue Page</Menu.Item>
                                <Menu.Item key="setting:1">Feedback App</Menu.Item>
                                <Menu.Item key="setting:1">Budgeting App</Menu.Item>
                                <Menu.Item key="setting:1">Delicious Travels</Menu.Item>
                                <Menu.Item key="setting:1">Number Guessing Game</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item onClick={() => skillsSelected()}>Skills</Menu.Item>
                    </Menu>
                </Layout>
            </Header>
                {current === 0 && <About />}
                {current === 1 && <WorkExperience />}
                {current === 2 && <Projects />}
                {current === 3 && <Skills />}

        </div>
    )
}

export default SwitchSection