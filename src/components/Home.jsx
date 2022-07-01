import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import bluehome from '../components/images/bluehome.jpg'

function Home() {  
    return(
        <div class='h-screen bg-cover bg-no-repeat bg-center'>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md"></div>
                    <h1 class="mb-5 mt-12 text-5xl font-bold">Hello there, I'm Britney Wu</h1>
                        <p className='text-lg p-12'>
                        I am currently looking for internships in the field of Web Development or IT. Becoming a Full-Stack Developer is my goal because I enjoy the creative process of planning the layout of websites and using code to make it functional. I look forward to learning frameworks, technologies, and improving my current skillset. In the process of this search, I am pursuing a Bachelors of Science degree in Computer Science at John Jay College.
                        </p>
            </div>
                <div className='flex justify-center p-5 gap-x-2'>
                    <div>
                        <a href='https://www.linkedin.com/in/britneywu01/' target='_blank' rel='noreferrer'>
                            <button class="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">   
                                <FaLinkedin />
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/bw0123' target='_blank' rel='noreferrer'>
                            <button class="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                                <FaGithub />
                            </button>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Home