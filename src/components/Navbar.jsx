import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    /**
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
    **/
    return(
        <div>
            <div class="navbar shadow-lg bg-neutral text-neutral-content text-xl">
                <div class="flex-1 px-2 mx-2">
                    <div class="items-stretch hidden lg:flex">
                        <Link to='/' class="btn btn-ghost btn-sm rounded-btn">
                           Home
                        </Link>
                        <Link to='/experience' class="btn btn-ghost btn-sm rounded-btn">  {/* onClick={() => experienceSelected()} /> */}
                            Experience
                        </Link>
                        <Link to='/education' class="btn btn-ghost btn-sm rounded-btn"> {/* onClick={() => educationSelected()} /> */}
                            Education
                        </Link>
                        <Link to='/projects' class="btn btn-ghost btn-sm rounded-btn"> {/* onClick={() => projectsSelected()} /> */}
                            Projects
                        </Link>
                        <Link to='/skills' class="btn btn-ghost btn-sm rounded-btn">  {/* onClick={() => skillsSelected()} /> */}
                            Skills
                        </Link>
                    </div>
                </div> 
            </div>
            {/*
            {current === 0 && <Home />}
            {current === 1 && <WorkExperience />}
            {current === 2 && <Education />}
            {current === 3 && <Projects />}
            {current === 4 && <Skills />}
            */}
        </div>
    )
}

export default Navbar